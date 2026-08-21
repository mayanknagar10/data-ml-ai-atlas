import json, pathlib, re, py_compile
ROOT=pathlib.Path(__file__).resolve().parent
source=json.loads((ROOT/'source/atlas.json').read_text(encoding='utf-8'))
need=['why','intuition','deepDive','workedExample','commonMistakes','followUps','production']
slugs=[x['slug'] for x in source['lessons']]
assert len(slugs)==len(set(slugs)), 'Duplicate lesson slugs'
mods={m['slug'] for m in source['modules']}

# Breadth guardrails: this atlas is intentionally broader than AI engineering.
from collections import Counter
module_counts=Counter(l['module'] for l in source['lessons'])
minimum_coverage={
    'stat-inference':10,'regression-glm':8,'experimentation':8,'causal':8,
    'time-series':15,'recsys':8,'ir':7,'data-eng':7,'distributed':6,
    'survival':4,'optimization':5,'eda-viz':6,'bayesian':6,
    'info-theory':5,'probabilistic-ml':8,'learning-theory':5,'data-mining':6,'geospatial':6,
    'transformers':8,'mlops':12,
}
for mod,n in minimum_coverage.items():
    assert module_counts[mod] >= n, f'{mod} coverage regressed: {module_counts[mod]} < {n}'
assert len(source['lessons']) >= 380, 'General curriculum unexpectedly shrank below 300 lessons'
refs=set(source['resources'])
for rid,r in source['resources'].items():
    assert r['url'].startswith('https://'), (rid,r['url'])
    for key in ['title','provider','kind','why','level']:
        assert str(r.get(key,'')).strip(), (rid,key)
lab_count=0
for l in source['lessons']:
    assert l['module'] in mods, l['slug']
    assert l['priority'] in {'very-high','high','medium'}, l['slug']
    assert l['interviewAnswer'].strip(), l['slug']
    assert l['keyPoints'], l['slug']
    for k in need:
        assert l.get(k), f"{l['slug']} missing {k}"
    assert len(l['commonMistakes'])>=2, l['slug']
    assert len(l['followUps'])>=2, l['slug']
    for r in l['resources']:
        assert r in refs, (l['slug'],r)
    if l.get('lab'):
        lab_count+=1
        for k in ['goal','language','buildIt','useIt','verifyIt']:
            assert str(l['lab'].get(k,'')).strip(), f"{l['slug']} lab missing {k}"
        d=ROOT/'labs'/l['slug']
        for f in ['index.html','README.md','build_it.py','use_it.py','ship_it.md','verify_it.py','lab.py']:
            assert (d/f).exists(), f"{l['slug']} generated lab missing {f}"
        py_compile.compile(str(d/'lab.py'), doraise=True)

# Visual coverage and schema guardrails.
supported_visuals={'flow','layers','curve','scatter','bars','matrix','network','schema','compare','concept-map','funnel','map'}
visual_count=0
for l in source['lessons']:
    v=l.get('visual')
    if l['priority']=='very-high': assert v, f"{l['slug']} is very-high priority but has no visual model"
    if not v: continue
    visual_count+=1
    assert v.get('type') in supported_visuals, (l['slug'],v.get('type'))
    assert str(v.get('title','')).strip() and str(v.get('caption','')).strip(), f"{l['slug']} visual missing title/caption"
    typ=v['type']
    if typ in {'flow','layers','concept-map','funnel'}: assert v.get('items'), f"{l['slug']} visual missing items"
    if typ in {'curve','scatter'}: assert v.get('series'), f"{l['slug']} visual missing series"
    if typ=='bars': assert v.get('labels') and v.get('values'), f"{l['slug']} bars missing data"
    if typ=='matrix': assert v.get('rows') and v.get('cols') and v.get('cells'), f"{l['slug']} matrix missing data"
    if typ=='network': assert v.get('nodes') and v.get('edges'), f"{l['slug']} network missing nodes/edges"
    if typ=='schema': assert v.get('center') and v.get('satellites'), f"{l['slug']} schema missing center/satellites"
    if typ=='compare': assert v.get('left') and v.get('right'), f"{l['slug']} compare missing sides"
assert visual_count >= 200, f'Visual coverage regressed: {visual_count} < 200'

# Generated data.js must match source after status normalization.
text=(ROOT/'data.js').read_text(encoding='utf-8')
m=re.search(r'const ATLAS = (.*);\s*$', text, re.S)
assert m, 'Could not parse data.js'
built=json.loads(m.group(1))
expected=json.loads(json.dumps(source))
for l in expected['lessons']: l['status']='deep-complete'
assert built==expected, 'Generated data.js is stale; run python scripts/build.py'
book=(ROOT/'book.html').read_text(encoding='utf-8')
for slug in slugs:
    assert f'id="lesson-{slug}"' in book, f'book.html missing {slug}'
assert 'bookTheme' in book and 'data-theme="dark"' in book, 'book dark mode missing'
assert book.count('class="concept-visual"') >= visual_count, 'book visual rendering is stale'
index=(ROOT/'index.html').read_text(encoding='utf-8')
assert '#/labs' in index and '#/analyzer' in index and 'prefers-color-scheme: dark' in index, 'main site navigation/theme missing'
assert (ROOT/'analyzer.js').exists(), 'analyzer.js missing'
assert 'AtlasAnalyzer' in (ROOT/'app.js').read_text(encoding='utf-8'), 'Resume + JD analyzer wiring missing'
assert (ROOT/'LESSON_TEMPLATE.md').exists(), 'LESSON_TEMPLATE.md missing'
assert (ROOT/'COVERAGE.md').exists(), 'COVERAGE.md missing'
assert (ROOT/'requirements-labs.txt').exists(), 'requirements-labs.txt missing'
print(f"OK: {len(source['lessons'])} deep-complete lessons, {len(source['modules'])} modules, {lab_count} runnable labs, {visual_count} visuals, {len(source['resources'])} curated resources")

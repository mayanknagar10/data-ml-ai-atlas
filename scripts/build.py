from __future__ import annotations

import html
import json
from pathlib import Path
from collections import Counter

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'source' / 'atlas.json'

DEEP_FIELDS = ['why','intuition','deepDive','workedExample','commonMistakes','followUps','production']

def deep_ready(lesson: dict) -> bool:
    return all(lesson.get(k) for k in DEEP_FIELDS)

def normalize(data: dict) -> dict:
    for lesson in data['lessons']:
        lesson['status'] = 'deep-complete' if deep_ready(lesson) else 'interview-ready'
    return data

def write_data_js(data: dict):
    text = 'const ATLAS = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n'
    (ROOT / 'data.js').write_text(text, encoding='utf-8')

def write_curriculum_json(data: dict):
    slim = {
        'modules': data['modules'],
        'lessons': [
            {k:v for k,v in l.items() if k not in {'why','intuition','deepDive','math','code','lab','commonMistakes','followUps','production','workedExample'}}
            for l in data['lessons']
        ]
    }
    (ROOT / 'curriculum.json').write_text(json.dumps(slim, ensure_ascii=False, indent=2), encoding='utf-8')

def write_resources_json(data: dict):
    (ROOT / 'resources.json').write_text(json.dumps(data['resources'], ensure_ascii=False, indent=2), encoding='utf-8')

def write_curriculum_md(data: dict):
    lines = ['# Data, ML & AI Atlas — Curriculum', '', f"**{len(data['modules'])} modules · {len(data['lessons'])} topics · {len(data['resources'])} curated resources**", '']
    for idx, module in enumerate(data['modules'], 1):
        lessons=[l for l in data['lessons'] if l['module']==module['slug']]
        deep=sum(deep_ready(l) for l in lessons)
        visual_count=sum(bool(l.get('visual')) for l in lessons)
        lines += [f"## {idx:02d}. {module['icon']} {module['title']}", '', module['description'], '', f"Deep-complete: **{deep}/{len(lessons)}** · Visual models: **{visual_count}/{len(lessons)}**", '']
        for l in lessons:
            p={'very-high':'🔥','high':'⬆️','medium':'•'}.get(l['priority'],'•')
            status='✅ deep' if deep_ready(l) else '◻ interview-ready'
            visual=' · 🖼 visual' if l.get('visual') else ''
            lines.append(f"- {p} **{l['title']}** — {status}{visual}")
        lines.append('')
    (ROOT / 'CURRICULUM.md').write_text('\n'.join(lines)+'\n', encoding='utf-8')

def res_cards(data, ids):
    out=[]
    for rid in ids:
        r=data['resources'].get(rid)
        if not r: continue
        out.append(f'''<li class="ref-card"><a href="{html.escape(r['url'])}" target="_blank" rel="noopener"><strong>{html.escape(r['title'])}</strong></a><span>{html.escape(r['provider'])} · {html.escape(r['kind'])} · {html.escape(r['level'])}</span><p>{html.escape(r['why'])}</p></li>''')
    return ''.join(out)

def render_lab(lesson: dict) -> str:
    lab=lesson.get('lab')
    if not lab: return ''
    esc=html.escape
    return f'''<section class="code-lab"><div class="lab-head"><div><div class="eyebrow">RUNNABLE CODE LAB</div><h3>Build it → Use it → Ship it → Verify it</h3><p>{esc(lab.get('goal',''))}</p></div><a class="lab-link" href="labs/{esc(lesson['slug'])}/index.html">Open lab files</a></div>
    <div class="code-step"><div class="code-title"><span>1 · Build it</span><em>from first principles</em></div><pre><code>{esc(lab['buildIt'])}</code></pre></div>
    <div class="code-step"><div class="code-title"><span>2 · Use it</span><em>library / production-style API</em></div><pre><code>{esc(lab['useIt'])}</code></pre></div>
    <div class="ship-step"><div class="code-title"><span>3 · Ship it</span><em>engineering artifact / production context</em></div><p>{esc(lab.get('shipIt') or lesson.get('production','Turn this into a tested module with explicit inputs, outputs and failure handling.'))}</p></div>
    <div class="code-step"><div class="code-title"><span>4 · Verify it</span><em>sanity checks / assertions</em></div><pre><code>{esc(lab['verifyIt'])}</code></pre></div></section>'''

def write_labs(data: dict):
    root=ROOT/'labs'
    if root.exists():
        import shutil
        for child in root.iterdir():
            if child.is_dir(): shutil.rmtree(child)
            else: child.unlink()
    root.mkdir(exist_ok=True)
    index=['# Data, ML & AI Atlas — Runnable Labs','', 'These labs are generated from `source/atlas.json`. Edit the source, then run `python scripts/build.py`.','']
    for l in data['lessons']:
        lab=l.get('lab')
        if not lab: continue
        d=root/l['slug']; d.mkdir(parents=True,exist_ok=True)
        build_code = lab['buildIt'].rstrip() + '\n'
        # Generated files are standalone: Use/Verify include the tiny setup from Build It.
        use_code = build_code + '\n# ---- Use it ----\n' + lab['useIt'].rstrip() + '\n'
        verify_code = use_code + '\n# ---- Verify it ----\n' + lab['verifyIt'].rstrip() + '\n'
        combined = build_code + '\n# ---- Use it ----\n' + lab['useIt'].rstrip() + '\n\n# ---- Verify it ----\n' + lab['verifyIt'].rstrip() + '\n'
        ship = lab.get('shipIt') or l.get('production','Turn this into a tested module with explicit inputs, outputs and failure handling.')
        (d/'build_it.py').write_text(build_code,encoding='utf-8')
        (d/'use_it.py').write_text(use_code,encoding='utf-8')
        (d/'verify_it.py').write_text(verify_code,encoding='utf-8')
        (d/'lab.py').write_text(combined,encoding='utf-8')
        (d/'ship_it.md').write_text('# Ship it\n\n' + ship + '\n', encoding='utf-8')
        page=f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{html.escape(l['title'])} — Code Lab</title><script>(()=>{{const s=localStorage.getItem('atlas-theme');const t=s||((matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light');document.documentElement.dataset.theme=t}})()</script><style>:root{{--bg:#fff;--text:#121417;--muted:#5d6470;--line:#dfe3e8;--soft:#f6f7f8;--blue:#155eef;--code:#0d1117;color-scheme:light}}html[data-theme=dark]{{--bg:#0d1117;--text:#eef2f6;--muted:#a8b0ba;--line:#2b333d;--soft:#171d24;--blue:#8fb4ff;--code:#070a0e;color-scheme:dark}}*{{box-sizing:border-box}}body{{margin:0;background:var(--bg);color:var(--text);font:15px/1.6 Inter,system-ui,sans-serif}}main{{max-width:980px;margin:auto;padding:44px 22px 80px}}a{{color:var(--blue)}}h1{{font-size:42px;line-height:1.05;margin:8px 0 12px}}.k{{font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:var(--blue);font-weight:800}}.lead{{color:var(--muted);font-size:17px}}.top{{display:flex;justify-content:space-between;gap:16px}}button{{border:1px solid var(--line);background:var(--soft);color:var(--text);border-radius:8px;padding:7px 9px;cursor:pointer}}section{{border-top:1px solid var(--line);padding-top:22px;margin-top:26px}}pre{{background:var(--code);color:#e6edf3;padding:18px;border-radius:12px;overflow:auto;font:13px/1.55 ui-monospace,monospace}}.links{{display:flex;gap:12px;flex-wrap:wrap;margin:18px 0}}.links a{{border:1px solid var(--line);border-radius:8px;padding:7px 9px;text-decoration:none;font-size:12px}}@media(max-width:600px){{h1{{font-size:34px}}.top{{display:block}}}}</style></head><body><main><div class="top"><div><div class="k">Data, ML & AI Atlas · Runnable Lab</div><h1>{html.escape(l['title'])}</h1></div><button id="t">◐ Theme</button></div><p class="lead">{html.escape(lab.get('goal',''))}</p><div class="links"><a href="../../index.html#/lesson/{html.escape(l['slug'])}">← Full lesson</a><a href="lab.py">Combined Python file</a><a href="README.md">README</a></div><section><h2>1 · Build it</h2><p>Minimal implementation with as little framework abstraction as practical.</p><pre>{html.escape(lab['buildIt'])}</pre></section><section><h2>2 · Use it</h2><p>The same idea through a common library or practical API.</p><pre>{html.escape(lab['useIt'])}</pre></section><section><h2>3 · Ship it</h2><p>{html.escape(ship)}</p></section><section><h2>4 · Verify it</h2><p>Assertions and sanity checks that catch conceptual or implementation mistakes.</p><pre>{html.escape(lab['verifyIt'])}</pre></section></main><script>const b=document.getElementById('t');function u(){{b.textContent=document.documentElement.dataset.theme==='dark'?'☀ Light':'☾ Dark'}}u();b.onclick=()=>{{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;localStorage.setItem('atlas-theme',n);u()}}</script></body></html>'''
        (d/'index.html').write_text(page,encoding='utf-8')
        readme=f'''# {l['title']} — Code Lab

{lab.get('goal','')}

## 1. Build it

Start with `build_it.py` to understand the mechanism with minimal abstraction.

## 2. Use it

Then open `use_it.py` to see the same idea through a library or production-oriented interface.

## 3. Ship it

Use `ship_it.md` to connect the learning artifact to a production/system-design decision.

## 4. Verify it

Run `verify_it.py` for sanity checks. These examples are intentionally small learning artifacts; check each file's imports and hardware requirements before running.

```bash
python build_it.py
python use_it.py
python verify_it.py
```

Return to the website lesson for the interview answer, theory, mistakes and production context.
'''
        (d/'README.md').write_text(readme,encoding='utf-8')
        index.append(f"- [{l['title']}]({l['slug']}/index.html)")
    (root/'README.md').write_text('\n'.join(index)+'\n',encoding='utf-8')

def _svg_wrap(text, x, y, max_chars=18, anchor='middle', cls='viz-text'):
    words=str(text).split(); lines=['']
    for w in words:
        cand=(lines[-1]+' '+w).strip()
        if len(cand)>max_chars and lines[-1]: lines.append(w)
        else: lines[-1]=cand
    start=y-((len(lines)-1)*7)
    tsp=[]
    for i,line in enumerate(lines):
        tsp.append(f'<tspan x="{x}" dy="{14 if i else 0}">{html.escape(line)}</tspan>')
    return f'<text x="{x}" y="{start}" text-anchor="{anchor}" class="{cls}">{"".join(tsp)}</text>'

def render_visual(lesson: dict) -> str:
    v=lesson.get('visual')
    if not v: return ''
    title=html.escape(v.get('title') or lesson.get('title','Visual'))
    caption=html.escape(v.get('caption','Conceptual illustration.'))
    colors=['var(--viz-1)','var(--viz-2)','var(--viz-3)','var(--viz-4)']
    marker='arrow-'+lesson.get('slug','visual').replace('_','-')
    arrow=f'<marker id="{marker}" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="var(--viz-line)"/></marker>'
    body=[]; typ=v.get('type')
    if typ=='flow':
        items=v.get('items',[]); vertical=v.get('orientation')=='vertical'
        if vertical:
            h,gap,x,w=58,20,300,400
            for i,it in enumerate(items):
                y=45+i*(h+gap)
                if i: body.append(f'<line x1="500" y1="{y-gap}" x2="500" y2="{y-6}" class="viz-edge" marker-end="url(#{marker})"/>')
                body.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="14" class="viz-node {"accent" if v.get("accent")==i else ""}"/>{_svg_wrap(it,500,y+33,34)}')
        else:
            n=max(len(items),1); margin,gap=45,26; w=min(150,(1000-2*margin-gap*(n-1))/n); y,h=145,100
            for i,it in enumerate(items):
                x=margin+i*(w+gap)
                if i: body.append(f'<line x1="{x-gap+6}" y1="{y+h/2}" x2="{x-7}" y2="{y+h/2}" class="viz-edge" marker-end="url(#{marker})"/>')
                body.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="16" class="viz-node {"accent" if v.get("accent")==i else ""}"/>{_svg_wrap(it,x+w/2,y+54,max(12,int(w/8)))}')
    elif typ=='layers':
        items=v.get('items',[]); w,h,gap,x=660,56,14,170
        for i,it in enumerate(items):
            y=48+i*(h+gap); c=colors[i%4]
            body.append(f'<rect x="{x+i*18}" y="{y}" width="{w-i*36}" height="{h}" rx="13" fill="{c}" opacity="{0.16+0.05*(i%3)}" stroke="{c}"/>{_svg_wrap(it,500,y+33,42)}')
    elif typ=='curve':
        x0,y0,x1,y1=90,350,930,55
        body += [f'<line x1="{x0}" y1="{y0}" x2="{x1}" y2="{y0}" class="viz-axis"/>',f'<line x1="{x0}" y1="{y0}" x2="{x0}" y2="{y1}" class="viz-axis"/>']
        for si,s in enumerate(v.get('series',[])):
            pts=' '.join(f'{x0+x*(x1-x0)},{y0-y*(y0-y1)}' for x,y in s.get('points',[]))
            body.append(f'<polyline points="{pts}" fill="none" stroke="{colors[si%4]}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>')
        body.append(_svg_wrap(v.get('xLabel','x'),510,400,30,cls='viz-axis-label')); body.append(_svg_wrap(v.get('yLabel','y'),45,205,18,cls='viz-axis-label'))
        for si,s in enumerate(v.get('series',[])):
            body.append(f'<circle cx="{120+si*190}" cy="28" r="6" fill="{colors[si%4]}"/>{_svg_wrap(s.get("label",f"series {si+1}"),136+si*190,32,18,"start","viz-legend")}')
    elif typ=='scatter':
        x0,y0,x1,y1=90,350,930,55
        body += [f'<line x1="{x0}" y1="{y0}" x2="{x1}" y2="{y0}" class="viz-axis"/>',f'<line x1="{x0}" y1="{y0}" x2="{x0}" y2="{y1}" class="viz-axis"/>']
        import re
        for si,s in enumerate(v.get('series',[])):
            pts=s.get('points',[]); label=s.get('label','')
            is_line=len(pts)==2 and re.search(r'fit|pc1|margin|objective',label,re.I)
            if is_line:
                (ax,ay),(bx,by)=pts; body.append(f'<line x1="{x0+ax*(x1-x0)}" y1="{y0-ay*(y0-y1)}" x2="{x0+bx*(x1-x0)}" y2="{y0-by*(y0-y1)}" stroke="{colors[si%4]}" stroke-width="4"/>')
            else:
                for x,y in pts: body.append(f'<circle cx="{x0+x*(x1-x0)}" cy="{y0-y*(y0-y1)}" r="6" fill="{colors[si%4]}" opacity=".88"/>')
        body.append(_svg_wrap(v.get('xLabel','x'),510,400,30,cls='viz-axis-label')); body.append(_svg_wrap(v.get('yLabel','y'),45,205,18,cls='viz-axis-label'))
        for si,s in enumerate(v.get('series',[])): body.append(f'<circle cx="{120+si*200}" cy="28" r="6" fill="{colors[si%4]}"/>{_svg_wrap(s.get("label",f"series {si+1}"),136+si*200,32,18,"start","viz-legend")}')
    elif typ=='bars':
        labels=v.get('labels',[]); vals=v.get('values',[]); x0,y0,x1=95,350,930; gap=26; w=max(42,(x1-x0-gap*(len(labels)+1))/max(len(labels),1)); body.append(f'<line x1="{x0}" y1="{y0}" x2="{x1}" y2="{y0}" class="viz-axis"/>')
        for i,lab in enumerate(labels):
            h=250*(vals[i] if i<len(vals) else 0); x=x0+gap+i*(w+gap); c=colors[i%4]
            body.append(f'<rect x="{x}" y="{y0-h}" width="{w}" height="{h}" rx="8" fill="{c}" opacity=".76"/>{_svg_wrap(lab,x+w/2,385,14)}')
        body.append(_svg_wrap(v.get('yLabel','value'),45,205,18,cls='viz-axis-label'))
    elif typ=='matrix':
        rows,cols,cells=v.get('rows',[]),v.get('cols',[]),v.get('cells',[]); left,top,w,h=190,90,650,250; cw=w/max(len(cols),1); ch=h/max(len(rows),1)
        for i,c in enumerate(cols): body.append(_svg_wrap(c,left+i*cw+cw/2,68,14))
        for j,r in enumerate(rows): body.append(_svg_wrap(r,170,top+j*ch+ch/2,14,'end'))
        for j in range(len(rows)):
            for i in range(len(cols)):
                val=(cells[j][i] if j<len(cells) and i<len(cells[j]) else ''); op=.10+.10*((i+j)%3)
                try:
                    num=float(str(val).replace('%','')); op=.12+.60*((num/100) if '%' in str(val) else min(1,num))
                except: pass
                c=colors[(i+j)%4]
                body.append(f'<rect x="{left+i*cw}" y="{top+j*ch}" width="{cw}" height="{ch}" fill="{c}" opacity="{op}" stroke="var(--viz-border)"/>{_svg_wrap(val,left+i*cw+cw/2,top+j*ch+ch/2+4,14)}')
    elif typ=='network':
        nodes=v.get('nodes',[]); edges=v.get('edges',[]); by={n.get('id'):n for n in nodes}; kind_index={'a':0,'b':1,'c':2}
        for e in edges:
            a,b=by.get(e[0]),by.get(e[1]);
            if not a or not b: continue
            body.append(f'<line x1="{80+a["x"]*840}" y1="{40+a["y"]*330}" x2="{80+b["x"]*840}" y2="{40+b["y"]*330}" class="viz-edge" {f"marker-end=\"url(#{marker})\"" if v.get("directed") else ""}/>')
        for i,n in enumerate(nodes):
            x=80+n['x']*840; y=40+n['y']*330; ci=kind_index.get(n.get('kind'),i%4); c=colors[ci]
            body.append(f'<circle cx="{x}" cy="{y}" r="34" fill="{c}" opacity=".16" stroke="{c}" stroke-width="2"/>{_svg_wrap(n.get("label",""),x,y+4,15)}')
    elif typ=='schema':
        import math as _m
        sats=v.get('satellites',[]); cx,cy=500,210
        for i,s in enumerate(sats):
            ang=(2*_m.pi*i/max(len(sats),1))-_m.pi/2; x=cx+300*_m.cos(ang); y=cy+145*_m.sin(ang)
            body.append(f'<line x1="{cx}" y1="{cy}" x2="{x}" y2="{y}" class="viz-edge"/><rect x="{x-105}" y="{y-32}" width="210" height="64" rx="14" class="viz-node"/>{_svg_wrap(s,x,y+4,22)}')
        body.append(f'<rect x="390" y="165" width="220" height="90" rx="18" class="viz-node accent"/>{_svg_wrap(v.get("center",""),500,214,22)}')
    elif typ=='compare':
        for i,s in enumerate([v.get('left',{}),v.get('right',{})]):
            x=525 if i else 55; c=colors[i]
            body.append(f'<rect x="{x}" y="60" width="420" height="280" rx="20" fill="{c}" opacity=".09" stroke="{c}" stroke-width="2"/>{_svg_wrap(s.get("title",""),x+210,105,28,cls="viz-compare-title")}')
            for j,it in enumerate(s.get('items',[])): body.append(f'<circle cx="{x+42}" cy="{150+j*48}" r="5" fill="{c}"/>{_svg_wrap(it,x+62,155+j*48,40,"start")}')
    elif typ=='concept-map':
        import math as _m
        items=v.get('items',[]); cx,cy=500,210
        for i,it in enumerate(items):
            ang=(2*_m.pi*i/max(len(items),1))-_m.pi/2; x=cx+300*_m.cos(ang); y=cy+140*_m.sin(ang)
            body.append(f'<line x1="{cx}" y1="{cy}" x2="{x}" y2="{y}" class="viz-edge"/><rect x="{x-105}" y="{y-30}" width="210" height="60" rx="14" class="viz-node"/>{_svg_wrap(it,x,y+4,22)}')
        body.append(f'<circle cx="{cx}" cy="{cy}" r="72" fill="var(--viz-1)" opacity=".13" stroke="var(--viz-1)" stroke-width="2"/>{_svg_wrap(v.get("title",lesson.get("title","")),cx,cy+4,18)}')
    elif typ=='funnel':
        for i,it in enumerate(v.get('items',[])):
            frac=1-i*.16; w=760*frac; x=500-w/2; y=55+i*76; c=colors[i%4]; label=f'{it.get("label","")}{" · "+str(it.get("value")) if it.get("value") is not None else ""}'
            body.append(f'<path d="M {x} {y} L {x+w} {y} L {x+w-42} {y+58} L {x+42} {y+58} Z" fill="{c}" opacity="{.16+.07*i}" stroke="{c}"/>{_svg_wrap(label,500,y+33,28)}')
    elif typ=='map':
        vals=v.get('regions',[.25,.55,.82,.40,.67,.30]); polys=['100,100 300,75 330,190 120,210','340,70 555,90 545,205 330,190','570,95 830,80 875,190 545,205','130,225 335,205 350,350 105,335','350,220 550,215 565,350 350,350','580,215 875,205 840,345 565,350']
        for i,poly in enumerate(polys): body.append(f'<polygon points="{poly}" fill="{colors[i%4]}" opacity="{.12+.55*(vals[i] if i<len(vals) else .3)}" stroke="var(--viz-border)" stroke-width="2"/>')
        body.append(_svg_wrap('Illustrative regions',500,385,30,cls='viz-axis-label'))
    else:
        return ''
    svg=f'<svg viewBox="0 0 1000 430" role="img" aria-label="{title}"><defs>{arrow}</defs>{"".join(body)}</svg>'
    return f'<figure class="concept-visual"><div class="viz-heading"><span>Visual model</span><strong>{title}</strong></div>{svg}<figcaption>{caption} <span>Conceptual illustration — not measured data unless stated.</span></figcaption></figure>'

def render_lesson(data, lesson, chapter_no, lesson_no):
    esc=html.escape
    deep=deep_ready(lesson)
    sections=[]
    sections.append(f'''<section class="answer-box"><div class="eyebrow">45–60 SECOND INTERVIEW ANSWER</div><p>{esc(lesson['interviewAnswer'])}</p></section>''')
    sections.append('<section><h3>What you must know</h3><ul>'+''.join(f'<li>{esc(x)}</li>' for x in lesson['keyPoints'])+'</ul></section>')
    if deep:
        sections += [
            f'<section><h3>Why this matters</h3><p>{esc(lesson["why"])}</p></section>',
            f'<section><h3>Intuition</h3><p>{esc(lesson["intuition"])}</p></section>',
            render_visual(lesson),
            f'<section><h3>Deep explanation</h3><p>{esc(lesson["deepDive"])}</p></section>',
        ]
        if lesson.get('math'): sections.append(f'<section><h3>Math / formal view</h3><div class="math">{esc(lesson["math"])}</div></section>')
        if lesson.get('workedExample'): sections.append(f'<section><h3>Worked example</h3><p>{esc(lesson["workedExample"])}</p></section>')
        if lesson.get('lab'): sections.append(render_lab(lesson))
        elif lesson.get('code'): sections.append(f'<section><h3>Quick code / pseudocode</h3><pre>{esc(lesson["code"])}</pre></section>')
        if lesson.get('commonMistakes'):
            sections.append('<section class="mistakes"><h3>Common mistakes</h3><ul>'+''.join(f'<li>{esc(x)}</li>' for x in lesson['commonMistakes'])+'</ul></section>')
        if lesson.get('followUps'):
            sections.append('<section><h3>Likely follow-ups</h3><ul>'+''.join(f'<li>{esc(x)}</li>' for x in lesson['followUps'])+'</ul></section>')
        if lesson.get('production'):
            sections.append(f'<section class="production"><h3>Production / system-design connection</h3><p>{esc(lesson["production"])}</p></section>')
    else:
        sections.append('''<section class="compact-depth"><h3>Depth checklist</h3><p>This lesson is interview-ready but not yet deep-complete. Before upgrading it, add first-principles intuition, a concrete worked example, at least one failure mode, likely follow-ups, and an engineering connection. Add math/code only where they genuinely improve understanding.</p></section>''')
        sections.append('<section><h3>Interview drill</h3><ul>'+''.join([
            f'<li>Explain {esc(lesson["title"])} in 45–60 seconds without jargon.</li>',
            f'<li>What is the most important trade-off, assumption, or failure mode in {esc(lesson["title"])}?</li>',
            f'<li>Give one concrete example of when {esc(lesson["title"])} matters in a real ML/AI system.</li>'
        ])+'</ul></section>')
    if lesson.get('resources'):
        sections.append('<section><h3>Best references</h3><ul class="refs">'+res_cards(data,lesson['resources'])+'</ul></section>')
    pri=esc(lesson['priority'])
    deep_badge='<span class="badge deep">deep complete</span>' if deep else '<span class="badge">interview-ready</span>'
    return f'''<article class="lesson {'deep-lesson' if deep else ''}" id="lesson-{esc(lesson['slug'])}">
      <div class="lesson-head"><div><div class="lesson-no">{chapter_no}.{lesson_no}</div><h2>{esc(lesson['title'])}</h2></div><div class="badges"><span class="badge priority-{pri}">{pri.replace('-', ' ')}</span>{deep_badge}</div></div>
      <div class="meta">Roles: {esc(', '.join(lesson['roles']))}</div>
      {''.join(sections)}
    </article>'''

def render_book(data: dict) -> str:
    esc=html.escape
    toc=[]; chapters=[]
    for ci,m in enumerate(data['modules'],1):
        ls=[l for l in data['lessons'] if l['module']==m['slug']]
        toc.append(f'<a class="toc-module" href="#module-{esc(m["slug"])}"><span>{ci:02d}</span>{esc(m["title"])}</a>')
        for li,l in enumerate(ls,1): toc.append(f'<a class="toc-lesson" href="#lesson-{esc(l["slug"])}">{ci}.{li} {esc(l["title"])}</a>')
        deep=sum(deep_ready(l) for l in ls)
        visual_count_ch=sum(bool(l.get('visual')) for l in ls)
        ch=[f'''<section class="module-cover" id="module-{esc(m['slug'])}"><div class="chapter-no">CHAPTER {ci:02d}</div><h1>{esc(m['icon'])} {esc(m['title'])}</h1><p>{esc(m['description'])}</p><div class="chapter-meta">{len(ls)} lessons · {deep} deep-complete · {visual_count_ch} visuals</div><div class="chapter-goal"><strong>Study order.</strong> Learn the interview answer first. Then make sure you can explain every key point without notes. Use the deep sections to understand trade-offs, failure modes, and production implications.</div></section>''']
        ch += [render_lesson(data,l,ci,li) for li,l in enumerate(ls,1)]
        chapters.append(''.join(ch))
    resources=''.join(f'''<div class="resource-entry"><h3><a href="{html.escape(r['url'])}" target="_blank" rel="noopener">{html.escape(r['title'])}</a></h3><div>{html.escape(r['provider'])} · {html.escape(r['kind'])} · {html.escape(r['level'])}</div><p>{html.escape(r['why'])}</p></div>''' for r in data['resources'].values())
    deep_count=sum(deep_ready(l) for l in data['lessons'])
    lab_count=sum(bool(l.get('lab')) for l in data['lessons'])
    visual_count=sum(bool(l.get('visual')) for l in data['lessons'])
    styles='''
:root{--ink:#121417;--muted:#5d6470;--line:#dfe3e8;--soft:#f6f7f8;--bg:#fff;--sidebar-bg:#fbfbfc;--hover:#eef2f7;--code-bg:#f2f3f5;--blue:#155eef;--blue-soft:#edf4ff;--green:#147d64;--amber:#9a6700;--red:#b42318;--warning-bg:#fff7f6;--warning-line:#f3ccc8;--prod-bg:#f1f8f5;--prod-line:#cce8dc;--sidebar:330px;color-scheme:light}
html[data-theme="dark"]{--ink:#eef2f6;--muted:#a8b0ba;--line:#2b333d;--soft:#171d24;--bg:#0d1117;--sidebar-bg:#11161c;--hover:#1b2430;--code-bg:#0b0f14;--blue:#8fb4ff;--blue-soft:#10203b;--green:#63d3ae;--amber:#e7bd68;--red:#ff8a80;--warning-bg:#2a1718;--warning-line:#6f3035;--prod-bg:#10231d;--prod-line:#255846;color-scheme:dark}html[data-theme="dark"] .toc-module{color:var(--ink)}html[data-theme="dark"] .toc-lesson,html[data-theme="dark"] .lead,html[data-theme="dark"] .module-cover>p,html[data-theme="dark"] .ref-card p,html[data-theme="dark"] .resource-entry p{color:var(--muted)}html[data-theme="dark"] .search{background:var(--soft);color:var(--ink);border-color:var(--line)}html[data-theme="dark"] .notice{background:#2a2414;border-color:#67552a;color:var(--ink)}html[data-theme="dark"] .badge{background:#252c34;color:var(--muted)}html[data-theme="dark"] .badge.deep{background:#123129;color:var(--green)}html[data-theme="dark"] .priority-very-high{background:#3b1d1b;color:var(--red)}html[data-theme="dark"] .priority-high{background:#352a12;color:var(--amber)}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;color:var(--ink);background:var(--bg);font:16px/1.65 Georgia,"Times New Roman",serif}.sidebar{position:fixed;inset:0 auto 0 0;width:var(--sidebar);border-right:1px solid var(--line);background:var(--sidebar-bg);overflow:auto;padding:22px 16px 50px;font-family:Inter,ui-sans-serif,system-ui,sans-serif}.brand{font-weight:900;font-size:19px;margin-bottom:4px}.brand-sub{font-size:12px;color:var(--muted);margin-bottom:14px}.search{width:100%;padding:10px 12px;border:1px solid #cfd4da;border-radius:8px;margin-bottom:15px}.toc-module{display:flex;gap:8px;padding:9px 8px;margin-top:8px;color:#1b1f24;text-decoration:none;font-weight:800;font-size:13px;border-radius:7px}.toc-module:hover,.toc-lesson:hover{background:var(--hover)}.toc-module span{color:var(--blue)}.toc-lesson{display:block;padding:5px 8px 5px 28px;color:#555e6a;text-decoration:none;font-size:12px;line-height:1.35;border-radius:6px}.content{margin-left:var(--sidebar);max-width:980px;padding:58px 72px 100px}.book-title{font-family:Inter,ui-sans-serif,system-ui,sans-serif;font-size:64px;line-height:.98;letter-spacing:-.045em;margin:0 0 18px}.lead{font-size:21px;color:#474f59;max-width:760px}.stats{display:flex;gap:10px;flex-wrap:wrap;margin:24px 0 34px}.stat{font-family:Inter,ui-sans-serif,system-ui,sans-serif;background:var(--soft);border:1px solid var(--line);padding:10px 13px;border-radius:999px;font-size:13px;font-weight:700}.notice{background:#fff8e7;border:1px solid #ead59b;padding:16px 18px;border-radius:10px;margin:30px 0;font-family:Inter,ui-sans-serif,system-ui,sans-serif;font-size:14px}.module-cover{margin:90px 0 30px;border-top:6px solid var(--ink);padding-top:24px}.module-cover h1{font-family:Inter,ui-sans-serif,system-ui,sans-serif;font-size:42px;line-height:1.05;letter-spacing:-.025em;margin:8px 0 12px}.module-cover>p{font-size:20px;color:#515862;max-width:760px}.chapter-no,.eyebrow,.lesson-no{font-family:Inter,ui-sans-serif,system-ui,sans-serif;font-weight:900;font-size:11px;letter-spacing:.13em;text-transform:uppercase;color:var(--blue)}.chapter-meta{font:700 13px/1.4 Inter,ui-sans-serif,system-ui,sans-serif;color:var(--muted);margin-top:15px}.chapter-goal{margin-top:24px;background:var(--soft);padding:15px 18px;border-radius:9px;font:14px/1.55 Inter,ui-sans-serif,system-ui,sans-serif}.lesson{border-top:1px solid var(--line);padding:34px 0 48px;scroll-margin-top:20px}.lesson-head{display:flex;align-items:flex-start;justify-content:space-between;gap:18px}.lesson h2{font:850 30px/1.12 Inter,ui-sans-serif,system-ui,sans-serif;letter-spacing:-.025em;margin:5px 0 6px}.lesson h3{font:800 17px/1.3 Inter,ui-sans-serif,system-ui,sans-serif;margin:26px 0 8px}.meta{font:12px/1.4 Inter,ui-sans-serif,system-ui,sans-serif;color:var(--muted)}.badges{display:flex;gap:6px;flex-wrap:wrap}.badge{font:800 10px/1 Inter,ui-sans-serif,system-ui,sans-serif;text-transform:uppercase;padding:6px 8px;border-radius:999px;background:#eef0f2;color:#4d5560}.badge.deep{background:#e9f7f2;color:var(--green)}.priority-very-high{background:#fff0ee;color:var(--red)}.priority-high{background:#fff6db;color:var(--amber)}.answer-box{background:var(--blue-soft);border-left:4px solid var(--blue);padding:17px 19px;margin:20px 0;border-radius:0 10px 10px 0}.answer-box p{margin:4px 0 0;font-size:17px;line-height:1.6}.lesson ul{padding-left:22px}.lesson li{margin:5px 0}.math,pre{white-space:pre-wrap;overflow-wrap:anywhere;background:var(--code-bg);border:1px solid var(--line);color:var(--ink);padding:14px 16px;border-radius:9px;font:13px/1.55 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.mistakes{background:var(--warning-bg);border:1px solid var(--warning-line);padding:4px 18px 14px;border-radius:10px}.production{background:var(--prod-bg);border:1px solid var(--prod-line);padding:4px 18px 14px;border-radius:10px}.compact-depth{background:#fafafa;border:1px dashed #cfd4da;padding:3px 17px 12px;border-radius:10px}.refs{list-style:none;padding:0!important}.ref-card{border:1px solid var(--line);border-radius:9px;padding:11px 13px!important;margin:8px 0!important}.ref-card a{color:var(--blue);text-decoration:none}.ref-card span{display:block;font:11px/1.4 Inter,ui-sans-serif,system-ui,sans-serif;color:var(--muted);margin:3px 0}.ref-card p{font-size:13px;margin:5px 0;color:#474f59}.resource-library{display:grid;grid-template-columns:1fr 1fr;gap:12px}.resource-entry{border:1px solid var(--line);padding:15px;border-radius:10px;break-inside:avoid}.resource-entry h3{font:800 16px/1.25 Inter,ui-sans-serif,system-ui,sans-serif;margin:0 0 5px}.resource-entry a{color:var(--blue);text-decoration:none}.resource-entry div{font:11px/1.4 Inter,ui-sans-serif,system-ui,sans-serif;color:var(--muted)}.resource-entry p{font-size:13px;color:#4d5560}.footer{border-top:1px solid var(--line);margin-top:80px;padding-top:20px;color:var(--muted);font-family:Inter,ui-sans-serif,system-ui,sans-serif;font-size:12px}

.theme-toggle{width:100%;border:1px solid var(--line);background:var(--soft);color:var(--ink);border-radius:8px;padding:9px 11px;margin:0 0 12px;cursor:pointer;font:700 12px/1.2 Inter,ui-sans-serif,system-ui,sans-serif;text-align:left}.code-lab{border:1px solid var(--line);border-radius:12px;padding:18px;background:var(--soft)}.lab-head{display:flex;justify-content:space-between;gap:20px;align-items:start}.lab-head h3{margin:3px 0 4px}.lab-head p{font:13px/1.5 Inter,ui-sans-serif,system-ui,sans-serif;color:var(--muted);margin:0}.lab-link{white-space:nowrap;border:1px solid var(--line);border-radius:8px;padding:7px 9px;text-decoration:none;font:700 11px Inter,ui-sans-serif,system-ui,sans-serif;color:var(--blue)}.code-step{margin-top:14px}.code-title{display:flex;gap:8px;align-items:baseline;font:12px/1.3 Inter,ui-sans-serif,system-ui,sans-serif}.code-title span{font-weight:900;color:var(--blue)}.code-title em{color:var(--muted);font-style:normal}.code-lab pre{margin:7px 0 0;background:var(--code-bg)}.ship-step{margin-top:14px;border:1px solid var(--prod-line);background:var(--prod-bg);padding:12px 14px;border-radius:9px}.ship-step p{margin:7px 0 0;font:13px/1.55 Inter,ui-sans-serif,system-ui,sans-serif}

/* Concept visuals — inline SVG, theme-aware and print-safe */
.concept-visual{--viz-1:#2563eb;--viz-2:#059669;--viz-3:#d97706;--viz-4:#7c3aed;--viz-line:#7b8490;--viz-border:#cbd2da;margin:18px 0 22px;border:1px solid var(--line);background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 88%,var(--soft)),var(--bg));border-radius:18px;padding:16px 16px 12px;box-shadow:0 8px 24px rgba(16,24,40,.05);overflow:hidden}.concept-visual .viz-heading{display:flex;gap:10px;align-items:baseline;flex-wrap:wrap;margin:0 4px 8px;font-family:Inter,ui-sans-serif,system-ui,sans-serif}.concept-visual .viz-heading span{font-size:10px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:var(--blue)}.concept-visual .viz-heading strong{font-size:14px;color:var(--ink)}.concept-visual svg{display:block;width:100%;height:auto;max-height:410px}.concept-visual .viz-text,.concept-visual .viz-legend,.concept-visual .viz-axis-label,.concept-visual .viz-compare-title{font-family:Inter,ui-sans-serif,system-ui,sans-serif;fill:var(--ink);font-size:14px;font-weight:650}.concept-visual .viz-legend{font-size:12px;fill:var(--muted);font-weight:700}.concept-visual .viz-axis-label{font-size:12px;fill:var(--muted);font-weight:700}.concept-visual .viz-compare-title{font-size:16px;font-weight:850}.concept-visual .viz-node{fill:var(--bg);stroke:var(--viz-border);stroke-width:2}.concept-visual .viz-node.accent{fill:color-mix(in srgb,var(--viz-1) 12%,var(--bg));stroke:var(--viz-1)}.concept-visual .viz-edge{stroke:var(--viz-line);stroke-width:2.2;fill:none;stroke-linecap:round}.concept-visual .viz-axis{stroke:var(--viz-line);stroke-width:1.8}.concept-visual figcaption{border-top:1px solid var(--line);margin-top:6px;padding:10px 4px 2px;color:var(--muted);font:12px/1.55 Inter,ui-sans-serif,system-ui,sans-serif}.concept-visual figcaption span{opacity:.78}.concept-visual polygon,.concept-visual rect,.concept-visual circle,.concept-visual path,.concept-visual line,.concept-visual polyline{vector-effect:non-scaling-stroke}
html[data-theme="dark"] .concept-visual{--viz-1:#8fb4ff;--viz-2:#63d3ae;--viz-3:#e7bd68;--viz-4:#c4a7ff;--viz-line:#788491;--viz-border:#39434f;box-shadow:none;background:linear-gradient(180deg,#141a21,#10151b)}
@media(max-width:640px){.concept-visual{padding:10px 8px 8px;border-radius:14px}.concept-visual svg{min-height:260px}.concept-visual .viz-text{font-size:15px}.concept-visual figcaption{padding-left:6px;padding-right:6px}}
@media print{.concept-visual{break-inside:avoid;box-shadow:none;background:white!important;border-color:#bfc4ca!important;--viz-1:#1d4ed8;--viz-2:#047857;--viz-3:#b45309;--viz-4:#6d28d9;--viz-line:#616975;--viz-border:#aeb5bd}.concept-visual .viz-text,.concept-visual .viz-compare-title{fill:#111!important}.concept-visual .viz-legend,.concept-visual .viz-axis-label{fill:#444!important}.concept-visual figcaption{color:#444!important}}

@media(max-width:900px){.sidebar{position:static;width:auto;max-height:360px;border-right:0;border-bottom:1px solid var(--line)}.content{margin-left:0;padding:35px 22px 70px}.book-title{font-size:46px}.resource-library{grid-template-columns:1fr}.module-cover h1{font-size:34px}}
@media print{.sidebar{display:none}.content{margin:0;max-width:none;padding:0 14mm}.book-title{font-size:42pt}.module-cover{break-before:page;margin-top:0;padding-top:14mm}.lesson-head,.answer-box,.mistakes,.production,.ref-card,.resource-entry{break-inside:avoid}.deep-lesson{break-before:page}a{color:#111;text-decoration:none}.notice{display:none}}
'''
    script="""<script>const q=document.getElementById('tocSearch');q?.addEventListener('input',()=>{const x=q.value.toLowerCase();document.querySelectorAll('.toc-lesson').forEach(a=>a.style.display=a.textContent.toLowerCase().includes(x)?'block':'none')});const tb=document.getElementById('bookTheme');function updateThemeLabel(){if(tb)tb.textContent=document.documentElement.dataset.theme==='dark'?'☀ Use light mode':'☾ Use dark mode'}updateThemeLabel();tb?.addEventListener('click',()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;localStorage.setItem('atlas-theme',n);updateThemeLabel()})</script>"""
    return f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Data, ML & AI Atlas — Complete Book</title><meta name="description" content="Complete data, statistics, ML, data engineering and AI handbook with {len(data['modules'])} chapters and {len(data['lessons'])} topics."><script>(()=>{{const s=localStorage.getItem('atlas-theme');const t=s||((matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light');document.documentElement.dataset.theme=t}})()</script><style>{styles}</style></head><body><aside class="sidebar"><div class="brand">Data, ML & AI Atlas</div><div class="brand-sub">Complete book · generated from source/atlas.json</div><button id="bookTheme" class="theme-toggle">◐ Theme</button><input id="tocSearch" class="search" placeholder="Search chapters…">{''.join(toc)}</aside><main class="content"><header><div class="eyebrow">INTERVIEW-FIRST · ENGINEERING-DEEP</div><h1 class="book-title">Data, ML<br>& AI Atlas</h1><p class="lead">A broad handbook spanning Data Science, Analytics, Statistics, Machine Learning, Data Engineering, Applied Science and AI Engineering — from foundations to production systems.</p><div class="stats"><span class="stat">{len(data['modules'])} chapters</span><span class="stat">{len(data['lessons'])} topics</span><span class="stat">{deep_count} deep-complete</span><span class="stat">{lab_count} runnable code labs</span><span class="stat">{visual_count} original visuals</span><span class="stat">{len(data['resources'])} curated resources</span></div><div class="notice"><strong>Reading strategy:</strong> Start with the spoken answer, then use the visual model, intuition, formal explanation and code to deepen understanding. Diagrams are original conceptual illustrations and are labeled when they are not measured data.</div></header>{''.join(chapters)}<section class="module-cover" id="resource-library"><div class="chapter-no">APPENDIX</div><h1>Curated Learning Library</h1><p>Primary courses, official documentation, strong intuition resources, and production-focused material used throughout the Atlas.</p></section><div class="resource-library">{resources}</div><div class="footer">Generated by scripts/build.py from source/atlas.json. Edit the source, then rebuild.</div></main>{script}</body></html>'''


def write_coverage_md(data: dict):
    from collections import defaultdict
    grouped=defaultdict(list)
    for m in data['modules']:
        grouped[m.get('group','Other')].append(m)
    lines=['# Data, ML & AI Atlas — Coverage Map','',f"**{len(data['modules'])} modules · {len(data['lessons'])} lessons · {sum(bool(l.get('lab')) for l in data['lessons'])} runnable labs · {len(data['resources'])} curated resources**",'',
           'This file exists to prevent the curriculum from drifting toward one resume, one job description, or one fashionable subfield.','']
    order=['Foundations & Data Core','Statistics & Data Science','Ranking, Retrieval & Structured ML','Deep Learning & AI','Data & Production Engineering','Interview & Case Practice']
    for group in order + [g for g in grouped if g not in order]:
        if not grouped.get(group): continue
        lines += [f'## {group}','']
        for m in grouped[group]:
            n=sum(1 for l in data['lessons'] if l['module']==m['slug'])
            lines.append(f"- **{m['title']}** — {n} lessons")
        lines.append('')
    lines += ['## Breadth guardrails','',
      '- Foundations include software, SQL/data modeling, math, probability and information theory.',
      '- Statistical Data Science includes inference, Bayesian methods, probabilistic ML/uncertainty, learning theory, EDA, regression/GLMs, experimentation, causal inference, forecasting, survival, anomaly detection, optimization and geospatial analysis.',
      '- Classical ML breadth includes supervised/unsupervised learning, data mining/sketches, recommenders, ranking, search and graph ML.',
      '- Modern AI remains deep across neural networks, vision, NLP, speech, transformers, generative models, RL, LLM systems and multimodal AI.',
      '- Production coverage includes analytics/data engineering, distributed systems, MLOps, feature stores, cloud/container orchestration, performance, security/governance and system design.',
      '- Interview/project material lives at the end and is optional; it does not define the curriculum.','']
    (ROOT/'COVERAGE.md').write_text('\n'.join(lines),encoding='utf-8')

def write_book(data: dict):
    (ROOT/'book.html').write_text(render_book(data),encoding='utf-8')

def main():
    data=json.loads(SOURCE.read_text(encoding='utf-8'))
    normalize(data)
    SOURCE.write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
    write_data_js(data)
    write_curriculum_json(data)
    write_resources_json(data)
    write_curriculum_md(data)
    write_coverage_md(data)
    write_book(data)
    write_labs(data)
    c=Counter(l['status'] for l in data['lessons'])
    print(f"Built {len(data['lessons'])} lessons, {len(data['resources'])} resources: {dict(c)}")

if __name__=='__main__':
    main()

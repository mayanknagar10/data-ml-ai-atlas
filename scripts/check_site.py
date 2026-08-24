from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

ROOT=Path(__file__).resolve().parents[1]
class Links(HTMLParser):
    def __init__(self): super().__init__(); self.refs=[]; self.ids=[]
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if a.get('id'): self.ids.append(a['id'])
        for key in ('href','src'):
            if key in a: self.refs.append((tag,key,a[key]))

def check_file(path: Path):
    p=Links(); p.feed(path.read_text(encoding='utf-8'))
    errors=[]
    seen=set()
    for ident in p.ids:
        if ident in seen: errors.append(f'{path.relative_to(ROOT)}: duplicate id {ident}')
        seen.add(ident)
    for tag,key,ref in p.refs:
        if not ref or ref.startswith(('#','http://','https://','mailto:','tel:','data:')): continue
        clean=unquote(urlsplit(ref).path)
        if not clean: continue
        target=(path.parent/clean).resolve()
        try: target.relative_to(ROOT.resolve())
        except ValueError:
            errors.append(f'{path.relative_to(ROOT)}: escapes repo -> {ref}'); continue
        if not target.exists(): errors.append(f'{path.relative_to(ROOT)}: missing {ref}')
    return errors

html_files=[ROOT/'index.html',ROOT/'book.html',*sorted((ROOT/'labs').glob('*/index.html'))]
errs=[]
for f in html_files: errs.extend(check_file(f))
index_text=(ROOT/'index.html').read_text(encoding='utf-8')
for script in ('chapter-loader.js','chapter-reader.js'):
    if f'src="{script}"' not in index_text and f'src="{script}?' not in index_text: errs.append(f'index.html: missing {script}')
styles=(ROOT/'styles.css').read_text(encoding='utf-8')
for selector in ('.chapter-toc','.chapter-objectives','.chapter-exercises','.chapter-nav','.chapter-load-error'):
    if selector not in styles: errs.append(f'styles.css: missing {selector}')
lesson_files=sorted((ROOT/'lesson-data').glob('*.json'))
if not lesson_files: errs.append('lesson-data: no generated lesson JSON files')
if errs:
    raise SystemExit('\n'.join(errs[:50]))
print(f'OK: checked local href/src targets in {len(html_files)} HTML files')

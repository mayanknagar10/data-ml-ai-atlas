import json
import subprocess
import textwrap
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

class LessonRuntimeV253Tests(unittest.TestCase):
    def test_core_assets_share_v253_cache_key(self):
        index=(ROOT/'index.html').read_text(encoding='utf-8')
        for asset in ('styles.css','data.js','analyzer.js','chapter-loader.js','chapter-reader.js','background.js','app.js'):
            self.assertIn(f'{asset}?v=2.5.4', index, asset)

    def test_app_and_reader_runtime_contract(self):
        app=(ROOT/'app.js').read_text(encoding='utf-8')
        reader=(ROOT/'chapter-reader.js').read_text(encoding='utf-8')
        for token in ('index,','total:moduleLessons.length','moduleDone:','wireChapterToc()','readingProgressBar'):
            self.assertIn(token, app)
        self.assertIn('data-section-target', reader)
        self.assertIn('context.moduleDone', reader)

    def test_python_data_structures_renders_with_real_reader(self):
        script = textwrap.dedent(f"""
            const reader=require({json.dumps(str(ROOT/'chapter-reader.js'))});
            const chapter=require({json.dumps(str(ROOT/'lesson-data'/'python-data-structures.json'))});
            const esc=(s='')=>String(s).replace(/[&<>\"']/g,m=>({{'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#039;'}}[m]));
            const helpers={{
              escape:esc,
              visualHtml:()=>'<figure class="concept-visual"></figure>',
              labHtml:()=>'<section class="code-lab-web"></section>',
              resourcesHtml:()=>'<div class="resources"></div>',
              mathHtml:(x)=>esc(x),
              doneButton:()=>'<button data-done="python-data-structures"></button>'
            }};
            const context={{
              module:{{slug:'python',title:'Python & Software Engineering'}},
              previous:null,next:null,index:0,total:6,moduleDone:0,
              lessonTitle:(x)=>x
            }};
            const html=reader.render(chapter,context,helpers);
            if(!html.includes('Lists, Tuples, Sets &amp; Dictionaries') && !html.includes('Lists, Tuples, Sets & Dictionaries')) throw new Error('title missing');
            if(!html.includes('data-section-target')) throw new Error('TOC controls missing');
            if(html.includes('readingProgressBar')) throw new Error('chapter must not duplicate global reading progress');
            if(!html.includes('code-lab-web')) throw new Error('lab missing');
            console.log('OK', html.length);
        """)
        proc=subprocess.run(['node','-e',script],cwd=ROOT,text=True,capture_output=True)
        self.assertEqual(proc.returncode,0,proc.stderr)
        self.assertIn('OK',proc.stdout)

if __name__=='__main__':
    unittest.main()

from pathlib import Path
import unittest

ROOT=Path(__file__).resolve().parents[1]

class ProgressRailV254Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.index=(ROOT/'index.html').read_text(encoding='utf-8')
        cls.styles=(ROOT/'styles.css').read_text(encoding='utf-8')
        cls.reader=(ROOT/'chapter-reader.js').read_text(encoding='utf-8')

    def test_global_progress_rail_is_outside_chapter_content(self):
        self.assertIn('id="readingProgress"', self.index)
        self.assertIn('<main id="app"', self.index)
        self.assertLess(self.index.index('id="readingProgress"'), self.index.index('<main id="app"'))
        self.assertNotIn('return `<div class="reading-progress"', self.reader)

    def test_rail_reserves_layout_space_and_is_solid(self):
        self.assertIn('position:sticky!important', self.styles)
        self.assertIn('background:var(--progress-shell)!important', self.styles)
        self.assertIn('--reading-rail-height:18px', self.styles)
        self.assertIn('bottom:5px!important', self.styles)

    def test_all_runtime_assets_share_cache_key(self):
        for asset in ('styles.css','data.js','analyzer.js','chapter-loader.js','chapter-reader.js','background.js','app.js'):
            self.assertIn(f'{asset}?v=2.5.4', self.index, asset)

if __name__=='__main__':
    unittest.main()

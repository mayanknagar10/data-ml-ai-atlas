from pathlib import Path
import unittest

ROOT=Path(__file__).resolve().parents[1]

class ProgressRailV255Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.index=(ROOT/'index.html').read_text(encoding='utf-8')
        cls.styles=(ROOT/'styles.css').read_text(encoding='utf-8')
        cls.reader=(ROOT/'chapter-reader.js').read_text(encoding='utf-8')

    def test_progress_is_inside_header_not_between_header_and_content(self):
        self.assertIn('id="headerReadingProgress"', self.index)
        header_start=self.index.index('<header class="topbar">')
        header_end=self.index.index('</header>', header_start)
        progress=self.index.index('id="headerReadingProgress"')
        main=self.index.index('<main id="app"')
        self.assertTrue(header_start < progress < header_end < main)
        self.assertNotIn('id="readingProgress" class="reading-progress"', self.index)
        self.assertNotIn('return `<div class="reading-progress"', self.reader)

    def test_old_floating_rail_is_disabled_and_header_is_solid(self):
        self.assertIn('.reading-progress{display:none!important}', self.styles)
        self.assertIn('.header-reading-progress{', self.styles)
        self.assertIn('bottom:-1px', self.styles)
        self.assertIn('body[data-view="lesson"] .topbar{', self.styles)
        self.assertIn('background:var(--progress-shell)!important', self.styles)

    def test_all_runtime_assets_share_cache_key(self):
        for asset in ('styles.css','data.js','analyzer.js','chapter-loader.js','chapter-reader.js','background.js','app.js'):
            self.assertIn(f'{asset}?v=2.5.5', self.index, asset)

if __name__=='__main__':
    unittest.main()

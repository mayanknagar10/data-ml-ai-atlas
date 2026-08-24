import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class UiUxV251Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.index = (ROOT / "index.html").read_text(encoding="utf-8")
        cls.app = (ROOT / "app.js").read_text(encoding="utf-8")
        cls.styles = (ROOT / "styles.css").read_text(encoding="utf-8")
        cls.reader = (ROOT / "chapter-reader.js").read_text(encoding="utf-8")
        cls.background = (ROOT / "background.js").read_text(encoding="utf-8")

    def test_v252_assets_are_cache_busted(self):
        self.assertIn('styles.css?v=2.5.2', self.index)
        self.assertIn('chapter-reader.js?v=2.5.2', self.index)
        self.assertIn('background.js?v=2.5.2', self.index)
        self.assertIn('app.js?v=2.5.2', self.index)

    def test_lesson_view_quiets_background_without_disabling_motion(self):
        self.assertIn("document.body.dataset.view='lesson'", self.app)
        self.assertIn('body[data-view="lesson"] .atlas-background', self.styles)
        self.assertIn('mask-image:linear-gradient', self.styles)
        self.assertIn('requestAnimationFrame', self.background)
        self.assertIn('function start()', self.background)

    def test_background_palette_is_restrained_and_animation_is_60fps_raf(self):
        self.assertIn('fps:reduceQuery.matches?0:60', self.background)
        self.assertNotIn('violet:', self.background)
        self.assertNotIn('teal:', self.background)
        self.assertIn('--bg:#0c1117', self.styles)
        self.assertIn('--bg:#f6f8fb', self.styles)

    def test_dense_reading_surfaces_do_not_use_backdrop_blur(self):
        self.assertIn('.chapter-article{', self.styles)
        self.assertIn('background:var(--reading-surface)', self.styles)
        self.assertIn('backdrop-filter:none!important', self.styles)
        self.assertIn('max-width:68ch', self.styles)

    def test_toc_does_not_break_hash_router(self):
        self.assertIn('data-section-target="section-${esc(id)}"', self.reader)
        self.assertNotIn('href="#section-${esc(id)}"', self.reader)
        self.assertIn('wireChapterToc', self.app)
        self.assertIn('IntersectionObserver', self.app)
        self.assertIn('scrollIntoView', self.app)

    def test_reading_progress_uses_transform_not_layout_width(self):
        self.assertIn('bar.style.transform=`scaleX(${pct})`', self.app)
        self.assertIn('transform:scaleX(0)', self.styles)
        self.assertIn('will-change:transform', self.styles)

    def test_reading_progress_has_solid_separation_rail(self):
        self.assertIn('--progress-shell:#f6f8fb', self.styles)
        self.assertIn('--progress-shell:#0c1117', self.styles)
        self.assertIn('.reading-progress::after', self.styles)
        self.assertIn('background:var(--progress-shell)', self.styles)
        self.assertIn('body[data-view="lesson"] .topbar', self.styles)

    def test_reduced_motion_stops_ambient_animation(self):
        self.assertIn('@media(prefers-reduced-motion:reduce)', self.styles)
        self.assertIn('body::after{animation:none!important}', self.styles)
        self.assertIn('stop();draw(performance.now())', self.background)


if __name__ == "__main__":
    unittest.main()

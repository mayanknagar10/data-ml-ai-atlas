import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class UiUxV25Tests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.index = (ROOT / "index.html").read_text(encoding="utf-8")
        cls.app = (ROOT / "app.js").read_text(encoding="utf-8")
        cls.styles = (ROOT / "styles.css").read_text(encoding="utf-8")
        cls.reader = (ROOT / "chapter-reader.js").read_text(encoding="utf-8")

    def test_global_search_and_keyboard_shell_exists(self):
        self.assertIn('id="searchBtn"', self.index)
        self.assertIn('id="searchOverlay"', self.index)
        self.assertIn("openGlobalSearch", self.app)
        self.assertIn("atlasSearchResults", self.app)
        self.assertIn("e.key.toLowerCase()==='k'", self.app)

    def test_accessibility_navigation_shell(self):
        self.assertIn('class="skip-link"', self.index)
        self.assertIn('aria-label="Primary navigation"', self.index)
        self.assertIn("updateActiveNav", self.app)
        self.assertIn('aria-current', self.app)
        self.assertIn(':focus-visible', self.styles)

    def test_home_has_continue_learning_and_role_focus(self):
        self.assertIn("nextStudyLessons", self.app)
        self.assertIn("Continue learning", self.app)
        self.assertIn("Focus the curriculum", self.app)
        self.assertIn("role-tabs", self.app)

    def test_module_page_has_progress_and_numbered_lessons(self):
        self.assertIn("module-progress", self.app)
        self.assertIn("lesson-number", self.app)
        self.assertIn("lesson-row-v2", self.app)
        self.assertIn("lessonVisible(l,{includeRole:false})", self.app)

    def test_reader_has_reading_progress_and_module_context(self):
        self.assertIn('id="readingProgressBar"', self.index)
        self.assertIn("module-study-card", self.reader)
        self.assertIn("Lesson ${context.index + 1}", self.reader)
        self.assertIn("updateReadingProgress", self.app)

    def test_reduced_motion_is_respected(self):
        self.assertIn("prefers-reduced-motion:reduce", self.styles)
        background = (ROOT / "background.js").read_text(encoding="utf-8")
        self.assertIn("reduceQuery.matches", background)
        self.assertIn("stop();draw(performance.now())", background)


if __name__ == "__main__":
    unittest.main()

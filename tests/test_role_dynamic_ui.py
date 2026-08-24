import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ROLES = {"ds", "da", "as", "mle", "aie", "de", "cv"}


class RoleDynamicUiTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.source = json.loads((ROOT / "source" / "atlas.json").read_text(encoding="utf-8"))
        cls.app = (ROOT / "app.js").read_text(encoding="utf-8")
        cls.index = (ROOT / "index.html").read_text(encoding="utf-8")
        cls.background = (ROOT / "background.js").read_text(encoding="utf-8")

    def visible_modules_for(self, role):
        result = []
        for module in self.source["modules"]:
            lessons = [
                lesson for lesson in self.source["lessons"]
                if lesson["module"] == module["slug"]
                and ("all" in lesson["roles"] or role in lesson["roles"])
            ]
            if lessons:
                result.append(module["slug"])
        return result

    def test_each_specialized_role_hides_at_least_one_irrelevant_module(self):
        total = len(self.source["modules"])
        self.assertEqual(total, 45)
        for role in ROLES:
            with self.subTest(role=role):
                visible = self.visible_modules_for(role)
                self.assertGreater(len(visible), 0)
                self.assertLess(len(visible), total)

    def test_cv_role_has_a_focused_module_map(self):
        visible = set(self.visible_modules_for("cv"))
        self.assertIn("cv", visible)
        self.assertIn("dl", visible)
        self.assertIn("multimodal", visible)
        self.assertNotIn("sql", visible)
        self.assertNotIn("data-eng", visible)

    def test_home_filters_module_cards_from_relevant_lessons(self):
        self.assertIn("function moduleLessonSets(module)", self.app)
        self.assertIn("filter(x=>!filtering||x.relevant.length)", self.app)
        self.assertIn("Focused curriculum", self.app)
        self.assertIn("Show full curriculum", self.app)

    def test_module_pages_still_show_complete_module_content(self):
        self.assertIn("lessonVisible(l,{includeRole:false})", self.app)

    def test_live_background_has_accessibility_and_performance_controls(self):
        self.assertIn('id="atlasBackground"', self.index)
        self.assertNotIn('id="motionBtn"', self.index)
        self.assertIn('src="background.js?v=2.4.3"', self.index)
        self.assertIn("prefers-reduced-motion", self.background)
        self.assertIn("document.hidden", self.background)
        self.assertIn("requestAnimationFrame", self.background)
        self.assertNotIn("atlas-motion", self.background)
        self.assertIn("function effective(){return !reduceQuery.matches}", self.background)
        self.assertNotIn("function toggle()", self.background)


if __name__ == "__main__":
    unittest.main()

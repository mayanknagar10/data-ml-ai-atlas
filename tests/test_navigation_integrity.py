import json
import re
import unittest
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ALLOWED_ROLES = {"all", "ds", "da", "as", "mle", "aie", "de", "cv"}


class NavigationIntegrityTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.source = json.loads((ROOT / "source" / "atlas.json").read_text(encoding="utf-8"))
        cls.app = (ROOT / "app.js").read_text(encoding="utf-8")

    def test_every_module_has_content_and_every_lesson_has_a_valid_module(self):
        modules = {m["slug"] for m in self.source["modules"]}
        counts = Counter(l["module"] for l in self.source["lessons"])
        self.assertEqual(len(modules), 45)
        self.assertEqual(len(self.source["lessons"]), 394)
        self.assertFalse([l["slug"] for l in self.source["lessons"] if l["module"] not in modules])
        self.assertFalse([m for m in modules if counts[m] == 0])

    def test_all_lesson_roles_match_the_ui_role_taxonomy(self):
        invalid = {}
        for lesson in self.source["lessons"]:
            unknown = sorted(set(lesson.get("roles", [])) - ALLOWED_ROLES)
            if unknown:
                invalid[lesson["slug"]] = unknown
        self.assertEqual(invalid, {})
        self.assertNotIn("genai", {r for l in self.source["lessons"] for r in l.get("roles", [])})

    def test_module_page_explicitly_ignores_hidden_role_filter(self):
        self.assertIn("lessonVisible(l,{includeRole:false})", self.app)
        self.assertRegex(self.app, r"function lessonVisible\(l,\{includeRole=true\}=\{\}\)")

    def test_stale_persisted_role_is_sanitized(self):
        self.assertIn("ROLE_IDS.has(savedRole) ? savedRole : 'all'", self.app)

    def test_cv_module_still_contains_all_fourteen_lessons(self):
        cv = [l for l in self.source["lessons"] if l["module"] == "cv"]
        self.assertEqual(len(cv), 14)
        self.assertTrue(all("cv" in l["roles"] for l in cv))


if __name__ == "__main__":
    unittest.main()

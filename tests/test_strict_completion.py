import json
import unittest
from pathlib import Path

from scripts.chapter_contract import chapter_errors, editorial_status, explanatory_word_count, lesson_visuals

ROOT = Path(__file__).resolve().parents[1]


class StrictCompletionTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.data = json.loads((ROOT / "source" / "atlas.json").read_text(encoding="utf-8"))
        cls.slugs = {lesson["slug"] for lesson in cls.data["lessons"]}

    def test_all_394_lessons_are_strictly_verified(self):
        self.assertEqual(len(self.data["lessons"]), 394)
        for lesson in self.data["lessons"]:
            with self.subTest(slug=lesson["slug"]):
                self.assertEqual(editorial_status(lesson), "verified")
                self.assertGreaterEqual(explanatory_word_count(lesson), 1500)
                self.assertGreaterEqual(len(lesson_visuals(lesson)), 2)
                self.assertGreaterEqual(len({n["resource"] for n in lesson["sourceNotes"]}), 2)
                self.assertEqual(lesson["lab"]["language"], "python")
                for field in ("goal", "buildIt", "useIt", "shipIt", "verifyIt"):
                    self.assertTrue(str(lesson["lab"].get(field, "")).strip(), field)
                self.assertEqual(chapter_errors(lesson, self.slugs, self.data["resources"]), [])

    def test_split_loading_index_excludes_full_chapter_bodies(self):
        data_js = (ROOT / "data.js").read_text(encoding="utf-8")
        self.assertLessEqual((ROOT / "data.js").stat().st_size, 2_000_000)
        self.assertNotIn('"deepSections":', data_js)
        self.assertNotIn('"workedExamples":', data_js)
        self.assertEqual(len(list((ROOT / "lesson-data").glob("*.json"))), 394)


if __name__ == "__main__":
    unittest.main()

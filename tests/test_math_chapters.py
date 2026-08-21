import json
import unittest
from pathlib import Path

from scripts.chapter_contract import chapter_errors, editorial_status, explanatory_word_count


ROOT = Path(__file__).resolve().parents[1]


class MathChapterTests(unittest.TestCase):
    def test_every_math_lesson_is_a_verified_full_chapter(self):
        data = json.loads((ROOT / "source" / "atlas.json").read_text(encoding="utf-8"))
        lessons = [lesson for lesson in data["lessons"] if lesson["module"] == "math"]
        slugs = {lesson["slug"] for lesson in data["lessons"]}
        self.assertEqual(len(lessons), 8)
        for lesson in lessons:
            with self.subTest(slug=lesson["slug"]):
                self.assertEqual(editorial_status(lesson), "verified")
                self.assertGreaterEqual(explanatory_word_count(lesson), 1500)
                self.assertEqual(chapter_errors(lesson, slugs, data["resources"]), [])
                self.assertGreaterEqual(len(lesson.get("visuals", [])), 2)


if __name__ == "__main__":
    unittest.main()

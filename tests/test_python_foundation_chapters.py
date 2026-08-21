import json
import unittest
from pathlib import Path

from scripts.chapter_contract import chapter_errors, editorial_status, explanatory_word_count


ROOT = Path(__file__).resolve().parents[1]
PYTHON_CHAPTERS = {
    "python-data-structures",
    "python-generators",
    "python-decorators",
    "numpy-vectorization",
    "pandas-core",
    "python-testing",
}


class PythonFoundationChapterTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.data = json.loads((ROOT / "source" / "atlas.json").read_text(encoding="utf-8"))
        cls.lessons = {lesson["slug"]: lesson for lesson in cls.data["lessons"]}

    def test_python_foundation_batch_is_verified(self):
        self.assertTrue(PYTHON_CHAPTERS <= self.lessons.keys())
        slugs = set(self.lessons)
        for slug in sorted(PYTHON_CHAPTERS):
            lesson = self.lessons[slug]
            self.assertEqual(editorial_status(lesson), "verified", slug)
            self.assertGreaterEqual(explanatory_word_count(lesson), 1500, slug)
            self.assertEqual(chapter_errors(lesson, slugs, self.data["resources"]), [], slug)
            self.assertGreaterEqual(len(lesson.get("visuals", [])), 2, slug)


if __name__ == "__main__":
    unittest.main()

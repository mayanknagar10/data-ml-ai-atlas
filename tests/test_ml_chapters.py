import json
import unittest
from pathlib import Path

from scripts.chapter_contract import chapter_errors, editorial_status, explanatory_word_count


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "source" / "atlas.json"
SUPPORTED_VISUAL_TYPES = {
    "flow", "layers", "curve", "scatter", "bars", "matrix", "network",
    "schema", "compare", "concept-map", "funnel", "map",
}


class ClassicalMachineLearningChapterTests(unittest.TestCase):
    def test_every_classical_ml_lesson_is_a_verified_full_chapter(self):
        data = json.loads(SOURCE.read_text(encoding="utf-8"))
        lessons = [lesson for lesson in data["lessons"] if lesson["module"] == "ml"]
        slugs = {lesson["slug"] for lesson in data["lessons"]}

        self.assertEqual(len(lessons), 12)
        for lesson in lessons:
            with self.subTest(slug=lesson["slug"]):
                self.assertEqual(editorial_status(lesson), "verified")
                self.assertGreaterEqual(explanatory_word_count(lesson), 1500)
                self.assertEqual(chapter_errors(lesson, slugs, data["resources"]), [])
                visuals = lesson.get("visuals", [])
                self.assertGreaterEqual(len(visuals), 2)
                self.assertTrue(all(v.get("type") in SUPPORTED_VISUAL_TYPES for v in visuals))
                lab = lesson.get("lab", {})
                self.assertEqual(lab.get("language"), "python")
                for field in ("goal", "buildIt", "useIt", "verifyIt", "shipIt"):
                    self.assertTrue(lab.get(field), f"{lesson['slug']}: missing lab.{field}")


if __name__ == "__main__":
    unittest.main()

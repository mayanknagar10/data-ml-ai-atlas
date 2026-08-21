import json
import html
import unittest
from pathlib import Path


FIXTURE = Path(__file__).parent / "fixtures" / "chapter_complete.json"


class BookChapterTests(unittest.TestCase):
    def test_structured_chapter_renders_all_learning_sections(self):
        from scripts.build import render_lesson

        lesson = json.loads(FIXTURE.read_text(encoding="utf-8"))
        data = {
            "resources": {
                resource_id: {
                    "url": f"https://example.com/{resource_id}",
                    "title": resource_id,
                    "provider": "Official",
                    "kind": "documentation",
                    "level": "all",
                    "why": "Primary reference.",
                }
                for resource_id in lesson["resources"]
            }
        }
        rendered = render_lesson(data, lesson, 1, 1)

        for expected in (
            lesson["description"],
            "Learning objectives",
            lesson["deepSections"][0]["title"],
            lesson["workedExamples"][0]["title"],
            lesson["commonMistakes"][0]["correction"],
            lesson["followUps"][0]["answer"],
            lesson["exercises"][0]["solution"],
            lesson["sourceNotes"][0]["contribution"],
        ):
            self.assertIn(html.escape(expected), rendered)

    def test_book_renders_every_visual_with_unique_markers(self):
        from scripts.build import render_lesson

        lesson = json.loads(FIXTURE.read_text(encoding="utf-8"))
        lesson["visuals"] = [
            {
                "type": "flow",
                "title": "First visual",
                "items": ["A", "B"],
                "caption": "First.",
            },
            {
                "type": "flow",
                "title": "Second visual",
                "items": ["C", "D"],
                "caption": "Second.",
            },
        ]
        rendered = render_lesson({"resources": {}}, lesson, 1, 1)

        self.assertIn("First visual", rendered)
        self.assertIn("Second visual", rendered)
        self.assertIn('id="arrow-python-data-structures-0"', rendered)
        self.assertIn('id="arrow-python-data-structures-1"', rendered)


if __name__ == "__main__":
    unittest.main()

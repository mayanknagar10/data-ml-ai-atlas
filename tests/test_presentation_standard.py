import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class PresentationStandardTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.source = json.loads((ROOT / "source" / "atlas.json").read_text(encoding="utf-8"))

    def test_every_active_figure_has_two_authoritative_sources(self):
        resources = self.source["resources"]
        figures = []
        for lesson in self.source["lessons"]:
            visuals = lesson.get("visuals") or ([lesson["visual"]] if lesson.get("visual") else [])
            for visual in visuals:
                figures.append((lesson["slug"], visual))
        self.assertEqual(len(figures), 788)
        for slug, visual in figures:
            with self.subTest(slug=slug, title=visual.get("title")):
                self.assertEqual(visual.get("sourceMode"), "adapted-redraw")
                self.assertGreaterEqual(len(visual.get("grounding", [])), 2)
                self.assertTrue(visual.get("adaptationNote"))
                for grounding in visual["grounding"]:
                    rid = grounding.get("id")
                    self.assertIn(rid, resources)
                    self.assertTrue(resources[rid]["url"].startswith(("https://", "http://")))

    def test_site_uses_publication_typography_and_mathjax(self):
        index = (ROOT / "index.html").read_text(encoding="utf-8")
        styles = (ROOT / "styles.css").read_text(encoding="utf-8")
        for token in ("Plus+Jakarta+Sans", "Source+Serif+4", "IBM+Plex+Mono", "STIX+Two+Text"):
            self.assertIn(token, index)
        self.assertIn("tex-svg.js", index)
        self.assertIn("--font-reading", styles)
        self.assertIn("--font-math", styles)
        self.assertIn(".viz-grounding", styles)

    def test_generated_book_contains_all_grounded_figures_and_formal_math(self):
        book = (ROOT / "book.html").read_text(encoding="utf-8")
        math_lessons = sum(bool(lesson.get("math")) for lesson in self.source["lessons"])
        self.assertEqual(book.count('class="concept-visual'), 788)
        self.assertEqual(book.count('class="viz-ref"'), 1576)
        self.assertEqual(book.count('class="math"'), math_lessons)
        self.assertIn("research-grounded visuals", book)
        self.assertIn("MathJax", book)


if __name__ == "__main__":
    unittest.main()

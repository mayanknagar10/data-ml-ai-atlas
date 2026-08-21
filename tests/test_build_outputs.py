import json
import re
import subprocess
import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def read_data_js() -> dict:
    text = (ROOT / "data.js").read_text(encoding="utf-8")
    match = re.fullmatch(r"const ATLAS = (.*);\s*", text, flags=re.S)
    if not match:
        raise AssertionError("data.js does not contain a parseable ATLAS assignment")
    return json.loads(match.group(1))


class BuildOutputTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        subprocess.run(
            [sys.executable, "scripts/build.py"],
            cwd=ROOT,
            check=True,
            capture_output=True,
            text=True,
        )
        cls.source = json.loads((ROOT / "source" / "atlas.json").read_text(encoding="utf-8"))
        cls.index = read_data_js()

    def test_initial_index_stays_below_two_megabytes(self):
        self.assertLessEqual((ROOT / "data.js").stat().st_size, 2_000_000)

    def test_index_excludes_full_chapter_bodies(self):
        self.assertEqual(len(self.index["lessons"]), len(self.source["lessons"]))
        first = self.index["lessons"][0]
        self.assertNotIn("deepDive", first)
        self.assertNotIn("lab", first)
        self.assertIn("status", first)

    def test_index_retains_resources(self):
        self.assertEqual(self.index["resources"], self.source["resources"])

    def test_every_lesson_has_an_exact_generated_file(self):
        for lesson in self.source["lessons"]:
            path = ROOT / "lesson-data" / f"{lesson['slug']}.json"
            self.assertTrue(path.exists(), lesson["slug"])
            self.assertEqual(json.loads(path.read_text(encoding="utf-8")), lesson)


if __name__ == "__main__":
    unittest.main()

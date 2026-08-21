import copy
import subprocess
import sys
import unittest
from pathlib import Path

from scripts.migrate_chapter_status import migrate


ROOT = Path(__file__).resolve().parents[1]


class StatusMigrationTests(unittest.TestCase):
    def test_migration_is_idempotent_and_preserves_content(self):
        original = {
            "modules": [{"slug": "python", "title": "Python"}],
            "lessons": [
                {"slug": "one", "title": "One", "status": "deep-complete", "why": "reason"},
                {
                    "slug": "two",
                    "title": "Two",
                    "status": "deep-complete",
                    "editorial": {"status": "verified", "verifiedOn": "2026-08-21"},
                },
            ],
            "resources": {},
        }
        snapshot = copy.deepcopy(original)

        migrated = migrate(original)

        self.assertEqual(original, snapshot, "migrate must not mutate its input")
        self.assertNotIn("status", migrated["lessons"][0])
        self.assertEqual(migrated["lessons"][0]["editorial"], {"status": "summary"})
        self.assertEqual(
            migrated["lessons"][1]["editorial"],
            {"status": "verified", "verifiedOn": "2026-08-21"},
        )
        self.assertEqual(migrate(migrated), migrated)

    def test_build_does_not_rewrite_canonical_source(self):
        source_path = ROOT / "source" / "atlas.json"
        before = source_path.read_bytes()

        subprocess.run(
            [sys.executable, "scripts/build.py"],
            cwd=ROOT,
            check=True,
            capture_output=True,
            text=True,
        )

        self.assertEqual(source_path.read_bytes(), before)


if __name__ == "__main__":
    unittest.main()

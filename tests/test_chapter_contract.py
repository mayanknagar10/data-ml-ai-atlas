import json
import unittest
from pathlib import Path

from scripts.chapter_contract import (
    chapter_errors,
    chapter_warnings,
    dependency_errors,
    editorial_status,
    explanatory_word_count,
    lesson_index_record,
    word_count,
)


FIXTURE = Path(__file__).parent / "fixtures" / "chapter_complete.json"


class ChapterContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.lesson = json.loads(FIXTURE.read_text(encoding="utf-8"))
        cls.slugs = {"python-data-structures", "big-o"}
        cls.resources = {
            "python-docs": {"kind": "Official documentation"},
            "mit-algorithms": {"kind": "Primary course"},
        }

    def test_missing_editorial_state_is_summary(self):
        lesson = dict(self.lesson)
        lesson.pop("editorial")
        self.assertEqual(editorial_status(lesson), "summary")

    def test_index_record_excludes_chapter_body(self):
        record = lesson_index_record(self.lesson)
        self.assertEqual(record["slug"], "python-data-structures")
        self.assertIn("description", record)
        self.assertEqual(record["status"], "verified")
        self.assertEqual(record["visualCount"], 1)
        self.assertEqual(record["visualSummaries"][0]["type"], "compare")
        self.assertEqual(
            record["followUpQuestions"][0],
            "Why is list append amortized O(1) rather than O(1) for every call?",
        )
        for key in ("deepSections", "workedExamples", "exercises", "lab"):
            self.assertNotIn(key, record)

    def test_complete_fixture_passes(self):
        self.assertEqual(chapter_errors(self.lesson, self.slugs, self.resources), [])

    def test_root_chapter_may_have_an_empty_prerequisite_list(self):
        lesson = json.loads(json.dumps(self.lesson))
        lesson["prerequisites"] = []
        self.assertEqual(chapter_errors(lesson, self.slugs, self.resources), [])

    def test_invalid_prerequisite_and_resource_fail(self):
        lesson = json.loads(json.dumps(self.lesson))
        lesson["prerequisites"] = ["missing-lesson"]
        lesson["sourceNotes"] = [
            {"resource": "missing-resource", "contribution": "Documents the canonical behavior and constraints."}
        ]
        errors = chapter_errors(lesson, self.slugs, self.resources)
        self.assertTrue(any("missing-lesson" in error for error in errors))
        self.assertTrue(any("missing-resource" in error for error in errors))

    def test_word_count_handles_nested_content(self):
        self.assertEqual(word_count({"a": "one two", "b": ["three", "four five"]}), 5)

    def test_complete_chapter_requires_real_depth(self):
        lesson = json.loads(json.dumps(self.lesson))
        lesson["description"] = "Brief."
        lesson["deepSections"] = [{"id": "short", "title": "Short", "body": "Too short."}]
        errors = chapter_errors(lesson, self.slugs, self.resources)
        self.assertTrue(any("below 1200 explanatory words" in error for error in errors))

    def test_explanatory_count_ignores_metadata(self):
        base = explanatory_word_count(self.lesson)
        lesson = json.loads(json.dumps(self.lesson))
        lesson["title"] = "metadata " * 500
        lesson["roles"] = ["metadata " * 500]
        self.assertEqual(explanatory_word_count(lesson), base)

    def test_verified_chapter_requires_date_and_multiple_source_notes(self):
        lesson = json.loads(json.dumps(self.lesson))
        lesson["editorial"] = {"status": "verified"}
        lesson["sourceNotes"] = lesson["sourceNotes"][:1]
        errors = chapter_errors(lesson, self.slugs, self.resources)
        self.assertTrue(any("verifiedOn" in error for error in errors))
        self.assertTrue(any("at least 2 source notes" in error for error in errors))

    def test_print_only_lab_verification_fails(self):
        lesson = json.loads(json.dumps(self.lesson))
        lesson["lab"] = {
            "goal": "Understand the mechanism.",
            "language": "python",
            "buildIt": "value = 1",
            "useIt": "result = value + 1",
            "verifyIt": "print(result)",
            "shipIt": "Package it with monitoring.",
        }
        errors = chapter_errors(lesson, self.slugs, self.resources)
        self.assertTrue(any("meaningful verification" in error for error in errors))

    def test_visual_anchor_must_reference_a_known_section(self):
        lesson = json.loads(json.dumps(self.lesson))
        lesson["visuals"][0]["afterSection"] = "not-a-section"
        errors = chapter_errors(lesson, self.slugs, self.resources)
        self.assertTrue(any("unknown afterSection" in error for error in errors))

    def test_dependency_cycles_are_reported(self):
        lessons = [
            {"slug": "a", "prerequisites": ["b"]},
            {"slug": "b", "prerequisites": ["c"]},
            {"slug": "c", "prerequisites": ["a"]},
        ]
        errors = dependency_errors(lessons)
        self.assertTrue(any("cycle" in error and "a" in error for error in errors))

    def test_word_count_warning_precedes_failure_threshold(self):
        lesson = json.loads(json.dumps(self.lesson))
        # Preserve the contract while placing the chapter in the editorial warning band.
        lesson["deepSections"] = [{
            "id": "condensed",
            "title": "Condensed",
            "body": "mechanism assumption example tradeoff failure production " * 105,
        }]
        warnings = chapter_warnings(lesson)
        if 1200 <= explanatory_word_count(lesson) < 1500:
            self.assertTrue(any("below the 1500-word target" in warning for warning in warnings))


if __name__ == "__main__":
    unittest.main()

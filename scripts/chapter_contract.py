from __future__ import annotations

import re
from typing import Any


EDITORIAL_STATES = {"summary", "draft", "chapter-complete", "verified"}
FULL_CHAPTER_FIELDS = {
    "description",
    "prerequisites",
    "learningObjectives",
    "deepSections",
    "workedExamples",
    "followUps",
    "exercises",
    "sourceNotes",
    "editorial",
}
BODY_FIELDS = {
    "why",
    "intuition",
    "deepDive",
    "deepSections",
    "math",
    "code",
    "lab",
    "workedExample",
    "workedExamples",
    "commonMistakes",
    "followUps",
    "production",
    "exercises",
    "sourceNotes",
    "visual",
    "visuals",
}
EXPLANATORY_FIELDS = (
    "description",
    "learningObjectives",
    "interviewAnswer",
    "keyPoints",
    "why",
    "intuition",
    "deepDive",
    "deepSections",
    "math",
    "workedExample",
    "workedExamples",
    "commonMistakes",
    "followUps",
    "production",
    "exercises",
    "sourceNotes",
)
INDEX_FIELDS = (
    "slug",
    "title",
    "module",
    "priority",
    "roles",
    "interviewAnswer",
    "keyPoints",
    "resources",
    "featured",
    "description",
    "prerequisites",
    "learningObjectives",
    "editorial",
)


def word_count(value: Any) -> int:
    if isinstance(value, str):
        return len(re.findall(r"\b[\w'-]+\b", value, flags=re.UNICODE))
    if isinstance(value, list):
        return sum(word_count(item) for item in value)
    if isinstance(value, dict):
        return sum(word_count(item) for item in value.values())
    return 0


def editorial_status(lesson: dict) -> str:
    return lesson.get("editorial", {}).get("status", "summary")


def explanatory_word_count(lesson: dict) -> int:
    """Count authored teaching prose without inflating it with metadata or code."""
    return sum(word_count(lesson.get(field)) for field in EXPLANATORY_FIELDS)


def lesson_visuals(lesson: dict) -> list[dict]:
    if lesson.get("visuals"):
        return lesson["visuals"]
    if lesson.get("visual"):
        return [lesson["visual"]]
    return []


def lesson_index_record(lesson: dict) -> dict:
    record = {key: lesson[key] for key in INDEX_FIELDS if key in lesson}
    visuals = lesson_visuals(lesson)
    record["status"] = editorial_status(lesson)
    record["hasLab"] = bool(lesson.get("lab"))
    record["labGoal"] = lesson.get("lab", {}).get("goal", "")
    record["visualCount"] = len(visuals)
    record["visualSummaries"] = [
        {"type": visual.get("type", ""), "title": visual.get("title", "")}
        for visual in visuals
    ]
    record["followUpQuestions"] = [
        item if isinstance(item, str) else item.get("question", "")
        for item in lesson.get("followUps", [])
    ]
    record["estimatedMinutes"] = max(1, round(word_count(lesson) / 220))
    return record


def dependency_errors(lessons: list[dict]) -> list[str]:
    """Return missing prerequisite and directed-cycle errors."""
    by_slug = {lesson.get("slug"): lesson for lesson in lessons if lesson.get("slug")}
    errors: list[str] = []
    for slug, lesson in by_slug.items():
        for prerequisite in lesson.get("prerequisites", []):
            if prerequisite not in by_slug:
                errors.append(f"{slug}: unknown prerequisite {prerequisite}")

    state: dict[str, int] = {}
    stack: list[str] = []
    reported: set[tuple[str, ...]] = set()

    def visit(slug: str) -> None:
        state[slug] = 1
        stack.append(slug)
        for prerequisite in by_slug[slug].get("prerequisites", []):
            if prerequisite not in by_slug:
                continue
            if state.get(prerequisite, 0) == 0:
                visit(prerequisite)
            elif state.get(prerequisite) == 1:
                start = stack.index(prerequisite)
                cycle = tuple(stack[start:] + [prerequisite])
                if cycle not in reported:
                    reported.add(cycle)
                    errors.append(f"prerequisite cycle: {' -> '.join(cycle)}")
        stack.pop()
        state[slug] = 2

    for slug in by_slug:
        if state.get(slug, 0) == 0:
            visit(slug)
    return errors


def chapter_warnings(lesson: dict) -> list[str]:
    if editorial_status(lesson) not in {"chapter-complete", "verified"}:
        return []
    slug = lesson.get("slug", "<missing-slug>")
    count = explanatory_word_count(lesson)
    warnings: list[str] = []
    if 1200 <= count < 1500:
        warnings.append(f"{slug}: {count} explanatory words is below the 1500-word target")
    if word_count(lesson.get("description")) > 300:
        warnings.append(f"{slug}: description exceeds the 300-word orientation target")
    return warnings


def chapter_errors(
    lesson: dict,
    lesson_slugs: set[str],
    resources: dict[str, dict],
) -> list[str]:
    slug = lesson.get("slug", "<missing-slug>")
    errors: list[str] = []
    status = editorial_status(lesson)
    if status not in EDITORIAL_STATES:
        errors.append(f"{slug}: invalid editorial status {status}")

    for prerequisite in lesson.get("prerequisites", []):
        if prerequisite not in lesson_slugs:
            errors.append(f"{slug}: unknown prerequisite {prerequisite}")

    if status not in {"chapter-complete", "verified"}:
        return errors

    missing = sorted(
        field for field in FULL_CHAPTER_FIELDS
        if field not in lesson or (field != "prerequisites" and not lesson.get(field))
    )
    errors.extend(f"{slug}: missing {field}" for field in missing)

    if word_count(lesson.get("description")) < 150:
        errors.append(f"{slug}: description below 150 words")
    if len(lesson.get("learningObjectives", [])) < 3:
        errors.append(f"{slug}: fewer than 3 learning objectives")
    if word_count(lesson.get("deepSections")) < 500:
        errors.append(f"{slug}: deep sections below 500 words")
    if explanatory_word_count(lesson) < 1200:
        errors.append(f"{slug}: below 1200 explanatory words")
    if len(lesson.get("workedExamples", [])) < 1:
        errors.append(f"{slug}: no worked example")

    follow_ups = lesson.get("followUps", [])
    if len(follow_ups) < 2 or any(
        not isinstance(item, dict)
        or not item.get("question")
        or not item.get("answer")
        for item in follow_ups
    ):
        errors.append(f"{slug}: follow-ups require answered question objects")

    exercises = lesson.get("exercises", [])
    if len(exercises) < 3 or any(
        not isinstance(item, dict)
        or not item.get("prompt")
        or not item.get("solution")
        for item in exercises
    ):
        errors.append(f"{slug}: exercises require prompts and solutions")

    for note in lesson.get("sourceNotes", []):
        if note.get("resource") not in resources:
            errors.append(f"{slug}: unknown resource {note.get('resource')}")
        if word_count(note.get("contribution", "")) < 5:
            errors.append(f"{slug}: source contribution is too short")

    if status == "verified":
        if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", lesson.get("editorial", {}).get("verifiedOn", "")):
            errors.append(f"{slug}: verified chapter requires editorial.verifiedOn in YYYY-MM-DD form")
        if explanatory_word_count(lesson) < 1500:
            errors.append(f"{slug}: verified chapter is below the 1500-word target")
        notes = lesson.get("sourceNotes", [])
        if len(notes) < 2:
            errors.append(f"{slug}: verified chapter requires at least 2 source notes")
        if len({note.get("resource") for note in notes if note.get("resource")}) < 2:
            errors.append(f"{slug}: verified chapter requires at least 2 distinct source resources")
        if len(lesson_visuals(lesson)) < 2:
            errors.append(f"{slug}: verified chapter requires at least 2 original visual models")
        lab = lesson.get("lab")
        if not lab:
            errors.append(f"{slug}: verified chapter requires a runnable Python lab")
        else:
            if lab.get("language") != "python":
                errors.append(f"{slug}: verified chapter lab must use Python")
            for key in ("goal", "buildIt", "useIt", "shipIt", "verifyIt"):
                if not str(lab.get(key, "")).strip():
                    errors.append(f"{slug}: verified chapter lab missing {key}")

    deep_ids = {
        section.get("id") for section in lesson.get("deepSections", []) if section.get("id")
    }
    known_anchors = {
        "description", "why", "intuition", "deep", "formal-view", "worked-examples",
        "lab", "production", "common-mistakes", "follow-ups", "exercises", "references",
        *deep_ids,
    }
    for visual in lesson_visuals(lesson):
        anchor = visual.get("afterSection")
        if anchor and anchor not in known_anchors:
            errors.append(f"{slug}: visual has unknown afterSection {anchor}")

    lab = lesson.get("lab")
    if lab:
        verification = str(lab.get("verifyIt", ""))
        if not re.search(r"\b(assert|raises|assert_|expect|invariant|check_)\b", verification, re.I):
            errors.append(f"{slug}: lab verifyIt requires meaningful verification, not print-only output")

    return errors

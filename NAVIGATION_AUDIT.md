# Navigation Integrity Audit — v2.4.1

This release fixes a UI-state issue that could make valid module content appear missing.

## Root cause

Module pages reused the global `lessonVisible()` predicate, which included the persisted role stored in `localStorage`. Because module pages did not display a role control, this became a hidden filter. A learner who had selected Data Scientist, AI Engineer, or another role on the home page could open a module such as Computer Vision and see only a subset—or zero—of the lessons that were actually present.

A second taxonomy issue used the legacy lesson-role ID `genai` in 11 lessons, while the UI and analyzer use `aie` for AI / GenAI Engineer.

## Fixes

- Module pages explicitly ignore the global role filter while retaining their visible search and priority filters.
- Saved role values are validated against the canonical role list and invalid/stale values fall back to `all`.
- The 11 legacy `genai` lesson-role tags are normalized to `aie`.
- Role options are centralized in `app.js` so home/practice/analyzer controls do not drift apart.
- Validation now rejects unknown role IDs, duplicate role IDs, lessons without roles, orphan lessons, and empty modules.
- Regression tests assert the Computer Vision module contains all 14 lessons and module rendering cannot silently inherit the global role filter.

## Verified release state

- 45 modules, all non-empty
- 394 unique lessons, no orphan lesson/module references
- Computer Vision: 14/14 lessons in source and generated index
- Canonical role IDs: `all`, `ds`, `da`, `as`, `mle`, `aie`, `de`, `cv`
- Unknown lesson role IDs: 0
- 394/394 lessons verified
- 394/394 generated lab verification programs runtime-tested successfully
- 57/57 unit tests pass
- 396 HTML files pass local link/source checks

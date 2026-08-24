# Validation Report — v2.4.1 Navigation Fix

The v2.4.1 working tree was rebuilt from `source/atlas.json` and validated without committing or pushing changes.

## Curriculum integrity

- 45/45 modules are non-empty.
- 394/394 lesson slugs are unique.
- 0 orphan lessons reference an unknown module.
- 394/394 lessons have editorial status `verified`.
- Computer Vision contains 14/14 lessons in both canonical source and generated `data.js`.
- All lesson role IDs belong to the canonical UI taxonomy: `all`, `ds`, `da`, `as`, `mle`, `aie`, `de`, `cv`.
- 11 legacy `genai` lesson-role tags were normalized to `aie`.

## Navigation fix

Module pages no longer inherit the persisted global role filter. Search and priority filters remain available because they are visible controls on the module page. Invalid or stale `atlas-role` localStorage values now fall back to `all`.

## Automated checks

- `python validate.py` — PASS
- `python -m unittest discover -s tests -p 'test_*.py'` — 57/57 PASS
- `python scripts/check_site.py` — PASS across 396 HTML files
- `python scripts/check_labs.py` — PASS across 1,576 generated Python files
- `python scripts/check_all_labs_runtime.py` — 394/394 `verify_it.py` labs executed successfully
- `node --check app.js` — PASS
- analyzer deterministic smoke tests — PASS
- chapter loader checks — PASS
- chapter reader checks — PASS

No Git commit or push was performed while producing this corrected archive.

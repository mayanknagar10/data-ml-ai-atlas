# Validation Report — v2.4.3 Always-on Motion + Deployment Repair

The v2.4.3 working tree restores the role-dynamic curriculum from the known-good v2.4.2 build, removes the manual motion toggle, and adds deployment guards for the merge/caching problems found on GitHub `main`. No commit or push was performed while producing this archive.

## Curriculum and navigation integrity

- 45/45 modules are non-empty.
- 394/394 lesson slugs are unique.
- 0 orphan lessons reference an unknown module.
- 394/394 lessons have editorial status `verified`.
- Computer Vision contains 14/14 lessons in canonical source and generated `data.js`.
- Role selection dynamically hides homepage modules that have no relevant lessons.
- Direct module pages ignore the hidden global role filter and keep the full module content visible.
- All lesson role IDs belong to the canonical UI taxonomy: `all`, `ds`, `da`, `as`, `mle`, `aie`, `de`, `cv`.

## Ambient background repair

- The 3D canvas background starts automatically in light and dark modes.
- The Motion on/off navigation button is removed.
- Legacy `atlas-motion` localStorage values are ignored.
- `prefers-reduced-motion: reduce` remains the accessibility exception.
- Rendering pauses when the tab is hidden.
- Theme switching redraws the scene with the appropriate palette.
- Core CSS/background/app files use a `?v=2.4.3` cache-busting suffix in `index.html`.
- Validation rejects unresolved Git conflict markers in `styles.css`.

## Automated checks

- `python validate.py` — PASS
- `python -m unittest discover -s tests -v` — 62/62 PASS
- `python scripts/check_site.py` — PASS across 396 HTML files
- `python scripts/check_labs.py` — PASS across 1,576 generated Python files
- `python scripts/check_all_labs_runtime.py` — 394/394 `verify_it.py` labs executed successfully
- `node --check app.js` — PASS
- `node --check background.js` — PASS
- analyzer deterministic smoke tests — PASS
- chapter loader checks — PASS
- chapter reader checks — PASS

No Git commit or push was performed while producing this corrected archive.

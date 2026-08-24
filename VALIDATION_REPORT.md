# Validation Report — v2.5.1

Validated the exact v2.5.1 working tree after the calm-reading and motion-performance pass.

## Curriculum/content

- 394/394 lessons are `verified`.
- 45/45 modules are non-empty.
- 394 runnable Python labs are generated.
- 788 research-grounded visuals are present.
- 312 curated resources are present.
- Split-loading architecture remains intact; the initial lesson index excludes chapter bodies.

## Automated checks

- `python validate.py` — pass.
- `python -m unittest discover -s tests -v` — 75/75 tests pass.
- `python scripts/check_site.py` — 396 HTML pages pass local href/src checks.
- `python scripts/check_labs.py` — 1,576 generated Python files syntax-check.
- `node --check app.js` — pass.
- `node --check analyzer.js` — pass.
- `node --check background.js` — pass.
- `node --check chapter-reader.js` — pass.
- `node scripts/check_analyzer.js` — pass.
- `node scripts/check_chapter_loader.js` — pass.
- `node scripts/check_chapter_reader.js` — pass.
- `python scripts/check_all_labs_runtime.py` — 394/394 generated `verify_it.py` labs execute successfully.

## v2.5.1 UX regression gates

- Frontend assets are cache-busted to v2.5.1.
- Ambient background uses a restrained cool-neutral palette and no violet/teal split.
- Continuous canvas motion uses requestAnimationFrame at native display cadence with a lighter scene.
- Dense reading surfaces explicitly disable backdrop-filter.
- Long-form lesson copy is capped at 68ch.
- Lesson pages quiet the background in the central reading lane while preserving edge motion.
- In-lesson TOC controls do not mutate the SPA hash route.
- Active TOC section tracking uses IntersectionObserver.
- Reading progress updates with `transform: scaleX()` rather than changing width.
- Reduced-motion users receive a static ambient field.

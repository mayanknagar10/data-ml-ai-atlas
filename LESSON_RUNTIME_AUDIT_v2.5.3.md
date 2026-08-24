# Lesson Runtime Audit — v2.5.3

## Root cause
The deployed frontend mixed the newer v2.5 lesson reader with an older app runtime and stale cache keys. The reader expected module-position context, completion behavior, reading-progress wiring, and SPA-safe TOC controls that the older runtime did not provide.

## Fix
- Synchronized `app.js`, `chapter-reader.js`, `styles.css`, and `index.html`.
- Cache-busted every core runtime asset with `v2.5.3`.
- Preserved the v2.5.2 solid lesson progress rail.
- Added an executable reader regression for `python-data-structures`.

## Verification
- 394/394 lessons verified
- 45 modules
- 394 runnable labs
- 788 visuals
- 79/79 unit tests
- 396 HTML pages checked
- 1,576 generated Python files syntax-checked
- `python-data-structures` rendered through the actual chapter reader successfully

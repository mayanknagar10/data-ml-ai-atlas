# v2.5.3 — Lesson Runtime Synchronization

This patch fixes lesson routes that could fail or partially initialize when v2.5.x `chapter-reader.js` was deployed alongside an older `app.js` runtime.

- Synchronizes `app.js`, `chapter-reader.js`, `styles.css`, and index asset versions.
- Cache-busts all core runtime assets at `v2.5.3`.
- Preserves the v2.5.2 solid lesson progress rail.
- Restores lesson module-position context, completion controls, active TOC scrolling, and reading progress wiring.
- Adds a regression test that renders `python-data-structures` through the real chapter reader.

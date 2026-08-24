# v2.5.5 — Header-integrated reading progress

- Removes the standalone sticky/fixed lesson progress rail that could visually cut through chapter text while scrolling.
- Integrates the reading-progress indicator into the bottom edge of the sticky header.
- Makes the lesson header fully solid so chapter text never appears above or behind the progress line.
- Keeps progress tracking scoped to the chapter article.
- Synchronizes core frontend cache keys at `v2.5.5`.
- Adds regression tests that require the progress indicator to live inside the header.

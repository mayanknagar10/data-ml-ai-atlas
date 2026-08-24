# Atlas v2.4.4 frontend hotfix

Replace these four files at the repository root:

- `index.html`
- `styles.css`
- `background.js` (new file; it must exist in the repo)
- `app.js`

This patch restores both features that are missing from the current `main` branch:

1. Always-on animated perspective background in light and dark themes.
2. Role-dynamic curriculum module filtering while preserving complete module pages.

Important checks after push:

- Repository root visibly contains `background.js`.
- `index.html` contains `<canvas id="atlasBackground" class="atlas-background" ...>`.
- `index.html` loads `background.js?v=2.4.4` before `app.js?v=2.4.4`.
- `styles.css` contains `.atlas-background`.
- There is no Motion button; motion is automatic unless the OS requests reduced motion.

The background intensity is slightly stronger than v2.4.3 so it is clearly visible without overpowering lesson content.

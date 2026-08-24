# v2.4.3 — Always-on Ambient Background + Deployment Repair

## Fixes

- Restores the v2.4.2 role-dynamic curriculum behavior after a merge on `main` reintroduced the older module filter logic.
- Removes the Motion on/off navigation control.
- Ambient 3D motion now initializes automatically in both light and dark themes.
- Legacy `atlas-motion=off` localStorage values are ignored, so returning users immediately receive the animated background.
- Keeps `prefers-reduced-motion: reduce` as the accessibility exception and pauses rendering when the tab is hidden.
- Adds cache-busting query strings to `styles.css`, `background.js`, and `app.js` so GitHub Pages clients do not retain stale v2.4.2 assets after deployment.
- Adds validation that rejects unresolved Git merge conflict markers in `styles.css`.

## Curriculum behavior

Role selection dynamically hides modules with no relevant lessons on the curriculum homepage. Direct module routes still show the complete module lesson set, avoiding the previous hidden-role-filter bug.

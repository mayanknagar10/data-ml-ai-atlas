# Atlas v2.4.4 CI fix

The v2.4.4 frontend hotfix changed the cache-busted background script from `background.js?v=2.4.3` to `background.js?v=2.4.4`, but `validate.py` still required the old literal version string. This caused the GitHub Actions deployment to fail at `python validate.py`.

Replace these files in the repository root:

- `validate.py`
- `.github/workflows/pages.yml`

Changes:

1. The background validation now accepts the v2.4.x cache-busted background asset instead of hard-coding v2.4.3.
2. GitHub Actions now syntax-checks `background.js` along with the other JavaScript files.

Reproduced workflow after this fix:

- build: PASS — 394 lessons
- validate.py: PASS — 394 verified, 45 modules, 394 labs, 788 visuals
- check_labs.py: PASS — 1,576 Python files
- check_site.py: PASS — 396 HTML pages
- node syntax: PASS — app.js, analyzer.js, background.js
- analyzer smoke test: PASS

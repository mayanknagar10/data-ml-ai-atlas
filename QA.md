# Data, ML & AI Atlas — QA Report

## Automated integrity checks

The current repository is checked with:

```bash
python scripts/build.py
python validate.py
python scripts/check_labs.py
python scripts/check_site.py
node --check app.js
```

The checks cover:

- source/build consistency from `source/atlas.json`
- unique lesson slugs
- breadth guardrails for major disciplines
- required deep-complete lesson fields
- resource schema and HTTPS URLs
- runnable lab generation and Python syntax
- visual schema and minimum visual coverage
- a visual on every very-high-priority lesson
- generated book lesson coverage
- dark-mode hooks
- literal local href/src targets in generated HTML
- duplicate HTML IDs

## Browser rendering QA

The visual/layout layer introduced in v2.1 was rendered in headless Chromium before this final audit. v2.2 changes curriculum/content and deployment metadata rather than the responsive CSS/visual renderer; the current build is additionally checked structurally for generated lesson/book coverage, local links and JavaScript syntax. Representative routes from the visual QA included:

- MSE vs MAE curve
- self-attention heatmap
- time-series decomposition
- causal DAG
- ML system-design flow
- data-storytelling map
- the long-form book

All supported visual types were instantiated and checked for non-empty rendering:

- flow
- layers
- curve
- scatter
- bars
- matrix
- network
- schema
- compare
- concept-map
- funnel
- map

Mobile QA was run at a 390px viewport. A horizontal-overflow issue caused by grid children and long code blocks was found and fixed with explicit `min-width: 0` constraints. The previous mobile behavior that hid all navigation links was also replaced by an accessible menu.

## Current release metrics

- 394 deep-complete lessons
- 45 modules
- 58 runnable labs
- 222 original lesson visuals
- 120 curated external resources

## Known boundary

External resources can move or change over time. CI validates URL format and all local generated links, but it intentionally does not crawl every third-party website on each deployment. Fast-moving API/tool details should still be checked against official documentation.


## Resume + JD analyzer

- `#/analyzer` is validated as a required navigation route.
- `analyzer.js` is syntax-checked in CI.
- Analyzer document text is kept only in page memory and is not written to localStorage.
- “Gap” labels mean “not strongly evidenced in resume text,” not a claim about candidate competence.
- PDF input uses client-side PDF.js; plain-text paste remains available as a dependency-free fallback.

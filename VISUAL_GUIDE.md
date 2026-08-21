# Data, ML & AI Atlas — Visual Guide

Visuals are authored as data in `source/atlas.json` and rendered twice:

- dynamically in the website by `visualHtml()` in `app.js`
- statically in the long-form book by `render_visual()` in `scripts/build.py`

This keeps the website and book aligned.

## Supported visual types

- `flow` — pipelines, lifecycles, sequential transformations
- `layers` — model stacks, abstraction layers, memory stacks
- `curve` — losses, calibration, forecasting, optimization and trade-offs
- `scatter` — regression, geometry, clusters, embeddings
- `bars` — class balance, categorical comparison, relative quantities
- `matrix` — confusion matrices, attention, cohorts, spectrograms
- `network` — DAGs, graphs, architectures and distributed topology
- `schema` — hub-and-spoke schemas and platform maps
- `compare` — side-by-side conceptual comparison
- `concept-map` — compact memory anchors around a central concept
- `funnel` — sequential conversion / attrition stages
- `map` — spatial pattern illustration when geography is part of the question

## Example

```json
"visuals": [{
  "type": "flow",
  "title": "Production ML lifecycle",
  "items": [
    "Data ingestion",
    "Validation / features",
    "Train + evaluate",
    "Registry",
    "Deploy",
    "Monitor"
  ],
  "caption": "Production ML is a continuous system around the model, not only a training script.",
  "afterSection": "lifecycle"
}]
```

## Visual rules

1. Use a visual only when it makes a relationship, trade-off or process easier to understand.
2. Prefer one strong visual over several decorative illustrations, but use multiple visuals when they explain genuinely different relationships in a full chapter.
3. Every visual needs a title and explanatory caption.
4. Curves and bars that are not based on measured data must remain explicitly conceptual.
5. Do not copy diagrams from papers, courses or blogs into the repository. Re-express the idea using an original Atlas diagram and link the original source in the lesson resources.
6. Keep labels short enough to remain readable on mobile.
7. Check both light and dark themes.
8. Check print/book rendering when adding a new visual type.
9. `very-high` priority lessons are expected to have a visual unless the topic is genuinely non-visual.
10. `afterSection` may reference a structured deep-section ID or a standard chapter anchor such as `intuition`, `formal-view`, `worked-examples`, or `production`.

## Design intent

The Atlas uses visuals in the spirit of strong visual pedagogy such as Distill, Google ML Crash Course, Dive into Deep Learning, Forecasting: Principles and Practice and visual transformer explainers, while keeping the actual diagrams original and consistent with the Atlas design system.

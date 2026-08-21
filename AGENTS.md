# AGENTS.md — Data, ML & AI Atlas

## Mission
Maintain a technically rigorous, broad learning platform for Data Science, Statistics, ML/AI Engineering, Analytics and Data Engineering, with interview practice as one learning mode. Correctness and explanation quality matter more than adding topic count.

## Source of truth

**Edit `source/atlas.json`.** Do not hand-edit generated `data.js`, `curriculum.json`, `resources.json`, `CURRICULUM.md`, `book.html`, or `labs/`.

After any source/content change:

```bash
python scripts/build.py
python validate.py
node --check app.js
```

## Rules for Codex / coding agents

1. Read `CONTENT_STANDARD.md` before changing lessons.
2. Preserve the structure: interview answer → why → intuition → deep explanation → formal view when useful → worked example → code/lab when useful → mistakes → follow-ups → production/system-design connection → curated references.
3. For algorithmic/engineering concepts where implementation materially helps, prefer the lab rhythm **Build It → Use It → Verify It → Ship It**. Put the source lab definition in `source/atlas.json`; never edit generated `labs/` by hand.
4. Build-it code should expose the mechanism. Use-it code should show the idiomatic library/framework path. Verify-it must contain meaningful assertions, metrics, invariants or sanity checks.
5. Never replace precise explanations with generic filler merely to make a section longer.
6. Prefer original papers, Stanford/MIT/Harvard/Berkeley-style course material, official documentation, and excellent teaching resources. Avoid SEO/tutorial farms and Wikipedia as the primary learning reference.
7. Verify fast-moving services/APIs against current official documentation before changing them.
8. Do not invent benchmarks, architecture details, guarantees, or production claims.
9. Keep math separate from implementation details and define notation.
10. Code examples must be small enough to understand and runnable in principle. Do not add unnecessary dependencies.
11. For GenAI, distinguish perceptual realism from factual/physical correctness. For LLM systems, separate retrieval/tool accuracy from generation quality.
12. For production ML, discuss reliability, monitoring, rollback, cost, security and failure behavior when relevant.
13. Preserve the static GitHub Pages architecture unless an intentional migration is documented.
14. Preserve theme behavior: first visit follows `prefers-color-scheme`; manual choice persists in `localStorage`. Site, book and generated lab pages must remain readable in both themes.
15. Run build + validation before committing. Run `node --check app.js` after JavaScript changes.

## Good requests

“Improve the `flow-matching` lesson. Verify the mathematical explanation against the original paper and a strong pedagogical source; add one minimal derivation, one runnable Build/Use/Verify lab and one interview misconception. Do not change unrelated lessons.”

“Add an ARIMA lesson with chronological evaluation, a from-scratch intuition example, statsmodels use-it code, sanity checks, and references to Forecasting: Principles and Practice plus official statsmodels docs.”

## Bad request

“Generate 200 more AI lessons.”

## Visuals

- `source/atlas.json` is also the source of truth for lesson visuals.
- Use only the visual types documented in `VISUAL_GUIDE.md` unless you update both web and book renderers plus validation.
- Do not paste copied diagrams from external sites or papers. Recreate the concept as an original Atlas diagram and preserve the external source as a lesson reference.
- Keep titles/captions concise, mark illustrative numeric plots as conceptual, and verify mobile + dark mode after visual changes.

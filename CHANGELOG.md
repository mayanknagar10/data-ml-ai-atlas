# Changelog


## v2.4.5 — Visible Background + Atlas Brand Mark

- Made the light/dark ambient background clearly visible with canvas depth animation plus a CSS aurora fallback.
- Removed any manual motion state; the background starts automatically.
- Added a dedicated Atlas neural-network mark for favicon, navbar branding, touch icon, and manifest.
- Added validation coverage for the animated background and brand assets.

## v2.4.2 — Role-aware curriculum and ambient 3D background

- Made the homepage curriculum role-aware: selecting Data Scientist, AI / GenAI Engineer, Computer Vision, and other roles now hides modules with no relevant lessons, while direct module pages still expose the complete module content.
- Module cards show relevant-vs-total lesson counts under active filters and include a one-click “Show full curriculum” reset. Search and priority filters now participate in the same dynamic module map.
- Added a custom dependency-free perspective-projected neural lattice background with subtle pointer/scroll parallax for light and dark themes.
- Added an explicit Motion control, persistent user preference, `prefers-reduced-motion` support, Page Visibility pausing, adaptive mobile density, and capped device-pixel ratio for performance.
- Added regression tests and validation gates for dynamic module visibility and ambient-background accessibility/performance wiring.

## v2.4.1 — Module visibility and role taxonomy fix

- Fixed module pages inheriting a persisted global role filter that could make valid lesson content appear missing. Module pages now always start from the complete module lesson set and only apply the visible search/priority controls.
- Normalized 11 legacy `genai` lesson-role tags to the canonical `aie` (AI / GenAI Engineer) role used by the UI and analyzer.
- Added persisted-role sanitization so unknown/stale localStorage values fall back to `all`.
- Added navigation-integrity validation for module coverage, role IDs, CV lesson count, and module-page filter behavior.

## v2.3 — Local Resume + JD preparation mapper

- Added a privacy-first `#/analyzer` workflow for uploading/pasting a resume and job description.
- Analysis is deterministic and browser-side: no LLM, API, backend, account or document upload is required.
- Added PDF/TXT/Markdown text extraction, with PDF.js loaded only when a PDF is selected.
- Maps resume and JD evidence to Atlas lessons, separates overlap from JD-emphasized topics not strongly evidenced in the resume, and generates a day-by-day study plan.
- Added direct lesson links, role auto-detection/override, copyable preparation plans, and explicit privacy/interpretation notes.
- CI now syntax-checks the analyzer and validation requires the analyzer route/wiring.

## v2.2 — Final breadth and publishing audit

- Expanded from 40 to **45 modules**, from 343 to **394 deep-complete lessons**, and to **120 curated resources**.
- Added first-class **Information Theory**, **Probabilistic ML & Uncertainty**, **Learning Theory & Generalization**, **Data Mining / Sketches / Web Algorithms**, and **Geospatial Data Science** tracks.
- Added Gaussian processes, Bayesian networks, HMMs, variational inference, aleatoric/epistemic uncertainty, proper scoring rules, conformal prediction and selective prediction.
- Added entropy, cross-entropy, KL divergence, mutual information, perplexity and information-bottleneck foundations.
- Added association rules, MinHash/LSH, Bloom filters, Count-Min Sketch, HyperLogLog and PageRank.
- Expanded Transformers with causal masks, cross-attention, RoPE, MoE and the LLM training lifecycle.
- Expanded MLOps with feature stores, training-serving skew, lineage/reproducibility and ML quality gates.
- Reframed cloud content from resume-specific Azure→AWS preparation into provider-neutral cloud primitives and AWS/Azure/GCP mapping.
- Added topic modeling and practical encoder fine-tuning to NLP foundations.
- Updated GitHub Pages workflow to current Actions versions and added JavaScript syntax validation in CI.
- `COVERAGE.md` is now generated from the single source of truth so release counts cannot silently become stale.

## v2.1 — Visual Edition

- Added 216 original lesson visuals generated from the single source of truth.
- Added architecture/pipeline diagrams, curves, scatter plots, matrices/heatmaps, DAGs, network graphs, funnels, comparisons and a map example where visual reasoning helps.
- Added visual-first references from Distill, Google MLCC interactive exercises and The Illustrated Transformer.
- Added a `#/visuals` catalog for browsing lessons by visual model.
- Added visual coverage/schema validation and a local-link checker to CI.
- Improved mobile navigation with an accessible menu rather than hiding navigation links.
- Visuals are dark-mode, mobile and print/PDF aware and explicitly labeled when conceptual rather than measured.

## v2.0 — General Data, ML & AI curriculum

- Reframed the product from an AI-engineering/resume-shaped atlas into a broad Data Science, Analytics, ML, Data Engineering, Applied Science and AI curriculum.
- Expanded to 40 modules and 343 deep-complete lessons.
- Split Time Series and Causal Inference into independent tracks and expanded forecasting to 19 lessons.
- Added Bayesian statistics, EDA/visualization, regression/GLMs, product experimentation, anomaly detection, survival analysis, optimization, recommender systems, information retrieval, analytics engineering, distributed systems and speech/audio.
- Added Data/Product Analyst and Applied Scientist study paths.
- Expanded executable coverage to 57 Build It → Use It → Ship It → Verify It labs.
- Added curriculum breadth guardrails in validation and `COVERAGE.md`.
- Grouped the homepage curriculum into six navigable knowledge families.

## v1.2 — Runnable-code depth, RL, multimodal and persistent dark mode

- Expanded to **23 curriculum modules**, **171 deep-complete lessons**, **75 curated resources** and **35 runnable labs**
- Added **Reinforcement Learning & Preference Optimization**: MDPs, Bellman/value functions, exploration, Q-learning/DQN, policy gradients, actor-critic, PPO and RLHF/preference optimization
- Added **Multimodal AI & Vision-Language Systems**: multimodal fusion, CLIP, VLM architecture, LLaVA-style instruction tuning, visual tokens/resamplers, grounding evaluation and speech/audio foundations
- Upgraded code-lab rhythm to **Build It → Use It → Ship It → Verify It**
- Generated `build_it.py`, standalone `use_it.py`, standalone `verify_it.py`, `lab.py`, `ship_it.md`, README and browser page for each lab
- Added code labs for hypothesis tests, A/B tests, activation functions, ViT patching, VQ, GAN objective, embedding retrieval, tool validation, GraphSAGE, link prediction and model registry in addition to existing labs
- Added persistent dark/light mode before first paint on the main site; book and generated lab pages share the same saved preference
- Added stronger dark-theme styling for the long-form book
- Added `LESSON_TEMPLATE.md`, `requirements-labs.txt` and `scripts/check_labs.py`
- CI now rebuilds, validates curriculum, validates generated lab syntax and deploys to GitHub Pages
- Added primary/high-quality resources including Stanford CS234, Berkeley CS285, DeepMind RL lectures, OpenAI Spinning Up, CLIP, LLaVA, Hugging Face VLM material and Whisper

## v1.1 — First code-lab and missing-domain expansion

- Expanded from 18 to **21 curriculum modules**
- Expanded from 131 to **156 deep-complete lessons**
- Expanded from 52 to **64 curated learning resources**
- Added **21 runnable code labs** with Build It → Use It → Verify It → Ship It structure
- Generated standalone lab source files and browser pages under `labs/`
- Added persistent **dark/light mode** to the main site, book edition and generated lab pages; first visit follows the operating-system preference
- Added a Code Labs catalog to site navigation and lesson-level copy/run links
- Added **Time Series, Forecasting & Causal Inference** coverage
- Added **AI Performance & Scaling** coverage (profiling, mixed precision, quantization, batching, distributed training, compilation, GPU memory)
- Added **AI Safety, Security & Governance** coverage (prompt injection, RAG security, model supply chain, privacy, red teaming, guardrails and human escalation)
- Strengthened source library with Forecasting: Principles and Practice, causal-inference courses/books, PyTorch performance guidance, OWASP GenAI Security, NIST AI RMF and MITRE ATLAS
- Strengthened validation: lab contracts, generated lab files, syntax checks, book/theme/navigation consistency
- Updated content and Codex standards so generated files remain reproducible from `source/atlas.json`

## v1.0 — Core complete

- 18 curriculum modules
- 131 deep-complete interview/engineering lessons
- 52 curated external learning resources
- Full lesson structure: interview answer, intuition, deep explanation, example, mistakes, follow-ups and production connection
- Math/code where they add real value
- Single source of truth: `source/atlas.json`
- `scripts/build.py` regenerates website data, curriculum snapshot, resources and `book.html`
- Strict `validate.py` checks all deep-complete requirements and stale generated outputs
- Search, priorities, role filters and local study progress
- Role-based study paths
- Random interview practice mode with revealable answers and follow-ups
- Long-form searchable/printable book edition
- GitHub Pages build + validation + deployment workflow
- Updated `AGENTS.md` for safe Codex collaboration
- Updated content quality/source standards

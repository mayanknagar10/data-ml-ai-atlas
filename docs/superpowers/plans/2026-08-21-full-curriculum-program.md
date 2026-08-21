# Full Curriculum Expansion Program Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert every existing Atlas lesson into a verified, self-contained chapter and add only curriculum gaps justified by a module audit.

**Architecture:** The program starts with a backward-compatible chapter schema, split lesson delivery, a long-form reader, and enforceable quality gates. Content then advances in prerequisite-ordered module waves; each module receives its own just-in-time research pack and reviewable commits before the next module begins.

**Tech Stack:** Python 3 build/validation scripts, JSON source data, vanilla JavaScript, static HTML/CSS/SVG, Node.js syntax/smoke checks, GitHub Pages.

## Global Constraints

- `source/atlas.json` remains the single source of truth.
- All 394 existing lesson slugs remain available.
- Existing generated files are rebuilt, never hand-edited.
- Every full chapter follows the approved 1,500-3,000-word contract unless precision justifies a different length.
- Every topic receives a 150-300-word introduction.
- Sources prioritize original papers, primary university material, official documentation, authoritative textbooks, and strong production material.
- External content is synthesized and attributed; it is never copied.
- Fast-moving APIs and services are verified against current official documentation in the same batch.
- Visuals are original, explanatory, mobile-readable, theme-aware, and rendered in both site and book.
- Labs use Build It -> Use It -> Verify It -> Ship It when implementation materially improves understanding.
- The static GitHub Pages architecture, local progress, and persistent theme behavior remain intact.
- A module is not complete until build, validation, site, JavaScript, and relevant lab checks pass.

---

### Task 1: Establish the Full-Chapter Platform Foundation

**Files:**
- Follow: `docs/superpowers/plans/2026-08-21-full-chapter-foundation.md`
- Modify: `source/atlas.json`
- Modify: `scripts/build.py`
- Modify: `validate.py`
- Modify: `app.js`
- Modify: `styles.css`
- Modify: `index.html`
- Create: chapter contract, loader, renderer, and their tests as specified in the foundation plan

**Interfaces:**
- Consumes: the approved design in `docs/superpowers/specs/2026-08-21-full-chapter-curriculum-design.md`
- Produces: a backward-compatible full-chapter schema, per-lesson generated JSON, lazy loading, the long-form reader, honest editorial states, and a verified six-chapter Python pilot

- [ ] **Step 1: Execute the foundation plan task by task**

Run the commands and use the exact interfaces in `docs/superpowers/plans/2026-08-21-full-chapter-foundation.md`.

- [ ] **Step 2: Verify the foundation milestone**

Run:

```bash
python -m unittest discover -s tests -v
python scripts/build.py
python validate.py
python scripts/check_labs.py
python scripts/check_site.py
node --check app.js
node --check analyzer.js
node scripts/check_chapter_loader.js
node scripts/check_chapter_reader.js
node scripts/check_analyzer.js
```

Expected: every command exits 0; the six `python` module lessons are `verified`; unchanged lessons remain `summary`; `data.js` stays below the payload limit; generated lesson JSON exists for every slug.

- [ ] **Step 3: Commit the foundation milestone**

```bash
git add source/atlas.json scripts tests app.js styles.css index.html chapter-loader.js chapter-reader.js data.js lesson-data curriculum.json resources.json CURRICULUM.md COVERAGE.md book.html labs README.md CONTENT_STANDARD.md LESSON_TEMPLATE.md QA.md
git commit -m "feat: establish full chapter curriculum platform"
```

### Task 2: Expand Foundations and Data Core

**Files:**
- Modify: `source/atlas.json`
- Modify when justified: `CONTENT_STANDARD.md`, `COVERAGE.md`, `requirements-labs.txt`
- Regenerate: `data.js`, `lesson-data/`, `curriculum.json`, `resources.json`, `CURRICULUM.md`, `COVERAGE.md`, `book.html`, `labs/`

**Interfaces:**
- Consumes: chapter contract and validation from Task 1
- Produces: verified chapters for `dsa`, `sql`, `analytics-eng`, `math`, and `info-theory`; the `python` module is already produced by Task 1

- [ ] **Step 1: Audit prerequisites and gaps for the five modules**

Document candidate additions in a module research note before editing lessons. Accept an addition only when it closes a concrete dependency gap; preserve all existing slugs.

- [ ] **Step 2: Expand `dsa` and `sql` in batches of four to eight lessons**

Cover complexity models and amortization; core data structures and invariants; traversal and graph algorithms; sorting/searching; streaming algorithms; relational algebra; joins and aggregation; window functions; CTEs; transactions; indexing and query plans; normalization; stored procedures; and isolation anomalies. Use official Python/database documentation plus standard algorithms and database course material.

- [ ] **Step 3: Expand `analytics-eng`**

Cover operational versus analytical workloads, dimensional modeling, slowly changing dimensions, dbt-style transformation contracts, lineage, columnar formats, and warehouse/lake/lakehouse trade-offs. Include data-quality failure paths and cost/operability decisions.

- [ ] **Step 4: Expand `math` and `info-theory`**

Define notation carefully and include derivations and numeric examples for vectors, matrices, eigendecomposition/SVD, derivatives, optimization, norms, projections, Jacobians/Hessians, numerical stability, entropy, cross-entropy, KL divergence, mutual information, perplexity, coding, and information bottlenecks.

- [ ] **Step 5: Verify and commit each completed module**

Run the global verification suite after every module. Commit with `content(<module>): expand lessons to verified chapters` only when all lessons in that module pass.

### Task 3: Expand Core Statistics and Machine Learning

**Files:**
- Modify: `source/atlas.json`
- Regenerate: all generated curriculum, book, and lab outputs

**Interfaces:**
- Consumes: verified mathematical foundations from Task 2
- Produces: verified chapters for `probability`, `stat-inference`, `bayesian`, `eda-viz`, `regression-glm`, `ml`, `unsupervised`, and `evaluation`

- [ ] **Step 1: Audit statistical prerequisite order and notation consistency**

Ensure probability precedes inference, likelihood precedes estimation, and evaluation chapters distinguish training objective, statistical estimand, model metric, and business metric.

- [ ] **Step 2: Expand probability, inference, and Bayesian modules**

Include assumptions, sampling processes, estimands, derivations, calibrated uncertainty, diagnostics, counterexamples, and simulation-based verification. Use primary university statistics material and authoritative statistical references.

- [ ] **Step 3: Expand EDA, regression/GLMs, classical ML, and unsupervised learning**

Include data-generating assumptions, objective functions, optimization behavior, diagnostics, failure modes, leakage, scaling, model comparison, and interpretable worked datasets.

- [ ] **Step 4: Expand evaluation and feature engineering**

Cover splits, cross-validation, temporal/group leakage, calibration, thresholds, imbalance, ranking metrics, uncertainty, feature pipelines, monitoring, and metric-to-business alignment.

- [ ] **Step 5: Verify and commit each completed module**

Run the global verification suite and representative CPU-friendly labs after every module; commit only verified modules.

### Task 4: Expand Advanced Statistics and Decision Science

**Files:**
- Modify: `source/atlas.json`
- Regenerate: all generated curriculum, book, and lab outputs

**Interfaces:**
- Consumes: verified probability, inference, regression, and evaluation chapters from Task 3
- Produces: verified chapters for `experimentation`, `causal`, `time-series`, `anomaly`, `survival`, `optimization`, `probabilistic-ml`, `learning-theory`, and `geospatial`

- [ ] **Step 1: Expand experimentation and causal inference**

Separate randomized experiments, observational identification, estimation, interference, noncompliance, heterogeneous effects, sequential decisions, and product metrics. State identification assumptions and failure cases explicitly.

- [ ] **Step 2: Expand forecasting, anomaly detection, and survival analysis**

Use chronological evaluation throughout. Cover baselines, decomposition, ARIMA-family models, exponential smoothing, probabilistic forecasts, backtesting, event-time censoring, hazards, rare-event thresholds, and monitoring.

- [ ] **Step 3: Expand optimization, probabilistic ML, and learning theory**

Connect formal objectives and guarantees to actual assumptions. Include constrained decisions, calibration, variational methods, Bayesian networks, uncertainty decomposition, generalization bounds, margins, regularization, and distribution shift.

- [ ] **Step 4: Expand geospatial data science**

Cover coordinate reference systems, geometry validity, spatial joins/indexes, distance, autocorrelation, spatial leakage, raster/vector trade-offs, and scale-dependent conclusions.

- [ ] **Step 5: Verify and commit each completed module**

Run the global suite, validate chronological/spatial leakage coverage, and commit module-scoped changes.

### Task 5: Expand Ranking, Retrieval, and Structured ML

**Files:**
- Modify: `source/atlas.json`
- Regenerate: all generated curriculum, book, and lab outputs

**Interfaces:**
- Consumes: verified ML, probability, evaluation, and data-structure chapters
- Produces: verified chapters for `recsys`, `ir`, `graph`, and `data-mining`

- [ ] **Step 1: Expand recommender systems and ranking**

Cover candidate generation, retrieval, scoring, learning-to-rank objectives, negative sampling, implicit feedback, exploration, offline/online evaluation, cold start, feedback loops, diversity, and serving constraints.

- [ ] **Step 2: Expand information retrieval**

Cover inverted indexes, lexical retrieval, vector retrieval, approximate nearest neighbors, reranking, hybrid search, evaluation, freshness, access control, and failure analysis.

- [ ] **Step 3: Expand graph ML and data-mining algorithms**

Cover graph representation, message passing, sampling, temporal/structural leakage, PageRank, MinHash, LSH, Bloom filters, Count-Min Sketch, HyperLogLog, approximation guarantees, and memory/error trade-offs.

- [ ] **Step 4: Verify and commit each completed module**

Run exact/approximate algorithm assertions and retrieval/ranking sanity metrics in addition to the global suite.

### Task 6: Expand Deep Learning and Modern AI

**Files:**
- Modify: `source/atlas.json`
- Modify when required: `requirements-labs.txt`
- Regenerate: all generated curriculum, book, and lab outputs

**Interfaces:**
- Consumes: verified mathematical, ML, optimization, information-theory, and retrieval chapters
- Produces: verified chapters for `dl`, `cv`, `nlp`, `speech`, `transformers`, `genai`, `rl`, `llm`, and `multimodal`

- [ ] **Step 1: Expand deep learning, vision, NLP, and speech foundations**

Show tensor shapes, objectives, backpropagation paths, architectural inductive biases, data pipelines, evaluation, scaling, and deployment failure behavior.

- [ ] **Step 2: Expand transformers and generative AI**

Cover attention variants, positional methods, normalization, training lifecycle, mixture-of-experts, GAN/VAE/VQ/diffusion/flow objectives, sampling, conditioning, evaluation, and the difference between perceptual realism and factual/physical correctness.

- [ ] **Step 3: Expand reinforcement learning and preference optimization**

Define MDP assumptions, returns, value/policy methods, exploration, off-policy issues, PPO, reward modeling, preference data, alignment objectives, and evaluation limitations.

- [ ] **Step 4: Expand LLM engineering and multimodal systems**

Separate retrieval/tool accuracy from generation quality. Cover RAG, chunking, embeddings, agents, tool protocols, evaluation, observability, prompt injection, multimodal alignment, VLMs, CLIP-style objectives, and speech interfaces.

- [ ] **Step 5: Verify and commit each completed module**

Check current official APIs immediately before drafting code. Mark GPU/network/large-model requirements and provide CPU-sized mechanism demonstrations where practical.

### Task 7: Expand Data and Production Engineering

**Files:**
- Modify: `source/atlas.json`
- Modify when required: `requirements-labs.txt`
- Regenerate: all generated curriculum, book, and lab outputs

**Interfaces:**
- Consumes: verified data, ML, distributed-systems, and model chapters
- Produces: verified chapters for `data-eng`, `distributed`, `mlops`, `cloud`, `performance`, `system-design`, and `ai-safety`

- [ ] **Step 1: Expand data engineering and distributed systems**

Cover batch/stream semantics, Kafka/Flink/Spark, CDC, formats, partitioning, state, time, consistency, replication, fault tolerance, backpressure, recovery, and capacity trade-offs.

- [ ] **Step 2: Expand MLOps, cloud, containers, and orchestration**

Cover reproducibility, registries, deployment strategies, monitoring, rollback, feature systems, Docker, Kubernetes, cloud primitives, permissions, secrets, reliability, and cost.

- [ ] **Step 3: Expand performance and system design**

Cover profiling, batching, quantization, compilation, caching, model/data parallelism, latency budgets, capacity estimates, failure isolation, observability, and degradation strategies.

- [ ] **Step 4: Expand safety, security, privacy, and governance**

Cover threat models, prompt injection, exfiltration, excessive agency, supply-chain risk, privacy, auditability, human escalation, incident response, and governance boundaries without overstating guarantees.

- [ ] **Step 5: Verify and commit each completed module**

Verify fast-moving tool and cloud behavior from official documentation, then run global checks and module-specific failure-path assertions.

### Task 8: Expand Interview and Case Practice

**Files:**
- Modify: `source/atlas.json`
- Regenerate: all generated curriculum and book outputs

**Interfaces:**
- Consumes: every verified technical module
- Produces: verified chapters for `project-defense` and `interview-strategy`

- [ ] **Step 1: Expand project-defense cases**

Turn each case into an end-to-end walkthrough with problem framing, assumptions, data, baselines, evaluation, architecture, failure behavior, monitoring, security, cost, rollback, trade-offs, and interviewer follow-ups with answers.

- [ ] **Step 2: Expand interview strategy**

Provide concrete answer structures, strong and weak examples, claim-defense checks, behavioral evidence, clarification techniques, and ways to communicate uncertainty without evasiveness.

- [ ] **Step 3: Verify and commit both modules**

Check that technical claims link back to verified chapters and that examples do not invent experience, benchmarks, or employer-specific facts.

### Task 9: Complete Whole-Curriculum Editorial and Performance Review

**Files:**
- Modify as findings require: `source/atlas.json`, site/build/validation files, documentation
- Regenerate: every generated artifact

**Interfaces:**
- Consumes: all expanded modules from Tasks 1-8
- Produces: a fully verified curriculum with consistent notation, navigation, sources, visuals, labs, book output, and initial-load performance

- [ ] **Step 1: Run cross-curriculum consistency audits**

Check terminology, notation, prerequisite links, duplicate explanations, contradictory advice, deprecated APIs, resource annotations, and dependency cycles.

- [ ] **Step 2: Run completeness and originality audits**

Confirm every original slug is `verified`, every added lesson is justified, every chapter contains the applicable contract fields, and prose/visuals are original syntheses.

- [ ] **Step 3: Run performance and accessibility audits**

Measure initial payload, lesson fetch size, navigation, keyboard behavior, semantic heading order, mobile layout, light/dark themes, print/book behavior, and failure/retry paths.

- [ ] **Step 4: Run the complete verification suite**

```bash
python -m unittest discover -s tests -v
python scripts/build.py
python validate.py
python scripts/check_labs.py
python scripts/check_site.py
node --check app.js
node --check analyzer.js
node scripts/check_chapter_loader.js
node scripts/check_chapter_reader.js
node scripts/check_analyzer.js
```

Expected: all commands exit 0; every original and justified new lesson is `verified`; no stale generated output exists.

- [ ] **Step 5: Commit the completed curriculum**

```bash
git add source scripts tests app.js styles.css index.html chapter-loader.js chapter-reader.js data.js lesson-data curriculum.json resources.json CURRICULUM.md COVERAGE.md book.html labs README.md CONTENT_STANDARD.md LESSON_TEMPLATE.md QA.md
git commit -m "content: complete verified full chapter curriculum"
```

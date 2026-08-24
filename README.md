# Data, ML & AI Atlas

A publishable, comprehensive learning platform for **Data Science, Statistics, Machine Learning, AI / GenAI, Data Engineering, Analytics and Computer Vision**.

The goal is not to memorize a glossary. Every topic is designed for three modes:

1. **Interview mode** — a 30–60 second answer.
2. **Understanding mode** — intuition, formal reasoning, examples and misconceptions.
3. **Engineering mode** — implementation, debugging, production implications and system-design trade-offs.

## Current scope — v2.4.2 Role-aware Interactive Edition

- **45 modules**
- **394 / 394 verified full-chapter lessons**
- **312 curated learning resources**
- **394 runnable Build It → Use It → Ship It → Verify It Python labs**
<<<<<<< HEAD
- **788 research-grounded, theme-aware lesson visuals** — at least two per lesson — with visible source attribution and adapted-redraw provenance
=======
- **788 original, theme-aware lesson visuals** — at least two per lesson — spanning architecture diagrams, graphs, curves, matrices, maps, causal DAGs and system flows
>>>>>>> 682d610d4771d8dbe64c5e4ce48e254680fd0bb0
- Broad coverage across statistics, product analytics, causal inference, forecasting, survival analysis, optimization, probabilistic ML/uncertainty, information theory, geospatial data science, data mining/sketches, recommender/search systems, data engineering, distributed systems, ML/DL/GenAI and production
- Role-based study paths plus a dynamic homepage curriculum that hides modules with no lessons relevant to the selected role
- Persistent light/dark mode, a subtle live perspective-projected 3D background with Motion/reduced-motion controls, responsive mobile navigation, search, practice mode and browser-local progress
- Privacy-first **Resume + Job Description mapper** that runs locally in the browser and links directly to prioritized Atlas lessons
- A dedicated **Visual Atlas** route at `#/visuals`
- GitHub Pages build + validation + deployment workflow

## What changed in v2.0

The Atlas now follows a stronger implementation rhythm for topics where code materially improves understanding:

> **Problem / intuition → Build It → Use It → Ship It → Verify It**

- **Build It:** minimal implementation that exposes the core mechanics.
- **Use It:** the production/library equivalent (for example scikit-learn, PyTorch or a standard framework).
- **Ship It:** turn the concept into a small engineering artifact, service, evaluation harness, batch job or deployment decision.
- **Verify It:** assertions, sanity checks, metrics, shapes or invariants that prove the implementation behaves sensibly.

Generated lab files live under `labs/<lesson-slug>/` and include source files plus a standalone browser page.

## Curriculum

The Atlas covers:

- Python/software engineering and algorithms
- SQL, relational databases, analytics engineering and data modeling
- Math, probability, information theory, statistical inference and Bayesian statistics
- EDA, visualization, regression/GLMs and classical/unsupervised ML
- Evaluation, experimentation, product analytics, causal inference, learning theory and probabilistic uncertainty
- Time series/forecasting, anomaly detection, survival analysis, optimization and geospatial data science
- Data mining/sketches, recommender systems, ranking, search/information retrieval and graph ML
- Deep learning
- Computer vision
- NLP and Transformers
- Reinforcement learning, PPO and preference optimization
- Generative AI: GANs, VQ models, diffusion and flow matching
- LLM engineering: RAG, retrieval, tools, agents, MCP and evaluation
- Multimodal AI, CLIP, VLMs and speech/audio foundations
- Graph ML
- Data engineering, Kafka, Flink, Spark, CDC and analytical data formats
- Distributed systems and big-data fundamentals
- MLOps and production ML
- AI performance, inference optimization and scaling
- Docker, cloud and Kubernetes
- AI safety, security and governance
- ML / AI system design
- End-to-end project-defense case studies

## Content standard

Each lesson includes:

- why the topic matters
- a concise interview answer
- intuition
- deep explanation
- math/formal view when it adds value
- a worked example
- code/pseudocode when useful
- common mistakes / wrong interview answers
- likely follow-up questions
- production/system-design implications
- curated references

Every verified lesson includes a runnable Python lab with Build It / Use It / Ship It / Verify It stages and at least two original conceptual visuals. Verified lessons also require 1,500+ explanatory words and at least two distinct annotated sources. References prioritize original papers, university courses, official documentation, and high-quality educators. See `CONTENT_STANDARD.md`. Visual explanations are generated from the same lesson source and follow `VISUAL_GUIDE.md`.

## Quality and visual documentation

- `CONTENT_STANDARD.md` — lesson/content quality contract
- `VISUAL_GUIDE.md` — visual schema, design rules and supported diagram types
- `QA.md` — automated and browser-level QA coverage
- `ANALYZER.md` — browser-side Resume + JD mapper design and privacy model
- `COVERAGE.md` — curriculum breadth guardrails

## Repository model — important

`source/atlas.json` is the **single source of truth** for curriculum content, references and lab definitions.

Do **not** manually edit generated files/directories:

- `data.js`
- `curriculum.json`
- `resources.json`
- `CURRICULUM.md`
- `book.html`
- `labs/`

After editing `source/atlas.json`, run:

```bash
python scripts/build.py
python validate.py
python scripts/check_labs.py
python scripts/check_all_labs_runtime.py
python scripts/check_site.py
node --check app.js
node --check analyzer.js
node scripts/check_analyzer.js
```

The build command regenerates website data, curriculum snapshot, resource registry, complete book and runnable code labs.

## Runnable lab environment

The website itself has no Python package dependencies. To run all optional code labs locally:

```bash
python -m venv .venv
# activate the environment, then
pip install -r requirements-labs.txt
```

Each lab also has a browser-readable page under `labs/<lesson>/index.html`.

## Local preview

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

Useful routes:

- `#/roadmap` — complete curriculum
- `#/paths` — role-based study paths
- `#/quiz` — random interview practice
- `#/analyzer` — browser-side resume + job-description preparation mapper
- `#/labs` — runnable code-lab catalog
- `#/resources` — curated learning library
- `#/visuals` — index of lessons with original visual models
- `book.html` — long-form book/print view

## Publish to GitHub Pages

For the complete first-publish, update and troubleshooting guide, see [`PUBLISHING.md`](PUBLISHING.md).

1. Create a GitHub repository.
2. Copy/push this repository to `main`.
3. Open **Settings → Pages** and select **GitHub Actions**.
4. Push changes.

`.github/workflows/pages.yml` automatically rebuilds, validates and publishes the static site.

## Using Codex in VS Code

Read `AGENTS.md` first. Codex should improve or review targeted content and implementation — not mass-generate shallow lessons.

A good workflow is:

```text
Edit source/atlas.json or site code
        ↓
python scripts/build.py
        ↓
python validate.py
        ↓
python scripts/check_labs.py
        ↓
python -m http.server 8000
        ↓
review in browser
        ↓
git commit / push
```

## Philosophy

A candidate should be able to move smoothly between:

> “What is recall?”

and

> “Design a production rare-event detection system and explain how you would choose the threshold, monitor drift, deploy safely, secure the system, optimize inference, and roll back.”

That continuity — fundamentals → modeling → implementation → engineering → production → system design — is the purpose of the Atlas.

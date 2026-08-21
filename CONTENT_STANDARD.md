# Data, ML & AI Atlas — Content Standard

## Goal

A learner should be able to use every lesson in three modes:

- **Interview mode:** answer the core question clearly in 30–60 seconds.
- **Understanding mode:** explain the intuition and formal details without memorizing buzzwords.
- **Engineering mode:** implement, debug, deploy or reason about the concept in a real system.

## Full-chapter lesson contract

Every `chapter-complete` or `verified` lesson must contain:

1. `description` — a 150–300 word orientation: scope, payoff and boundaries
2. `prerequisites` — lesson slugs that form an acyclic dependency graph
3. `learningObjectives` — at least three observable outcomes
4. `interviewAnswer` and `keyPoints` — a speakable answer plus memory anchors
5. `why` and `intuition` — motivation followed by a faithful mental model
6. `deepSections` — titled, stable-ID sections containing the main first-principles explanation
7. `math` when useful, with notation and assumptions defined separately from code
8. `workedExamples` — at least one concrete scenario, derivation or trace
9. a `lab` when implementation materially exposes the mechanism
10. `commonMistakes` — misconception/correction objects, not unsupported warnings
11. `followUps` — at least two question/answer objects
12. `production` — reliability, monitoring, rollback, cost, security and failure behavior where relevant
13. `exercises` — at least three prompts with solutions, spanning recall, application and diagnosis
14. `sourceNotes` — an annotation explaining what each cited source contributes
15. `visuals` when a diagram materially improves understanding
16. `editorial` — one of `summary`, `draft`, `chapter-complete`, or `verified`

Chapter prose normally targets 1,500–3,000 explanatory words. Validation rejects a complete chapter below 1,200 words and warns between 1,200 and 1,499. Code, metadata and resource titles do not inflate this count. A `verified` chapter also requires a `verifiedOn` date and at least two annotated sources. Add math and code only when they improve understanding; they are not mandatory filler.

Legacy singular fields remain readable during migration, but they do not satisfy the full-chapter contract. Editorial status is assigned deliberately; the build never promotes it from word count.

## Runnable code-lab standard

For high-frequency algorithmic or engineering concepts where implementation reveals important mechanics, prefer a `lab` object with this rhythm:

> **Problem / concept → Build It → Use It → Verify It → Ship It**

Required lab fields:

- `goal` — what the learner should prove or understand
- `language` — currently primarily Python
- `buildIt` — a minimal from-scratch or low-level implementation exposing the mechanism
- `useIt` — the standard library/framework implementation used in normal engineering work
- `verifyIt` — assertions, metrics, shape checks, invariants or sanity tests

Rules:

- Build-it code must teach the mechanism; do not reimplement huge frameworks for spectacle.
- Use-it code should demonstrate the idiomatic production/library path.
- Verify-it code must test something meaningful rather than merely print a value.
- The lesson's `production` section is the **Ship It** stage: deployment, performance, monitoring, reliability, security or system trade-offs.
- State GPU, network, external-service or large-data requirements explicitly when applicable.
- Generated lab files must syntax-check; CPU-friendly labs should run locally when practical.
- Never add a code lab solely to inflate lesson length.

## Source hierarchy

Use sources in this order:

1. **Original paper / primary university course** — Stanford, MIT, Harvard, Berkeley, etc.
2. **Official documentation** — Python, PyTorch, scikit-learn, Docker, AWS, Hugging Face, Kafka, Flink, Spark, etc.
3. **High-quality pedagogy** — StatQuest, 3Blue1Brown, CampusX and similar educators with a strong teaching track record.
4. **Production practitioner material** — Full Stack Deep Learning, Made With ML, Stanford CS329S, Google Rules of ML.
5. Specialist blogs only when the author is authoritative and the material fills a genuine gap.

Do not use Wikipedia or generic SEO/tutorial farms as the primary learning resource.

## Technical quality checks

- Explain **why**, not only **what**.
- State assumptions explicitly.
- Distinguish training objective, evaluation metric and business/engineering metric.
- Include at least one important failure mode or misconception.
- Code must be small enough to understand and runnable in principle.
- Do not add code merely to make a lesson look longer.
- For fast-moving services/APIs, prefer official docs and avoid brittle version-specific syntax unless verified.
- Never claim one model/optimizer/cloud service is universally best.
- Separate mathematical formulation from implementation detail.
- Explain tensor shapes where shape reasoning matters.
- For generative AI, distinguish perceptual realism from factual/semantic/physical correctness.
- For RAG/agents, evaluate retrieval/tool behavior separately from final generation.
- For graph ML, consider temporal/structural leakage and candidate/negative sampling.
- For production ML, include reliability, monitoring, rollback, cost/security and graceful failure where relevant.
- For forecasting, use chronological evaluation and explicitly avoid future leakage.
- For causal inference, state identification assumptions rather than treating prediction as causation.
- For AI security, consider prompt injection, data exfiltration, excessive agency, supply-chain risk and human escalation.

## Writing quality

- Start with the simplest correct explanation.
- Prefer concrete examples to jargon.
- Avoid corporate filler such as “leverage cutting-edge AI.”
- Explain acronyms on first use.
- Do not overstate guarantees.
- Prefer a precise limitation over a vague “it depends.”
- Keep interview answers speakable; deep detail belongs below them.

## Resource labels

Aim for a useful source ladder:

- **Primary** — canonical paper/course/textbook
- **Official** — framework/tool/service documentation
- **Intuition** — especially good conceptual explanation
- **Production** — end-to-end engineering perspective

A lesson does not need all four categories when they are not relevant.

## Code-lab standard

For code-suitable concepts, prefer a runnable lab over a decorative snippet. The lab follows four beats:

1. **Build it** — expose the mechanism with minimal abstraction.
2. **Use it** — show the common library or practical interface.
3. **Ship it** — connect it to a real engineering artifact, API, batch job, service, evaluation harness or deployment decision.
4. **Verify it** — add assertions, invariants or evaluation checks that can catch a wrong implementation.

Generated lab files must be standalone. A learner should not need to mentally copy variables from another file. Keep dependencies proportional to the concept and avoid long framework boilerplate.

Not every lesson needs code. Behavioral strategy, architecture trade-offs and system-design topics are often better served by diagrams, schemas or decision frameworks.

## Visual explanation standard

Use a visual when it reduces cognitive load or makes a structural relationship easier to see than prose alone. Visuals are part of the lesson, not decoration.

Preferred visual types include:

- architecture / pipeline diagrams for systems, MLOps, RAG, streaming and cloud topics
- curves for losses, optimization, calibration, forecasting, survival and trade-offs
- scatter plots for regression, clustering, embeddings and geometry
- matrices / heatmaps for confusion matrices, attention, cohorts and spectrograms
- DAGs / networks for causal inference, graph ML, recommenders and distributed systems
- comparison panels for models, metrics and deployment choices
- funnels and maps only when sequential or geographic structure is genuinely part of the question

Rules:

- Keep diagrams original and generated from `source/atlas.json`; do not copy copyrighted figures into the repository.
- Add a concise `title` and `caption` to every visual.
- Conceptual plots must be labeled as conceptual rather than presented as measured data.
- Use the same theme-aware SVG in the web lesson and generated book.
- Every **very-high-priority** lesson should have a visual model unless the topic is inherently non-visual.
- Prefer one strong explanatory figure to several decorative figures.
- Visuals must remain readable in dark mode, mobile layouts and print/PDF output.
- External visual explainers such as Distill, Google MLCC, D2L or the Illustrated Transformer belong in the resource ladder; they complement rather than replace the Atlas's own explanation.

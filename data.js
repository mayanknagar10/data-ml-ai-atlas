const ATLAS = {
  "modules": [
    {
      "slug": "python",
      "title": "Python & Software Engineering",
      "icon": "🐍",
      "description": "Python, testing, APIs and software practices that make data work reliable.",
      "group": "Foundations & Data Core"
    },
    {
      "slug": "dsa",
      "title": "Data Structures, Algorithms & Complexity",
      "icon": "🧩",
      "description": "Core algorithmic reasoning for coding interviews and scalable data/ML implementations.",
      "group": "Foundations & Data Core"
    },
    {
      "slug": "sql",
      "title": "SQL & Relational Databases",
      "icon": "🗄️",
      "description": "SQL querying plus relational storage, indexing, transactions and query execution.",
      "group": "Foundations & Data Core"
    },
    {
      "slug": "analytics-eng",
      "title": "Analytics Engineering & Data Modeling",
      "icon": "🏗️",
      "description": "Warehouses, dimensional modeling, dbt, semantic layers and trustworthy analytical datasets.",
      "group": "Foundations & Data Core"
    },
    {
      "slug": "math",
      "title": "Math Foundations",
      "icon": "∑",
      "description": "Linear algebra, calculus, numerical thinking and optimization foundations.",
      "group": "Foundations & Data Core"
    },
    {
      "slug": "probability",
      "title": "Probability",
      "icon": "🎲",
      "description": "Random variables, distributions, expectation, conditioning and probabilistic reasoning.",
      "group": "Statistics & Data Science"
    },
    {
      "slug": "stat-inference",
      "title": "Statistical Inference",
      "icon": "📐",
      "description": "Estimation, uncertainty, hypothesis tests, resampling and statistical modeling foundations.",
      "group": "Statistics & Data Science"
    },
    {
      "slug": "bayesian",
      "title": "Bayesian Statistics",
      "icon": "🧮",
      "description": "Bayesian updating, priors, posterior computation, hierarchical modeling and diagnostics.",
      "group": "Statistics & Data Science"
    },
    {
      "slug": "eda-viz",
      "title": "EDA & Data Visualization",
      "icon": "🔎",
      "description": "Data quality, exploratory analysis and truthful statistical visualization.",
      "group": "Statistics & Data Science"
    },
    {
      "slug": "regression-glm",
      "title": "Regression & Generalized Linear Models",
      "icon": "📈",
      "description": "Linear models, diagnostics, regularization, GLMs, splines and interpretable statistical modeling.",
      "group": "Statistics & Data Science"
    },
    {
      "slug": "ml",
      "title": "Classical Machine Learning",
      "icon": "🧠",
      "description": "Core supervised algorithms and practical model-selection reasoning.",
      "group": "Statistics & Data Science"
    },
    {
      "slug": "unsupervised",
      "title": "Unsupervised Learning",
      "icon": "🧭",
      "description": "Clustering, dimensionality reduction, density estimation and latent structure.",
      "group": "Statistics & Data Science"
    },
    {
      "slug": "evaluation",
      "title": "Evaluation & Feature Engineering",
      "icon": "📏",
      "description": "Metrics, validation, leakage, preprocessing, imbalance and interpretability.",
      "group": "Statistics & Data Science"
    },
    {
      "slug": "experimentation",
      "title": "Experimentation & Product Analytics",
      "icon": "🧪",
      "description": "A/B testing, metric design, power, sequential issues, funnels, cohorts and product decisions.",
      "group": "Statistics & Data Science"
    },
    {
      "slug": "causal",
      "title": "Causal Inference",
      "icon": "🧷",
      "description": "Potential outcomes, DAGs and quasi-experimental identification strategies.",
      "group": "Statistics & Data Science"
    },
    {
      "slug": "time-series",
      "title": "Time Series & Forecasting",
      "icon": "⏱️",
      "description": "Temporal structure, classical and modern forecasting, uncertainty and operational forecasting.",
      "group": "Statistics & Data Science"
    },
    {
      "slug": "anomaly",
      "title": "Anomaly Detection & Rare Events",
      "icon": "🚨",
      "description": "Outliers, novelty detection, rare-event classification and alerting systems.",
      "group": "Statistics & Data Science"
    },
    {
      "slug": "survival",
      "title": "Survival & Event-Time Modeling",
      "icon": "⏳",
      "description": "Censoring, hazards, Kaplan–Meier, Cox models and time-to-event prediction.",
      "group": "Statistics & Data Science"
    },
    {
      "slug": "optimization",
      "title": "Optimization & Decision Science",
      "icon": "🎯",
      "description": "Convex optimization, constraints, linear/integer programming and decision-making under limits.",
      "group": "Statistics & Data Science"
    },
    {
      "slug": "recsys",
      "title": "Recommender Systems & Ranking",
      "icon": "⭐",
      "description": "Collaborative filtering, matrix factorization, candidate generation, ranking and recommender evaluation.",
      "group": "Ranking, Retrieval & Structured ML"
    },
    {
      "slug": "ir",
      "title": "Search & Information Retrieval",
      "icon": "🔍",
      "description": "Lexical/vector search, approximate nearest neighbors, reranking and retrieval evaluation.",
      "group": "Ranking, Retrieval & Structured ML"
    },
    {
      "slug": "graph",
      "title": "Graph ML",
      "icon": "🕸️",
      "description": "Graph representations, message passing, GNNs and link prediction.",
      "group": "Ranking, Retrieval & Structured ML"
    },
    {
      "slug": "dl",
      "title": "Deep Learning",
      "icon": "⚡",
      "description": "Neural-network foundations, optimization, architectures and debugging.",
      "group": "Deep Learning & AI"
    },
    {
      "slug": "cv",
      "title": "Computer Vision",
      "icon": "👁️",
      "description": "CNNs, ViTs, segmentation, detection, reconstruction and image generation.",
      "group": "Deep Learning & AI"
    },
    {
      "slug": "nlp",
      "title": "NLP Foundations",
      "icon": "📝",
      "description": "Text preprocessing, representations, sequence models and language tasks before/alongside transformers.",
      "group": "Deep Learning & AI"
    },
    {
      "slug": "speech",
      "title": "Speech & Audio",
      "icon": "🎙️",
      "description": "Waveforms, spectrograms, ASR, speech representations and audio modeling.",
      "group": "Deep Learning & AI"
    },
    {
      "slug": "transformers",
      "title": "Transformers",
      "icon": "🔀",
      "description": "Attention, transformer internals, encoder/decoder families and scaling concepts.",
      "group": "Deep Learning & AI"
    },
    {
      "slug": "genai",
      "title": "Generative AI",
      "icon": "🎨",
      "description": "VAEs, GANs, diffusion, flow matching, conditioning and generative evaluation.",
      "group": "Deep Learning & AI"
    },
    {
      "slug": "rl",
      "title": "Reinforcement Learning & Preference Optimization",
      "icon": "🎮",
      "description": "MDPs, value/policy methods, PPO and preference optimization.",
      "group": "Deep Learning & AI"
    },
    {
      "slug": "llm",
      "title": "LLM Engineering & Agents",
      "icon": "🤖",
      "description": "RAG, tool calling, agents, fine-tuning, evaluation and inference.",
      "group": "Deep Learning & AI"
    },
    {
      "slug": "multimodal",
      "title": "Multimodal AI & Vision-Language Systems",
      "icon": "🖼️",
      "description": "Contrastive learning, VLM architecture, instruction tuning and multimodal evaluation.",
      "group": "Deep Learning & AI"
    },
    {
      "slug": "data-eng",
      "title": "Data Engineering & Streaming",
      "icon": "🌊",
      "description": "ETL/ELT, orchestration, Kafka, Flink, Spark and data quality.",
      "group": "Data & Production Engineering"
    },
    {
      "slug": "distributed",
      "title": "Distributed Systems & Big Data",
      "icon": "🌐",
      "description": "Partitioning, replication, consistency, distributed computation and fault tolerance.",
      "group": "Data & Production Engineering"
    },
    {
      "slug": "mlops",
      "title": "MLOps & Production ML",
      "icon": "🚀",
      "description": "Experiment tracking, deployment, monitoring, registries, CI/CD and lifecycle management.",
      "group": "Data & Production Engineering"
    },
    {
      "slug": "cloud",
      "title": "Cloud, Docker & Kubernetes",
      "icon": "☁️",
      "description": "Containers, cloud primitives, orchestration, security and deployment.",
      "group": "Data & Production Engineering"
    },
    {
      "slug": "performance",
      "title": "AI / ML Performance & Scaling",
      "icon": "🏎️",
      "description": "Profiling, mixed precision, quantization, distributed training and inference optimization.",
      "group": "Data & Production Engineering"
    },
    {
      "slug": "system-design",
      "title": "Data / ML / AI System Design",
      "icon": "🏛️",
      "description": "End-to-end system design for analytics, ML, recommendation, retrieval and GenAI systems.",
      "group": "Data & Production Engineering"
    },
    {
      "slug": "ai-safety",
      "title": "Safety, Security, Privacy & Governance",
      "icon": "🛡️",
      "description": "Threats, privacy, fairness, governance and operational safety across data and AI systems.",
      "group": "Data & Production Engineering"
    },
    {
      "slug": "project-defense",
      "title": "End-to-End Case Studies & Project Communication",
      "icon": "🧰",
      "description": "End-to-end technical case studies plus a framework for explaining architecture, evaluation, trade-offs and productionization.",
      "group": "Interview & Case Practice"
    },
    {
      "slug": "interview-strategy",
      "title": "Interview Strategy",
      "icon": "🎯",
      "description": "How to turn broad knowledge into concise, defensible interview answers.",
      "group": "Interview & Case Practice"
    },
    {
      "slug": "info-theory",
      "title": "Information Theory for ML",
      "icon": "🧮",
      "description": "Entropy, divergence, mutual information and compression ideas used throughout statistics, ML and language modeling.",
      "group": "Foundations & Data Core"
    },
    {
      "slug": "probabilistic-ml",
      "title": "Probabilistic ML & Uncertainty",
      "icon": "🎲",
      "description": "Gaussian processes, graphical models, latent-state models, approximate inference and calibrated uncertainty.",
      "group": "Statistics & Data Science"
    },
    {
      "slug": "learning-theory",
      "title": "Learning Theory & Generalization",
      "icon": "📐",
      "description": "Empirical risk, capacity, PAC/VC intuition, margins, regularization and distribution shift.",
      "group": "Statistics & Data Science"
    },
    {
      "slug": "data-mining",
      "title": "Data Mining, Sketches & Web Algorithms",
      "icon": "⛏️",
      "description": "Classical scalable algorithms for frequent patterns, similarity, approximate counting, link analysis and streams.",
      "group": "Ranking, Retrieval & Structured ML"
    },
    {
      "slug": "geospatial",
      "title": "Geospatial Data Science",
      "icon": "🗺️",
      "description": "Spatial data, projections, joins, indexing, autocorrelation and spatially valid modeling.",
      "group": "Statistics & Data Science"
    }
  ],
  "lessons": [
    {
      "slug": "tell-me-about-yourself",
      "title": "Tell me about yourself",
      "module": "interview-strategy",
      "priority": "very-high",
      "roles": [
        "all"
      ],
      "interviewAnswer": "Use a 60–90 second present → past → future structure. Start with your current professional identity, connect 2–3 relevant experiences, and end with the type of problem you want to solve next. Do not narrate the entire CV.",
      "keyPoints": [
        "Lead with your current role/study",
        "Choose experiences that support the target role",
        "Finish with a forward-looking bridge",
        "Avoid memorized corporate language"
      ],
      "resources": [
        "stanford-cs329s"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "Tell me about yourself"
        }
      ],
      "followUpQuestions": [
        "Why did you move from data engineering to data science?",
        "Which experience shaped your interests most?",
        "Why this role now?",
        "What kind of problems do you want to work on?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "project-defense-framework",
      "title": "Defend Any Technical Project",
      "module": "interview-strategy",
      "priority": "very-high",
      "roles": [
        "all"
      ],
      "interviewAnswer": "Explain projects as problem → constraints → approach → your contribution → evaluation → result → limitations → what you would improve. Interviewers often care more about why you made a choice than the final architecture.",
      "keyPoints": [
        "Separate “we” from “I”",
        "Know every metric on your CV",
        "State limitations before the interviewer discovers them",
        "Be ready to productionize the prototype"
      ],
      "resources": [
        "stanford-cs329s",
        "fsdl"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "Defend Any Resume Project"
        }
      ],
      "followUpQuestions": [
        "Why this model?",
        "What exactly did you implement?",
        "How did you validate success?",
        "What failed and what would you change today?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "behavioral-car",
      "title": "Behavioral Answers with CAR / STAR",
      "module": "interview-strategy",
      "priority": "high",
      "roles": [
        "all"
      ],
      "interviewAnswer": "Use Context, Action, Result (or STAR) to keep behavioral answers concrete. Spend most of the time on your own action and the measurable result, then add what changed in your behavior afterward.",
      "keyPoints": [
        "Use real examples",
        "Quantify when possible",
        "Own mistakes without overexplaining",
        "End failure stories with changed behavior"
      ],
      "resources": [
        "stanford-cs329s"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What would you do differently now?",
        "What was your personal responsibility?",
        "How did the other person react?",
        "What did you learn that you still use today?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "unknown-question",
      "title": "How to Handle a Question You Do Not Know",
      "module": "interview-strategy",
      "priority": "very-high",
      "roles": [
        "all"
      ],
      "interviewAnswer": "Do not bluff. State what you know, identify the uncertain part, reason from first principles, and describe how you would verify it. A structured partial answer is usually stronger than confident guessing.",
      "keyPoints": [
        "Separate facts from assumptions",
        "Ask one clarifying question only when necessary",
        "Reason aloud concisely",
        "Never invent metrics or implementation details"
      ],
      "resources": [
        "stanford-cs329s"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "How to Handle a Question You Do Not Know"
        }
      ],
      "followUpQuestions": [
        "What would you check first?",
        "Which part are you confident about?",
        "How would you verify your assumption?",
        "Can you derive the answer from a simpler case?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "python-data-structures",
      "title": "Lists, Tuples, Sets & Dictionaries",
      "module": "python",
      "priority": "very-high",
      "roles": [
        "ds",
        "mle",
        "aie"
      ],
      "interviewAnswer": "Use a list for an ordered mutable sequence, a tuple for a fixed record-like sequence, a set for uniqueness and fast membership, and a dictionary for key-value lookup. The important trade-offs are semantics first, then expected operation cost. Lists use contiguous reference storage, while sets and dictionaries are hash based. Hash-table lookup is expected constant time, not an absolute worst-case guarantee, and keys must obey the equality-and-hash contract.",
      "keyPoints": [
        "Choose by invariant before complexity",
        "Mutability and aliasing change behavior",
        "Dictionary and set keys must be hashable",
        "Expected complexity is not a universal guarantee",
        "Specialized collections often express intent better"
      ],
      "resources": [
        "python-docs",
        "mit-algorithms"
      ],
      "featured": false,
      "description": "Python's built-in containers are not interchangeable spellings for a collection. A list represents an ordered, mutable sequence; a tuple represents an ordered sequence whose membership cannot be changed; a set represents unique hashable values; and a dictionary represents a mapping from unique hashable keys to values. Those semantic promises determine what operations are natural, what mistakes the type system can prevent, and how a program behaves as data grows. This chapter develops a working model that connects Python-level behavior to the underlying array and hash-table mechanisms without turning implementation details into language guarantees. You will learn to choose a container from the invariants of the problem, reason about identity and aliasing, explain the equality-and-hashing contract, estimate important operation costs, and recognize when a specialized structure such as `deque`, `Counter`, or `defaultdict` expresses the job more accurately. The goal is not to memorize a complexity table. It is to make container choices that remain correct, readable, and predictable in data pipelines, model-serving code, and interviews.",
      "prerequisites": [
        "big-o"
      ],
      "learningObjectives": [
        "Choose a Python container by ordering, uniqueness, mutability, lookup, and update requirements.",
        "Explain how equality, identity, hashing, and aliasing affect container correctness.",
        "Diagnose accidental quadratic work, mutable-default bugs, and invalid dictionary or set keys."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Sequence and hash-container promises"
        },
        {
          "type": "flow",
          "title": "Choose from the required invariant"
        }
      ],
      "followUpQuestions": [
        "Why is list append amortized O(1) rather than O(1) for every call?",
        "Why must equal dictionary keys have equal hashes?",
        "When should you use a deque instead of a list?"
      ],
      "estimatedMinutes": 13
    },
    {
      "slug": "python-generators",
      "title": "Iterators & Generators",
      "module": "python",
      "priority": "medium",
      "roles": [
        "mle",
        "aie"
      ],
      "interviewAnswer": "An iterable can produce an iterator; an iterator owns traversal state and implements `__next__`, raising `StopIteration` when exhausted. A generator function is convenient syntax for building an iterator: calling it returns a generator object, and each `yield` suspends the frame until the next request. Generators support streaming and bounded-memory composition, but they are normally one-pass and lazy errors occur during consumption rather than construction.",
      "keyPoints": [
        "Iterable creates an iterator",
        "Iterator owns state",
        "yield suspends a frame",
        "Laziness changes timing",
        "One pass requires explicit ownership"
      ],
      "resources": [
        "python-data-model",
        "python-docs"
      ],
      "featured": false,
      "description": "Iterators and generators are Python's protocol for producing values one at a time. They let callers consume a sequence without requiring the producer to materialize every result first, which is valuable for large files, database pages, preprocessing pipelines, and streams. This chapter separates an iterable—the object that can create an iterator—from an iterator—the stateful object that returns the next value. It then explains how generator functions suspend at `yield`, how one-pass consumption changes correctness, how `yield from` delegates, and how cleanup and exceptions behave. Laziness is not automatically faster and it does not make an unbounded computation safe by itself: the surrounding pipeline can still buffer, retain references, repeat expensive work, or hold a resource open. You will learn to design a small iterator, batch a stream without losing records, test exhaustion and edge cases, and decide when a concrete list is clearer. The central skill is reasoning about ownership and timing: who advances the iterator, when work happens, how errors surface, and which resource remains live while iteration is suspended.",
      "prerequisites": [
        "python-data-structures"
      ],
      "learningObjectives": [
        "Distinguish iterable, iterator, generator function, and generator object using the Python iteration protocol.",
        "Trace suspension, resumption, exhaustion, exception propagation, and delegation through a generator pipeline.",
        "Build and verify a bounded-memory batching iterator while identifying retention and cleanup failure modes."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build a bounded batching generator, use itertools for composition, and verify ordering, tail handling, and one-pass exhaustion.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Pull-based generator lifecycle"
        },
        {
          "type": "compare",
          "title": "Eager and lazy result boundaries"
        }
      ],
      "followUpQuestions": [
        "Why can `itertools.tee` consume substantial memory?",
        "When is a list better than a generator?",
        "What does `yield from` add beyond a small loop?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "python-decorators",
      "title": "Decorators & Context Managers",
      "module": "python",
      "priority": "medium",
      "roles": [
        "mle",
        "aie"
      ],
      "interviewAnswer": "A decorator is a callable transformation applied when a function or class is defined; `@d` above `f` is essentially `f = d(f)`. A context manager implements enter and exit around a `with` block so setup and cleanup have one lexical scope, including exception paths. Good decorators preserve metadata with `functools.wraps` and keep behavior explicit. Good context managers release resources deterministically and suppress exceptions only by deliberate contract.",
      "keyPoints": [
        "Decoration transforms at definition time",
        "Wrapper runs at call time",
        "wraps preserves metadata",
        "with guarantees an exit call",
        "Composition order changes semantics"
      ],
      "resources": [
        "python-functools",
        "python-contextlib",
        "python-data-model"
      ],
      "featured": false,
      "description": "Decorators and context managers both add cross-cutting behavior around core code, but they solve different lifecycle problems. A decorator transforms a function or class at definition time, often returning a wrapper that performs work before and after a call. A context manager establishes a runtime context for a lexical block and guarantees an exit path for normal completion and exceptions. This chapter builds both mechanisms from ordinary Python objects, then covers function metadata, descriptors and methods, decorator factories, exception suppression, composition order, and resource ownership. These tools appear throughout data and AI systems in tracing, retry, caching, authorization, device or precision scopes, transactions, locks, and temporary configuration. They also create risk: a wrapper can change signatures, duplicate retries, hide failures, or capture sensitive arguments; a context manager can suppress an exception accidentally or hold a scarce resource while slow work runs. You will learn to keep transformations transparent, make cleanup deterministic, test success and failure paths, and decide when an explicit helper is more readable than syntax-level abstraction.",
      "prerequisites": [
        "python-data-structures",
        "python-generators"
      ],
      "learningObjectives": [
        "Trace decorator application and invocation, including factories, stacked order, closures, and method binding.",
        "Implement class-based and generator-based context managers with correct cleanup and exception behavior.",
        "Evaluate wrappers and resource scopes for metadata, observability, retry, security, and failure-semantics risks."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build transparent timing and resource-scope utilities and verify metadata, order, cleanup, and exception propagation.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Stacked decorator call order"
        },
        {
          "type": "flow",
          "title": "Context-manager lifecycle"
        }
      ],
      "followUpQuestions": [
        "In which order do stacked decorators execute?",
        "Why is `ExitStack` useful?",
        "When can a retry decorator be unsafe?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "numpy-vectorization",
      "title": "NumPy Vectorization & Broadcasting",
      "module": "python",
      "priority": "high",
      "roles": [
        "ds",
        "mle",
        "aie"
      ],
      "interviewAnswer": "Vectorization expresses operations over whole arrays so NumPy can execute tight compiled loops instead of one Python operation per element. Broadcasting compares shapes from the trailing dimensions; dimensions are compatible when equal or when one is 1, with missing leading dimensions treated as 1. It often avoids copying the smaller input, but the output or intermediates can still be large. Correct NumPy code reasons explicitly about shape, axis, dtype, and whether indexing returns a view or copy.",
      "keyPoints": [
        "Shape is part of the type",
        "Broadcast from trailing axes",
        "Ufuncs run compiled element loops",
        "Basic slicing usually views",
        "Intermediates and dtype dominate failures"
      ],
      "resources": [
        "numpy",
        "numpy-broadcasting",
        "numpy-copies-views"
      ],
      "featured": false,
      "description": "NumPy performance comes from representing homogeneous n-dimensional data in an `ndarray` and applying compiled array operations over that data. Vectorization moves element loops out of Python; broadcasting aligns compatible shapes without conceptually writing repeated values. Neither technique removes the need to reason about memory. An expression can allocate several full-size temporaries, a broadcast can create an enormous result, and a small slice can retain a large base array. This chapter develops a shape-first model covering dimensions, axes, strides, dtypes, universal functions, reduction, broadcasting, basic versus advanced indexing, and copies versus views. You will trace a standardization example, derive output shapes from the trailing-dimension rules, and verify memory sharing rather than guessing. The production goal is to write numerical code that is correct before it is clever: explicit about shapes, dtype precision, missing or invalid values, memory budget, and numerical checks. When vectorized code becomes opaque or produces a huge intermediate, chunking, a compiled loop, or a clearer algorithm can be the better engineering choice.",
      "prerequisites": [
        "python-data-structures",
        "big-o"
      ],
      "learningObjectives": [
        "Predict ndarray result shapes using axes, reductions, and the trailing-dimension broadcasting rules.",
        "Distinguish views from copies using indexing category, strides, base ownership, and memory-sharing checks.",
        "Design vectorized numerical work that controls dtype, temporaries, invalid values, and memory growth."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Derive broadcast shapes, standardize safely, and verify numerical invariants and memory sharing.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "matrix",
          "title": "Feature vector broadcast across rows"
        },
        {
          "type": "compare",
          "title": "View and copy ownership"
        }
      ],
      "followUpQuestions": [
        "Why does `keepdims=True` help?",
        "How can a tiny slice keep a huge allocation alive?",
        "How do you catch semantically wrong but broadcast-compatible code?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "pandas-core",
      "title": "pandas: Merge, GroupBy, Missing Data",
      "module": "python",
      "priority": "high",
      "roles": [
        "ds",
        "mle"
      ],
      "interviewAnswer": "For pandas work, first define each table's grain and key cardinality. Use `merge` for relational joins and validate the intended one-to-one or many-to-one relationship; use groupby aggregation when rows collapse and transform when results must align with original rows. Treat missing values according to their meaning, not with a universal fill. Use explicit `.loc` assignment under current Copy-on-Write semantics, and test row counts, uniqueness, dtypes, match rates, and edge cases.",
      "keyPoints": [
        "Grain before operations",
        "Join cardinality is a contract",
        "Aggregate and transform differ",
        "Missingness has meaning",
        "Validate shape, keys, and dtypes"
      ],
      "resources": [
        "pandas-merging",
        "pandas-groupby",
        "pandas-missing",
        "pandas-copy-on-write"
      ],
      "featured": false,
      "description": "pandas makes labeled tabular transformations concise, but correctness depends on contracts that the syntax does not infer for you. A merge can multiply rows because keys are duplicated. A groupby can drop missing keys or return a differently indexed result. A fill operation can change dtype, encode an invalid statistical assumption, or leak future information. This chapter treats a DataFrame transformation as a relational and statistical program: define row grain, key cardinality, schema, missingness policy, and expected output before calling an API. It covers label versus position indexing, Copy-on-Write mutation semantics in current pandas, database-style joins, groupby aggregation and transformation, nullable dtypes, and validation patterns. The worked example builds customer features from orders while preserving customers with no orders and detecting duplicate dimension keys. You will learn to measure row counts and match rates, distinguish structural absence from unknown measurement, test edge cases, and recognize when pandas is no longer the right execution engine. The goal is a reproducible data contract, not a clever chain of method calls.",
      "prerequisites": [
        "python-data-structures",
        "numpy-vectorization"
      ],
      "learningObjectives": [
        "Specify DataFrame row grain, keys, dtypes, and missing-value semantics before a transformation.",
        "Predict merge cardinality and groupby result shape, then enforce those expectations with validation.",
        "Write mutation-safe pandas code and test transformations for duplicates, nulls, schema drift, and leakage."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build a contract-checked customer feature table and verify key uniqueness, row preservation, reconciliation, and missingness policy.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Contract-first tabular transformation"
        },
        {
          "type": "compare",
          "title": "Aggregation and transformation"
        }
      ],
      "followUpQuestions": [
        "What is the difference between groupby aggregate and transform?",
        "How do you diagnose unexpected rows after a merge?",
        "What changed with Copy-on-Write?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "python-testing",
      "title": "Testing ML / Data Code",
      "module": "python",
      "priority": "high",
      "roles": [
        "mle",
        "aie"
      ],
      "interviewAnswer": "Test ML and data systems in layers: unit-test deterministic transforms and edge cases; validate schemas and invariants on representative data; test numerical properties with justified tolerances; regression-test model outputs or metrics on frozen slices; and integration-test serialization, feature parity, and serving paths. Control randomness and external dependencies, but do not replace production monitoring. A good test names the risk it catches and fails with enough evidence to diagnose it.",
      "keyPoints": [
        "Test risks, not implementation trivia",
        "Tiny adversarial fixtures",
        "Approximate numerical invariants",
        "Separate code, data, and model checks",
        "Monitoring covers what tests cannot"
      ],
      "resources": [
        "pytest-docs",
        "python-unittest",
        "made-with-ml",
        "fsdl"
      ],
      "featured": false,
      "description": "Testing data and machine-learning software requires more than checking a few expected numbers. A useful suite separates deterministic transformation behavior, data contracts, numerical properties, model behavior, component integration, and end-to-end system paths. It also controls nondeterminism without pretending stochastic systems are bit-for-bit stable. This chapter develops a risk-based test strategy using plain assertions and pytest concepts: arrange-act-assert, fixtures with scoped cleanup, parametrization, temporary resources, monkeypatching at the lookup site, approximate comparisons, property and metamorphic checks, golden artifacts, and model regression tests. You will learn why test data should be tiny but adversarial, how to avoid leakage between tests, how to choose tolerances, and how to keep slow or flaky external dependencies out of unit tests. The worked example tests a normalization transform against shape, finiteness, constant-column, and training-statistic invariants. The production perspective connects local tests to schema validation, shadow evaluation, canaries, monitoring, rollback, and incident reproduction. The aim is evidence about failure risk, not a high coverage percentage detached from behavior.",
      "prerequisites": [
        "python-data-structures",
        "numpy-vectorization",
        "pandas-core"
      ],
      "learningObjectives": [
        "Map risks in data, numerical, model, and system behavior to the cheapest reliable test layer.",
        "Use fixtures, parametrization, dependency seams, approximate assertions, and metamorphic properties without shared-state leakage.",
        "Design regression and integration checks that remain deterministic, interpretable, and useful during deployment and rollback."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Test a numerical transformer with example, property, error-path, state, and round-trip assertions.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "ML testing layers"
        },
        {
          "type": "flow",
          "title": "Evidence across the release lifecycle"
        }
      ],
      "followUpQuestions": [
        "How do you test a model when exact predictions legitimately change?",
        "Where should monkeypatch be applied?",
        "What is a metamorphic test?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "sql-joins",
      "title": "SQL Joins",
      "module": "sql",
      "priority": "very-high",
      "roles": [
        "ds",
        "de",
        "mle",
        "da"
      ],
      "interviewAnswer": "A join pairs rows whose predicate evaluates true. Inner join keeps matches; left join also preserves unmatched left rows with NULL-extended right columns; full join preserves unmatched rows from both sides. Cardinality depends on key multiplicities: a key appearing a times on the left and b times on the right contributes a×b inner matches. Define each table's grain, validate key uniqueness and match rates, and be careful placing right-side filters after a left join because `WHERE` can remove NULL-extended rows. The optimizer may implement the same logic with nested-loop, hash, or merge join.",
      "keyPoints": [
        "Declare row grain first",
        "Multiplicity determines output rows",
        "Outer joins preserve one side",
        "NULL makes predicates unknown",
        "Logical join differs from physical algorithm"
      ],
      "resources": [
        "postgres-select",
        "cmu-db"
      ],
      "featured": true,
      "description": "A SQL join combines rows according to a predicate, but its most important property is cardinality: how many output rows each input key can produce. This chapter develops joins from Cartesian product and filtering, then covers inner, left, right, full, cross, self, semi, and anti semantics; NULL and three-valued logic; duplicate multiplication; key normalization; and physical nested-loop, hash, and merge join strategies. You will learn to state table grain before joining, place predicates correctly for outer joins, enforce one-to-one or many-to-one expectations with constraints and tests, and reconcile measures after combination. A worked customer-order example preserves customers without orders while distinguishing structural absence from unknown amounts. The performance section connects logical SQL to optimizer choices, indexes, statistics, memory, spill, skew, and join order without assuming a particular plan from query text. The objective is not merely to recall join syntax. It is to predict the output population, prove which unmatched rows survive, catch unintended many-to-many expansion, and operate joins safely as data distributions and schemas change.",
      "prerequisites": [
        "hash-tables",
        "normalization-db"
      ],
      "learningObjectives": [
        "Predict output grain, matched multiplicity, and unmatched-row behavior for every major join type.",
        "Explain NULL predicate behavior and distinguish semi/anti existence tests from value-producing joins.",
        "Validate join correctness and diagnose physical plans using keys, constraints, statistics, indexes, memory, and skew."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Model join cardinality with tiny tables and verify preservation, unmatched, duplication, and reconciliation invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Inner and left join preservation"
        },
        {
          "type": "flow",
          "title": "Join assurance loop"
        }
      ],
      "followUpQuestions": [
        "When is `EXISTS` better than a join?",
        "Why can a hash join spill?",
        "How do you debug a join that became slow without SQL changes?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "sql-aggregation",
      "title": "GROUP BY, HAVING & Aggregation",
      "module": "sql",
      "priority": "high",
      "roles": [
        "ds",
        "de",
        "mle",
        "da"
      ],
      "interviewAnswer": "`GROUP BY` partitions filtered input rows by key and returns one result row per observed group; aggregate functions summarize rows within each group. `WHERE` filters rows before grouping, while `HAVING` filters groups after aggregates. `COUNT(*)` counts rows, `COUNT(col)` counts non-NULL values, and distinct or conditional metrics must be explicit. Always state the output grain and denominator, because joins or duplicate inputs can change weighting. Physical execution may use hash or sort aggregation and can spill when state exceeds memory.",
      "keyPoints": [
        "Aggregation changes grain",
        "WHERE rows, HAVING groups",
        "COUNT variants differ",
        "Denominators are contracts",
        "Reconcile grouped totals"
      ],
      "resources": [
        "postgres-select",
        "cmu-db"
      ],
      "featured": false,
      "description": "SQL aggregation changes row grain by partitioning input rows into groups and computing one result per group. This chapter explains the logical order from WHERE filtering through GROUP BY, aggregate evaluation, HAVING, SELECT, and final ORDER BY. It distinguishes `COUNT(*)`, `COUNT(expression)`, distinct counts, conditional aggregates, and NULL behavior; covers grouping sets, rollups, and the danger of mixing metrics at incompatible grains; and connects exact results to hash and sort aggregation plans. You will learn to declare the output grain, make denominators explicit, avoid integer and divide-by-zero errors, separate row filters from group filters, and reconcile summaries against base data. A worked daily product metric example computes orders, customers, revenue, and failure rate without accidentally weighting joined rows. The production material covers incremental recomputation, late data, slowly changing definitions, approximate distinct counting, spill, skew, data quality, and metric governance. The goal is to make an aggregate a trustworthy semantic contract rather than a compact query whose population and NULL rules are implicit.",
      "prerequisites": [
        "sql-joins"
      ],
      "learningObjectives": [
        "Predict grouped output grain and logical clause order for row filters, aggregates, HAVING, and final projection.",
        "Choose correct count, distinct, conditional, NULL, denominator, and grouping-set semantics for a metric.",
        "Validate and operate aggregations using reconciliation, incremental-window, late-data, plan, spill, and governance controls."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Compute metrics in SQLite and verify grain, NULL, denominator, and reconciliation behavior.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Logical aggregation pipeline"
        },
        {
          "type": "compare",
          "title": "Row count and value count"
        }
      ],
      "followUpQuestions": [
        "What does a left join do to `COUNT(*)` for an unmatched left row?",
        "Why can aggregation spill to disk?",
        "When should you retain numerator and denominator?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "sql-window-functions",
      "title": "Window Functions",
      "module": "sql",
      "priority": "very-high",
      "roles": [
        "ds",
        "de",
        "mle",
        "da"
      ],
      "interviewAnswer": "A window function computes over rows related to the current row but does not collapse them. `PARTITION BY` resets groups, `ORDER BY` defines sequence and peers, and the frame defines which ordered rows an aggregate-like window sees. `ROW_NUMBER` is unique order, `RANK` leaves gaps across ties, and `DENSE_RANK` does not. Window functions logically run after WHERE, grouping, and HAVING, so filter their results in an outer query. Always specify deterministic tie-breakers and an explicit frame for running or rolling calculations.",
      "keyPoints": [
        "Windows preserve row grain",
        "Partition, order, and frame differ",
        "Peers affect ranks and RANGE",
        "Filter window outputs later",
        "Temporal frames must exclude the future"
      ],
      "resources": [
        "postgres-window",
        "postgres-select",
        "cmu-db"
      ],
      "featured": true,
      "description": "Window functions calculate across related rows while preserving one output row for each current input row. They power ranking, deduplication, running totals, moving statistics, session comparisons, and change detection without collapsing detail through GROUP BY. This chapter separates partition, ordering, peer groups, and window frame; contrasts `ROW_NUMBER`, `RANK`, and `DENSE_RANK`; explains `LAG`, `LEAD`, and aggregate windows; and shows why default frames can make `LAST_VALUE` or cumulative aggregates surprising. You will learn SQL's logical stage constraints, use a subquery to filter window outputs, make tie ordering deterministic, and prevent future leakage in time-based features. A worked event example selects the latest valid row per entity and verifies ties. The performance sections cover sorts, indexes, partition skew, memory, spill, named windows, and incremental limits. The goal is to reason about the exact row set visible to every function, rather than assuming `PARTITION BY` alone defines the calculation. This framing also makes code review, boundary testing, historical reproducibility, and cross-dialect migration more reliable when defaults differ.",
      "prerequisites": [
        "sql-aggregation",
        "sorting-searching"
      ],
      "learningObjectives": [
        "Distinguish result partition, peer order, and ROWS/RANGE/GROUPS frame for common window functions.",
        "Choose ranking, offset, cumulative, rolling, and deduplication patterns with deterministic ordering and NULL policies.",
        "Prevent temporal leakage and diagnose window plans, sorts, skew, spill, and incremental limitations."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Run SQLite window queries and verify ranking ties, latest-row determinism, cumulative frames, and row preservation.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "Window definition layers"
        },
        {
          "type": "compare",
          "title": "Ranking peers"
        }
      ],
      "followUpQuestions": [
        "How do RANK and DENSE_RANK differ?",
        "Why filter window results in a subquery?",
        "How can a rolling feature leak?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "sql-ctes-subqueries",
      "title": "CTEs & Subqueries",
      "module": "sql",
      "priority": "medium",
      "roles": [
        "ds",
        "de",
        "mle",
        "da"
      ],
      "interviewAnswer": "A subquery is a query embedded in another expression or table expression; it may be uncorrelated or reference outer rows. `EXISTS` is ideal for semi-join logic, and `NOT EXISTS` for anti-join logic that avoids NULL surprises. A CTE names a query result for the following statement and improves staged reasoning, but whether it is inlined or materialized is engine- and query-dependent. A recursive CTE combines an anchor with a recursive term evaluated against a working table until no new rows remain, so termination and cycle controls are essential.",
      "keyPoints": [
        "Cardinality selects subquery form",
        "EXISTS expresses membership",
        "CTE names a relational stage",
        "Materialization is not guaranteed",
        "Recursive queries need termination"
      ],
      "resources": [
        "postgres-with",
        "postgres-select",
        "cmu-db"
      ],
      "featured": false,
      "description": "Subqueries and common table expressions (CTEs) name intermediate relational results. They can clarify a complex transformation, express existence and scalar lookup, isolate a change of grain, or recursively traverse a hierarchy. They do not automatically make a query faster, and their evaluation or materialization behavior depends on the database, version, references, volatility, and optimizer. This chapter develops scalar, row, table, correlated, `EXISTS`, `IN`, and derived-table forms; explains NULL-sensitive anti-joins; shows how non-recursive CTEs support readable stage contracts; and traces the anchor-and-recursive-term working-table model. You will learn when correlation creates repeated work, when an optimizer can decorrelate or inline, how to guard scalar cardinality, and how to bound cycles and depth in recursive queries. A worked funnel example computes one row per user at each stage before combining them. Production sections cover plan inspection, repeated references, temporary materialization, recursion safety, transaction snapshots, naming, testing, and portability. The objective is to structure reasoning without treating query syntax as an execution directive.",
      "prerequisites": [
        "sql-joins",
        "sql-aggregation"
      ],
      "learningObjectives": [
        "Choose scalar, table, correlated, EXISTS, anti-join, derived-table, or CTE form from result cardinality and semantics.",
        "Trace recursive CTE anchor and working-table iterations while enforcing termination, cycle, and depth rules.",
        "Inspect optimization, inlining, materialization, repeated work, and snapshot behavior instead of assuming syntax determines performance."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Use SQLite CTEs for staged grain and recursion, verifying uniqueness, anti-join NULL safety, order, and cycle bounds.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Recursive CTE working-table loop"
        },
        {
          "type": "compare",
          "title": "Inlining and materialization"
        }
      ],
      "followUpQuestions": [
        "When can a correlated subquery be efficient?",
        "When would you force or choose materialization?",
        "How do you stop a recursive CTE on cyclic data?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "transactions-indexes",
      "title": "Transactions & Indexes",
      "module": "sql",
      "priority": "medium",
      "roles": [
        "de",
        "mle",
        "da"
      ],
      "interviewAnswer": "A transaction makes a set of operations commit or roll back as one unit and preserves database constraints under the chosen isolation and durability mechanisms. An index is a maintained access structure—commonly a B-tree—that can reduce searched pages for selective equality, range, and ordering queries. Indexes consume storage and add work to inserts, updates, deletes, vacuum/maintenance, and concurrency. Composite order, predicate shape, selectivity, and table size determine usefulness; the optimizer may correctly choose a scan even when an index exists.",
      "keyPoints": [
        "Transaction boundary matches invariant",
        "Rollback handles all failure paths",
        "Indexes trade reads for writes",
        "Composite order follows workload",
        "Plan evidence beats index folklore"
      ],
      "resources": [
        "postgres-indexes",
        "postgres-transactions",
        "cmu-db"
      ],
      "featured": false,
      "description": "Transactions group database changes into an atomic unit, while indexes maintain additional access paths that accelerate selected reads at the cost of storage and write work. They solve different problems but interact: an index must remain transactionally consistent, updates create index maintenance and locking or versioning work, and query access paths influence how long a transaction holds resources. This chapter introduces ACID properties, commit and rollback, statement errors, savepoints, idempotent retry boundaries, B-tree and hash-style access, multicolumn order, covering/index-only scans, expression and partial indexes, selectivity, and write amplification. It separates index eligibility from optimizer choice and explains why an index can exist yet be slower than a sequential scan. You will design a transfer transaction with invariants and an index set for a time-filtered status query, then verify rollback and plan behavior. Detailed isolation anomalies are deferred to the dedicated isolation chapter; here the focus is transaction boundaries and index design. Production sections cover long transactions, deadlocks, bloat, online builds, monitoring, migrations, and rollback.",
      "prerequisites": [
        "sql-joins",
        "big-o"
      ],
      "learningObjectives": [
        "Define atomic transaction boundaries and application-level invariants with commit, rollback, savepoint, and retry behavior.",
        "Choose B-tree, multicolumn, covering, expression, or partial index designs from predicates, ordering, selectivity, and write workload.",
        "Diagnose index usage and transaction/index operational costs through plans, locks, versions, bloat, build strategy, and monitoring."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Use SQLite to verify transaction rollback, uniqueness/idempotency, and a composite index query plan.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "Transaction correctness boundary"
        },
        {
          "type": "compare",
          "title": "Index read/write trade-off"
        }
      ],
      "followUpQuestions": [
        "Why can a query ignore an available index?",
        "What is an index-only scan?",
        "How do you handle a serialization or deadlock failure?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "stored-procedures",
      "title": "Stored Procedures & Data Pipelines",
      "module": "sql",
      "priority": "medium",
      "roles": [
        "de",
        "ds",
        "da"
      ],
      "interviewAnswer": "A stored routine is versioned logic executed by the database. Functions usually return a value or relation and can participate in queries under engine rules; procedures are called as commands and may support transaction control depending on engine and call context. They are useful for data-local set operations and controlled database interfaces, but not a replacement for workflow orchestration. Keep routines set-based, parameterized, least-privileged, observable, idempotent where retried, and deployed with compatible application and schema versions.",
      "keyPoints": [
        "Routine type follows side effects",
        "Keep data-local work set-based",
        "Parameterize dynamic SQL",
        "Least privilege and search path",
        "Orchestration remains external"
      ],
      "resources": [
        "postgres-routines",
        "postgres-transactions",
        "cmu-db"
      ],
      "featured": false,
      "description": "Stored functions and procedures execute reusable logic close to database data. They can centralize set-based transformations, enforce a privileged interface, reduce application round trips, and make some migrations atomic. They can also hide dependencies, concentrate load, couple code to one dialect, create security-definer escalation, and become an unobservable scheduler disguised as a routine. This chapter distinguishes SQL functions, procedures, triggers, views, and application jobs; explains parameters, result and transaction semantics, volatility and side effects, dynamic SQL and injection, set-oriented implementation, error handling, idempotent batches, and deployment versioning. You will build a small load procedure contract and compare it with an application-orchestrated pipeline. A key principle is separation of concerns: the routine owns a bounded database transaction or transformation, while an orchestrator owns schedules, retries across systems, lineage, backfills, alerts, and human recovery. Because routine capabilities vary strongly by engine, the chapter uses PostgreSQL documentation for concrete examples while clearly labeling portability boundaries.",
      "prerequisites": [
        "transactions-indexes",
        "sql-ctes-subqueries"
      ],
      "learningObjectives": [
        "Choose among function, procedure, trigger, view, and application job based on invocation, result, side-effect, and transaction needs.",
        "Design set-based, parameterized, privilege-safe routines with explicit errors, idempotency, observability, and bounded transaction scope.",
        "Deploy and operate database routines within versioned pipelines that support lineage, backfill, testing, rollback, and cross-system orchestration."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Model an idempotent set-based partition load in SQLite and verify rerun, rollback, uniqueness, and reconciliation invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Database routine and orchestrator responsibilities"
        },
        {
          "type": "flow",
          "title": "Idempotent partition load"
        }
      ],
      "followUpQuestions": [
        "Function versus procedure in PostgreSQL?",
        "When is a trigger appropriate?",
        "How do you deploy a breaking routine signature change?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "vectors-matrices",
      "title": "Vectors, Matrices & Dot Products",
      "module": "math",
      "priority": "very-high",
      "roles": [
        "all",
        "as"
      ],
      "interviewAnswer": "A vector is an ordered coordinate representation; a matrix often represents a linear map or a batch of vectors. If A has shape m×n and x has shape n, then Ax has shape m and each output is a row of A dotted with x. If B is n×p, AB is m×p and composes B followed by A. The dot product measures aligned magnitude and defines geometry; the outer product creates a rank-one matrix. Rank counts independent directions preserved by a map, the column space contains possible outputs, and the null space contains inputs mapped to zero. Track orientation and shapes explicitly, distinguish `@` from elementwise `*`, and solve systems rather than computing inverses explicitly.",
      "keyPoints": [
        "Shape is part of meaning",
        "Matrix multiplication composes maps",
        "Dot and outer products differ",
        "Rank counts independent directions",
        "Solve systems; avoid explicit inverse"
      ],
      "resources": [
        "mit-linear-algebra",
        "3b1b-linear-algebra",
        "numpy-linalg"
      ],
      "featured": true,
      "description": "Vectors and matrices are representations of linear relationships, not just rectangular containers of numbers. A vector can encode coordinates, features, parameters, probabilities or a direction; a matrix can encode a linear map, a collection of observations, a graph or a change of basis. This chapter builds the subject from shape and orientation through vector addition, scaling, inner and outer products, matrix-vector and matrix-matrix multiplication, transpose, identity, inverse, rank, column space, null space and affine bias. You will learn to read every multiplication as both a shape contract and a composition of transformations, distinguish elementwise multiplication from contraction, and explain why solving a linear system is preferable to explicitly forming an inverse. A worked batch prediction traces indices and dimensions from features to outputs. The implementation material exposes multiplication with loops, then uses NumPy while checking shapes and invariants. Production guidance covers dtype, broadcasting, memory layout, batching, sparse structure, conditioning, thread oversubscription, serialization and privacy. The goal is to make shape reasoning and geometric meaning automatic enough that later topics—least squares, gradients, attention, embeddings and neural networks—feel like precise extensions rather than new notation to memorize.",
      "prerequisites": [],
      "learningObjectives": [
        "Interpret vectors and matrices simultaneously as arrays, coordinate representations, collections of examples and linear transformations.",
        "Derive shapes and index formulas for dot, outer, matrix-vector and matrix-matrix products and reject invalid broadcasting.",
        "Use rank, column space and null space to reason about solvability, identifiability and information loss in real systems."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement matrix multiplication from its index definition, then verify shape, manual entries, identity, associativity and NumPy agreement.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Matrix product as axis contraction"
        },
        {
          "type": "compare",
          "title": "Four products, four meanings"
        }
      ],
      "followUpQuestions": [
        "What does matrix rank mean?",
        "Why is matrix multiplication not commutative?",
        "What is the difference between linear and affine?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "eigen-svd",
      "title": "Eigenvalues, Eigenvectors & SVD",
      "module": "math",
      "priority": "high",
      "roles": [
        "ds",
        "mle",
        "aie",
        "as"
      ],
      "interviewAnswer": "An eigenvector v of square A satisfies Av=λv, so its direction is preserved and scaled by eigenvalue λ. General matrices may have complex eigenvalues or lack a full eigenbasis; real symmetric matrices have orthonormal eigenvectors and real eigenvalues. Any m×n matrix has an SVD `A=UΣVᵀ`: V gives orthonormal input directions, Σ nonnegative gains, and U the corresponding output directions. Singular values expose rank and conditioning, and keeping the top k terms gives the best rank-k approximation in Frobenius and spectral norm. PCA is SVD/eigendecomposition applied to centered data/covariance, with preprocessing fitted on training data.",
      "keyPoints": [
        "Eigenvectors preserve direction",
        "SVD works for rectangular matrices",
        "Singular values quantify gain",
        "Truncation is optimal for reconstruction norms",
        "PCA requires centering and leakage control"
      ],
      "resources": [
        "mit-linear-algebra",
        "3b1b-linear-algebra",
        "numpy-linalg"
      ],
      "featured": false,
      "description": "Eigenvectors identify directions preserved by a square linear transformation up to scale; singular value decomposition (SVD) gives an orthonormal input/output basis and nonnegative gains for any rectangular matrix. This chapter distinguishes eigendecomposition from SVD, derives their geometry, and connects them through `AᵀA` and `AAᵀ`. You will learn when a real matrix may lack a complete real eigenbasis, why symmetric matrices behave especially well, how singular values reveal rank and conditioning, and how truncated SVD yields the best low-rank approximation under standard norms. The chapter connects these ideas to principal component analysis, latent semantic structure, image compression, pseudoinverse and iterative power methods while separating centered covariance PCA from an uncentered matrix factorization. A worked 2×2 example verifies reconstruction and rank-one error. The lab implements power iteration and uses NumPy SVD with sign-invariant checks. Production guidance covers scaling, missing data, randomized algorithms, component stability, sign/rotation ambiguity, reconstruction versus downstream utility, privacy, resource cost and rollback. The aim is to make decompositions tools for understanding which directions a system amplifies, suppresses or cannot identify—not mysterious functions that merely return three arrays.",
      "prerequisites": [
        "vectors-matrices",
        "projections-least-squares"
      ],
      "learningObjectives": [
        "Explain eigenvectors/eigenvalues and singular vectors/values geometrically and state when each decomposition applies.",
        "Use singular values to reason about rank, conditioning, pseudoinverse, energy and optimal low-rank approximation.",
        "Apply PCA or truncated SVD without leakage, centering mistakes or invalid interpretations of unstable components."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement dominant-eigenvector power iteration, then verify SVD reconstruction, orthogonality, sign-invariant eigen behavior and optimal rank-one error.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "SVD maps a sphere to an ellipsoid"
        },
        {
          "type": "compare",
          "title": "Eigen versus singular decomposition"
        }
      ],
      "followUpQuestions": [
        "How are eigenvalues and singular values related?",
        "What does a tiny singular value imply?",
        "What does truncated SVD optimize?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "derivatives-gradients",
      "title": "Derivatives, Gradients & Chain Rule",
      "module": "math",
      "priority": "very-high",
      "roles": [
        "all",
        "as"
      ],
      "interviewAnswer": "The derivative is the linear map that best approximates a function near a point. In one dimension, `f(x+h)=f(x)+f'(x)h+o(h)`. For scalar `f:R^n→R`, the differential is `df=∇f(x)^T dx`; the directional derivative along unit u is `∇f·u`, so the Euclidean gradient points toward steepest local increase. For compositions, derivatives multiply in the chain rule. Reverse-mode autodiff propagates a scalar output sensitivity backward through local Jacobian-transpose products, making it efficient for many parameters and one loss. Track tensor shapes, evaluate derivatives at forward-pass values, and verify custom or risky gradients against finite differences on small cases.",
      "keyPoints": [
        "Derivative is a local linear map",
        "Gradient represents the differential under an inner product",
        "Chain rule composes sensitivities",
        "Reverse mode uses vector-Jacobian products",
        "Finite differences validate but do not replace derivatives"
      ],
      "resources": [
        "stanford-cs229",
        "mit-6s191",
        "boyd-convex"
      ],
      "featured": false,
      "description": "A derivative is the coefficient of the best local linear approximation, not merely a symbolic slope rule. For a scalar function of one variable it measures first-order change; for a scalar function of many variables the gradient collects partial derivatives and points in the direction of steepest increase under Euclidean geometry. For vector-valued functions the local linear map is a Jacobian. This chapter develops limits, differentials, directional derivatives, partial derivatives, gradients and the multivariable chain rule, then shows how computation graphs organize reverse-mode backpropagation. You will learn to track shapes and evaluation points, distinguish a derivative from a finite difference, handle broadcasting and shared parameters, and recognize nondifferentiable or saturated regions. A worked two-layer scalar graph traces forward values and reverse sensitivities. The lab implements central differences and a tiny dual-number forward derivative, then checks an analytic chain-rule result. Production guidance covers gradient checks, autodiff modes, nondeterminism, precision, exploding/vanishing gradients, custom operations, monitoring and secure artifact handling. The goal is to see differentiation as propagation of local sensitivity through a composed system, which makes both mathematical derivations and debugging modern ML code much more reliable.",
      "prerequisites": [
        "vectors-matrices"
      ],
      "learningObjectives": [
        "Interpret derivatives, differentials, directional derivatives and gradients as local linear approximations with explicit assumptions and shapes.",
        "Apply scalar and multivariable chain rules through a computation graph and explain forward versus reverse accumulation.",
        "Validate and operate automatic differentiation using analytic invariants, finite-difference checks, precision controls and failure diagnostics."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement a dual-number forward derivative and central-difference gradient check, then verify a chained analytic derivative.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Reverse-mode sensitivity flow"
        },
        {
          "type": "compare",
          "title": "Derivative computation methods"
        }
      ],
      "followUpQuestions": [
        "Why is reverse mode efficient for neural networks?",
        "What is a directional derivative?",
        "What does detach/stop-gradient do?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "convexity",
      "title": "Convexity & Optimization Intuition",
      "module": "optimization",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "A set is convex when every line segment between two of its points remains in the set. A function is convex when its graph lies below every chord, equivalently its epigraph is convex; for differentiable functions the tangent plane is a global underestimator, and twice-differentiable convex functions have positive-semidefinite Hessians. A convex optimization problem minimizes a convex objective over a convex feasible set, so every local minimum is global. Strong convexity can give uniqueness and smoothness controls safe gradient steps, but convexity alone does not guarantee strict uniqueness, fast convergence, good conditioning, or numerical correctness.",
      "keyPoints": [
        "Convex combinations define both convex sets and Jensen's inequality",
        "Local minima are global only when objective and feasible set form a convex problem",
        "Positive-semidefinite Hessian is a second-order convexity test on a convex domain",
        "Strong convexity and smoothness control uniqueness and optimization rates",
        "A solver result still needs feasibility, stationarity, and numerical validation"
      ],
      "resources": [
        "boyd-convex",
        "stanford-ee364a",
        "cvxpy-guide",
        "scipy-optimize"
      ],
      "featured": false,
      "description": "Convexity is the structural property that turns many optimization problems from a search for a lucky local solution into a problem with global guarantees. This chapter develops convex sets, convex combinations, convex functions, epigraphs, first- and second-order tests, strong convexity, smoothness, subgradients, projections, and the difference between convex problems and merely convex objectives. You will learn what convexity guarantees, what it does not guarantee, how objective geometry controls gradient methods, and how transformations or regularizers can preserve or destroy tractability. A worked quadratic example connects Hessian eigenvalues to contours, step sizes, conditioning, and convergence. The lab implements projected gradient descent for a box-constrained convex quadratic, compares it with SciPy, and checks feasibility, monotone descent, stationarity, and the known optimum. Production guidance covers scaling, stopping criteria, numerical precision, solver statuses, warm starts, reproducibility, monitoring, and rollback. The goal is not to memorize Jensen's inequality; it is to recognize when a model has exploitable global structure and verify that the implemented problem actually retains it.",
      "prerequisites": [
        "vectors-matrices",
        "derivatives-gradients",
        "norms-distances"
      ],
      "learningObjectives": [
        "Prove or disprove convexity of common sets and functions using definitions, composition rules, gradients, and Hessians.",
        "Distinguish a convex objective from a convex optimization problem and state the global-optimality consequences precisely.",
        "Relate strong convexity, smoothness, and condition number to uniqueness, stable step sizes, and convergence speed.",
        "Implement and verify projected gradient descent with feasibility, descent, and stationarity checks."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement projected gradient descent for a strongly convex box-constrained quadratic, compare with SciPy, and verify descent, feasibility, and stationarity.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Conceptual convex and nonconvex landscapes"
        },
        {
          "type": "compare",
          "title": "Geometry changes the guarantee"
        }
      ],
      "followUpQuestions": [
        "What is the difference between strict and strong convexity?",
        "Can a nondifferentiable function be convex?",
        "Why does feature scaling affect a convex problem?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "gradient-descent",
      "title": "Gradient Descent & Learning Rate",
      "module": "math",
      "priority": "very-high",
      "roles": [
        "all",
        "as"
      ],
      "interviewAnswer": "Gradient descent updates `θ_{t+1}=θ_t−η_t∇f(θ_t)`. The negative gradient is steepest local descent in Euclidean geometry, while the learning rate decides how far the local approximation is trusted. For an L-smooth objective, a step below roughly `2/L` gives stable descent in the quadratic case; on a positive-definite quadratic, convergence speed depends on condition number. Mini-batch SGD uses noisy unbiased or approximately unbiased gradients for scale and sometimes useful noise. Momentum averages directions; preconditioning rescales coordinates. Monitor loss, gradient/update norms, validation metrics and numerical health, and checkpoint weights, optimizer, scheduler, random/data state together.",
      "keyPoints": [
        "Direction and step size are separate",
        "Curvature sets stability scale",
        "Conditioning sets speed disparity",
        "SGD introduces gradient noise",
        "Checkpoint the whole training state"
      ],
      "resources": [
        "boyd-convex",
        "stanford-ee364a",
        "stanford-cs229"
      ],
      "featured": true,
      "description": "Gradient descent iteratively updates parameters opposite the gradient to reduce a differentiable objective, but its behavior is governed by local curvature, scaling, noise and step-size policy. This chapter derives descent from first-order approximation and the descent lemma, analyzes a quadratic through Hessian eigenvalues, and explains why learning rates that are too large oscillate or diverge while tiny rates stall along flat directions. You will learn full-batch, stochastic and mini-batch gradients; momentum and preconditioning; learning-rate warmup, decay and line search; stopping criteria; saddle points; and the difference between optimization loss, validation metric and business objective. A worked anisotropic quadratic makes conditioning and zig-zagging concrete. The lab implements gradient descent with backtracking and verifies monotonic decrease, gradient accuracy and convergence. Production guidance covers reproducibility, checkpoint/optimizer state, gradient accumulation, mixed precision, clipping, distributed reductions, cost, monitoring, rollback and safe failure. The objective is not to memorize optimizer names but to reason about the update as a dynamical system whose scale and noise must match the model, data and operational budget.",
      "prerequisites": [
        "derivatives-gradients",
        "norms-distances"
      ],
      "learningObjectives": [
        "Derive gradient-descent updates from local approximation and analyze learning-rate stability on smooth quadratics.",
        "Distinguish batch, stochastic, momentum and preconditioned updates and choose schedules/stopping rules from measurable behavior.",
        "Operate training with reproducible checkpoints, numerical safeguards, validation separation, cost controls and rollback."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement gradient descent with Armijo backtracking for a quadratic and verify gradient correctness, monotonic descent and convergence.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Learning rate on one steep direction"
        },
        {
          "type": "flow",
          "title": "Reliable training loop"
        }
      ],
      "followUpQuestions": [
        "Why can gradient descent zig-zag?",
        "What does momentum do?",
        "Why separate training loss and validation metric?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "probability-basics",
      "title": "Conditional Probability & Bayes Rule",
      "module": "probability",
      "priority": "very-high",
      "roles": [
        "ds",
        "mle",
        "aie",
        "as"
      ],
      "interviewAnswer": "Conditional probability is `P(A|B)=P(A∩B)/P(B)` for `P(B)>0`; it restricts the population to cases where B occurred. The multiplication rule is `P(A∩B)=P(A|B)P(B)`. Bayes' rule reverses the condition: `P(A|B)=P(B|A)P(A)/P(B)`, where the denominator can be expanded across mutually exclusive hypotheses. The prior/base rate matters: a highly sensitive test can have low positive predictive value when the condition is rare. Define events and population explicitly, use counts to sanity-check, and remember Bayes updates beliefs within the assumed likelihood and prior—it does not prove causality or model correctness.",
      "keyPoints": [
        "Name the experiment and events",
        "Conditioning changes the reference population",
        "Joint equals conditional times marginal",
        "Bayes combines likelihood and base rate",
        "Posterior quality depends on model and data"
      ],
      "resources": [
        "harvard-stat110",
        "stanford-stats60",
        "think-bayes"
      ],
      "featured": false,
      "description": "Probability is a mathematical language for uncertain outcomes under a stated model. Events are subsets of a sample space; probability assigns them coherent weights. Conditional probability restricts attention to cases where evidence occurred, the multiplication rule connects joint and conditional events, and Bayes' rule reverses a condition by combining likelihood with a base rate. This chapter develops complements, unions, intersections, inclusion–exclusion, odds, partitions, diagnostic testing and repeated evidence while separating mathematical probability from causal claims and poorly calibrated subjective confidence. You will learn to define the population and experiment before calculating, avoid confusing `P(A|B)` with `P(B|A)`, and recognize when selection or model misspecification invalidates a posterior. A worked medical-screening example uses a natural-frequency table to make false positives and prevalence visible. The lab enumerates a finite population and verifies Bayes through counts and formulas. Production guidance covers prevalence drift, calibration, threshold decisions, uncertain labels, monitoring, privacy, adversarial likelihood inputs and rollback. The objective is to make every probability statement answer four questions: probability of what event, under which population/model, conditional on what information, and for which decision.",
      "prerequisites": [],
      "learningObjectives": [
        "Represent uncertain experiments with sample spaces and events and apply probability axioms, complements, unions, intersections and inclusion–exclusion.",
        "Derive conditional probability, multiplication, total probability and Bayes' rule and solve base-rate-sensitive problems with natural frequencies.",
        "Translate probabilistic outputs into monitored decisions while distinguishing calibration, causation, selection, model uncertainty and cost."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Compute diagnostic Bayes probabilities from natural frequencies and verify formula/count agreement, normalization and prevalence sensitivity.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Bayesian update as odds flow"
        },
        {
          "type": "compare",
          "title": "Rare-test positive population"
        }
      ],
      "followUpQuestions": [
        "Why does prevalence affect precision?",
        "What is a likelihood ratio?",
        "When can sequential evidence updates multiply?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "distributions",
      "title": "Common Probability Distributions",
      "module": "probability",
      "priority": "high",
      "roles": [
        "ds",
        "mle",
        "as"
      ],
      "interviewAnswer": "A discrete distribution assigns probability mass `p(x)=P(X=x)` that sums to one. A continuous distribution has density f whose integral over a region is probability; `P(X=x)=0` at any exact point for a continuous variable even when density is positive. The CDF `F(x)=P(X≤x)` works for both. Choose a family from support and mechanism: Bernoulli for one binary trial, Binomial for a fixed number of conditionally independent equal-probability trials, Poisson for event counts under a rate model, Exponential for memoryless waiting time, Normal for additive symmetric variation, and Beta for a probability parameter. Verify parameter conventions, tails and data assumptions rather than relying on shape alone.",
      "keyPoints": [
        "Support comes before family",
        "Density is not point probability",
        "Parameters encode a generative story",
        "Tail behavior drives risk",
        "Library conventions must be verified"
      ],
      "resources": [
        "harvard-stat110",
        "scipy-stats",
        "numpy-random"
      ],
      "featured": false,
      "description": "A probability distribution describes how mass or density is assigned to a random variable under a model. Choosing a distribution means choosing support, parameter interpretation, tail behavior, dependence assumptions and a data-generating story—not matching a familiar bell-shaped plot. This chapter distinguishes probability mass functions, density functions, cumulative distribution functions and quantiles, then develops Bernoulli, Binomial, Categorical, Poisson, Geometric, Uniform, Normal, Exponential, Gamma, Beta and related approximations. You will learn when probabilities come from mass versus density, how location/scale/rate parameterizations differ across libraries, why the Normal can be a poor model for counts or heavy tails, and how memorylessness and support constraints encode assumptions. A worked support-ticket example contrasts Binomial and Poisson models and checks the rare-event approximation. The lab implements a Binomial PMF and verifies moments and sampling against NumPy/SciPy. Production guidance covers truncation, censoring, mixtures, zero inflation, parameter estimation, posterior predictive/model checks, numerical log probabilities, version drift and safe simulation. The objective is to choose and validate a distribution from the mechanism and decision consequences rather than from convenience.",
      "prerequisites": [
        "probability-basics"
      ],
      "learningObjectives": [
        "Distinguish PMF, PDF, CDF, survival function and quantile and use each correctly for discrete and continuous variables.",
        "Select common distributions from support and generative assumptions and translate parameterizations across formulas and libraries.",
        "Validate probabilistic models with moments, tail/quantile checks, simulation, calibration and production drift/failure monitoring."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement the Binomial PMF, verify normalization and moments, and compare generated samples with NumPy and SciPy references.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Probability mass versus density"
        },
        {
          "type": "flow",
          "title": "Distribution choice from mechanism"
        }
      ],
      "followUpQuestions": [
        "When is Poisson a Binomial approximation?",
        "What does memoryless mean?",
        "Why use a survival function directly?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "expectation-variance",
      "title": "Expectation, Variance & Covariance",
      "module": "probability",
      "priority": "very-high",
      "roles": [
        "ds",
        "mle",
        "as"
      ],
      "interviewAnswer": "Expectation is `E[X]=Σx p(x)` or `∫x f(x)dx` when it exists, and linearity gives `E[aX+bY+c]=aE[X]+bE[Y]+c` without independence. Variance is `Var(X)=E[(X−μ)²]=E[X²]−μ²`. For sums, `Var(X+Y)=Var(X)+Var(Y)+2Cov(X,Y)`; covariance vanishes for independent finite-variance variables, but zero covariance does not generally imply independence. Correlation standardizes covariance to [−1,1] when variances are positive and measures linear association, not causation. In data, distinguish population from sample estimators, use stable online/two-pass algorithms and inspect tails and drift beyond mean/variance.",
      "keyPoints": [
        "Linearity of expectation needs no independence",
        "Variance of sums includes covariance",
        "Correlation is standardized linear association",
        "Moments may not exist or characterize a distribution",
        "Stable estimation needs denominator and weight semantics"
      ],
      "resources": [
        "harvard-stat110",
        "stanford-stats60",
        "numpy"
      ],
      "featured": false,
      "description": "Expectation is a probability-weighted average of a random variable; variance measures expected squared deviation from its mean; covariance measures linear co-movement. These are properties of a specified distribution, not guarantees about one observation. This chapter develops linearity of expectation, indicator variables, transformations, variance identities, covariance matrices, correlation, Cauchy–Schwarz bounds, conditional moments and laws of total expectation/variance. You will learn why expectations add without independence while variances require covariance terms, why zero covariance does not generally imply independence, and how scaling and nonlinear transformations change moments. A worked portfolio/system-load example derives aggregate variance under dependence. The lab computes exact weighted moments, merges online summaries and compares them with NumPy. Production guidance covers population versus sample denominators, weighted data, missingness, streaming algorithms, numeric cancellation, nonstationarity, tail risk, covariance regularization, privacy and rollback. The objective is to use moments as compact but limited summaries, understand precisely which algebra they support, and avoid turning correlation or an average into a causal or distributional claim.",
      "prerequisites": [
        "probability-basics"
      ],
      "learningObjectives": [
        "Compute expectations of functions and exploit linearity and indicator variables without requiring independence.",
        "Derive variance/covariance rules for sums and affine transformations and interpret covariance matrices geometrically.",
        "Estimate and operate moments with correct denominators, weights, stable streaming algorithms, drift/tail checks and explicit limits."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Compute exact weighted moments and stable mergeable sample summaries, then verify covariance and total-variance identities against NumPy.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Combining uncertain quantities"
        },
        {
          "type": "flow",
          "title": "Total variance decomposition"
        }
      ],
      "followUpQuestions": [
        "Why is covariance matrix positive semidefinite?",
        "What does total variance separate?",
        "When does E[g(X)]=g(E[X])?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "clt",
      "title": "Law of Large Numbers & Central Limit Theorem",
      "module": "probability",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "The LLN says a sample average converges to the population expectation under conditions; it explains consistency. The IID finite-variance CLT says `√n(Ȳ−μ)/σ` converges in distribution to standard Normal; it explains approximate sampling uncertainty and `SE(Ȳ)=σ/√n`. It does not say the raw data become Normal. Approximation quality depends on skew, tails, rarity and dependence, not a universal n threshold. Clustered/time-correlated data have smaller effective sample size and need cluster-robust, block or model-based methods. Verify with design-aware simulation/bootstrap and use the estimated standard error appropriate to the sampling process.",
      "keyPoints": [
        "LLN is convergence of averages",
        "CLT is scaled sampling distribution",
        "Standard error shrinks as 1/√n under IID",
        "Data need not be Normal",
        "Dependence changes effective sample size"
      ],
      "resources": [
        "harvard-stat110",
        "stanford-stats60",
        "numpy-random"
      ],
      "featured": false,
      "description": "The law of large numbers (LLN) explains convergence of sample averages to an expectation; the central limit theorem (CLT) explains why a properly centered and scaled sum often has an approximately Normal distribution. They answer different questions and require assumptions that real data can violate. This chapter develops weak/strong LLN intuition, standard error, IID CLT, finite variance, rate/quality of approximation, continuity correction and the delta method. It then examines dependence, clustering, heavy tails, rare events, bounded and non-identical variables, bootstrap connections and why “n>30” is not a theorem. You will learn to separate population size from effective sample size, distinguish the distribution of data from the sampling distribution of a statistic, and choose cluster/time-aware uncertainty. A worked conversion-rate example calculates standard error and diagnoses user-level dependence. The lab simulates Bernoulli/exponential sample means across n and verifies `1/√n` scaling and approximate coverage. Production guidance covers sampling frames, sequential looks, drift, label delay, random streams, monitoring, privacy and rollback. The objective is to use asymptotics as checked approximations, not automatic permission to attach a Normal interval to any large table.",
      "prerequisites": [
        "expectation-variance",
        "distributions",
        "independence"
      ],
      "learningObjectives": [
        "Distinguish LLN convergence from CLT distributional approximation and state the assumptions/normalization for each.",
        "Compute standard errors for means/proportions and diagnose dependence, heavy tails, skew, rare events and effective sample size.",
        "Validate and operate asymptotic uncertainty using simulation/resampling, design-aware estimators, monitoring and safe reporting."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Simulate non-Normal sample means, verify `1/sqrt(n)` standard-error scaling and approximate CLT interval coverage with reproducible streams.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Two asymptotic laws, two questions"
        },
        {
          "type": "flow",
          "title": "Choose an uncertainty unit"
        }
      ],
      "followUpQuestions": [
        "How do LLN and CLT differ?",
        "What is standard error?",
        "Why does dependence matter?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "confidence-intervals",
      "title": "Confidence Intervals",
      "module": "stat-inference",
      "priority": "very-high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "A 95% frequentist confidence interval comes from a procedure that would contain the true parameter in 95% of repeated samples under its model and sampling assumptions. After observing one interval, the fixed parameter is either inside it or not; 95% is not its posterior probability. A useful answer states the estimand, construction, assumptions, and whether the interval excludes both the null value and business-relevant thresholds. Use design-aware, profile, score, or bootstrap intervals when a simple symmetric Wald interval is unreliable.",
      "keyPoints": [
        "Coverage belongs to the procedure",
        "Estimate plus critical value times SE is only one construction",
        "Bias is not represented by a narrow interval",
        "Prediction intervals include future outcome noise",
        "Business thresholds matter alongside zero"
      ],
      "resources": [
        "stanford-stats200",
        "nist-stat-handbook",
        "asa-pvalues",
        "scipy-stats"
      ],
      "featured": false,
      "description": "A confidence interval is the output of a procedure designed to cover an unknown target at a stated long-run rate under specified assumptions. This chapter builds that sentence into a practical workflow. It derives a t interval for a mean, explains the duality between two-sided tests and intervals, distinguishes confidence intervals from credible and prediction intervals, and compares normal, t, Wilson, profile-likelihood, and bootstrap constructions. It emphasizes that confidence level is a property of the procedure before data are observed—not a posterior probability assigned to a fixed frequentist parameter afterward. You will learn why interval width responds to standard error and confidence level, how bias and optional stopping destroy nominal coverage, why a symmetric Wald interval can be absurd near boundaries, and how to communicate compatibility without reducing inference to “significant” or “not significant.” The worked example treats a conversion lift whose interval crosses both zero and a business threshold. The lab verifies repeated-sample coverage and shows that one observed interval either covers or does not.",
      "prerequisites": [
        "sampling-distributions"
      ],
      "learningObjectives": [
        "Interpret frequentist confidence intervals through repeated-sample coverage without assigning probability to a fixed parameter.",
        "Construct and diagnose t, proportion, bootstrap, and prediction intervals under their assumptions.",
        "Connect interval width to standard error, confidence level, sample design, and multiplicity.",
        "Use intervals to reason about practical thresholds, equivalence, and uncertainty rather than binary significance."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Verify long-run coverage of a t interval and show why an observed confidence interval is not a posterior probability statement.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Repeated intervals and fixed truth"
        },
        {
          "type": "matrix",
          "title": "Interval families answer different questions"
        }
      ],
      "followUpQuestions": [
        "Why does a 99% interval tend to be wider than a 95% interval?",
        "What does it mean when a 95% interval includes zero?",
        "When is a bootstrap interval appropriate?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "hypothesis-testing",
      "title": "Hypothesis Testing & p-values",
      "module": "stat-inference",
      "priority": "very-high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "A p-value is the probability, assuming the null model and test assumptions, of obtaining a statistic at least as extreme as observed. It is not the probability the null is true, not the false-positive probability of this result, and not effect size. A complete test specifies the estimand, null and alternative, statistic, reference distribution, sidedness, alpha, and stopping rule before looking. Then report the estimate and interval, check assumptions and multiplicity, and interpret the result against practical costs.",
      "keyPoints": [
        "The null is a complete enough data-generating claim to calibrate a statistic",
        "p-values are conditional tail areas, not posterior probabilities",
        "Alpha controls a procedure's Type I error under valid use",
        "Power depends on a specific alternative",
        "Evidence, effect magnitude, and action utility are distinct"
      ],
      "resources": [
        "asa-pvalues",
        "stanford-stats200",
        "nist-stat-handbook",
        "scipy-stats"
      ],
      "featured": true,
      "description": "Hypothesis testing is a calibrated procedure for measuring how incompatible observed data are with a specified null model, not a machine for assigning truth probabilities to hypotheses. This chapter connects the scientific question, estimand, null and alternative, test statistic, reference distribution, p-value, decision rule, Type I error, Type II error, power, effect size, and confidence interval. It contrasts Fisher-style evidence with Neyman–Pearson decision rules without pretending that one p-value settles a scientific or product decision. You will learn how sidedness, optional stopping, model assumptions, randomization, and multiple testing alter validity; why “fail to reject” is not “accept”; and why a tiny p-value may accompany a negligible effect in a huge dataset. The worked example separates statistical evidence from launch utility. The lab implements a one-sample randomization test and verifies its tail count against SciPy. Production guidance covers preregistration, metric governance, sequential monitoring, audit trails, privacy, and reporting estimates with uncertainty rather than threshold badges.",
      "prerequisites": [
        "sampling-distributions",
        "confidence-intervals"
      ],
      "learningObjectives": [
        "Translate a domain question into an estimand, explicit null/alternative, statistic, and valid reference distribution.",
        "Interpret p-values, Type I/II errors, and power without common probability reversals.",
        "Choose sidedness and stopping rules before observing results and diagnose assumption violations.",
        "Report effect estimates, intervals, practical thresholds, and multiplicity context alongside test results."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build an exact sign-flip randomization test, compare its tail count with SciPy, and verify null calibration by construction.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "A defensible test"
        },
        {
          "type": "curve",
          "title": "Null reference and observed tail"
        }
      ],
      "followUpQuestions": [
        "What is the difference between alpha and a p-value?",
        "Does p=0.001 prove the alternative?",
        "How should continuous experiment monitoring be handled?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "ab-testing",
      "title": "A/B Testing & Statistical Power",
      "module": "experimentation",
      "priority": "very-high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "An A/B test randomly assigns eligible units to control or treatment, so treatment assignment is independent of potential outcomes in expectation. The intention-to-treat effect is the difference in arm means using every assigned unit under a prespecified analysis. Before launch I define the unit, population, primary metric, guardrails, alpha, power, MDE, duration, and stopping rule. During analysis I check assignment and exposure integrity, especially SRM, then report effect size and interval alongside p-value. I do not treat nonsignificance as no effect, peek with a fixed-horizon test, or ship a statistically significant but operationally harmful result.",
      "keyPoints": [
        "Randomization identifies a causal intention-to-treat contrast",
        "The randomization unit determines independence and effective sample size",
        "Power depends on variance, baseline, allocation, alpha, and decision-relevant MDE",
        "Effect size and uncertainty matter more than a significance label",
        "Trust checks and guardrails precede launch interpretation"
      ],
      "resources": [
        "trustworthy-oce-survey",
        "scipy-stats",
        "stanford-stats200",
        "microsoft-experimentation"
      ],
      "featured": false,
      "description": "A/B testing estimates the causal effect of a product or policy change by randomly assigning eligible experimental units to variants and comparing prespecified outcomes. This chapter connects potential outcomes, randomization, difference-in-means and difference-in-proportions estimators, confidence intervals, hypothesis tests, Type I and II errors, statistical power, minimum detectable effect (MDE), practical significance, multiple metrics, heterogeneous effects, and decision rules. You will learn why randomization identifies an intention-to-treat effect, why exposure logging and unit choice matter, how baseline rate and variance determine sample size, and why a nonsignificant result is not proof of equivalence. A worked checkout experiment translates a business threshold into power, duration, and interpretation. The lab implements a two-proportion effect estimate, standard error, interval, z-test, and approximate sample-size calculation; compares with statsmodels; and verifies invariants using deterministic data. Production guidance covers assignment, sample-ratio mismatch, novelty, interference, sequential monitoring, data quality, privacy, guardrails, rollout, and rollback. The aim is a trustworthy decision process, not a ritual that converts every p-value below 0.05 into a launch.",
      "prerequisites": [
        "hypothesis-testing",
        "confidence-intervals",
        "power-sample-size"
      ],
      "learningObjectives": [
        "Define the estimand, eligible population, randomization unit, variants, outcomes, and decision threshold before observing results.",
        "Compute and interpret treatment effects, uncertainty, p-values, power, and MDE for common independent-arm metrics.",
        "Distinguish statistical significance, practical significance, equivalence, noninferiority, and inconclusive evidence.",
        "Audit an online test for assignment, exposure, SRM, multiplicity, interference, and post-randomization bias."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement a two-proportion A/B estimate, interval, null z-test, and approximate power calculation, then compare with statsmodels and verify invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Trustworthy A/B test lifecycle"
        },
        {
          "type": "compare",
          "title": "Three evidence regions"
        }
      ],
      "followUpQuestions": [
        "What is the difference between statistical and practical significance?",
        "Why is 50/50 allocation common?",
        "What does randomization guarantee?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "mle-map",
      "title": "MLE vs MAP",
      "module": "stat-inference",
      "priority": "high",
      "roles": [
        "ds",
        "mle",
        "da",
        "as"
      ],
      "interviewAnswer": "MLE maximizes p(data|theta), treating the observed data as fixed and theta as the optimization variable. MAP maximizes p(data|theta)p(theta), equivalently log likelihood plus log prior. A zero-mean Gaussian prior often yields an L2 penalty and a Laplace prior an L1 penalty, with scaling determined by noise and prior parameters. Both return point estimates; MAP is not full Bayesian inference and is not invariant to arbitrary reparameterization. Validate the model, identifiability, optimization, and predictive calibration separately.",
      "keyPoints": [
        "Likelihood is a function of parameters, not a normalized parameter probability",
        "Logs turn products into stable sums",
        "MAP adds prior information and can regularize weak data",
        "Point estimation discards posterior shape",
        "A converged optimizer can fit a wrong or unidentified model"
      ],
      "resources": [
        "stanford-cs229",
        "stanford-stats200",
        "scipy-stats"
      ],
      "featured": false,
      "description": "Maximum likelihood estimation chooses parameter values that make the observed data most likely under a specified statistical model. Maximum a posteriori estimation multiplies that likelihood by a prior density and chooses the posterior mode. This chapter carefully distinguishes probability of data given parameters from a probability distribution over parameters, derives log-likelihood objectives for Bernoulli and Gaussian models, connects Gaussian and Laplace priors to common regularizers, and explains why MAP remains a point estimate rather than full Bayesian inference. You will learn how identifiability, constraints, reparameterization, boundary solutions, weak data, and misspecified likelihoods affect both methods; why maximizing a density is coordinate-sensitive; and why optimization convergence does not prove statistical validity. The worked example derives smoothed Bernoulli estimates and contrasts MLE, MAP, and posterior mean. The lab implements them from first principles and verifies against an analytic Beta–Binomial result. Production guidance covers numerical stability, calibration, prior governance, reproducibility, monitoring, and rollback when data or likelihood assumptions shift.",
      "prerequisites": [
        "distributions",
        "expectation-variance"
      ],
      "learningObjectives": [
        "Write likelihood and log-likelihood objectives without reversing their conditioning.",
        "Derive MLE and MAP estimates for simple models and connect priors to regularization penalties.",
        "Distinguish MAP, posterior mean, posterior predictive inference, and full posterior uncertainty.",
        "Diagnose identifiability, numerical, boundary, prior, and misspecification failures in estimation."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Derive Bernoulli MLE, Beta-prior MAP, and posterior mean, then verify each analytic formula on sparse data.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "From model to estimates"
        },
        {
          "type": "matrix",
          "title": "MLE, MAP, and posterior mean"
        }
      ],
      "followUpQuestions": [
        "Why maximize log likelihood?",
        "When do MLE and MAP become similar?",
        "Why is MAP not invariant to reparameterization?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "linear-regression",
      "title": "Linear Regression",
      "module": "regression-glm",
      "priority": "very-high",
      "roles": [
        "ds",
        "mle",
        "as"
      ],
      "interviewAnswer": "Linear regression models the conditional mean as E[Y|X=x] = beta_0 + x^T beta and estimates beta by minimizing squared residuals. With a full-rank design, the fitted residual is orthogonal to every design column; software normally solves the least-squares system with QR or singular-value decomposition rather than forming an inverse. A coefficient is the expected change in the modeled outcome for a one-unit predictor change while other included predictors are held fixed. That is an associational interpretation unless causal assumptions justify more. I check residual structure, influential points, conditioning, train-serving feature consistency, and extrapolation, and I report intervals or out-of-sample error rather than only R-squared.",
      "keyPoints": [
        "A linear model is linear in coefficients; transformed predictors may still be used.",
        "Least squares projects y onto the design-matrix column space.",
        "Coefficients are conditional associations unless identification supports causality.",
        "Prediction intervals are wider than mean-response confidence intervals.",
        "Use stable solvers and validate outside the training sample."
      ],
      "resources": [
        "isl",
        "stanford-cs229",
        "sklearn-linear-models",
        "nist-regression-diagnostics"
      ],
      "featured": false,
      "description": "Linear regression is the baseline model for estimating how a numerical outcome changes with one or more predictors. Its apparent simplicity hides several separate ideas: a linear conditional-mean specification, least-squares estimation, the geometry of projection, uncertainty statements, and prediction under a stable data-generating process. This chapter develops those ideas without treating the fitted line as automatically causal. You will derive the normal equations, understand why a numerically stable least-squares solver is preferable to explicitly inverting a matrix, interpret coefficients under transformations and interactions, and separate confidence intervals for a mean response from prediction intervals for a new observation. A worked pricing example shows how centering changes the intercept but not predictions. The lab implements ordinary least squares with a QR-style NumPy solver, compares it with scikit-learn, and verifies orthogonality and translation invariants. The production section covers feature contracts, extrapolation, drift, interval coverage, numerical conditioning, and rollback. The boundary is important: linear regression can be an excellent predictive or descriptive model, but causal language requires a separate identification argument and diagnostics cannot prove that argument.",
      "prerequisites": [
        "projections-least-squares",
        "expectation-variance"
      ],
      "learningObjectives": [
        "State the population model, sample objective, and interpretation of a partial regression coefficient.",
        "Derive the normal equations and explain least squares as an orthogonal projection.",
        "Distinguish coefficient uncertainty, mean-response uncertainty, and new-observation uncertainty.",
        "Fit and verify a stable multivariate least-squares implementation without explicit matrix inversion."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Fit ordinary least squares from the design matrix, compare with scikit-learn, and verify projection, translation, and rank-sensitive behavior.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "scatter",
          "title": "Projection onto a fitted line"
        },
        {
          "type": "compare",
          "title": "Two different uncertainty questions"
        }
      ],
      "followUpQuestions": [
        "Why can coefficients be unstable while predictions remain stable?",
        "When should you use heteroskedasticity-robust standard errors?",
        "Does adding a feature always help?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "logistic-regression",
      "title": "Logistic Regression",
      "module": "regression-glm",
      "priority": "very-high",
      "roles": [
        "ds",
        "mle",
        "as"
      ],
      "interviewAnswer": "Logistic regression assumes logit P(Y=1|x)=beta0+x^T beta, so the sigmoid maps any linear score to a probability. Maximum likelihood is equivalent to minimizing binary cross-entropy; with L2 regularization the objective is convex and usually has a unique stable solution. Exp(beta_j) is the conditional multiplicative change in odds for a one-unit increase in x_j, holding other modeled features fixed. It is not a constant probability increase. I evaluate discrimination and calibration separately, choose a threshold from costs or constraints rather than defaulting to 0.5, and watch for separation, leakage, prior shift, subgroup errors, and train-serving mismatches.",
      "keyPoints": [
        "The linear predictor acts on log-odds, while the sigmoid returns probability.",
        "Cross-entropy is the negative Bernoulli log-likelihood.",
        "Odds ratios are conditional and are not constant risk differences.",
        "Regularization stabilizes separation and correlated predictors.",
        "Calibration, ranking, and threshold utility answer different questions."
      ],
      "resources": [
        "isl",
        "stanford-cs229",
        "sklearn-linear-models",
        "nelder-wedderburn-glm"
      ],
      "featured": true,
      "description": "Logistic regression models a binary outcome by making the log-odds of the positive class linear in the predictors. It is simultaneously a probabilistic classifier, a generalized linear model, and a tool for estimating conditional associations. This chapter connects Bernoulli likelihood, cross-entropy, odds ratios, decision thresholds, regularization, and calibration. You will derive the score and Hessian, understand iteratively reweighted least squares, and see why perfectly separated data can send unregularized coefficients toward infinity. A worked credit example distinguishes a probability change from an odds ratio and shows that the same coefficient has different probability-scale effects at different baselines. The lab implements damped Newton updates, compares probabilities with scikit-learn, and verifies finite likelihood improvement and label-complement symmetry. Production guidance treats probability estimation and decisions as different layers: validate calibration, choose thresholds using asymmetric costs and capacity, monitor class-prior and conditional drift, and provide safe fallback behavior. Logistic regression is interpretable only with careful units, encoding, interactions, and conditioning; exponentiating a coefficient produces a conditional odds ratio, not a universal risk ratio or causal effect.",
      "prerequisites": [
        "linear-regression",
        "mle-map"
      ],
      "learningObjectives": [
        "Derive logistic regression from a Bernoulli likelihood and interpret coefficients on odds and probability scales.",
        "Explain Newton or iteratively reweighted least-squares fitting and the role of regularization.",
        "Separate probability quality, ranking quality, threshold decisions, and causal interpretation.",
        "Detect separation, calibration failure, leakage, and distribution shift in a deployed classifier."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement L2-regularized logistic regression with damped Newton updates, compare with scikit-learn, and verify likelihood, probability, and label-symmetry invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Logit score mapped to probability"
        },
        {
          "type": "flow",
          "title": "Probability model to operational action"
        }
      ],
      "followUpQuestions": [
        "Why does complete separation cause trouble?",
        "What is the difference between discrimination and calibration?",
        "How does L2 regularization affect interpretation?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "decision-trees",
      "title": "Decision Trees",
      "module": "ml",
      "priority": "very-high",
      "roles": [
        "ds",
        "mle",
        "as"
      ],
      "interviewAnswer": "Decision trees recursively split the feature space to make child nodes purer. They capture nonlinear interactions and require little preprocessing, but deep trees overfit easily.",
      "keyPoints": [
        "Gini/entropy",
        "Split criterion",
        "Depth",
        "Feature importance caveats"
      ],
      "resources": [
        "sklearn",
        "statquest",
        "stanford-cs229",
        "google-mlcc",
        "isl"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "network",
          "title": "Decision tree"
        }
      ],
      "followUpQuestions": [
        "Gini vs entropy?",
        "Why do trees overfit?",
        "How does pruning help?",
        "Why do ensembles improve trees?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "random-forest",
      "title": "Random Forest",
      "module": "ml",
      "priority": "high",
      "roles": [
        "ds",
        "mle",
        "as"
      ],
      "interviewAnswer": "Random forests reduce tree variance by training many trees on bootstrapped samples and random feature subsets, then averaging or voting their predictions.",
      "keyPoints": [
        "Bagging",
        "Feature randomness",
        "OOB intuition",
        "Bias/variance"
      ],
      "resources": [
        "sklearn",
        "statquest",
        "stanford-cs229",
        "google-mlcc",
        "isl"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Train and validate a Random Forest classifier.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Random forest"
        }
      ],
      "followUpQuestions": [
        "Why random feature subsets?",
        "Out-of-bag error?",
        "Random forest vs XGBoost?",
        "How does bagging reduce variance?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "gradient-boosting",
      "title": "Gradient Boosting / XGBoost Intuition",
      "module": "ml",
      "priority": "very-high",
      "roles": [
        "ds",
        "mle",
        "as"
      ],
      "interviewAnswer": "Boosting builds weak learners sequentially so each new learner focuses on correcting the current ensemble’s errors. Modern gradient-boosted trees are often excellent baselines for tabular data.",
      "keyPoints": [
        "Sequential vs bagging",
        "Learning rate",
        "Tree depth",
        "Regularization"
      ],
      "resources": [
        "sklearn",
        "statquest",
        "stanford-cs229",
        "google-mlcc",
        "isl"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Train a gradient-boosted tree baseline.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Gradient boosting"
        }
      ],
      "followUpQuestions": [
        "Random forest vs gradient boosting?",
        "What does learning rate do?",
        "Why can shallow trees work well?",
        "How does XGBoost handle missing values?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "svm",
      "title": "Support Vector Machines",
      "module": "ml",
      "priority": "high",
      "roles": [
        "ds",
        "mle",
        "as"
      ],
      "interviewAnswer": "An SVM finds a decision boundary with maximum margin. Kernel functions allow nonlinear boundaries by computing similarity in an implicit higher-dimensional feature space.",
      "keyPoints": [
        "Margin",
        "Support vectors",
        "C parameter",
        "Kernel trick"
      ],
      "resources": [
        "stanford-cs229",
        "statquest",
        "google-mlcc",
        "isl"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "scatter",
          "title": "Maximum-margin classifier"
        }
      ],
      "followUpQuestions": [
        "What are support vectors?",
        "What does C control?",
        "What is the kernel trick?",
        "Linear vs RBF SVM?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "knn",
      "title": "k-Nearest Neighbors",
      "module": "ml",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "k-NN predicts using nearby training examples. It is simple and non-parametric but sensitive to feature scaling, irrelevant dimensions and inference cost on large datasets.",
      "keyPoints": [
        "Distance metric",
        "Scaling",
        "Choice of k",
        "Curse of dimensionality"
      ],
      "resources": [
        "sklearn",
        "statquest",
        "stanford-cs229",
        "google-mlcc",
        "isl"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "How choose k?",
        "Why scale features?",
        "What is curse of dimensionality?",
        "How does ANN search relate?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "naive-bayes",
      "title": "Naive Bayes",
      "module": "ml",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Naive Bayes applies Bayes rule while assuming features are conditionally independent given the class. Despite the strong assumption, it can work surprisingly well for text and sparse features.",
      "keyPoints": [
        "Conditional independence",
        "Gaussian/Multinomial variants",
        "Smoothing",
        "Fast baseline"
      ],
      "resources": [
        "stanford-cs229",
        "statquest",
        "google-mlcc"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Why can Naive Bayes work despite the independence assumption?",
        "Gaussian vs Multinomial NB?",
        "What does smoothing do?",
        "How do priors affect predictions?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "kmeans",
      "title": "K-means Clustering",
      "module": "unsupervised",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "K-means alternates between assigning points to the nearest centroid and updating each centroid to the mean of its assigned points. It works best for roughly spherical clusters under the chosen distance metric.",
      "keyPoints": [
        "Initialization",
        "Scale features",
        "Choose k",
        "Local optimum"
      ],
      "resources": [
        "stanford-cs229",
        "statquest",
        "google-mlcc",
        "isl"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Implement K-means assignment/update steps and compare with sklearn.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "scatter",
          "title": "K-means clustering"
        }
      ],
      "followUpQuestions": [
        "How choose k?",
        "Why k-means++?",
        "K-means vs DBSCAN?",
        "Why is the objective non-convex?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "pca",
      "title": "PCA",
      "module": "unsupervised",
      "priority": "high",
      "roles": [
        "ds",
        "mle",
        "as"
      ],
      "interviewAnswer": "PCA finds orthogonal directions of maximum variance and projects data onto the leading components. It is useful for compression, visualization and removing correlated dimensions, but components are linear combinations of original features.",
      "keyPoints": [
        "Center data",
        "Variance explained",
        "SVD connection",
        "Not supervised"
      ],
      "resources": [
        "stanford-cs229",
        "mit-linear-algebra",
        "3b1b-linear-algebra",
        "google-mlcc",
        "isl"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Derive PCA from covariance eigenvectors and compare with sklearn.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "scatter",
          "title": "PCA finds high-variance directions"
        }
      ],
      "followUpQuestions": [
        "How does PCA relate to SVD?",
        "Why are components orthogonal?",
        "When should you standardize?",
        "PCA vs autoencoder?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "bias-variance",
      "title": "Bias–Variance Trade-off",
      "module": "ml",
      "priority": "very-high",
      "roles": [
        "all",
        "as"
      ],
      "interviewAnswer": "High bias means the model is too constrained and underfits; high variance means it fits training data but changes too much with the sample and generalizes poorly. Model complexity, regularization and data size shift this balance.",
      "keyPoints": [
        "Underfit vs overfit",
        "Learning curves",
        "Regularization",
        "Cross-validation"
      ],
      "resources": [
        "stanford-cs229",
        "statquest",
        "google-mlcc"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Bias–variance trade-off"
        }
      ],
      "followUpQuestions": [
        "How does regularization affect bias and variance?",
        "What do learning curves tell you?",
        "Would more data help high bias or high variance more?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "mse-mae",
      "title": "MSE vs MAE",
      "module": "evaluation",
      "priority": "very-high",
      "roles": [
        "all"
      ],
      "interviewAnswer": "Use MSE when you want large errors penalized disproportionately because errors are squared. Use MAE when you want a loss that grows linearly and is more robust to outliers. The choice is about error behavior—not whether the current loss value is “large” or “small.”",
      "keyPoints": [
        "MSE squares residuals",
        "MAE uses absolute residuals",
        "Outlier sensitivity",
        "Gaussian vs Laplace interpretation"
      ],
      "resources": [
        "google-mlcc",
        "statquest",
        "sklearn",
        "isl"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Make outlier sensitivity visible rather than memorizing definitions.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "How error size changes the penalty"
        }
      ],
      "followUpQuestions": [
        "When would you use RMSE?",
        "How does Huber loss combine MAE and MSE behavior?",
        "Which estimate minimizes expected MSE vs MAE?",
        "What happens to gradients near zero?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "classification-metrics",
      "title": "Precision, Recall & F1",
      "module": "evaluation",
      "priority": "very-high",
      "roles": [
        "all"
      ],
      "interviewAnswer": "Precision asks: of predicted positives, how many were correct? Recall asks: of actual positives, how many did we find? F1 is the harmonic mean and is useful when both matter, but the right metric depends on error costs.",
      "keyPoints": [
        "Confusion matrix",
        "False positive vs false negative cost",
        "Threshold dependence",
        "Macro/micro averaging"
      ],
      "resources": [
        "google-mlcc",
        "statquest",
        "sklearn",
        "isl",
        "google-mlcc-exercises"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Compute the confusion matrix metrics manually and with sklearn.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "matrix",
          "title": "Confusion matrix"
        }
      ],
      "followUpQuestions": [
        "When is PR-AUC preferable to ROC-AUC?",
        "How would you choose the threshold?",
        "Macro vs micro F1?",
        "How do class weights affect training?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "roc-pr",
      "title": "ROC-AUC vs PR-AUC",
      "module": "evaluation",
      "priority": "high",
      "roles": [
        "ds",
        "mle"
      ],
      "interviewAnswer": "ROC-AUC measures ranking across true-positive and false-positive rates. PR-AUC focuses on precision/recall and is often more informative when the positive class is rare and practically important.",
      "keyPoints": [
        "Class imbalance",
        "Ranking metric",
        "Threshold-independent summary",
        "Inspect operating point too"
      ],
      "resources": [
        "sklearn",
        "statquest",
        "google-mlcc",
        "google-mlcc-exercises"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "ROC and precision–recall views"
        }
      ],
      "followUpQuestions": [
        "Why can ROC-AUC look good on imbalanced data?",
        "How do you choose a threshold after looking at the curve?",
        "What is average precision?",
        "What happens to precision when prevalence changes?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "cross-validation",
      "title": "Train/Validation/Test & Cross-validation",
      "module": "evaluation",
      "priority": "very-high",
      "roles": [
        "all"
      ],
      "interviewAnswer": "Use training data to fit parameters, validation data to make modeling choices, and test data only for final unbiased evaluation. Cross-validation estimates performance more robustly when data is limited.",
      "keyPoints": [
        "Never tune on test",
        "Stratification",
        "Group/time splits",
        "Nested CV concept"
      ],
      "resources": [
        "sklearn",
        "google-mlcc",
        "statquest",
        "isl"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "K-fold cross-validation"
        }
      ],
      "followUpQuestions": [
        "When would you use stratified CV?",
        "What is nested cross-validation?",
        "How should time-series validation differ?",
        "Why use a scikit-learn Pipeline?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "data-leakage",
      "title": "Data Leakage",
      "module": "evaluation",
      "priority": "very-high",
      "roles": [
        "all"
      ],
      "interviewAnswer": "Leakage occurs when training uses information that would not be available at prediction time or when related samples cross data splits. It produces deceptively good offline metrics and poor production performance.",
      "keyPoints": [
        "Target leakage",
        "Temporal leakage",
        "Preprocessing leakage",
        "Group leakage"
      ],
      "resources": [
        "google-mlcc",
        "made-with-ml",
        "statquest",
        "sklearn",
        "google-rules-ml"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Leakage path"
        }
      ],
      "followUpQuestions": [
        "How would you detect leakage?",
        "What is group leakage?",
        "Can one-hot encoding leak information?",
        "How do feature stores prevent point-in-time leakage?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "class-imbalance",
      "title": "Class Imbalance",
      "module": "evaluation",
      "priority": "very-high",
      "roles": [
        "ds",
        "mle"
      ],
      "interviewAnswer": "For rare positives, accuracy can be meaningless. Use metrics aligned with the positive-class cost, consider class weights or resampling, preserve representative validation data, and tune the decision threshold.",
      "keyPoints": [
        "Weighted loss",
        "Oversampling",
        "PR curve",
        "Threshold tuning"
      ],
      "resources": [
        "sklearn",
        "statquest",
        "google-mlcc"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "bars",
          "title": "Accuracy can mislead on imbalanced data"
        }
      ],
      "followUpQuestions": [
        "Class weights vs oversampling?",
        "When would you use PR-AUC?",
        "How do you choose the deployment threshold?",
        "How does prevalence shift affect precision?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "missing-values",
      "title": "Missing Values & Outliers",
      "module": "evaluation",
      "priority": "high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "First ask why values are missing or extreme. Choose deletion, imputation, missingness indicators or robust transformations based on the data-generating process and model, not a blanket rule.",
      "keyPoints": [
        "MCAR/MAR/MNAR intuition",
        "Median vs mean",
        "Model-specific handling",
        "Fit preprocessing on train only"
      ],
      "resources": [
        "sklearn",
        "pandas",
        "statquest",
        "google-mlcc"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Mean vs median imputation?",
        "What are MCAR, MAR and MNAR?",
        "Would you add a missingness indicator?",
        "How do tree models handle missing values?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "feature-importance",
      "title": "Feature Importance & Explainability",
      "module": "evaluation",
      "priority": "high",
      "roles": [
        "ds",
        "mle"
      ],
      "interviewAnswer": "Feature importance can mean different things: model-specific impurity scores, permutation importance, SHAP-style local/global explanations, or coefficients. Interpret with care when features are correlated.",
      "keyPoints": [
        "Global vs local",
        "Correlation caveats",
        "Permutation importance",
        "Explanations are not causality"
      ],
      "resources": [
        "sklearn",
        "made-with-ml",
        "statquest",
        "google-mlcc"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Global vs local explanations?",
        "Why can impurity importance be biased?",
        "What happens with correlated features?",
        "How would you validate whether an explanation is useful to domain experts?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "neural-network",
      "title": "Neural Network Fundamentals",
      "module": "dl",
      "priority": "very-high",
      "roles": [
        "all",
        "as"
      ],
      "interviewAnswer": "A neural network composes linear transformations with nonlinear activations. Training adjusts parameters to minimize a loss, while intermediate layers learn representations useful for the task.",
      "keyPoints": [
        "Layers",
        "Weights/biases",
        "Activation",
        "Loss/optimizer"
      ],
      "resources": [
        "mit-6s191",
        "3b1b-neural",
        "pytorch",
        "deep-learning-book",
        "d2l"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Train a tiny MLP end-to-end and inspect gradients.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "Feed-forward neural network"
        }
      ],
      "followUpQuestions": [
        "Why do we need nonlinear activations?",
        "What is backpropagation?",
        "How do you choose output activation/loss?",
        "What causes overfitting in neural networks?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "backprop",
      "title": "Backpropagation",
      "module": "dl",
      "priority": "very-high",
      "roles": [
        "all",
        "as"
      ],
      "interviewAnswer": "Backpropagation efficiently computes gradients by applying the chain rule from the loss backward through the computation graph. The optimizer then uses those gradients to update parameters.",
      "keyPoints": [
        "Forward vs backward",
        "Chain rule",
        "Autograd",
        "Gradient accumulation"
      ],
      "resources": [
        "mit-6s191",
        "3b1b-neural",
        "pytorch",
        "deep-learning-book",
        "d2l"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Verify backpropagation against a hand-derived scalar gradient.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Backpropagation"
        }
      ],
      "followUpQuestions": [
        "Why does gradient descent move opposite the gradient?",
        "What causes vanishing gradients?",
        "What does detach() do?",
        "Why is reverse mode efficient for neural nets?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "activations",
      "title": "Activation Functions",
      "module": "dl",
      "priority": "high",
      "roles": [
        "mle",
        "aie",
        "as"
      ],
      "interviewAnswer": "Nonlinear activations let deep networks represent nonlinear functions. ReLU-like functions are common in hidden layers; sigmoid/softmax are often used at outputs depending on the task.",
      "keyPoints": [
        "ReLU",
        "Sigmoid",
        "Softmax",
        "Saturation"
      ],
      "resources": [
        "mit-6s191",
        "statquest",
        "3b1b-neural",
        "pytorch",
        "deep-learning-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Implement common activations and inspect how they change values and gradients.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Activation functions"
        }
      ],
      "followUpQuestions": [
        "Why can sigmoid cause vanishing gradients?",
        "ReLU vs GELU?",
        "When use softmax?",
        "What are dead ReLUs?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "optimizers",
      "title": "SGD, Momentum & Adam",
      "module": "dl",
      "priority": "very-high",
      "roles": [
        "mle",
        "aie",
        "as"
      ],
      "interviewAnswer": "SGD follows noisy mini-batch gradients; momentum smooths updates by accumulating velocity; Adam adapts step sizes using first and second gradient moments. No optimizer is universally best.",
      "keyPoints": [
        "Momentum",
        "Adam moments",
        "Weight decay",
        "Learning-rate interaction"
      ],
      "resources": [
        "mit-6s191",
        "pytorch",
        "statquest",
        "3b1b-neural",
        "deep-learning-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "SGD vs Adam"
        }
      ],
      "followUpQuestions": [
        "Why does momentum help?",
        "Adam vs AdamW?",
        "What does beta control?",
        "Why can SGD generalize well in vision?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "regularization",
      "title": "Dropout, Weight Decay & Early Stopping",
      "module": "dl",
      "priority": "high",
      "roles": [
        "mle",
        "aie",
        "as"
      ],
      "interviewAnswer": "These techniques reduce overfitting in different ways: dropout injects stochastic feature removal, weight decay penalizes large parameters, and early stopping limits training when validation stops improving.",
      "keyPoints": [
        "Train vs eval mode",
        "L2/weight-decay nuance",
        "Patience",
        "Use validation metrics"
      ],
      "resources": [
        "mit-6s191",
        "pytorch",
        "3b1b-neural",
        "deep-learning-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Dropout train vs eval behavior?",
        "What is early stopping patience?",
        "L1 vs L2?",
        "Why can augmentation regularize?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "normalization",
      "title": "BatchNorm vs LayerNorm",
      "module": "dl",
      "priority": "high",
      "roles": [
        "mle",
        "aie",
        "as"
      ],
      "interviewAnswer": "BatchNorm normalizes using batch statistics and is common in CNNs; LayerNorm normalizes features within each example and is standard in transformers. Their behavior at inference differs.",
      "keyPoints": [
        "Axes differ",
        "Train/eval behavior",
        "Batch-size sensitivity",
        "Transformer use"
      ],
      "resources": [
        "mit-6s191",
        "pytorch",
        "3b1b-neural",
        "deep-learning-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Normalization placement"
        }
      ],
      "followUpQuestions": [
        "Why LayerNorm in transformers?",
        "What happens with tiny batches?",
        "Pre-LN vs post-LN?",
        "BatchNorm as regularization?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "vanishing-gradients",
      "title": "Vanishing / Exploding Gradients",
      "module": "dl",
      "priority": "high",
      "roles": [
        "mle",
        "aie",
        "as"
      ],
      "interviewAnswer": "Repeated multiplication through deep networks can shrink or amplify gradients. Initialization, normalization, ReLU-like activations, residual connections and gradient clipping help depending on the architecture.",
      "keyPoints": [
        "Depth",
        "Activation saturation",
        "Residuals",
        "Gradient clipping"
      ],
      "resources": [
        "mit-6s191",
        "3b1b-neural",
        "pytorch",
        "deep-learning-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "Gradient through depth"
        }
      ],
      "followUpQuestions": [
        "Why do residual connections help?",
        "Why ReLU helps vs sigmoid?",
        "What does gradient clipping do?",
        "How does initialization matter?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "debug-dl",
      "title": "Debugging a Model That Will Not Learn",
      "module": "dl",
      "priority": "very-high",
      "roles": [
        "mle",
        "aie",
        "as"
      ],
      "interviewAnswer": "Verify data and labels, then try to overfit a tiny batch. Inspect loss, outputs, gradients, learning rate, preprocessing and train/eval modes before changing architecture. Debug from simplest assumptions outward.",
      "keyPoints": [
        "Overfit tiny batch",
        "Check labels",
        "Inspect gradients",
        "Establish simple baseline"
      ],
      "resources": [
        "fsdl",
        "made-with-ml",
        "pytorch",
        "mit-6s191"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "Debugging a Model That Will Not Learn"
        }
      ],
      "followUpQuestions": [
        "Why overfit one batch?",
        "What if loss is NaN?",
        "What if gradients are all zero?",
        "Training loss decreases but validation worsens—what next?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "cnn",
      "title": "CNN Fundamentals",
      "module": "cv",
      "priority": "very-high",
      "roles": [
        "mle",
        "cv",
        "as"
      ],
      "interviewAnswer": "CNNs exploit local spatial structure with shared filters. Early layers learn local edges/textures, while deeper layers combine them into larger receptive-field features.",
      "keyPoints": [
        "Kernel",
        "Stride",
        "Padding",
        "Channels"
      ],
      "resources": [
        "stanford-cs231n",
        "mit-6s191",
        "deep-learning-book",
        "d2l",
        "distill-feature-visualization"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Build a small CNN and verify spatial/channel shapes.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "CNN hierarchy"
        }
      ],
      "followUpQuestions": [
        "What do stride and padding do?",
        "Why parameter sharing?",
        "CNN vs ViT?",
        "2D vs 3D convolution?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "receptive-field",
      "title": "Receptive Field",
      "module": "cv",
      "priority": "high",
      "roles": [
        "cv",
        "mle",
        "as"
      ],
      "interviewAnswer": "A unit’s receptive field is the input region that can influence it. Deeper layers, larger kernels, stride and dilation increase receptive field and therefore spatial context.",
      "keyPoints": [
        "Effective vs theoretical",
        "Stride",
        "Dilation",
        "Context vs detail"
      ],
      "resources": [
        "stanford-cs231n",
        "mit-6s191"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "Receptive field growth"
        }
      ],
      "followUpQuestions": [
        "How does dilation affect receptive field?",
        "Why use pooling/stride?",
        "Why U-Net skip connections?",
        "What is effective receptive field?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "resnet",
      "title": "Residual Networks",
      "module": "cv",
      "priority": "high",
      "roles": [
        "cv",
        "mle",
        "as"
      ],
      "interviewAnswer": "Residual connections learn a change relative to the input and create shorter gradient paths, making very deep networks easier to optimize.",
      "keyPoints": [
        "Skip connection",
        "Identity mapping",
        "Optimization benefit",
        "Not just ensemble intuition"
      ],
      "resources": [
        "stanford-cs231n",
        "mit-6s191",
        "d2l",
        "paper-resnet"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Residual block"
        }
      ],
      "followUpQuestions": [
        "Why does identity help optimization?",
        "What if channel count changes?",
        "ResNet vs DenseNet?",
        "Where else are residuals used?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "unet",
      "title": "U-Net & Segmentation",
      "module": "cv",
      "priority": "high",
      "roles": [
        "cv",
        "mle",
        "as"
      ],
      "interviewAnswer": "U-Net combines an encoder that captures context with a decoder that restores spatial resolution, using skip connections to preserve fine localization information.",
      "keyPoints": [
        "Encoder/decoder",
        "Skip connections",
        "Pixel-wise prediction",
        "Dice/IoU"
      ],
      "resources": [
        "stanford-cs231n",
        "mit-6s191",
        "paper-unet"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "network",
          "title": "U-Net encoder–decoder"
        }
      ],
      "followUpQuestions": [
        "Why skip connections?",
        "U-Net vs autoencoder?",
        "2D vs 3D U-Net?",
        "Which loss for imbalanced segmentation?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "2d-vs-3d-cnn",
      "title": "2D vs 3D CNNs",
      "module": "cv",
      "priority": "very-high",
      "roles": [
        "cv",
        "mle",
        "as"
      ],
      "interviewAnswer": "2D convolutions model height and width, while 3D convolutions also model depth and can learn cross-slice volumetric context directly. The trade-off is dramatically higher memory and compute.",
      "keyPoints": [
        "Volumetric consistency",
        "Parameter/activation cost",
        "Patch-based training",
        "Use-case fit"
      ],
      "resources": [
        "stanford-cs231n",
        "mit-6s191"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "2D vs 3D convolution"
        }
      ],
      "followUpQuestions": [
        "What is 2.5D?",
        "How would you train on 1024³ volumes?",
        "Why could plane-wise processing create inconsistency?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "vit",
      "title": "Vision Transformers",
      "module": "cv",
      "priority": "high",
      "roles": [
        "cv",
        "aie",
        "as"
      ],
      "interviewAnswer": "A ViT splits an image into patches, embeds them as tokens, adds positional information and applies transformer blocks. Attention gives global interactions, while CNNs have stronger built-in locality.",
      "keyPoints": [
        "Patch embedding",
        "Position",
        "Self-attention",
        "Data/compute considerations"
      ],
      "resources": [
        "stanford-cs231n",
        "stanford-cs25",
        "mit-6s191",
        "d2l"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Patchify a tiny image and inspect the token sequence a Vision Transformer would receive.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Vision Transformer"
        }
      ],
      "followUpQuestions": [
        "CNN vs ViT?",
        "Why patch size matters?",
        "What does CLS token do?",
        "How does attention cost scale?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "vision-metrics",
      "title": "PSNR, SSIM, LPIPS & FID",
      "module": "cv",
      "priority": "very-high",
      "roles": [
        "cv",
        "genai",
        "as"
      ],
      "interviewAnswer": "PSNR measures pixel-level fidelity, SSIM compares structural similarity, LPIPS uses deep features for perceptual similarity, and FID compares distributions of generated and real features. No single metric captures physical correctness.",
      "keyPoints": [
        "Pairwise vs distributional metrics",
        "Metric/task alignment",
        "Human/domain evaluation",
        "Do not overinterpret FID"
      ],
      "resources": [
        "stanford-cs231n",
        "mit-6s191"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "PSNR, SSIM, LPIPS & FID"
        }
      ],
      "followUpQuestions": [
        "PSNR vs SSIM?",
        "Why can diffusion have low PSNR but useful samples?",
        "What does FID actually compare?",
        "What metric would you use for scientific microstructures?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "super-resolution",
      "title": "Super-resolution & Reconstruction",
      "module": "cv",
      "priority": "high",
      "roles": [
        "cv",
        "mle",
        "as"
      ],
      "interviewAnswer": "Super-resolution infers a higher-resolution signal from limited observations. The central tension is recovering detail without hallucinating unsupported structure, so downstream/domain validation is often essential.",
      "keyPoints": [
        "Paired vs unpaired data",
        "Pixel vs perceptual objectives",
        "Hallucination risk",
        "2D/3D consistency"
      ],
      "resources": [
        "stanford-cs231n",
        "mit-6s191"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Pixel loss vs perceptual loss?",
        "Why can GAN SR lower PSNR?",
        "How do you validate scientific SR?",
        "2D slice vs 3D model?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "embeddings",
      "title": "Embeddings",
      "module": "nlp",
      "priority": "very-high",
      "roles": [
        "aie",
        "mle",
        "ds",
        "as"
      ],
      "interviewAnswer": "Embeddings map discrete objects such as words, products or code into dense vectors where geometry captures learned relationships. They support similarity search, retrieval and neural-network inputs.",
      "keyPoints": [
        "Dense vectors",
        "Cosine similarity",
        "Contextual vs static",
        "Dimensionality"
      ],
      "resources": [
        "stanford-cs224n",
        "hf-llm",
        "d2l"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "scatter",
          "title": "Embedding space"
        }
      ],
      "followUpQuestions": [
        "Cosine vs dot-product similarity?",
        "How are embeddings trained?",
        "What is an ANN index?",
        "How do you evaluate embedding retrieval?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "tokenization",
      "title": "Tokenization",
      "module": "nlp",
      "priority": "high",
      "roles": [
        "aie",
        "as"
      ],
      "interviewAnswer": "Tokenization converts text into a sequence of discrete token IDs. Subword methods balance vocabulary size and sequence length and must match the model’s training tokenizer exactly.",
      "keyPoints": [
        "BPE/WordPiece intuition",
        "Special tokens",
        "Unknown words",
        "Tokenizer-model coupling"
      ],
      "resources": [
        "stanford-cs224n",
        "stanford-cs336",
        "hf-llm"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Tokenization"
        }
      ],
      "followUpQuestions": [
        "BPE intuition?",
        "Why special tokens?",
        "Why tokenization differs by language?",
        "How does token count affect cost?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "attention",
      "title": "Self-Attention: Q, K, V",
      "module": "transformers",
      "priority": "very-high",
      "roles": [
        "aie",
        "mle",
        "as"
      ],
      "interviewAnswer": "Self-attention lets each token build a context-dependent representation by comparing its query with other tokens’ keys and taking a weighted combination of their values.",
      "keyPoints": [
        "Scaled dot product",
        "Softmax weights",
        "Multi-head attention",
        "Quadratic sequence cost"
      ],
      "resources": [
        "stanford-cs224n",
        "stanford-cs25",
        "hf-llm",
        "d2l",
        "paper-attention",
        "distill-attention",
        "illustrated-transformer"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Implement scaled dot-product self-attention with explicit tensor shapes.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "matrix",
          "title": "Self-attention weight map"
        }
      ],
      "followUpQuestions": [
        "Why multi-head attention?",
        "Why is attention O(n²) in sequence length?",
        "What are cross-attention and self-attention?",
        "What is KV caching?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "transformer",
      "title": "Transformer Architecture",
      "module": "transformers",
      "priority": "very-high",
      "roles": [
        "aie",
        "mle",
        "as"
      ],
      "interviewAnswer": "Transformers combine attention, feed-forward networks, residual connections and normalization. Encoder-only, decoder-only and encoder-decoder variants serve different tasks.",
      "keyPoints": [
        "Attention block",
        "MLP",
        "Residual/LayerNorm",
        "Causal mask"
      ],
      "resources": [
        "stanford-cs224n",
        "stanford-cs336",
        "hf-llm",
        "d2l",
        "paper-attention",
        "illustrated-transformer"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "Transformer block"
        }
      ],
      "followUpQuestions": [
        "Why divide by sqrt(d_k)?",
        "Encoder vs decoder-only transformer?",
        "What does multi-head attention buy?",
        "Why LayerNorm instead of BatchNorm?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "bert-vs-gpt",
      "title": "BERT vs GPT-style Models",
      "module": "transformers",
      "priority": "high",
      "roles": [
        "aie",
        "as"
      ],
      "interviewAnswer": "BERT-style models are typically encoder-only and learn bidirectional contextual representations; GPT-style models are decoder-only and autoregressively predict the next token. Their pretraining objectives drive different strengths.",
      "keyPoints": [
        "Masked LM vs causal LM",
        "Encoding vs generation",
        "Fine-tuning",
        "Context direction"
      ],
      "resources": [
        "stanford-cs224n",
        "hf-llm"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "BERT vs GPT training"
        }
      ],
      "followUpQuestions": [
        "What is causal masking?",
        "Why masked language modeling?",
        "Encoder-decoder transformer use case?",
        "How would you get sentence embeddings from BERT?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "positional-encoding",
      "title": "Positional Information",
      "module": "transformers",
      "priority": "medium",
      "roles": [
        "aie",
        "as"
      ],
      "interviewAnswer": "Attention itself is permutation-invariant, so transformers need positional information. Systems may use learned embeddings, sinusoidal encodings or relative/rotary approaches such as RoPE.",
      "keyPoints": [
        "Order information",
        "Absolute vs relative",
        "RoPE intuition",
        "Context length"
      ],
      "resources": [
        "stanford-cs224n",
        "stanford-cs336",
        "hf-llm"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Position information"
        }
      ],
      "followUpQuestions": [
        "Absolute vs relative position?",
        "What is RoPE?",
        "Why sin/cos?",
        "How does long-context extension interact with position encodings?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "language-modeling",
      "title": "Language Modeling & Next-token Prediction",
      "module": "nlp",
      "priority": "high",
      "roles": [
        "aie",
        "as"
      ],
      "interviewAnswer": "A causal language model estimates the probability of each next token conditioned on previous tokens and trains using cross-entropy over sequences. Generation repeatedly samples or selects from the predicted distribution.",
      "keyPoints": [
        "Autoregression",
        "Cross-entropy",
        "Teacher forcing intuition",
        "Sampling"
      ],
      "resources": [
        "stanford-cs336",
        "hf-llm",
        "stanford-cs224n"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What is perplexity?",
        "Why causal mask?",
        "Teacher forcing?",
        "Why can next-token prediction lead to broad capabilities?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "vae",
      "title": "Autoencoders & VAEs",
      "module": "genai",
      "priority": "high",
      "roles": [
        "genai",
        "cv",
        "as"
      ],
      "interviewAnswer": "A standard autoencoder learns a compressed code for reconstruction. A VAE regularizes the latent distribution and samples from it, enabling generation but introducing a reconstruction–regularization trade-off.",
      "keyPoints": [
        "Encoder/decoder",
        "Latent variable",
        "KL term",
        "Reparameterization"
      ],
      "resources": [
        "mit-6s191",
        "statquest",
        "stanford-cs336",
        "deep-learning-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Variational autoencoder"
        }
      ],
      "followUpQuestions": [
        "Why reparameterization?",
        "What is KL divergence doing?",
        "VAE vs autoencoder?",
        "What is posterior collapse?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "vqgan",
      "title": "VQ-VAE / VQGAN & Vector Quantization",
      "module": "genai",
      "priority": "very-high",
      "roles": [
        "genai",
        "cv",
        "as"
      ],
      "interviewAnswer": "Vector quantization maps continuous encoder features to entries in a discrete codebook. VQGAN combines discrete compression with perceptual/adversarial objectives to improve reconstructed visual quality.",
      "keyPoints": [
        "Codebook",
        "Commitment loss",
        "Straight-through estimator",
        "Dead codes"
      ],
      "resources": [
        "mit-6s191",
        "stanford-cs231n",
        "stanford-cs336",
        "paper-vqvae",
        "paper-vqgan"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Implement the core vector-quantization operation: map continuous latent vectors to nearest codebook entries.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Vector-quantized autoencoder"
        }
      ],
      "followUpQuestions": [
        "Why straight-through estimation?",
        "What is commitment loss?",
        "How do you measure compression in bits?",
        "VAE vs VQ-VAE vs VQGAN?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "gan",
      "title": "GAN Fundamentals",
      "module": "genai",
      "priority": "very-high",
      "roles": [
        "genai",
        "cv",
        "as"
      ],
      "interviewAnswer": "A GAN trains a generator to fool a discriminator while the discriminator learns to distinguish real from generated samples. This adversarial game can produce sharp images but may be unstable.",
      "keyPoints": [
        "Generator/discriminator",
        "Adversarial loss",
        "Mode collapse",
        "Training balance"
      ],
      "resources": [
        "mit-6s191",
        "stanford-cs231n",
        "stanford-cs336",
        "deep-learning-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "See the two-player GAN objective with a minimal discriminator score and generator target.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "network",
          "title": "GAN training game"
        }
      ],
      "followUpQuestions": [
        "What is mode collapse?",
        "Why are GANs unstable?",
        "WGAN-GP intuition?",
        "GAN vs diffusion?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "cyclegan",
      "title": "CycleGAN & Unpaired Translation",
      "module": "genai",
      "priority": "high",
      "roles": [
        "genai",
        "cv",
        "as"
      ],
      "interviewAnswer": "CycleGAN learns mappings between two unpaired image domains using adversarial losses plus cycle consistency. The cycle constraint encourages content preservation but does not guarantee physical correctness or eliminate hallucination.",
      "keyPoints": [
        "Two generators",
        "Two discriminators",
        "Cycle consistency",
        "Unpaired domains"
      ],
      "resources": [
        "stanford-cs231n",
        "mit-6s191",
        "stanford-cs336",
        "paper-cyclegan"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "network",
          "title": "CycleGAN"
        }
      ],
      "followUpQuestions": [
        "Why two generators/discriminators?",
        "What is cycle consistency?",
        "What is used at inference?",
        "Why not supervised SR?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "diffusion",
      "title": "Diffusion Models",
      "module": "genai",
      "priority": "very-high",
      "roles": [
        "genai",
        "aie",
        "as"
      ],
      "interviewAnswer": "Diffusion models learn to reverse a progressive corruption process. During generation they start from noise and iteratively move toward a sample from the learned data distribution.",
      "keyPoints": [
        "Forward noising",
        "Reverse process",
        "Noise/velocity parameterization",
        "Sampling cost"
      ],
      "resources": [
        "mit-6s191",
        "stanford-cs336",
        "hf-diffusion",
        "paper-ddpm"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Train intuition with the forward noising equation and a tiny denoising target.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Diffusion generation"
        }
      ],
      "followUpQuestions": [
        "Diffusion vs GAN?",
        "What is classifier-free guidance?",
        "Why latent diffusion?",
        "What is v-prediction?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "latent-diffusion",
      "title": "Latent Diffusion",
      "module": "genai",
      "priority": "high",
      "roles": [
        "genai",
        "aie",
        "as"
      ],
      "interviewAnswer": "Latent diffusion performs the generative process in a compressed latent space rather than pixels, reducing compute while a decoder maps the final latent back to the image domain.",
      "keyPoints": [
        "Autoencoder",
        "Latent space",
        "Compute savings",
        "Decoder fidelity"
      ],
      "resources": [
        "mit-6s191",
        "stanford-cs336",
        "hf-diffusion",
        "paper-ddpm"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Latent diffusion"
        }
      ],
      "followUpQuestions": [
        "Why latent instead of pixel diffusion?",
        "What does the VAE do in Stable Diffusion?",
        "How does conditioning enter?",
        "What information can the bottleneck lose?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "flow-matching",
      "title": "Flow Matching",
      "module": "genai",
      "priority": "very-high",
      "roles": [
        "genai",
        "aie",
        "as"
      ],
      "interviewAnswer": "Flow matching trains a model to predict a continuous velocity field that transports samples from a simple distribution such as noise toward the data distribution. Inference integrates that learned vector field over time.",
      "keyPoints": [
        "Velocity field",
        "Path between noise/data",
        "ODE integration",
        "Difference from denoising formulation"
      ],
      "resources": [
        "mit-6s191",
        "stanford-cs336",
        "hf-diffusion",
        "paper-flow-matching"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Implement a rectified-flow training target on toy points.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Flow matching"
        }
      ],
      "followUpQuestions": [
        "How is flow matching different from diffusion?",
        "What ODE solver is used at inference?",
        "What is rectified flow?",
        "How does conditioning enter the velocity network?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "conditioning",
      "title": "Conditioning & Classifier-Free Guidance",
      "module": "genai",
      "priority": "high",
      "roles": [
        "genai",
        "aie",
        "as"
      ],
      "interviewAnswer": "Conditioning provides control information such as text, labels, embeddings or structural inputs. Classifier-free guidance combines conditioned and unconditioned predictions to strengthen adherence to the condition.",
      "keyPoints": [
        "Cross-attention",
        "Condition signal",
        "Guidance scale",
        "Fidelity/diversity trade-off"
      ],
      "resources": [
        "mit-6s191",
        "stanford-cs25",
        "stanford-cs336",
        "hf-diffusion"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "network",
          "title": "Conditional generation"
        }
      ],
      "followUpQuestions": [
        "Cross-attention vs ControlNet conditioning?",
        "What is classifier-free guidance?",
        "Why drop conditions during training?",
        "How do you evaluate controllability?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "controlnet",
      "title": "ControlNet",
      "module": "genai",
      "priority": "medium",
      "roles": [
        "genai",
        "cv",
        "as"
      ],
      "interviewAnswer": "ControlNet adds a trainable conditioning branch to a pretrained diffusion model so structural signals such as edges, depth or poses can guide generation while preserving much of the pretrained backbone.",
      "keyPoints": [
        "Structural control",
        "Frozen/pretrained backbone concept",
        "Conditioning maps",
        "Training efficiency"
      ],
      "resources": [
        "mit-6s191",
        "stanford-cs336",
        "hf-diffusion"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "network",
          "title": "ControlNet conditioning"
        }
      ],
      "followUpQuestions": [
        "Why zero convolutions?",
        "ControlNet vs cross-attention?",
        "What control signals can be used?",
        "How do you balance control strength and diversity?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "gan-vs-diffusion",
      "title": "GAN vs Diffusion vs Flow Matching",
      "module": "genai",
      "priority": "very-high",
      "roles": [
        "genai",
        "aie",
        "as"
      ],
      "interviewAnswer": "GANs use adversarial training and usually sample in one/few passes; diffusion learns a reverse corruption process; flow matching learns a transport velocity field. Compare them by stability, sample quality/diversity, inference speed and controllability—not by a single winner.",
      "keyPoints": [
        "Training objective",
        "Sampling procedure",
        "Stability",
        "Latency"
      ],
      "resources": [
        "mit-6s191",
        "stanford-cs336",
        "hf-diffusion",
        "paper-flow-matching"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "GAN vs Diffusion vs Flow Matching"
        }
      ],
      "followUpQuestions": [
        "Why is diffusion sampling slower?",
        "What does flow matching predict?",
        "Can a transformer be used in both diffusion and flow matching?",
        "When would you choose a GAN today?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "prompting",
      "title": "Prompt Engineering",
      "module": "llm",
      "priority": "high",
      "roles": [
        "aie"
      ],
      "interviewAnswer": "Good prompting specifies the task, context, constraints and output format, then evaluates prompts on representative examples. Prompting should be treated as an engineering artifact with tests, not magic wording.",
      "keyPoints": [
        "Clear instructions",
        "Few-shot examples",
        "Structured outputs",
        "Evaluation"
      ],
      "resources": [
        "anthropic-prompting",
        "openai-cookbook",
        "hf-llm",
        "langchain-academy"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Zero-shot vs few-shot?",
        "When would you use structured output?",
        "Prompting vs fine-tuning?",
        "How do you handle prompt injection?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "rag",
      "title": "RAG: Retrieval-Augmented Generation",
      "module": "llm",
      "priority": "very-high",
      "roles": [
        "aie",
        "mle"
      ],
      "interviewAnswer": "RAG retrieves relevant external context and supplies it to the model at generation time. A reliable RAG system depends on ingestion, chunking, embeddings, retrieval, reranking, context construction and evaluation—not only the LLM.",
      "keyPoints": [
        "Chunking",
        "Embeddings",
        "Retriever",
        "Grounded generation"
      ],
      "resources": [
        "hf-llm",
        "openai-cookbook",
        "langchain-academy",
        "paper-rag"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Build a minimal semantic retriever, then show where generation would plug in.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "RAG pipeline"
        }
      ],
      "followUpQuestions": [
        "RAG vs fine-tuning?",
        "How do you choose chunk size?",
        "Why rerank?",
        "What if retrieval returns conflicting documents?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "embedding-retrieval",
      "title": "Embedding Search & Vector Databases",
      "module": "llm",
      "priority": "very-high",
      "roles": [
        "aie"
      ],
      "interviewAnswer": "Convert documents and queries to embeddings, compare them using a similarity metric, and retrieve nearest items. Production retrieval often adds metadata filters, hybrid lexical search and reranking.",
      "keyPoints": [
        "Cosine/dot product",
        "ANN search",
        "Metadata filtering",
        "Hybrid retrieval"
      ],
      "resources": [
        "openai-cookbook",
        "hf-llm",
        "langchain-academy"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Build cosine-similarity retrieval over a tiny vector index and return top-k items.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Embedding retrieval"
        }
      ],
      "followUpQuestions": [
        "Cosine vs dot product?",
        "HNSW intuition?",
        "Dense vs sparse/hybrid retrieval?",
        "How do you evaluate retrieval separately from generation?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "rag-evaluation",
      "title": "RAG Evaluation",
      "module": "llm",
      "priority": "very-high",
      "roles": [
        "aie"
      ],
      "interviewAnswer": "Evaluate retrieval and generation separately. Retrieval metrics ask whether relevant evidence was found; generation metrics assess faithfulness, relevance and task success. Human or domain evaluation remains important.",
      "keyPoints": [
        "Recall@k",
        "Context precision",
        "Faithfulness",
        "End-to-end task success"
      ],
      "resources": [
        "openai-cookbook",
        "made-with-ml",
        "hf-llm",
        "langchain-academy"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "RAG Evaluation"
        }
      ],
      "followUpQuestions": [
        "How do you evaluate retrieval?",
        "What is faithfulness?",
        "How do you evaluate unanswerable queries?",
        "When is LLM-as-judge appropriate?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "tool-calling",
      "title": "Tool / Function Calling",
      "module": "llm",
      "priority": "very-high",
      "roles": [
        "aie"
      ],
      "interviewAnswer": "Tool calling lets the model choose structured actions while deterministic code performs calculations, database access or external operations. The model orchestrates; the tool remains the source of truth for precise operations.",
      "keyPoints": [
        "Schema",
        "Tool selection",
        "Validation",
        "Error handling"
      ],
      "resources": [
        "openai-cookbook",
        "hf-agents",
        "hf-llm",
        "langchain-academy"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Treat tool calling as structured input validation, not free-form execution.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Tool calling"
        }
      ],
      "followUpQuestions": [
        "Tool calling vs RAG?",
        "How do you prevent unsafe side effects?",
        "What if the model calls the wrong tool?",
        "How do you evaluate tool-use accuracy?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "agents",
      "title": "Agents & LangGraph",
      "module": "llm",
      "priority": "high",
      "roles": [
        "aie"
      ],
      "interviewAnswer": "An agent repeatedly observes state, chooses an action/tool, updates state and decides whether to continue. Graph-based orchestration makes control flow, retries and state transitions explicit.",
      "keyPoints": [
        "State",
        "Tool loop",
        "Deterministic vs agentic steps",
        "Termination"
      ],
      "resources": [
        "langchain-academy",
        "hf-agents",
        "openai-cookbook",
        "hf-llm"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Agent loop"
        }
      ],
      "followUpQuestions": [
        "Agent vs workflow?",
        "Why LangGraph?",
        "How do you persist agent state?",
        "How do you evaluate an agent?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "mcp",
      "title": "Model Context Protocol (MCP)",
      "module": "llm",
      "priority": "medium",
      "roles": [
        "aie"
      ],
      "interviewAnswer": "MCP standardizes how AI applications discover and invoke external tools/resources through a common protocol, reducing one-off integrations between assistants and services.",
      "keyPoints": [
        "Client/server roles",
        "Tool/resource discovery",
        "Standardized interface",
        "Security boundaries"
      ],
      "resources": [
        "hf-agents",
        "langchain-academy",
        "openai-cookbook",
        "hf-llm"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "MCP architecture"
        }
      ],
      "followUpQuestions": [
        "MCP vs normal REST API?",
        "What does an MCP server expose?",
        "Where does authorization live?",
        "Why use MCP for an internal tool ecosystem?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "llm-evaluation",
      "title": "LLM Evaluation",
      "module": "llm",
      "priority": "very-high",
      "roles": [
        "aie"
      ],
      "interviewAnswer": "Define task-specific datasets and success criteria, then combine deterministic checks, model-based judges where appropriate, and human review. Track quality, latency, cost and safety together.",
      "keyPoints": [
        "Golden set",
        "Structured checks",
        "LLM-as-judge caveats",
        "Regression evaluation"
      ],
      "resources": [
        "openai-cookbook",
        "made-with-ml",
        "hf-llm",
        "langchain-academy"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "LLM Evaluation"
        }
      ],
      "followUpQuestions": [
        "How would you build an eval set?",
        "LLM-as-judge pros/cons?",
        "How do you evaluate agents?",
        "What metrics matter in production?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "llm-inference",
      "title": "LLM Inference: Temperature, Top-p, KV Cache",
      "module": "llm",
      "priority": "high",
      "roles": [
        "aie"
      ],
      "interviewAnswer": "Temperature and top-p affect sampling randomness; the KV cache reuses attention keys/values from previous tokens to avoid recomputing the entire prefix during autoregressive generation.",
      "keyPoints": [
        "Sampling vs greedy",
        "Determinism",
        "KV memory cost",
        "Latency"
      ],
      "resources": [
        "stanford-cs336",
        "hf-llm",
        "openai-cookbook",
        "langchain-academy"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "LLM inference path"
        }
      ],
      "followUpQuestions": [
        "Temperature 0 vs greedy decoding?",
        "What does top-p do?",
        "Why KV cache speeds decoding?",
        "Prefill vs decode?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "fine-tuning-lora",
      "title": "Fine-tuning, LoRA & Quantization",
      "module": "llm",
      "priority": "high",
      "roles": [
        "aie"
      ],
      "interviewAnswer": "Fine-tuning changes model behavior through training; LoRA learns low-rank adapter updates instead of all parameters; quantization reduces numerical precision to lower memory/compute, usually with some quality trade-off.",
      "keyPoints": [
        "When RAG vs fine-tune",
        "PEFT",
        "4/8-bit concepts",
        "Evaluation"
      ],
      "resources": [
        "hf-llm",
        "stanford-cs336",
        "openai-cookbook",
        "langchain-academy",
        "paper-lora"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "LoRA adaptation"
        }
      ],
      "followUpQuestions": [
        "RAG vs fine-tuning?",
        "Why LoRA saves memory?",
        "What is QLoRA?",
        "Post-training vs quantization-aware training?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "graph-basics",
      "title": "Graph ML Fundamentals",
      "module": "graph",
      "priority": "high",
      "roles": [
        "mle",
        "ds",
        "as"
      ],
      "interviewAnswer": "A graph represents entities as nodes and relationships as edges. ML on graphs combines node/edge features with graph structure to predict node labels, links, graph properties or rankings.",
      "keyPoints": [
        "Nodes/edges",
        "Directed vs undirected",
        "Heterogeneous graphs",
        "Tasks"
      ],
      "resources": [
        "stanford-cs229",
        "stanford-cs329s",
        "stanford-cs224w"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "network",
          "title": "Graph representation"
        }
      ],
      "followUpQuestions": [
        "Homogeneous vs heterogeneous graph?",
        "Directed vs undirected?",
        "What is node degree?",
        "How do you split graph data?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "message-passing",
      "title": "Message Passing in GNNs",
      "module": "graph",
      "priority": "high",
      "roles": [
        "mle",
        "as"
      ],
      "interviewAnswer": "GNN layers aggregate information from neighbors and combine it with the current node representation. Repeating layers expands the receptive field over graph hops.",
      "keyPoints": [
        "Aggregate",
        "Update",
        "Permutation invariance",
        "Oversmoothing"
      ],
      "resources": [
        "stanford-cs229",
        "stanford-cs329s",
        "stanford-cs224w"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "GNN message passing"
        }
      ],
      "followUpQuestions": [
        "What is over-smoothing?",
        "Why must aggregation be permutation invariant?",
        "How many hops does k layers see?",
        "What is neighbor sampling?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "graphsage",
      "title": "GraphSAGE",
      "module": "graph",
      "priority": "very-high",
      "roles": [
        "mle",
        "as"
      ],
      "interviewAnswer": "GraphSAGE learns aggregation functions that combine sampled neighbor features, enabling inductive embeddings for nodes that were not present during training.",
      "keyPoints": [
        "Inductive learning",
        "Neighbor sampling",
        "Aggregation",
        "New nodes"
      ],
      "resources": [
        "stanford-cs229",
        "stanford-cs329s",
        "stanford-cs224w",
        "paper-graphsage"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Implement one GraphSAGE-style neighbor aggregation step with mean aggregation.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "GraphSAGE"
        }
      ],
      "followUpQuestions": [
        "GraphSAGE vs GCN?",
        "Why is GraphSAGE inductive?",
        "How do you handle no-neighbor cold-start nodes?",
        "How do you use it for link prediction?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "link-prediction",
      "title": "Link Prediction",
      "module": "graph",
      "priority": "high",
      "roles": [
        "mle",
        "ds",
        "as"
      ],
      "interviewAnswer": "Link prediction scores whether an edge should exist between two nodes. Candidate node embeddings are combined with a scoring function and trained against positive and negative edges.",
      "keyPoints": [
        "Negative sampling",
        "Dot product/MLP scores",
        "Temporal split",
        "Ranking metrics"
      ],
      "resources": [
        "stanford-cs229",
        "stanford-cs329s",
        "stanford-cs224w"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Score candidate graph links with embedding similarity and evaluate whether a true edge ranks highly.",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "How do you sample negatives?",
        "Dot-product vs MLP decoder?",
        "Why chronological split?",
        "How does cold start affect link prediction?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "recall-at-k",
      "title": "Recall@K & Ranking Evaluation",
      "module": "recsys",
      "priority": "high",
      "roles": [
        "mle",
        "ds",
        "da"
      ],
      "interviewAnswer": "Recall@K asks whether relevant items appear in the top K recommendations. It fits reviewer/recommender systems better than plain classification accuracy because users receive ranked candidates.",
      "keyPoints": [
        "Top-k ranking",
        "Multiple relevant items",
        "MRR/NDCG alternatives",
        "Candidate set"
      ],
      "resources": [
        "made-with-ml",
        "stanford-cs329s",
        "stanford-cs224w"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Precision@K vs Recall@K?",
        "What is MRR?",
        "Why nDCG?",
        "How do incomplete labels affect offline evaluation?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "popularity-bias",
      "title": "Popularity Bias in Recommenders",
      "module": "recsys",
      "priority": "medium",
      "roles": [
        "mle",
        "ds",
        "da"
      ],
      "interviewAnswer": "Highly active/popular entities can dominate recommendations even when niche specialists are more relevant. Mitigation can include debiasing, re-ranking, diversity constraints or separating expertise from activity.",
      "keyPoints": [
        "Exposure bias",
        "Hub problem",
        "Re-ranking",
        "Offline/online evaluation"
      ],
      "resources": [
        "stanford-cs329s",
        "stanford-cs224w"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "bars",
          "title": "Popularity bias"
        }
      ],
      "followUpQuestions": [
        "How would you measure popularity bias?",
        "What is exposure bias?",
        "How do you balance expertise and activity?",
        "Could debiasing hurt accuracy?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "etl-elt",
      "title": "ETL vs ELT",
      "module": "data-eng",
      "priority": "very-high",
      "roles": [
        "de",
        "ds",
        "mle"
      ],
      "interviewAnswer": "ETL transforms data before loading it into the target system; ELT loads raw data first and transforms within a powerful warehouse/lakehouse. Choice depends on governance, scale, latency and platform.",
      "keyPoints": [
        "Extract/transform/load",
        "Warehouse compute",
        "Raw-zone retention",
        "Governance"
      ],
      "resources": [
        "made-with-ml",
        "confluent-kafka",
        "flink",
        "spark"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "ETL vs ELT"
        }
      ],
      "followUpQuestions": [
        "When would you prefer ETL?",
        "Why is ELT common in cloud warehouses?",
        "How do you make pipelines idempotent?",
        "How do you handle schema changes?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "batch-stream",
      "title": "Batch vs Streaming",
      "module": "data-eng",
      "priority": "very-high",
      "roles": [
        "de",
        "mle"
      ],
      "interviewAnswer": "Batch processing handles bounded datasets on a schedule; streaming processes events continuously or in small increments. Choose based on freshness requirements, complexity, cost and correctness needs.",
      "keyPoints": [
        "Latency",
        "Bounded/unbounded",
        "Exactly-once nuance",
        "State"
      ],
      "resources": [
        "confluent-kafka",
        "flink",
        "spark"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Batch vs streaming"
        }
      ],
      "followUpQuestions": [
        "Event time vs processing time?",
        "When is micro-batching enough?",
        "How do you replay data?",
        "What is the operational cost of streaming?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "kafka",
      "title": "Kafka Fundamentals",
      "module": "data-eng",
      "priority": "very-high",
      "roles": [
        "de",
        "mle"
      ],
      "interviewAnswer": "Kafka is a distributed event log. Producers write records to partitioned topics; consumers read offsets, often in consumer groups for parallelism and fault tolerance.",
      "keyPoints": [
        "Broker/topic/partition",
        "Offsets",
        "Consumer groups",
        "Ordering per partition"
      ],
      "resources": [
        "confluent-kafka",
        "flink",
        "spark"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Kafka data flow"
        }
      ],
      "followUpQuestions": [
        "Why partitions?",
        "What happens when a consumer fails?",
        "At-least-once vs exactly-once?",
        "Kafka vs RabbitMQ?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "flink-streaming",
      "title": "Flink & Stateful Stream Processing",
      "module": "data-eng",
      "priority": "high",
      "roles": [
        "de",
        "mle"
      ],
      "interviewAnswer": "Flink processes unbounded streams with state, event-time semantics, windows and checkpointing. It is designed for continuous computations where correctness across time and failures matters.",
      "keyPoints": [
        "State",
        "Event time",
        "Watermarks",
        "Checkpoints"
      ],
      "resources": [
        "flink",
        "confluent-kafka",
        "spark"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Stateful stream processing"
        }
      ],
      "followUpQuestions": [
        "Watermarks?",
        "Keyed state?",
        "Checkpoint vs savepoint?",
        "How does Flink recover after failure?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "spark",
      "title": "Spark / PySpark",
      "module": "data-eng",
      "priority": "very-high",
      "roles": [
        "de",
        "ds"
      ],
      "interviewAnswer": "Spark distributes transformations over partitions of large datasets. DataFrames and Spark SQL provide optimized execution while lazy evaluation lets Spark build an execution plan before running actions.",
      "keyPoints": [
        "Partitions",
        "Lazy evaluation",
        "Transformations/actions",
        "Shuffle"
      ],
      "resources": [
        "spark",
        "confluent-kafka",
        "flink"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Spark execution"
        }
      ],
      "followUpQuestions": [
        "Transformation vs action?",
        "What causes a shuffle?",
        "Broadcast join?",
        "How do you handle data skew?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "orchestration",
      "title": "Workflow Orchestration",
      "module": "data-eng",
      "priority": "high",
      "roles": [
        "de",
        "mle"
      ],
      "interviewAnswer": "Orchestrators schedule and coordinate multi-step workflows, track dependencies, retries and failures, and separate workflow control from transformation logic.",
      "keyPoints": [
        "DAG",
        "Retries",
        "Idempotency",
        "Observability"
      ],
      "resources": [
        "made-with-ml",
        "fsdl",
        "confluent-kafka",
        "flink"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "network",
          "title": "Workflow orchestration"
        }
      ],
      "followUpQuestions": [
        "What makes a task idempotent?",
        "DAG vs streaming topology?",
        "How do retries/backfills work?",
        "Scheduler vs orchestrator?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "data-quality",
      "title": "Data Quality & Schema Evolution",
      "module": "data-eng",
      "priority": "high",
      "roles": [
        "de",
        "mle"
      ],
      "interviewAnswer": "Production pipelines should validate schema, ranges, null rates, uniqueness and business constraints. Schema changes need explicit compatibility and migration strategies rather than silent breakage.",
      "keyPoints": [
        "Schema contracts",
        "Freshness",
        "Completeness",
        "Backward compatibility"
      ],
      "resources": [
        "made-with-ml",
        "confluent-kafka",
        "flink",
        "spark",
        "google-rules-ml"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Schema drift vs data drift?",
        "How handle a new categorical value?",
        "What checks would you add?",
        "How do you roll out schema changes safely?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "production-ml-pipeline",
      "title": "Production ML Pipeline",
      "module": "mlops",
      "priority": "very-high",
      "roles": [
        "mle",
        "aie",
        "ds"
      ],
      "interviewAnswer": "A production ML pipeline reliably connects data ingestion and validation to preprocessing, training, evaluation, model registration, deployment, inference and monitoring. The key difference from a notebook is repeatability, observability and failure handling.",
      "keyPoints": [
        "Data → train → registry → deploy",
        "Reproducibility",
        "Automation",
        "Monitoring"
      ],
      "resources": [
        "stanford-cs329s",
        "fsdl",
        "made-with-ml",
        "google-rules-ml"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Sketch a reproducible train/register/serve contract with explicit artifacts.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Production ML lifecycle"
        }
      ],
      "followUpQuestions": [
        "Batch vs online serving?",
        "Where does Docker fit?",
        "How do you version data/model/code?",
        "How do you detect drift?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "experiment-tracking",
      "title": "Experiment Tracking",
      "module": "mlops",
      "priority": "high",
      "roles": [
        "mle",
        "ds"
      ],
      "interviewAnswer": "Track code version, data version, hyperparameters, environment, metrics and artifacts so experiments can be reproduced and compared. A checkpoint without its context is not a reproducible experiment.",
      "keyPoints": [
        "Runs",
        "Artifacts",
        "Config",
        "Data version"
      ],
      "resources": [
        "made-with-ml",
        "fsdl",
        "stanford-cs329s"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Experiment tracker vs model registry?",
        "What metadata do you log?",
        "How do you reproduce a run?",
        "How do you track datasets?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "model-registry",
      "title": "Model Registry & Versioning",
      "module": "mlops",
      "priority": "high",
      "roles": [
        "mle",
        "aie"
      ],
      "interviewAnswer": "A model registry stores versioned model artifacts plus metadata, evaluation results and lifecycle state. It gives deployment systems an explicit, auditable model version to promote or roll back.",
      "keyPoints": [
        "Version",
        "Stage/approval",
        "Metadata",
        "Rollback"
      ],
      "resources": [
        "made-with-ml",
        "aws-sagemaker",
        "fsdl",
        "stanford-cs329s"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Represent model versions as immutable artifacts and implement a simple promotion/rollback pointer.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Model registry lifecycle"
        }
      ],
      "followUpQuestions": [
        "Registry vs artifact store?",
        "What metadata belongs with a model?",
        "How do you roll back?",
        "Who/what approves promotion?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "serving",
      "title": "Batch vs Online Model Serving",
      "module": "mlops",
      "priority": "very-high",
      "roles": [
        "mle",
        "aie"
      ],
      "interviewAnswer": "Online serving optimizes low-latency per-request predictions; batch inference processes many items asynchronously and is often simpler and cheaper for heavy workloads. Choose from user and freshness requirements.",
      "keyPoints": [
        "Latency/throughput",
        "Synchronous/asynchronous",
        "GPU batching",
        "Cost"
      ],
      "resources": [
        "fsdl",
        "stanford-cs329s",
        "made-with-ml"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Batch vs online inference"
        }
      ],
      "followUpQuestions": [
        "Batch vs online?",
        "When use async jobs?",
        "How would you autoscale GPU inference?",
        "How do you roll back a bad model?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "api-ml",
      "title": "APIs around ML Models",
      "module": "mlops",
      "priority": "high",
      "roles": [
        "mle",
        "aie"
      ],
      "interviewAnswer": "An API validates requests, invokes preprocessing and inference, then returns predictions or a job ID. Keep model logic separate from transport/UI so each layer can scale and evolve independently.",
      "keyPoints": [
        "Schema validation",
        "Timeouts",
        "Async jobs",
        "Separation of concerns"
      ],
      "resources": [
        "fsdl",
        "made-with-ml",
        "stanford-cs329s"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "REST vs async job?",
        "How do you version an API?",
        "What belongs in request validation?",
        "How do you handle retries/idempotency?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "monitoring",
      "title": "Monitoring: System, Data & Model",
      "module": "mlops",
      "priority": "very-high",
      "roles": [
        "mle",
        "aie"
      ],
      "interviewAnswer": "Monitor system health such as failures and latency, data quality/drift, and model quality when ground truth becomes available. Version models so a degraded release can be rolled back.",
      "keyPoints": [
        "Logs/metrics",
        "Data drift",
        "Performance drift",
        "Alerts/rollback"
      ],
      "resources": [
        "fsdl",
        "made-with-ml",
        "stanford-cs329s",
        "google-rules-ml"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "ML monitoring stack"
        }
      ],
      "followUpQuestions": [
        "Data drift vs concept drift?",
        "What if labels arrive after 30 days?",
        "How would you monitor a generative model?",
        "What triggers rollback?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "drift",
      "title": "Data Drift vs Concept Drift",
      "module": "mlops",
      "priority": "high",
      "roles": [
        "mle",
        "ds"
      ],
      "interviewAnswer": "Data drift means the input distribution changes; concept drift means the relationship between inputs and target changes. Drift detection is a signal to investigate—not automatic proof that retraining is needed.",
      "keyPoints": [
        "Covariate shift",
        "Target relationship",
        "Monitoring windows",
        "Retraining decision"
      ],
      "resources": [
        "stanford-cs329s",
        "made-with-ml",
        "fsdl",
        "google-rules-ml"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Distribution drift"
        }
      ],
      "followUpQuestions": [
        "How detect drift without labels?",
        "Data vs concept drift?",
        "When should you retrain?",
        "What is label/prior shift?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "deployment-strategies",
      "title": "Canary, Blue/Green & Shadow Deployment",
      "module": "mlops",
      "priority": "high",
      "roles": [
        "mle"
      ],
      "interviewAnswer": "Canary sends a small share of live traffic to the new model, blue/green switches between parallel environments, and shadow deployment mirrors traffic to a new model without using its outputs for users.",
      "keyPoints": [
        "Risk control",
        "Traffic split",
        "Rollback",
        "Online comparison"
      ],
      "resources": [
        "made-with-ml",
        "fsdl",
        "stanford-cs329s"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Deployment strategies"
        }
      ],
      "followUpQuestions": [
        "Canary vs blue/green?",
        "What does shadow deployment measure?",
        "What metrics gate rollout?",
        "How do database/schema changes complicate rollback?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "ci-cd-ml",
      "title": "CI/CD for ML",
      "module": "mlops",
      "priority": "high",
      "roles": [
        "mle"
      ],
      "interviewAnswer": "CI validates code, data contracts and model tests on change; CD automates safe packaging and deployment after gates. ML adds artifact/data/model validation beyond normal software tests.",
      "keyPoints": [
        "Unit/integration tests",
        "Model quality gate",
        "Container build",
        "Deployment automation"
      ],
      "resources": [
        "made-with-ml",
        "fsdl",
        "stanford-cs329s",
        "google-rules-ml"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "CI/CD for ML"
        }
      ],
      "followUpQuestions": [
        "What belongs in CI?",
        "How does ML CD differ from normal software?",
        "How do you promote a model?",
        "How do you handle data-only changes?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "docker-basics",
      "title": "Docker Images & Containers",
      "module": "cloud",
      "priority": "very-high",
      "roles": [
        "mle",
        "aie",
        "de"
      ],
      "interviewAnswer": "A Docker image is an immutable package containing application code, runtime and dependencies; a container is a running instance of that image. Containers make the inference environment portable and reproducible.",
      "keyPoints": [
        "Image vs container",
        "Dockerfile",
        "Layers",
        "Volumes/networking"
      ],
      "resources": [
        "docker",
        "aws-sagemaker",
        "azure-ml"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "Docker image to container"
        }
      ],
      "followUpQuestions": [
        "Where should a model checkpoint live?",
        "Docker Compose vs Kubernetes?",
        "How do GPU containers work?",
        "What is a registry?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "docker-ml",
      "title": "Dockerizing an ML Inference Service",
      "module": "cloud",
      "priority": "very-high",
      "roles": [
        "mle",
        "aie"
      ],
      "interviewAnswer": "Package preprocessing, inference code and dependencies in an image. The model checkpoint can be baked into the image for simplicity or loaded from object storage/volume when versioning and image size matter.",
      "keyPoints": [
        "Checkpoint strategy",
        "Entrypoint",
        "GPU runtime",
        "Health checks"
      ],
      "resources": [
        "docker",
        "fsdl",
        "aws-sagemaker",
        "azure-ml"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "Dockerizing an ML Inference Service"
        }
      ],
      "followUpQuestions": [
        "Image vs container?",
        "Should the checkpoint be inside the image?",
        "How do you persist data?",
        "How would this run on AWS?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "compose",
      "title": "Docker Compose",
      "module": "cloud",
      "priority": "high",
      "roles": [
        "mle",
        "de",
        "aie"
      ],
      "interviewAnswer": "Compose defines a multi-container application—such as API, database, Kafka, Redis and workers—in one declarative file. Multiple containers may reuse the same image with different commands.",
      "keyPoints": [
        "Services",
        "Networks",
        "Volumes",
        "Depends_on is not readiness"
      ],
      "resources": [
        "docker",
        "aws-sagemaker",
        "azure-ml"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "network",
          "title": "Docker Compose services"
        }
      ],
      "followUpQuestions": [
        "Image vs container?",
        "Compose vs Kubernetes?",
        "How services communicate?",
        "What are volumes?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "kubernetes-basics",
      "title": "Kubernetes for ML Services",
      "module": "cloud",
      "priority": "medium",
      "roles": [
        "mle",
        "aie"
      ],
      "interviewAnswer": "Kubernetes schedules containers across a cluster and provides deployments, services, scaling and rolling updates. Use it when operational complexity and scale justify the platform overhead.",
      "keyPoints": [
        "Pod",
        "Deployment",
        "Service",
        "Autoscaling"
      ],
      "resources": [
        "kubernetes",
        "docker",
        "aws-sagemaker",
        "azure-ml"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "Kubernetes abstraction"
        }
      ],
      "followUpQuestions": [
        "Pod vs Deployment?",
        "Service vs Ingress?",
        "Readiness vs liveness?",
        "How do GPUs get scheduled?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "aws-ml-map",
      "title": "Cloud Primitives for Production ML",
      "module": "cloud",
      "priority": "very-high",
      "roles": [
        "mle",
        "aie"
      ],
      "interviewAnswer": "Cloud ML systems are easier to reason about by capability: object storage for data/artifacts, a container registry, scalable compute, managed training/serving, orchestration, observability, identity/networking and a model/metadata layer. AWS, Azure and GCP expose different products for these same architectural needs.",
      "keyPoints": [
        "Object storage",
        "Container registry",
        "Training/serving compute",
        "Observability & identity"
      ],
      "resources": [
        "aws-sagemaker",
        "aws-ml",
        "azure-ml",
        "gcp-vertex",
        "docker"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "schema",
          "title": "AWS ML platform map"
        }
      ],
      "followUpQuestions": [
        "When would you use managed ML serving versus Kubernetes/container compute?",
        "Where should model checkpoints and large artifacts live?",
        "How would you design rollback across providers?",
        "Which parts of the architecture should remain portable?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "azure-aws-map",
      "title": "Cross-Cloud Mapping: AWS, Azure & GCP",
      "module": "cloud",
      "priority": "high",
      "roles": [
        "mle",
        "de",
        "ds"
      ],
      "interviewAnswer": "Map cloud services by responsibility rather than forcing exact equivalents. S3, Azure Blob Storage and Google Cloud Storage all provide object storage; ECR, ACR and Artifact Registry store images/artifacts; SageMaker, Azure Machine Learning and Vertex AI cover overlapping managed ML lifecycle capabilities, while container, workflow and observability services differ in boundaries and semantics.",
      "keyPoints": [
        "Map capabilities, not brand names",
        "No exact one-to-one mapping",
        "Storage/compute/orchestration/observability/IAM",
        "Understand provider-specific semantics"
      ],
      "resources": [
        "azure-ml",
        "aws-ml",
        "aws-sagemaker",
        "gcp-vertex",
        "docker"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Azure ↔ AWS concept mapping"
        }
      ],
      "followUpQuestions": [
        "How would you map object storage and registries across the three clouds?",
        "When would you choose managed ML versus Kubernetes?",
        "What knowledge transfers across providers?",
        "What does not transfer cleanly?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "cloud-security",
      "title": "IAM, Secrets & Least Privilege",
      "module": "cloud",
      "priority": "high",
      "roles": [
        "mle",
        "aie",
        "de"
      ],
      "interviewAnswer": "Production services should receive only the permissions they need, with credentials kept in secret-management mechanisms rather than source code or images. Identity and network boundaries are part of ML system design.",
      "keyPoints": [
        "Least privilege",
        "Roles",
        "Secrets",
        "Auditability"
      ],
      "resources": [
        "aws-ml",
        "azure-ml",
        "docker",
        "aws-sagemaker"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Authentication vs authorization?",
        "Why workload roles over static keys?",
        "How do you store secrets?",
        "How would you secure a RAG system?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "system-design-framework",
      "title": "ML System Design Interview Framework",
      "module": "system-design",
      "priority": "very-high",
      "roles": [
        "mle",
        "aie",
        "ds"
      ],
      "interviewAnswer": "Start with product requirements and constraints, then define data, labels, metrics, baseline, training pipeline, serving path, storage, scale, monitoring, failure modes and iteration loop. Architecture should follow requirements—not precede them.",
      "keyPoints": [
        "Requirements first",
        "Offline + online metrics",
        "Training vs serving",
        "Reliability/cost"
      ],
      "resources": [
        "stanford-cs329s",
        "fsdl",
        "google-rules-ml"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "ML system design sequence"
        }
      ],
      "followUpQuestions": [
        "How would this change at 100× traffic?",
        "What if labels arrive a month later?",
        "How do you prevent training-serving skew?",
        "What is the cheapest simpler version?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "design-recommender",
      "title": "Design a Recommendation System",
      "module": "system-design",
      "priority": "high",
      "roles": [
        "mle",
        "ds"
      ],
      "interviewAnswer": "Clarify candidate generation, ranking objective, feedback signals, cold start, popularity bias and top-k evaluation. Often use a two-stage architecture: fast candidate retrieval followed by richer ranking.",
      "keyPoints": [
        "Candidate generation",
        "Ranking",
        "Cold start",
        "Bias/feedback loops"
      ],
      "resources": [
        "stanford-cs329s",
        "fsdl"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Recommender system"
        }
      ],
      "followUpQuestions": [
        "How do you handle cold start?",
        "Candidate generation vs ranking?",
        "What online metrics matter?",
        "How do you avoid popularity bias?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "design-rag",
      "title": "Design an Internal RAG Assistant",
      "module": "system-design",
      "priority": "very-high",
      "roles": [
        "aie",
        "mle"
      ],
      "interviewAnswer": "Define document sources and permissions, ingestion/chunking, embeddings and indexes, retrieval/reranking, prompt construction, citations, evaluation, latency/cost and monitoring. Security boundaries matter as much as answer quality.",
      "keyPoints": [
        "ACL-aware retrieval",
        "Freshness",
        "Reranking",
        "Evaluation"
      ],
      "resources": [
        "openai-cookbook",
        "langchain-academy",
        "stanford-cs329s",
        "fsdl",
        "paper-rag"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Production RAG"
        }
      ],
      "followUpQuestions": [
        "How do you choose chunk size?",
        "Dense vs hybrid retrieval?",
        "How do you enforce document permissions?",
        "How do you evaluate hallucinations?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "design-image-service",
      "title": "Design an Image Reconstruction Service",
      "module": "system-design",
      "priority": "high",
      "roles": [
        "mle",
        "cv"
      ],
      "interviewAnswer": "For heavy image/3D inference, prefer asynchronous job submission: upload input, validate, enqueue work, run GPU inference, store outputs, expose job status, and monitor latency/failures/quality.",
      "keyPoints": [
        "Async jobs",
        "Object storage",
        "GPU worker",
        "Result lifecycle"
      ],
      "resources": [
        "fsdl",
        "stanford-cs329s"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Image inference service"
        }
      ],
      "followUpQuestions": [
        "Batch vs real-time?",
        "How do you scale GPU workers?",
        "How do you handle failed jobs?",
        "Where do checkpoints live?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "design-fraud",
      "title": "Design a Rare-event Detection System",
      "module": "system-design",
      "priority": "high",
      "roles": [
        "ds",
        "mle"
      ],
      "interviewAnswer": "Clarify the cost of false negatives/positives, label delay, class imbalance and response-time requirement. Optimize the operating threshold around business risk and monitor drift plus delayed ground truth.",
      "keyPoints": [
        "Rare positives",
        "PR metrics",
        "Threshold",
        "Delayed labels"
      ],
      "resources": [
        "stanford-cs329s",
        "made-with-ml",
        "fsdl"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Fraud detection system"
        }
      ],
      "followUpQuestions": [
        "Which metrics?",
        "How choose threshold?",
        "How handle delayed labels?",
        "What if model service is down?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "latency-throughput",
      "title": "Latency, Throughput & Cost Trade-offs",
      "module": "system-design",
      "priority": "very-high",
      "roles": [
        "mle",
        "aie"
      ],
      "interviewAnswer": "Latency is time per request; throughput is work per unit time. Batching usually improves throughput/GPU utilization but can increase individual-request latency, so tune around the product SLO and cost.",
      "keyPoints": [
        "p50/p95/p99",
        "Batching",
        "Concurrency",
        "SLO"
      ],
      "resources": [
        "fsdl",
        "stanford-cs329s"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "Latency, Throughput & Cost Trade-offs"
        }
      ],
      "followUpQuestions": [
        "p95 vs average latency?",
        "Why does batching help GPUs?",
        "How do you choose an autoscaling signal?",
        "What is the cost/latency trade-off of larger models?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "failure-modes",
      "title": "Failure Modes & Graceful Degradation",
      "module": "system-design",
      "priority": "high",
      "roles": [
        "mle",
        "aie"
      ],
      "interviewAnswer": "Design what happens when the model, dependency or input fails: validate early, use timeouts/retries carefully, support fallback behavior, isolate failures and keep enough observability to diagnose them.",
      "keyPoints": [
        "Timeouts",
        "Retries/idempotency",
        "Fallback",
        "Circuit-breaker intuition"
      ],
      "resources": [
        "stanford-cs329s",
        "fsdl",
        "google-rules-ml"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What should be retried?",
        "What is idempotency?",
        "What is a circuit breaker?",
        "How do you fail safely in a safety-critical model?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "case-cv-reconstruction",
      "title": "Case Study: Scientific 3D Reconstruction / Super-resolution",
      "module": "project-defense",
      "priority": "high",
      "roles": [
        "cv",
        "mle"
      ],
      "interviewAnswer": "Lead with the physical problem and downstream use, then explain the 2D/3D constraint, model stages, interpolation/fusion, your contribution and validation. Be explicit about hallucination risk and what the domain expert validated.",
      "keyPoints": [
        "Problem before architecture",
        "Why each stage exists",
        "Own contribution",
        "Domain validation"
      ],
      "resources": [
        "stanford-cs231n",
        "fsdl",
        "stanford-cs329s",
        "paper-cyclegan"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Scientific 3D reconstruction case"
        }
      ],
      "followUpQuestions": [
        "When would you prefer a 2D model to a 3D model?",
        "How would you quantify uncertainty in reconstructed regions?",
        "Which image metrics can disagree with downstream scientific validity?",
        "How would you productionize a large-volume reconstruction pipeline?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "case-gnn-reviewer",
      "title": "Case Study: Graph-based Matching & Recommendation",
      "module": "project-defense",
      "priority": "high",
      "roles": [
        "mle",
        "ds"
      ],
      "interviewAnswer": "Explain why the problem is naturally a graph, how semantic PR features enter the graph, why an inductive GNN helps new PRs, how link prediction/ranking is evaluated and how popularity bias is handled.",
      "keyPoints": [
        "Graph construction",
        "GraphSAGE",
        "Code embeddings",
        "Recall@K"
      ],
      "resources": [
        "stanford-cs329s"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "network",
          "title": "Reviewer recommendation graph"
        }
      ],
      "followUpQuestions": [
        "Why use a graph instead of only content embeddings?",
        "How would you create negative samples?",
        "How would you handle unseen users/items?",
        "How would you separate candidate generation from ranking?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "case-streaming",
      "title": "Case Study: Real-time Streaming Application",
      "module": "project-defense",
      "priority": "high",
      "roles": [
        "de",
        "mle"
      ],
      "interviewAnswer": "Describe event source → Kafka → stream processor → storage/cache/API → UI. Explain why streaming was needed, what each component owns, how containers communicate and where failures are observed.",
      "keyPoints": [
        "Kafka vs Flink roles",
        "State",
        "Containers",
        "End-to-end data flow"
      ],
      "resources": [
        "confluent-kafka",
        "flink",
        "docker",
        "stanford-cs329s"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Streaming monitoring case"
        }
      ],
      "followUpQuestions": [
        "Why Kafka instead of direct API calls?",
        "Why Flink?",
        "What happens when the consumer crashes?",
        "Why Redis?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "case-llm-copilot",
      "title": "Case Study: LLM Copilot with Tools + RAG",
      "module": "project-defense",
      "priority": "high",
      "roles": [
        "aie"
      ],
      "interviewAnswer": "Keep numerical/business logic deterministic in tools, use the LLM for orchestration and explanation, use RAG only for unstructured knowledge, and evaluate tool correctness separately from language quality.",
      "keyPoints": [
        "Tool calling",
        "RAG boundary",
        "Agent state",
        "Reliability"
      ],
      "resources": [
        "langchain-academy",
        "openai-cookbook",
        "hf-agents",
        "stanford-cs329s"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "LLM copilot case"
        }
      ],
      "followUpQuestions": [
        "Why tool calling instead of pure prompting?",
        "How would you evaluate RAG?",
        "Why a vector database?",
        "What does MCP add?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "time-series-split",
      "title": "Time-Series Splits & Backtesting",
      "module": "time-series",
      "priority": "very-high",
      "roles": [
        "ds",
        "mle",
        "da",
        "as"
      ],
      "interviewAnswer": "Random train/test splitting is usually wrong for forecasting because it leaks the future into the past. I split chronologically and evaluate with rolling or expanding-window backtests that mimic how the model will actually be used.",
      "keyPoints": [
        "chronological split",
        "rolling/expanding windows",
        "no future leakage",
        "match deployment horizon"
      ],
      "resources": [
        "fpp3",
        "fpppy",
        "statsmodels-tsa"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Backtest without future leakage using expanding windows.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Rolling-origin validation"
        }
      ],
      "followUpQuestions": [
        "When is random splitting acceptable for temporal data?",
        "How do you choose expanding vs sliding windows?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "stationarity-acf",
      "title": "Stationarity, ACF & PACF",
      "module": "time-series",
      "priority": "high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "Stationarity means the statistical behavior of a series is stable enough over time for many classical models to learn consistent relationships. I inspect trend/seasonality and autocorrelation; differencing or transformation can help when the level is non-stationary.",
      "keyPoints": [
        "weak stationarity",
        "autocorrelation",
        "ACF/PACF",
        "differencing"
      ],
      "resources": [
        "fpp3",
        "statsmodels-tsa"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "bars",
          "title": "Autocorrelation by lag"
        }
      ],
      "followUpQuestions": [
        "What does an ACF spike at a seasonal lag mean?",
        "What is over-differencing?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "arima",
      "title": "ARIMA / SARIMA",
      "module": "time-series",
      "priority": "high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "ARIMA combines autoregression, differencing and moving-average error terms. The p,d,q orders control lagged values, differencing and lagged forecast errors; SARIMA adds seasonal equivalents. I use it as a strong interpretable baseline when temporal dependence is meaningful.",
      "keyPoints": [
        "AR(p)",
        "I(d)",
        "MA(q)",
        "seasonal extension"
      ],
      "resources": [
        "fpp3",
        "fpppy",
        "statsmodels-tsa"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Fit an ARIMA baseline and inspect forecasts/residuals.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "ARIMA reasoning"
        }
      ],
      "followUpQuestions": [
        "What is the difference between AR and MA?",
        "Why can a seasonal naive baseline beat ARIMA?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "exponential-smoothing",
      "title": "Exponential Smoothing / ETS",
      "module": "time-series",
      "priority": "medium",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "Exponential smoothing builds forecasts from recursively updated level, trend and seasonality components, giving more weight to recent observations. ETS models are excellent business-forecasting baselines, especially when patterns are smooth and recurring.",
      "keyPoints": [
        "level",
        "trend",
        "seasonality",
        "recent observations weighted more"
      ],
      "resources": [
        "fpp3",
        "fpppy",
        "statsmodels-tsa"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Fit an ETS-style trend/seasonal forecast.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Exponential smoothing intuition"
        }
      ],
      "followUpQuestions": [
        "Holt vs Holt-Winters?",
        "Additive vs multiplicative seasonality?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "forecasting-metrics",
      "title": "Forecasting Metrics & Baselines",
      "module": "time-series",
      "priority": "very-high",
      "roles": [
        "ds",
        "mle",
        "da",
        "as"
      ],
      "interviewAnswer": "For forecasts I choose metrics based on business cost and scale. MAE is easy to interpret, RMSE emphasizes large misses, MAPE can break near zero, and scaled metrics like MASE help compare across series. I always compare against naive and seasonal-naive baselines.",
      "keyPoints": [
        "MAE/RMSE",
        "MAPE caveat",
        "MASE",
        "naive baseline"
      ],
      "resources": [
        "fpp3",
        "fpppy",
        "statquest"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "Forecasting Metrics & Baselines"
        }
      ],
      "followUpQuestions": [
        "When would you use pinball loss?",
        "What baseline would you use for seasonal demand?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "prophet",
      "title": "Prophet & Decomposable Forecasting",
      "module": "time-series",
      "priority": "medium",
      "roles": [
        "ds",
        "mle",
        "da",
        "as"
      ],
      "interviewAnswer": "Prophet models a series as trend plus seasonality plus holiday/event effects. I use it when those components match the problem and fast, interpretable forecasting matters, but I still compare it with simpler and stronger baselines rather than treating it as universally best.",
      "keyPoints": [
        "trend",
        "seasonality",
        "holidays/events",
        "diagnostics"
      ],
      "resources": [
        "prophet-docs",
        "fpppy"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "When would XGBoost beat Prophet?",
        "How would you add promotions or holidays?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "causal-inference",
      "title": "Causal Inference vs Prediction",
      "module": "causal",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Prediction asks what will happen; causal inference asks what would happen if we intervene. A predictive feature can be highly correlated with an outcome without being a valid lever. Causal answers require assumptions about treatment assignment, confounding and counterfactuals.",
      "keyPoints": [
        "prediction ≠ causation",
        "treatment/outcome",
        "counterfactual",
        "identification assumptions"
      ],
      "resources": [
        "causal-neal",
        "causal-mixtape"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Simulate confounding to show prediction is not intervention.",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Why does randomization help causal inference?",
        "What is a confounder?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "dag-confounding",
      "title": "DAGs, Confounders & Colliders",
      "module": "causal",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "A causal DAG encodes assumptions about which variables cause which others. A confounder causes both treatment and outcome and often needs adjustment; a collider is caused by two variables and conditioning on it can create a spurious association.",
      "keyPoints": [
        "DAG",
        "confounder",
        "collider",
        "backdoor paths"
      ],
      "resources": [
        "causal-neal",
        "causal-mixtape"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "network",
          "title": "Confounder vs collider"
        }
      ],
      "followUpQuestions": [
        "What is a backdoor path?",
        "Can DAG structure be learned reliably from data alone?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "profiling-benchmarking",
      "title": "Profiling & Benchmarking ML Systems",
      "module": "performance",
      "priority": "very-high",
      "roles": [
        "mle",
        "aie",
        "cv"
      ],
      "interviewAnswer": "I optimize only after measuring. I separate data loading, preprocessing, host-to-device transfer, model execution and postprocessing; warm up GPU kernels, synchronize correctly, and report latency distributions plus throughput rather than one timing number.",
      "keyPoints": [
        "profile first",
        "warmup",
        "GPU synchronization",
        "p50/p95/p99 + throughput"
      ],
      "resources": [
        "pytorch-performance",
        "tensorrt-performance",
        "fsdl"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Performance workflow"
        }
      ],
      "followUpQuestions": [
        "How do throughput and latency conflict?",
        "What would you profile in a RAG pipeline?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "mixed-precision",
      "title": "Mixed Precision: FP32, FP16 & BF16",
      "module": "performance",
      "priority": "high",
      "roles": [
        "mle",
        "aie",
        "cv"
      ],
      "interviewAnswer": "Mixed precision runs many expensive operations in FP16 or BF16 while keeping numerically sensitive parts at higher precision. It reduces memory bandwidth and often increases GPU throughput; BF16 has a wider exponent range, while FP16 may need loss scaling during training.",
      "keyPoints": [
        "memory bandwidth",
        "tensor cores",
        "FP16 loss scaling",
        "BF16 range"
      ],
      "resources": [
        "pytorch-performance",
        "pytorch"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Use PyTorch autocast safely for inference and verify output shape/finite values.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Precision trade-off"
        }
      ],
      "followUpQuestions": [
        "Why can BF16 train without loss scaling more often?",
        "Would you use mixed precision for CPU inference?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "quantization-inference",
      "title": "Quantization for Inference",
      "module": "performance",
      "priority": "very-high",
      "roles": [
        "mle",
        "aie"
      ],
      "interviewAnswer": "Quantization represents weights and sometimes activations with fewer bits—such as INT8 or 4-bit—to reduce memory, bandwidth and often latency. Post-training quantization is simpler; quantization-aware training can preserve quality when aggressive quantization hurts accuracy.",
      "keyPoints": [
        "PTQ",
        "QAT",
        "weight-only vs activation",
        "calibration"
      ],
      "resources": [
        "hf-inference-opt",
        "pytorch-performance"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Compare dynamic INT8 quantization with the FP32 module on CPU.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Post-training quantization"
        }
      ],
      "followUpQuestions": [
        "PTQ vs QAT?",
        "Why might INT8 be slower on unsupported hardware?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "pruning-distillation",
      "title": "Pruning & Knowledge Distillation",
      "module": "performance",
      "priority": "medium",
      "roles": [
        "mle",
        "aie"
      ],
      "interviewAnswer": "Pruning removes low-value parameters or structure; distillation trains a smaller student to mimic a larger teacher. Both can reduce serving cost, but structured pruning usually maps to hardware better than arbitrary sparsity, and distillation quality depends on the teacher targets and task.",
      "keyPoints": [
        "unstructured vs structured pruning",
        "teacher/student",
        "soft targets",
        "hardware-aware speedup"
      ],
      "resources": [
        "pytorch-performance",
        "deep-learning-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What is temperature in distillation?",
        "When is pruning preferable to quantization?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "batching-throughput",
      "title": "Batching, Queueing & Throughput",
      "module": "performance",
      "priority": "very-high",
      "roles": [
        "mle",
        "aie"
      ],
      "interviewAnswer": "Batching amortizes fixed overhead and improves accelerator utilization, so throughput rises, but waiting to form batches can increase latency. I choose static, dynamic or continuous batching based on SLA, traffic pattern and model shape.",
      "keyPoints": [
        "batch size",
        "latency-throughput trade-off",
        "dynamic batching",
        "queueing"
      ],
      "resources": [
        "hf-inference-opt",
        "fsdl"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Batch size trade-off"
        }
      ],
      "followUpQuestions": [
        "What is continuous batching?",
        "How would you design admission control?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "distributed-training",
      "title": "Distributed Training: Data & Model Parallelism",
      "module": "performance",
      "priority": "high",
      "roles": [
        "mle",
        "aie"
      ],
      "interviewAnswer": "Data parallelism replicates the model and splits batches across workers, synchronizing gradients. Model/tensor/pipeline parallelism splits the model when it no longer fits on one device. The right strategy depends on memory, communication cost and model size.",
      "keyPoints": [
        "DDP",
        "all-reduce",
        "tensor/model parallel",
        "pipeline parallel"
      ],
      "resources": [
        "pytorch-performance",
        "pytorch"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "DDP vs FSDP?",
        "When do you need tensor parallelism?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "model-compilation",
      "title": "Model Compilation: torch.compile, ONNX & TensorRT",
      "module": "performance",
      "priority": "medium",
      "roles": [
        "mle",
        "aie",
        "cv"
      ],
      "interviewAnswer": "Model compilation captures/lowers computation into optimized kernels or runtimes. torch.compile optimizes PyTorch graphs; ONNX enables portable graph runtimes; TensorRT targets NVIDIA inference. I use them only after profiling and verifying numerical/shape compatibility.",
      "keyPoints": [
        "graph capture",
        "kernel fusion",
        "portable runtime",
        "hardware-specific optimization"
      ],
      "resources": [
        "pytorch-performance",
        "tensorrt-performance"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What is a graph break?",
        "When would you choose ONNX Runtime over TensorRT?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "gpu-memory",
      "title": "GPU Memory: Parameters, Activations & KV Cache",
      "module": "performance",
      "priority": "high",
      "roles": [
        "mle",
        "aie",
        "cv"
      ],
      "interviewAnswer": "GPU memory is consumed by parameters, activations, gradients, optimizer states and temporary workspaces; LLM inference also spends heavily on KV cache. I estimate which term dominates before deciding between smaller batches, checkpointing, quantization or sharding.",
      "keyPoints": [
        "weights",
        "activations",
        "optimizer states",
        "KV cache"
      ],
      "resources": [
        "pytorch-performance",
        "hf-inference-opt"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "GPU memory budget"
        }
      ],
      "followUpQuestions": [
        "What does activation checkpointing trade?",
        "Why does long-context LLM serving consume so much memory?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "responsible-ai",
      "title": "Responsible AI: Risk, Impact & Governance",
      "module": "ai-safety",
      "priority": "high",
      "roles": [
        "ds",
        "mle",
        "aie"
      ],
      "interviewAnswer": "Responsible AI means identifying who can be harmed, how failures are measured, what human oversight exists, and how risks are monitored throughout the lifecycle. I treat it as an engineering requirement, not a final compliance checklist.",
      "keyPoints": [
        "stakeholders",
        "risk assessment",
        "human oversight",
        "lifecycle monitoring"
      ],
      "resources": [
        "nist-ai-rmf",
        "google-rules-ml"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What belongs in a model card?",
        "When should a human stay in the loop?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "bias-fairness",
      "title": "Bias & Fairness in ML",
      "module": "ai-safety",
      "priority": "high",
      "roles": [
        "ds",
        "mle",
        "aie"
      ],
      "interviewAnswer": "Bias can enter through sampling, labels, features, historical decisions or deployment feedback. Fairness has multiple incompatible definitions, so I first identify the affected groups and harm, then choose metrics/interventions aligned with the use case.",
      "keyPoints": [
        "data/label bias",
        "subgroup metrics",
        "fairness definitions",
        "feedback loops"
      ],
      "resources": [
        "nist-ai-rmf",
        "isl"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Why can fairness metrics conflict?",
        "How would you audit subgroup performance?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "privacy-pii",
      "title": "Privacy, PII & Data Minimization",
      "module": "ai-safety",
      "priority": "very-high",
      "roles": [
        "mle",
        "aie",
        "de"
      ],
      "interviewAnswer": "I minimize sensitive data, define purpose and retention, restrict access, encrypt data in transit/at rest, and avoid sending PII to models or logs unless explicitly required and governed. Privacy starts in architecture, not with masking at the end.",
      "keyPoints": [
        "data minimization",
        "PII",
        "retention",
        "access control"
      ],
      "resources": [
        "owasp-llm",
        "nist-ai-rmf"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "Privacy, PII & Data Minimization"
        }
      ],
      "followUpQuestions": [
        "How do you implement right-to-delete in a vector store?",
        "Where can PII leak in an LLM pipeline?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "prompt-injection",
      "title": "Prompt Injection & Tool Abuse",
      "module": "ai-safety",
      "priority": "very-high",
      "roles": [
        "aie",
        "mle"
      ],
      "interviewAnswer": "Prompt injection is when untrusted content manipulates the model into ignoring intended instructions or misusing tools. I assume model instructions are not a security boundary: constrain tools with permissions, validate arguments, separate trusted/untrusted data and require confirmation for sensitive actions.",
      "keyPoints": [
        "untrusted instructions",
        "least privilege",
        "tool validation",
        "human confirmation"
      ],
      "resources": [
        "owasp-llm",
        "mitre-atlas"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Demonstrate the security boundary: validate tool calls outside the LLM.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Prompt-injection attack path"
        }
      ],
      "followUpQuestions": [
        "Direct vs indirect prompt injection?",
        "How do you secure tool calling?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "rag-security",
      "title": "RAG Security & Access Control",
      "module": "ai-safety",
      "priority": "high",
      "roles": [
        "aie",
        "mle"
      ],
      "interviewAnswer": "RAG security requires authorization-aware ingestion and retrieval, not only good prompts. I preserve document permissions as metadata, filter before retrieval, isolate tenants, sanitize untrusted content and test for indirect prompt injection and data exfiltration.",
      "keyPoints": [
        "ACL-aware retrieval",
        "tenant isolation",
        "indirect injection",
        "source provenance"
      ],
      "resources": [
        "owasp-llm",
        "mitre-atlas"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "RAG security layers"
        }
      ],
      "followUpQuestions": [
        "Can embeddings leak information?",
        "Where should authorization happen in RAG?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "model-supply-chain",
      "title": "Model & Dependency Supply-Chain Security",
      "module": "ai-safety",
      "priority": "medium",
      "roles": [
        "mle",
        "aie"
      ],
      "interviewAnswer": "Model artifacts, packages, containers and datasets are executable/trusted inputs to an AI system. I pin and scan dependencies, verify model provenance/checksums, avoid unsafe deserialization, use trusted registries and keep an SBOM where appropriate.",
      "keyPoints": [
        "provenance",
        "dependency pinning",
        "unsafe serialization",
        "trusted registries"
      ],
      "resources": [
        "owasp-llm",
        "mitre-atlas",
        "docker"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What is an SBOM?",
        "How would you verify a model artifact?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "red-teaming-ai",
      "title": "AI Red Teaming & Adversarial Testing",
      "module": "ai-safety",
      "priority": "medium",
      "roles": [
        "aie",
        "mle"
      ],
      "interviewAnswer": "Red teaming deliberately searches for failure modes outside normal test cases: prompt injection, harmful outputs, data leakage, jailbreaks, tool misuse and robustness failures. I convert discovered attacks into repeatable regression tests.",
      "keyPoints": [
        "threat model",
        "adversarial testing",
        "attack library",
        "regression suite"
      ],
      "resources": [
        "mitre-atlas",
        "owasp-llm"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "How is red teaming different from normal evaluation?",
        "How do you prioritize discovered issues?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "guardrails-observability",
      "title": "Guardrails, Policy Checks & AI Observability",
      "module": "ai-safety",
      "priority": "high",
      "roles": [
        "aie",
        "mle"
      ],
      "interviewAnswer": "Guardrails are deterministic or model-assisted checks around an AI system: input validation, output schemas, policy classifiers, tool permissions, rate limits and human approval. Observability records traces, retrieval/tool calls, latency, cost and safety events so failures can be diagnosed.",
      "keyPoints": [
        "defense in depth",
        "structured output",
        "tracing",
        "policy events"
      ],
      "resources": [
        "owasp-llm",
        "nist-ai-rmf",
        "fsdl"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Where should guardrails live?",
        "What would you trace in a RAG agent?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "human-in-loop",
      "title": "Human-in-the-Loop & Safe Fallbacks",
      "module": "ai-safety",
      "priority": "medium",
      "roles": [
        "ds",
        "mle",
        "aie"
      ],
      "interviewAnswer": "Human-in-the-loop is useful when errors are costly, uncertainty can be detected and a qualified reviewer can actually improve decisions. I define escalation thresholds, what context the human sees, and a safe fallback when the model or reviewer is unavailable.",
      "keyPoints": [
        "escalation",
        "uncertainty",
        "review UX",
        "safe fallback"
      ],
      "resources": [
        "nist-ai-rmf",
        "google-rules-ml"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Human-in-the-loop decision"
        }
      ],
      "followUpQuestions": [
        "How do you choose an escalation threshold?",
        "What is automation bias?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "rl-fundamentals",
      "title": "RL Fundamentals: Agent, Environment, State, Action & Reward",
      "module": "rl",
      "priority": "high",
      "roles": [
        "aie",
        "mle",
        "ds",
        "as"
      ],
      "interviewAnswer": "Reinforcement learning is sequential decision-making by interaction. An agent observes a state, chooses an action using a policy, receives a reward and transitions to a new state. The objective is not immediate reward alone, but maximizing expected cumulative return over time.",
      "keyPoints": [
        "agent ↔ environment loop",
        "policy π(a|s)",
        "reward vs return",
        "sequential credit assignment"
      ],
      "resources": [
        "stanford-cs234",
        "deepmind-rl-youtube",
        "hf-deep-rl"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Agent–environment loop"
        }
      ],
      "followUpQuestions": [
        "What makes a process Markov?",
        "Reward vs return?",
        "What is the exploration–exploitation trade-off?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "value-bellman",
      "title": "Value Functions & the Bellman Equation",
      "module": "rl",
      "priority": "high",
      "roles": [
        "aie",
        "mle",
        "as"
      ],
      "interviewAnswer": "A value function estimates expected future return. V(s) values a state under a policy; Q(s,a) values taking an action in a state and then following the policy. The Bellman equation expresses a value recursively as immediate reward plus discounted expected value of the next state.",
      "keyPoints": [
        "V(s)",
        "Q(s,a)",
        "recursive decomposition",
        "Bellman expectation / optimality"
      ],
      "resources": [
        "stanford-cs234",
        "deepmind-rl-youtube",
        "openai-spinning-up"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Bellman backup"
        }
      ],
      "followUpQuestions": [
        "What is bootstrapping?",
        "Bellman expectation vs Bellman optimality?",
        "Why can Q-learning be off-policy?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "exploration-exploitation",
      "title": "Exploration vs Exploitation",
      "module": "rl",
      "priority": "high",
      "roles": [
        "aie",
        "mle",
        "ds",
        "as"
      ],
      "interviewAnswer": "Exploitation chooses actions that currently look best; exploration tries uncertain actions to learn whether something better exists. RL needs a balance because pure exploitation can lock into a suboptimal policy, while excessive exploration wastes reward or can be unsafe.",
      "keyPoints": [
        "uncertainty",
        "ε-greedy",
        "optimism / entropy",
        "safe exploration"
      ],
      "resources": [
        "stanford-cs234",
        "hf-deep-rl"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Exploration vs exploitation"
        }
      ],
      "followUpQuestions": [
        "How would you decay ε?",
        "How is exploration handled in continuous-action problems?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "q-learning-dqn",
      "title": "Q-learning & Deep Q-Networks",
      "module": "rl",
      "priority": "high",
      "roles": [
        "aie",
        "mle",
        "as"
      ],
      "interviewAnswer": "Q-learning learns the action-value function using the target r + γ max Q(s′,a′), so it can learn the greedy optimal policy from off-policy experience. DQN replaces a tabular Q-function with a neural network and stabilizes training using experience replay and a target network.",
      "keyPoints": [
        "off-policy TD learning",
        "max-Q target",
        "experience replay",
        "target network"
      ],
      "resources": [
        "stanford-cs234",
        "hf-deep-rl",
        "berkeley-cs285"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Implement a tiny tabular Q-learning loop, then compare it with a compact library-style API.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Q-learning update"
        }
      ],
      "followUpQuestions": [
        "Why can max-Q be overestimated?",
        "What is Double DQN?",
        "Why is replay awkward for strongly non-stationary policies?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "policy-gradients",
      "title": "Policy Gradients",
      "module": "rl",
      "priority": "high",
      "roles": [
        "aie",
        "mle",
        "as"
      ],
      "interviewAnswer": "Policy-gradient methods optimize policy parameters directly. REINFORCE increases the log-probability of actions that produced high return and decreases it for poor return. This handles stochastic and continuous policies naturally, but raw Monte Carlo gradients can have high variance.",
      "keyPoints": [
        "direct policy optimization",
        "log-probability trick",
        "return-weighted gradient",
        "high variance"
      ],
      "resources": [
        "berkeley-cs285",
        "hf-deep-rl",
        "openai-spinning-up"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Implement REINFORCE for a two-armed stochastic bandit with a softmax policy.",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Why subtract a baseline?",
        "Policy gradient vs Q-learning?",
        "What is an advantage function?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "actor-critic",
      "title": "Actor-Critic & Advantage Estimation",
      "module": "rl",
      "priority": "high",
      "roles": [
        "aie",
        "mle",
        "as"
      ],
      "interviewAnswer": "Actor-critic combines a policy model—the actor—with a value model—the critic. The critic estimates how good the current state/action is, and the actor updates using an advantage signal, which reduces the high variance of pure Monte Carlo policy gradients.",
      "keyPoints": [
        "actor = policy",
        "critic = value estimate",
        "advantage",
        "bias–variance trade-off"
      ],
      "resources": [
        "berkeley-cs285",
        "hf-deep-rl",
        "openai-spinning-up"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Actor–critic"
        }
      ],
      "followUpQuestions": [
        "What is GAE?",
        "Why can a poor critic destabilize learning?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "ppo",
      "title": "PPO & Stable Policy Optimization",
      "module": "rl",
      "priority": "high",
      "roles": [
        "aie",
        "mle",
        "as"
      ],
      "interviewAnswer": "PPO is an on-policy actor-critic algorithm that limits how aggressively the policy changes. It uses a probability-ratio objective with clipping, so updates that move too far from the data-collecting policy stop receiving extra benefit. That usually makes policy optimization more stable and practical.",
      "keyPoints": [
        "on-policy",
        "probability ratio",
        "clipped surrogate objective",
        "KL / entropy monitoring"
      ],
      "resources": [
        "berkeley-cs285",
        "hf-deep-rl",
        "openai-spinning-up"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "PPO update"
        }
      ],
      "followUpQuestions": [
        "Why is PPO on-policy?",
        "What is the role of entropy bonus?",
        "PPO vs DPO in LLM alignment?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "rlhf-preference",
      "title": "RLHF, Reward Models & Preference Optimization",
      "module": "rl",
      "priority": "high",
      "roles": [
        "aie",
        "mle",
        "as"
      ],
      "interviewAnswer": "RLHF usually starts with supervised instruction tuning, then learns a preference or reward signal from human comparisons and optimizes the policy against that signal while constraining drift from a reference model. PPO is one optimization route; DPO is different—it directly optimizes preference likelihood without explicitly training a reward model and running online RL.",
      "keyPoints": [
        "SFT → preferences → alignment",
        "reward model",
        "reference/KL constraint",
        "PPO vs DPO"
      ],
      "resources": [
        "stanford-cs234",
        "berkeley-cs285",
        "openai-spinning-up"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Preference optimization pipeline"
        }
      ],
      "followUpQuestions": [
        "Why include a reference-model KL penalty?",
        "What are reward hacking and preference-model bias?",
        "SFT vs RLHF?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "multimodal-fundamentals",
      "title": "Multimodal AI Fundamentals & Fusion",
      "module": "multimodal",
      "priority": "high",
      "roles": [
        "aie",
        "mle",
        "cv",
        "as"
      ],
      "interviewAnswer": "Multimodal models combine information from different modalities such as text, images, audio or video. The core problems are representation, alignment and fusion: encode each modality, place or project representations into a compatible space, and let the model combine them for prediction or generation.",
      "keyPoints": [
        "representation",
        "alignment",
        "fusion",
        "modality imbalance"
      ],
      "resources": [
        "hf-vlm-course",
        "hf-multimodal-transformers"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Early vs late fusion?",
        "How do you handle missing modalities?",
        "What is cross-attention?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "clip-contrastive",
      "title": "CLIP & Contrastive Image–Text Alignment",
      "module": "multimodal",
      "priority": "high",
      "roles": [
        "aie",
        "mle",
        "cv",
        "as"
      ],
      "interviewAnswer": "CLIP trains an image encoder and text encoder so matched image-caption pairs have high cosine similarity and mismatched pairs have lower similarity. A contrastive loss over a batch creates a shared embedding space, which enables zero-shot classification and cross-modal retrieval.",
      "keyPoints": [
        "dual encoders",
        "normalized embeddings",
        "contrastive logits",
        "zero-shot transfer"
      ],
      "resources": [
        "clip-paper",
        "hf-vlm-course",
        "stanford-cs25"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Build the core CLIP contrastive similarity matrix and verify matched pairs score highest.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "network",
          "title": "CLIP contrastive learning"
        }
      ],
      "followUpQuestions": [
        "Why normalize embeddings?",
        "What does temperature do?",
        "CLIP vs cross-encoder?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "vlm-architecture",
      "title": "Vision-Language Model Architecture: Encoder, Projector & LLM",
      "module": "multimodal",
      "priority": "high",
      "roles": [
        "aie",
        "mle",
        "cv",
        "as"
      ],
      "interviewAnswer": "A common VLM architecture uses a pretrained vision encoder to turn an image into visual features, a projector or resampler to map those features into the language model’s embedding space, and an LLM that attends to the resulting visual tokens together with text tokens to generate an answer.",
      "keyPoints": [
        "vision encoder",
        "projector/resampler",
        "visual tokens",
        "LLM decoder"
      ],
      "resources": [
        "llava-paper",
        "hf-vlm-course",
        "hf-multimodal-transformers"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Vision-language model"
        }
      ],
      "followUpQuestions": [
        "Linear projector vs Q-Former/resampler?",
        "Where do visual positional features come from?",
        "How does VLM inference affect KV-cache cost?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "visual-instruction-tuning",
      "title": "Visual Instruction Tuning & LLaVA",
      "module": "multimodal",
      "priority": "high",
      "roles": [
        "aie",
        "mle",
        "cv",
        "as"
      ],
      "interviewAnswer": "Visual instruction tuning adapts a vision-language model to follow natural-language instructions grounded in images. LLaVA is a classic example: it connects a CLIP vision encoder to an LLM through a projector and trains on image-instruction-response data so the model learns conversational visual reasoning.",
      "keyPoints": [
        "image + instruction + response",
        "projector alignment",
        "instruction tuning",
        "grounded generation"
      ],
      "resources": [
        "llava-paper",
        "hf-vlm-course"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What parameters would you freeze first?",
        "How would you build multimodal instruction data?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "multimodal-tokenization",
      "title": "Multimodal Tokenization, Patches & Resamplers",
      "module": "multimodal",
      "priority": "medium",
      "roles": [
        "aie",
        "mle",
        "cv",
        "as"
      ],
      "interviewAnswer": "Text becomes discrete tokens, while images are usually represented as patches or learned visual features. A multimodal model must convert those features into a manageable token sequence—often through patch embeddings, pooling, learned queries, a Q-Former or a Perceiver-style resampler—before the language model consumes them.",
      "keyPoints": [
        "image patches",
        "visual feature tokens",
        "token compression",
        "projector/resampler"
      ],
      "resources": [
        "hf-vlm-course",
        "hf-multimodal-transformers"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Why use a Perceiver Resampler?",
        "How would you handle high-resolution documents?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "multimodal-evaluation",
      "title": "Multimodal Evaluation & Visual Hallucination",
      "module": "multimodal",
      "priority": "high",
      "roles": [
        "aie",
        "mle",
        "cv",
        "as"
      ],
      "interviewAnswer": "Multimodal evaluation should test whether the answer is actually grounded in the image, not only whether the text is fluent. I evaluate task accuracy plus grounding/OCR/counting/spatial reasoning slices, hallucination rates and robustness to irrelevant or missing visual information.",
      "keyPoints": [
        "grounding",
        "task-specific slices",
        "visual hallucination",
        "modality ablations"
      ],
      "resources": [
        "hf-vlm-course",
        "llava-paper"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "How would you detect text-only shortcutting?",
        "How do you evaluate OCR-heavy VLMs?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "speech-audio-transformers",
      "title": "Speech & Audio Transformers: Spectrograms and ASR",
      "module": "speech",
      "priority": "medium",
      "roles": [
        "aie",
        "mle",
        "as"
      ],
      "interviewAnswer": "Audio models typically convert a waveform into time-frequency features such as log-Mel spectrograms, then use an encoder or encoder-decoder model to classify audio or generate text. Whisper is a well-known transformer encoder-decoder trained for multilingual speech recognition, translation and language identification.",
      "keyPoints": [
        "waveform → spectrogram",
        "temporal sequence",
        "encoder / encoder-decoder",
        "ASR"
      ],
      "resources": [
        "whisper-paper",
        "whisper-github",
        "hf-multimodal-transformers"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What is WER?",
        "CTC vs encoder-decoder ASR?",
        "How would you stream inference?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "big-o",
      "title": "Big-O Time & Space Complexity",
      "module": "dsa",
      "priority": "high",
      "roles": [
        "ds",
        "mle",
        "de",
        "aie"
      ],
      "interviewAnswer": "Big-O gives an asymptotic upper bound on how resource use grows with an input-size variable under a stated computation model. Big-Theta is a tight bound and Big-Omega a lower bound. I separately state worst, expected, or amortized behavior and analyze both time and auxiliary space. Complexity removes constants and lower-order terms, so it is ideal for scalability comparisons but must be combined with representative profiling, memory traffic, and real input sizes for an engineering decision.",
      "keyPoints": [
        "Define the size variable",
        "State bound and case",
        "Count dominant repeated work",
        "Analyze auxiliary and output space",
        "Measure constants at real scale"
      ],
      "resources": [
        "mit-algorithms",
        "princeton-algorithms"
      ],
      "featured": false,
      "description": "Complexity analysis predicts how an algorithm's resource demand grows as a chosen input parameter grows. It is a mathematical model, not a stopwatch result and not a complete performance verdict. This chapter develops Big-O, Big-Omega, and Big-Theta from explicit bounds; separates best, worst, expected, and amortized analysis; and shows how to count loops, recursion, sorting, hashing, and memory. You will learn to choose the correct size variable, account for input representation and output size, recognize hidden work in library calls, and compare algorithms under a stated machine model. A worked deduplication example contrasts a quadratic repeated scan with an expected-linear hash-based pass while keeping hashing assumptions visible. The engineering sections connect asymptotic reasoning to cache behavior, allocation, vectorization, network I/O, tail latency, and profiling. The objective is not to chant a complexity table. It is to produce a defensible growth model, identify the term that will dominate at relevant scale, validate that model with representative measurements, and know when constant factors, data distribution, or a different bottleneck changes the operational choice.",
      "prerequisites": [],
      "learningObjectives": [
        "Derive asymptotic time and auxiliary-space bounds from loops, recurrences, and composed operations.",
        "Distinguish upper, lower, tight, worst-case, expected, and amortized claims without mixing their assumptions.",
        "Relate an asymptotic model to profiling evidence, memory limits, latency objectives, and production input distributions."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Measure linear and quadratic deduplication, verify semantic equivalence, and connect observed growth to the derivation.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Conceptual growth rates"
        },
        {
          "type": "flow",
          "title": "Complexity-to-capacity workflow"
        }
      ],
      "followUpQuestions": [
        "What is the difference between expected and amortized complexity?",
        "How do you analyze a graph algorithm?",
        "When would you prefer a worse asymptotic algorithm?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "hash-tables",
      "title": "Hash Tables, Sets & Dictionaries",
      "module": "dsa",
      "priority": "high",
      "roles": [
        "all"
      ],
      "interviewAnswer": "A hash table maps a key's hash into table locations and resolves collisions by chaining or probing. With a suitable hash function and controlled load factor, lookup, insertion, and deletion are expected O(1), while worst case can be O(n) and resizing makes individual operations expensive. Equal keys must have equal stable hashes, so mutable equality-relevant state cannot change while a key is stored. Sets retain keys; dictionaries associate values. Production use also needs memory, eviction, normalization, concurrency, and adversarial-input policies.",
      "keyPoints": [
        "Hash narrows the search",
        "Collisions are inevitable",
        "Equal implies equal hash",
        "Load factor drives resizing",
        "Bound state and key lifetime"
      ],
      "resources": [
        "mit-algorithms",
        "python-data-model",
        "python-docs"
      ],
      "featured": false,
      "description": "A hash table implements a dynamic set or mapping by converting a key into an array location and resolving collisions among keys that land together. This chapter moves from a direct-address table to hashing, then explains hash/equality contracts, load factor, separate chaining, open addressing, resizing, expected versus worst-case cost, iteration semantics, and security concerns. It connects the abstract structure to Python dictionaries and sets without claiming that every implementation detail is a language guarantee. You will build a small chained table, use standard mappings for counting and deduplication, and verify collision, update, deletion, resizing, and duplicate behavior. The design sections extend beyond syntax to caches, joins, idempotency stores, and streaming deduplication, where lifetime and cardinality can matter more than lookup speed. By the end, you should be able to justify a hash table over an ordered structure, state what expected O(1) assumes, recognize an invalid mutable key, estimate memory and resize effects, and design bounds, normalization, concurrency, and observability for a production mapping.",
      "prerequisites": [
        "big-o",
        "python-data-structures"
      ],
      "learningObjectives": [
        "Explain hashing from direct addressing through collisions, load factor, resolution, and resize behavior.",
        "Apply the equality-and-hash contract and distinguish language guarantees from implementation details.",
        "Design mapping-backed joins, caches, and deduplication with explicit cardinality, lifetime, concurrency, and failure policies."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build a chained hash table that exposes collisions, updates, deletion, resizing, and the equality/hash contract.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Hash-table lookup"
        },
        {
          "type": "compare",
          "title": "Chaining and open addressing"
        }
      ],
      "followUpQuestions": [
        "Why must equal keys have equal hashes?",
        "What is load factor?",
        "When is a sorted structure preferable?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "stacks-queues-heaps",
      "title": "Stacks, Queues & Heaps",
      "module": "dsa",
      "priority": "high",
      "roles": [
        "all"
      ],
      "interviewAnswer": "A stack is last-in-first-out and supports push/pop at one end; a FIFO queue removes the earliest item; a deque supports efficient operations at both ends; and a heap-backed priority queue removes the smallest or largest priority. A binary heap is a partial order: the root is extreme, but the whole array is not sorted. Peek is O(1), push and pop are O(log n), and heap construction is O(n). In production, also define capacity, tie-breaking, concurrency, starvation, and overload behavior.",
      "keyPoints": [
        "Removal rule selects the ADT",
        "Deque for both ends",
        "Heap maintains a partial order",
        "Top-k uses bounded heap state",
        "Queues require overload policy"
      ],
      "resources": [
        "mit-algorithms",
        "python-heapq",
        "python-docs"
      ],
      "featured": false,
      "description": "Stacks, queues, deques, and heaps are small interfaces that encode different ordering policies. A stack exposes the most recently added item, a queue exposes the earliest waiting item, a deque supports both ends, and a priority queue exposes the item with the most urgent priority rather than the oldest arrival. This chapter connects those abstract data types to array and linked representations, Python lists and `collections.deque`, binary heap invariants, top-k streaming, stable tie-breaking, lazy deletion, and bounded backpressure. You will trace breadth-first and depth-first frontiers, build a min-heap from first principles, and use `heapq` without confusing a partial heap order with a sorted sequence. The systems section covers scheduler fairness, stale priority entries, queue overload, starvation, and metrics such as depth and wait time. The central skill is choosing a structure from the removal rule and required operations, then proving the invariant and lifecycle. Complexity tables matter, but correctness also depends on what happens when the structure is empty, full, concurrently mutated, or fed faster than consumers can drain it.",
      "prerequisites": [
        "big-o",
        "python-data-structures",
        "hash-tables"
      ],
      "learningObjectives": [
        "Choose a stack, FIFO queue, deque, or priority queue from the required ordering and operation contract.",
        "Derive binary-heap index relationships and prove that sift operations preserve the heap invariant.",
        "Design bounded work queues and top-k structures with tie-breaking, stale-entry, fairness, and overload behavior."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build a binary min-heap, use the standard library for top-k, and verify the invariant after mixed operations.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Which item leaves next?"
        },
        {
          "type": "network",
          "title": "Array-backed min-heap"
        }
      ],
      "followUpQuestions": [
        "Why is heap construction O(n) rather than O(n log n)?",
        "How do you update a heap priority?",
        "How do you preserve FIFO among equal priorities?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "trees-graphs-algorithms",
      "title": "Trees, Graph Traversal, BFS & DFS",
      "module": "dsa",
      "priority": "high",
      "roles": [
        "mle",
        "de",
        "ds"
      ],
      "interviewAnswer": "Represent a sparse graph with adjacency lists so storage is O(V+E). BFS uses a FIFO queue and explores by increasing edge distance, which gives shortest paths in an unweighted graph. DFS uses recursion or an explicit stack, explores one branch deeply, and supports connectivity, cycle detection, and topological ordering. Mark vertices discovered when they enter the frontier to avoid duplicate work. A full traversal is O(V+E) with adjacency lists; weighted shortest paths require another algorithm.",
      "keyPoints": [
        "State graph semantics first",
        "Adjacency lists suit sparse graphs",
        "BFS gives unweighted distance",
        "DFS exposes structure",
        "Discovery state prevents repeated frontier work"
      ],
      "resources": [
        "mit-algorithms",
        "princeton-algorithms"
      ],
      "featured": false,
      "description": "Trees and graphs represent relationships, while traversal algorithms turn those relationships into an ordered exploration. This chapter defines vertices, edges, directedness, weights, paths, cycles, connected components, rooted trees, and common adjacency representations. It derives breadth-first search (BFS) and depth-first search (DFS), explains why BFS finds minimum-edge paths in an unweighted graph, and shows how DFS supports cycle detection and topological ordering in directed acyclic graphs. You will learn when to mark a vertex discovered, how parent and color state reconstruct results, why recursive DFS can overflow the call stack, and why a visited set does not automatically solve every graph problem. A worked dependency example performs topological validation and reports a cycle instead of returning a misleading order. Production sections cover graph size, high-degree vertices, duplicate edges, identity normalization, partial data, deterministic output, traversal limits, and graph stores. The goal is not merely to remember queue versus stack: it is to state the graph model, preserve traversal invariants, select an algorithm whose guarantees match edge semantics, and bound the work for real or adversarial graphs.",
      "prerequisites": [
        "hash-tables",
        "stacks-queues-heaps",
        "big-o"
      ],
      "learningObjectives": [
        "Choose adjacency-list, adjacency-matrix, or edge-list representations from density, query, update, and memory needs.",
        "Trace BFS and DFS states, prove their core guarantees, and reconstruct paths or topological orders.",
        "Design graph traversal with cycle, duplicate, determinism, high-degree, partial-data, and resource-limit policies."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build BFS path reconstruction and topological validation, then verify cycles, disconnected vertices, and traversal invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "network",
          "title": "BFS layers from a source"
        },
        {
          "type": "flow",
          "title": "Dependency-order validation"
        }
      ],
      "followUpQuestions": [
        "Why is BFS O(V+E) with adjacency lists?",
        "How do you reconstruct a shortest path?",
        "Kahn's algorithm emits only some vertices. What does that mean?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "sorting-searching",
      "title": "Sorting, Binary Search & Selection",
      "module": "dsa",
      "priority": "high",
      "roles": [
        "all"
      ],
      "interviewAnswer": "Comparison sorting generally requires Omega(n log n) comparisons in the worst case. Stable sorting preserves the input order of equal keys, which matters for multi-key workflows. Binary search reduces boundary lookup in a sorted or otherwise monotonic domain to O(log n), but the invariant and duplicate policy must be explicit; insertion into a Python list remains O(n). For top-k or kth selection, avoid a full sort when a heap or partition algorithm meets the contract. Production design also considers memory, I/O, determinism, missing values, and concurrent mutation.",
      "keyPoints": [
        "Order contract before algorithm",
        "Stable ties preserve prior order",
        "Binary search finds a boundary",
        "Search O(log n), insertion O(n)",
        "Partial answers can avoid full sort"
      ],
      "resources": [
        "mit-algorithms",
        "python-bisect",
        "python-heapq",
        "princeton-algorithms"
      ],
      "featured": false,
      "description": "Sorting converts an unordered collection into an order that supports merging, grouping, range queries, deterministic output, and binary search. Binary search is broader than exact lookup: it finds a boundary in a monotonic predicate, provided the invariant and interval convention are correct. Selection algorithms and bounded heaps can answer kth-element or top-k questions without fully sorting all input. This chapter derives comparison-sort limits, contrasts stable and unstable algorithms, explains Python's key-based stable sorting, traces lower-bound binary search with duplicates, and distinguishes O(log n) search from O(n) insertion into an array. It also covers partial selection, external sorting, non-comparison sorting assumptions, floating-point and missing-value order, and concurrent mutation. You will implement stable merge sort and a left-bound search, use `sorted`, `bisect`, and `heapq`, and verify permutation, ordering, stability, and boundary properties. The engineering goal is to choose the least work that satisfies the actual output contract while making ordering, tie, key, memory, and determinism semantics explicit.",
      "prerequisites": [
        "big-o",
        "stacks-queues-heaps"
      ],
      "learningObjectives": [
        "Compare sorting algorithms by comparison count, stability, memory, adaptivity, and data-movement behavior.",
        "Implement binary search with a stated half-open invariant and handle duplicates, insertion points, and monotonic predicates.",
        "Choose full sort, heap top-k, partition selection, counting/radix methods, or external sort from the output and system constraints."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build stable merge sort and lower-bound binary search, then verify ordering, permutation, stability, duplicates, and boundary invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Lower-bound binary search invariant"
        },
        {
          "type": "compare",
          "title": "Full order and partial selection"
        }
      ],
      "followUpQuestions": [
        "Why must comparison sorting take Omega(n log n)?",
        "What does stable sort guarantee?",
        "How do you binary-search an answer rather than an array?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "sampling-streaming-algorithms",
      "title": "Sampling & Streaming Algorithms",
      "module": "dsa",
      "priority": "high",
      "roles": [
        "de",
        "mle",
        "ds"
      ],
      "interviewAnswer": "A streaming algorithm updates a bounded summary in one or few passes rather than storing all items. Reservoir sampling keeps k uniform positions from a stream of unknown length by retaining item t with probability k/t and replacing a random reservoir position. Count-min sketch uses multiple hashed counter rows; query returns the minimum counter, so it never underestimates nonnegative insertion-only frequency but can overestimate through collisions. These guarantees depend on randomness, hash, update, and window assumptions, and production needs replay-safe checkpoints and accuracy monitoring.",
      "keyPoints": [
        "Bounded state changes the problem",
        "Reservoir gives uniform positions",
        "Sketches expose explicit error",
        "Merge only compatible summaries",
        "Window, replay, and identity are semantics"
      ],
      "resources": [
        "mmds-book",
        "stanford-cs246"
      ],
      "featured": false,
      "description": "Streaming algorithms process items in one or a few passes while keeping state far smaller than the complete history. They are necessary when input is unbounded, arrives faster than storage queries can respond, or is simply too large to materialize. This chapter begins with exact one-pass aggregates, then derives reservoir sampling for a uniform fixed-size sample from an unknown-length stream. It explains how approximate sketches trade memory for controlled error, using count-min sketch as the main example and distinguishing one-sided frequency overestimation from unbiased sampling. You will learn how mergeability supports partitioned processing, why randomness and hash independence assumptions must be stated, how windows change the problem, and why a compact structure is not automatically correct under deletions or concept drift. A worked stream monitor maintains exact totals, a reservoir, and approximate heavy-hitter counts while preserving checkpointable state. Production sections cover event identity, ordering, late data, replay, deduplication, seed/version management, overflow, adversarial keys, accuracy audits, and fallback. The goal is to choose an explicit error and retention contract, not to use approximation merely because it sounds scalable.",
      "prerequisites": [
        "big-o",
        "hash-tables",
        "python-generators",
        "probability-basics"
      ],
      "learningObjectives": [
        "Derive reservoir sampling's inclusion probability and implement a reproducible fixed-size sample from an unknown-length stream.",
        "Explain count-min sketch update, query, overestimation, width/depth trade-offs, and merge requirements.",
        "Design streaming state with explicit windows, replay, identity, checkpoint, numerical, adversarial, and accuracy-audit policies."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build reservoir sampling and count-min sketch, then verify size, reproducibility, no-underestimation, merge compatibility, and approximate uniformity.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Reservoir update at position t"
        },
        {
          "type": "matrix",
          "title": "Count-min sketch counters"
        }
      ],
      "followUpQuestions": [
        "Why does reservoir sampling keep every position with probability k/n?",
        "Why does count-min use the minimum counter?",
        "Can exact distinct count use bounded memory for an unbounded universe?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "eda-workflow",
      "title": "A Systematic EDA Workflow",
      "module": "eda-viz",
      "priority": "very-high",
      "roles": [
        "ds",
        "de",
        "da"
      ],
      "interviewAnswer": "A systematic EDA starts with the business question, target population, unit/grain, time window, and source lineage. Then validate schema, keys, row counts, joins, duplicates, missingness, ranges, and reconciliation totals. Inspect univariate distributions, time patterns, relationships and subgroups on raw and meaningful transformed scales, while checking leakage and collection artifacts. Log observations and hypotheses separately, avoid causal or confirmatory claims from exploration, and turn the result into reproducible code, data-quality assertions, and a documented validation plan.",
      "keyPoints": [
        "Question and grain come before plots",
        "Data contracts and reconciliation precede statistical summaries",
        "Exploration is multiplicity-rich and hypothesis-generating",
        "Time, subgroup, and collection processes can dominate patterns",
        "A reproducible audit is a deliverable, not a disposable notebook"
      ],
      "resources": [
        "nist-eda",
        "berkeley-data100",
        "pandas-user-guide",
        "seaborn-tutorial"
      ],
      "featured": true,
      "description": "Exploratory data analysis is a disciplined investigation of a dataset's provenance, structure, quality, distributions, relationships, time behavior, and fitness for a specific decision. It is not a hunt for attractive plots or significant correlations. This chapter builds a reproducible workflow from problem framing and grain through schema, joins, missingness, duplicates, ranges, univariate and multivariate views, target leakage, temporal splits, hypothesis logging, and handoff to confirmatory analysis. You will learn to distinguish discovery from validation, use invariants and reconciliation totals, inspect both raw and transformed scales, detect subpopulation and collection effects, and turn observations into testable follow-ups rather than causal claims. The worked example audits an orders-and-customers dataset whose duplicated join silently changes the business population. The lab builds a dependency-light profiling report, compares it with pandas, and verifies row, uniqueness, missingness, and range contracts. Production guidance covers snapshots, lineage, privacy, compute budgets, notebooks versus pipelines, review, monitoring, and rollback. The aim is an EDA artifact another analyst can reproduce, challenge, and safely build upon.",
      "prerequisites": [
        "pandas-core",
        "probability-basics",
        "sampling-design"
      ],
      "learningObjectives": [
        "Frame EDA around a target population, estimand or decision, unit of analysis, and data-generating process.",
        "Audit schema, grain, keys, joins, missingness, duplicates, ranges, distributions, dependence, and time before modeling.",
        "Separate exploratory hypotheses from confirmatory evidence and prevent leakage, selection, and multiplicity from contaminating conclusions.",
        "Produce a reproducible EDA report with invariants, lineage, limitations, and explicit next actions."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build a small reproducible table profiler, compare key summaries with pandas, and verify grain, missingness, range, and category contracts.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "A reproducible EDA loop"
        },
        {
          "type": "compare",
          "title": "Discovery and confirmation"
        }
      ],
      "followUpQuestions": [
        "What is the first thing you check in a new dataset?",
        "How do you prevent EDA from becoming p-hacking?",
        "What should leave the notebook?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "distributions-outliers",
      "title": "Distributions, Skewness & Outliers",
      "module": "eda-viz",
      "priority": "very-high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "I inspect distributions with quantiles, robust and classical summaries, histograms plus ECDFs, and relevant transformations, conditioned on time and groups. An outlier is unusual under a reference model; it may be an error, a valid rare event, a new regime, a leverage point, or the case we most care about. I validate source units and lineage, use domain bounds and robust diagnostics, inspect influence on conclusions, and report sensitivity with and without justified corrections. I never delete points solely because a z-score or IQR rule flags them.",
      "keyPoints": [
        "Shape and support matter beyond mean and variance",
        "Plot tuning can create or hide apparent structure",
        "Outlier status depends on reference and context",
        "Leverage and influence are model-relative",
        "Treatment decisions require lineage, domain knowledge, and sensitivity"
      ],
      "resources": [
        "nist-eda",
        "seaborn-tutorial",
        "openintro-stats",
        "fundamentals-dataviz"
      ],
      "featured": true,
      "description": "Distribution analysis describes where values concentrate, how they vary, whether they are bounded, skewed, heavy-tailed, multimodal, discrete, zero-inflated, censored, or contaminated, and how those features change across populations and time. Outliers are observations unusual relative to a stated reference—not automatically errors to delete. This chapter compares mean/SD with median/IQR/MAD, histograms with ECDFs and KDEs, raw with transformed scales, z-scores with robust rules, and univariate with multivariate or contextual anomalies. You will learn to distinguish data errors, rare valid cases, regime shifts, leverage points, influential observations, and extreme values created by aggregation or selection; to use tail diagnostics and domain bounds; and to analyze results with and without consequential points. The worked example separates a currency-unit error from valid high-value orders. The lab implements robust summaries and IQR/MAD flags, verifies affine behavior, and compares with NumPy/pandas. Production guidance covers raw-value preservation, winsorization contracts, robust models, alerting, privacy, drift, and rollback.",
      "prerequisites": [
        "eda-workflow",
        "distributions",
        "norms-distances"
      ],
      "learningObjectives": [
        "Characterize center, spread, shape, tails, support, modality, discreteness, and conditional distribution shifts.",
        "Choose robust and classical summaries according to contamination, skewness, and decision loss.",
        "Classify unusual observations as errors, valid rare cases, contextual anomalies, leverage, or influence before treatment.",
        "Design sensitivity analyses and production controls that preserve evidence while limiting operational harm from extremes."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Compute classical and robust distribution summaries, flag—not delete—unusual values, and verify translation/scale behavior against NumPy.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Unusual observations need classification"
        },
        {
          "type": "curve",
          "title": "Body and tail on one conceptual ECDF"
        }
      ],
      "followUpQuestions": [
        "Is an outlier necessarily bad data?",
        "When prefer median to mean?",
        "How do you assess whether a point is influential?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "missingness-mechanisms",
      "title": "Missingness: MCAR, MAR & MNAR",
      "module": "eda-viz",
      "priority": "high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "Let R indicate whether a value is observed. MCAR means R is independent of observed and missing values; MAR means missingness may depend on observed data but not the missing value after conditioning; MNAR means it still depends on the unseen value or unobserved causes. These are assumptions about the data-generating process and MNAR versus MAR is generally not testable from observed data alone. I preserve missingness masks and reason codes, analyze patterns by time/source/covariates, choose design-consistent weighting or multiple imputation, prevent leakage, propagate uncertainty, and run MNAR sensitivity analyses.",
      "keyPoints": [
        "Missingness is data with a mechanism and provenance",
        "MAR is conditional, not 'random-looking'",
        "Observed data cannot generally distinguish MAR from MNAR",
        "Imputation model and analysis model must be congenial",
        "Production missingness can shift and become informative"
      ],
      "resources": [
        "rubin-missing",
        "stanford-stats200",
        "pandas-missing",
        "openintro-stats"
      ],
      "featured": false,
      "description": "Missing data are generated by a process. MCAR, MAR, and MNAR describe conditional relationships between missingness indicators and data, not visual patterns a dataset can prove from observed cells alone. This chapter defines unit versus item nonresponse, structural versus censored missingness, Rubin's mechanisms, ignorability conditions, complete-case analysis, indicator methods, single and multiple imputation, inverse-probability weighting, likelihood-based estimation, and sensitivity analysis. You will learn why filling every null is not a solution, why outcome imputation must respect train/test and temporal boundaries, how missingness indicators can be predictive yet unstable, and why uncertainty from imputation must be propagated rather than treating guessed values as observed. The worked example contrasts lab tests ordered by severity with device-sensor outages. The lab simulates MCAR and outcome-related missingness, quantifies complete-case bias, applies a valid observed-covariate adjustment, and verifies assumptions. Production guidance covers reason codes, masks, imputation artifacts, monitoring, privacy, model serving, and rollback. The emphasis is defensible inference, not cosmetically complete tables.",
      "prerequisites": [
        "eda-workflow",
        "joint-marginal-conditional",
        "selection-nonresponse-bias"
      ],
      "learningObjectives": [
        "Define MCAR, MAR, and MNAR using missingness indicators and observed/unobserved data.",
        "Distinguish structural absence, censoring, item nonresponse, unit nonresponse, and pipeline failures before choosing treatment.",
        "Select complete-case, weighting, likelihood, or multiple-imputation methods with explicit assumptions and uncertainty propagation.",
        "Design missingness diagnostics, sensitivity analyses, and production monitoring without leaking future or target information."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Simulate MCAR and covariate-dependent missingness, quantify complete-case bias, and verify an observed-stratum adjustment under its assumptions.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "matrix",
          "title": "Missingness mechanisms"
        },
        {
          "type": "flow",
          "title": "Missing-data workflow"
        }
      ],
      "followUpQuestions": [
        "Can you test whether data are MNAR?",
        "When is a missing indicator useful?",
        "Why use multiple rather than single imputation?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "visual-encoding",
      "title": "Choosing the Right Statistical Visualization",
      "module": "eda-viz",
      "priority": "high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "I start with the question: compare magnitude, see change over ordered time, inspect a distribution, relate variables, show composition, or locate geography. Then I map the most important quantitative comparison to aligned position or length; use lines only for ordered continuity, scatterplots for paired numeric observations, histograms/ECDFs for distributions, bars for category magnitudes, and small multiples for groups. I state aggregation and uncertainty, use honest scales and accessible redundant encodings, limit color, label units and denominators, and test the chart against raw data and audience decisions.",
      "keyPoints": [
        "Task and data semantics determine the chart",
        "Position and length support precise comparison",
        "Aggregation and connection make statistical claims",
        "Scales, baselines, and color carry meaning",
        "Accessibility and uncertainty belong in the specification"
      ],
      "resources": [
        "visual-communication-science",
        "fundamentals-dataviz",
        "seaborn-tutorial",
        "berkeley-data100"
      ],
      "featured": false,
      "description": "Statistical visualization maps data fields and uncertainty to visual channels—position, length, angle, area, color, shape, texture, and facets—so a specific comparison becomes perceptually accessible. The best chart follows the analytical task, variable type, data grain, and audience; it is not chosen from a gallery by aesthetics. This chapter develops a task-first selection framework for distributions, trends, relationships, rankings, parts-to-whole, flows, geospatial patterns, and uncertainty. It explains perceptual accuracy, scales and transforms, overplotting, aggregation, small multiples, color semantics, accessibility, annotations, interactivity, and the distinction between raw observations, estimates, and model outputs. You will learn why bars need meaningful baselines, why line connections imply order, why area and angle comparisons are difficult, and how uncertainty must be encoded and labeled. The worked example redesigns a crowded multi-metric executive chart. The lab builds a declarative chart-spec validator and verifies task/type constraints alongside a matplotlib implementation. Production guidance covers semantic chart contracts, responsive design, accessible alternatives, testing, rendering, data freshness, privacy, and rollback.",
      "prerequisites": [
        "eda-workflow",
        "distributions-outliers",
        "confidence-intervals"
      ],
      "learningObjectives": [
        "Choose a chart from the analytical task, field type, grain, ordering, and uncertainty rather than decoration.",
        "Map high-priority comparisons to perceptually accurate channels and use facets or aggregation without hiding structure.",
        "Select scales, baselines, color systems, labels, and accessibility features that preserve data meaning.",
        "Design and test chart specifications as versioned semantic interfaces backed by data and metric contracts."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build a semantic chart-spec validator, reject misleading field/mark combinations, and render a verified bar chart with matplotlib.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Match the primary task"
        },
        {
          "type": "matrix",
          "title": "Visual-channel strengths"
        }
      ],
      "followUpQuestions": [
        "When should a bar chart start at zero?",
        "How do you show many overlapping points?",
        "What should an uncertainty band say?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "visualization-pitfalls",
      "title": "Misleading Charts & Visualization Pitfalls",
      "module": "eda-viz",
      "priority": "high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "I audit a chart at four layers: data and population; transformation, aggregation, denominator and filters; visual encoding, scale and baseline; and annotation/context. Common traps are truncated bar axes, 3D or area distortion, dual axes, cherry-picked windows, unequal time spacing, changing denominators, misleading bins/colors, overplotting, omitted uncertainty, and causal wording. I reconstruct the underlying table, compare alternate honest views, quantify how the claim changes, and add semantic tests so the correction is reproducible.",
      "keyPoints": [
        "A chart inherits every upstream data and metric assumption",
        "Visual geometry can amplify or suppress differences",
        "Selection of windows, bins, groups, and annotations is analytical flexibility",
        "Uncertainty and denominators are essential context",
        "Semantic review complements pixel snapshots"
      ],
      "resources": [
        "visual-communication-science",
        "fundamentals-dataviz",
        "powerbi-dashboard-design",
        "uncertainty-visualization"
      ],
      "featured": false,
      "description": "Misleading visualization can arise from incorrect data, dishonest transformations, perceptual distortion, omitted context, or interaction defaults that selectively reveal a story. This chapter analyzes truncated baselines, distorted area and 3D perspective, dual axes, unequal time spacing, cumulative-versus-period confusion, cherry-picked windows, inappropriate smoothing, bin and color manipulation, denominator changes, map-area bias, missing uncertainty, overplotting, and deceptive annotation. You will learn to audit a chart by reconstructing its data transformation, scale, baseline, aggregation, filters, and encoding; distinguish intentional deception from harmful defaults; and design automated semantic checks alongside human review. The worked example deconstructs a dashboard where a truncated axis and changing denominator exaggerate a retention improvement. The lab implements chart-integrity checks for baselines, time order, denominator consistency, and proportional areas, then verifies them against deliberately bad specs. Production guidance covers metric lineage, query review, accessible exports, snapshot testing, issue severity, monitoring, and correction/rollback communication. Every published view should remain reconstructable from its data and specification.",
      "prerequisites": [
        "visual-encoding",
        "eda-workflow",
        "effect-size"
      ],
      "learningObjectives": [
        "Trace a visual claim back through filters, aggregation, denominators, transformations, scales, and source data.",
        "Recognize perceptual distortions from baselines, area/volume, dual axes, color, bins, smoothing, and map geometry.",
        "Detect selection and context failures involving time windows, missing groups, uncertainty, and annotation.",
        "Implement semantic visualization checks and correction workflows without assuming every misleading chart is malicious."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement semantic integrity checks for baselines, time order, denominator stability, and area encoding, then verify detection on bad chart specs.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Two layers of chart integrity"
        },
        {
          "type": "matrix",
          "title": "Common distortion mechanisms"
        }
      ],
      "followUpQuestions": [
        "Are truncated axes always wrong?",
        "Why are dual axes risky?",
        "How do you automate chart integrity?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "groupby-pivot",
      "title": "GroupBy, Pivot & Cohort Analysis",
      "module": "eda-viz",
      "priority": "high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "GroupBy is split–apply–combine: partition rows by keys, compute an operation per group, and return an output whose grain depends on aggregation, transformation, or filtering. I declare the output grain, null/category behavior, and additive components, then reconcile to source totals. Pivot reshapes a unique key combination; duplicates require an explicit aggregation, not accidental first value. For cohorts, assign each entity once, compute period age consistently, deduplicate entity-period activity, keep denominators tied to the original eligible cohort, and mark recent right-censored cells as unavailable rather than zero.",
      "keyPoints": [
        "Every grouped result has a grain and key contract",
        "Ratios should aggregate numerator and denominator",
        "Pivot duplicates require an explicit rule",
        "Cohort and calendar time are distinct axes",
        "Censoring and late data define which retention cells are observable"
      ],
      "resources": [
        "pandas-groupby",
        "pandas-user-guide",
        "berkeley-data100",
        "openintro-stats"
      ],
      "featured": false,
      "description": "GroupBy and pivot operations transform event-level rows into metrics at a declared output grain. Cohort analysis adds two time axes—when an entity entered and how long it has progressed—so lifecycle behavior is separated from calendar conditions. This chapter develops split–apply–combine semantics, aggregation versus transformation, multi-key grouping, observed versus unobserved categories, null-key handling, weighted rates, ratios of sums, pivot uniqueness, margins, cohort assignment, age calculation, right censoring, retention denominators, and reconciliation. You will learn why average of averages is usually wrong, why groupby can silently drop null keys, how duplicate entity-period rows inflate retention, and why incomplete recent cohorts must not be compared with mature cohorts. The worked example builds a monthly signup-retention matrix and diagnoses a denominator bug. The lab implements grouping and cohort retention from first principles, compares with pandas, and verifies totals, grain, and monotonic eligibility. Production guidance covers semantic models, incremental recomputation, late events, time zones, sparse output, privacy, monitoring, and rollback.",
      "prerequisites": [
        "pandas-core",
        "eda-workflow",
        "sql-aggregation"
      ],
      "learningObjectives": [
        "Declare input and output grain for groupby, aggregation, transformation, and pivot operations.",
        "Compute weighted rates and ratios from additive components without averaging subgroup averages incorrectly.",
        "Construct cohort and age indices with stable entity assignment, mature denominators, and late-event handling.",
        "Verify grouped outputs through reconciliation, uniqueness, category/null semantics, and incremental consistency."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build grouped rate and cohort retention logic from first principles, compare with pandas, and verify grain, reconciliation, distinctness, and maturity bounds.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Split–apply–combine with grain"
        },
        {
          "type": "matrix",
          "title": "Cohort retention geometry"
        }
      ],
      "followUpQuestions": [
        "What is the difference between aggregate and transform?",
        "Why is average of averages wrong?",
        "How do late events affect cohorts?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "sampling-distributions",
      "title": "Sampling Distributions & Standard Error",
      "module": "stat-inference",
      "priority": "very-high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "A sampling distribution describes how a statistic would vary over repeated samples from the same data-generating process and design. Its standard deviation is the statistic's standard error. For an independent sample mean with finite variance, SE is sigma divided by square root n, estimated by s divided by square root n. That is different from the standard deviation of individual observations. The formula changes under clustering, time dependence, unequal weights, or finite-population sampling, and a small SE says nothing about selection bias.",
      "keyPoints": [
        "Random data make estimators random before sampling",
        "Standard error measures estimator variability, not raw spread",
        "Independence and design determine effective information",
        "Bias and variance are separate failure modes",
        "Simulation can audit analytic uncertainty formulas"
      ],
      "resources": [
        "stanford-stats200",
        "openintro-stats",
        "cdc-survey-variance",
        "numpy-random"
      ],
      "featured": true,
      "description": "A sampling distribution is the probability distribution of a statistic over repeated samples generated by the same population and sampling design. It is the bridge from observed data to uncertainty about an estimator. This chapter separates the population distribution, the empirical distribution of one sample, and the sampling distribution of an estimator; derives the standard error of a mean; explains why standard deviation and standard error answer different questions; and shows how dependence, unequal weights, clustering, and finite populations change the calculation. You will learn when a central-limit approximation is credible, why an unbiased estimator can still be too noisy to use, and why a low standard error cannot repair selection bias. The worked example and lab simulate repeated samples so that sampling variability is visible rather than merely asserted. Production guidance covers unit-of-analysis mistakes, correlated observations, design-aware uncertainty, reproducible simulation, and monitoring effective sample size. The goal is to make every later interval, test, and power calculation rest on a clear data-generating and sampling model.",
      "prerequisites": [
        "expectation-variance",
        "clt"
      ],
      "learningObjectives": [
        "Distinguish a population distribution, a sample distribution, and an estimator's sampling distribution.",
        "Derive and interpret standard error for independent means and recognize when the square-root-n rule fails.",
        "Diagnose how bias, dependence, weighting, clustering, and finite-population sampling affect uncertainty.",
        "Estimate sampling uncertainty analytically or by simulation and verify the result against repeated samples."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Simulate a sampling distribution, verify the analytic SE, and show how cluster dependence invalidates a row-level iid calculation.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "matrix",
          "title": "Three different distributions"
        },
        {
          "type": "curve",
          "title": "Sampling means concentrate"
        }
      ],
      "followUpQuestions": [
        "Why is standard error usually smaller than standard deviation?",
        "Can an estimator have zero standard error and still be wrong?",
        "How would you estimate SE when no closed form is available?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "bootstrap",
      "title": "Bootstrap & Resampling",
      "module": "stat-inference",
      "priority": "high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "The nonparametric bootstrap treats the empirical distribution as an estimate of the population: draw many size-n samples with replacement, recompute the entire estimator, and use the resulting distribution for standard errors or intervals. It works when the observed sample represents the repetition mechanism and the estimator is sufficiently regular. Resample the independent unit—pairs, users, clusters, or time blocks—not blindly rows. Bootstrap cannot repair selection bias, absent rare classes, or a fundamentally misspecified pipeline, and interval choice and Monte Carlo error must be reported.",
      "keyPoints": [
        "Resampling approximates repeated sampling from an estimated population",
        "Replacement preserves iid draws from the empirical distribution",
        "The estimator must be recomputed end to end",
        "Dependence determines the resampling unit",
        "Coverage must be checked rather than assumed"
      ],
      "resources": [
        "efron-bootstrap",
        "stanford-stats200",
        "scipy-stats",
        "isl"
      ],
      "featured": false,
      "description": "The bootstrap estimates an estimator's sampling behavior by repeatedly sampling with replacement from the empirical distribution and recomputing the complete statistic. It is powerful because it can approximate standard errors, bias, and confidence intervals when analytic derivations are inconvenient, but it is not assumption-free. This chapter develops the plug-in principle, explains why replacement matters, distinguishes ordinary, paired, stratified, cluster, block, parametric, and residual bootstraps, and compares percentile, basic, normal, and bias-corrected accelerated intervals. You will learn when the empirical distribution is a reasonable stand-in for the population, why rare events and nonsmooth statistics cause instability, and why resampling rows breaks dependence. The worked example estimates a difference in medians while preserving treatment groups. The lab implements a bootstrap distribution from first principles, compares it with SciPy's current API, verifies reproducibility and interval behavior, and demonstrates the effect of sample size. Production guidance covers resampling grain, pipeline refitting, Monte Carlo error, seeds, compute budgets, privacy, and coverage audits.",
      "prerequisites": [
        "sampling-distributions",
        "confidence-intervals"
      ],
      "learningObjectives": [
        "Explain the empirical plug-in principle and why bootstrap resamples have the original sample size with replacement.",
        "Choose a resampling scheme that preserves pairing, groups, clusters, time dependence, weights, and model-fitting steps.",
        "Compare common bootstrap interval constructions and diagnose skewness, bias, discreteness, and boundary failure.",
        "Implement reproducible bootstrap uncertainty and verify it against simulation or an official library."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build a bootstrap confidence interval for a median, compare with SciPy BCa output, and verify reproducibility and narrowing with more data.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Ordinary bootstrap"
        },
        {
          "type": "matrix",
          "title": "Resampling schemes follow dependence"
        }
      ],
      "followUpQuestions": [
        "Why sample with replacement?",
        "What does increasing B accomplish?",
        "When would you use a block bootstrap?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "permutation-tests",
      "title": "Permutation & Randomization Tests",
      "module": "stat-inference",
      "priority": "high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "A permutation test compares an observed statistic with values obtained by shuffling in a way justified under the null. In a randomized experiment, reassign labels according to the actual assignment mechanism; in observational data, a label shuffle additionally requires exchangeability. Preserve pairs, blocks, clusters, and treatment counts. Exact enumeration is possible for small designs; otherwise sample permutations and use a correction such as (b+1)/(B+1). The p-value is valid for the specified statistic, null, design, and extremeness rule—not because permutation is automatically nonparametric.",
      "keyPoints": [
        "Randomization mechanism can supply the null distribution",
        "Exchangeability is a substantive assumption",
        "Pairs, blocks, and clusters constrain valid transformations",
        "The statistic determines sensitivity and two-sided ordering",
        "Monte Carlo p-values have simulation uncertainty"
      ],
      "resources": [
        "stanford-stats200",
        "scipy-stats",
        "openintro-stats"
      ],
      "featured": false,
      "description": "Permutation and randomization tests build a reference distribution by applying transformations that are valid under a null hypothesis—often reallocating treatment labels or swapping paired signs—and comparing the observed statistic with that distribution. Their strength is transparent design-based calibration with few distributional assumptions; their danger is the casual belief that any labels may be shuffled. This chapter distinguishes Fisher randomization inference from observational permutation tests, defines exchangeability, shows exact and Monte Carlo tail calculations, handles paired and blocked designs, and explains studentization, ties, two-sided definitions, and the plus-one correction for sampled permutations. You will learn how interference, clustering, covariate-adaptive assignment, unequal variances, and data-dependent statistic selection invalidate naive shuffles. The worked example uses a randomized conversion experiment with a difference-in-means statistic. The lab enumerates a small exact test, compares it with SciPy, and verifies symmetry and p-value bounds. Production guidance covers assignment reconstruction, reproducible RNG, batch computation, audit logs, precision, and sequential use.",
      "prerequisites": [
        "hypothesis-testing"
      ],
      "learningObjectives": [
        "Identify the exact transformation group justified by random assignment or exchangeability under the null.",
        "Construct exact and Monte Carlo permutation distributions for independent, paired, blocked, and clustered designs.",
        "Choose and predefine a statistic and two-sided extremeness rule appropriate to the alternative.",
        "Diagnose invalid shuffles caused by dependence, unequal assignment, interference, or post-selection."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Enumerate an exact two-sample permutation test, verify its tail calculation against SciPy, and preserve fixed group sizes.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Design-based reference distribution"
        },
        {
          "type": "matrix",
          "title": "Transformation sets"
        }
      ],
      "followUpQuestions": [
        "What is exchangeability?",
        "When is a permutation test exact?",
        "Why studentize a permutation statistic?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "multiple-testing",
      "title": "Multiple Testing & False Discovery Rate",
      "module": "stat-inference",
      "priority": "very-high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "With m tests, individual alpha does not control the overall error. Bonferroni and Holm control the probability of at least one false rejection in a defined family; BH controls the expected false discovery proportion under its conditions and is usually more powerful when many discoveries are acceptable. For BH, sort p-values, find the largest k with p_(k)<=kq/m, and reject through k. Define the family before seeing results, account for dependence and selection, report adjusted values and effect sizes, and do not call FDR the probability each discovery is false.",
      "keyPoints": [
        "Multiplicity begins with a declared family",
        "FWER controls any false rejection; FDR controls expected false proportion",
        "Holm dominates simple Bonferroni while retaining strong FWER control",
        "BH is a step-up rule with dependence conditions",
        "Adjustment does not repair biased tests or post-selection"
      ],
      "resources": [
        "benjamini-hochberg",
        "stanford-stats200",
        "scipy-stats",
        "asa-pvalues"
      ],
      "featured": true,
      "description": "Testing many hypotheses creates many opportunities for false discoveries. Multiplicity is not solved by interpreting each p-value in isolation; the analyst must define a family, choose an error criterion, and apply a procedure whose dependence assumptions and selection process match the problem. This chapter derives why unadjusted family-wise error grows, contrasts family-wise error rate with false discovery rate, explains Bonferroni, Holm, Benjamini–Hochberg, and Benjamini–Yekutieli ideas, and distinguishes adjusted p-values from local false-discovery probabilities. You will learn how hierarchical testing, gatekeeping, preregistration, holdout confirmation, and selective inference control different risks; why correlated tests complicate guarantees; and why adding hypotheses after looking changes the family. The worked example applies BH to ten feature metrics and interprets the rejection threshold. The lab implements Holm and BH from scratch, verifies monotonic adjusted values against SciPy, and checks invariants. Production guidance covers metric-family governance, lineage, online testing, dashboards, reproducibility, and audit of all attempted analyses.",
      "prerequisites": [
        "hypothesis-testing"
      ],
      "learningObjectives": [
        "Quantify how repeated testing inflates the chance and number of false positives.",
        "Choose between FWER and FDR according to the cost and volume of false discoveries.",
        "Implement Bonferroni/Holm and Benjamini–Hochberg procedures with valid ordering and monotonicity.",
        "Define hypothesis families and diagnose dependence, selection, and reporting practices that invalidate nominal control."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement Holm FWER and BH FDR adjusted p-values, verify monotonicity, and compare BH output with SciPy.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "matrix",
          "title": "Two family-level error goals"
        },
        {
          "type": "curve",
          "title": "BH step-up geometry"
        }
      ],
      "followUpQuestions": [
        "When prefer FWER over FDR?",
        "Why is Holm generally preferable to plain Bonferroni?",
        "Does BH work under correlated tests?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "effect-size",
      "title": "Effect Size vs Statistical Significance",
      "module": "stat-inference",
      "priority": "very-high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "Effect size is the magnitude of the estimand—such as a 1.2 percentage-point lift, relative risk, mean difference, correlation, or standardized mean difference. A p-value combines magnitude with uncertainty and sample size, so a tiny effect can be significant in a huge sample and a useful effect nonsignificant in a small one. Report the effect in domain units first, its interval, baseline risk, and a predefined minimum worthwhile effect. Standardized measures aid comparison but depend on the chosen standard deviation and population.",
      "keyPoints": [
        "Magnitude and evidence are separate",
        "Domain units usually lead communication",
        "Relative measures require baseline risk",
        "Standardized effects depend on reference variability",
        "Practical thresholds should be set before results"
      ],
      "resources": [
        "openintro-stats",
        "asa-pvalues",
        "stanford-stats200"
      ],
      "featured": true,
      "description": "Effect size describes the magnitude of a difference or association; statistical significance describes how incompatible data are with a null model relative to sampling uncertainty. They answer different questions. This chapter covers raw effects, relative effects, standardized mean differences, correlations, odds and risk ratios, number needed to treat, and model-performance changes. It explains why standardization aids comparison but can hide domain meaning, how small-sample bias corrections such as Hedges' g work, and why odds ratios are often misread as risk ratios. You will learn to define a smallest effect of practical interest, pair estimates with uncertainty, distinguish clinical or business importance from detectability, and avoid interpreting noisy subgroup effect sizes without shrinkage. The worked example compares an accurately estimated tiny conversion lift with a larger uncertain one. The lab implements Cohen's d and Hedges' g, verifies scale/translation invariance, and checks against the raw mean difference. Production guidance covers estimand contracts, metric units, heterogeneous effects, decision curves, monitoring, and communication.",
      "prerequisites": [
        "confidence-intervals",
        "hypothesis-testing"
      ],
      "learningObjectives": [
        "Select raw, relative, standardized, or probability-scale effect measures that match the decision and outcome type.",
        "Explain why p-values depend on effect magnitude, noise, sample size, and design while effect size is not significance.",
        "Compute standardized mean differences with appropriate pooled variance and small-sample correction.",
        "Interpret effects against predefined practical thresholds and report uncertainty, baseline risk, and heterogeneity."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Compute Cohen's d and Hedges' g, verify translation/scale invariance, and keep the raw effect beside the standardized result.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "matrix",
          "title": "Magnitude, evidence, and decision"
        },
        {
          "type": "curve",
          "title": "Same effect, different uncertainty"
        }
      ],
      "followUpQuestions": [
        "Why can a tiny effect have a tiny p-value?",
        "When prefer raw over standardized effect?",
        "Why can odds ratio exaggerate intuition for common outcomes?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "anova",
      "title": "ANOVA & Comparing Multiple Groups",
      "module": "stat-inference",
      "priority": "medium",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "One-way ANOVA tests H0 that all group means are equal by comparing between-group mean square with within-group mean square. F=MS_between/MS_within, with k-1 and N-k degrees of freedom under the classical independent normal equal-variance model. A significant F says at least one mean differs; it does not identify which. Inspect residuals and design, use Welch ANOVA for unequal variances when appropriate, then apply prespecified contrasts or multiplicity-adjusted post-hoc tests and report effect sizes and intervals.",
      "keyPoints": [
        "ANOVA partitions variability around the grand mean",
        "The F statistic compares explained with residual variation",
        "Omnibus rejection does not identify pairs",
        "Residual independence and variance structure matter",
        "Contrasts and post-hoc tests need multiplicity discipline"
      ],
      "resources": [
        "nist-stat-handbook",
        "stanford-stats200",
        "scipy-stats",
        "openintro-stats"
      ],
      "featured": false,
      "description": "Analysis of variance tests whether group means exhibit more between-group variation than expected from within-group variation under a specified model. It avoids the uncontrolled multiplicity of running every pairwise t-test, but a significant omnibus F test says only that not all means are equal. This chapter derives the sums-of-squares decomposition and F ratio, explains degrees of freedom, effect sizes, diagnostics, planned contrasts, post-hoc comparisons, Welch ANOVA, nonparametric alternatives, and extensions to factorial and repeated-measures designs. You will learn why normality concerns residuals rather than raw outcomes, why independence is usually more important than mild normality, and why unequal variance with unbalanced groups can distort classical ANOVA. The worked example decomposes three campaign groups and follows the omnibus test with corrected comparisons. The lab computes one-way ANOVA from first principles, verifies decomposition and translation invariance, and compares with SciPy. Production guidance covers experimental units, contrast registries, assumptions, multiplicity, drift, and reporting estimates rather than only an F statistic.",
      "prerequisites": [
        "hypothesis-testing",
        "effect-size"
      ],
      "learningObjectives": [
        "Derive between-, within-, and total sums of squares and explain the F ratio as signal relative to noise.",
        "Interpret an omnibus rejection without claiming every group differs from every other group.",
        "Choose classical, Welch, robust, permutation, or rank-based alternatives according to design and residual behavior.",
        "Plan contrasts and adjust post-hoc comparisons while reporting group estimates, intervals, and effect sizes."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Compute one-way ANOVA from first principles, verify the sums-of-squares identity and translation invariance, and compare F with SciPy.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "ANOVA decomposition"
        },
        {
          "type": "matrix",
          "title": "After the omnibus test"
        }
      ],
      "followUpQuestions": [
        "Why not just run pairwise t-tests?",
        "What does significant ANOVA tell you?",
        "When use Welch ANOVA?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "chi-square",
      "title": "Chi-square Tests for Categorical Data",
      "module": "stat-inference",
      "priority": "medium",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "Pearson's chi-square statistic sums (observed-expected)^2/expected across categorical cells. For an r-by-c independence table, expected count is row total times column total divided by grand total and df=(r-1)(c-1), assuming independent units and adequate asymptotic counts. A significant result says the variables are associated, not which cells differ or that one causes the other. Inspect standardized residuals, report an effect size such as Cramér's V, adjust post-hoc analyses, and use exact or Monte Carlo methods for sparse tables.",
      "keyPoints": [
        "Expected counts come from the null and fixed margins",
        "Each cell contributes a squared standardized discrepancy",
        "Degrees of freedom reflect marginal constraints",
        "Sparse or dependent data break the usual reference",
        "Association magnitude and cell pattern follow the omnibus test"
      ],
      "resources": [
        "nist-stat-handbook",
        "openintro-stats",
        "scipy-stats",
        "cdc-survey-variance"
      ],
      "featured": false,
      "description": "Chi-square methods compare observed categorical counts with counts expected under a null model. The goodness-of-fit test asks whether one categorical distribution matches specified probabilities; the independence or homogeneity test asks whether two categorical variables are associated or whether group distributions agree. This chapter derives Pearson's statistic from standardized cell residuals, explains degrees of freedom and expected-count calculation, connects the contingency-table test with likelihood-ratio and log-linear models, and distinguishes association from causation. You will learn why tests operate on counts rather than percentages, when asymptotic calibration is unreliable, how sparse tables and structural zeros require exact, Monte Carlo, or category-restructuring approaches, and why a significant table needs cell-level residuals and effect sizes such as Cramér's V. The worked example analyzes channel by conversion status and identifies which cells drive the result. The lab computes expected counts and Pearson's statistic from first principles, verifies marginal preservation and decomposition, and compares with SciPy. Production guidance covers category contracts, rare-level handling, weighting, multiplicity, privacy, and drift.",
      "prerequisites": [
        "hypothesis-testing",
        "distributions"
      ],
      "learningObjectives": [
        "Distinguish chi-square goodness-of-fit, independence, and homogeneity questions and formulate their null models.",
        "Compute expected counts, Pearson cell contributions, the total statistic, and correct degrees of freedom.",
        "Diagnose sparse counts, structural zeros, dependence, sampling weights, and post-hoc cell inspection.",
        "Report residual patterns and association magnitude without interpreting association as causation."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Compute a Pearson independence test from scratch, verify expected margins and cell decomposition, and compare with SciPy.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "From contingency table to evidence"
        },
        {
          "type": "matrix",
          "title": "Categorical tests"
        }
      ],
      "followUpQuestions": [
        "How are expected counts computed for independence?",
        "What if expected counts are small?",
        "Does significant chi-square imply a strong relationship?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "power-sample-size",
      "title": "Power, Minimum Detectable Effect & Sample Size",
      "module": "stat-inference",
      "priority": "very-high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "Power is P(reject H0|a specified alternative is true), equal to 1-beta for a fixed design and test. Sample size grows with variance, stricter alpha, higher target power, and smaller effect—often approximately inverse-square in the detectable effect. Plan using the smallest effect worth acting on, realistic baseline/variance, independent unit, allocation, attrition, clustering, multiplicity, and stopping rule. MDE is what a design can reliably detect, not necessarily what matters. Do not use observed post-hoc power as new evidence; report the effect interval.",
      "keyPoints": [
        "Power is a curve over alternatives, not one universal number",
        "Effect threshold and variance drive sample size",
        "Independent information matters more than row count",
        "Design corrections must be included before launch",
        "Simulation audits formulas for real metrics and pipelines"
      ],
      "resources": [
        "statsmodels-power",
        "stanford-stats200",
        "openintro-stats",
        "asa-pvalues"
      ],
      "featured": true,
      "description": "Statistical power is the probability that a prespecified procedure rejects its null under a particular alternative. Sample-size planning connects that operating characteristic to a meaningful effect, variance, alpha, allocation, design, attrition, and decision horizon. This chapter derives normal-mean scaling, distinguishes minimum detectable effect from minimum worthwhile effect, explains one- versus two-sided tests, unequal allocation, clustering, multiple testing, sequential designs, and simulation-based power for complex estimators. You will learn why post-hoc observed power adds little beyond the p-value, why plugging optimistic variance or conversion assumptions understates required sample size, and why increasing rows does not overcome correlation or bias. The worked example plans a two-arm conversion experiment in absolute percentage points and inflates for attrition and design effect. The lab implements an approximate two-sample proportion calculation, verifies monotonic relationships, and compares a t-test case with statsmodels. Production guidance covers preregistered assumptions, traffic forecasts, guardrails, simulation, re-estimation without unblinding effects, monitoring, and stopping behavior.",
      "prerequisites": [
        "hypothesis-testing",
        "effect-size",
        "sampling-distributions"
      ],
      "learningObjectives": [
        "Define power as a function of a specific alternative, procedure, design, and sample size.",
        "Distinguish minimum detectable, minimum worthwhile, and observed effects in planning and interpretation.",
        "Compute approximate sample sizes and adjust for allocation, clustering, attrition, multiplicity, and sequential monitoring.",
        "Use simulation to validate analytic power for complex metrics and avoid post-hoc observed-power misuse."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Compute approximate two-proportion sample size, verify monotonic design relationships, and compare an independent t-test case with statsmodels.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Power rises with true effect"
        },
        {
          "type": "flow",
          "title": "Sample-size planning"
        }
      ],
      "followUpQuestions": [
        "What happens to n if the target effect is halved?",
        "Is 80% power always correct?",
        "Why avoid observed post-hoc power?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "bayes-update",
      "title": "Bayesian Updating: Prior, Likelihood & Posterior",
      "module": "bayesian",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Bayesian updating is posterior proportional to likelihood times prior: p(theta|y)=p(y|theta)p(theta)/p(y). The prior encodes assumptions before the current data, the likelihood is the data model, the evidence normalizes, and the posterior represents uncertainty conditional on both. Prediction integrates p(y_new|theta) over the posterior. Independent data batches can be updated sequentially, but duplicated or dependent evidence cannot be multiplied as if independent. Always check prior predictive implications, posterior sensitivity, model fit, and decision loss.",
      "keyPoints": [
        "Bayes reverses conditioning through a generative model",
        "The evidence normalizes and supports model comparison",
        "Posterior uncertainty is conditional on model and prior",
        "Prediction integrates rather than plugs in one parameter",
        "Sequential updating requires correct conditional independence"
      ],
      "resources": [
        "think-bayes",
        "pymc",
        "stan-predictive-checks",
        "stan-reference"
      ],
      "featured": false,
      "description": "Bayesian updating combines a prior distribution with a likelihood to produce a posterior distribution and then integrates that posterior to make predictions and decisions. The algebra is short, but responsible use requires clarity about what is conditioned on, how priors are chosen, which likelihood generated the data, and what uncertainty remains. This chapter develops Bayes' rule in odds and density form, separates prior predictive, posterior, posterior predictive, evidence, and likelihood, and explains sequential updating, exchangeability, sensitivity, and calibration. You will learn why the normalizing constant matters for model comparison but can be avoided by many samplers, why a posterior can be sharply wrong under misspecification, and how decision losses convert beliefs into actions. The worked example updates a Beta prior with conversion observations and computes the predictive chance of future successes. The lab implements a grid posterior from first principles, verifies it against the analytic Beta posterior, and checks normalization and sequential coherence. Production guidance covers prior governance, data lineage, numerical stability, monitoring, privacy, and rollback.",
      "prerequisites": [
        "probability-basics",
        "joint-marginal-conditional",
        "mle-map"
      ],
      "learningObjectives": [
        "Apply Bayes' rule in probability, odds, and density form while keeping conditioning directions correct.",
        "Distinguish prior, likelihood, evidence, posterior, and posterior predictive distributions.",
        "Perform coherent sequential updates and diagnose when order, dependence, or data reuse breaks the calculation.",
        "Evaluate prior sensitivity, model misspecification, predictive calibration, and decision consequences before deployment."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build a grid posterior for a Bernoulli rate, verify it against the analytic Beta posterior, and test normalization and sequential coherence.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Bayesian update and use"
        },
        {
          "type": "compare",
          "title": "Parameter and future uncertainty"
        }
      ],
      "followUpQuestions": [
        "Why is the evidence often ignored in MCMC?",
        "Does the prior always vanish with enough data?",
        "What is the difference between posterior and posterior predictive?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "conjugate-priors",
      "title": "Conjugate Priors",
      "module": "bayesian",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "A prior is conjugate when the posterior stays in the same family after multiplying by a likelihood. Beta with Bernoulli/Binomial updates successes and failures; Gamma with Poisson updates shape by total counts and rate by exposure; Normal with known-variance Normal likelihood combines means by precision. Conjugacy gives exact, fast, sequential updates and useful test fixtures, but the likelihood and prior still need to fit the domain. Check rate-versus-scale conventions, predictive calibration, and whether drift or hierarchy requires a richer model.",
      "keyPoints": [
        "Conjugacy is algebraic closure under updating",
        "Sufficient statistics compress the evidence",
        "Hyperparameters depend on parameterization conventions",
        "Predictive distributions integrate parameter uncertainty",
        "Computational convenience never replaces model criticism"
      ],
      "resources": [
        "think-bayes",
        "stan-reference",
        "scipy-stats"
      ],
      "featured": false,
      "description": "A conjugate prior produces a posterior in the same distribution family as the prior for a chosen likelihood. Conjugacy turns Bayesian updating into hyperparameter arithmetic, making it valuable for intuition, streaming updates, exact benchmarks, and low-latency systems. It does not make a prior objectively correct or every model realistic. This chapter derives Beta–Binomial/Bernoulli, Gamma–Poisson, and Normal–Normal updates, interprets pseudo-counts and precision weighting carefully, and explains posterior predictive distributions, exponential-family structure, improper limits, and when conjugacy becomes a modeling trap. You will learn how parameterization conventions change formulas, why sufficient statistics enable constant-memory updates, how prior strength differs from sample size under heterogeneous data, and when mixtures or hierarchical priors preserve flexibility. The worked examples cover conversion and event-rate estimation. The lab implements Beta–Binomial and Gamma–Poisson updates, checks batch-order invariance, and verifies moments against SciPy. Production guidance covers parameterization tests, numerical bounds, nonstationarity, prior versioning, predictive calibration, and analytic fallbacks.",
      "prerequisites": [
        "bayes-update",
        "distributions"
      ],
      "learningObjectives": [
        "Derive posterior hyperparameter updates for common conjugate likelihood–prior pairs.",
        "Interpret hyperparameters through sufficient statistics without overclaiming literal prior sample size.",
        "Compute posterior predictive distributions and distinguish them from plug-in likelihood predictions.",
        "Recognize parameterization, support, misspecification, and nonstationarity cases where conjugacy should not drive model choice."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement Beta–Bernoulli and Gamma–Poisson conjugate updates, verify batch-order invariance, and compare posterior moments with SciPy.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Three conjugate update patterns"
        },
        {
          "type": "flow",
          "title": "Conjugate streaming state"
        }
      ],
      "followUpQuestions": [
        "Why are conjugate updates easy to stream?",
        "What is the predictive distribution for Beta–Bernoulli?",
        "When should you leave conjugacy?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "credible-vs-confidence",
      "title": "Credible Intervals vs Confidence Intervals",
      "module": "bayesian",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "A 95% credible interval has 95% posterior probability for the parameter conditional on the model, prior, and observed data. A 95% confidence interval comes from a procedure that covers the fixed true parameter in 95% of repeated samples under its assumptions. The observed frequentist interval does not assign 95% probability to the parameter. Credible intervals may be equal-tailed or highest-density and depend on priors; confidence constructions differ too. Report the framework, estimand, method, assumptions, and practical thresholds, and evaluate both posterior sensitivity and repeated-sample calibration when useful.",
      "keyPoints": [
        "Credible probability is conditional on model, prior, and data",
        "Confidence is a property of a repeated-sampling procedure",
        "Equal-tailed and highest-density sets answer different geometric summaries",
        "Prediction includes observation noise beyond parameter uncertainty",
        "Numerical similarity does not erase interpretive differences"
      ],
      "resources": [
        "stanford-stats200",
        "think-bayes",
        "stan-predictive-checks",
        "scipy-stats"
      ],
      "featured": false,
      "description": "Bayesian credible intervals and frequentist confidence intervals can have similar numerical endpoints while making different probability statements. A credible interval contains a specified posterior probability under a prior and likelihood. A confidence interval is generated by a procedure with stated repeated-sample coverage under a sampling model. This chapter builds both from the same binomial example, compares equal-tailed and highest-density credible sets, explains parameter transformations, nuisance parameters, posterior predictive intervals, and the circumstances in which Bayesian and frequentist intervals approximately agree. You will learn why neither framework is assumption-free, why optional stopping and selection require framework-specific care, how prior sensitivity affects sparse-data credible intervals, and why a 95% posterior interval is not automatically calibrated across repeated real datasets. The worked example contrasts a Beta posterior interval with Wilson confidence coverage. The lab computes equal-tailed posterior intervals, simulates frequentist coverage, and verifies transformation behavior. Production guidance covers naming, metadata, calibration, priors, sequential policies, decision thresholds, privacy, and communication.",
      "prerequisites": [
        "bayes-update",
        "confidence-intervals",
        "conjugate-priors"
      ],
      "learningObjectives": [
        "State the probability interpretation of credible and confidence intervals without mixing frameworks.",
        "Construct equal-tailed and highest-density credible sets and contrast them with score or likelihood-based confidence intervals.",
        "Distinguish parameter uncertainty from posterior predictive uncertainty and transform intervals coherently.",
        "Evaluate prior sensitivity, frequentist coverage, calibration, selection, and stopping for deployed interval procedures."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Compute a Beta credible interval, simulate its fixed-parameter coverage, and compare with a Wilson confidence interval.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Same percentage, different statement"
        },
        {
          "type": "curve",
          "title": "Skewed posterior interval choices"
        }
      ],
      "followUpQuestions": [
        "Can a credible interval have 95% frequentist coverage?",
        "Why might equal-tailed and highest-density intervals differ?",
        "Which interval should a dashboard show?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "mcmc",
      "title": "MCMC & Posterior Sampling",
      "module": "bayesian",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "MCMC constructs a Markov chain with the posterior as its stationary distribution, then estimates posterior expectations from retained dependent draws. Metropolis–Hastings accepts a proposal with the target-density and proposal-ratio correction; HMC uses gradients to propose distant moves and NUTS adapts trajectory length. Run multiple dispersed chains, separate warmup, and check rank-normalized split R-hat, bulk and tail ESS, Monte Carlo SE, trace plots, divergences, treedepth, and model-specific calibration. A high acceptance rate or long chain alone does not prove convergence, and thinning rarely fixes autocorrelation.",
      "keyPoints": [
        "Stationarity does not guarantee finite-chain exploration",
        "Dependent draws reduce effective information",
        "Multiple diagnostics target different failures",
        "Geometry and parameterization dominate sampler performance",
        "Computation must be validated against known and simulated truth"
      ],
      "resources": [
        "stan-reference",
        "pymc",
        "think-bayes",
        "bayesian-workflow"
      ],
      "featured": false,
      "description": "Markov chain Monte Carlo approximates posterior expectations by constructing dependent draws whose stationary distribution is the target posterior. The central promise is asymptotic, while every real analysis uses finite chains that can fail to explore relevant modes or geometry. This chapter develops Metropolis–Hastings, Gibbs sampling, Hamiltonian Monte Carlo, and the No-U-Turn Sampler; distinguishes warmup from retained sampling; and explains detailed balance, autocorrelation, effective sample size, Monte Carlo standard error, rank-normalized split R-hat, divergences, treedepth, energy diagnostics, and multimodality. You will learn why acceptance rate alone is not convergence, why thinning usually discards information, how centered versus noncentered parameterizations change hierarchical geometry, and how to validate an implementation against conjugate truth and simulation-based calibration. The worked example samples a one-dimensional Beta posterior, then contrasts its easy geometry with a funnel. The lab builds random-walk Metropolis, compares posterior moments with SciPy, and checks multiple-chain mixing. Production guidance covers deterministic seeds, chain parallelism, diagnostics gates, compute budgets, artifact storage, privacy, and safe failure behavior.",
      "prerequisites": [
        "bayes-update",
        "conjugate-priors",
        "numerical-stability"
      ],
      "learningObjectives": [
        "Explain how a Markov transition kernel can leave a posterior invariant and why retained draws are dependent.",
        "Implement Metropolis–Hastings and relate proposal scale to exploration, acceptance, and autocorrelation.",
        "Interpret R-hat, bulk/tail ESS, Monte Carlo SE, divergences, treedepth, and trace diagnostics jointly.",
        "Diagnose multimodality, funnels, constraints, initialization, and parameterization failures before using posterior summaries."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build random-walk Metropolis for a Beta target, verify moments and multiple-chain agreement, and quantify acceptance versus autocorrelation.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Metropolis–Hastings transition"
        },
        {
          "type": "compare",
          "title": "Two kinds of uncertainty"
        }
      ],
      "followUpQuestions": [
        "Why retain repeated states after rejection?",
        "What is the difference between posterior SD and MCSE?",
        "Why does noncentering help hierarchical models?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "hierarchical-bayes",
      "title": "Hierarchical / Multilevel Models",
      "module": "bayesian",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "A hierarchical model assumes group parameters come from a shared population distribution, then learns both group effects and population hyperparameters. It partially pools: a group estimate is pulled toward the population mean in proportion to its uncertainty, so small noisy groups shrink more than large precise groups. This improves average estimation and handles multiplicity, but relies on exchangeability and a credible group distribution. Check hyperpriors, centered versus noncentered geometry, outliers, group count, fairness, and prediction for new groups.",
      "keyPoints": [
        "Partial pooling learns relatedness instead of choosing all-or-nothing pooling",
        "Shrinkage strength follows relative within- and between-group precision",
        "Exchangeability is a modeling claim",
        "Hyperpriors regularize weakly identified group variation",
        "New-group prediction integrates the population distribution"
      ],
      "resources": [
        "pymc",
        "stan-reference",
        "bayesian-workflow",
        "think-bayes"
      ],
      "featured": false,
      "description": "Hierarchical Bayesian models represent related groups with group-specific parameters drawn from a population distribution whose hyperparameters are learned from all groups. The result is partial pooling: noisy groups shrink more toward the population pattern, while well-observed groups retain more local information. This chapter contrasts no pooling, complete pooling, and partial pooling; derives Normal–Normal shrinkage; explains exchangeability, hyperpriors, varying intercepts and slopes, cross-level interactions, centered and noncentered parameterizations, new-group prediction, and the distinction between population-level variation and residual noise. You will learn why shrinkage reduces winner's curse and multiple-comparison noise, when it can erase real subgroup structure, how weakly identified group scales create funnels, and why groups with few levels need careful priors. The worked example estimates conversion rates across stores with unequal traffic. The lab implements analytic partial pooling for known variances, verifies limiting cases, and expresses the equivalent PyMC model. Production guidance covers group taxonomy, cold start, fairness, drift, diagnostics, posterior storage, privacy, and rollback.",
      "prerequisites": [
        "bayes-update",
        "conjugate-priors",
        "mcmc"
      ],
      "learningObjectives": [
        "Distinguish complete, no, and partial pooling and connect each to assumptions about group variation.",
        "Derive shrinkage weights from within-group uncertainty and between-group variance.",
        "Specify varying-intercept and varying-slope models with defensible exchangeability and hyperpriors.",
        "Diagnose funnel geometry, sparse groups, taxonomy drift, overshrinkage, and new-group predictive behavior."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement Normal hierarchical shrinkage with known hyperparameters, verify limiting behavior, and express the equivalent PyMC model.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Three pooling strategies"
        },
        {
          "type": "curve",
          "title": "Shrinkage weight versus group uncertainty"
        }
      ],
      "followUpQuestions": [
        "Which groups shrink most?",
        "What is prediction for a new group?",
        "When use noncentered parameterization?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "bayesian-model-checking",
      "title": "Posterior Predictive Checks & Bayesian Model Criticism",
      "module": "bayesian",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Prior predictive checks sample parameters from the prior and then data, revealing whether assumptions imply plausible outcomes before fitting. Posterior predictive checks sample parameters from the posterior and replicated data from the likelihood, then compare summaries and structure with observations. They can reveal dispersion, tails, zeros, dependence, and subgroup failures but do not prove the model true. Also check MCMC diagnostics, prior sensitivity, simulation-based calibration for the algorithm, and held-out prediction. Predefine important checks, version revisions, and do not treat posterior predictive p-values like ordinary p-values.",
      "keyPoints": [
        "Prior predictive checks criticize assumptions before data conditioning",
        "Posterior replication asks whether fitted models reproduce relevant structure",
        "Computation and model fit are separate gates",
        "Discrepancies should reflect decisions and failure modes",
        "Checking drives revision, not certification of truth"
      ],
      "resources": [
        "stan-predictive-checks",
        "pymc",
        "bayesian-workflow",
        "stan-reference"
      ],
      "featured": false,
      "description": "Bayesian model checking asks whether data generated from a fitted probability model resemble the observations in scientifically and operationally important ways. Prior predictive checks expose implications before fitting; posterior predictive checks compare replicated datasets with observed data after conditioning; simulation-based calibration audits inference algorithms; sensitivity analysis tests modeling choices; and held-out predictive evaluation measures generalization. This chapter explains what each check conditions on, how to choose discrepancy statistics and graphical diagnostics, why posterior predictive p-values are not ordinary uniform p-values, and how double use of data affects interpretation. You will learn to detect tail, dispersion, zero-inflation, dependence, subgroup, and calibration failures; separate computational from model criticism; compare models without treating one score as truth; and revise models without overfitting the checks. The worked example reveals overdispersion hidden by a Poisson mean fit. The lab generates prior and posterior predictive Beta–Binomial data, checks observed statistics, and verifies reproducibility. Production guidance covers check registries, acceptance gates, drift, privacy, reproducible artifacts, and rollback.",
      "prerequisites": [
        "bayes-update",
        "mcmc",
        "hierarchical-bayes"
      ],
      "learningObjectives": [
        "Distinguish prior predictive, posterior predictive, simulation-based calibration, and held-out predictive checks by what is generated and conditioned on.",
        "Design discrepancy statistics and plots that target domain-relevant aspects of the data rather than only global averages.",
        "Separate sampler convergence from model adequacy and identify tail, dispersion, dependence, subgroup, and calibration failures.",
        "Build a versioned model-revision workflow that avoids optimizing indefinitely against one reused check set."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Generate prior and posterior predictive Bernoulli data, compare observed discrepancies, and verify reproducible predictive calibration checks.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Bayesian model criticism loop"
        },
        {
          "type": "compare",
          "title": "Two simulators, different conditioning"
        }
      ],
      "followUpQuestions": [
        "What is the difference between prior and posterior predictive checks?",
        "Does a good posterior predictive check prove the model?",
        "What does simulation-based calibration test?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "regression-assumptions",
      "title": "Linear Regression Assumptions & Diagnostics",
      "module": "regression-glm",
      "priority": "very-high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "I do not ask whether linear regression assumptions hold in the abstract; I ask which claim I need. For unbiased conditional coefficients, the central condition is E[epsilon|X]=0 with a correctly specified conditional mean and usable design rank. Homoskedasticity is mainly needed for the classical covariance formula, and normality mainly for exact small-sample inference. Dependence must match the sampling and covariance estimator. I inspect residual patterns, time or group structure, leverage and influence, not only a normality test. Then I address the cause: respecify the mean, use heteroskedasticity- or cluster-robust inference, model dependence, improve data, or narrow the target population. Diagnostics reveal sensitivity; they do not prove causality or future stability.",
      "keyPoints": [
        "Assumptions support specific estimands, estimators, intervals, or deployment claims.",
        "E[epsilon|X]=0 is more central to coefficient bias than residual normality.",
        "Leverage is unusual X; residual is unusual Y given X; influence combines both.",
        "Robust covariance changes uncertainty, not fitted coefficients or omitted-variable bias.",
        "Dependence and selection must be represented in splitting and inference."
      ],
      "resources": [
        "isl",
        "statsmodels-regression-diagnostics",
        "nist-regression-diagnostics",
        "stanford-stats200"
      ],
      "featured": true,
      "description": "Regression assumptions are not a ritual checklist that makes a model valid after a few plots. They connect a particular estimand and inferential procedure to a data-generating and sampling process. This chapter separates assumptions needed for unbiased conditional-mean estimation, classical standard errors, prediction, and causal interpretation. You will reason about linearity in the conditional mean, exogeneity, independence or dependence structure, constant variance, rank, outcome tails, and measurement quality. Residual-versus-fitted, scale-location, quantile, leverage, studentized-residual, and Cook-distance diagnostics are explained as targeted probes rather than pass/fail tests. A worked example shows why a high-leverage observation can have a small residual yet materially move a coefficient. The lab computes the hat matrix diagonal, internally studentized residuals, and Cook's distance from first principles, cross-checks fitted values with scikit-learn, and verifies leverage and deletion behavior. Remedies are matched to causes: change the mean specification for nonlinearity, use an appropriate covariance estimator for variance misspecification, represent clusters or time dependence, improve measurement, or change the estimand. Robust standard errors do not repair bias, and deleting inconvenient points without provenance is not diagnosis.",
      "prerequisites": [
        "linear-regression",
        "hypothesis-testing"
      ],
      "learningObjectives": [
        "Map each regression assumption to the claim or calculation it supports.",
        "Interpret residual, leverage, studentized-residual, and influence diagnostics jointly.",
        "Choose remedies that address mean misspecification, variance, dependence, or data quality without conflating them.",
        "Design diagnostics and monitoring that respect time, groups, selection, and deployment conditions."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Compute residual, leverage, studentized-residual, and Cook-distance diagnostics from first principles and verify their geometric and deletion-sensitivity invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "scatter",
          "title": "Residual patterns diagnose different failures"
        },
        {
          "type": "compare",
          "title": "Three distinct case diagnostics"
        }
      ],
      "followUpQuestions": [
        "What is the difference between an outlier and a high-leverage point?",
        "Can OLS be useful under heteroskedasticity?",
        "Why inspect residuals over time?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "ridge-lasso-elasticnet",
      "title": "Ridge, Lasso & Elastic Net",
      "module": "regression-glm",
      "priority": "very-high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Ridge minimizes squared error plus an L2 coefficient penalty, shrinking correlated or weakly identified directions continuously and improving stability. Lasso uses L1, whose corners can set coefficients exactly to zero, but selection may be unstable among correlated features. Elastic net combines both, often retaining correlated groups while remaining sparse. I standardize continuous features within each training fold, generally exclude the intercept from the penalty, tune alpha and l1_ratio with a split that matches deployment, and reserve a final test set. Regularization trades bias for variance; it does not fix leakage or confounding, and lasso's nonzero set should not be interpreted as a uniquely true or causally important feature list.",
      "keyPoints": [
        "Ridge stabilizes all coefficients; lasso can produce exact zeros.",
        "Elastic net combines grouping stability with sparsity.",
        "Penalty strength depends on feature scale and library objective conventions.",
        "Tune the whole preprocessing-plus-model pipeline on honest folds.",
        "Sparse prediction and valid post-selection inference are different goals."
      ],
      "resources": [
        "isl",
        "sklearn-linear-models",
        "glmnet-coordinate-descent"
      ],
      "featured": true,
      "description": "Ridge, lasso, and elastic net regularize linear models by charging for coefficient magnitude. They address variance, ill-conditioning, and high-dimensional representation, but they express different beliefs and produce different stability properties. This chapter derives the penalized objectives, explains ridge as continuous shrinkage, lasso as sparse soft-thresholding, and elastic net as a compromise that can keep correlated groups together. You will learn why scaling must be fit inside the training pipeline, why the intercept is usually not penalized, how cross-validation chooses predictive tuning parameters, and why lasso's selected variables are not automatically scientific discoveries. Coefficient paths and bias-variance trade-offs are connected to design geometry and Bayesian priors. A correlated-feature example shows ridge distributing weight while lasso may arbitrarily choose one representative. The lab implements ridge and coordinate-descent lasso from scratch, compares with scikit-learn, and verifies shrinkage, sparsity, permutation, and convergence invariants. Production guidance covers feature-order contracts, sparse schema evolution, convergence, tuning leakage, coefficient drift, challenger evaluation, and rollback. Regularization can stabilize a prediction system; it cannot create information, fix leakage, or make a conditional association causal.",
      "prerequisites": [
        "linear-regression",
        "norms-distances"
      ],
      "learningObjectives": [
        "Compare ridge, lasso, and elastic-net objectives, geometry, and coefficient behavior.",
        "Implement ridge and lasso mechanisms and verify their solutions against a trusted library.",
        "Design leakage-safe scaling and cross-validation for regularization strength.",
        "Explain why sparse selection can be unstable and why predictive tuning is not valid post-selection inference."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement ridge and lasso coordinate descent on standardized data, compare with scikit-learn, and verify shrinkage, sparsity, permutation, and objective convergence.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Coefficient paths as penalty weakens"
        },
        {
          "type": "compare",
          "title": "Regularizer behavior"
        }
      ],
      "followUpQuestions": [
        "Why does lasso produce exact zeros but ridge usually does not?",
        "When would you prefer elastic net over lasso?",
        "Can regularized coefficients have ordinary OLS p-values?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "polynomial-splines",
      "title": "Polynomial Regression & Splines",
      "module": "regression-glm",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Polynomial regression adds powers or other fixed basis functions to a linear model, so it is nonlinear in x but linear in coefficients. High-degree global polynomials are often unstable and extrapolate badly. A regression spline uses low-degree polynomial pieces joined at knots, usually with continuity constraints; B-spline bases provide the same function space with better local support and conditioning. I choose knots or a smoothness penalty inside cross-validation, keep the basis transformation inside the pipeline, inspect boundary and derivative behavior, and define an explicit extrapolation policy. Coefficients depend on the basis, so I interpret the fitted curve, contrasts, or derivatives rather than raw spline coefficients.",
      "keyPoints": [
        "Nonlinear in predictors can still be linear in fitted coefficients.",
        "Global polynomials couple the whole domain; splines provide local flexibility.",
        "Knots define representation, while penalties or validation control effective complexity.",
        "Basis coefficients are coordinate-dependent; interpret functions and contrasts.",
        "Boundary support and extrapolation policy are production requirements."
      ],
      "resources": [
        "isl",
        "sklearn-spline-transformer",
        "sklearn-linear-models"
      ],
      "featured": false,
      "description": "Polynomial regression and splines extend linear regression to curved relationships while keeping estimation linear in coefficients. A raw high-degree polynomial is global: changing one coefficient can alter the curve everywhere, boundary behavior can become extreme, and powers can be badly conditioned. Regression splines instead join low-degree polynomial pieces at knots with continuity constraints, creating local flexibility. This chapter develops polynomial bases, truncated-power and B-spline representations, knot placement, natural boundary constraints, smoothing penalties, effective degrees of freedom, and honest complexity selection. You will distinguish interpolation from regression smoothing and understand why basis coefficients are usually less meaningful than the fitted function and its derivatives. A worked dose-response example shows how a cubic spline captures a plateau without forcing oscillation across the domain. The lab builds a truncated cubic regression-spline basis, uses scikit-learn's local B-spline transformer, and verifies continuity, rank, held-out error, and row-order invariance. Production guidance treats knots, boundaries, scaling, and extrapolation policy as versioned model state. Splines improve a conditional-mean specification over observed support; they do not solve confounding, sparse boundary data, or unsupported extrapolation.",
      "prerequisites": [
        "linear-regression"
      ],
      "learningObjectives": [
        "Explain why polynomial and spline regression remain linear in parameters while modeling nonlinear functions.",
        "Construct a regression-spline basis and relate knots, degree, continuity, and effective flexibility.",
        "Choose complexity using leakage-safe validation and diagnose unstable boundary or extrapolation behavior.",
        "Deploy a basis transform with reproducible knots, scaling, and out-of-range behavior."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build a truncated cubic regression spline, use a local B-spline pipeline, and verify continuity, rank, row-order invariance, and nonlinear held-out improvement.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Global polynomial versus spline"
        },
        {
          "type": "curve",
          "title": "Local flexibility around knots"
        }
      ],
      "followUpQuestions": [
        "What is the difference between a regression spline and smoothing spline?",
        "Why are B-splines numerically attractive?",
        "How do you model a nonlinear interaction?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "gam",
      "title": "Generalized Additive Models (GAMs)",
      "module": "regression-glm",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "A GAM models a transformed conditional mean as g(E[Y|X])=beta0+sum_j f_j(X_j), where each f_j is a smooth function represented by a basis and controlled by a roughness penalty. It captures nonlinear marginal effects while preserving an additive structure that is easy to plot and audit. Smooths need centering constraints so the intercept and components are identifiable, and their effective degrees of freedom are selected by cross-validation, REML-like criteria, or related methods. I inspect residuals, boundaries, concurvity, and missing interactions; add tensor-product terms only when justified. Component curves are conditional associations under the fitted model, not causal effects, and deployment must freeze bases, penalties, and extrapolation behavior.",
      "keyPoints": [
        "GAMs are additive in learned functions rather than necessarily linear in raw predictors.",
        "Centering smooth components separates them from the intercept.",
        "Penalties control wiggliness and effective degrees of freedom.",
        "Concurvity makes component attribution unstable even when prediction is adequate.",
        "Interactions and boundaries must be modeled and monitored deliberately."
      ],
      "resources": [
        "isl",
        "statsmodels-gam",
        "sklearn-spline-transformer"
      ],
      "featured": false,
      "description": "A generalized additive model (GAM) replaces a single linear predictor with a sum of learned smooth component functions while retaining an additive, inspectable structure. In a Gaussian GAM, E[Y|X]=beta0+f1(X1)+...+fp(Xp); with a link function, the additive predictor can model binary, count, and other exponential-family outcomes. This chapter explains identifiability constraints, spline bases, roughness penalties, backfitting, penalized likelihood, effective degrees of freedom, smoothness selection, uncertainty, and the limits of additive interpretation. You will see how concurvity generalizes collinearity when one feature's smooth function can mimic another's, and how tensor-product or varying-coefficient terms add only the interactions the problem needs. A worked energy-demand example separates nonlinear temperature and hour effects while treating weekday as a linear factor. The lab constructs centered spline blocks, fits a ridge-penalized additive model, compares with a scikit-learn pipeline, and verifies additivity, column permutation, and held-out improvement. Production guidance versions each basis and penalty, monitors feature support and component contributions, and routes unsupported combinations. GAM plots are conditional model components, not automatically causal effects or raw-data averages.",
      "prerequisites": [
        "polynomial-splines"
      ],
      "learningObjectives": [
        "Formulate Gaussian and generalized additive models and explain component identifiability constraints.",
        "Relate spline bases, roughness penalties, backfitting, and penalized likelihood to fitted smooth functions.",
        "Diagnose overfitting, concurvity, missing interactions, boundary weakness, and misleading component plots.",
        "Build and deploy an additive spline pipeline with reproducible component and support monitoring."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build a centered additive spline design, fit penalized components, compare with an idiomatic scikit-learn pipeline, and verify additivity, permutation, and nonlinear generalization.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "Additive predictor decomposition"
        },
        {
          "type": "compare",
          "title": "Stable prediction can hide unstable attribution"
        }
      ],
      "followUpQuestions": [
        "What is effective degrees of freedom in a GAM?",
        "How is a GAM different from polynomial regression?",
        "What is concurvity?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "poisson-regression",
      "title": "Poisson & Count Regression",
      "module": "regression-glm",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Poisson regression assumes Y|X has mean mu and log mu=beta0+x^T beta, optionally plus log exposure as a fixed offset. Exp(beta_j) is the conditional multiplicative change in expected count or rate for a one-unit predictor change. The Poisson variance equals its mean, so I check dispersion, residuals, zero and tail calibration, dependence, and exposure construction. Overdispersion may call for robust or quasi-likelihood inference, negative binomial, random effects, or a better mean model; structural zeros may justify hurdle or zero-inflated models only when the process supports them. I evaluate deviance and operational count or rate error on temporal or grouped data and never use ordinary linear regression merely because counts look large.",
      "keyPoints": [
        "The log link guarantees positive expected counts and yields rate ratios.",
        "Log exposure is an offset with fixed coefficient one.",
        "Poisson equidispersion is a conditional variance assumption, not a data-summary rule.",
        "Overdispersion has multiple causes and does not dictate one universal alternative.",
        "Validate zeros, tails, dependence, and operational capacity as well as mean deviance."
      ],
      "resources": [
        "nelder-wedderburn-glm",
        "sklearn-linear-models",
        "statsmodels-poisson-postestimation",
        "stanford-stats200"
      ],
      "featured": false,
      "description": "Poisson regression is a generalized linear model for nonnegative event counts. It models log expected count as a linear predictor, which guarantees positive means and gives multiplicative rate interpretations. The model becomes especially useful when observations have unequal exposure: a fixed log-exposure offset converts counts into rates without treating opportunity as an estimated effect. This chapter derives the Poisson likelihood, score, Hessian, deviance, and iteratively reweighted fitting; distinguishes coefficients on count, rate, and response scales; and explains equidispersion, overdispersion, underdispersion, excess zeros, dependence, and truncation. You will compare Poisson, quasi-Poisson covariance, negative-binomial, hurdle, and zero-inflated reasoning without selecting a model from the fraction of zeros alone. A worked incident example shows how to interpret an exposure-adjusted coefficient. The lab fits Poisson regression with an offset from first principles, compares it with scikit-learn's weighted-rate formulation, and verifies exposure and row-order invariants. Production guidance versions exposure units, count windows, and offset rules; monitors deviance, rate calibration, tail error, zero frequency, and capacity impact. A count model describes conditional event intensity—it does not automatically model distinct events, independence, causality, or future process stability.",
      "prerequisites": [
        "logistic-regression",
        "mle-map"
      ],
      "learningObjectives": [
        "Formulate and fit a Poisson GLM with a log link and exposure offset.",
        "Interpret coefficients as conditional rate ratios and compute response-scale contrasts.",
        "Diagnose overdispersion, excess zeros, dependence, truncation, and exposure errors.",
        "Choose and validate alternative count models based on a data-generating mechanism and deployment loss."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Fit an exposure-offset Poisson model with Newton updates, compare with scikit-learn's weighted-rate formulation, and verify rate, exposure, likelihood, and row-order invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "From rate to expected count"
        },
        {
          "type": "compare",
          "title": "Different sources of extra zeros or variance"
        }
      ],
      "followUpQuestions": [
        "What does a Poisson coefficient exponentiate to?",
        "When is negative binomial useful?",
        "How do robust standard errors differ from a negative-binomial model?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "robust-regression",
      "title": "Robust Regression",
      "module": "regression-glm",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Robust regression limits how much atypical observations can dominate a fit. Huber regression uses squared loss for small standardized residuals and linear loss for large ones, often fit by iteratively reweighted least squares; least absolute deviations targets the conditional median, Theil-Sen uses robust slope aggregation, and RANSAC fits consensus subsets. These methods have different estimands and assumptions. A residual-robust loss does not necessarily protect against a high-leverage x point that pulls the line toward itself, so I inspect design support and influence too. I tune the robustness threshold on honest data, compare ordinary and robust fits, investigate provenance, and monitor the fraction and identity of downweighted cases rather than deleting them silently.",
      "keyPoints": [
        "Squared loss gives unbounded residual influence; robust losses limit tail contribution.",
        "Huber combines efficient quadratic behavior near zero with linear tails.",
        "Residual robustness and leverage robustness are different problems.",
        "Robust estimators may target means, medians, or consensus relationships differently.",
        "Downweighted observations remain operational signals and require provenance review."
      ],
      "resources": [
        "huber-1964",
        "sklearn-linear-models",
        "nist-regression-diagnostics",
        "isl"
      ],
      "featured": false,
      "description": "Robust regression reduces the sensitivity of a fitted relationship to contaminated outcomes, heavy tails, and atypical observations. Ordinary least squares squares residuals, so one large miss can dominate the objective. Robust methods change the loss, weighting, or sampling mechanism: Huber M-estimation is quadratic near zero and linear in the tails; least absolute deviations targets a conditional median; Theil-Sen aggregates pairwise slopes; and RANSAC searches for a consensus subset under a declared inlier rule. This chapter explains influence functions, breakdown intuition, scale estimation, iteratively reweighted least squares, and why protection against large residuals does not automatically protect against high-leverage predictor contamination. You will distinguish a data error from a valid rare case and a changed population, compare estimands rather than treating every robust method as interchangeable, and evaluate central and tail performance on clean and stress scenarios. The lab implements Huber iteratively reweighted least squares, compares with scikit-learn, and verifies recovery, bounded sensitivity, and permutation invariants. Production guidance preserves raw-event provenance, logs robust weights, monitors contamination and support, and avoids silently hiding incidents that should trigger investigation.",
      "prerequisites": [
        "regression-assumptions"
      ],
      "learningObjectives": [
        "Explain how squared, absolute, and Huber losses respond to residual magnitude and which conditional functional they target.",
        "Implement Huber iteratively reweighted least squares and assess sensitivity to response contamination.",
        "Distinguish vertical outliers, high leverage, influence, breakdown, and valid rare populations.",
        "Select and monitor robust methods using provenance, stress tests, and operational loss rather than automatic outlier removal."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement Huber iteratively reweighted least squares, compare with scikit-learn, and verify recovery, bounded response sensitivity, and row-order invariance.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Squared and Huber loss"
        },
        {
          "type": "compare",
          "title": "Two different robustness problems"
        }
      ],
      "followUpQuestions": [
        "What controls the Huber robustness-efficiency trade-off?",
        "How is RANSAC different from Huber regression?",
        "What is a breakdown point?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "quantile-regression",
      "title": "Quantile Regression",
      "module": "regression-glm",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Quantile regression models Q_tau(Y|X=x)=x^T beta_tau by minimizing pinball loss rho_tau(r)=tau r for positive residuals and (tau-1)r for negative residuals. Tau 0.5 gives median regression; a high tau targets the conditional upper tail and can reveal effects hidden by mean regression under heteroskedasticity. I fit several declared quantiles, validate pinball loss and exceedance calibration on temporal or grouped data, inspect feature-conditional calibration and crossing, and regularize or use noncrossing methods when needed. A pair of fitted quantiles is not automatically a guaranteed prediction interval, especially after adaptive tuning or distribution shift, and coefficients remain conditional associations unless causal identification is supplied.",
      "keyPoints": [
        "Pinball loss asymmetrically prices under- and overprediction for a selected quantile.",
        "Different tau values describe different parts of the conditional outcome distribution.",
        "Quantile coefficients can vary under heteroskedasticity or shape change.",
        "Separately fit quantiles may cross and require joint constraints or post-processing.",
        "Validate exceedance rates conditionally and operationally, not only in aggregate."
      ],
      "resources": [
        "koenker-bassett-1978",
        "sklearn-linear-models",
        "stanford-stats200"
      ],
      "featured": false,
      "description": "Quantile regression estimates a chosen conditional quantile of an outcome rather than its conditional mean. At tau=0.5 it minimizes absolute residual loss and models the conditional median; at tau=0.9 it describes a high conditional outcome boundary. This chapter derives the asymmetric pinball loss, linear-program formulation, coefficient interpretation, sampling uncertainty, and the way multiple quantiles reveal heteroskedasticity and distributional shape. You will distinguish a conditional quantile curve from a marginal percentile, an individual prediction interval, and a conformal coverage guarantee. The chapter treats quantile crossing, tail data scarcity, regularization, censoring, dependence, and calibration over feature and time slices. A worked delivery-time example shows how traffic may have a modest median effect but a much larger upper-tail effect. The lab solves linear quantile regression with SciPy's linear programming interface, compares it with scikit-learn, and verifies pinball optimality, response translation, and empirical calibration. Production guidance versions tau, scaling, penalty, solver, and crossing policy; monitors exceedance rates, interval width, tail loss, subgroup behavior, and operational capacity. Quantile regression is robust to large response residuals relative to squared loss, but not immune to leverage, selection, unsupported tails, or causal confounding.",
      "prerequisites": [
        "linear-regression",
        "linear-programming"
      ],
      "learningObjectives": [
        "Derive the pinball-loss objective and formulate linear quantile regression as a linear program.",
        "Interpret quantile-specific coefficients and explain what coefficient differences reveal about conditional shape.",
        "Diagnose quantile crossing, tail scarcity, leverage, censoring, and conditional miscalibration.",
        "Build and monitor quantile forecasts and intervals without overstating marginal or finite-sample coverage."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Solve linear quantile regression as a linear program, compare with scikit-learn, and verify pinball optimality, translation equivariance, and empirical quantile behavior.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "scatter",
          "title": "Conditional quantiles under widening spread"
        },
        {
          "type": "compare",
          "title": "Model-based quantile band versus coverage guarantee"
        }
      ],
      "followUpQuestions": [
        "Why do quantile-regression lines cross?",
        "How does median regression differ from robust mean regression?",
        "Why are extreme quantiles difficult?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "hierarchical-clustering",
      "title": "Hierarchical Clustering",
      "module": "unsupervised",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Hierarchical clustering repeatedly merges or splits clusters and produces a dendrogram. Linkage choice defines how inter-cluster distance is measured and can strongly change results.",
      "keyPoints": [
        "Agglomerative clustering is common.",
        "Single/complete/average/Ward linkage behave differently.",
        "Scaling features matters."
      ],
      "resources": [
        "isl",
        "stanford-stats202"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "network",
          "title": "Hierarchical clustering dendrogram"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Hierarchical Clustering make?",
        "How would you validate or debug Hierarchical Clustering in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "dbscan",
      "title": "DBSCAN & Density-based Clustering",
      "module": "unsupervised",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "DBSCAN defines clusters as dense regions connected through neighborhoods, can identify noise points, and does not require a fixed number of clusters. It struggles when cluster densities vary strongly.",
      "keyPoints": [
        "eps and min_samples define density.",
        "Scaling/distance choice matters.",
        "Can find non-spherical clusters."
      ],
      "resources": [
        "sklearn"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Recover density-based clusters and noise points.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "scatter",
          "title": "Density-based clustering"
        }
      ],
      "followUpQuestions": [
        "What assumptions does DBSCAN & Density-based Clustering make?",
        "How would you validate or debug DBSCAN & Density-based Clustering in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "gmm",
      "title": "Gaussian Mixture Models & EM",
      "module": "unsupervised",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "A Gaussian mixture models data as a weighted combination of Gaussian components and gives soft cluster probabilities. EM alternates between estimating component responsibilities and updating parameters.",
      "keyPoints": [
        "Soft assignments differ from k-means hard labels.",
        "Covariance structure controls cluster shapes.",
        "Likelihood can favor complexity without regularization/model selection."
      ],
      "resources": [
        "sklearn",
        "isl"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Fit a Gaussian mixture and inspect soft memberships.",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does Gaussian Mixture Models & EM make?",
        "How would you validate or debug Gaussian Mixture Models & EM in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "tsne-umap",
      "title": "t-SNE & UMAP for Visualization",
      "module": "unsupervised",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "t-SNE and UMAP create low-dimensional embeddings that emphasize neighborhood structure, mainly for exploration/visualization. Global distances and cluster sizes can be misleading, especially with t-SNE.",
      "keyPoints": [
        "Do not treat 2D distance as ground truth.",
        "Hyperparameters change plots.",
        "Use PCA or task metrics alongside visualization."
      ],
      "resources": [
        "sklearn",
        "d2l",
        "distill-tsne"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "scatter",
          "title": "Embedding visualization"
        }
      ],
      "followUpQuestions": [
        "What assumptions does t-SNE & UMAP for Visualization make?",
        "How would you validate or debug t-SNE & UMAP for Visualization in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "density-estimation",
      "title": "Density Estimation & KDE",
      "module": "unsupervised",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Density estimation approximates the underlying probability density. Kernel density estimation smooths observations with kernels; bandwidth is the critical bias–variance control.",
      "keyPoints": [
        "Bandwidth too small overfits, too large oversmooths.",
        "Dimension hurts nonparametric density estimation.",
        "Useful for exploration/anomaly scoring in low dimension."
      ],
      "resources": [
        "sklearn",
        "openintro-stats"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does Density Estimation & KDE make?",
        "How would you validate or debug Density Estimation & KDE in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "experiment-design",
      "title": "Randomized Experiment Design",
      "module": "experimentation",
      "priority": "very-high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "I start with the causal estimand and target population, then choose the unit at which treatment can be assigned without unacceptable spillover or carryover. I define eligibility before randomization, stable assignment, treatment versions, primary outcomes, guardrails, duration, and exclusions. I use blocking on strong pre-treatment predictors to improve balance and precision, cluster randomization when units interact, and switchbacks when treatment operates at a shared time-varying system level. Analysis follows the assignment mechanism and preserves ITT. I predeclare power, multiplicity, stopping, missingness, and noncompliance handling, then validate assignment and exposure before reading effects.",
      "keyPoints": [
        "Design begins with estimand and interference structure",
        "Randomization unit and analysis unit must remain aligned",
        "Blocking can improve precision using pre-treatment information",
        "Cluster and switchback designs trade bias control for effective sample size",
        "ITT, missingness, and treatment versions must be specified before outcomes"
      ],
      "resources": [
        "trustworthy-oce-survey",
        "stanford-stats60",
        "microsoft-experimentation",
        "network-experimentation-scale"
      ],
      "featured": true,
      "description": "Randomized experiment design determines what causal question a test can answer before any statistical model is fit. This chapter develops experimental units, treatment versions, eligibility, potential outcomes, assignment mechanisms, complete and Bernoulli randomization, blocking and stratification, cluster and switchback designs, factorial experiments, unequal allocation, covariate balance, noncompliance, attrition, spillovers, exposure, power, preregistration, and analysis plans. You will learn to align randomization with the interference and delivery structure, separate design-stage balance from post-hoc adjustment, preserve intention-to-treat analysis, and avoid conditioning on variables affected by treatment. A worked marketplace example compares buyer-level, market-level, and time-block assignment under seller competition. The lab implements deterministic blocked randomization, checks allocation and balance invariants, and estimates a known treatment effect over repeated simulations. Production guidance covers assignment services, salts, mutual exclusion, ramps, identity changes, logging, privacy, monitoring, incident response, and rollback. A good design makes a simple estimator credible; no amount of downstream modeling can reconstruct counterfactual evidence destroyed by a flawed assignment or measurement process.",
      "prerequisites": [
        "ab-testing",
        "sampling-design",
        "causal-inference"
      ],
      "learningObjectives": [
        "Choose an experimental unit and assignment mechanism that match treatment delivery, interference, carryover, and the target estimand.",
        "Use blocking, clustering, factorial structure, and unequal allocation with correct analysis and power implications.",
        "Specify intention-to-treat, exposure, attrition, noncompliance, and missing-outcome handling before observing effects.",
        "Implement reproducible blocked assignment and verify determinism, allocation, covariate balance, and estimator behavior."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement reproducible blocked assignment, verify allocation and pre-treatment balance, and confirm difference-in-means behavior across repeated randomized assignments.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Design follows the causal system"
        },
        {
          "type": "compare",
          "title": "Common randomization structures"
        }
      ],
      "followUpQuestions": [
        "When should you cluster-randomize?",
        "Why block randomization?",
        "What is a switchback experiment?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "sample-ratio-mismatch",
      "title": "Sample Ratio Mismatch (SRM)",
      "module": "experimentation",
      "priority": "high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "SRM means the observed variant counts are inconsistent with the planned allocation beyond ordinary random fluctuation. I test assignment-unit counts against expected proportions, usually with a chi-square goodness-of-fit check, before looking at effects. A very small p-value is a smoke alarm, not an effect adjustment: I investigate assignment, eligibility, exposure delivery, missing telemetry, identity changes, redirects, filters, joins, bots, and time of onset. I also distinguish all-assigned SRM from triggered-population SRM. Until the root cause is explained and shown not to bias the estimand, I quarantine the result and normally fix and restart the experiment.",
      "keyPoints": [
        "SRM tests allocation integrity, not treatment impact",
        "Expected counts come from the actual design and ramp history",
        "Assignment, exposure, and analysis populations need separate checks",
        "The chi-square p-value detects a symptom but not its cause",
        "A failed SRM gate blocks causal interpretation until diagnosed"
      ],
      "resources": [
        "srm-taxonomy",
        "microsoft-srm-guide",
        "microsoft-experimentation",
        "trustworthy-oce-survey"
      ],
      "featured": false,
      "description": "Sample ratio mismatch (SRM) occurs when observed experiment allocation counts differ implausibly from the proportions specified by the randomization design. It is one of the highest-value trust diagnostics in online experimentation because many assignment, eligibility, exposure, identity, and logging defects first appear as unexpected arm counts. This chapter derives the multinomial chi-square check, explains its assumptions and scale sensitivity, distinguishes assignment-level from triggered-analysis SRM, and builds a root-cause taxonomy across randomization, delivery, telemetry, filtering, bots, joins, and time. You will learn why SRM is a symptom rather than a correction target, why balanced outcomes cannot rescue a failed trust check, how to localize onset and affected slices, and when unequal counts are expected by design. A worked redirect bug shows how treatment-dependent loss reverses an apparent effect. The lab implements the SRM statistic and p-value, compares it with SciPy, and diagnoses a time-slice failure using invariants. Production guidance covers continuous alerting, multiple looks, minimum counts, ownership, forensic snapshots, restart criteria, and rollback. The rule is simple: do not interpret treatment effects until the mismatch is understood and the causal sample is trustworthy.",
      "prerequisites": [
        "experiment-design",
        "chi-square",
        "missingness-mechanisms"
      ],
      "learningObjectives": [
        "Compute an SRM goodness-of-fit statistic for arbitrary planned allocation proportions and interpret it as a trust diagnostic.",
        "Separate valid random allocation fluctuation from assignment, delivery, exposure, logging, filtering, identity, and join failures.",
        "Localize an SRM by event stage, time, platform, geography, eligibility, and identifier without outcome-driven fishing.",
        "Define automated alert, investigation, restart, and evidence-preservation procedures for an experimentation platform."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement a multinomial SRM check, compare it with SciPy, and localize a treatment-specific count loss across time slices.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Localize an SRM by stage"
        },
        {
          "type": "compare",
          "title": "SRM response"
        }
      ],
      "followUpQuestions": [
        "Does unequal arm size always mean SRM?",
        "Can an experiment with SRM still be analyzed?",
        "Why can assignment SRM pass while analysis SRM fails?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "cuped",
      "title": "Variance Reduction & CUPED",
      "module": "experimentation",
      "priority": "medium",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "CUPED reduces experiment variance by subtracting the predictable part of an outcome from a pre-treatment covariate. With outcome Y and centered covariate X, define Y_adj=Y-theta(X-E[X]), where theta=Cov(Y,X)/Var(X). Because treatment is randomized and X is measured before treatment, arm means of X are equal in expectation, so the treatment contrast stays unbiased while residual variance falls; with an optimal single covariate the ideal reduction is rho squared. I freeze the pre-period cutoff, estimate theta without outcome-driven selection, handle missing X explicitly, preserve ITT, and verify the adjusted effect against the raw estimate and historical simulations.",
      "keyPoints": [
        "CUPED removes outcome variation predictable before treatment",
        "Pre-treatment timing protects the causal contrast",
        "Ideal single-covariate variance reduction is governed by squared correlation",
        "Regression adjustment generalizes CUPED but needs design-aware specification",
        "Precision gains never excuse SRM, leakage, or post-treatment selection"
      ],
      "resources": [
        "cuped-paper",
        "trustworthy-oce-survey",
        "microsoft-experimentation",
        "numpy-linalg"
      ],
      "featured": false,
      "description": "Controlled-experiment variance reduction uses pre-treatment information to make treatment-effect estimates more precise without changing the randomized causal contrast. CUPED (Controlled-experiment Using Pre-Experiment Data) adjusts an outcome by a centered covariate measured before assignment, typically the same user metric in a historical window. This chapter derives the optimal linear coefficient, variance reduction factor, unbiasedness under randomization, cross-fitting and regression adjustment, missing pre-period data, triggered metrics, ratio metrics, multiple covariates, heterogeneity, and failure modes. You will learn why correlation determines precision gain, why post-treatment covariates create bias, why centering and a treatment interaction matter, and how to estimate gains on historical A/A-style data rather than selecting a favorable adjustment after seeing outcomes. A worked revenue experiment shows a large variance reduction with unchanged effect expectation. The lab implements CUPED from first principles, compares it with an OLS treatment coefficient, and verifies unbiased effect recovery plus reduced variance over repeated randomized trials. Production guidance covers cutoff enforcement, leakage checks, coefficient versioning, missingness, metric lineage, monitoring, fallback, and rollback. CUPED creates information by removing predictable noise; it cannot repair broken randomization or measurement.",
      "prerequisites": [
        "experiment-design",
        "expectation-variance",
        "linear-regression"
      ],
      "learningObjectives": [
        "Derive the CUPED adjustment coefficient and variance reduction from covariance and correlation.",
        "Choose covariates that are predictive, pre-treatment, consistently available, and unaffected by assignment or exposure.",
        "Connect CUPED to regression adjustment, interactions, cross-fitting, and robust analysis for complex metrics.",
        "Implement and validate an adjustment using unbiasedness, variance, leakage, missingness, and reproducibility checks."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement CUPED adjustment, compare it with regression adjustment, and verify effect unbiasedness plus variance reduction over repeated randomized experiments.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "CUPED information path"
        },
        {
          "type": "compare",
          "title": "What CUPED changes"
        }
      ],
      "followUpQuestions": [
        "Why does CUPED remain unbiased?",
        "How much variance can it remove?",
        "What if theta is estimated from the experiment?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "sequential-testing",
      "title": "Sequential Testing, Peeking & Early Stopping",
      "module": "experimentation",
      "priority": "high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "A fixed-horizon test controls Type I error only for its planned sample and analysis. If I repeatedly peek and stop when p<0.05, I give noise multiple chances to cross the threshold and inflate false positives. Valid options include prespecified group-sequential looks with alpha spending, a sequential probability ratio test for specified alternatives, or anytime-valid p-values, e-values, and confidence sequences. I define the stopping rule, information times, minimum duration, primary metric, multiplicity, and delayed-outcome handling before launch. Safety kill switches can stop exposure immediately, but confirmatory efficacy claims still follow their declared evidence procedure.",
      "keyPoints": [
        "Optional stopping changes the sampling distribution",
        "Monitoring schedule and stopping rule are part of the design",
        "Group-sequential methods spend a finite error budget across planned looks",
        "Confidence sequences provide simultaneous coverage over time",
        "Safety stopping and efficacy inference answer different questions"
      ],
      "resources": [
        "confidence-sequences",
        "enterprise-anytime-valid",
        "trustworthy-oce-survey",
        "stanford-stats200"
      ],
      "featured": false,
      "description": "Sequential experimentation allows data-dependent monitoring or stopping while preserving a declared error guarantee. Repeatedly applying a fixed-horizon p-value whenever new data arrive does not do this: optional stopping selects unusually favorable noise and inflates false positives. This chapter develops fixed-horizon designs, group-sequential looks, alpha spending, sequential probability ratio tests, always-valid p-values, e-values, confidence sequences, futility, harm stopping, minimum run constraints, delayed outcomes, and decision-theoretic trade-offs. You will learn why stopping rules are part of the statistical procedure, how time-uniform intervals differ from ordinary intervals, how to choose between planned looks and continuous monitoring, and why operational kill switches should not be confused with efficacy claims. A worked product experiment contrasts naive peeking with an anytime-valid rule. The lab simulates false-positive inflation from fixed-horizon peeking and verifies control from a Bonferroni group-sequential design using SciPy. Production guidance covers dashboards, information time, alpha budgets, metric multiplicity, late data, restarts, safety escalation, audit logs, and rollback. Sequential methods provide flexibility only when the monitoring rule and evidence process are designed together.",
      "prerequisites": [
        "ab-testing",
        "hypothesis-testing",
        "confidence-intervals"
      ],
      "learningObjectives": [
        "Explain mathematically and through simulation why optional stopping invalidates repeatedly viewed fixed-horizon p-values.",
        "Choose and interpret fixed-horizon, group-sequential, alpha-spending, confidence-sequence, and e-value procedures.",
        "Separate efficacy, futility, harm, operational, and business stopping rules with their distinct guarantees.",
        "Implement and validate a planned-look design using family-wise error simulations and an immutable monitoring schedule."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Simulate false-positive inflation from naive peeking and verify family-wise control from a planned Bonferroni group-sequential design.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Conceptual monitoring boundaries"
        },
        {
          "type": "compare",
          "title": "Two monitoring systems"
        }
      ],
      "followUpQuestions": [
        "What is a confidence sequence?",
        "What is alpha spending?",
        "Can you always stop an experiment for harm?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "metric-design",
      "title": "Metric Design: North Star, Driver & Guardrail Metrics",
      "module": "experimentation",
      "priority": "very-high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "I start from the decision and long-term user/business objective, then create an OEC or primary metric whose direction is credibly aligned with that objective. I add driver metrics for the causal mechanism and guardrails for reliability, safety, fairness, cost, and ecosystem harm. Every metric has a contract: population, unit, numerator, denominator, time window, attribution, aggregation, missingness, direction, and version. I validate sensitivity on historical experiments and directionality against long-term outcomes and known bad changes. I avoid arbitrary composites and average-of-averages, report uncertainty, and treat metric changes like schema migrations because they alter historical and experimental meaning.",
      "keyPoints": [
        "Metrics operationalize values and assumptions",
        "OEC, drivers, diagnostics, and guardrails serve different roles",
        "Directionality and sensitivity must both be validated",
        "Population, unit, denominator, and window define the estimand",
        "Metric versions and lineage are part of scientific reproducibility"
      ],
      "resources": [
        "trustworthy-oce-metrics",
        "metric-development-kdd",
        "dirty-dozen-metrics",
        "microsoft-experimentation"
      ],
      "featured": true,
      "description": "Metric design translates a product objective into a measurable, sensitive, directionally trustworthy decision system. A North Star or Overall Evaluation Criterion (OEC) should predict long-term value closely enough to guide short experiments, driver metrics explain mechanisms, and guardrails prevent unacceptable harm. This chapter develops metric contracts, populations, units, numerators, denominators, windows, attribution, directionality, sensitivity, validity, reliability, gaming, ratio estimands, heavy tails, missingness, delayed outcomes, composite scores, proxy risk, and metric lifecycle governance. You will learn why more activity is not always better, why per-user and per-event averages answer different questions, how denominator changes can reverse a result, and how to validate short-term proxies against long-term outcomes and known interventions. A worked recommendation-system scorecard separates engagement from satisfaction and ecosystem health. The lab builds a semantic metric contract and ratio-of-sums calculator, rejects grain and denominator errors, and verifies invariants against pandas. Production guidance covers lineage, versioning, backfills, dashboards, experiment inference, access control, alerts, deprecation, correction, and rollback. The goal is not one magical number; it is an auditable map from user and business value to decisions under uncertainty.",
      "prerequisites": [
        "experiment-design",
        "groupby-pivot",
        "causal-inference"
      ],
      "learningObjectives": [
        "Define a metric through population, unit, event, numerator, denominator, window, attribution, direction, and missingness semantics.",
        "Construct primary, driver, diagnostic, and guardrail metrics that map to a causal product theory rather than a dashboard inventory.",
        "Evaluate directionality, sensitivity, validity, reliability, robustness, gaming risk, and long-term proxy quality.",
        "Implement and test ratio metrics with grain, denominator, reconciliation, and versioning invariants."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Validate a semantic metric contract, compute a ratio of sums at user grain, and verify that aggregation, denominators, and pandas results reconcile.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Metric decision hierarchy"
        },
        {
          "type": "compare",
          "title": "Two plausible rate estimands"
        }
      ],
      "followUpQuestions": [
        "What makes a good OEC?",
        "Why can per-active-user metrics mislead?",
        "Should guardrails be included in a composite?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "funnels",
      "title": "Funnels & Conversion Analysis",
      "module": "experimentation",
      "priority": "high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "A funnel is a versioned sequence estimand, not just counts by event name. I define the eligible entity and entry cohort, strict or loose order, conversion window, repeat and re-entry rules, identity resolution, and whether conversion is unique entities or event completions. I deduplicate at the chosen unit, require complete follow-up or handle censoring, and reconcile cumulative counts so they cannot increase. I segment only with pre-step attributes for causal interpretation, inspect time-to-transition and alternative paths, and use experiments to test proposed causes. Drop-off shows where progression stops under the definition; it does not prove why.",
      "keyPoints": [
        "Funnel definitions construct the population and path",
        "Entity counts and event counts answer different questions",
        "Conversion windows and maturity prevent unequal opportunity",
        "Step drop-off is descriptive, not a causal explanation",
        "Identity and event-contract quality dominate trustworthy funnel analysis"
      ],
      "resources": [
        "amplitude-funnel-docs",
        "amplitude-experiment-metrics",
        "berkeley-data100",
        "fundamentals-dataviz"
      ],
      "featured": false,
      "description": "Funnel analysis measures how eligible entities progress through a defined sequence of product states or events and where they fail, branch, repeat, or take too long. A funnel is not an objective map of user behavior: step definitions, order rules, identity, attribution, conversion window, denominator, and re-entry policy construct the result. This chapter develops strict and loose funnels, unique-user versus event conversion, closed versus open cohorts, step and cumulative rates, time-to-convert, competing paths, censoring, segmentation, instrumentation, causal limits, and experimental use. You will learn how repeated events and inner joins inflate conversion, why recent entrants have incomplete opportunity, how to distinguish a product obstacle from selection, and when a state machine or journey analysis is better than a linear funnel. A worked checkout example exposes an identity and window bug. The lab implements a deterministic ordered unique-user funnel from raw events, compares it with pandas, and verifies monotonic counts, window rules, deduplication, and denominator reconciliation. Production guidance covers event contracts, late data, sessionization, privacy, monitoring, metric versions, and rollback. The goal is a reproducible behavioral estimand that guides hypotheses, not a decorative narrowing chart that implies causality.",
      "prerequisites": [
        "metric-design",
        "groupby-pivot",
        "eda-workflow"
      ],
      "learningObjectives": [
        "Define funnel population, entity, step events, ordering, window, attribution, repetition, and denominator semantics precisely.",
        "Compute cumulative and step conversion without double counting entities or granting unequal observation opportunity.",
        "Diagnose instrumentation, identity, time, competing-path, and selection explanations for apparent drop-off.",
        "Implement and verify an ordered funnel while preserving raw counts, transition times, and alternative paths."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build an ordered unique-user funnel from event histories, compare counts with pandas, and verify monotonicity, deduplication, and conversion-window semantics.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "funnel",
          "title": "Ordered checkout funnel"
        },
        {
          "type": "compare",
          "title": "Linear funnel versus journey view"
        }
      ],
      "followUpQuestions": [
        "What is a strict funnel?",
        "Why can cumulative counts increase?",
        "How do you compare funnel conversion in an A/B test?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "cohort-retention",
      "title": "Cohort Retention Analysis",
      "module": "experimentation",
      "priority": "high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "Retention starts with a fixed cohort, usually entities sharing a first value event or acquisition period, and asks what fraction performs a defined return behavior at each age. I specify exact-period versus rolling retention, interval boundaries, identity, denominator, resurrection, and observation cutoff. Recent cohorts do not have mature later ages, so I leave those cells unavailable rather than zero. I compare cohorts at the same age, inspect calendar effects and acquisition mix, and use survival or hazard methods when time-to-churn and censoring matter. A better curve is descriptive until an experiment or causal design supports attribution.",
      "keyPoints": [
        "Cohort time and calendar time are separate axes",
        "Retention depends on the value event and denominator contract",
        "Recent cohort cells are censored, not zero",
        "Exact, rolling, and survival retention answer different questions",
        "Composition and identity changes can mimic product retention gains"
      ],
      "resources": [
        "amplitude-experiment-metrics",
        "mixpanel-retention",
        "lifelines",
        "berkeley-data100"
      ],
      "featured": false,
      "description": "Cohort retention analysis follows entities from a common starting event and measures whether they return to a value-defining behavior at comparable ages. It separates lifecycle decay from calendar-time shocks, but only when cohort assignment, activity, interval boundaries, identity, denominator, and observation maturity are defined consistently. This chapter develops acquisition and behavioral cohorts, exact-period, rolling, and bracket retention, survival-style retention, resurrection, churn, cohort-age matrices, censoring, composition, seasonality, segmentation, uncertainty, and experimental interpretation. You will learn why recent cohorts form an incomplete triangle, why retention can rise when low-value users never enter the denominator, how identity and late events reshape curves, and when Kaplan-Meier or hazard analysis is more appropriate. A worked subscription example separates acquisition-mix change from product improvement. The lab builds a monthly exact-period retention matrix from first activity and later events, compares with pandas, and verifies cohort size, maturity, identity uniqueness, and denominator invariants. Production guidance covers semantic models, incremental updates, backfills, privacy, monitoring, causal tests, and rollback. The goal is a lifecycle measurement system that reveals durable value, not a color grid interpreted without population or time context.",
      "prerequisites": [
        "funnels",
        "groupby-pivot",
        "censoring-survival"
      ],
      "learningObjectives": [
        "Define cohort membership, start event, retained behavior, age interval, denominator, and resurrection semantics.",
        "Compute exact, rolling, and survival-style retention while handling right censoring and incomplete recent cohorts.",
        "Decompose retention changes into cohort composition, lifecycle, calendar time, instrumentation, and product mechanisms.",
        "Implement and validate a cohort matrix with maturity and reconciliation checks."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build an exact monthly cohort-retention matrix, compare it with pandas, and verify cohort membership, maturity, uniqueness, and denominators.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "matrix",
          "title": "Conceptual cohort retention matrix"
        },
        {
          "type": "compare",
          "title": "Three retention questions"
        }
      ],
      "followUpQuestions": [
        "What is rolling retention?",
        "Why is the cohort table triangular?",
        "When should you use survival analysis?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "ltv-churn",
      "title": "Churn, Lifetime Value & Unit Economics",
      "module": "experimentation",
      "priority": "high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "LTV is expected discounted future contribution margin over a stated horizon, conditional on current information and policy. In subscriptions, churn may be an observed cancellation or nonrenewal; in noncontractual products, inactivity is latent and needs a repeat-purchase/dropout model or an operational lapse rule. I handle right censoring, customer heterogeneity, refunds and variable costs, validate on mature chronological cohorts, and report cohort calibration and uncertainty rather than only individual rank. CAC comparison uses incremental fully loaded acquisition cost. A high predicted LTV does not imply targeting will cause value; intervention decisions need treatment effects and costs.",
      "keyPoints": [
        "LTV is a horizon- and policy-dependent expectation",
        "Contribution margin differs from revenue",
        "Churn is observed only in some business settings",
        "Censoring and heterogeneity are central, not edge cases",
        "Predictive value and incremental intervention value are different estimands"
      ],
      "resources": [
        "customer-base-models",
        "fader-heterogeneity",
        "lifelines",
        "statsmodels-survival"
      ],
      "featured": false,
      "description": "Customer lifetime value (LTV or CLV) is the discounted expected contribution margin generated by a customer or cohort over a declared future horizon, while churn describes a contractual cancellation or a modeled loss of future activity. Both are forecasts with behavioral, accounting, censoring, and policy assumptions; neither is a timeless label stored on a user. This chapter develops contractual versus noncontractual settings, retention and hazard, right censoring, revenue versus margin, discounting, acquisition cost, payback, cohort versus individual prediction, BG/NBD-style customer-base models, survival models, calibration, chronological validation, treatment effects, uncertainty, and decision use. You will learn why last activity is not observed churn, why a constant-retention formula can be dangerously optimistic, how heterogeneity changes aggregate value, and why marketing intervention can invalidate passive forecasts. A worked subscription example separates gross revenue from incremental contribution value. The lab implements Kaplan-Meier survival and discounted cohort LTV from first principles, compares grouped calculations with pandas, and verifies censoring and monotonicity invariants. Production guidance covers label maturity, leakage, policy feedback, monitoring, fairness, cost, rollback, and human review.",
      "prerequisites": [
        "cohort-retention",
        "censoring-survival",
        "probability-basics"
      ],
      "learningObjectives": [
        "Define churn, survival, margin, horizon, discounting, and acquisition cost for contractual and noncontractual businesses.",
        "Estimate retention under right censoring and translate survival or repeat-purchase forecasts into discounted expected contribution value.",
        "Validate LTV models chronologically with calibration, ranking, aggregate value, policy, and uncertainty metrics.",
        "Distinguish predictive customer value from incremental value caused by a retention or acquisition action."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement Kaplan-Meier survival and finite-horizon discounted contribution LTV, compare grouped risk calculations with pandas, and verify censoring and monotonicity.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "LTV evidence chain"
        },
        {
          "type": "compare",
          "title": "Prediction versus intervention"
        }
      ],
      "followUpQuestions": [
        "What is right censoring?",
        "How does LTV differ in contractual and noncontractual businesses?",
        "How do you validate LTV?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "potential-outcomes",
      "title": "Potential Outcomes & Average Treatment Effects",
      "module": "causal",
      "priority": "very-high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Causal inference defines treatment effects through potential outcomes: what the same unit would experience under treatment versus control. Because both cannot be observed, identification requires randomization or assumptions/design.",
      "keyPoints": [
        "Fundamental problem: one potential outcome is missing.",
        "ATE, ATT and CATE answer different questions.",
        "Assignment mechanism is central."
      ],
      "resources": [
        "causal-mixtape",
        "harvard-causal-diagrams"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Potential outcomes"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Potential Outcomes & Average Treatment Effects make?",
        "How would you validate or debug Potential Outcomes & Average Treatment Effects in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "backdoor-adjustment",
      "title": "Backdoor Adjustment & Confounding Control",
      "module": "causal",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "A valid adjustment set blocks noncausal backdoor paths between treatment and outcome without conditioning on colliders or descendants that introduce bias. DAGs make these assumptions explicit.",
      "keyPoints": [
        "Control confounders, not every available variable.",
        "Conditioning on colliders can create associations.",
        "Causal graph is an assumptions tool."
      ],
      "resources": [
        "harvard-causal-diagrams",
        "causal-mixtape"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does Backdoor Adjustment & Confounding Control make?",
        "How would you validate or debug Backdoor Adjustment & Confounding Control in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "propensity-scores",
      "title": "Propensity Scores, Matching & Weighting",
      "module": "causal",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "The propensity score is the probability of treatment given observed covariates. Matching or inverse-probability weighting can balance observed confounders, but cannot repair unmeasured confounding or poor overlap.",
      "keyPoints": [
        "Check common support/positivity.",
        "Assess covariate balance after adjustment.",
        "Extreme weights increase variance."
      ],
      "resources": [
        "causal-mixtape"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does Propensity Scores, Matching & Weighting make?",
        "How would you validate or debug Propensity Scores, Matching & Weighting in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "difference-in-differences",
      "title": "Difference-in-Differences",
      "module": "causal",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Difference-in-differences compares outcome changes over time between treated and control groups. Its key identifying assumption is that, absent treatment, their trends would have evolved in parallel.",
      "keyPoints": [
        "Inspect pre-trends.",
        "Treatment timing and anticipation matter.",
        "Use clustered/appropriate uncertainty."
      ],
      "resources": [
        "causal-mixtape"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Compute a simple 2x2 difference-in-differences estimate.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Difference-in-differences"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Difference-in-Differences make?",
        "How would you validate or debug Difference-in-Differences in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "instrumental-variables",
      "title": "Instrumental Variables",
      "module": "causal",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "An instrumental variable affects treatment, is independent of unmeasured outcome causes under assumptions, and affects the outcome only through treatment. IV can identify causal effects when confounding remains, but valid instruments are hard to justify.",
      "keyPoints": [
        "Relevance, independence and exclusion restriction.",
        "Weak instruments create unstable estimates.",
        "Often estimates a local effect for compliers."
      ],
      "resources": [
        "causal-mixtape"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does Instrumental Variables make?",
        "How would you validate or debug Instrumental Variables in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "regression-discontinuity",
      "title": "Regression Discontinuity",
      "module": "causal",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "RDD exploits a treatment rule that changes at a cutoff. Units just above and below the threshold can be comparable if they cannot precisely manipulate the running variable and potential outcomes vary smoothly at the cutoff.",
      "keyPoints": [
        "Focus inference near cutoff.",
        "Check manipulation and continuity.",
        "Do not extrapolate local effects broadly without justification."
      ],
      "resources": [
        "causal-mixtape"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "scatter",
          "title": "Regression discontinuity"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Regression Discontinuity make?",
        "How would you validate or debug Regression Discontinuity in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "synthetic-control",
      "title": "Synthetic Control",
      "module": "causal",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Synthetic control builds a weighted combination of untreated units that reproduces the treated unit’s pre-treatment trajectory, then uses post-treatment divergence as an estimated effect.",
      "keyPoints": [
        "Useful for one/few treated aggregate units.",
        "Pre-treatment fit is crucial.",
        "Placebo/permutation checks help assess unusualness."
      ],
      "resources": [
        "causal-mixtape"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Synthetic control"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Synthetic Control make?",
        "How would you validate or debug Synthetic Control in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "heterogeneous-treatment",
      "title": "Heterogeneous Treatment Effects & Uplift Modeling",
      "module": "causal",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Heterogeneous treatment-effect models estimate how intervention effects differ across units. The target is incremental impact, not outcome probability, so ordinary response prediction can rank the wrong people.",
      "keyPoints": [
        "CATE/uplift differs from propensity to respond.",
        "Use randomized/identified treatment data.",
        "Evaluate policy value and uplift curves carefully."
      ],
      "resources": [
        "causal-mixtape"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does Heterogeneous Treatment Effects & Uplift Modeling make?",
        "How would you validate or debug Heterogeneous Treatment Effects & Uplift Modeling in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "time-series-components",
      "title": "Trend, Seasonality, Cycles & Remainder",
      "module": "time-series",
      "priority": "very-high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "A time series can contain trend, seasonal patterns, longer cycles and irregular remainder. I identify these structures before selecting a model because validation and feature construction depend on them.",
      "keyPoints": [
        "Plot the series first.",
        "Seasonality has a known calendar frequency; cycles need not.",
        "Multiple seasonalities can coexist."
      ],
      "resources": [
        "fpp3"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "Time-series decomposition"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Trend, Seasonality, Cycles & Remainder make?",
        "How would you validate or debug Trend, Seasonality, Cycles & Remainder in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "lag-features",
      "title": "Lags, Rolling Windows & Leakage",
      "module": "time-series",
      "priority": "very-high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "Lag and rolling features summarize past information, but they must be constructed using only data available at prediction time. Centered windows or post-outcome aggregates silently leak the future.",
      "keyPoints": [
        "Shift before rolling when necessary.",
        "Feature availability timestamp matters.",
        "Use the same pipeline in backtests and production."
      ],
      "resources": [
        "fpp3",
        "pandas-user-guide"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "Lags, Rolling Windows & Leakage"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Lags, Rolling Windows & Leakage make?",
        "How would you validate or debug Lags, Rolling Windows & Leakage in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "naive-seasonal-baselines",
      "title": "Naive, Seasonal-Naive & Drift Baselines",
      "module": "time-series",
      "priority": "very-high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "Forecasting should start with naive baselines. Last-value, seasonal-naive and drift forecasts often perform surprisingly well; a complex model is useful only if it beats the baseline out-of-sample.",
      "keyPoints": [
        "Seasonal-naive repeats last comparable season.",
        "Drift extrapolates average trend.",
        "Baseline defines whether complexity adds value."
      ],
      "resources": [
        "fpp3"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Build naive and seasonal-naive forecasts before complex models.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Forecast baselines"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Naive, Seasonal-Naive & Drift Baselines make?",
        "How would you validate or debug Naive, Seasonal-Naive & Drift Baselines in practice?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "decomposition-stl",
      "title": "Classical Decomposition & STL",
      "module": "time-series",
      "priority": "high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "Decomposition separates trend, seasonal and remainder components. STL uses local regression and allows flexible changing seasonality, making it valuable for exploration, deseasonalization and anomaly diagnosis.",
      "keyPoints": [
        "Additive vs multiplicative structure.",
        "STL supports robust fitting to reduce outlier influence.",
        "Decomposition itself is not always the final forecast model."
      ],
      "resources": [
        "fpp3"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Decompose a seasonal series with STL.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "STL decomposition"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Classical Decomposition & STL make?",
        "How would you validate or debug Classical Decomposition & STL in practice?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "dynamic-regression",
      "title": "Dynamic Regression / ARIMAX",
      "module": "time-series",
      "priority": "high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "Dynamic regression combines external predictors with time-series error structure. It is useful when known drivers such as price, holidays or weather explain demand but residuals remain autocorrelated.",
      "keyPoints": [
        "Future exogenous variables must be known or forecast.",
        "Residual autocorrelation indicates incomplete dynamics.",
        "Scenario forecasts depend on driver scenarios."
      ],
      "resources": [
        "fpp3",
        "statsmodels-tsa"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does Dynamic Regression / ARIMAX make?",
        "How would you validate or debug Dynamic Regression / ARIMAX in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "state-space-kalman",
      "title": "State-Space Models & Kalman Filtering",
      "module": "time-series",
      "priority": "medium",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "State-space models represent an evolving hidden state and an observation process. The Kalman filter recursively updates Gaussian linear state estimates as new observations arrive, enabling smoothing, missing-data handling and online forecasting.",
      "keyPoints": [
        "Separate latent state dynamics from observation noise.",
        "Filter = current state using data so far; smoother uses future data too.",
        "Many forecasting models have state-space forms."
      ],
      "resources": [
        "statsmodels-tsa",
        "fpp3"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Kalman filter cycle"
        }
      ],
      "followUpQuestions": [
        "What assumptions does State-Space Models & Kalman Filtering make?",
        "How would you validate or debug State-Space Models & Kalman Filtering in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "multiple-seasonality",
      "title": "Multiple & Complex Seasonalities",
      "module": "time-series",
      "priority": "medium",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "Series such as hourly traffic can have daily, weekly and annual patterns. Models may use Fourier terms, dynamic harmonic regression, TBATS, boosted trees or neural approaches rather than a single seasonal period.",
      "keyPoints": [
        "Multiple periods need explicit representation.",
        "Calendar effects differ from smooth seasonality.",
        "Long seasonal periods make naive one-hot approaches expensive."
      ],
      "resources": [
        "fpp3"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does Multiple & Complex Seasonalities make?",
        "How would you validate or debug Multiple & Complex Seasonalities in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "intermittent-demand",
      "title": "Intermittent Demand Forecasting",
      "module": "time-series",
      "priority": "medium",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "Intermittent demand contains many zeros with irregular positive events. Standard smooth forecasts can be biased; Croston-style methods separately model demand size and inter-arrival intervals.",
      "keyPoints": [
        "Zeros can be structural, not missing.",
        "Evaluate with business-relevant inventory metrics.",
        "Aggregate level can change intermittency."
      ],
      "resources": [
        "fpp3",
        "nixtla"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does Intermittent Demand Forecasting make?",
        "How would you validate or debug Intermittent Demand Forecasting in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "hierarchical-forecasting",
      "title": "Hierarchical & Grouped Forecast Reconciliation",
      "module": "time-series",
      "priority": "high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "When forecasts exist at product, region and total levels, independently trained models can be incoherent. Reconciliation adjusts forecasts so aggregation constraints are satisfied while preserving accuracy as much as possible.",
      "keyPoints": [
        "Bottom-up, top-down and optimal reconciliation differ.",
        "Hierarchy can be crossed/grouped, not only a tree.",
        "Accuracy should be assessed across levels."
      ],
      "resources": [
        "fpp3",
        "nixtla"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "network",
          "title": "Hierarchical forecasts"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Hierarchical & Grouped Forecast Reconciliation make?",
        "How would you validate or debug Hierarchical & Grouped Forecast Reconciliation in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "probabilistic-forecasting",
      "title": "Prediction Intervals & Probabilistic Forecasting",
      "module": "time-series",
      "priority": "very-high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "A point forecast hides uncertainty. Probabilistic forecasting estimates quantiles or a full predictive distribution so decisions can reflect asymmetric risk and service levels.",
      "keyPoints": [
        "Prediction interval includes future observation uncertainty.",
        "Quantile loss evaluates conditional quantiles.",
        "Calibration and sharpness both matter."
      ],
      "resources": [
        "fpp3",
        "nixtla"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Probabilistic forecast"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Prediction Intervals & Probabilistic Forecasting make?",
        "How would you validate or debug Prediction Intervals & Probabilistic Forecasting in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "ml-forecasting",
      "title": "Machine Learning for Forecasting",
      "module": "time-series",
      "priority": "high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "Tree/boosting models can forecast by transforming temporal history into supervised features such as lags, rolling statistics, calendar variables and exogenous drivers. Backtesting must preserve temporal order and feature availability.",
      "keyPoints": [
        "Global models can learn across many related series.",
        "Recursive vs direct multi-step strategies differ.",
        "Feature leakage is a major risk."
      ],
      "resources": [
        "nixtla",
        "fpp3"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does Machine Learning for Forecasting make?",
        "How would you validate or debug Machine Learning for Forecasting in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "neural-forecasting",
      "title": "Neural Forecasting",
      "module": "time-series",
      "priority": "medium",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "Neural forecasting models learn temporal patterns across one or many series using recurrent, convolutional or transformer-style architectures. They are most useful when scale, many related series or rich covariates justify the complexity.",
      "keyPoints": [
        "Always compare with strong statistical baselines.",
        "Global models share information across series.",
        "Probabilistic objectives are common."
      ],
      "resources": [
        "nixtla",
        "d2l"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does Neural Forecasting make?",
        "How would you validate or debug Neural Forecasting in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "forecast-monitoring",
      "title": "Forecast Monitoring & Retraining",
      "module": "time-series",
      "priority": "high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "Forecast systems need monitoring for bias, scale changes, missing updates, driver drift and horizon-specific error. Retraining cadence should reflect how quickly relationships change and whether new labels arrive.",
      "keyPoints": [
        "Track error by horizon/segment.",
        "Bias can matter more than symmetric error.",
        "Backfill/revisions complicate evaluation."
      ],
      "resources": [
        "fpp3",
        "google-rules-ml"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Forecast monitoring loop"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Forecast Monitoring & Retraining make?",
        "How would you validate or debug Forecast Monitoring & Retraining in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "anomaly-types",
      "title": "Point, Contextual & Collective Anomalies",
      "module": "anomaly",
      "priority": "high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "A point anomaly is unusual by itself, a contextual anomaly is unusual only relative to conditions such as time or peer group, and a collective anomaly is a sequence or set whose joint pattern is unusual even when each element is ordinary. Before choosing a detector, I define the observation unit, normal reference population, available context, score, alert budget, investigation action, and label process. I fit transformations only on clean historical reference data and avoid future leakage. Detection scores rank cases; thresholds are operational policies chosen from capacity and cost. I monitor score and alert-rate drift, duplicate incidents, group coverage, delayed labels, and the share of alerts caused by data-pipeline failures.",
      "keyPoints": [
        "Anomaly is relative to a reference distribution, context, and action.",
        "Point, contextual, and collective anomalies require different features and units.",
        "A continuous anomaly score is separate from the alert threshold.",
        "Reference contamination, future leakage, and cold starts can dominate algorithm choice.",
        "Investigation feedback and alert burden are part of the model system."
      ],
      "resources": [
        "anomaly-survey",
        "sklearn-outlier"
      ],
      "featured": false,
      "description": "An anomaly is an observation or pattern that violates an explicitly defined expectation in a context that matters. Point anomalies are individually unusual, contextual anomalies are unusual only given time, segment, or state, and collective anomalies are ordinary-looking elements whose sequence or group is abnormal. This chapter turns that taxonomy into an engineering contract: define the unit, reference population, context, score direction, contamination assumptions, action, label horizon, and cost of review before choosing an algorithm. You will distinguish anomaly detection from novelty detection, supervised rare-event classification, data-quality validation, and change-point detection. Robust scaling, peer groups, seasonal residuals, sequence windows, and representation choices are connected to the kinds of deviation they expose. A worked payment example shows why the same amount can be normal for one merchant and anomalous for another, while a burst of small transactions can be collectively suspicious. The lab builds contextual median/MAD scores and a collective window score, compares with standardized residuals, and verifies invariance and context behavior. Production guidance prioritizes alert budgets, deduplication, investigation feedback, drift, cold starts, and safe fallback over arbitrary score cutoffs.",
      "prerequisites": [
        "distributions-outliers",
        "distributions"
      ],
      "learningObjectives": [
        "Classify point, contextual, and collective anomalies and connect each type to a valid reference set and representation.",
        "Write an anomaly-detection contract covering unit, context, score, threshold, action, feedback, and failure costs.",
        "Distinguish outlier detection, novelty detection, supervised rare-event prediction, change-point detection, and data validation.",
        "Build and verify robust contextual and collective scores without using future or cross-entity information."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build robust contextual and collective anomaly scores, compare with standardized residuals, and verify context, translation, and burst-detection invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Three anomaly units"
        },
        {
          "type": "flow",
          "title": "Anomaly system contract"
        }
      ],
      "followUpQuestions": [
        "What is the difference between novelty and outlier detection?",
        "How do you evaluate an unsupervised detector with few labels?",
        "Why aggregate alerts into incidents?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "isolation-forest",
      "title": "Isolation Forest",
      "module": "anomaly",
      "priority": "high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "Isolation Forest creates many random partition trees. Each node chooses a feature and a split within that feature's observed range; points that are few and different tend to be isolated in fewer edges. The anomaly score is roughly 2 raised to minus average path length divided by the expected path length c(psi) for a random binary-search tree of subsample size psi. Subsampling makes training fast and can reduce masking by large normal clusters. Tree scores rank unusualness; contamination generally sets a threshold and does not discover prevalence. I validate feature representation, stability across seeds and reference windows, score direction, alert budget, and labeled or audited incident yield, and I watch for clustered anomalies, duplicates, high-dimensional noise, drift, and unsupported novelty use.",
      "keyPoints": [
        "Shorter average isolation path means more anomalous under the fitted forest.",
        "c(psi) normalizes paths across subsample size.",
        "Subsampling is central to both efficiency and detection behavior.",
        "Feature representation shapes the random partitions even without distance metrics.",
        "A threshold and contamination setting are policy layers over a score."
      ],
      "resources": [
        "isolation-forest-paper",
        "sklearn-outlier",
        "anomaly-survey"
      ],
      "featured": false,
      "description": "Isolation Forest scores anomalies by how quickly random recursive partitions isolate them. Instead of estimating a density or distance directly, each tree selects a feature and a split between observed minimum and maximum; unusual points tend to reach small leaves along shorter paths. This chapter derives path length, the unsuccessful binary-search-tree normalization c(psi), ensemble scoring, subsampling, feature subsampling, and the separate role of contamination or threshold policy. You will understand why the method is computationally attractive, where axis-aligned random cuts work, and why clustered anomalies, irrelevant high-dimensional features, one-hot representations, duplicates, missing values, and concept drift can defeat it. The chapter distinguishes outlier fitting from novelty scoring and explains score-direction differences in library APIs. A worked telemetry example traces a shallow isolation path. The lab builds a true reusable isolation-tree ensemble from scratch, compares it with scikit-learn, and verifies deterministic, translation, range, and injected-outlier invariants. Production guidance freezes sampling, seed, feature and score conventions; monitors path and alert distributions, support, duplicate rates, and incident yield; and uses a later reference window plus an explicit alert budget rather than presenting contamination as a learned prevalence.",
      "prerequisites": [
        "anomaly-types",
        "random-forest"
      ],
      "learningObjectives": [
        "Build isolation trees and compute normalized ensemble anomaly scores from path lengths.",
        "Explain how subsample size, tree count, feature representation, and contamination affect behavior.",
        "Diagnose masking, clustered anomalies, irrelevant features, duplicates, and drift.",
        "Deploy Isolation Forest with reproducible score direction, thresholds, references, and incident-level monitoring."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build reusable isolation trees and normalized forest scores, compare with scikit-learn, and verify injected-outlier, determinism, range, and translation invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "One isolation path"
        },
        {
          "type": "curve",
          "title": "Normalized score versus path length"
        }
      ],
      "followUpQuestions": [
        "Why use small subsamples?",
        "What happens to duplicate observations?",
        "Is Isolation Forest suitable for novelty detection?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "lof-oneclass",
      "title": "Local Outlier Factor & One-Class SVM",
      "module": "anomaly",
      "priority": "medium",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "LOF finds points whose local reachability density is low relative to their k nearest neighbors, so a point can be normal inside a sparse cluster even if it is globally far away. A score near one is locally comparable; much above one suggests a local outlier. One-Class SVM instead estimates a regularized support boundary in feature space, often with an RBF kernel; nu controls a trade-off related to training errors and support vectors, while gamma controls boundary scale. I fit scaling on a trusted reference, tune k or gamma/nu on later data and alert capacity, and distinguish LOF's default training-set outlier mode from novelty=True scoring of new points. I monitor distance concentration, neighbor/support-vector stability, reference contamination, score direction, and incident yield.",
      "keyPoints": [
        "LOF compares local density with neighbor density rather than using one global threshold.",
        "Reachability distance reduces unstable density estimates around very close neighbors.",
        "One-Class SVM learns a kernel support boundary, not an event probability.",
        "Scaling, metric, k, gamma, nu, and reference purity define the detector.",
        "LOF outlier and novelty modes have different scoring semantics."
      ],
      "resources": [
        "lof-paper",
        "one-class-svm-paper",
        "sklearn-outlier"
      ],
      "featured": false,
      "description": "Local Outlier Factor (LOF) and One-Class SVM answer two different versions of support-based anomaly detection. LOF compares a point's local reachability density with the densities of its neighbors, making it useful when normal data contain regions of different density. One-Class SVM learns a regularized boundary around reference data in a kernel feature space and is naturally framed as novelty detection. This chapter derives k-distance, reachability distance, local reachability density, LOF, the one-class support-estimation objective, kernel and nu behavior, and the practical difference between transductive training-set outlier detection and scoring unseen observations. You will learn why distance scaling, categorical representation, neighborhood size, curse of dimensionality, reference contamination, kernel bandwidth, and computational cost control results. A worked two-cluster example shows why a global distance score can overflag a sparse legitimate cluster while LOF compares locally. The lab implements LOF from first principles, compares exactly with scikit-learn, adds an RBF One-Class SVM novelty score, and verifies density-ratio, permutation, and injected-outlier behavior. Production guidance freezes reference, scaler, metric, k, kernel, nu, and score direction while monitoring neighbor distances, support vectors, alert burden, and cold-start coverage.",
      "prerequisites": [
        "anomaly-types",
        "knn"
      ],
      "learningObjectives": [
        "Compute LOF from k-neighbor reachability distances and explain local density-ratio interpretation.",
        "Explain One-Class SVM support estimation, kernel bandwidth, nu, and decision score semantics.",
        "Distinguish training-set outlier detection from novelty scoring and avoid invalid LOF API use.",
        "Diagnose scaling, high-dimensional distance concentration, reference contamination, and computational constraints."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement Local Outlier Factor exactly, compare it with scikit-learn, and verify local-density, permutation, and One-Class SVM novelty behavior.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "scatter",
          "title": "Local density versus global distance"
        },
        {
          "type": "compare",
          "title": "Local density and kernel support"
        }
      ],
      "followUpQuestions": [
        "Why use reachability distance instead of raw distance in LOF?",
        "How do you choose k?",
        "What does gamma do in RBF One-Class SVM?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "rare-event-evaluation",
      "title": "Rare-event Evaluation & Alert Thresholds",
      "module": "anomaly",
      "priority": "very-high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "For rare events I separate ranking, probability, threshold, and operations. I report precision-recall curves or average precision, recall at the actual top-k review capacity, and threshold-specific counts and cost; accuracy is usually uninformative and ROC AUC can conceal false-positive burden. Precision and AP depend on prevalence, so the evaluation population and sampling weights must match deployment. If scores are probabilities I also test calibration and proper losses. I choose the threshold on validation data from costs, capacity, or a recall constraint, then evaluate once on a later untouched window at the incident level. Because labels are delayed and only alerts may be reviewed, I track unknowns, random-audit nonalerts, and report uncertainty.",
      "keyPoints": [
        "Ranking, calibration, threshold performance, and queue operations are different layers.",
        "Precision and the PR baseline change with event prevalence.",
        "Recall at k directly represents a fixed review budget.",
        "Thresholds must be chosen outside the final evaluation window.",
        "Selective and delayed labels require audits and explicit unknown status."
      ],
      "resources": [
        "pr-imbalanced-paper",
        "sklearn-average-precision",
        "sklearn-calibration",
        "google-rules-ml"
      ],
      "featured": true,
      "description": "Rare-event evaluation asks whether a score produces useful decisions when positives are scarce, labels are delayed or selective, and false alerts consume real capacity. Accuracy and even ROC AUC can hide failure: predicting every case negative gives high accuracy, while a small false-positive rate can still overwhelm investigators. This chapter derives precision, recall, specificity, false-positive rate, precision-recall curves, non-interpolated average precision, lift, recall at k, calibration, proper scores, expected cost, and threshold selection. It explains why precision and average precision depend on prevalence, why evaluation must use the deployment sampling unit and time window, and why alert deduplication changes the metric denominator. You will handle uncertain labels, review selection, delayed outcomes, incident grouping, confidence intervals, and threshold overfitting. A worked fraud queue example turns a review budget into recall-at-capacity and net value. The lab implements confusion metrics, average precision, top-k recall, and coherent cost selection, then verifies them against scikit-learn. Production guidance versions score and policy separately, monitors queue and incident yield, audits nonalerts, and recalibrates or reselects thresholds when prevalence, cost, capacity, or label processes change.",
      "prerequisites": [
        "classification-metrics",
        "anomaly-types"
      ],
      "learningObjectives": [
        "Compute and interpret rare-event ranking, threshold, probability, and capacity metrics without conflating them.",
        "Explain how prevalence, sampling, label delay, and incident grouping affect precision-recall evidence.",
        "Select a threshold from coherent costs or operational constraints on data independent of final evaluation.",
        "Design production audits and confidence estimates for selective, delayed, and incomplete labels."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement rare-event counts, top-k metrics, average precision, and cost-sensitive threshold selection, then verify against scikit-learn and imbalance invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Precision-recall operating trade-off"
        },
        {
          "type": "flow",
          "title": "Evidence from score to outcome"
        }
      ],
      "followUpQuestions": [
        "What is the difference between PR AUC and average precision?",
        "When is recall at k preferable?",
        "How do you compare precision across populations?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "censoring-survival",
      "title": "Censoring, Survival & Hazard Functions",
      "module": "survival",
      "priority": "high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "For event time T, survival is S(t)=P(T>t), cumulative incidence without competing risks is F(t)=1-S(t), hazard is the instantaneous event rate among those still event-free, and cumulative hazard H(t)=integral h with S(t)=exp(-H(t)). Right censoring at C observes Y=min(T,C) and delta=I(T<=C), so a censored row contributes evidence of survival through Y, not an event at Y and not no information. Kaplan-Meier and standard likelihoods need censoring independent of event time, often conditional on modeled covariates. I define time origin, event, entry, competing events, and label maturity; use risk sets that respect delayed entry; and inspect censoring and follow-up by segment before modeling.",
      "keyPoints": [
        "Censoring preserves partial ordering information and is not ordinary missingness.",
        "Hazard is a conditional rate among survivors, not a probability by itself.",
        "S(t)=exp[-H(t)] in continuous time and F(t)=1-S(t) without competing risks.",
        "Truncation changes who enters the sample; censoring limits what is observed after entry.",
        "Time origin, risk set, censoring, and label maturity define the estimand."
      ],
      "resources": [
        "kaplan-meier-paper",
        "lifelines",
        "statsmodels-survival"
      ],
      "featured": false,
      "description": "Survival analysis models the time until an event while preserving partial information from subjects whose event time is not fully observed. Right censoring says only that the event occurs after the last observed time; left censoring, interval censoring, delayed entry, and truncation encode different observation mechanisms and require different risk sets or likelihoods. This chapter develops the event time T, survival S(t), distribution F(t), density f(t), hazard h(t), cumulative hazard H(t), and their relationships. You will distinguish a conditional instantaneous hazard from event probability over an interval, state independent or conditionally independent censoring assumptions, and see why dropping censored rows or treating censoring time as the event creates bias. A worked subscription example traces a cohort through events, censoring, and changing risk sets. The lab computes survival, hazard, and cumulative hazard for a discrete event-time distribution, compares an exponential model with SciPy, and verifies monotonicity and algebraic identities. Production guidance fixes time origin, event, horizon, time zones, censoring, delayed entry, competing events, and label maturity; monitors censoring by segment and calendar time; and blocks evaluation beyond supported follow-up. Survival methods use censored information—they do not make informative loss to follow-up harmless.",
      "prerequisites": [
        "distributions",
        "joint-marginal-conditional"
      ],
      "learningObjectives": [
        "Define survival, cumulative distribution, density, hazard, and cumulative hazard and move correctly between them.",
        "Distinguish right, left, interval censoring, left truncation, and delayed entry in both words and risk-set logic.",
        "State the censoring and observation assumptions required for common estimators and diagnose likely informative censoring.",
        "Construct a leakage-safe event-time dataset with explicit origin, event, maturity, entry, and competing-event semantics."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Compute discrete survival, hazard, and cumulative hazard and compare a continuous exponential model with SciPy while verifying algebraic and monotonicity invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Observed event-time paths"
        },
        {
          "type": "compare",
          "title": "Three linked event-time functions"
        }
      ],
      "followUpQuestions": [
        "What is the relationship between hazard and survival?",
        "How is left truncation different from left censoring?",
        "What is restricted mean survival time?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "kaplan-meier",
      "title": "Kaplan–Meier Estimator & Log-rank Test",
      "module": "survival",
      "priority": "high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "At each distinct event time t_j, Kaplan-Meier multiplies the previous survival by 1-d_j/n_j, where d_j events occur among n_j subjects at risk just before the time. Censoring does not drop the curve; it removes subjects from later risk sets. The estimate assumes event and censoring times are independent, possibly conditional on group, and tails with few at risk are uncertain. The log-rank test compares observed group events with expected events from pooled risk sets across times and is most sensitive to roughly proportional hazard differences. I show confidence bands and numbers at risk, inspect crossing curves and censoring by group, predeclare the horizon and multiplicity plan, and avoid causal interpretation without an identified treatment comparison.",
      "keyPoints": [
        "KM is a product of conditional survival fractions at event times.",
        "Censoring removes later risk membership but does not create a survival drop.",
        "Tail precision depends on numbers at risk, not only the plotted line.",
        "Log-rank tests equality of survival experience with risk-set weighting.",
        "Group curves and p-values do not adjust confounding or establish causality."
      ],
      "resources": [
        "kaplan-meier-paper",
        "lifelines",
        "stanford-stats200"
      ],
      "featured": false,
      "description": "The Kaplan-Meier estimator reconstructs a survival curve from right-censored observations by multiplying conditional survival proportions at distinct event times. Censored subjects contribute to risk sets until censoring and then leave without causing a drop. This chapter derives the product-limit estimator, risk-set and tie conventions, Greenwood-style uncertainty, median and restricted-mean interpretation, group curves, and the log-rank test as an observed-minus-expected event comparison over pooled risk sets. You will understand why late tails become unstable when few subjects remain, why visually crossing curves violate the simple proportional weighting intuition of log-rank, and why a significant group comparison is not automatically a causal treatment effect. A worked cohort calculates every product step and a log-rank contribution. The lab implements Kaplan-Meier and log-rank from first principles, uses SciPy for the chi-square tail, and verifies censoring, symmetry, monotonicity, and identical-group invariants. Production guidance publishes number-at-risk tables and supported horizons, versions entry and tie rules, monitors censoring imbalance and label maturity, and avoids displaying or acting on survival tails supported by only a handful of subjects. KM is a marginal nonparametric estimate under censoring assumptions, not a covariate-adjusted prediction model.",
      "prerequisites": [
        "censoring-survival",
        "hypothesis-testing"
      ],
      "learningObjectives": [
        "Compute a Kaplan-Meier curve from event counts and changing risk sets, including tied events and censoring.",
        "Interpret survival steps, confidence bands, median survival, number at risk, and restricted mean within supported follow-up.",
        "Derive the log-rank observed-minus-expected statistic and state its null, weighting, and assumptions.",
        "Diagnose crossing curves, small tails, differential censoring, delayed entry, multiplicity, and causal overinterpretation."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement Kaplan-Meier and the two-sample log-rank statistic, use SciPy for the chi-square tail, and verify censoring, monotonicity, symmetry, and identical-group behavior.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Kaplan-Meier product-limit steps"
        },
        {
          "type": "compare",
          "title": "Curve estimate versus group test"
        }
      ],
      "followUpQuestions": [
        "Why is KM a product instead of one minus cumulative observed event fraction?",
        "What happens if the median is not reached?",
        "When is log-rank less powerful?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "cox-ph",
      "title": "Cox Proportional Hazards Model",
      "module": "survival",
      "priority": "high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "Cox regression models h(t|x)=h0(t)exp(x beta). At each event time, partial likelihood compares the event subject's exp(x beta) with the sum over everyone then at risk, so beta can be estimated without parameterizing h0. Exponentiating a coefficient gives a conditional hazard ratio for a one-unit covariate change if hazards are proportional. After fitting beta, a Breslow-type estimator recovers cumulative baseline hazard and S(t|x)=exp[-H0(t)exp(x beta)]. I check Schoenfeld-residual trends and time interactions, model nonlinear continuous effects, specify ties and delayed entry, use robust or clustered inference when needed, and evaluate discrimination plus calibrated survival at supported horizons. Hazard ratios are not risk ratios, and observational coefficients are not causal effects without an identification design.",
      "keyPoints": [
        "Partial likelihood compares each event with its contemporaneous risk set.",
        "The baseline hazard cancels for coefficient estimation but is required for absolute survival.",
        "Hazard ratios are conditional instantaneous-rate ratios, not probability or median ratios.",
        "Proportional hazards is a testable modeling restriction, not a property guaranteed by the algorithm.",
        "Time origin, delayed entry, ties, feature timing, and censoring belong in the model contract."
      ],
      "resources": [
        "cox-1972",
        "lifelines",
        "statsmodels-survival"
      ],
      "featured": false,
      "description": "The Cox proportional-hazards model connects covariates to event timing without requiring a parametric baseline hazard. It writes the hazard as h(t|x)=h0(t)exp(x^T beta), so exp(beta_j) is a multiplicative hazard ratio under the proportional-hazards assumption. This chapter derives the partial likelihood from risk-set comparisons, explains why censored observations still contribute information, and separates coefficient estimation from recovery of the baseline hazard and absolute survival. It covers Breslow and Efron tie handling, delayed entry, time-dependent covariates, penalization, clustered dependence, Schoenfeld residuals, nonproportional effects, and the difference between predictive and causal interpretations. A worked example computes one partial-likelihood term. The lab exposes the mechanism with a one-covariate Newton optimizer, compares it with SciPy's general optimizer, and verifies permutation invariance, gradient convergence, and survival monotonicity. Production guidance treats the risk-set construction, time origin, feature availability, baseline-hazard version, and supported horizon as model artifacts. Cox is often a strong interpretable baseline, but a hazard ratio is neither a probability ratio nor a universal summary when effects vary over time.",
      "prerequisites": [
        "kaplan-meier",
        "linear-regression"
      ],
      "learningObjectives": [
        "Derive Cox partial likelihood from event-wise risk sets and interpret coefficients as conditional hazard ratios.",
        "Recover a baseline cumulative hazard and individual survival curves after estimating regression coefficients.",
        "Diagnose proportional-hazards violations, tie and entry conventions, nonlinear effects, and dependent observations.",
        "Design leakage-safe validation and deployment contracts for event-time regression."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Expose Cox partial-likelihood mechanics, fit one coefficient with Newton's method, compare SciPy optimization, and verify risk-set and survival invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Cox estimation and prediction"
        },
        {
          "type": "compare",
          "title": "Relative effect versus absolute prediction"
        }
      ],
      "followUpQuestions": [
        "Why does the baseline hazard cancel from partial likelihood?",
        "How do you handle a covariate that violates PH?",
        "What is the distinction between time-varying covariate and coefficient?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "survival-metrics",
      "title": "Survival Model Evaluation",
      "module": "survival",
      "priority": "medium",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "I evaluate survival models along four axes. Concordance measures whether higher predicted risk precedes observed events among comparable subjects, but Harrell's C can be optimistic under heavy censoring, so I also use IPCW or Uno-style estimates. At prespecified horizons I report cumulative/dynamic AUC for discrimination, time-dependent Brier score for probability error, and calibration of predicted versus observed survival. IPCW estimates the censoring survival distribution on training data and weights observable cases and controls; people censored before a horizon are not treated as event-free. I integrate only over horizons with adequate follow-up, validate on later cohorts, bootstrap at the subject or cluster level, show subgroup event and censoring counts, and connect scores to threshold-specific decisions. One metric never proves ranking, calibration, and utility simultaneously.",
      "keyPoints": [
        "Censoring determines which pairs and horizon labels are observable.",
        "Concordance evaluates ordering, not probability calibration or clinical/product utility.",
        "IPCW corrects observable contributions under a censoring model and a positivity condition.",
        "Time-dependent AUC, Brier score, and calibration must be indexed by supported horizons.",
        "Evaluation preprocessing, censoring estimation, horizons, and bootstrap units must avoid leakage."
      ],
      "resources": [
        "sksurv-evaluation",
        "uno-cstat",
        "graf-brier"
      ],
      "featured": false,
      "description": "Survival-model evaluation must respect censoring, time, and the prediction target. Ordinary accuracy and ROC calculations mislabel subjects censored before a horizon, while a single concordance number can reward ranking without calibrated probabilities. This chapter builds an evaluation stack around comparable pairs, Harrell's concordance, inverse-probability-of-censoring weighting, Uno-style concordance, cumulative/dynamic AUC, time-dependent Brier score, integrated Brier score, survival calibration, and decision utility. It explains which subjects define cases and controls at a horizon, why the censoring distribution must be estimated without test leakage, and how heavy censoring or short follow-up limits the estimand. A worked example separates an event case, an event-free control, and an indeterminate early censor. The lab implements comparable-pair concordance and an IPCW Brier score, then uses scikit-learn only on correctly defined horizon labels. Production guidance freezes evaluation horizons, split logic, censoring models, metric orientation, subgroup support, and label-maturity windows. Good evaluation reports discrimination, probability accuracy, calibration, and operational value together rather than declaring a model successful from one censoring-sensitive leaderboard number.",
      "prerequisites": [
        "cox-ph",
        "cross-validation"
      ],
      "learningObjectives": [
        "Construct comparable event-time pairs and explain what Harrell and IPCW concordance estimate.",
        "Define horizon-specific cases, controls, Brier scores, and cumulative/dynamic AUC under censoring.",
        "Assess survival calibration and decision utility at supported horizons instead of relying on ranking alone.",
        "Build temporal, leakage-safe, subgroup-aware evaluation pipelines with explicit censoring assumptions."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement comparable-pair concordance and an IPCW horizon Brier score, use scikit-learn on correctly defined horizon labels, and verify orientation and censoring behavior.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "Survival evaluation stack"
        },
        {
          "type": "compare",
          "title": "Observable status at a horizon"
        }
      ],
      "followUpQuestions": [
        "Why can Harrell's C be optimistic with heavy censoring?",
        "What is the difference between Brier score and calibration?",
        "How should uncertainty be estimated with repeated interval rows?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "lagrange-kkt",
      "title": "Lagrange Multipliers, Duality & KKT Conditions",
      "module": "optimization",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "For minimize f(x) subject to g_i(x)<=0 and h_j(x)=0, the Lagrangian is L=f+sum lambda_i g_i+sum nu_j h_j with lambda_i>=0. KKT requires primal feasibility, dual feasibility, stationarity of L, and complementary slackness lambda_i g_i=0. Under a constraint qualification KKT is necessary for a local optimum; for a convex problem it is sufficient, and with Slater's condition strong duality holds. Multipliers are shadow prices: locally they quantify how the optimal value changes when a constraint bound is tightened, but their interpretation depends on units, sign convention, degeneracy, and perturbation size.",
      "keyPoints": [
        "The Lagrangian prices constraint violation",
        "KKT combines four conditions, not stationarity alone",
        "Constraint qualifications prevent pathological necessity failures",
        "Convexity turns a KKT point into a global optimum",
        "Dual variables are local sensitivities with units and validity ranges"
      ],
      "resources": [
        "boyd-convex",
        "stanford-ee364a",
        "cvxpy-guide",
        "scipy-optimize"
      ],
      "featured": false,
      "description": "Lagrange multipliers, duality, and the Karush-Kuhn-Tucker (KKT) conditions connect constrained optimization to geometry, economic sensitivity, and verifiable optimality. This chapter derives the Lagrangian for equality and inequality constraints, explains feasible directions and active constraints, distinguishes primal and dual problems, and develops weak duality, strong duality, Slater's condition, complementary slackness, constraint qualifications, and dual sensitivity. You will learn when KKT conditions are necessary, when they are sufficient, why multiplier signs depend on convention, and why stationarity alone never proves feasibility or global optimality. A worked resource-allocation problem computes the primal solution and shadow price by hand. The lab builds KKT residual checks for a constrained quadratic, compares the result with SciPy's SLSQP interface, and verifies primal feasibility, dual feasibility, stationarity, and complementarity. Production guidance covers scaling, degeneracy, infeasibility, inaccurate multipliers, solver status, sensitivity ranges, observability, and safe fallbacks. The payoff is the ability to interpret a constrained solver result as a scientific decision and certificate rather than an unexplained vector.",
      "prerequisites": [
        "convexity",
        "derivatives-gradients",
        "vectors-matrices"
      ],
      "learningObjectives": [
        "Construct a Lagrangian with consistent inequality signs and derive stationarity, feasibility, and complementary slackness conditions.",
        "Explain weak versus strong duality and identify conditions under which KKT conditions are necessary or sufficient.",
        "Interpret optimal multipliers as local value sensitivities while stating sign, units, and range limitations.",
        "Diagnose candidate solutions through scaled KKT residuals and solver termination evidence."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Compute and verify the KKT certificate for a binding convex inequality, then compare the candidate with a constrained SciPy solve.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "From constrained model to certificate"
        },
        {
          "type": "compare",
          "title": "What KKT can establish"
        }
      ],
      "followUpQuestions": [
        "What does complementary slackness mean?",
        "When are KKT conditions sufficient?",
        "What is Slater's condition used for?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "linear-programming",
      "title": "Linear Programming",
      "module": "optimization",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "An LP minimizes or maximizes c^T x subject to linear constraints and bounds. The feasible set is a convex polyhedron; if a finite optimum exists, at least one extreme point is optimal. Simplex moves among adjacent basic feasible solutions, while interior-point methods travel through the interior. Every LP has a dual whose feasible objective bounds the primal, and under standard feasibility conditions strong duality makes the gap zero. In practice I define variables and units carefully, inspect status, primal residuals, objective reconstruction, dual gap and sensitivity, and explicitly distinguish optimal, feasible-but-uncertified, infeasible, and unbounded results.",
      "keyPoints": [
        "Variables and units determine whether the model represents the real decision",
        "LP feasible regions are convex polyhedra",
        "Simplex and interior-point methods exploit different geometry",
        "The dual provides bounds and local resource values",
        "Status, residuals, and dual evidence are part of the output"
      ],
      "resources": [
        "boyd-convex",
        "scipy-linprog",
        "ortools-mathopt",
        "stanford-ee364a"
      ],
      "featured": false,
      "description": "Linear programming (LP) optimizes a linear objective over linear equality, inequality, and bound constraints. Its simple algebra hides a powerful geometry: feasible solutions form a convex polyhedron, optimal solutions occur on a face containing an extreme point when an optimum exists, and a dual program supplies bounds, shadow prices, and certificates of optimality or infeasibility. This chapter develops modeling from decisions and units through standard forms, slack variables, vertices, simplex intuition, interior-point methods, duality, sensitivity, degeneracy, alternate optima, infeasibility, unboundedness, and numerical scaling. You will learn to translate business rules without reversing signs or mixing units, distinguish model infeasibility from solver failure, and validate solutions using constraint residuals, objective reconstruction, and dual evidence. A worked production-planning example derives candidate vertices and a binding-capacity interpretation. The lab enumerates every 2D vertex from scratch, compares the optimum with SciPy's HiGHS-backed `linprog`, and verifies feasibility and objective agreement. Production guidance covers sparse models, solver statuses, tolerances, warm starts, time limits, security, drift, safe fallbacks, and rollback.",
      "prerequisites": [
        "convexity",
        "vectors-matrices",
        "lagrange-kkt"
      ],
      "learningObjectives": [
        "Translate a decision problem into linear variables, an objective, constraints, bounds, units, and explicit assumptions.",
        "Explain LP geometry, extreme points, simplex and interior-point intuitions, and the primal-dual certificate.",
        "Diagnose optimal, infeasible, unbounded, degenerate, and multiple-optimum outcomes from evidence rather than guesswork.",
        "Implement vertex enumeration for a small LP and validate a library solution using independent invariants."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Enumerate a two-variable LP's vertices from first principles, compare with SciPy linprog, and verify primal feasibility plus objective agreement.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "LP solution and evidence"
        },
        {
          "type": "compare",
          "title": "Finite LP outcomes"
        }
      ],
      "followUpQuestions": [
        "Why does an LP optimum occur at a vertex?",
        "What does unbounded mean?",
        "What is degeneracy?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "integer-programming",
      "title": "Integer & Mixed-Integer Optimization",
      "module": "optimization",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "A mixed-integer program combines linear constraints and objective terms with some variables restricted to integers, often binary. The LP relaxation drops integrality and gives a bound. Branch-and-bound partitions the feasible set by branching on fractional variables, solves relaxations at nodes, prunes nodes whose bounds cannot beat the incumbent, and uses cuts and heuristics to tighten bounds or find feasible solutions. Rounding is not generally valid. In production I build tight formulations, use indicator constraints when available, set explicit time and gap limits, and report the feasible incumbent, best bound, relative gap, residuals, and solver status separately.",
      "keyPoints": [
        "Integrality models choices and logic, not just rounded quantities",
        "LP relaxations supply bounds but not necessarily feasible decisions",
        "Branch-and-bound tracks incumbent and global bound",
        "Strong formulations and symmetry breaking can dominate solver tuning",
        "A time-limited feasible solution is not automatically optimal"
      ],
      "resources": [
        "scipy-milp",
        "ortools-cpsat",
        "ortools-mathopt",
        "boyd-convex"
      ],
      "featured": false,
      "description": "Integer and mixed-integer optimization represents indivisible choices, logical rules, fixed costs, assignments, schedules, and network designs that continuous models cannot express faithfully. This chapter develops binary, integer, continuous, semi-continuous, and mixed variables; strong formulations; LP relaxations; integrality gaps; branch-and-bound; cutting planes; primal heuristics; constraint programming and CP-SAT; big-M, indicator, and logical constraints; symmetry; decomposition; and solver certificates. You will learn why rounding an LP solution can violate constraints or destroy value, how bounds turn exponential search into a quantifiable optimality gap, and how formulation strength often matters more than solver tuning. A worked knapsack example contrasts integer, relaxed, and rounded decisions. The lab enumerates a small binary portfolio from scratch, compares it with SciPy's `milp`, and verifies feasibility, optimality, and a nonzero relaxation gap. Production guidance covers time limits, incumbent-versus-bound semantics, deterministic replay, solution pools, infeasibility, numerical scaling, licensing, monitoring, safe fallbacks, and rollback. The objective is to ship auditable discrete decisions, not merely obtain a solver vector.",
      "prerequisites": [
        "linear-programming",
        "big-o",
        "trees-graphs-algorithms"
      ],
      "learningObjectives": [
        "Model discrete decisions and logical relationships with explicit variable domains and tight linear constraints.",
        "Explain LP relaxation, branch-and-bound, cuts, heuristics, integrality gaps, and termination certificates.",
        "Recognize weak big-M formulations, symmetry, scaling, and horizon choices that make otherwise correct models intractable.",
        "Validate feasible incumbents and optimality gaps independently before operational use."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Solve a binary knapsack by enumeration, compare it with SciPy milp, and verify domains, capacity, objective, and relaxation gap.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Branch-and-bound evidence loop"
        },
        {
          "type": "compare",
          "title": "Continuous relaxation versus discrete decision"
        }
      ],
      "followUpQuestions": [
        "What is an integrality gap?",
        "Why is big-M dangerous?",
        "What can you return at a time limit?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "bayesian-optimization",
      "title": "Bayesian Optimization for Expensive Objectives",
      "module": "optimization",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Bayesian optimization is useful when objective evaluations are expensive and gradients are unavailable. It fits a probabilistic surrogate, commonly a Gaussian process, to observed configurations and outcomes. An acquisition function such as expected improvement or UCB combines predicted performance with uncertainty, is optimized cheaply to choose the next evaluation, and the posterior is updated after observing it. I define the search space and budget, seed with a space-filling design, model noise and constraints, compare against random search over repeated runs, and monitor regret, feasibility, cost, failed trials, and calibration. It is usually best in modest dimensions, not a default for cheap or massively high-dimensional objectives.",
      "keyPoints": [
        "BO optimizes evaluation choice, not just a fitted response surface",
        "Posterior uncertainty drives exploration",
        "The acquisition is cheap to optimize but can itself be multimodal",
        "Noise, constraints, batches, and fidelity change the correct decision rule",
        "Repeated-budget comparisons against simple baselines are essential"
      ],
      "resources": [
        "frazier-bo",
        "botorch-docs",
        "sklearn",
        "probml-book"
      ],
      "featured": false,
      "description": "Bayesian optimization (BO) is a sequential strategy for optimizing a costly black-box objective when each evaluation consumes meaningful time, money, compute, or risk. It fits a probabilistic surrogate to observed evaluations, uses posterior uncertainty to score the value of candidate experiments, evaluates a selected candidate, and repeats. This chapter develops Gaussian-process surrogates, priors and kernels, noisy observations, exploration versus exploitation, probability of improvement, expected improvement, upper-confidence-bound and information-based acquisitions, acquisition optimization, initialization, constraints, batch and asynchronous experiments, multi-fidelity evaluation, high-dimensional and mixed spaces, stopping, and honest evaluation. You will learn when BO is preferable to random search or gradient methods, how model misspecification and overconfident uncertainty can waste a budget, and why the acquisition is a decision rule rather than the real objective. The lab implements a one-dimensional Gaussian-process posterior and expected-improvement loop, compares it with scikit-learn, and verifies uncertainty and simple-regret improvement. Production guidance covers experiment identity, failed trials, concurrency, reproducibility, cost, safety, monitoring, and rollback.",
      "prerequisites": [
        "gaussian-processes",
        "probability-basics",
        "hyperparameter-tuning"
      ],
      "learningObjectives": [
        "Formulate costly black-box optimization as a sequential probabilistic decision problem with an explicit evaluation budget.",
        "Compute and interpret Gaussian-process posterior mean, variance, and common acquisition functions.",
        "Choose initialization, noise treatment, constraints, batching, fidelity, and stopping rules for a real experiment system.",
        "Evaluate a BO policy without leakage using regret, cost, feasibility, and repeated-seed baselines."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement a one-dimensional Gaussian-process posterior and expected-improvement policy, compare with scikit-learn, and verify uncertainty plus regret behavior.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Bayesian optimization closed loop"
        },
        {
          "type": "curve",
          "title": "Conceptual posterior and uncertainty"
        }
      ],
      "followUpQuestions": [
        "Why not use grid search?",
        "What is expected improvement?",
        "How do constraints enter BO?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "recsys-baselines",
      "title": "Recommender Baselines & Problem Formulation",
      "module": "recsys",
      "priority": "very-high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "Start with popularity, recency and simple content/history baselines. Define whether the task is rating prediction, top-N ranking, next-item prediction or candidate generation because metrics and data construction differ.",
      "keyPoints": [
        "Implicit and explicit feedback differ.",
        "Negative samples are usually unobserved, not true dislikes.",
        "Temporal splits better reflect recommendation deployment."
      ],
      "resources": [
        "stanford-cs246"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "Recommender Baselines & Problem Formulation"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Recommender Baselines & Problem Formulation make?",
        "How would you validate or debug Recommender Baselines & Problem Formulation in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "collaborative-filtering",
      "title": "User–User & Item–Item Collaborative Filtering",
      "module": "recsys",
      "priority": "high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "Collaborative filtering recommends based on interaction similarity rather than item metadata. Item-item methods often provide stable neighborhood recommendations; user-user methods can suffer with sparse histories.",
      "keyPoints": [
        "Similarity choice and normalization matter.",
        "Cold start is a core limitation.",
        "Implicit feedback needs confidence/weighting."
      ],
      "resources": [
        "stanford-cs246"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does User–User & Item–Item Collaborative Filtering make?",
        "How would you validate or debug User–User & Item–Item Collaborative Filtering in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "matrix-factorization",
      "title": "Matrix Factorization for Recommenders",
      "module": "recsys",
      "priority": "very-high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "Matrix factorization learns low-dimensional user and item vectors whose interaction predicts preference. With implicit feedback, objectives often weight observed interactions plus sampled/unobserved examples.",
      "keyPoints": [
        "Latent factors capture collaborative structure.",
        "Regularization handles sparse data.",
        "Bias terms and confidence weighting matter."
      ],
      "resources": [
        "stanford-cs246"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Factorize a tiny user-item rating matrix with gradient descent.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "Matrix factorization"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Matrix Factorization for Recommenders make?",
        "How would you validate or debug Matrix Factorization for Recommenders in practice?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "two-stage-ranking",
      "title": "Candidate Generation vs Ranking",
      "module": "recsys",
      "priority": "very-high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "Large recommenders usually use a fast high-recall candidate stage followed by a richer ranking model. Candidate generation narrows millions of items; ranking uses more expensive features on hundreds/thousands.",
      "keyPoints": [
        "Optimize candidate recall separately.",
        "Ranking can incorporate context/business constraints.",
        "Training-serving feature consistency matters."
      ],
      "resources": [
        "stanford-cs246",
        "faiss"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Two-stage recommender"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Candidate Generation vs Ranking make?",
        "How would you validate or debug Candidate Generation vs Ranking in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "implicit-feedback",
      "title": "Implicit Feedback & Negative Sampling",
      "module": "recsys",
      "priority": "high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "Clicks, views and purchases indicate exposure and preference imperfectly. Unobserved items are not necessarily negatives, so training often samples negatives or uses exposure-aware weighting.",
      "keyPoints": [
        "Exposure bias affects labels.",
        "Different actions imply different strengths.",
        "Sampling distribution changes learning."
      ],
      "resources": [
        "stanford-cs246"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does Implicit Feedback & Negative Sampling make?",
        "How would you validate or debug Implicit Feedback & Negative Sampling in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "recsys-offline-online",
      "title": "Offline vs Online Recommender Evaluation",
      "module": "recsys",
      "priority": "very-high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "Offline ranking metrics measure historical predictive quality, but online experiments measure user/system impact. Historical logs are biased by the previous recommender, so offline gains do not guarantee online lift.",
      "keyPoints": [
        "Recall/NDCG/MRR measure different ranking aspects.",
        "Use temporal splits and candidate consistency.",
        "A/B tests capture behavior and feedback loops."
      ],
      "resources": [
        "stanford-cs246",
        "microsoft-experimentation"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "Offline vs Online Recommender Evaluation"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Offline vs Online Recommender Evaluation make?",
        "How would you validate or debug Offline vs Online Recommender Evaluation in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "diversity-novelty-fairness",
      "title": "Diversity, Novelty, Coverage & Fairness in Recommenders",
      "module": "recsys",
      "priority": "medium",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "Recommender quality is broader than relevance. Diversity avoids redundant lists, novelty introduces useful less-obvious items, coverage distributes exposure, and fairness may constrain treatment of creators/users.",
      "keyPoints": [
        "Metrics can conflict.",
        "Re-ranking can enforce constraints.",
        "Popularity feedback loops need monitoring."
      ],
      "resources": [
        "stanford-cs246"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does Diversity, Novelty, Coverage & Fairness in Recommenders make?",
        "How would you validate or debug Diversity, Novelty, Coverage & Fairness in Recommenders in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "inverted-index",
      "title": "Inverted Index & Text Retrieval Pipeline",
      "module": "ir",
      "priority": "high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "An inverted index maps each normalized term to a sorted postings list of documents that contain it, often including term frequency, positions, field and payload data. Indexing parses documents with a versioned analyzer, emits term-document records, sorts or accumulates them, and writes immutable dictionary and postings segments. AND queries intersect postings, OR queries merge them, and phrase queries require adjacent positions. Sorted doc IDs enable linear or skip-assisted intersection; compression uses doc-ID gaps and compact integer codes. Production engines append segments, expose them on refresh, merge them in the background, and represent deletes with tombstones until merge. I version analyzers and schemas, enforce permissions before final ranking, monitor freshness, segment count, merge debt, cache hit rate and tail latency, and retain an exact snapshot for rollback. Analyzer mismatch between writes and queries is a relevance bug, not cosmetic preprocessing.",
      "keyPoints": [
        "The dictionary maps terms to sorted postings; postings may contain frequency, positions, fields and payloads.",
        "Index-time and query-time analyzers must implement a compatible normalization contract.",
        "Sorted postings make conjunction, phrase checks, skipping and compression efficient.",
        "Immutable segments simplify concurrency while merges reclaim deletes and improve locality.",
        "Corpus snapshot, permissions, schema, statistics and analyzer version define search correctness."
      ],
      "resources": [
        "ir-book",
        "faiss-getting-started"
      ],
      "featured": false,
      "description": "An inverted index turns a document collection into a term-to-postings data structure so search touches documents containing query terms instead of scanning every document. This chapter follows the complete retrieval path: document boundaries, decoding, tokenization, normalization, term dictionary, postings with document IDs, frequencies and positions, Boolean intersection, phrase and field queries, segment construction, compression, merges, deletions, and distributed sharding. It explains why analyzer consistency is a correctness contract, how positional indexes trade storage for expressive queries, and why document frequency and length statistics must remain synchronized with the searchable snapshot. A worked example builds postings for three documents and resolves an AND plus phrase query. The lab implements normalization, positional indexing, linear postings intersection and phrase matching from first principles, then compares the term-document counts with scikit-learn. Production guidance covers immutable segments, write-ahead ingestion, refresh versus commit semantics, tombstones, replicas, checksums, schema migration, backpressure, observability and rollback. The index is not merely a cache: it is the executable representation of the corpus, analyzer, fields, permissions and freshness policy.",
      "prerequisites": [
        "hash-tables",
        "tokenization"
      ],
      "learningObjectives": [
        "Construct a term dictionary and sorted positional postings from a document collection.",
        "Execute Boolean, phrase, field, and top-k candidate operations using postings rather than full scans.",
        "Reason about segment construction, compression, updates, deletions, sharding, and query latency.",
        "Specify analyzer, schema, access-control, freshness, integrity, and rollback contracts for production search."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build a positional inverted index, execute AND and phrase queries, compare with scikit-learn term counts, and verify ordering and analyzer invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Text-to-search pipeline"
        },
        {
          "type": "schema",
          "title": "Positional posting anatomy"
        }
      ],
      "followUpQuestions": [
        "Why are postings sorted by document ID?",
        "When are positions worth their storage cost?",
        "What is the difference between refresh and commit?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "tfidf-bm25",
      "title": "TF-IDF & BM25",
      "module": "ir",
      "priority": "very-high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "TF-IDF gives a term more weight when it occurs often in a document but rarely in the collection, then often uses cosine similarity between sparse query and document vectors. BM25 scores each query term with an IDF factor times a saturating TF fraction: tf*(k1+1)/(tf+k1*(1-b+b*dl/avgdl)). k1 controls how quickly repetition saturates and b controls document-length normalization. A common positive IDF is log(1+(N-df+0.5)/(df+0.5)). BM25 usually handles document length and repeated terms better than plain TF-IDF, but both depend critically on the analyzer and corpus snapshot. I tune on representative judged queries, inspect performance by query type, preserve exact identifiers, use BM25F or field boosts deliberately, and never compare raw scores across different queries or index statistics as if they were probabilities.",
      "keyPoints": [
        "IDF rewards discriminative terms using collection document frequency, not semantic importance in isolation.",
        "BM25 term frequency saturates, so the tenth repetition adds less evidence than the first few.",
        "The b parameter corrects length relative to the average indexed document under a field definition.",
        "Analyzer, field boundaries and corpus statistics are part of the ranking model.",
        "Lexical scores order candidates for a query; they are not calibrated relevance probabilities."
      ],
      "resources": [
        "bm25-robertson",
        "ir-book",
        "elastic-bm25"
      ],
      "featured": true,
      "description": "TF-IDF and BM25 are foundational lexical ranking methods that score exact term evidence while discounting ubiquitous words. TF-IDF represents documents and queries as weighted sparse vectors; cosine similarity normalizes their dot product. BM25 instead sums probabilistic term contributions with saturating term frequency and explicit document-length normalization. This chapter derives term frequency, inverse document frequency, cosine scoring, Robertson-style BM25 IDF, k1 saturation and b length correction. It explains tokenization and field effects, query term frequency, BM25F, stop words, rare-term pathologies, score noncomparability across shards or index snapshots, and why parameter tuning must use judged queries rather than arbitrary score intuition. Worked examples calculate IDF and a BM25 contribution. The lab implements BM25 from first principles, compares sparse TF-IDF with scikit-learn, and verifies rare-term weight, diminishing returns, query order invariance and finite scores. Production guidance freezes analyzers, corpus statistics and parameter versions; evaluates relevance, latency and subgroup behavior; and combines lexical scores with filters, business constraints or semantic retrieval without pretending raw scores are calibrated probabilities. Lexical ranking remains hard to beat for identifiers, names, rare entities and exact constraints.",
      "prerequisites": [
        "inverted-index",
        "norms-distances"
      ],
      "learningObjectives": [
        "Compute TF-IDF vectors, cosine similarity, and BM25 term contributions from collection statistics.",
        "Explain term-frequency saturation, inverse-document-frequency weighting, and document-length normalization.",
        "Tune and evaluate k1, b, field boosts, analyzers and query expansion without leaking test judgments.",
        "Diagnose shard-statistic drift, score-scale misuse, spam, vocabulary mismatch and exact-match failures."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement BM25 scoring, compare sparse TF-IDF rankings, and verify IDF rarity, TF saturation, query-order invariance and numerical safety.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "BM25 term-frequency saturation"
        },
        {
          "type": "compare",
          "title": "TF-IDF and BM25"
        }
      ],
      "followUpQuestions": [
        "What happens when k1 approaches zero?",
        "Why is IDF based on document frequency rather than total term count?",
        "When can TF-IDF outperform BM25?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "retrieval-eval",
      "title": "MRR, MAP, Recall@K & NDCG",
      "module": "ir",
      "priority": "very-high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "I begin with the retrieval stage and user task. Recall@K is primary for a candidate generator because a reranker cannot recover missing relevant items. MRR emphasizes the first relevant result, MAP averages precision at every relevant hit for binary multi-result tasks, and NDCG discounts rank while supporting graded relevance and normalizing by the ideal ordering. I report per-query metrics then macro averages and distributional slices, not only a traffic-weighted headline. The test collection freezes corpus, queries and judgments; pooled unjudged documents need an explicit policy and can bias new systems. I use paired bootstrap or randomization over queries, report confidence intervals and practical deltas, and include latency, freshness, coverage, safety and online task outcomes. Duplicate results and zero-relevant queries have predefined handling.",
      "keyPoints": [
        "Metric choice encodes how rank position, multiple relevant items and graded relevance create value.",
        "Compute query-level scores first; aggregation weights determine whose needs dominate the result.",
        "Unjudged is not automatically nonrelevant, especially for a novel system outside the judgment pool.",
        "Paired comparisons over the same queries are more informative than independent headline averages.",
        "Offline relevance must be balanced with latency, coverage, freshness, diversity, safety and online utility."
      ],
      "resources": [
        "ir-book",
        "trec-evaluation"
      ],
      "featured": true,
      "description": "Retrieval evaluation turns ranked lists into evidence about whether a search system serves real information needs. This chapter derives Recall@K, Precision@K, reciprocal rank, average precision, mean average precision, discounted cumulative gain and normalized DCG for binary and graded judgments. It separates first-answer, candidate-generation, broad-discovery and graded-ranking objectives; explains macro versus traffic-weighted aggregation; and treats incomplete judging, pooling, annotator disagreement, query sampling, confidence intervals and significance tests as first-class design issues. It also connects offline relevance to latency, freshness, coverage, diversity, safety and online task success. A worked example computes reciprocal rank, AP and NDCG from one ranked list. The lab implements every core metric from scratch, compares NDCG with scikit-learn, and verifies perfect, empty, duplicate and cutoff behavior. Production guidance versions query sets, corpus snapshots, judgment policies, unjudged handling and metric code; slices results by intent and frequency; and requires paired uncertainty plus practical effect size before rollout. A higher offline average is useful only when the test collection represents deployment and the metric rewards the position and kind of relevance users actually need.",
      "prerequisites": [
        "tfidf-bm25",
        "hypothesis-testing"
      ],
      "learningObjectives": [
        "Compute and interpret Recall@K, reciprocal rank, AP, MAP, DCG and NDCG from ranked judgments.",
        "Select metrics that match candidate recall, first-answer, exhaustive discovery and graded-ranking tasks.",
        "Design representative query sets and reliable relevance judgments under pooling and incomplete labels.",
        "Compare systems with paired uncertainty, meaningful slices, latency and online decision metrics."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement Recall@K, reciprocal rank, AP, MAP and NDCG, compare NDCG with scikit-learn, and verify cutoff, duplicate and ideal-ranking behavior.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "funnel",
          "title": "Retrieval evaluation evidence"
        },
        {
          "type": "compare",
          "title": "Choose the metric by user goal"
        }
      ],
      "followUpQuestions": [
        "When do you prefer MRR over NDCG?",
        "Why is recall critical before reranking?",
        "How do you compare two rankers statistically?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "ann-search",
      "title": "Approximate Nearest Neighbor Search",
      "module": "ir",
      "priority": "very-high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "ANN search trades exact geometric recall for lower latency or memory. I first define the metric: cosine search usually normalizes both database and query vectors so inner product equals cosine; L2 and maximum inner product are different objectives. I keep flat exhaustive search as the oracle, then measure Recall@K of ANN neighbors across representative queries while sweeping the search budget. IVF probes nearby coarse clusters, HNSW expands a proximity graph, and product quantization compresses vectors at additional distance error. I choose an operating point from the recall-versus-p95/p99-latency and memory frontier, then measure downstream relevance too. Filters, deletes, shard fan-out, batch size and concurrent load are included. Embedding model and index versions are immutable together, and migrations dual-write or rebuild before an atomic switch.",
      "keyPoints": [
        "ANN quality is measured against exact neighbors for the same vectors, metric and K.",
        "Cosine, inner product and L2 are interchangeable only under specific normalization relationships.",
        "Search-budget knobs produce a recall-latency frontier rather than one universally best configuration.",
        "Quantization, filters, sharding, updates and hardware can change the frontier dramatically.",
        "Geometric recall is necessary pipeline evidence but does not prove semantic relevance or task success."
      ],
      "resources": [
        "faiss-index-guide",
        "faiss-getting-started",
        "hnsw-paper"
      ],
      "featured": true,
      "description": "Approximate nearest-neighbor search retrieves vectors close to a query without exhaustively comparing every stored vector. It powers semantic search, recommendation, deduplication and retrieval-augmented generation, but approximation introduces a measurable candidate-recall error before any relevance model runs. This chapter defines L2, inner product and cosine objectives; establishes exact flat search as the oracle; and explains tree, locality-sensitive hashing, inverted-file, product-quantization and graph index families. It develops the build-time, memory, update, filter, latency and recall trade-offs behind IVF probe counts, quantization and graph search. It distinguishes geometric nearest-neighbor recall from task relevance, covers embedding normalization, model-version incompatibility, batch effects, hardware measurement, metadata filters, deletes and sharding, and shows how to benchmark on representative queries. The lab builds a small IVF system with Lloyd clustering, compares it to brute-force and scikit-learn exact neighbors, and verifies that probing all lists recovers the oracle. Production guidance versions embeddings and metrics, keeps exact canaries, measures recall-latency frontiers at tail percentiles, overfetches before filters when necessary, and rebuilds safely under distribution drift. ANN is a systems optimization with an explicit quality budget, not a replacement for relevance evaluation.",
      "prerequisites": [
        "norms-distances",
        "retrieval-eval"
      ],
      "learningObjectives": [
        "Define exact nearest-neighbor objectives for L2, inner product and cosine similarity with correct normalization.",
        "Compare flat, IVF, quantized, hashing and graph indexes across recall, latency, memory, build and update costs.",
        "Benchmark ANN recall against an exact oracle on representative queries and hardware without confusing it with relevance.",
        "Design safe filtering, sharding, embedding migration, deletion, monitoring and rollback behavior."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build an IVF-style ANN index, compare it with exact and scikit-learn neighbors, sweep probe counts, and verify full probing recovers the oracle.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "ANN operating frontier"
        },
        {
          "type": "compare",
          "title": "Three ANN strategies"
        }
      ],
      "followUpQuestions": [
        "When should you keep exact flat search?",
        "What does nprobe control in IVF?",
        "How do metadata filters affect ANN?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "hnsw",
      "title": "HNSW Intuition & Tuning",
      "module": "ir",
      "priority": "high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "HNSW is a multilayer proximity graph. Each inserted vector receives a random maximum level, so upper layers are sparse and contain long-range links. A query starts from the top entry point, greedily moves to closer neighbors at each upper layer, then performs a best-first search at layer zero with a candidate set bounded by efSearch. M limits neighborhood degree, efConstruction controls how broadly insertion searches for good neighbors, and efSearch controls query-time exploration; higher values usually improve recall at memory, build or latency cost. I benchmark Recall@K against exact search while sweeping efSearch under realistic load and filters. I also test insertion order, duplicates, deletes, graph connectivity and embedding shifts. Model, metric, normalization and graph snapshot are one versioned artifact.",
      "keyPoints": [
        "Random levels create sparse long-range navigation above a dense base proximity graph.",
        "Upper layers use greedy routing; the base layer retains multiple candidates through efSearch.",
        "M buys connectivity and recall with edge memory; efConstruction buys graph quality with build cost.",
        "efSearch is the primary query-time recall-latency knob and must be at least the requested K in practice.",
        "Filtering, insertion order, tombstones and embedding changes can invalidate a previously tuned operating point."
      ],
      "resources": [
        "hnsw-paper",
        "faiss-index-guide"
      ],
      "featured": false,
      "description": "Hierarchical Navigable Small World search organizes vectors as a multilayer proximity graph. Sparse upper layers provide long jumps toward the query, while a dense base layer explores a bounded candidate frontier to recover nearby vectors. This chapter derives the skip-list-like random level assignment, greedy descent, best-first efSearch traversal, incremental insertion with efConstruction, neighbor selection and degree parameter M. It explains why higher efSearch usually raises recall and latency, why M and efConstruction affect memory, build time and graph navigability, and why insertion order, duplicates, intrinsic dimension, filters and deletes can reshape performance. A worked example traces upper-layer routing into a base-layer beam. The lab builds an exact-neighbor graph as a transparent stand-in for HNSW construction, implements greedy and bounded best-first traversal, and verifies the full exploration limit against exact search. Production guidance benchmarks recall and p99 latency under concurrency, monitors connectivity and effort, handles tombstones and rebuilds, and couples graph snapshots with embedding versions. HNSW is powerful because it invests memory and construction work in navigable shortcuts; it is not guaranteed exact unless search effectively exhausts the relevant connected graph.",
      "prerequisites": [
        "ann-search",
        "trees-graphs-algorithms"
      ],
      "learningObjectives": [
        "Trace HNSW query routing through sparse upper layers and bounded base-layer best-first search.",
        "Explain how M, efConstruction, efSearch and randomized levels affect recall, latency, memory and build quality.",
        "Diagnose insertion-order, filtering, deletion, duplicate, disconnected-region and embedding-drift failures.",
        "Tune and operate HNSW using exact recall canaries, tail latency, graph statistics and safe rebuilds."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement bounded best-first proximity-graph search, compare it with greedy and exact search, and verify that exhaustive exploration recovers exact neighbors on a connected graph.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "HNSW routing hierarchy"
        },
        {
          "type": "network",
          "title": "Diverse neighbor routes"
        }
      ],
      "followUpQuestions": [
        "What is the role of efConstruction?",
        "Why use a hierarchy instead of one graph?",
        "Can HNSW guarantee exact neighbors?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "hybrid-search",
      "title": "Hybrid Lexical + Vector Retrieval",
      "module": "ir",
      "priority": "very-high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "I run lexical and vector retrieval over the same eligible corpus, union candidates by stable document ID, and fuse ranks or calibrated features. RRF gives document d score sum_b 1/(k0+rank_b(d)); it is robust when BM25 and cosine score scales differ and handles missing documents naturally, but ignores score margins. Weighted score fusion needs per-query or learned normalization, and learned fusion needs unbiased features and judgments. Candidate windows are tuned for union Recall@K before reranking. I evaluate lexical-only, vector-only and hybrid on exact-ID, semantic, mixed, multilingual and filtered slices, with latency and failure guardrails. Filters and permissions apply consistently to both branches. If one branch times out, the system returns the healthy branch with explicit observability rather than an empty or unauthorized result set.",
      "keyPoints": [
        "Hybrid value comes from complementary candidate recall, not from adding two fashionable components.",
        "Raw lexical and vector scores generally have incompatible query-dependent scales.",
        "RRF combines rank positions robustly; calibrated or learned fusion can use score margins with more assumptions.",
        "Branch depths, filters, deduplication and stable IDs determine the union available to final ranking.",
        "Latency, versioning and branch-degradation behavior are part of relevance correctness."
      ],
      "resources": [
        "rrf-paper",
        "elastic-hybrid",
        "bm25-robertson",
        "faiss-index-guide"
      ],
      "featured": true,
      "description": "Hybrid search combines lexical retrieval with vector retrieval so exact entities, identifiers and constraints coexist with semantic paraphrase recall. The central engineering problem is not running two retrievers; it is producing a coherent candidate union and ranking from score scales, failure modes and latency profiles that are not naturally comparable. This chapter designs parallel and routed candidate generation, reciprocal rank fusion, normalized weighted score fusion and learned fusion. It explains rank windows, branch quotas, duplicates, metadata filters, missing candidates, query-adaptive weights, cross-encoder reranking, provenance and explanations. It covers why RRF is robust to scale but discards score margins, why raw BM25 plus cosine is usually invalid, and how candidate depth bounds final recall. A worked example fuses two rankings by reciprocal ranks. The lab implements BM25, cosine retrieval and RRF, then verifies scale invariance, candidate union and lexical/semantic coverage. Production guidance budgets branch and merge latency, versions embeddings and lexical statistics, evaluates exact, semantic, mixed and filtered query slices, and degrades gracefully when one branch fails. Hybrid retrieval is most valuable when the branches make complementary errors and the evaluation explicitly measures that complementarity.",
      "prerequisites": [
        "tfidf-bm25",
        "ann-search",
        "retrieval-eval"
      ],
      "learningObjectives": [
        "Design lexical and vector candidate branches with comparable filters, identifiers and candidate budgets.",
        "Implement and interpret reciprocal-rank, normalized-score and learned fusion approaches.",
        "Measure branch complementarity, union recall, final ranking, latency and query-slice behavior.",
        "Operate branch failures, version migrations, security filters, caches and graceful degradation safely."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build lexical and vector rankings, fuse them with RRF, and verify scale invariance, candidate union, deduplication and complementary retrieval.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Hybrid retrieval pipeline"
        },
        {
          "type": "compare",
          "title": "Fusion choices"
        }
      ],
      "followUpQuestions": [
        "Why is RRF robust to heterogeneous score scales?",
        "What does the RRF constant k0 do?",
        "How do you prove the vector branch adds value?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "reranking",
      "title": "Cross-encoder / Learned Reranking",
      "module": "ir",
      "priority": "high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "A bi-encoder embeds query and documents separately for efficient ANN retrieval; a cross-encoder concatenates the query and each candidate and jointly encodes them, producing richer token interactions but requiring one forward pass per pair. I retrieve a high-recall candidate set, rerank only a latency-bounded depth, and train with pointwise relevance labels, pairwise preferences or listwise losses depending judgments and metric. Hard negatives come from the actual candidate generators and must exclude unlabeled positives carefully. I report candidate Recall@K, oracle ceiling, reranked NDCG/MRR and latency as candidate count and text length vary. I handle truncation by field-aware passage selection, batch requests, distill or cascade models when necessary, and retain the base ranker as timeout fallback. Candidate and reranker versions are evaluated and deployed together.",
      "keyPoints": [
        "Cross-encoders model query-document token interactions but cannot precompute one reusable document score.",
        "Candidate recall bounds every possible reranker metric and must be reported separately.",
        "Training negatives should resemble served confusions while accounting for incomplete judgments and click bias.",
        "Candidate depth, token length, batch shape and hardware define the latency-quality operating point.",
        "Reranker, candidate generators, truncation and fallback form one versioned system."
      ],
      "resources": [
        "bert-reranker-paper",
        "ir-book",
        "hf-llm"
      ],
      "featured": false,
      "description": "Reranking applies a more expressive relevance model to a bounded candidate set produced by fast retrieval. A cross-encoder jointly attends to query and document tokens, capturing exact alignments, negation, proximity and context that independent embeddings lose, but its cost grows with candidates and text length. This chapter contrasts bi-encoders and cross-encoders; explains pointwise, pairwise and listwise learning objectives; and develops hard-negative mining, candidate-distribution alignment, click-bias correction, truncation, chunk aggregation and score calibration. It shows why candidate recall is an immutable ceiling, why offline gains must be measured at the served depth, and how batching, distillation, quantization, caching and cascades create a latency-quality frontier. A worked example demonstrates a cross-encoder reversing a semantic near-match with the wrong product ID. The lab trains a small pointwise reranker on interpretable joint features, compares it with a hand-built score, and verifies ranking, permutation and missing-candidate invariants. Production guidance versions candidate generation with the reranker, enforces token and latency budgets, protects permissions and sensitive text, monitors feature and score drift, and falls back safely. A reranker improves ordering; it cannot retrieve a document it never receives.",
      "prerequisites": [
        "hybrid-search",
        "logistic-regression",
        "transformer"
      ],
      "learningObjectives": [
        "Explain why joint query-document encoding improves interaction modeling and increases inference cost.",
        "Choose pointwise, pairwise or listwise objectives and construct representative hard negatives without leakage.",
        "Evaluate candidate ceiling, reranking gain, calibration, truncation, latency and important query slices.",
        "Deploy batching, cascades, fallbacks, privacy controls, monitoring and compatible version rollback."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Expose pointwise reranking with joint relevance features, train an idiomatic logistic model, and verify candidate-ceiling, ordering and permutation invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "funnel",
          "title": "Retrieval-to-reranking cascade"
        },
        {
          "type": "compare",
          "title": "Bi-encoder and cross-encoder"
        }
      ],
      "followUpQuestions": [
        "Why not use a cross-encoder for the whole corpus?",
        "When is a pairwise loss useful?",
        "How do you choose reranking depth?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "text-normalization",
      "title": "Text Normalization, Stemming & Lemmatization",
      "module": "nlp",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Text normalization standardizes forms before classical NLP/search, but aggressive normalization can destroy meaning for names, code, languages or modern subword models.",
      "keyPoints": [
        "Tokenization requirements depend on downstream model.",
        "Stemming is heuristic; lemmatization uses linguistic forms.",
        "Do not normalize IDs/code like prose."
      ],
      "resources": [
        "stanford-cs224n",
        "ir-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does Text Normalization, Stemming & Lemmatization make?",
        "How would you validate or debug Text Normalization, Stemming & Lemmatization in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "ngram-tfidf",
      "title": "Bag-of-Words, n-grams & TF-IDF",
      "module": "nlp",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Bag-of-words represents term counts while n-grams add local order; TF-IDF downweights ubiquitous terms. These sparse representations remain strong, interpretable baselines for many text classification/search problems.",
      "keyPoints": [
        "Character n-grams handle misspellings/morphology.",
        "Vocabulary can be huge/sparse.",
        "Linear models pair well with sparse features."
      ],
      "resources": [
        "ir-book",
        "sklearn"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does Bag-of-Words, n-grams & TF-IDF make?",
        "How would you validate or debug Bag-of-Words, n-grams & TF-IDF in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "word2vec",
      "title": "Word2Vec: Skip-gram & CBOW",
      "module": "nlp",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Word2Vec learns dense word embeddings from context prediction. Skip-gram predicts context from a center word; CBOW predicts center from context, producing representations with useful distributional similarity.",
      "keyPoints": [
        "Static word has one vector regardless of context.",
        "Negative sampling approximates expensive softmax training.",
        "Context window shapes semantics."
      ],
      "resources": [
        "stanford-cs224n"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does Word2Vec: Skip-gram & CBOW make?",
        "How would you validate or debug Word2Vec: Skip-gram & CBOW in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "rnn-lstm",
      "title": "RNNs, LSTMs & GRUs",
      "module": "nlp",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "RNNs process sequences recurrently but suffer long-range optimization issues; LSTM/GRU gates help preserve or forget state. Transformers largely replaced them for many NLP tasks but they remain important foundations and useful for some streaming sequences.",
      "keyPoints": [
        "Hidden state summarizes past.",
        "Gates mitigate vanishing gradients.",
        "Sequential computation limits parallelism."
      ],
      "resources": [
        "stanford-cs224n",
        "d2l"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Recurrent sequence model"
        }
      ],
      "followUpQuestions": [
        "What assumptions does RNNs, LSTMs & GRUs make?",
        "How would you validate or debug RNNs, LSTMs & GRUs in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "seq2seq-attention",
      "title": "Seq2Seq & Encoder–Decoder Attention",
      "module": "nlp",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Encoder–decoder models map one sequence to another. Attention lets the decoder dynamically focus on encoder states instead of compressing the entire input into one fixed vector, paving the way for transformers.",
      "keyPoints": [
        "Teacher forcing is common during training.",
        "Exposure bias can appear at generation time.",
        "Attention alignment improves long sequences."
      ],
      "resources": [
        "stanford-cs224n"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "network",
          "title": "Encoder–decoder attention"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Seq2Seq & Encoder–Decoder Attention make?",
        "How would you validate or debug Seq2Seq & Encoder–Decoder Attention in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "audio-sampling",
      "title": "Waveforms, Sampling Rate & Aliasing",
      "module": "speech",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Digital audio samples a continuous waveform at a fixed rate. Frequencies above the Nyquist limit cannot be represented correctly and can alias, so preprocessing and resampling need appropriate filtering.",
      "keyPoints": [
        "Sample rate defines temporal resolution/bandwidth.",
        "Nyquist frequency is half sample rate.",
        "Bit depth affects amplitude quantization."
      ],
      "resources": [
        "stanford-cs224s",
        "whisper-paper"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does Waveforms, Sampling Rate & Aliasing make?",
        "How would you validate or debug Waveforms, Sampling Rate & Aliasing in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "spectrograms",
      "title": "STFT, Spectrograms & Mel Features",
      "module": "speech",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "The short-time Fourier transform converts local waveform windows into time-frequency representations. Mel scaling compresses frequency resolution toward human perception and is common in speech features.",
      "keyPoints": [
        "Window length trades time vs frequency resolution.",
        "Magnitude/power and phase carry different information.",
        "Log-Mel spectrograms are common ASR inputs."
      ],
      "resources": [
        "stanford-cs224s",
        "whisper-paper"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Convert a waveform into an STFT magnitude spectrogram.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "matrix",
          "title": "Spectrogram"
        }
      ],
      "followUpQuestions": [
        "What assumptions does STFT, Spectrograms & Mel Features make?",
        "How would you validate or debug STFT, Spectrograms & Mel Features in practice?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "ctc",
      "title": "Connectionist Temporal Classification (CTC)",
      "module": "speech",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "CTC trains sequence models when input frames are much longer than output labels and exact alignments are unknown. It sums over valid alignments using blank/repeated-token rules.",
      "keyPoints": [
        "Alignment is monotonic.",
        "Blank token enables flexible timing.",
        "Decoding can be greedy or beam search."
      ],
      "resources": [
        "stanford-cs224s"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "CTC decoding"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Connectionist Temporal Classification (CTC) make?",
        "How would you validate or debug Connectionist Temporal Classification (CTC) in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "asr-evaluation",
      "title": "ASR Evaluation: WER & CER",
      "module": "speech",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Word Error Rate counts substitutions, deletions and insertions relative to reference word count. It is interpretable but can hide semantic differences and depends on text normalization conventions.",
      "keyPoints": [
        "WER=(S+D+I)/N.",
        "Normalize references/hypotheses consistently.",
        "Slice by accent/noise/domain."
      ],
      "resources": [
        "stanford-cs224s",
        "whisper-paper"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does ASR Evaluation: WER & CER make?",
        "How would you validate or debug ASR Evaluation: WER & CER in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "oltp-olap",
      "title": "OLTP vs OLAP",
      "module": "analytics-eng",
      "priority": "very-high",
      "roles": [
        "de",
        "ds",
        "da"
      ],
      "interviewAnswer": "OLTP handles many short, concurrent reads and writes over a small number of records, so it prioritizes transactions, constraints, selective indexes, low tail latency, and recovery. OLAP handles fewer but heavier scans, joins, and aggregations over large history, so it benefits from columnar compression, vectorized and parallel execution, dimensional models, and workload isolation. These are workload properties rather than strict product categories. Organizations commonly preserve a normalized operational source of truth and propagate committed changes into an analytical store, accepting and monitoring a freshness boundary instead of letting large scans contend with customer transactions.",
      "keyPoints": [
        "Classify the workload, not the vendor",
        "Transactions protect state changes",
        "Analytics amortizes work over columns and batches",
        "Replication creates a freshness boundary",
        "Correctness needs reconciliation across systems"
      ],
      "resources": [
        "cmu-db",
        "duckdb-why",
        "postgres-transactions"
      ],
      "featured": true,
      "description": "Online transaction processing (OLTP) and online analytical processing (OLAP) describe workload families, not mutually exclusive product labels. OLTP systems serve many short, selective, concurrent state changes whose correctness depends on transactions, constraints, low tail latency, and predictable recovery. OLAP systems scan, join, and aggregate large portions of historical data for reporting, exploration, and model development; they favor columnar storage, vectorized execution, parallelism, compression, and workload isolation. This chapter derives those differences from access patterns, then connects them to row versus column layout, normalized versus dimensional models, indexing, materialized results, replication and change-data capture. You will learn why running an unbounded analytical query on a primary transaction database can harm customer traffic, why copying data introduces freshness and consistency trade-offs, and why a modern system may support both workload types without making their operational requirements identical. A worked commerce design follows an order from a transactional write into an analytical fact model and defines reconciliation, latency, privacy, rollback, and failure behavior. The goal is to choose boundaries from measured workload and correctness requirements rather than repeating that OLTP is simply “rows” and OLAP is simply “columns.”",
      "prerequisites": [
        "transactions-indexes",
        "sql-aggregation"
      ],
      "learningObjectives": [
        "Classify a database workload from access shape, concurrency, latency, correctness, and freshness requirements.",
        "Explain how row/column layout, execution model, indexing, schema design, and isolation support different workloads.",
        "Design and operate a transaction-to-analytics path with explicit delivery semantics, reconciliation, privacy, and recovery."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Compare row-oriented and column-oriented projections with a tiny model, then verify that both produce identical analytical results.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Workload-driven database design"
        },
        {
          "type": "flow",
          "title": "Committed data to trusted analytics"
        }
      ],
      "followUpQuestions": [
        "Why is columnar storage effective for analytics?",
        "Why avoid application dual writes?",
        "Can one database serve both workloads?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "star-schema",
      "title": "Star Schemas, Facts & Dimensions",
      "module": "analytics-eng",
      "priority": "high",
      "roles": [
        "de",
        "ds",
        "da"
      ],
      "interviewAnswer": "A star schema has a central fact table that records a business process at a declared grain and dimension tables that describe the who, what, where, when, and how. Start with the grain—for example, one row per order line—then choose dimensions and numeric facts consistent with it. Use conformed dimensions across facts, surrogate keys when historical dimension versions matter, and classify measures as additive, semi-additive, or non-additive. Validate uniqueness and referential integrity, reconcile source totals, handle late facts and dimensions explicitly, and define metrics above the model so users do not silently aggregate at the wrong grain.",
      "keyPoints": [
        "Declare grain before columns",
        "Facts record processes",
        "Dimensions provide context",
        "Additivity has dimensional limits",
        "Conformed dimensions enable consistent drill-across"
      ],
      "resources": [
        "kimball-dimensional",
        "dbt-best-practices",
        "postgres-select"
      ],
      "featured": false,
      "description": "A star schema publishes a business process as a fact table at one explicit grain surrounded by dimensions that provide descriptive context. Its value is not merely fewer joins: it makes repeated analytical questions predictable, metrics auditable, and filters consistent across tools. This chapter follows the dimensional design sequence—choose a business process, declare grain, identify dimensions, and define facts—then examines transaction, periodic snapshot, and accumulating snapshot facts; additive, semi-additive, and non-additive measures; conformed dimensions; surrogate keys; degenerate dimensions; role-playing dates; unknown members; bridges; and factless facts. You will learn to reject mixed-grain tables, distinguish event time from load time, preserve referential integrity for late-arriving data, and avoid summing ratios or balances across invalid dimensions. A worked order-line mart derives revenue and order metrics without double counting. The production sections cover incremental loading, reconciliation, semantic-layer alignment, access control, schema evolution, cost, and rollback. The aim is to make the grain sentence the executable contract that connects source events, SQL tests, metric definitions, and downstream machine-learning features.",
      "prerequisites": [
        "oltp-olap",
        "sql-joins",
        "sql-aggregation"
      ],
      "learningObjectives": [
        "Design a star schema by declaring business process and grain before selecting dimensions and facts.",
        "Classify facts and measures so aggregations remain valid across time, entities, and dimensional filters.",
        "Validate and operate a dimensional mart using keys, reconciliation, late-data policy, semantic definitions, and rollback."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build a tiny star schema, calculate line-grain metrics, and verify uniqueness, referential coverage, and reconciliation invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "schema",
          "title": "Order-line star at one declared grain"
        },
        {
          "type": "compare",
          "title": "Measure aggregation behavior"
        }
      ],
      "followUpQuestions": [
        "What is the grain of a fact table?",
        "Why use a surrogate dimension key?",
        "What is a conformed dimension?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "slowly-changing-dimensions",
      "title": "Slowly Changing Dimensions",
      "module": "analytics-eng",
      "priority": "medium",
      "roles": [
        "de",
        "ds",
        "da"
      ],
      "interviewAnswer": "SCD techniques define how dimension attribute changes affect historical analysis. Type 1 overwrites and is appropriate when only the corrected or latest value should be shown. Type 2 inserts a new surrogate-keyed row with effective intervals, so facts can retain the version valid at event time. Type 0 retains the original, and Type 3 stores limited prior state. For Type 2, enforce one current row per business key, non-overlapping half-open intervals, deterministic change detection, and idempotent handling of late or repeated events. Choose by attribute and question; not every change deserves preserved history.",
      "keyPoints": [
        "History policy is per attribute",
        "Type 1 rewrites interpretation",
        "Type 2 versions effective state",
        "Intervals must not overlap",
        "Late corrections need explicit semantics"
      ],
      "resources": [
        "kimball-dimensional",
        "dbt-best-practices",
        "postgres-window"
      ],
      "featured": false,
      "description": "Slowly changing dimensions (SCDs) are policies for how analytical attributes change and which historical questions remain answerable. Type 1 overwrites an attribute and intentionally presents the latest value for all facts. Type 2 inserts a new dimension version with effective bounds, preserving as-was history and requiring facts or temporal joins to select the correct surrogate key. Type 0 retains the original; Type 3 keeps limited previous state, while hybrid types address specialized reporting needs. This chapter treats SCD choice per attribute and business question rather than as a fashionable table-wide setting. You will learn to define durable business identity, change detection, half-open intervals, current-row invariants, late and out-of-order corrections, inferred members, deletes, and idempotent incremental merges. A worked customer-tier history shows how the same sale is grouped differently under current-state and event-time semantics. The production material covers source replay, hash pitfalls, concurrency, backfills, privacy deletion, bitemporal needs, reconciliation, and rollback. The central lesson is that historical truth has multiple meanings—what was effective, what the system knew, and what has since been corrected—and the model must name which one it preserves.",
      "prerequisites": [
        "star-schema",
        "sql-window-functions"
      ],
      "learningObjectives": [
        "Choose an SCD policy per attribute from the historical questions and correction semantics it must support.",
        "Implement and validate non-overlapping Type 2 versions with deterministic late-data and idempotency behavior.",
        "Distinguish valid time, system time, current-state reporting, correction, deletion, and bitemporal requirements."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build Type 2 interval insertion, including a late change, and verify non-overlap, one-current, idempotency, and temporal lookup.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Late Type 2 change repairs the timeline"
        },
        {
          "type": "compare",
          "title": "Two valid reporting semantics"
        }
      ],
      "followUpQuestions": [
        "When is Type 1 correct?",
        "What invariants define a valid Type 2 history?",
        "Why would you need bitemporal data?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "dbt-modeling",
      "title": "dbt: Transformation-as-Code",
      "module": "analytics-eng",
      "priority": "high",
      "roles": [
        "de",
        "ds",
        "da"
      ],
      "interviewAnswer": "dbt compiles templated SQL models into a directed acyclic graph using declared `source()` and `ref()` dependencies, then builds and tests selected nodes in dependency order. A maintainable project stages source data once, uses focused intermediate transformations, and publishes business-conformed marts with explicit grain and metrics. Materialization is a workload decision: views defer compute, tables precompute, incremental models update a bounded subset and need idempotent late-data logic, and snapshots preserve changing source state. Production quality requires version control, CI against isolated schemas, unit and data tests, contracts for public shapes, source freshness, atomic deployment, artifacts, monitoring, and a tested rollback or full rebuild.",
      "keyPoints": [
        "Dependencies must be declared",
        "Staging is source-conformed",
        "Marts are business-conformed",
        "Incremental logic must equal full refresh",
        "Tests and contracts protect different boundaries"
      ],
      "resources": [
        "dbt-docs",
        "dbt-best-practices",
        "dbt-contracts"
      ],
      "featured": false,
      "description": "dbt turns analytical SQL transformations into a version-controlled dependency graph with compilation, environments, tests, documentation, and reusable metadata. The tool does not make a data model correct by itself: engineers still define grain, business semantics, materialization, incremental boundaries, and failure behavior. This chapter explains how `source()` and `ref()` create lineage and execution order; how staging, intermediate, and mart layers move from source-conformed to business-conformed data; and how views, tables, ephemeral models, incremental models, and snapshots trade freshness, cost, persistence, and recoverability. You will learn to separate unit tests of SQL logic from data tests of built relations, use source freshness and model contracts appropriately, design idempotent incremental builds, and use state-aware continuous integration without allowing partial production publication. A worked order mart traces raw inputs through staging and fact models with exact keys and reconciliation. Production guidance covers orchestration, concurrency, slim CI, backfills, artifacts, observability, secrets, warehouse permissions, deployment and rollback. The objective is to treat a dbt project as a governed analytical software system whose compiled SQL and datasets are both production artifacts—not as a folder of ad hoc queries.",
      "prerequisites": [
        "star-schema",
        "sql-ctes-subqueries",
        "sql-window-functions"
      ],
      "learningObjectives": [
        "Structure a dbt dependency graph from source-conformed staging through purpose-built intermediates to business-conformed marts.",
        "Choose materializations and incremental strategies from correctness, freshness, cost, rebuild, and late-data requirements.",
        "Build a deployment and testing workflow that distinguishes SQL logic, dataset assertions, freshness, contracts, artifacts, and rollback."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build a minimal dependency-graph executor and verify topological order, isolated relation resolution, cycle rejection and reproducible output.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Source-conformed to business-conformed"
        },
        {
          "type": "compare",
          "title": "Quality controls protect different boundaries"
        }
      ],
      "followUpQuestions": [
        "Why use `ref()` instead of a hard-coded table name?",
        "When should a model be incremental?",
        "How do unit tests differ from data tests?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "data-contracts-lineage",
      "title": "Data Contracts, Lineage & Semantic Consistency",
      "module": "analytics-eng",
      "priority": "high",
      "roles": [
        "de",
        "ds",
        "da"
      ],
      "interviewAnswer": "A data contract is a versioned producer-consumer agreement for a dataset's identity, schema, field semantics, grain, quality expectations, freshness, ownership, security and compatibility policy. Tests measure whether an instance meets parts of that agreement; they are not the agreement itself. Lineage links datasets through jobs and concrete runs, enabling impact and root-cause analysis. Good governance validates contracts in CI and production, captures runtime lineage, assigns owners, classifies breaking changes, versions or dual-publishes incompatible changes, propagates access policy, and monitors both contract violations and missing lineage. Lineage shows provenance, not correctness.",
      "keyPoints": [
        "Contract includes semantics, not only schema",
        "Tests observe contract properties",
        "Lineage records production relationships",
        "Compatibility needs consumer evidence",
        "Ownership and change process make metadata operational"
      ],
      "resources": [
        "dbt-contracts",
        "openlineage-object-model",
        "dbt-docs"
      ],
      "featured": false,
      "description": "A data contract is a versioned agreement at a producer-consumer boundary: identity, schema, semantics, quality expectations, freshness, ownership, compatibility, security classification and change process. Lineage records how datasets are produced and consumed through jobs and runs so teams can assess impact, trace incidents and understand provenance. Neither is sufficient alone. A schema can remain compatible while the meaning or population changes, and a lineage graph can show edges without proving that the data on them is correct. This chapter separates contracts from tests, service-level objectives and documentation; distinguishes design-time from runtime and column-level lineage; and explains how OpenLineage represents jobs, runs, datasets, events and extensible facets. You will learn to classify additive and breaking changes, evolve public datasets through deprecation and versions, propagate sensitivity, and avoid turning governance into unreviewed YAML. A worked customer mart change follows an identifier type migration through consumers and rollback. Production guidance covers ownership, CI, catalog integration, event delivery, graph completeness, incident response and access control. The outcome is a practical governance system that makes change safe without pretending every producer can guarantee perfect data.",
      "prerequisites": [
        "dbt-modeling",
        "star-schema"
      ],
      "learningObjectives": [
        "Define a useful data contract spanning structure, semantics, quality, service levels, ownership, security, compatibility and change policy.",
        "Interpret design-time, runtime, dataset-, job-, run- and column-level lineage without overstating completeness or correctness.",
        "Operate a compatible schema/semantic change using impact analysis, consumer validation, versioning, deprecation, monitoring and rollback."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Validate a compact row contract, build a job-dataset lineage graph, and verify that breaking changes and downstream impact are detected.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Safe incompatible dataset change"
        },
        {
          "type": "compare",
          "title": "Metadata answers different questions"
        }
      ],
      "followUpQuestions": [
        "How is a contract different from a data test?",
        "What is runtime lineage?",
        "What is the hardest breaking change to detect?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "partitioning-sharding",
      "title": "Partitioning & Sharding",
      "module": "distributed",
      "priority": "high",
      "roles": [
        "de",
        "mle"
      ],
      "interviewAnswer": "Partitioning divides data/work across machines so systems scale. A good partition key balances load and supports common access patterns; skew creates hot partitions.",
      "keyPoints": [
        "Hash vs range partitioning.",
        "Rebalancing has operational cost.",
        "Cross-partition operations are harder."
      ],
      "resources": [
        "mit-6824",
        "spark"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Horizontal sharding"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Partitioning & Sharding make?",
        "How would you validate or debug Partitioning & Sharding in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "replication-consistency",
      "title": "Replication & Consistency Models",
      "module": "distributed",
      "priority": "high",
      "roles": [
        "de",
        "mle"
      ],
      "interviewAnswer": "Replication improves availability/read scale but creates questions about when replicas agree. Strong, eventual and session-level consistency offer different latency/availability trade-offs.",
      "keyPoints": [
        "Replication is not backup.",
        "Read-after-write may matter even when global strong consistency does not.",
        "Conflict resolution depends on model."
      ],
      "resources": [
        "mit-6824"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "network",
          "title": "Replication"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Replication & Consistency Models make?",
        "How would you validate or debug Replication & Consistency Models in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "cap-theorem",
      "title": "CAP Theorem Without the Myth",
      "module": "distributed",
      "priority": "medium",
      "roles": [
        "de",
        "mle"
      ],
      "interviewAnswer": "Under a network partition, a distributed system must choose between always returning a consistent response and always remaining available. CAP is about partition scenarios, not a permanent “pick two” product label.",
      "keyPoints": [
        "Partition tolerance is unavoidable in distributed networks.",
        "Consistency has multiple definitions beyond CAP.",
        "Latency trade-offs also matter outside partitions."
      ],
      "resources": [
        "mit-6824"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "CAP theorem"
        }
      ],
      "followUpQuestions": [
        "What assumptions does CAP Theorem Without the Myth make?",
        "How would you validate or debug CAP Theorem Without the Myth in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "distributed-consensus",
      "title": "Consensus & Leader Election",
      "module": "distributed",
      "priority": "medium",
      "roles": [
        "de",
        "mle"
      ],
      "interviewAnswer": "Consensus lets nodes agree on ordered decisions despite failures. Protocols such as Raft/Paxos use quorums and leaders/terms to coordinate replicated state machines.",
      "keyPoints": [
        "Quorums overlap to preserve safety.",
        "Leader failure triggers election.",
        "Consensus solves metadata/control problems, not every data workload."
      ],
      "resources": [
        "mit-6824"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does Consensus & Leader Election make?",
        "How would you validate or debug Consensus & Leader Election in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "mapreduce-shuffle",
      "title": "MapReduce, Shuffle & Distributed Aggregation",
      "module": "distributed",
      "priority": "high",
      "roles": [
        "de",
        "ds"
      ],
      "interviewAnswer": "MapReduce partitions map work, groups intermediate keys through a shuffle, then reduces grouped values. Modern engines generalize this DAG model, but shuffle remains a major network/disk cost.",
      "keyPoints": [
        "Map is embarrassingly parallel; shuffle is expensive.",
        "Partitioning and skew dominate performance.",
        "Combiners/pre-aggregation can reduce traffic."
      ],
      "resources": [
        "stanford-cs246",
        "spark"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "MapReduce"
        }
      ],
      "followUpQuestions": [
        "What assumptions does MapReduce, Shuffle & Distributed Aggregation make?",
        "How would you validate or debug MapReduce, Shuffle & Distributed Aggregation in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "distributed-failure",
      "title": "Retries, Idempotency & Exactly-once Semantics",
      "module": "distributed",
      "priority": "very-high",
      "roles": [
        "de",
        "mle"
      ],
      "interviewAnswer": "Distributed operations fail partially. Retries are safe only when operations are idempotent or deduplicated. “Exactly once” usually means carefully defined processing/commit semantics rather than packets literally delivered once.",
      "keyPoints": [
        "At-least-once can duplicate effects.",
        "Idempotency keys make retries safe.",
        "Transactional sinks/checkpoints can coordinate processing."
      ],
      "resources": [
        "flink",
        "mit-6824"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "Retries, Idempotency & Exactly-once Semantics"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Retries, Idempotency & Exactly-once Semantics make?",
        "How would you validate or debug Retries, Idempotency & Exactly-once Semantics in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "design-ab-platform",
      "title": "Design an Experimentation Platform",
      "module": "system-design",
      "priority": "high",
      "roles": [
        "ds",
        "de",
        "mle"
      ],
      "interviewAnswer": "An experimentation platform needs deterministic assignment, exposure logging, metric computation, statistical analysis, guardrails, metadata and trustworthy diagnostics such as SRM. Separate experiment execution from analysis so decisions are reproducible.",
      "keyPoints": [
        "Assignment unit and bucketing.",
        "Exposure/event logging.",
        "Metric/analysis service.",
        "Trust diagnostics and governance."
      ],
      "resources": [
        "microsoft-experimentation"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions does Design an Experimentation Platform make?",
        "How would you validate or debug Design an Experimentation Platform in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "design-forecast-platform",
      "title": "Design a Forecasting Platform",
      "module": "system-design",
      "priority": "high",
      "roles": [
        "ds",
        "mle",
        "de"
      ],
      "interviewAnswer": "A forecasting platform must ingest time-indexed data, define cutoffs/horizons, construct leakage-safe features, run rolling backtests, train/version models, generate probabilistic forecasts and monitor bias/accuracy by segment.",
      "keyPoints": [
        "Forecast origin/horizon are first-class metadata.",
        "Backtest and production feature pipelines must match.",
        "Support fallback baselines."
      ],
      "resources": [
        "fpp3",
        "nixtla",
        "google-rules-ml"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Forecasting platform"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Design a Forecasting Platform make?",
        "How would you validate or debug Design a Forecasting Platform in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "design-search",
      "title": "Design a Search / Retrieval System",
      "module": "system-design",
      "priority": "high",
      "roles": [
        "mle",
        "aie",
        "ds"
      ],
      "interviewAnswer": "A search system typically has document ingestion/indexing, query understanding, first-stage lexical/vector retrieval, optional reranking, caching and offline/online evaluation. The design should state latency, freshness and relevance objectives.",
      "keyPoints": [
        "Index update strategy.",
        "Candidate recall vs reranking precision.",
        "Hybrid exact/semantic retrieval.",
        "Query/log privacy."
      ],
      "resources": [
        "ir-book",
        "faiss"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Search system"
        }
      ],
      "followUpQuestions": [
        "What assumptions does Design a Search / Retrieval System make?",
        "How would you validate or debug Design a Search / Retrieval System in practice?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "norms-distances",
      "title": "Norms, Distances & Similarity",
      "module": "math",
      "priority": "high",
      "roles": [
        "ds",
        "mle",
        "aie",
        "as"
      ],
      "interviewAnswer": "A norm measures magnitude and must be nonnegative, definite, homogeneous and satisfy the triangle inequality. A metric measures pairwise distance and must be nonnegative, identity-preserving, symmetric and satisfy the triangle inequality. L1 sums absolute coordinates, L2 is Euclidean length, and L∞ takes the largest absolute coordinate. Cosine similarity uses angle and ignores positive scale after normalization; cosine distance conventions are not always metrics. Feature scaling defines the geometry, while Mahalanobis distance accounts for covariance through a positive semidefinite precision matrix. Choose the measure from desired invariances and costs, then keep preprocessing and ANN index configuration consistent.",
      "keyPoints": [
        "Geometry is a modeling choice",
        "Scaling changes nearest neighbors",
        "Cosine ignores positive magnitude",
        "Mahalanobis uses covariance structure",
        "Index and evaluation metric must agree"
      ],
      "resources": [
        "mit-linear-algebra",
        "3b1b-linear-algebra",
        "numpy-linalg"
      ],
      "featured": false,
      "description": "Norms measure vector or matrix magnitude; metrics measure distance between objects; similarity functions rank resemblance but may not satisfy metric axioms. Those choices encode geometry and can change nearest neighbors, clustering, regularization, robustness and retrieval quality. This chapter develops L1, L2, L∞ and general Lp norms, weighted and Mahalanobis distance, cosine similarity, Hamming distance and key matrix norms. You will learn the norm and metric axioms, the role of scaling and covariance, why cosine discards magnitude, how high-dimensional distance concentration changes intuition, and why comparing raw mixed-unit features is usually meaningless. A worked retrieval example contrasts Euclidean and cosine rankings before and after normalization. The lab implements core measures, checks symmetry, triangle inequality examples and library agreement, and rejects zero-vector cosine. Production guidance covers preprocessing/versioning, approximate nearest-neighbor index compatibility, floating-point clipping, missing values, privacy, distribution drift and monitoring of neighbor stability. The goal is to make “distance” a modeled assumption tied to invariances and decision cost, not a default call chosen after features have already defined an accidental geometry.",
      "prerequisites": [
        "vectors-matrices"
      ],
      "learningObjectives": [
        "Distinguish norms, metrics and similarities and verify the properties each downstream algorithm assumes.",
        "Choose Lp, cosine, weighted or Mahalanobis geometry from feature units, invariances, covariance and task cost.",
        "Operate distance-based systems with stable preprocessing, index-metric consistency, drift checks and meaningful retrieval evaluation."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement L1, L2, L∞ and cosine, then verify metric properties, normalized equivalence and NumPy agreement.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Unit-ball geometry changes what counts as near"
        },
        {
          "type": "flow",
          "title": "Production retrieval geometry"
        }
      ],
      "followUpQuestions": [
        "When are cosine and Euclidean rankings equivalent?",
        "What problem does Mahalanobis distance address?",
        "Why can distance degrade in high dimensions?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "projections-least-squares",
      "title": "Orthogonality, Projections & Least Squares",
      "module": "math",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Least squares chooses x̂ minimizing `||Ax−b||²`. At the optimum the residual r=b−Ax̂ is orthogonal to the column space, giving `AᵀA x̂=Aᵀb`. The fitted values are the projection of b onto Col(A). Normal equations are useful for derivation but square the condition number; production solvers use QR or SVD. If A is rank-deficient, coefficients are not unique and the pseudoinverse returns a minimum-norm solution. Always include the intended intercept, inspect rank and conditioning, evaluate out of sample, and remember that unbiasedness or confidence intervals require assumptions beyond numerical minimization.",
      "keyPoints": [
        "Fitted values lie in column space",
        "Residual is orthogonal to features",
        "Normal equations are a derivation",
        "QR/SVD are safer solvers",
        "Rank deficiency breaks coefficient uniqueness"
      ],
      "resources": [
        "mit-linear-algebra",
        "numpy-linalg",
        "boyd-convex"
      ],
      "featured": false,
      "description": "Orthogonal projection chooses the point in a subspace closest to a target, and least squares uses that geometry to fit inconsistent linear systems. Given a design matrix A and observations b, the fitted vector A x̂ is the projection of b onto A's column space, so the residual is orthogonal to every column. This chapter derives normal equations, explains why QR and singular value decomposition are safer computational routes, and connects rank, pseudoinverse, minimum-norm solutions, regularization, leverage and residual diagnostics. You will learn to construct projection onto a vector or orthonormal basis, distinguish coefficient uncertainty from predictive error, include intercepts and categorical encodings correctly, and identify when collinearity or ill-conditioning makes coefficients unstable even though predictions look reasonable. A worked line fit checks residual orthogonality by hand and with NumPy. Production guidance covers train/test separation, scaling, solver choice, dtype, robust alternatives, monitoring, privacy, artifact versioning and rollback. The objective is to connect the geometric statement “closest point in a subspace” to practical regression code and to know where ordinary least squares assumptions stop supporting statistical conclusions.",
      "prerequisites": [
        "vectors-matrices",
        "norms-distances"
      ],
      "learningObjectives": [
        "Derive projection and least-squares optimality from residual orthogonality and the geometry of column space.",
        "Choose QR, SVD, pseudoinverse or regularization instead of relying blindly on normal equations or explicit inverse.",
        "Validate fits using rank, conditioning, residual structure, leakage-safe evaluation and production monitoring."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Project by solving least squares and verify the normal-equation, orthogonality, minimum-error and NumPy invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Least squares as orthogonal decomposition"
        },
        {
          "type": "compare",
          "title": "Same objective, different numerical routes"
        }
      ],
      "followUpQuestions": [
        "Why is the residual orthogonal to every feature column?",
        "Why prefer QR to normal equations?",
        "What does the pseudoinverse return?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "jacobian-hessian",
      "title": "Jacobians, Hessians & Second-order Thinking",
      "module": "math",
      "priority": "medium",
      "roles": [
        "ds",
        "mle",
        "aie",
        "as"
      ],
      "interviewAnswer": "For f:R^n→R^m, the Jacobian J has entries `J_ij=∂f_i/∂x_j` under the output-by-input convention and maps a small input change to `df≈J dx`. A JVP computes Jv; a VJP computes uᵀJ and is what reverse mode uses. For scalar f, the Hessian H has `H_ij=∂²f/∂x_i∂x_j` and gives the quadratic term `½dxᵀHdx`. At a stationary point, positive-definite H indicates a strict local minimum, negative definite a maximum, and mixed eigenvalue signs a saddle. Full matrices are usually avoided; autodiff computes products, while Newton/Gauss-Newton methods solve damped systems with conditioning and validation checks.",
      "keyPoints": [
        "Jacobian maps input perturbations to output perturbations",
        "JVP and VJP avoid full matrices",
        "Hessian encodes local curvature",
        "Eigenvalue signs classify stationary geometry",
        "Newton steps require safe solves and damping"
      ],
      "resources": [
        "boyd-convex",
        "stanford-ee364a",
        "numpy-linalg"
      ],
      "featured": false,
      "description": "The Jacobian is the matrix representation of a vector-valued function's local linear map; the Hessian records second derivatives of a scalar function and describes local curvature. These objects clarify tensor shapes, sensitivity, inverse problems, uncertainty propagation and optimization, but full materialization is often unnecessary or impossible at ML scale. This chapter derives Jacobian-vector products (JVPs), vector-Jacobian products (VJPs), Hessian-vector products, quadratic Taylor models, curvature eigenvalues and positive-definiteness tests. You will learn to distinguish output-by-input conventions, interpret mixed partial symmetry under regularity assumptions, identify minima, maxima and saddles, and explain why Newton's method can fail when curvature is indefinite or the linear solve is unstable. A worked two-input/two-output map and scalar objective checks all shapes. The lab compares analytic Jacobian/Hessian values to finite differences and validates directional products. Production guidance covers autodiff mode choice, Gauss-Newton and Fisher approximations, damping, conjugate gradients, conditioning, precision, custom operations, monitoring and rollback. The objective is to use derivative operators and products as practical tools instead of treating giant derivative matrices as objects that must always be formed.",
      "prerequisites": [
        "derivatives-gradients",
        "eigen-svd"
      ],
      "learningObjectives": [
        "Derive Jacobian, JVP, VJP, Hessian and Hessian-vector shapes and interpret them as local sensitivity operators.",
        "Use Hessian eigenstructure and quadratic models to classify stationary points and reason about conditioning and Newton-like steps.",
        "Choose exact products or structured approximations with numerical checks, damping, scalable solves and production monitoring."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement central-difference Jacobian and Hessian checks, then verify JVP, VJP, symmetry and analytic curvature.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Derivative operators without giant matrices"
        },
        {
          "type": "compare",
          "title": "Hessian eigenvalue signatures"
        }
      ],
      "followUpQuestions": [
        "What is the difference between a JVP and VJP?",
        "How can you compute Hv without H?",
        "Why add damping to Newton?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "numerical-stability",
      "title": "Numerical Stability: log-sum-exp, overflow & conditioning",
      "module": "math",
      "priority": "high",
      "roles": [
        "ds",
        "mle",
        "aie",
        "as"
      ],
      "interviewAnswer": "Floating point represents a finite set of values with limited precision and exponent range, so operations round, addition is non-associative, large exponentials overflow, tiny values underflow and subtracting nearly equal numbers loses significant digits. Stable algorithms reformulate without changing the mathematical result: log-sum-exp subtracts the maximum, softmax shares that shift, probabilities multiply in log space, and linear systems use factorization-based solves rather than inverses or normal equations. Conditioning is sensitivity of the problem; stability is behavior of the algorithm. Use condition estimates, scale-aware tolerances, higher-precision accumulation where needed, nonfinite monitoring and adversarial numerical tests across hardware.",
      "keyPoints": [
        "Finite precision changes algebraic behavior",
        "Conditioning belongs to the problem",
        "Stability belongs to the algorithm",
        "Shift/scaling avoids range failure",
        "Solve and factorize; do not invert"
      ],
      "resources": [
        "goldberg-floating",
        "scipy-logsumexp",
        "numpy-linalg"
      ],
      "featured": false,
      "description": "Numerical stability asks whether an algorithm produces an accurate result in finite-precision arithmetic; conditioning asks whether the underlying problem itself is sensitive to small input changes. This chapter develops floating-point representation, unit roundoff, overflow, underflow, subnormals, cancellation and non-associativity, then derives stable log-sum-exp, softmax, log-probability, variance, norm and linear-system practices. You will learn to distinguish forward from backward error, use condition numbers, avoid explicit inverses and normal equations, choose dtypes and tolerances, and detect when no algorithm can recover information absent from ill-conditioned data. A worked extreme-logit example shows why subtracting the maximum preserves softmax exactly in real arithmetic while preventing overflow. The lab implements stable log-sum-exp/softmax and compensated summation with invariants against high-precision references. Production guidance covers mixed precision, loss scaling, deterministic reductions, NaN/Inf policy, telemetry, cross-hardware regression, adversarial inputs, resource limits and rollback. The goal is to make numerical behavior part of algorithm design and system observability rather than a late response to a mysterious NaN.",
      "prerequisites": [
        "vectors-matrices",
        "eigen-svd",
        "derivatives-gradients"
      ],
      "learningObjectives": [
        "Explain floating-point rounding, range limits, cancellation and non-associativity and predict common failure modes.",
        "Separate problem conditioning from algorithm stability using forward/backward error and condition-number reasoning.",
        "Implement and operate stable transformations, reductions and linear solves with dtype-aware tests, telemetry and safe failure policy."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement stable log-sum-exp, softmax and compensated summation, then verify extreme-value invariants and high-precision agreement.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Problem sensitivity versus algorithm behavior"
        },
        {
          "type": "flow",
          "title": "Stable softmax transformation"
        }
      ],
      "followUpQuestions": [
        "What is the difference between conditioning and stability?",
        "Why subtract the maximum in softmax?",
        "Why avoid normal equations numerically?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "joint-marginal-conditional",
      "title": "Joint, Marginal & Conditional Distributions",
      "module": "probability",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "The joint distribution `p(x,y)` assigns probability to combinations. Marginals sum or integrate out unobserved variables: `p(x)=Σ_y p(x,y)`. For `p(y)>0`, `p(x|y)=p(x,y)/p(y)`. Conversely `p(x,y)=p(x|y)p(y)`, and this chain rule extends to many variables. A joint determines all marginals and conditionals, but a marginal does not preserve dependence. For continuous variables, densities integrate rather than give point probability. Conditioning means learning an observed event; it is not the same as intervening causally. Validate support and normalization and use log-space inference for tiny high-dimensional probabilities.",
      "keyPoints": [
        "Joint keeps co-occurrence",
        "Marginal sums out variables",
        "Conditional slices and renormalizes",
        "Chain rule factorizes any joint",
        "Conditioning is observation, not intervention"
      ],
      "resources": [
        "harvard-stat110",
        "stanford-stats60",
        "scipy-stats"
      ],
      "featured": false,
      "description": "A joint distribution describes uncertainty about variables together; marginals summarize one variable by summing or integrating out the others; conditional distributions renormalize a slice after observing information. These operations are the grammar behind probabilistic models, likelihoods, missing-data reasoning and graphical models. This chapter develops discrete probability tables and continuous joint densities, support, normalization, CDFs, conditional expectation, transformations and the chain/product rule. You will learn that marginals lose dependence information, that conditioning can change both support and association, and that a valid-looking collection of conditionals may not correspond to one compatible joint distribution. A worked weather-demand table computes marginals, conditionals, covariance and a posterior-like update. The lab normalizes a joint table and verifies marginalization, conditional normalization, reconstruction and expectation. Production guidance covers sparse/high-dimensional representations, zero-probability conditioning, density/log normalization, missing-not-at-random selection, privacy, drift, inference approximation and rollback. The objective is to move fluently among joint, marginal and conditional views while always naming which variables were observed, integrated out or intervened upon.",
      "prerequisites": [
        "probability-basics",
        "expectation-variance"
      ],
      "learningObjectives": [
        "Construct and validate discrete/continuous joint distributions and derive marginals, conditionals and expectations by sum/integration.",
        "Use chain-rule factorizations and transformations while distinguishing conditioning from marginalization and intervention.",
        "Operate high-dimensional probabilistic representations with stable normalization, support/selection assumptions, approximation checks and privacy controls."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Normalize and query a discrete joint table, verifying marginals, conditionals, reconstruction, expectations and dependence.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Three views of one probability table"
        },
        {
          "type": "compare",
          "title": "Observation versus action"
        }
      ],
      "followUpQuestions": [
        "How do you get a marginal from a joint?",
        "Does a joint determine conditionals?",
        "Why use log probabilities in inference?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "independence",
      "title": "Independence & Conditional Independence",
      "module": "probability",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Events A and B are independent when `P(A∩B)=P(A)P(B)`, equivalently `P(A|B)=P(A)` when defined. Variables X,Y are independent when their joint factorizes `p(x,y)=p(x)p(y)` over all values. Conditional independence `X ⟂ Y | Z` means `p(x,y|z)=p(x|z)p(y|z)` for relevant z. Pairwise independence does not imply mutual independence, and zero covariance does not imply independence except under special families. Conditioning on a common cause can remove association; conditioning on a collider can create it. Independence claims depend on the population/model and may fail after selection or deployment shift.",
      "keyPoints": [
        "Independence is joint factorization",
        "Pairwise is weaker than mutual",
        "Uncorrelated is weaker than independent",
        "Conditioning can remove or create dependence",
        "The claim is population and model relative"
      ],
      "resources": [
        "harvard-stat110",
        "harvard-causal-diagrams",
        "stanford-stats60"
      ],
      "featured": false,
      "description": "Independence is a precise factorization statement: learning one event or variable does not change the distribution of another. Conditional independence makes the same claim within each value of a conditioning set and is the key simplification behind graphical models, naive Bayes, randomized experiments and modular probabilistic reasoning. This chapter distinguishes pairwise from mutual independence, zero covariance from independence, and marginal from conditional independence. It explains common-cause confounding, mediation, colliders and selection, showing why conditioning can remove dependence in one graph and create it in another. You will learn to test factorization in finite tables, use d-separation as a graph-based implication under a causal/probabilistic model, and avoid reading observed conditional independence as automatic causal proof. A worked alarm example contrasts marginal dependence through a hidden cause with conditional independence after that cause is known. The lab constructs exact binary tables and simulates collider bias. Production guidance covers feature leakage, naive conditional assumptions, sparse conditional tests, distribution shift, selection logs, graph/version governance, fairness, privacy and rollback. The objective is to treat every independence claim as relative to a distribution, conditioning set and population—not as an intrinsic relationship between column names.",
      "prerequisites": [
        "joint-marginal-conditional"
      ],
      "learningObjectives": [
        "Verify event/random-variable independence and distinguish pairwise, mutual, conditional and mean/uncorrelated relationships.",
        "Reason about chains, forks and colliders using factorization and d-separation without confusing association with intervention.",
        "Validate and operate conditional-independence assumptions under selection, sparse data, drift, leakage and high-stakes decision constraints."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Verify conditional versus marginal independence in exact tables and demonstrate collider dependence through simulation.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Conditioning has opposite effects"
        },
        {
          "type": "flow",
          "title": "Audit an independence assumption"
        }
      ],
      "followUpQuestions": [
        "When does zero covariance imply independence?",
        "What is collider bias?",
        "Why is conditional independence useful?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "monte-carlo",
      "title": "Monte Carlo Simulation",
      "module": "probability",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "To estimate `μ=E_p[h(X)]`, draw samples from p and average `μ̂=n^{-1}Σh(X_i)`. For IID finite variance, it is unbiased and has standard error `sqrt(Var(h)/n)`; CLT intervals are approximate and convergence is only `1/√n`. Variance reduction changes sampling or uses correlated known quantities without changing the target. Importance sampling draws from q and weights by p/q, but requires support coverage and can fail when a few weights dominate. Record Generator/algorithm, seed or state, code and sample count; use independent spawned streams in parallel, monitor standard error/effective sample size and separate numerical Monte Carlo error from misspecified-model uncertainty.",
      "keyPoints": [
        "Estimator targets an expectation",
        "IID error shrinks as 1/√n",
        "Variance reduction uses structure",
        "Importance weights need support and overlap",
        "RNG stream/state is part of the artifact"
      ],
      "resources": [
        "harvard-stat110",
        "numpy-random",
        "scipy-stats"
      ],
      "featured": false,
      "description": "Monte Carlo methods approximate expectations, probabilities and integrals by sampling from a distribution and averaging a function of the draws. Their power is dimensional flexibility and simple error analysis; their weakness is the slow `1/√n` convergence of independent sampling and the fact that a reproducible random number is not evidence that the modeled distribution is correct. This chapter derives the estimator, variance and standard error, then covers inverse/rejection sampling, importance sampling, antithetic and control variates, stratification, quasi-Monte Carlo, rare events, Markov chain dependence and sequential stopping. You will learn to separate model uncertainty from simulation error, design independent parallel random streams, diagnose weight degeneracy and report confidence/precision rather than one seed's answer. A worked integral estimates π and compares variance-reduction ideas. The lab estimates an integral with crude and antithetic sampling and verifies convergence and reproducibility with NumPy Generator. Production guidance covers RNG state/version compatibility, deterministic replay, cryptographic boundaries, numerical stability, cost budgets, distributed aggregation, monitoring and rollback. The objective is to make simulation an auditable numerical experiment with a defined estimand, sampling law, uncertainty and failure policy.",
      "prerequisites": [
        "expectation-variance",
        "clt",
        "distributions"
      ],
      "learningObjectives": [
        "Derive Monte Carlo estimators, standard errors and confidence approximations for expectations/probabilities and distinguish simulation from model uncertainty.",
        "Select and diagnose importance, control, antithetic, stratified, quasi-random or correlated sampling methods from integrand structure and cost.",
        "Operate reproducible parallel simulations with independent streams, stable aggregation, convergence monitoring, security boundaries and rollback."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Estimate an integral using crude and antithetic sampling, verify reproducibility, unbiased target, uncertainty scaling and independent spawned streams.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Auditable Monte Carlo experiment"
        },
        {
          "type": "compare",
          "title": "Variance reduction strategies"
        }
      ],
      "followUpQuestions": [
        "Why is Monte Carlo slow?",
        "What is effective sample size for weights?",
        "How is quasi-Monte Carlo different?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "law-total-expectation",
      "title": "Law of Total Probability & Total Expectation",
      "module": "probability",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "If events B_i form a partition, `P(A)=Σ_iP(A|B_i)P(B_i)`. For a conditioning variable Z, `E[X]=E[E[X|Z]]`, the tower property. Total variance is `Var(X)=E[Var(X|Z)]+Var(E[X|Z])`, separating average within-group variance from variation between group means. The weights must be probabilities for the target population, not arbitrary averages of group metrics. These laws are identities and require no independence, but each conditional quantity and group weight must refer to the same well-defined population and observation process.",
      "keyPoints": [
        "Partition cases must be disjoint and exhaustive",
        "Weight conditional answers by target probability",
        "Tower property averages conditional means",
        "Total variance equals within plus between",
        "Composition changes aggregate metrics"
      ],
      "resources": [
        "harvard-stat110",
        "think-bayes",
        "stanford-stats60"
      ],
      "featured": false,
      "description": "The laws of total probability, expectation and variance solve an uncertain problem by conditioning on a useful partition and averaging the conditional answers with the correct weights. They formalize mixture models, subgroup aggregation, hierarchical risk, hidden states, recursive dynamic programming and Bayesian prediction. This chapter derives each law, the tower property and within/between variance decomposition, then shows how choosing a conditioning variable can simplify or complicate a calculation. You will learn to distinguish conditional weights from observed sample proportions, avoid averaging rates without population weights, and use the complement event or first-step analysis strategically. A worked customer-support example combines channel-specific escalation probabilities and expected handling times while exposing composition drift. The lab computes mixture probabilities and moments and verifies them against direct enumeration. Production guidance covers changing segment mix, post-stratification, sparse groups, delayed/missing labels, numerical log mixtures, hierarchical shrinkage, monitoring, privacy and rollback. The objective is to use conditioning as a controlled decomposition—state the exhaustive cases, solve each case, then reassemble—while recognizing that aggregate performance can move even when every conditional performance stays fixed.",
      "prerequisites": [
        "joint-marginal-conditional",
        "expectation-variance"
      ],
      "learningObjectives": [
        "Derive and apply total probability, tower expectation and total variance over event partitions or conditioning variables.",
        "Use first-step/latent-group conditioning and interpret within-group versus between-group uncertainty and composition effects.",
        "Operate mixture and stratified estimates with correct weights, sparse-group uncertainty, drift monitoring, privacy and stable rollback."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Compute total probability, expectation and variance for a finite mixture and verify them against direct enumeration and composition changes.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Condition, solve, and recombine"
        },
        {
          "type": "compare",
          "title": "Two sources of total uncertainty"
        }
      ],
      "followUpQuestions": [
        "What conditions must partition events satisfy?",
        "What is the tower property?",
        "How can aggregate performance change without subgroup degradation?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "normalization-db",
      "title": "Database Normalization: 1NF to 3NF",
      "module": "sql",
      "priority": "high",
      "roles": [
        "de",
        "ds",
        "da"
      ],
      "interviewAnswer": "Normalization organizes attributes around keys and functional dependencies to reduce redundancy and update anomalies. 1NF requires atomic relation-valued design in the chosen model; 2NF removes dependencies on only part of a composite candidate key; 3NF removes non-key attributes depending transitively on keys, with a formal dependency condition; BCNF requires every nontrivial determinant to be a superkey. A decomposition must also be lossless, and dependency preservation is desirable. Denormalize only for a measured workload and define how duplicate facts stay consistent.",
      "keyPoints": [
        "Dependencies come from semantics",
        "Candidate keys may be composite",
        "Decomposition must be lossless",
        "3NF and BCNF differ",
        "Denormalization creates maintenance duty"
      ],
      "resources": [
        "cmu-db",
        "postgres"
      ],
      "featured": false,
      "description": "Relational normalization uses keys and functional dependencies to place facts where they can be inserted, updated, and deleted without contradictory copies. First, second, and third normal form are not a ritual of splitting tables; they are tests against a declared meaning of attributes. This chapter defines superkeys, candidate keys, prime attributes, determinants, functional and transitive dependencies, then derives 1NF, 2NF, 3NF, and Boyce-Codd normal form (BCNF). It explains lossless decomposition and dependency preservation, because individually clean-looking tables can still fail to reconstruct the original relation or enforce a rule locally. You will normalize an order-line relation, identify update, insertion, and deletion anomalies, and preserve historical prices rather than incorrectly deriving them from a current product table. The design section connects normalized operational schemas with foreign keys, temporal validity, generated identifiers, JSON, star schemas, materialized views, performance, and governance. The objective is to model one fact once under the correct key, then denormalize only for a measured read or analytics need with explicit ownership and refresh semantics.",
      "prerequisites": [],
      "learningObjectives": [
        "Derive candidate keys and functional dependencies from domain semantics rather than sample coincidences.",
        "Normalize a relation through 1NF, 2NF, 3NF, and BCNF while checking lossless join and dependency preservation.",
        "Choose deliberate denormalization for operational or analytical workloads with integrity, history, refresh, lineage, and performance controls."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Use SQLite constraints to model normalized orders and verify uniqueness, references, historical price stability, and revenue reconciliation.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Order relation decomposition"
        },
        {
          "type": "compare",
          "title": "Normalized source and denormalized read model"
        }
      ],
      "followUpQuestions": [
        "How do 3NF and BCNF differ?",
        "What is lossless decomposition?",
        "Why preserve dependencies?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "query-plans",
      "title": "Query Plans & SQL Performance",
      "module": "sql",
      "priority": "high",
      "roles": [
        "de",
        "ds",
        "da"
      ],
      "interviewAnswer": "The optimizer transforms declarative SQL into a physical operator tree using statistics and a cost model. Read from leaf scans upward, tracking estimated rows, actual rows per loop, join algorithms, filters, sorts, memory, buffers, and spill. `EXPLAIN` estimates without running; `EXPLAIN ANALYZE` executes and can have side effects for writes. Large estimated-versus-actual cardinality errors often cause poor join order or memory choices. Costs are planner units, not milliseconds, so validate with representative runtime and workload impact before changing SQL, indexes, statistics, or configuration.",
      "keyPoints": [
        "Plan is a physical operator tree",
        "Cardinality drives choices",
        "Actual rows times loops matters",
        "Cost units are not time",
        "Fix evidence, not node names"
      ],
      "resources": [
        "postgres-explain",
        "postgres-indexes",
        "cmu-db"
      ],
      "featured": false,
      "description": "A query plan is the database's chosen physical program for a declarative SQL statement. It specifies scans, filters, joins, sorts, aggregates, exchanges, and materialization, with estimated rows and costs derived from statistics and a cost model. This chapter teaches plan reading from leaves to root, distinguishes estimated `EXPLAIN` from execution-producing `EXPLAIN ANALYZE`, and shows how cardinality errors cascade into bad join order, algorithm, memory, and parallelism choices. It covers sequential and index scans, nested-loop, hash, and merge joins, sorts and spills, hash aggregation, predicate pushdown, projection, sargability, prepared-plan/parameter effects, and why estimated cost is not milliseconds. You will diagnose a slow join by comparing estimates with actual rows and buffers, then fix the underlying distribution, predicate, statistics, index, or query semantics rather than blindly forcing a node. Production sections address safe plan capture, workload baselines, plan changes after upgrades, memory and temp I/O, concurrency, and regression monitoring. The goal is evidence-led optimization without cargo-cult hints.",
      "prerequisites": [
        "transactions-indexes",
        "sql-joins",
        "sql-aggregation"
      ],
      "learningObjectives": [
        "Read physical plans from data sources to root and explain cardinality, loops, rows, cost, buffers, memory, and spill evidence.",
        "Connect estimation errors and predicate/index shape to scan, join order, algorithm, aggregation, sorting, and parallel choices.",
        "Optimize safely with representative execution evidence, workload-level measurement, reversible changes, and plan-regression monitoring."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Use SQLite plan output and timing to verify index eligibility, result equivalence, and the difference between selective and broad predicates.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Read a plan from leaves to root"
        },
        {
          "type": "compare",
          "title": "Estimated and actual evidence"
        }
      ],
      "followUpQuestions": [
        "Why can estimated and actual rows differ greatly?",
        "Why might an index scan be slower for many rows?",
        "What is the risk of EXPLAIN ANALYZE on UPDATE?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "isolation-levels",
      "title": "Transactions & Isolation Levels",
      "module": "sql",
      "priority": "high",
      "roles": [
        "de",
        "mle",
        "da"
      ],
      "interviewAnswer": "Isolation controls how concurrent transactions appear to execute. Read Committed commonly gives each statement a fresh committed snapshot; repeatable/snapshot levels hold a stable transaction view but can still permit write skew in some systems; Serializable aims to make committed outcomes equivalent to some serial order and may abort transactions that threaten that guarantee. MVCC lets readers see versions rather than blocking every writer, but old snapshots have cleanup cost. Choose isolation from the invariant, use explicit locks or constraints where appropriate, and retry serialization failures and deadlocks as whole idempotent transactions.",
      "keyPoints": [
        "Name the invariant first",
        "Isolation controls histories",
        "MVCC uses version visibility",
        "Snapshot can allow write skew",
        "Serializable requires retry handling"
      ],
      "resources": [
        "postgres-transactions",
        "cmu-db"
      ],
      "featured": false,
      "description": "Transaction isolation defines which concurrent interleavings a database permits and what each transaction may observe. It is not equivalent to atomicity, and level names alone are insufficient because implementations differ. This chapter builds a history-based model, then explains dirty reads, nonrepeatable reads, phantoms, lost updates, write skew, and serialization anomalies. It covers multiversion concurrency control (MVCC), snapshots, locks, optimistic validation, PostgreSQL's current Read Committed, Repeatable Read, and Serializable behavior, serialization failures, deadlocks, and retry design. You will trace an on-call schedule where two individually valid updates violate a cross-row invariant under snapshot-style execution, then prevent it with a serializable transaction or explicit locking/materialized constraint. The operations section addresses transaction scope, deterministic lock order, read-only replicas, connection pools, long snapshots, timeouts, idempotency, metrics, and chaos testing. The objective is to choose the weakest level and explicit controls that actually preserve named invariants, then treat abort and retry as a normal part of concurrent correctness.",
      "prerequisites": [
        "transactions-indexes"
      ],
      "learningObjectives": [
        "Classify concurrent histories by dirty read, nonrepeatable read, phantom, lost update, write skew, and serialization behavior.",
        "Explain snapshot/MVCC visibility and compare target-engine isolation guarantees without relying solely on standard level names.",
        "Implement invariant-preserving transactions with locks or serializable validation, bounded idempotent retries, timeouts, and contention monitoring."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Simulate write skew and verify that a shared guard lock/serial critical section preserves the cross-row invariant.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "network",
          "title": "Write-skew dependency pattern"
        },
        {
          "type": "flow",
          "title": "Retryable transaction loop"
        }
      ],
      "followUpQuestions": [
        "What is write skew?",
        "Why can MVCC create bloat?",
        "How do deadlock and serialization failure differ?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "parquet-columnar",
      "title": "Columnar Storage, Parquet & Predicate Pushdown",
      "module": "analytics-eng",
      "priority": "high",
      "roles": [
        "de",
        "ds",
        "da"
      ],
      "interviewAnswer": "Parquet stores data by column within row groups. Each row group has one contiguous column chunk per field, split into encoded and compressed pages, with footer metadata describing schema and locations and often statistics. Analytical readers can avoid unprojected columns and skip row groups or pages whose metadata proves a predicate cannot match. Similar adjacent values compress effectively through encodings such as dictionary and run-length encoding. Performance still depends on engine support, file and row-group size, sort order, statistics, filter form and object-store requests. Parquet is a file format, not a transaction manager; reliable tables need metadata, atomic commits, schema policy and compaction around the files.",
      "keyPoints": [
        "Row groups partition rows",
        "Column chunks make projection cheap",
        "Pages carry encoding and compression",
        "Statistics can prove non-matches",
        "A file format is not a table transaction layer"
      ],
      "resources": [
        "parquet-concepts",
        "parquet-motivation",
        "duckdb"
      ],
      "featured": false,
      "description": "Apache Parquet is an open columnar file format for analytical data. A file is divided horizontally into row groups; each row group contains one contiguous column chunk per column, and column chunks contain encoded and compressed pages. That hierarchy lets readers project only required columns and use metadata statistics, dictionaries, page indexes and partition information to skip data that cannot match a predicate. This chapter derives the I/O and compression benefits, explains definition and repetition levels for nested structures, and separates file-format capabilities from query-engine behavior. You will learn why predicate pushdown is not the same as file pruning, how row-group size and sort order affect selectivity, why thousands of tiny files damage planning and throughput, and why a Parquet file alone does not provide table transactions, schema governance or safe concurrent updates. A worked event dataset estimates bytes avoided under projection and time-range pruning. Production guidance covers types, timestamps, nulls, dictionary fallback, compression, encryption, object-store requests, compaction, statistics, corruption, schema evolution and table formats. The aim is to reason from the query and physical layout to measured scan cost instead of assuming the `.parquet` suffix automatically makes analytics fast.",
      "prerequisites": [
        "oltp-olap",
        "big-o"
      ],
      "learningObjectives": [
        "Explain Parquet's file, row-group, column-chunk and page hierarchy and how it supports projection, encoding, compression and parallel reads.",
        "Distinguish partition pruning, row-group/page skipping and predicate pushdown, then diagnose why an intended filter still scans data.",
        "Choose and operate file size, row-group layout, sort order, schema, encoding and table metadata from real workloads and reliability needs."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Expose dictionary encoding and min/max row-group pruning, then compare the result with an idiomatic PyArrow Parquet scan (Use It requires `pyarrow`).",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "Parquet physical hierarchy"
        },
        {
          "type": "flow",
          "title": "How a selective analytical scan avoids work"
        }
      ],
      "followUpQuestions": [
        "What is a row group?",
        "Why does sorting help pruning?",
        "Why are tiny files harmful?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "warehouse-lake-lakehouse",
      "title": "Warehouse vs Data Lake vs Lakehouse",
      "module": "analytics-eng",
      "priority": "high",
      "roles": [
        "de",
        "ds",
        "da"
      ],
      "interviewAnswer": "A warehouse integrates managed relational storage, SQL compute, transactions, optimization and governance for analytical workloads. A data lake stores varied data in scalable object storage and open formats for many engines, but bare files lack atomic table updates and consistent metadata. A lakehouse adds a transactional metadata/table layer over open files, providing snapshots, schema and partition evolution, time travel and data skipping while retaining direct multi-engine access. The right choice depends on workload, latency, governance, interoperability, skills and total operating cost. Evaluate concrete guarantees—especially commits, deletes, concurrency, catalog consistency and rollback—not the architecture label.",
      "keyPoints": [
        "Architecture is a capability bundle",
        "Files are not tables",
        "Snapshots make publication atomic",
        "Open access trades against centralized control",
        "One storage copy can still have many semantics"
      ],
      "resources": [
        "lakehouse-paper",
        "iceberg-docs",
        "parquet-concepts"
      ],
      "featured": false,
      "description": "A data warehouse, data lake and lakehouse are architectural patterns assembled from storage, metadata, transaction, governance and compute capabilities—not quality rankings. A warehouse offers managed relational tables, SQL optimization, transactions and governance with controlled storage and strong workload integration. A data lake places diverse data in scalable object storage with open files and multiple compute engines, gaining flexibility while requiring explicit metadata, quality and publication discipline. A lakehouse adds a transactional metadata/table layer over directly accessible open files to provide snapshots, atomic updates, schema and partition evolution, time travel and improved optimization. This chapter separates file format from table format, catalog, engine and semantic model; compares coupling, latency, interoperability, cost and operational burden; and explains why “one copy” does not mean one consistent interpretation. You will learn to select an architecture from workloads and ownership, design bronze/raw through curated publication without turning layers into dumping grounds, and manage small files, compaction, concurrent writes and rollback. A worked multi-engine platform uses immutable object storage plus snapshot metadata and reconciled marts. The goal is to evaluate concrete guarantees and failure behavior instead of choosing a fashionable label or assuming a lakehouse automatically replaces every operational and analytical system.",
      "prerequisites": [
        "oltp-olap",
        "parquet-columnar",
        "star-schema"
      ],
      "learningObjectives": [
        "Compare warehouse, lake and lakehouse patterns across storage access, metadata, transactions, governance, workload support and operational ownership.",
        "Explain how an open table format turns immutable files into atomic snapshots with evolution, pruning, concurrent commit and rollback.",
        "Design a governed multi-workload analytical platform with explicit publication, reconciliation, security, cost, reliability and exit strategy."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Model an immutable-file table snapshot, verify atomic pointer publication and rollback, and show why directory listing is not a consistent table view.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "Lakehouse capability stack"
        },
        {
          "type": "flow",
          "title": "Atomic immutable-file commit"
        }
      ],
      "followUpQuestions": [
        "What does a table format add above Parquet?",
        "When is a warehouse still a strong choice?",
        "What is the small-file problem?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "lda-qda",
      "title": "LDA & QDA",
      "module": "ml",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Linear and Quadratic Discriminant Analysis model class-conditional Gaussian distributions. LDA shares covariance across classes and yields linear boundaries; QDA allows class-specific covariance and quadratic boundaries.",
      "keyPoints": [
        "Generative classifiers model p(x|y) and priors.",
        "LDA lower variance; QDA more flexible.",
        "Covariance estimation can be unstable in high dimensions."
      ],
      "resources": [
        "isl",
        "stanford-stats202"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions or limitations does LDA & QDA have?",
        "How would you validate LDA & QDA on a real dataset?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "adaboost",
      "title": "AdaBoost",
      "module": "ml",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "AdaBoost sequentially focuses new weak learners on examples previous learners misclassified, then combines learners with performance-based weights. It illustrates boosting before gradient-boosted trees.",
      "keyPoints": [
        "Weak learners combine into strong ensemble.",
        "Misclassified points receive more emphasis.",
        "Sensitive to noisy labels/outliers in some settings."
      ],
      "resources": [
        "isl",
        "stanford-stats202"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions or limitations does AdaBoost have?",
        "How would you validate AdaBoost on a real dataset?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "probability-calibration",
      "title": "Probability Calibration",
      "module": "evaluation",
      "priority": "very-high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "A classifier is calibrated when predictions of 0.8 correspond to about 80% positive outcomes among comparable cases. Ranking metrics can be strong while probabilities are badly calibrated.",
      "keyPoints": [
        "Reliability diagrams visualize calibration.",
        "Brier/log loss evaluate probabilistic quality.",
        "Platt/isotonic calibration need held-out data."
      ],
      "resources": [
        "sklearn",
        "isl"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Measure and improve probability calibration.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Calibration curve"
        }
      ],
      "followUpQuestions": [
        "What assumptions or limitations does Probability Calibration have?",
        "How would you validate Probability Calibration on a real dataset?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "threshold-tuning",
      "title": "Decision Thresholds & Cost-sensitive Classification",
      "module": "evaluation",
      "priority": "very-high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "The default 0.5 threshold is arbitrary unless costs and class priors justify it. Choose thresholds using validation data, business costs, safety constraints or capacity targets.",
      "keyPoints": [
        "Changing threshold changes precision/recall, not underlying ranking.",
        "Tune after training on held-out data.",
        "Revisit threshold when prevalence/costs shift."
      ],
      "resources": [
        "sklearn",
        "google-rules-ml",
        "google-mlcc-exercises"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Threshold changes the operating point"
        }
      ],
      "followUpQuestions": [
        "What assumptions or limitations does Decision Thresholds & Cost-sensitive Classification have?",
        "How would you validate Decision Thresholds & Cost-sensitive Classification on a real dataset?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "regression-metrics",
      "title": "Regression Metrics: RMSE, MAE, MAPE & R²",
      "module": "evaluation",
      "priority": "very-high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "Regression metrics emphasize different error properties. RMSE punishes large errors; MAE is robust and in target units; MAPE fails near zero and weights relative errors unevenly; R² measures variance explained relative to a mean baseline.",
      "keyPoints": [
        "Metric must match decision cost.",
        "Scale-dependent vs scale-free metrics differ.",
        "Always compare with a baseline."
      ],
      "resources": [
        "isl",
        "fpp3"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "Regression Metrics: RMSE, MAE, MAPE & R²"
        }
      ],
      "followUpQuestions": [
        "What assumptions or limitations does Regression Metrics: RMSE, MAE, MAPE & R² have?",
        "How would you validate Regression Metrics: RMSE, MAE, MAPE & R² on a real dataset?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "encoding-scaling",
      "title": "Scaling & Encoding Features",
      "module": "evaluation",
      "priority": "very-high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "Scaling matters for distance- and gradient-based models; categorical encoding choices affect leakage, dimensionality and generalization. Tree models often need less scaling but still require correct category handling.",
      "keyPoints": [
        "Standardization uses training statistics only.",
        "One-hot is robust for low-cardinality nominal categories.",
        "Target encoding requires leakage-safe folds/smoothing."
      ],
      "resources": [
        "sklearn",
        "google-mlcc"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "Scaling & Encoding Features"
        }
      ],
      "followUpQuestions": [
        "What assumptions or limitations does Scaling & Encoding Features have?",
        "How would you validate Scaling & Encoding Features on a real dataset?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "feature-interactions",
      "title": "Interactions & Domain Feature Engineering",
      "module": "evaluation",
      "priority": "high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "Feature engineering can expose known structure—ratios, interactions, lags, log transforms or domain aggregations—especially for simpler models. Every feature must be available at prediction time.",
      "keyPoints": [
        "Interactions encode conditional effects.",
        "Transform skewed multiplicative scales carefully.",
        "Availability/leakage beats cleverness."
      ],
      "resources": [
        "isl",
        "google-mlcc"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions or limitations does Interactions & Domain Feature Engineering have?",
        "How would you validate Interactions & Domain Feature Engineering on a real dataset?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "change-point-detection",
      "title": "Change-point Detection",
      "module": "anomaly",
      "priority": "medium",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "A change point is a boundary where a distributional parameter changes persistently; a point anomaly is an isolated deviation. Offline methods segment a complete series by minimizing within-segment cost plus a penalty per change. Exact dynamic programming is quadratic in a basic form, PELT prunes candidates and can be near linear under conditions, and binary segmentation is faster but greedy. Online detectors such as CUSUM trade false-alarm average run length against detection delay. I residualize known seasonality and trend using past information, choose cost, penalty, minimum segment and tolerance on historical incidents or simulation, and evaluate boundary precision/recall plus delay. In production I group duplicate alarms, connect releases and data-pipeline changes, and define confirm, reset, cooldown, and rollback actions.",
      "keyPoints": [
        "A change point marks persistent regime structure, not merely a large residual.",
        "Cost specifies what changes; penalty controls how many boundaries appear.",
        "PELT is exact for its objective while pruning candidates under stated conditions.",
        "Online detection balances false alarms and delay and needs reset semantics.",
        "Seasonality, dependence, and logging changes must be modeled or contextualized."
      ],
      "resources": [
        "pelt-paper",
        "ruptures-docs",
        "fpp3"
      ],
      "featured": false,
      "description": "Change-point detection locates times where the data-generating regime changes, such as a shift in mean, variance, trend, covariance, or event rate. It is different from point anomaly detection: one extreme observation is transient, while a change point marks a boundary after which many observations follow a new pattern. This chapter develops offline segmentation as penalized cost minimization, cumulative-sum evidence, exact dynamic programming, PELT pruning, binary segmentation, online detection delay, minimum segment length, penalty selection, and tolerance-based evaluation. You will learn how seasonality, trend, autocorrelation, missingness, logging changes, and multiple related series can create false boundaries or hide real ones. A worked latency example distinguishes a release-induced persistent shift from a short spike and connects detection to rollback. The lab implements exact penalized mean-shift segmentation, compares its strongest boundary with a vectorized CUSUM statistic, and verifies localization, translation, constant-series, and penalty behavior. Production guidance fixes event-time ordering, baseline and cost assumptions, confirmation windows, reset and cooldown logic, and change ownership; monitors false-alarm run length, delay, duplicate alarms, and post-change stabilization rather than merely counting detected indices.",
      "prerequisites": [
        "anomaly-types",
        "decomposition-stl"
      ],
      "learningObjectives": [
        "Distinguish transient anomalies from persistent regime changes and define offline versus online objectives.",
        "Formulate penalized segmentation and implement exact dynamic programming for mean changes.",
        "Explain PELT, binary segmentation, CUSUM, penalties, minimum segments, and detection-delay trade-offs.",
        "Evaluate and operate change detectors under seasonality, dependence, tolerance windows, and intervention feedback."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement exact penalized mean-shift segmentation, compare its boundary with CUSUM evidence, and verify localization, translation, constant-series, and penalty invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Spike versus persistent mean shift"
        },
        {
          "type": "flow",
          "title": "Change alarm to response"
        }
      ],
      "followUpQuestions": [
        "What does the penalty do in offline segmentation?",
        "How is PELT different from binary segmentation?",
        "How do you evaluate a detection that is five minutes late?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "supervised-rare-events",
      "title": "Supervised Rare-event Modeling",
      "module": "anomaly",
      "priority": "high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "For rare events, I first protect the label, split, and evaluation design. I can retain all positives and subsample negatives for efficiency, but I store inclusion probabilities and either weight the likelihood or correct and calibrate probabilities on representative data. Class weights and oversampling change the training objective; they may help ranking or optimization but do not automatically produce population probabilities. Duplicating positives adds no new information, and synthetic examples can violate temporal, categorical, or causal constraints. I evaluate PR/AP, recall at review capacity, calibration, and cost on a later untouched population, tune thresholds separately, audit nonalerts, and monitor prevalence, label maturity, hard-negative mix, subgroup support, and queue outcomes.",
      "keyPoints": [
        "Event diversity and label quality matter more than raw class ratio alone.",
        "Negative subsampling changes the sample prior and usually the probability intercept.",
        "Weights, resampling, calibration, and thresholding solve different problems.",
        "Validation must preserve deployment prevalence, time, groups, and label maturity.",
        "Selective review and hard-negative mining create feedback that requires audits."
      ],
      "resources": [
        "rare-events-logistic",
        "sklearn-calibration",
        "cost-sensitive-learning",
        "pr-imbalanced-paper"
      ],
      "featured": false,
      "description": "Supervised rare-event modeling uses labeled positives and negatives to learn a ranking or event probability when positives are scarce. The central problem is not that algorithms cannot see a minority class; it is that effective information is limited by the number, diversity, and labeling quality of events, while naive sampling and weighting can distort probabilities and validation. This chapter develops rare-event logistic behavior, case-control and negative subsampling, inverse-probability weighting, prior or intercept correction, class weights, hard-negative mining, resampling, calibration, cost-sensitive thresholds, and temporal or grouped evaluation. You will understand why oversampling duplicates does not create new positive information, why synthetic interpolation can be invalid for mixed or temporal data, and why weighting the training loss is different from choosing a decision threshold. A worked fraud example shows how a model trained on all positives and sampled negatives can preserve ranking yet overstate prevalence until corrected or calibrated. The lab reproduces that intercept shift with scikit-learn, applies a log-odds prior correction, and verifies prevalence, ranking, and cost-policy invariants. Production guidance versions inclusion probabilities, label maturity, calibration and policy separately; audits nonalerts; monitors prevalence, hard-negative mix, calibration, queue yield, and subgroup event support.",
      "prerequisites": [
        "logistic-regression",
        "rare-event-evaluation"
      ],
      "learningObjectives": [
        "Design case-control, weighted, or resampled training data without corrupting evaluation or probability interpretation.",
        "Apply and explain prior-log-odds correction after random negative subsampling.",
        "Separate representation, ranking objective, probability calibration, and cost-sensitive threshold policy.",
        "Diagnose label delay, leakage, hard-negative feedback, subgroup scarcity, and prevalence drift in production."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Demonstrate probability distortion from negative subsampling, apply prior-log-odds correction, and verify ranking, prevalence, and cost-policy invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Rare-event modeling layers"
        },
        {
          "type": "compare",
          "title": "What imbalance techniques actually change"
        }
      ],
      "followUpQuestions": [
        "When is negative subsampling safe for logistic slopes?",
        "Why calibrate on independent predictions?",
        "What is the biggest limit with ten positives?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "aft-models",
      "title": "Accelerated Failure Time Models",
      "module": "survival",
      "priority": "medium",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "An AFT model writes log T=x beta+sigma epsilon, so exp(beta_j) is a time ratio when other covariates are fixed. A positive coefficient stretches every modeled time quantile; for example exp(0.2)=1.22 means about 22 percent longer time under the model. The error distribution determines survival and hazard shape: Weibull, log-normal, and log-logistic are common choices. For an observed event the likelihood contributes the density f(t|x); for right censoring it contributes S(t|x), because only survival past the censor time is known. I compare distributions with residuals, calibration, likelihood-based criteria and held-out horizon scores, inspect nonlinear and time-varying acceleration, and avoid unsupported tail extrapolation. Time ratios are not automatically causal, and a convenient parametric curve does not replace censoring, entry, or competing-risk design.",
      "keyPoints": [
        "AFT coefficients multiply the event-time scale rather than the instantaneous hazard.",
        "Censored rows contribute survival probabilities, not event densities or negative labels.",
        "The chosen error distribution determines hazard shape and extrapolated tails.",
        "Weibull is both AFT and PH; log-normal and log-logistic generally are not PH.",
        "Communicable time ratios remain conditional, model-based, and noncausal without identification."
      ],
      "resources": [
        "aft-wei",
        "lifelines",
        "statsmodels-survival"
      ],
      "featured": false,
      "description": "Accelerated failure-time models place covariate effects directly on event time rather than on instantaneous hazard. In a log-linear AFT model, log T=x^T beta+sigma epsilon, so exp(beta_j) is a time ratio: values above one stretch the event-time distribution and values below one accelerate failure. This chapter derives censored likelihood contributions, compares Weibull, exponential, log-normal, and log-logistic assumptions, and explains when Weibull AFT is simultaneously a proportional-hazards model. It covers quantiles, survival and hazard recovery, residual and distributional diagnostics, nonlinearities, heterogeneity, delayed and interval censoring, extrapolation risk, and causal limits. A worked example translates a coefficient into median-time change. The lab implements a censored Weibull AFT likelihood, fits it with SciPy, verifies parameter recovery and time-unit invariance, and turns fitted parameters into survival predictions. Production guidance versions the time unit, distribution, censoring contribution, feature encoding, optimizer, supported horizon, and tail policy. AFT models provide unusually communicable duration effects, but that clarity depends on an adequate distribution and common acceleration structure.",
      "prerequisites": [
        "censoring-survival",
        "mle-map"
      ],
      "learningObjectives": [
        "Interpret AFT coefficients as multiplicative changes in event-time quantiles under a common acceleration model.",
        "Construct right-censored likelihoods from event densities and censoring survival contributions.",
        "Compare Weibull, log-normal, and log-logistic tail and hazard assumptions using diagnostics and validation.",
        "Recognize extrapolation, interval censoring, heterogeneity, time-varying effects, and causal limitations in deployment."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement a right-censored Weibull AFT likelihood, fit it with SciPy, verify parameter recovery and time-unit invariance, and produce monotone survival curves.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "AFT from log time to decisions"
        },
        {
          "type": "compare",
          "title": "AFT family assumptions"
        }
      ],
      "followUpQuestions": [
        "Why is Weibull both PH and AFT?",
        "How do you choose among log-normal and log-logistic?",
        "What changes for interval-censored outcomes?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "competing-risks",
      "title": "Competing Risks",
      "module": "survival",
      "priority": "medium",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "With competing risks, an event of one cause prevents a different cause from being the first event. The cause-specific hazard is the instantaneous rate of cause k among subjects still free of every event. The cumulative incidence F_k(t)=P(T<=t,J=k) is the actual probability of cause k by t. Aalen-Johansen estimates it by adding S(t-)d_k/n at each event time while updating event-free survival by all-cause events. Treating competing events as censored and plotting 1-KM overestimates cause probability because it imagines those subjects could later experience the cause. Cause-specific Cox models the rate among event-free subjects; Fine-Gray models a subdistribution risk set to connect covariates directly to CIF. I select by estimand, report cause-specific calibrated probabilities, account for censoring and cause adjudication, and avoid causal claims without an intervention framework.",
      "keyPoints": [
        "A competing event removes the possibility of another event being the first outcome; it is not ordinary loss to follow-up.",
        "CIF accumulates cause-specific events weighted by probability of still being event-free from every cause.",
        "One minus cause-specific Kaplan-Meier is generally not the real-world cause probability.",
        "Cause-specific and subdistribution hazard ratios use different risk sets and answer different questions.",
        "All cause probabilities plus event-free survival must reconcile within one coherent state system."
      ],
      "resources": [
        "aalen-johansen-reference",
        "fine-gray-paper",
        "lifelines"
      ],
      "featured": false,
      "description": "Competing risks arise when one subject can experience several mutually exclusive first events and one event prevents the others from occurring first. Churn, upgrade, and account closure; failure from different components; or death from different causes are not ordinary independent censoring categories. This chapter separates overall survival, cause-specific hazard, cumulative incidence, and subdistribution hazard; derives the Aalen-Johansen cumulative-incidence update; and shows why one minus Kaplan-Meier overestimates a cause's real-world probability when competing events are censored. It compares cause-specific Cox regression with Fine-Gray regression, emphasizing that their coefficients answer different questions and need not agree. It covers censoring assumptions, delayed entry, ties, multi-state extensions, recurrent outcomes, composite endpoints, intervention interpretation, evaluation, and calibration by cause. A worked example follows probability mass from event-free survival into two causes. The lab implements Aalen-Johansen and verifies probability conservation, monotonicity, cause-label symmetry, and the naive Kaplan-Meier bias direction. Production guidance versions cause taxonomy and adjudication, reconciles all cause probabilities, monitors unknown and late-coded outcomes, and reports supported horizons rather than hazard ratios alone.",
      "prerequisites": [
        "kaplan-meier",
        "cox-ph"
      ],
      "learningObjectives": [
        "Distinguish cause-specific hazards, cumulative incidence functions, and subdistribution hazards by estimand and risk set.",
        "Compute Aalen-Johansen cumulative incidence while conserving probability across event-free and cause states.",
        "Choose cause-specific or Fine-Gray regression according to etiologic, prediction, or policy questions.",
        "Handle censoring, cause coding, evaluation, interventions, and multi-state extensions without probability contradictions."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement Aalen-Johansen cumulative incidence, contrast it with naive cause-specific one-minus-KM, and verify probability conservation, monotonicity, and cause-label symmetry.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "First-event probability flow"
        },
        {
          "type": "compare",
          "title": "Two regression targets"
        }
      ],
      "followUpQuestions": [
        "When is censoring competing events acceptable?",
        "Which regression should be used for prediction?",
        "How does competing-risk analysis extend to recovery or later transitions?"
      ],
      "estimatedMinutes": 12
    },
    {
      "slug": "multiobjective-optimization",
      "title": "Multi-objective Optimization & Pareto Trade-offs",
      "module": "optimization",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "In multi-objective optimization, a feasible point dominates another if it is no worse on every objective and strictly better on at least one. Pareto-optimal points are not dominated, so the result is generally a frontier rather than one answer. Weighted sums are simple and can recover supported points on convex fronts, but may miss nonconvex regions and hide stakeholder preferences. Epsilon constraints or lexicographic rules are often clearer for hard limits and priorities; evolutionary algorithms such as NSGA-II approximate broader fronts. I normalize only with declared meaning, include uncertainty and feasibility, evaluate coverage/diversity, and treat selection from the frontier as a separate governed decision.",
      "keyPoints": [
        "Pareto optimal means not dominated, not universally best",
        "Decision space and objective space are different",
        "Scalarization embeds preferences and can miss parts of a front",
        "Front quality requires convergence and diversity evidence",
        "Choosing one point is a policy decision after optimization"
      ],
      "resources": [
        "boyd-convex",
        "nsga2-paper",
        "pymoo-docs",
        "botorch-docs",
        "scipy-optimize"
      ],
      "featured": false,
      "description": "Multi-objective optimization handles decisions where several criteria conflict and no single scalar score is scientifically or organizationally sufficient. Rather than pretending one configuration is universally best, it identifies feasible trade-offs through dominance, Pareto optimality, fronts, scalarization, epsilon constraints, lexicographic priorities, evolutionary methods, hypervolume, and multi-criteria decision analysis. This chapter develops decision space versus objective space, weak and strict dominance, supported and unsupported Pareto points, normalization, preference elicitation, constraints, uncertainty, many-objective difficulties, and post-optimization selection. You will learn why weighted sums expose only part of a nonconvex front, why objectives should preserve units until preferences are explicit, how NSGA-II uses nondominated sorting and crowding distance, and why optimizing a frontier is separate from choosing a policy. A worked model-selection example balances error, latency, cost, and fairness guardrails. The lab implements nondominated filtering and hypervolume in two dimensions, uses a SciPy epsilon-constraint sweep, and verifies invariance and known fronts. Production guidance covers stakeholder governance, metric drift, robust feasibility, monitoring, rollback, and transparent decision records.",
      "prerequisites": [
        "convexity",
        "linear-programming",
        "experiment-design"
      ],
      "learningObjectives": [
        "Define dominance, Pareto optimality, Pareto sets, and fronts with consistent objective directions and constraints.",
        "Use weighted sums, epsilon constraints, and lexicographic priorities while stating which trade-offs each method can or cannot recover.",
        "Explain nondominated sorting, diversity preservation, hypervolume, and the limitations of evolutionary approximations.",
        "Separate frontier generation from preference-based selection and audit the final decision under uncertainty."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement nondominated filtering and two-dimensional hypervolume, use SciPy for an epsilon-constraint sweep, and verify known fronts plus invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "scatter",
          "title": "Conceptual Pareto front"
        },
        {
          "type": "compare",
          "title": "Preference methods expose different information"
        }
      ],
      "followUpQuestions": [
        "What is Pareto optimality?",
        "Why can weighted sums miss solutions?",
        "What does hypervolume depend on?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "cold-start",
      "title": "Cold Start in Recommender Systems",
      "module": "recsys",
      "priority": "high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "Cold start happens when new users/items lack interaction history. Content features, onboarding signals, exploration and popularity/context priors bridge the gap until collaborative signals accumulate.",
      "keyPoints": [
        "User and item cold start differ.",
        "Explore to collect information.",
        "Avoid trapping new items behind popularity bias."
      ],
      "resources": [
        "stanford-cs246",
        "faiss"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions or limitations does Cold Start in Recommender Systems have?",
        "How would you validate Cold Start in Recommender Systems on a real dataset?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "learning-to-rank",
      "title": "Learning to Rank: Pointwise, Pairwise & Listwise",
      "module": "recsys",
      "priority": "high",
      "roles": [
        "ds",
        "da"
      ],
      "interviewAnswer": "Learning-to-rank objectives optimize ordering rather than only class labels. Pointwise treats items independently, pairwise compares preferences, and listwise objectives model the ranked list more directly.",
      "keyPoints": [
        "Training objective should align with ranking metric.",
        "Position/exposure bias affects labels.",
        "Candidate-set construction matters."
      ],
      "resources": [
        "ir-book",
        "stanford-cs246"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions or limitations does Learning to Rank: Pointwise, Pairwise & Listwise have?",
        "How would you validate Learning to Rank: Pointwise, Pairwise & Listwise on a real dataset?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "query-understanding",
      "title": "Query Understanding: Spelling, Intent & Filters",
      "module": "ir",
      "priority": "high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "I retain the raw query, then apply a versioned locale-aware analyzer to produce normalized tokens and protected spans such as quotes, SKUs, URLs and names. Spelling correction uses candidates from edit or phonetic indexes and ranks them with frequency plus query context; high-confidence suggestions can be applied, while risky changes are shown as `did you mean` or searched in parallel. Intent classification and entity extraction produce confidence and provenance, not hard truth. Structured constraints become typed filters only after units, dates, ranges and negation are resolved. Synonyms and expansions are field- and intent-specific with budgets. I evaluate rewrite precision and recall, exact-token preservation, intent F1, filter accuracy and downstream retrieval on locale and tail slices. Sensitive logs are minimized, access controlled and retained briefly; ambiguous high-cost queries trigger clarification.",
      "keyPoints": [
        "Preserve the raw query and annotate every rewrite so failures are reversible and explainable.",
        "Spelling candidates need contextual ranking; minimum edit distance alone can corrupt valid rare entities.",
        "Exact identifiers, quotes, exclusions and structured operators require stronger preservation rules than ordinary words.",
        "Intent and filter predictions should carry confidence and support clarification or parallel retrieval.",
        "Query logs are biased, sensitive behavioral data and require privacy, security and evaluation discipline."
      ],
      "resources": [
        "ir-book",
        "elastic-hybrid",
        "bm25-robertson"
      ],
      "featured": false,
      "description": "Query understanding converts a short, noisy user string plus context into a retrieval plan without silently changing the user's intent. It spans Unicode and locale normalization, tokenization, spelling correction, segmentation, language detection, intent classification, entity and attribute extraction, structured filters, units and dates, synonyms, abbreviations, query expansion, routing and clarification. This chapter develops noisy-channel spelling as candidate generation plus contextual ranking, distinguishes correction from suggestion, and shows how exact identifiers and quoted terms require preservation. It treats intent and filter extraction as uncertain predictions with confidence, provenance and safe fallback, not unquestionable facts. Worked examples parse a misspelled product query and an ambiguous temporal request. The lab implements edit distance, frequency-aware suggestions, quoted/excluded/filter parsing and a small scikit-learn intent classifier, then verifies exact-token protection and deterministic output. Production guidance versions dictionaries and rewrite rules, evaluates changes by error type and locale, protects sensitive query logs, caps expansion, resists operator and injection abuse, and asks for clarification when the cost of a wrong rewrite is high. Good query understanding improves recall while preserving an inspectable route back to the original request.",
      "prerequisites": [
        "inverted-index",
        "classification-metrics",
        "tokenization"
      ],
      "learningObjectives": [
        "Design a query-analysis pipeline that preserves raw text while producing normalized tokens, entities, filters and intent hypotheses.",
        "Implement and evaluate spelling correction, segmentation, synonyms and expansion with exact-identifier safeguards.",
        "Represent intent and structured constraints with confidence, provenance, clarification and fallback behavior.",
        "Monitor rewrite precision, zero results, reformulation, latency, fairness, privacy and security in production."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement edit-distance suggestions and typed query parsing, train a small intent classifier, and verify exact-token protection, deterministic correction and safe filter extraction.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Query-to-plan analysis"
        },
        {
          "type": "compare",
          "title": "Rewrite confidence actions"
        }
      ],
      "followUpQuestions": [
        "When should correction be automatic?",
        "How do you evaluate query expansion?",
        "Why preserve provenance for parsed filters?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "ner-sequence-labeling",
      "title": "Named Entity Recognition & Sequence Labeling",
      "module": "nlp",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "NER assigns labels such as person, organization or product to token spans. Classical CRF/BiLSTM systems model label dependencies; modern transformers fine-tune contextual token representations.",
      "keyPoints": [
        "BIO/BILOU labeling conventions.",
        "Span-level F1 is more meaningful than token accuracy.",
        "Domain-specific entities require domain data."
      ],
      "resources": [
        "stanford-cs224n"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions or limitations does Named Entity Recognition & Sequence Labeling have?",
        "How would you validate Named Entity Recognition & Sequence Labeling on a real dataset?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "nlp-evaluation",
      "title": "NLP Generation Metrics: BLEU, ROUGE & Beyond",
      "module": "nlp",
      "priority": "high",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "BLEU measures n-gram precision with brevity handling, ROUGE emphasizes overlap/recall; both are limited proxies for semantic quality. Modern evaluation often combines task metrics, learned metrics and human judgment.",
      "keyPoints": [
        "Metric suitability depends on task.",
        "Lexical overlap can punish valid paraphrases.",
        "Human/LLM evaluation needs rubrics and reliability checks."
      ],
      "resources": [
        "stanford-cs224n",
        "hf-llm"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions or limitations does NLP Generation Metrics: BLEU, ROUGE & Beyond have?",
        "How would you validate NLP Generation Metrics: BLEU, ROUGE & Beyond on a real dataset?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "text-to-speech",
      "title": "Text-to-Speech Pipeline",
      "module": "speech",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Modern TTS maps text/phonetic representations to acoustic features or latent speech and then uses a vocoder/decoder to synthesize waveform audio. Quality involves intelligibility, naturalness, speaker/style control and latency.",
      "keyPoints": [
        "Text normalization/phonemes affect pronunciation.",
        "Acoustic model and vocoder are distinct conceptual stages.",
        "Evaluate with human listening plus objective diagnostics."
      ],
      "resources": [
        "stanford-cs224s"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions or limitations does Text-to-Speech Pipeline have?",
        "How would you validate Text-to-Speech Pipeline on a real dataset?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "cdc",
      "title": "Change Data Capture (CDC)",
      "module": "data-eng",
      "priority": "high",
      "roles": [
        "de",
        "mle"
      ],
      "interviewAnswer": "CDC captures inserts, updates and deletes from source systems so downstream stores can update incrementally without repeated full extracts. Log-based CDC is common for low-latency replication.",
      "keyPoints": [
        "Ordering and schema changes matter.",
        "Deletes/tombstones need explicit handling.",
        "Exactly-once downstream effects require idempotency/transactions."
      ],
      "resources": [
        "confluent-kafka",
        "dbt-docs"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Change data capture"
        }
      ],
      "followUpQuestions": [
        "What assumptions or limitations does Change Data Capture (CDC) have?",
        "How would you validate Change Data Capture (CDC) on a real dataset?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "event-time-watermarks",
      "title": "Event Time, Processing Time & Watermarks",
      "module": "data-eng",
      "priority": "very-high",
      "roles": [
        "de",
        "mle"
      ],
      "interviewAnswer": "Streaming systems distinguish when an event occurred from when it was processed. Watermarks express progress in event time and let systems close windows while tolerating bounded late data.",
      "keyPoints": [
        "Late/out-of-order events are normal.",
        "Watermark policy trades completeness vs latency.",
        "Window state needs cleanup."
      ],
      "resources": [
        "flink"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Event time vs processing time"
        }
      ],
      "followUpQuestions": [
        "What assumptions or limitations does Event Time, Processing Time & Watermarks have?",
        "How would you validate Event Time, Processing Time & Watermarks on a real dataset?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "data-formats",
      "title": "CSV vs Parquet vs Avro",
      "module": "data-eng",
      "priority": "high",
      "roles": [
        "de",
        "ds"
      ],
      "interviewAnswer": "CSV is simple text but lacks strong types/efficient analytics; Parquet is columnar for analytical scans; Avro is row-oriented with schemas and is common for event serialization.",
      "keyPoints": [
        "Choose based on access pattern.",
        "Schema evolution differs.",
        "Compression and predicate pushdown matter."
      ],
      "resources": [
        "spark",
        "confluent-kafka"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions or limitations does CSV vs Parquet vs Avro have?",
        "How would you validate CSV vs Parquet vs Avro on a real dataset?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "spark-shuffles-skew",
      "title": "Spark Shuffles, Partitions & Data Skew",
      "module": "distributed",
      "priority": "high",
      "roles": [
        "de",
        "mle"
      ],
      "interviewAnswer": "Spark operations such as joins/groupBy can trigger shuffles that move data across workers. Poor partitioning or skewed keys create stragglers, spills and high network cost.",
      "keyPoints": [
        "Wide vs narrow transformations.",
        "Broadcast small dimensions when appropriate.",
        "Salt/skew handling can spread hot keys."
      ],
      "resources": [
        "spark"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions or limitations does Spark Shuffles, Partitions & Data Skew have?",
        "How would you validate Spark Shuffles, Partitions & Data Skew on a real dataset?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "sampling-design",
      "title": "Sampling Design: Random, Stratified & Cluster Sampling",
      "module": "stat-inference",
      "priority": "high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "A probability sample gives each frame unit a known nonzero inclusion probability. Simple random sampling selects units directly; stratification samples within homogeneous subgroups to guarantee coverage and often improve precision; cluster sampling selects groups for cost efficiency but induces correlation and often increases variance; multistage designs combine them. Estimate population quantities with design weights, typically inverse inclusion probabilities, and compute design-aware variance using strata, clusters, finite-population corrections, or replicate weights. Large convenience samples do not have these guarantees.",
      "keyPoints": [
        "The frame is not automatically the target population",
        "Known inclusion probabilities enable design-based weighting",
        "Strata seek internal homogeneity; clusters are often internally heterogeneous but correlated",
        "Weights affect point estimates and effective information",
        "Variance must reflect every sampling stage"
      ],
      "resources": [
        "cdc-survey-variance",
        "openintro-stats",
        "stanford-stats60",
        "census-nonresponse"
      ],
      "featured": false,
      "description": "Sampling design determines which population units can enter a dataset and with what probability. Simple random, systematic, stratified, cluster, multistage, and unequal-probability samples trade cost, coverage, and precision differently; their weights and dependence structure must flow into estimation and uncertainty. This chapter defines target and frame populations, inclusion probabilities, base weights, stratification gains, cluster design effects, finite-population correction, probability-proportional-to-size sampling, and design-based versus model-based inference. You will learn why stratification and clustering are not opposites, how self-weighting designs can emerge across stages, why convenience and quota samples do not acquire probability-sample guarantees from large n, and how nonresponse adjustments and calibration alter both bias and variance. The worked example estimates a company-wide mean from disproportionate department strata. The lab implements a Horvitz–Thompson-style weighted mean, verifies recovery on a finite population, and demonstrates stratification variance reduction. Production guidance covers frame snapshots, inclusion-probability lineage, replicate variance, privacy, monitoring, and survey lifecycle controls.",
      "prerequisites": [
        "probability-basics",
        "sampling-distributions",
        "expectation-variance"
      ],
      "learningObjectives": [
        "Map target population, sampling frame, unit, stages, strata, clusters, and inclusion probabilities before analysis.",
        "Explain when stratification improves precision and when cluster sampling reduces cost while increasing variance.",
        "Compute design-weighted estimates and understand finite-population and design-effect adjustments.",
        "Diagnose coverage, unequal weighting, nonresponse, and variance-estimation failures in complex samples."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Compute inverse-probability weighted estimates, verify a stratified finite-population mean, and show why the unweighted estimate is biased under disproportionate allocation.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "matrix",
          "title": "Probability sampling designs"
        },
        {
          "type": "flow",
          "title": "Weight lineage"
        }
      ],
      "followUpQuestions": [
        "Why can stratification reduce variance?",
        "Why can clustering increase variance?",
        "What is a sampling weight?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "selection-nonresponse-bias",
      "title": "Selection, Coverage & Nonresponse Bias",
      "module": "stat-inference",
      "priority": "very-high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "Selection bias occurs when inclusion depends on variables related to the outcome after conditioning on what the analysis uses. Coverage bias comes from the frame missing or duplicating target units; nonresponse bias comes when sampled respondents differ from nonrespondents on the estimand. Bias is not determined by response rate alone: it depends on response–outcome association. Weighting or imputation can correct differences explained by observed variables with overlap and valid models, but not unknown unmeasured selection without assumptions. Compare to frame benchmarks, model response, conduct targeted follow-up, and report sensitivity analyses.",
      "keyPoints": [
        "Large n attacks variance, not systematic selection",
        "Response rate is a risk indicator, not a bias estimate",
        "Adjustment needs outcome-relevant observed variables and positivity",
        "Conditioning on a collider can create association",
        "Residual selection uncertainty requires sensitivity and external evidence"
      ],
      "resources": [
        "census-nonresponse",
        "cdc-survey-variance",
        "openintro-stats",
        "harvard-causal-diagrams"
      ],
      "featured": true,
      "description": "Selection, coverage, and nonresponse bias arise when observed units differ systematically from the target population in ways related to the outcome or estimand. More rows reduce sampling variance but do not automatically reduce these biases; a massive opt-in dataset can be precisely wrong. This chapter decomposes total survey error, distinguishes target population, frame coverage, unit nonresponse, item nonresponse, attrition, and conditioning on selection, and explains why response rate alone does not determine bias. You will learn to draw selection diagrams, compare respondents with frame benchmarks, use inverse-probability weighting, calibration, imputation, follow-up samples, and sensitivity analysis, while stating the untestable assumptions each method needs. The worked example shows how differential response reverses an apparent support rate and how weighting helps only with observed adjustment variables. The lab simulates outcome-related response, quantifies bias, applies poststratification, and verifies when correction succeeds or fails. Production guidance covers contact paradata, consent, privacy, weight lineage, monitoring, bounded corrections, and transparent residual-uncertainty reporting.",
      "prerequisites": [
        "sampling-design",
        "joint-marginal-conditional"
      ],
      "learningObjectives": [
        "Separate undercoverage, overcoverage, unit nonresponse, item nonresponse, attrition, and measurement error in a total-error framework.",
        "Explain why response rate and sample size alone do not identify nonresponse or selection bias.",
        "Apply weighting, calibration, imputation, follow-up, and sensitivity methods with explicit exchangeability and positivity assumptions.",
        "Design diagnostics and monitoring that compare observed samples with frames, benchmarks, and hard-to-reach follow-up data."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Simulate outcome-related response, quantify respondent bias, apply poststratification, and verify exactly when observed-group adjustment recovers the population.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Where a target population becomes an observed dataset"
        },
        {
          "type": "matrix",
          "title": "Bias diagnostics and what they reveal"
        }
      ],
      "followUpQuestions": [
        "Can a 90% response rate still be biased?",
        "When does inverse response weighting work?",
        "How do you assess unmeasured selection?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "hyperparameter-tuning",
      "title": "Grid, Random & Bayesian Hyperparameter Search",
      "module": "evaluation",
      "priority": "very-high",
      "roles": [
        "ds",
        "mle"
      ],
      "interviewAnswer": "Hyperparameter tuning searches settings not learned directly by model fitting. Random search is often more efficient than exhaustive grids in high-dimensional spaces; Bayesian optimization helps when evaluations are expensive.",
      "keyPoints": [
        "Tune using validation/CV, never the final test set.",
        "Search spaces matter more than search algorithm in many cases.",
        "Parallelism and early stopping can reduce cost."
      ],
      "resources": [
        "sklearn",
        "stanford-cs229"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Tune a model without touching the test set.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "Grid, Random & Bayesian Hyperparameter Search"
        }
      ],
      "followUpQuestions": [
        "When would you not use Grid, Random & Bayesian Hyperparameter Search?",
        "How would you validate or tune Grid, Random & Bayesian Hyperparameter Search?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "nested-cv",
      "title": "Nested Cross-validation",
      "module": "evaluation",
      "priority": "medium",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "Nested cross-validation separates hyperparameter/model selection in an inner loop from unbiased performance estimation in an outer loop. It is useful when datasets are small and tuning would otherwise contaminate evaluation.",
      "keyPoints": [
        "Inner CV selects; outer CV estimates.",
        "Computational cost is higher.",
        "Final deployment can refit after evaluation protocol is complete."
      ],
      "resources": [
        "isl",
        "sklearn"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "Nested cross-validation"
        }
      ],
      "followUpQuestions": [
        "When would you not use Nested Cross-validation?",
        "How would you validate or tune Nested Cross-validation?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "ensembling-stacking",
      "title": "Bagging, Blending & Stacking",
      "module": "ml",
      "priority": "high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "Ensembling combines diverse models to reduce error. Bagging averages models trained on resampled data; stacking learns a meta-model from out-of-fold predictions; blending uses a held-out set.",
      "keyPoints": [
        "Diversity between base models matters.",
        "Stacking needs leakage-safe out-of-fold predictions.",
        "Complex ensembles cost latency/maintenance."
      ],
      "resources": [
        "isl",
        "sklearn"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "When would you not use Bagging, Blending & Stacking?",
        "How would you validate or tune Bagging, Blending & Stacking?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "shap-permutation",
      "title": "Permutation Importance, PDP & SHAP",
      "module": "evaluation",
      "priority": "high",
      "roles": [
        "ds"
      ],
      "interviewAnswer": "Interpretability tools answer different questions: permutation importance measures performance drop when a feature is disrupted; PDP shows average predicted response; SHAP attributes prediction differences under a chosen background/assumption framework.",
      "keyPoints": [
        "Importance is not causality.",
        "Correlated features complicate attribution.",
        "Global and local explanations differ."
      ],
      "resources": [
        "sklearn",
        "isl"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "When would you not use Permutation Importance, PDP & SHAP?",
        "How would you validate or tune Permutation Importance, PDP & SHAP?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "dashboard-design",
      "title": "Dashboard & BI Design",
      "module": "eda-viz",
      "priority": "high",
      "roles": [
        "da",
        "ds"
      ],
      "interviewAnswer": "I design a dashboard around who decides what, how often, and what action follows. I create a hierarchy from outcome and guardrail KPIs to diagnostic drivers, with definitions, units, denominators, targets, uncertainty, sample support, freshness, and ownership. The default screen answers current state, change, significance/impact, and where to investigate; details live in drill-downs. I use simple comparable charts, consistent filters and time windows, accessible redundant status encodings, and explicit stale/partial-data states. The semantic model, row-level security, tests, performance, alerts, and rollback are part of the design.",
      "keyPoints": [
        "Decisions and actions determine dashboard scope",
        "KPIs need targets, denominators, uncertainty, and freshness",
        "Overview and diagnosis need different levels of detail",
        "Status must distinguish harm, uncertainty, and missing/stale data",
        "The semantic and operational system is part of the interface"
      ],
      "resources": [
        "powerbi-dashboard-design",
        "fundamentals-dataviz",
        "visual-communication-science",
        "dbt-contracts"
      ],
      "featured": false,
      "description": "A dashboard is an operational decision interface over a semantic metric layer, not a collage of charts. Its design begins with audience, decisions, monitoring cadence, actions, and failure behavior; visual hierarchy and interaction then make the relevant state legible. This chapter develops audience and task analysis, KPI trees, leading and lagging indicators, targets and guardrails, overview-to-detail structure, freshness and provenance, chart selection, alert semantics, filters, drill-down, mobile and accessibility behavior, performance budgets, and governance. You will learn why a single number needs context, why red/green status cannot replace uncertainty or impact, how denominator and refresh mismatches create false narratives, and how to separate monitoring from exploratory reports. The worked example redesigns a model-health dashboard whose green average hides slice harm and stale labels. The lab builds a dashboard-card state engine with freshness, sample-size, interval, and threshold checks and verifies safe behavior. Production guidance covers semantic models, caching, row-level security, observability, testing, ownership, incident response, and rollback.",
      "prerequisites": [
        "visual-encoding",
        "groupby-pivot",
        "data-contracts-lineage"
      ],
      "learningObjectives": [
        "Derive dashboard content from audience decisions, monitoring cadence, actions, and metric ownership.",
        "Design KPI hierarchy with estimates, targets, guardrails, denominators, uncertainty, freshness, and diagnostic drill-down.",
        "Specify filters, interaction, accessibility, responsive layout, performance, and secure data behavior as product requirements.",
        "Operate dashboards through semantic contracts, tests, observability, incident response, and versioned rollback."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build a dashboard-card state engine that gates health on freshness, maturity, sample support, uncertainty, and explicit thresholds.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Decision dashboard hierarchy"
        },
        {
          "type": "compare",
          "title": "Healthy versus unknown state"
        }
      ],
      "followUpQuestions": [
        "What belongs above the fold?",
        "How do you prevent alert fatigue?",
        "How do you show stale data?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "data-storytelling",
      "title": "Data Storytelling & Communicating Uncertainty",
      "module": "eda-viz",
      "priority": "high",
      "roles": [
        "da",
        "ds"
      ],
      "interviewAnswer": "I start with the audience's decision and write one precise claim. Then I show the minimum evidence needed: population, denominator, baseline, absolute and relative magnitude, time, uncertainty, and relevant slices. I separate observation, explanation, and recommendation; avoid causal language unless design supports it; include alternative explanations and guardrails; and end with an action plus what would change it. The visual sequence should preserve context and link to definitions, code, and data lineage so the story is persuasive because it is auditable, not because uncertainty was removed.",
      "keyPoints": [
        "Decision and claim determine the evidence sequence",
        "Observation, interpretation, and action are distinct layers",
        "Uncertainty and counterevidence strengthen calibrated trust",
        "Absolute magnitude and denominator prevent rhetorical inflation",
        "Narratives need provenance, accessibility, and correction lifecycle"
      ],
      "resources": [
        "visual-communication-science",
        "uncertainty-visualization",
        "fundamentals-dataviz",
        "microsoft-experimentation"
      ],
      "featured": false,
      "description": "Data storytelling is the disciplined communication of a decision-relevant claim through evidence, context, uncertainty, alternatives, and action. It is not the addition of a dramatic narrative to a chart. This chapter develops audience and decision framing, claim–evidence–reasoning structure, visual sequence, explanatory versus exploratory artifacts, annotations, uncertainty language, practical thresholds, causal humility, counterevidence, and reproducible handoff. You will learn to separate observation from interpretation and recommendation, quantify absolute and relative effects, communicate interval and scenario uncertainty in plain language, avoid cherry-picking and rhetorical overclaim, and design executive summaries that link to auditable detail. The worked example rewrites a misleading 'campaign doubled engagement' presentation into a population- and uncertainty-aware decision memo. The lab builds a structured evidence record and validates that claims include denominators, comparison, uncertainty, caveats, and source lineage. Production guidance covers templates, review, localization, accessibility, dynamic data, corrections, privacy, and rollback. A strong story makes its reasoning inspectable rather than merely memorable.",
      "prerequisites": [
        "visual-encoding",
        "visualization-pitfalls",
        "confidence-intervals"
      ],
      "learningObjectives": [
        "Frame communication around audience knowledge, decision, stakes, alternatives, and time horizon.",
        "Build a claim–evidence–reasoning chain that separates measured facts, interpretations, assumptions, and recommendations.",
        "Communicate magnitude and uncertainty with calibrated language, numbers, visuals, and practical thresholds.",
        "Create auditable, accessible, versioned narratives that include counterevidence, limitations, provenance, and correction paths."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Build and validate a structured evidence record so a decision claim cannot omit population, denominator, magnitude, uncertainty, limitations, and provenance.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Claim–evidence–action chain"
        },
        {
          "type": "compare",
          "title": "Three statements that must not blur"
        }
      ],
      "followUpQuestions": [
        "How do you simplify for executives without misleading?",
        "How do you communicate a nonsignificant result?",
        "What makes a recommendation auditable?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "image-augmentation",
      "title": "Image Preprocessing & Data Augmentation",
      "module": "cv",
      "priority": "very-high",
      "roles": [
        "cv",
        "mle",
        "as"
      ],
      "interviewAnswer": "Image preprocessing standardizes model inputs; augmentation creates plausible label-preserving variation to improve generalization. Augmentations must respect task semantics—horizontal flips are not universally valid.",
      "keyPoints": [
        "Normalize consistently between train/serve.",
        "Geometric/color transforms have domain assumptions.",
        "Validation/test data should not receive stochastic training augmentation."
      ],
      "resources": [
        "stanford-cs231n",
        "pytorch"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "Image Preprocessing & Data Augmentation"
        }
      ],
      "followUpQuestions": [
        "When would you not use Image Preprocessing & Data Augmentation?",
        "How would you validate or tune Image Preprocessing & Data Augmentation?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "transfer-learning-vision",
      "title": "Transfer Learning & Fine-tuning in Vision",
      "module": "cv",
      "priority": "very-high",
      "roles": [
        "cv",
        "mle",
        "as"
      ],
      "interviewAnswer": "Transfer learning starts from pretrained visual features and adapts them to a target task. With limited data, freeze more layers initially; with enough domain data, fine-tune carefully using smaller learning rates and validation.",
      "keyPoints": [
        "Domain shift determines usefulness.",
        "Head-only training is a baseline, not a law.",
        "Catastrophic forgetting/overfitting can occur."
      ],
      "resources": [
        "stanford-cs231n",
        "pytorch"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "Transfer Learning & Fine-tuning in Vision"
        }
      ],
      "followUpQuestions": [
        "When would you not use Transfer Learning & Fine-tuning in Vision?",
        "How would you validate or tune Transfer Learning & Fine-tuning in Vision?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "object-detection",
      "title": "Object Detection: Boxes, Anchors & Modern Detectors",
      "module": "cv",
      "priority": "high",
      "roles": [
        "cv",
        "mle",
        "as"
      ],
      "interviewAnswer": "Object detection predicts both classes and locations. Two-stage detectors separate proposals and classification; one-stage detectors predict densely. Modern detectors may be anchor-based or anchor-free, but all require localization and classification reasoning.",
      "keyPoints": [
        "Bounding-box regression and classification are separate losses/signals.",
        "NMS or set-prediction logic resolves duplicate detections.",
        "Small-object performance depends on resolution/features."
      ],
      "resources": [
        "stanford-cs231n"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Object detection pipeline"
        }
      ],
      "followUpQuestions": [
        "When would you not use Object Detection: Boxes, Anchors & Modern Detectors?",
        "How would you validate or tune Object Detection: Boxes, Anchors & Modern Detectors?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "iou-nms-map",
      "title": "IoU, NMS & mAP for Detection",
      "module": "cv",
      "priority": "very-high",
      "roles": [
        "cv",
        "mle",
        "as"
      ],
      "interviewAnswer": "Intersection-over-Union measures box overlap; Non-Maximum Suppression removes redundant overlapping predictions; mAP summarizes precision-recall across classes and IoU thresholds depending on benchmark.",
      "keyPoints": [
        "IoU threshold defines a localization match.",
        "NMS threshold affects duplicate vs missed close objects.",
        "mAP hides per-class/size performance."
      ],
      "resources": [
        "stanford-cs231n"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Detection metrics"
        }
      ],
      "followUpQuestions": [
        "When would you not use IoU, NMS & mAP for Detection?",
        "How would you validate or tune IoU, NMS & mAP for Detection?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "segmentation-metrics",
      "title": "Segmentation Metrics: IoU, Dice & Pixel Accuracy",
      "module": "cv",
      "priority": "high",
      "roles": [
        "cv",
        "as"
      ],
      "interviewAnswer": "Pixel accuracy can be misleading when background dominates. IoU and Dice emphasize overlap between predicted and true masks; per-class metrics reveal minority-structure performance.",
      "keyPoints": [
        "Dice is closely related to F1 on pixels.",
        "IoU penalizes union disagreement.",
        "Boundary metrics can matter for thin structures."
      ],
      "resources": [
        "stanford-cs231n",
        "pytorch"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "matrix",
          "title": "Segmentation overlap"
        }
      ],
      "followUpQuestions": [
        "When would you not use Segmentation Metrics: IoU, Dice & Pixel Accuracy?",
        "How would you validate or tune Segmentation Metrics: IoU, Dice & Pixel Accuracy?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "self-supervised-vision",
      "title": "Self-supervised & Contrastive Visual Representation Learning",
      "module": "cv",
      "priority": "medium",
      "roles": [
        "cv",
        "as"
      ],
      "interviewAnswer": "Self-supervised vision learns representations from unlabeled images using objectives such as contrastive agreement or masked reconstruction, then transfers them to downstream tasks.",
      "keyPoints": [
        "Positive-pair construction encodes invariances.",
        "Large diverse pretraining data can reduce label needs.",
        "Linear-probe vs fine-tune evaluate representation quality differently."
      ],
      "resources": [
        "stanford-cs231n",
        "clip-paper"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "When would you not use Self-supervised & Contrastive Visual Representation Learning?",
        "How would you validate or tune Self-supervised & Contrastive Visual Representation Learning?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "gcn",
      "title": "Graph Convolutional Networks (GCN)",
      "module": "graph",
      "priority": "high",
      "roles": [
        "ds",
        "as",
        "mle"
      ],
      "interviewAnswer": "GCNs aggregate normalized neighbor features and transform them layer by layer, creating node representations that mix local graph structure and attributes. Repeated aggregation can oversmooth representations.",
      "keyPoints": [
        "Adjacency normalization stabilizes aggregation.",
        "Depth increases receptive neighborhood.",
        "Transductive vs inductive setup matters."
      ],
      "resources": [
        "stanford-cs224w"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Implement one normalized GCN propagation step with NumPy.",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "GCN layer"
        }
      ],
      "followUpQuestions": [
        "When would you not use Graph Convolutional Networks (GCN)?",
        "How would you validate or tune Graph Convolutional Networks (GCN)?"
      ],
      "estimatedMinutes": 2
    },
    {
      "slug": "gat",
      "title": "Graph Attention Networks (GAT)",
      "module": "graph",
      "priority": "medium",
      "roles": [
        "ds",
        "as",
        "mle"
      ],
      "interviewAnswer": "GAT learns attention weights over neighbors so different neighbors contribute differently instead of using fixed aggregation weights.",
      "keyPoints": [
        "Attention is local over graph neighbors.",
        "Multi-head attention can stabilize/expand representations.",
        "More flexible aggregation costs compute."
      ],
      "resources": [
        "stanford-cs224w"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "network",
          "title": "Graph attention"
        }
      ],
      "followUpQuestions": [
        "When would you not use Graph Attention Networks (GAT)?",
        "How would you validate or tune Graph Attention Networks (GAT)?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "heterogeneous-graphs",
      "title": "Heterogeneous Graphs & Relation Types",
      "module": "graph",
      "priority": "high",
      "roles": [
        "ds",
        "as",
        "mle"
      ],
      "interviewAnswer": "Heterogeneous graphs contain different node/edge types whose relations have different semantics. Models often use relation-specific transformations or metapath/message-passing strategies.",
      "keyPoints": [
        "Type information changes message meaning.",
        "Reverse edges are often explicit for directed relation flow.",
        "Evaluation should match target relation."
      ],
      "resources": [
        "stanford-cs224w"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "network",
          "title": "Heterogeneous graph"
        }
      ],
      "followUpQuestions": [
        "When would you not use Heterogeneous Graphs & Relation Types?",
        "How would you validate or tune Heterogeneous Graphs & Relation Types?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "graph-pooling",
      "title": "Graph-level Prediction & Pooling",
      "module": "graph",
      "priority": "medium",
      "roles": [
        "as",
        "mle"
      ],
      "interviewAnswer": "For graph-level tasks, node embeddings must be aggregated into a graph representation using mean/sum/max, attention or hierarchical pooling before prediction.",
      "keyPoints": [
        "Sum/mean pooling encode different size behavior.",
        "Permutation invariance is required.",
        "Pooling can bottleneck structural information."
      ],
      "resources": [
        "stanford-cs224w"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "When would you not use Graph-level Prediction & Pooling?",
        "How would you validate or tune Graph-level Prediction & Pooling?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "simpsons-paradox",
      "title": "Simpson’s Paradox & Aggregation Bias",
      "module": "eda-viz",
      "priority": "high",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "Simpson's paradox is a reversal between aggregate and stratified associations caused by different group weights and within-group rates. The aggregate rate is a weighted average, so treatment groups with different severity, channel, or cohort composition can rank differently even when every stratum has the opposite ordering. I show the decomposition, define the target population and estimand, and use design/causal structure to decide adjustment. Adjust confounders when appropriate, do not condition on colliders, treat mediators according to the estimand, and report composition plus stratum effects.",
      "keyPoints": [
        "Aggregate rates combine within-stratum outcomes and group composition",
        "Reversal is arithmetic; preferred interpretation requires a scientific target",
        "Confounder, mediator, collider, and effect modifier imply different adjustment choices",
        "Standardization compares groups under a common composition",
        "Population drift can create dashboard reversals without individual behavior change"
      ],
      "resources": [
        "openintro-stats",
        "harvard-causal-diagrams",
        "berkeley-data100",
        "fundamentals-dataviz"
      ],
      "featured": false,
      "description": "Simpson's paradox occurs when an association in aggregated data reverses or materially changes after stratifying by another variable because group composition and within-group relationships combine differently. The arithmetic is weighted averages; the interpretation is causal and design-dependent. This chapter derives the decomposition, distinguishes confounders, mediators, colliders, and effect modifiers, explains standardization and weighting, and shows why neither aggregate nor stratified result is automatically correct. You will learn to detect reversals with contingency tables and small multiples, define the target population and estimand, choose adjustment sets using time and causal structure, avoid conditioning on selection, and report both composition and within-group effects. The worked example reconstructs a treatment comparison where one method is better in every severity stratum but worse overall because it handles harder cases. The lab generates a deterministic reversal, verifies weighted decompositions, and standardizes both treatments to a common severity mix. Production guidance covers metric stratification, population drift, fairness, experimentation, monitoring, and rollback.",
      "prerequisites": [
        "groupby-pivot",
        "joint-marginal-conditional",
        "dag-confounding"
      ],
      "learningObjectives": [
        "Derive how aggregate rates are weighted combinations of stratum-specific rates and composition.",
        "Detect and reproduce Simpson reversals through tables, plots, and decomposition rather than relying on correlations alone.",
        "Choose whether and how to adjust using target estimand, temporal order, design, and causal diagrams.",
        "Monitor composition shifts and communicate aggregate and conditional results without assuming either is universally correct."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Construct a Simpson reversal, verify weighted aggregation, and standardize both treatments to a common severity distribution.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "One dataset, two valid descriptive views"
        },
        {
          "type": "flow",
          "title": "Interpret a Simpson reversal"
        }
      ],
      "followUpQuestions": [
        "Can Simpson's paradox occur without confounding?",
        "How does standardization help?",
        "Should you always stratify?"
      ],
      "estimatedMinutes": 9
    },
    {
      "slug": "network-experiments",
      "title": "Interference & Network Effects in Experiments",
      "module": "experimentation",
      "priority": "medium",
      "roles": [
        "ds",
        "da",
        "as"
      ],
      "interviewAnswer": "Standard A/B inference assumes no interference: one unit's assignment does not affect another's outcome. In social networks, marketplaces, and shared-capacity systems that can fail. I define the target effect first - direct, spillover, or total effect under full rollout - and an exposure mapping describing relevant neighbors' assignments. Individual randomization has high power but can dilute effects through cross-arm exposure. Graph-cluster or market-level randomization reduces contamination at the cost of fewer independent units and possible cluster imbalance; saturation or two-stage designs estimate spillovers. I use graph snapshots and cluster-aware inference, measure exposure and leakage, and avoid claiming a full-rollout effect from an estimand the design cannot identify.",
      "keyPoints": [
        "Interference makes outcomes depend on assignment vectors",
        "Direct and total rollout effects are different estimands",
        "Individual randomization can be precise for the wrong mixed-exposure contrast",
        "Clustering trades fewer cross-arm edges for fewer independent units",
        "Graph, exposure, and assignment versions are part of the causal design"
      ],
      "resources": [
        "network-experimentation-scale",
        "detecting-network-effects",
        "airbnb-interference",
        "causal-mixtape"
      ],
      "featured": false,
      "description": "Network experiments study treatments whose effects can spill across users, sellers, geographic areas, or shared resources, violating the usual no-interference assumption that each unit's outcome depends only on its own assignment. This chapter develops potential outcomes under exposure mappings, direct, spillover, total, and equilibrium effects; graph and cluster randomization; saturation and two-stage designs; switchbacks; marketplaces; contamination; cluster construction; variance and power; Horvitz-Thompson-style weighting; meta-experiments for detecting interference; and generalization to full rollout. You will learn why individual randomization can estimate a diluted mixture rather than the global policy effect, why cluster randomization reduces cross-arm edges but sacrifices independent units, how to define exposure without conditioning on realized outcomes, and how network evolution or hidden edges threaten identification. A worked messaging example contrasts direct and total effects. The lab simulates spillovers on a ring network, compares individual with cluster assignment, and verifies contamination, bias direction, and cluster-aware summaries. Production guidance covers graph snapshots, cluster versions, assignment, privacy, monitoring, safety, and rollback. The goal is to align the experiment's counterfactual worlds with how treatment actually propagates.",
      "prerequisites": [
        "experiment-design",
        "trees-graphs-algorithms",
        "causal-inference"
      ],
      "learningObjectives": [
        "Define direct, spillover, total, and equilibrium estimands through treatment and neighborhood exposure mappings.",
        "Choose individual, cluster, saturation, two-stage, or switchback assignment based on interference topology and policy target.",
        "Analyze power and uncertainty using the actual independent randomization units and assignment probabilities.",
        "Implement a spillover simulation and diagnose contamination and estimator mismatch under competing designs."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Simulate network spillovers, compare individual and cluster assignment, and verify contamination, contrast dilution, and cluster-aware summaries.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Interference-aware design choice"
        },
        {
          "type": "compare",
          "title": "Individual versus graph-cluster assignment"
        }
      ],
      "followUpQuestions": [
        "What is interference?",
        "Why cluster-randomize a graph?",
        "How can you detect network effects?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "data-observability",
      "title": "Data Observability: Freshness, Volume, Schema & Distribution",
      "module": "data-eng",
      "priority": "very-high",
      "roles": [
        "de",
        "ds",
        "mle"
      ],
      "interviewAnswer": "Data observability monitors pipeline outputs beyond job success: freshness, volume, schema, nulls, distribution and lineage. A pipeline can be green while silently producing wrong data.",
      "keyPoints": [
        "Operational success != semantic correctness.",
        "Baseline distributions and contracts catch silent shifts.",
        "Route alerts to owners with context/lineage."
      ],
      "resources": [
        "dbt-docs",
        "google-sre"
      ],
      "featured": true,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "concept-map",
          "title": "Data Observability: Freshness, Volume, Schema & Distribution"
        }
      ],
      "followUpQuestions": [
        "When would you not use Data Observability: Freshness, Volume, Schema & Distribution?",
        "How would you validate or tune Data Observability: Freshness, Volume, Schema & Distribution?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "entropy-information",
      "title": "Entropy & Information Content",
      "module": "info-theory",
      "priority": "high",
      "roles": [
        "all"
      ],
      "interviewAnswer": "The information content of outcome x is -log p(x), so rare outcomes carry more surprise and independent surprises add. Entropy is its expectation: H(X)=-sum_x p(x)log p(x). With base two the unit is bits; with natural log it is nats. A deterministic variable has entropy zero, and a distribution uniform over m outcomes has the maximum log m. Joint entropy obeys H(X,Y)=H(X)+H(Y|X), and conditioning cannot increase discrete entropy. In source coding, entropy is the asymptotic lower limit on average lossless code length per symbol under the modeled source, up to coding conditions and finite-block overhead. It does not measure the meaning of a message, and differential entropy for continuous variables can be negative and changes under rescaling.",
      "keyPoints": [
        "Self-information is outcome surprise; entropy is its probability-weighted average.",
        "Log base sets the unit, and independent information adds because probabilities multiply.",
        "Uniform distributions maximize discrete entropy for a fixed finite support; deterministic ones minimize it.",
        "Chain rules decompose joint uncertainty into known and remaining parts.",
        "Entropy describes a chosen distribution and alphabet, not semantic value or one sample's quality."
      ],
      "resources": [
        "shannon-1948",
        "mit-info-theory",
        "harvard-stat110"
      ],
      "featured": false,
      "description": "Entropy quantifies the average uncertainty of outcomes drawn from a known probability distribution, while self-information assigns greater surprise to rarer individual outcomes. This chapter derives I(x)=-log p(x) from additivity and H(X)=E[I(X)], explains bits versus nats, and develops binary entropy, support-size bounds, joint and conditional entropy, the chain rule, independence, entropy rate and differential entropy. It connects source coding to expected code length without claiming that entropy measures semantic importance, data quality or randomness in one observation. Worked examples compute a biased coin and a two-symbol prefix code. The lab implements discrete entropy and self-information, compares SciPy, and verifies uniform maxima, deterministic minima, base conversion and additivity for independent variables. Production guidance covers probability normalization, smoothing, aggregation level, missing categories, drifting vocabularies and reproducible units. Entropy is a property of a distribution and representation: changing the alphabet, conditioning information or measurement precision changes the quantity even when the underlying domain story sounds the same.",
      "prerequisites": [
        "distributions",
        "expectation-variance"
      ],
      "learningObjectives": [
        "Compute self-information and discrete entropy in bits or nats from a valid probability mass function.",
        "Use support bounds, concavity, chain rules and conditioning to reason about uncertainty.",
        "Distinguish discrete entropy, entropy rate and differential entropy and avoid semantic overinterpretation.",
        "Connect entropy to ideal source coding while handling finite blocks, unknown distributions and model mismatch."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement discrete entropy and self-information, compare SciPy, and verify support bounds, base conversion, deterministic limits and independent additivity.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Binary entropy"
        },
        {
          "type": "compare",
          "title": "Outcome and distribution information"
        }
      ],
      "followUpQuestions": [
        "Why use a logarithm for information?",
        "Why does a uniform finite distribution maximize entropy?",
        "What does entropy rate add?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "cross-entropy-loss",
      "title": "Cross-Entropy & Log Loss",
      "module": "info-theory",
      "priority": "high",
      "roles": [
        "all"
      ],
      "interviewAnswer": "Cross-entropy is H(p,q)=-sum_y p(y)log q(y). For a one-hot label y it becomes -log q_y, so minimizing average cross-entropy maximizes conditional likelihood. With softmax logits z, the stable per-example loss is logsumexp(z)-z_y and the gradient is softmax(z)-onehot(y). Cross-entropy equals H(p)+KL(p||q), so for fixed target p it is minimized at q=p and is a proper scoring rule. I compute from logits with log-sum-exp, define class weights and reduction explicitly, mask padded tokens, distinguish label smoothing from calibration, and evaluate probability reliability separately from accuracy. Infinite or NaN loss often means zero predicted probability, overflow, invalid labels or a masking bug. Scores are comparable only under the same label space, sampling and weighting policy.",
      "keyPoints": [
        "One-hot cross-entropy is negative log probability of the observed class and equals conditional NLL.",
        "Use logits and log-sum-exp; never form unstable exponentials or log clipped probabilities casually.",
        "The gradient softmax-minus-target directly increases target mass and decreases total non-target mass.",
        "Weights, smoothing, sampling, masking and reduction change the optimization target and reported scale.",
        "Low log loss rewards calibrated probability forecasts; accuracy alone ignores confidence."
      ],
      "resources": [
        "mit-info-theory",
        "google-mlcc",
        "stanford-cs229"
      ],
      "featured": false,
      "description": "Cross-entropy measures the average code length or logarithmic loss incurred when outcomes follow a target distribution p but predictions use q. In supervised classification, one-hot targets reduce categorical cross-entropy to the negative log probability assigned to the true class, making it both maximum-likelihood training and a strictly proper scoring rule in expectation. This chapter derives softmax cross-entropy, binary log loss, gradients, stable log-sum-exp, class weighting, label smoothing, masking, reductions and sequence-token losses. It separates discrimination from calibration and explains how sampling, imbalance, noisy labels and transformed objectives change score interpretation. Worked examples compare confident correct and confident wrong predictions. The lab implements stable cross-entropy from logits, matches scikit-learn log loss, and verifies shift invariance, the entropy-plus-KL decomposition and zero-sum softmax gradients. Production guidance fixes label maps, padding and ignore rules, weights, sampling and reductions; monitors finite losses, probability calibration and slices; and avoids comparing training losses computed under different tokenizers or label policies. Cross-entropy strongly penalizes misplaced confidence, which is useful only when labels and probabilities correspond to the intended outcome distribution.",
      "prerequisites": [
        "entropy-information",
        "logistic-regression",
        "numerical-stability"
      ],
      "learningObjectives": [
        "Derive binary and multiclass cross-entropy from expected code length and maximum likelihood.",
        "Compute stable softmax log probabilities and gradients directly from logits.",
        "Reason about class weights, label smoothing, masking, sampling, calibration and reduction conventions.",
        "Diagnose numerical, label, imbalance, leakage and distribution-shift failures in training and evaluation."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement stable cross-entropy from logits, compare scikit-learn log loss, and verify shift invariance, gradients and the entropy-plus-KL identity.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "True-class log loss"
        },
        {
          "type": "compare",
          "title": "Loss and decision views"
        }
      ],
      "followUpQuestions": [
        "Why is log loss a proper scoring rule?",
        "Why subtract the maximum logit?",
        "What does the softmax gradient sum to zero imply?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "kl-divergence",
      "title": "KL Divergence",
      "module": "info-theory",
      "priority": "high",
      "roles": [
        "all"
      ],
      "interviewAnswer": "KL divergence is D_KL(p||q)=E_p[log p(X)/q(X)]. It is the extra expected code length or log loss from using q for data generated by p, since H(p,q)=H(p)+D_KL(p||q). Gibbs' inequality makes it nonnegative, but it is asymmetric and violates metric properties. If p assigns positive mass where q assigns zero, forward KL is infinite. Maximum likelihood minimizes empirical forward KL from the data distribution to the model. Reverse KL q||p, common in variational inference, weights errors under q and behaves differently around multiple modes. I always state the direction, support, units, smoothing and estimator, and I avoid interpreting a small aggregate KL as proof that every tail category or subgroup is close.",
      "keyPoints": [
        "KL averages a log density or probability ratio under the first distribution.",
        "It is nonnegative but asymmetric, unbounded and not a distance metric.",
        "Forward KL becomes infinite when q misses any positive-p support.",
        "Cross-entropy equals target entropy plus KL, linking coding and maximum likelihood.",
        "Direction, smoothing, alphabet and estimator determine operational meaning."
      ],
      "resources": [
        "kullback-leibler-1951",
        "mit-info-theory",
        "probml-book"
      ],
      "featured": false,
      "description": "Kullback-Leibler divergence measures the expected extra log loss or code length from using distribution q when data follow p. It is nonnegative and zero exactly when the distributions agree almost everywhere under appropriate conditions, but it is asymmetric, can be infinite and is not a metric. This chapter derives KL from likelihood ratios and cross-entropy, explains support requirements, discrete and continuous forms, forward versus reverse orientation, maximum likelihood, Bayesian variational inference, regularization, distillation and the data-processing inequality. It contrasts mode covering and mode seeking without treating those phrases as universal optimization guarantees. Worked examples compute a two-outcome divergence in both directions. The lab implements discrete KL with explicit zero handling, compares SciPy, and verifies nonnegativity, asymmetry, product additivity, cross-entropy decomposition and infinity under missing support. Production guidance records orientation, smoothing and estimator, monitors rare-category domination, and avoids comparing divergences across incompatible alphabets or representation versions. KL is an expectation under its first argument: changing that direction changes which errors receive weight and what question the number answers.",
      "prerequisites": [
        "entropy-information",
        "cross-entropy-loss"
      ],
      "learningObjectives": [
        "Compute discrete and continuous KL divergence with correct orientation and support conditions.",
        "Use cross-entropy decomposition, likelihood and coding interpretations to explain nonnegativity.",
        "Distinguish forward and reverse KL behavior in estimation, variational inference and approximation.",
        "Diagnose smoothing, rare-event, sample-estimation, representation and aggregation failures."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement discrete KL with explicit support handling, compare SciPy, and verify asymmetry, nonnegativity, product additivity and cross-entropy decomposition.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "KL as excess code cost"
        },
        {
          "type": "compare",
          "title": "KL orientation"
        }
      ],
      "followUpQuestions": [
        "Why is KL nonnegative?",
        "Why does maximum likelihood minimize forward KL?",
        "When is KL infinite?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "mutual-information",
      "title": "Mutual Information",
      "module": "info-theory",
      "priority": "high",
      "roles": [
        "all"
      ],
      "interviewAnswer": "Mutual information is I(X;Y)=sum p(x,y)log[p(x,y)/(p(x)p(y))]. Equivalently it is H(X)-H(X|Y), H(Y)-H(Y|X), or KL between the joint and independent product of marginals. It is symmetric, nonnegative and zero exactly for independence under standard conditions. It detects nonlinear dependence, but has no direction and does not imply causality. If Z is a function or noisy processing of X in a Markov chain Y-X-Z, data processing gives I(Y;Z)<=I(Y;X). For feature selection I estimate MI inside training folds and still check redundancy and interactions; univariate MI misses XOR-style jointly useful features. Continuous MI estimation is difficult, so I state the estimator, scaling, neighbors or bins, sample size and uncertainty rather than comparing opaque values as ground truth.",
      "keyPoints": [
        "MI is the KL divergence between joint dependence and the product distribution that represents independence.",
        "It is symmetric and detects general dependence but gives neither causal direction nor effect sign.",
        "A deterministic copy has MI equal to source entropy; independent variables have zero MI.",
        "Data processing says a downstream transformation cannot create information about a target absent new data.",
        "Estimator, discretization, sample size and dimensionality can dominate empirical MI values."
      ],
      "resources": [
        "shannon-1948",
        "mit-info-theory",
        "probml-book"
      ],
      "featured": false,
      "description": "Mutual information measures how much observing one variable reduces uncertainty about another, including nonlinear dependence that correlation can miss. It can be written as an entropy reduction, a KL divergence between the joint distribution and the product of marginals, or an expected pointwise log density ratio. This chapter derives symmetry, nonnegativity, independence, deterministic limits, chain rules, conditional mutual information and the data-processing inequality. It distinguishes discrete MI from continuous estimation, explains normalization choices and develops feature-selection, representation, leakage and fairness use cases without implying causality or direction. Worked examples compute a perfectly copied bit and an XOR relationship with zero linear correlation. The lab implements MI from a joint table, compares scikit-learn, and verifies symmetry, independence, deterministic equality and invariance to relabeling. Production guidance freezes discretization or estimators, performs selection inside training folds, reports uncertainty and sample support, and avoids comparing raw MI across variables with different entropy scales. Mutual information is a population dependence quantity; empirical estimates can be strongly biased in sparse or high-dimensional settings.",
      "prerequisites": [
        "entropy-information",
        "kl-divergence",
        "joint-marginal-conditional"
      ],
      "learningObjectives": [
        "Compute mutual information from joint and marginal probabilities and connect its equivalent definitions.",
        "Use conditional MI, chain rules and data processing to reason about transformations and shared information.",
        "Apply MI to feature selection and representation analysis without confusing dependence with causality.",
        "Choose and validate discrete, binned, k-nearest-neighbor or variational estimators under finite samples."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement mutual information from a joint table, compare scikit-learn, and verify symmetry, independence, deterministic information and relabeling invariance.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Two views of mutual information"
        },
        {
          "type": "flow",
          "title": "Feature-information audit"
        }
      ],
      "followUpQuestions": [
        "Why is MI zero at independence?",
        "What does data processing mean for a learned representation?",
        "Why can univariate MI miss useful features?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "perplexity",
      "title": "Perplexity",
      "module": "info-theory",
      "priority": "medium",
      "roles": [
        "aie",
        "mle",
        "as",
        "ds"
      ],
      "interviewAnswer": "Perplexity is exp of average token NLL: PPL=exp[-1/N sum_t log p(x_t|context)]. A uniform model over V tokens has perplexity V; a model assigning probability one to every observed token has perplexity one. It is the geometric inverse probability per token and is monotonic with cross-entropy. I compute it with shifted causal labels, exclude padding and any prompt tokens outside the estimand, and aggregate total NLL divided by total active tokens before exponentiating. I freeze tokenizer, vocabulary, BOS/EOS, context-window and sliding-window policy because those change the unit. Perplexity cannot by itself measure factuality, instruction following, long-form coherence or safety, and comparing values across different tokenizers is usually invalid unless converted to a common unit such as carefully defined bits per byte.",
      "keyPoints": [
        "Perplexity is exponentiated average log loss, not an independent model-quality objective.",
        "Corpus perplexity uses token-weighted total NLL, not the arithmetic mean of batch or sequence perplexities.",
        "Tokenizer, vocabulary, special tokens, context and masking define the prediction unit.",
        "Lower perplexity means better probability fit on the evaluated text, not necessarily better generation behavior.",
        "Evaluation contamination can produce excellent perplexity without generalization."
      ],
      "resources": [
        "stanford-cs224n",
        "stanford-cs336",
        "hf-llm",
        "mit-info-theory"
      ],
      "featured": false,
      "description": "Perplexity exponentiates average negative log likelihood to express how many equally likely choices a probabilistic sequence model faces per evaluated token. For an autoregressive language model it is exp[-(1/N)sum_t log p(x_t|x_{<t})], so lower values mean higher assigned probability to observed tokens under a fixed evaluation protocol. This chapter derives perplexity from cross-entropy and entropy rate, explains its weighted geometric-mean interpretation, and distinguishes token, character, byte and word units. It covers causal shifting, beginning and end tokens, padding masks, context truncation, sliding windows, batching, numerical stability, vocabulary support, tokenizer dependence and data contamination. It explains why perplexity measures predictive fit rather than factuality, reasoning, diversity or human preference. Worked examples calculate uniform and variable-probability sequences. The lab computes perplexity from probabilities and logits, verifies uniform and deterministic limits, and checks corpus aggregation by token-weighted log loss. Production guidance freezes corpus, tokenizer, context policy and normalization; reports domain and length slices; monitors loss tails and evaluation coverage; and pairs perplexity with task, factuality and safety measures. Values from different tokenizers are generally not directly comparable, even when evaluated on the same visible text.",
      "prerequisites": [
        "cross-entropy-loss",
        "joint-marginal-conditional",
        "causal-masks"
      ],
      "learningObjectives": [
        "Derive token-level perplexity from autoregressive negative log likelihood and interpret its scale.",
        "Implement causal alignment, masking, context windows and token-weighted corpus aggregation correctly.",
        "Explain why tokenizer, unit, vocabulary and corpus prevent naive cross-model comparisons.",
        "Use perplexity with contamination, slice, generation-quality, factuality and deployment diagnostics."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Compute perplexity from token probabilities and logits, verify uniform and deterministic limits, and aggregate corpora by token-weighted log loss.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Perplexity evaluation contract"
        },
        {
          "type": "compare",
          "title": "What perplexity does and does not test"
        }
      ],
      "followUpQuestions": [
        "Why exponentiate cross-entropy?",
        "What is the minimum possible perplexity?",
        "How do you compare models with different tokenizers?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "information-bottleneck",
      "title": "Information Bottleneck & Representation Learning",
      "module": "info-theory",
      "priority": "medium",
      "roles": [
        "as",
        "mle",
        "aie",
        "ds"
      ],
      "interviewAnswer": "Information bottleneck seeks an encoder p(z|x) that minimizes I(X;Z) while retaining I(Z;Y), often through L=I(X;Z)-beta I(Z;Y). beta sets the value of target information relative to compression. Because Y-X-Z is a Markov chain, data processing guarantees I(Z;Y)<=I(X;Y); a sufficient representation reaches equality while discarding target-irrelevant distinctions. Exact MI is usually intractable for neural continuous models, so variational IB upper-bounds I(X;Z) with a KL to a chosen prior and lower-bounds target information through a decoder likelihood. Those bounds depend on model families and optimization. I sweep beta and report rate, predictive utility, calibration, robustness and sensitive-attribute leakage, rather than treating a narrow layer or low estimated MI as proof of minimality, generalization, privacy or fairness.",
      "keyPoints": [
        "The bottleneck compresses X only relative to information that must be retained about Y.",
        "Data processing caps target information in Z at what X originally contains.",
        "beta traces a rate-relevance frontier; no single value is universally optimal.",
        "Neural implementations optimize variational bounds whose priors and decoders affect the learned representation.",
        "Compression does not automatically guarantee generalization, invariance, fairness, robustness or privacy."
      ],
      "resources": [
        "information-bottleneck-paper",
        "mit-info-theory",
        "probml-book",
        "paper-vqvae"
      ],
      "featured": false,
      "description": "The information bottleneck formalizes representation learning as a trade-off: compress input X into Z while preserving information about a relevant target Y. The classical objective minimizes I(X;Z)-beta I(Z;Y) under the Markov structure Y-X-Z, linking sufficient statistics, rate-distortion theory and clustering by predictive similarity. This chapter derives the trade-off and data-processing limit, explains deterministic and stochastic encoders, and develops variational upper and lower bounds used in neural models. It distinguishes the original bottleneck from beta-VAEs, generic narrow layers, dropout and claims that neural networks automatically compress. It covers continuous-variable pathologies, nuisance and sensitive information, adversarial objectives, evaluation, Pareto frontiers and causal limitations. A worked example compresses four input states into two target-relevant groups. The lab exhaustively searches deterministic discrete encoders, verifies information preservation and data processing, and compares a selected mapping with scikit-learn. Production guidance treats beta, priors, critics and estimates as tunable model components; reports task utility and subgroup behavior; and refuses privacy or fairness guarantees from low estimated MI alone. The bottleneck is a principled objective for relevance-aware compression, not a universal explanation of generalization.",
      "prerequisites": [
        "mutual-information",
        "vae"
      ],
      "learningObjectives": [
        "Derive the information-bottleneck constrained problem and Lagrangian under Y-X-Z.",
        "Interpret deterministic clusters and stochastic encoders as trading representation rate for target relevance.",
        "Construct variational bounds and identify prior, decoder, critic and continuous-estimation assumptions.",
        "Evaluate Pareto frontiers, downstream utility, nuisance leakage, robustness, fairness and privacy without overclaiming."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Enumerate deterministic discrete bottlenecks, trace the rate-relevance frontier, and verify sufficiency, compression and data-processing invariants.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Rate-relevance frontier"
        },
        {
          "type": "flow",
          "title": "Variational bottleneck training"
        }
      ],
      "followUpQuestions": [
        "What does beta control?",
        "How is IB related to sufficient statistics?",
        "Why use a stochastic encoder?"
      ],
      "estimatedMinutes": 11
    },
    {
      "slug": "gaussian-processes",
      "title": "Gaussian Processes",
      "module": "probabilistic-ml",
      "priority": "high",
      "roles": [
        "ds",
        "as",
        "mle"
      ],
      "interviewAnswer": "A Gaussian process defines a distribution over functions using a mean and kernel; conditioning on observations produces a posterior predictive distribution with both mean and uncertainty.",
      "keyPoints": [
        "Kernel covariance",
        "Posterior prediction",
        "Uncertainty",
        "Cubic exact scaling"
      ],
      "resources": [
        "stanford-cs229",
        "probml-book",
        "sklearn"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What does the kernel control?",
        "How do sparse GPs scale?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "bayesian-networks",
      "title": "Bayesian Networks & d-Separation",
      "module": "probabilistic-ml",
      "priority": "high",
      "roles": [
        "ds",
        "as",
        "mle"
      ],
      "interviewAnswer": "A Bayesian network is a DAG that factorizes a joint distribution into local conditional distributions; d-separation encodes conditional-independence relationships.",
      "keyPoints": [
        "DAG factorization",
        "Conditional independence",
        "d-Separation",
        "Inference"
      ],
      "resources": [
        "stanford-cs228",
        "probml-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "network",
          "title": "A simple Bayesian network"
        }
      ],
      "followUpQuestions": [
        "Bayesian network vs MRF?",
        "Exact vs approximate inference?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "markov-random-fields",
      "title": "Markov Random Fields & Factor Graphs",
      "module": "probabilistic-ml",
      "priority": "medium",
      "roles": [
        "as",
        "ds",
        "mle"
      ],
      "interviewAnswer": "An MRF is an undirected graphical model whose joint distribution is expressed with local compatibility factors; it is useful when dependencies are symmetric rather than naturally directed.",
      "keyPoints": [
        "Undirected graphs",
        "Clique potentials",
        "Partition function",
        "Factor graphs"
      ],
      "resources": [
        "stanford-cs228",
        "probml-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What is a factor graph?",
        "Why is the partition function hard?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "hidden-markov-models",
      "title": "Hidden Markov Models",
      "module": "probabilistic-ml",
      "priority": "high",
      "roles": [
        "ds",
        "as",
        "mle",
        "aie"
      ],
      "interviewAnswer": "An HMM models a sequence with hidden states that follow Markov transitions and emit observations. Forward-backward computes marginals/likelihoods, Viterbi finds the most likely state path, and Baum–Welch learns parameters.",
      "keyPoints": [
        "Latent states",
        "Transitions/emissions",
        "Forward-backward",
        "Viterbi"
      ],
      "resources": [
        "stanford-cs228",
        "stanford-cs229",
        "probml-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Hidden-state sequence with observations"
        }
      ],
      "followUpQuestions": [
        "Forward-backward vs Viterbi?",
        "How is Baum–Welch related to EM?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "variational-inference",
      "title": "Variational Inference",
      "module": "probabilistic-ml",
      "priority": "high",
      "roles": [
        "as",
        "aie",
        "mle",
        "ds"
      ],
      "interviewAnswer": "Variational inference converts difficult posterior inference into optimization: choose a tractable q(z) and optimize it to approximate the true posterior, commonly by maximizing the ELBO.",
      "keyPoints": [
        "Approximate posterior",
        "ELBO",
        "KL divergence",
        "Mean-field"
      ],
      "resources": [
        "stanford-cs228",
        "probml-book",
        "d2l"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Mean-field VI?",
        "Why reverse KL?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "aleatoric-epistemic",
      "title": "Aleatoric vs Epistemic Uncertainty",
      "module": "probabilistic-ml",
      "priority": "high",
      "roles": [
        "ds",
        "as",
        "mle",
        "aie"
      ],
      "interviewAnswer": "Aleatoric uncertainty comes from irreducible data noise; epistemic uncertainty comes from limited model knowledge and can often be reduced with better data.",
      "keyPoints": [
        "Data noise",
        "Model uncertainty",
        "OOD behavior",
        "Decision risk"
      ],
      "resources": [
        "probml-book",
        "stanford-stats315a"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "How do ensembles help?",
        "What happens under shift?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "proper-scoring-rules",
      "title": "Proper Scoring Rules: Log Loss & Brier Score",
      "module": "probabilistic-ml",
      "priority": "high",
      "roles": [
        "ds",
        "as",
        "mle"
      ],
      "interviewAnswer": "Proper scoring rules reward honest probabilistic forecasts: in expectation, reporting the true probability minimizes expected score. Log loss and Brier score are common examples.",
      "keyPoints": [
        "Probability quality",
        "Brier score",
        "Log score",
        "Calibration/sharpness"
      ],
      "resources": [
        "stanford-stats315a",
        "google-mlcc"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Brier vs log loss?",
        "Calibration vs discrimination?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "conformal-prediction",
      "title": "Conformal Prediction",
      "module": "probabilistic-ml",
      "priority": "high",
      "roles": [
        "ds",
        "as",
        "mle",
        "aie"
      ],
      "interviewAnswer": "Conformal prediction wraps a predictive model to output sets or intervals with finite-sample marginal coverage under exchangeability; a calibration set determines the nonconformity-score quantile.",
      "keyPoints": [
        "Calibration split",
        "Nonconformity score",
        "Coverage",
        "Model-agnostic"
      ],
      "resources": [
        "conformal-intro",
        "stanford-stats315a",
        "probml-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": true,
      "labGoal": "Build split-conformal regression intervals from held-out residuals.",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What assumptions are needed?",
        "Conditional vs marginal coverage?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "selective-prediction",
      "title": "Selective Prediction & Abstention",
      "module": "probabilistic-ml",
      "priority": "medium",
      "roles": [
        "ds",
        "as",
        "mle",
        "aie"
      ],
      "interviewAnswer": "Selective prediction lets a model abstain on uncertain cases, trading coverage—the fraction answered—against risk on the answered subset.",
      "keyPoints": [
        "Abstention",
        "Risk-coverage",
        "Confidence threshold",
        "Human fallback"
      ],
      "resources": [
        "conformal-intro",
        "stanford-stats315a"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "How do you choose the abstention threshold?",
        "How does conformal prediction help?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "empirical-risk-minimization",
      "title": "Empirical Risk Minimization",
      "module": "learning-theory",
      "priority": "high",
      "roles": [
        "ds",
        "mle",
        "as"
      ],
      "interviewAnswer": "Given hypotheses H and loss ell, population risk is R(h)=E[ell(h(X),Y)] and empirical risk is Rhat(h)=1/n sum_i ell(h(x_i),y_i). ERM chooses hhat minimizing Rhat over H. Generalization requires more than a low training loss because hhat was selected using the data; we control the gap uniformly over H or through stability, compression, margins or other complexity arguments. Excess risk can be separated into approximation error from H, estimation error from finite data, and optimization error from not solving the empirical problem exactly. In practice I choose loss and sample weights to match the deployment estimand, keep preprocessing inside grouped or temporal splits, tune complexity on validation, and evaluate calibration, utility and slices. Regularized ERM adds an inductive bias; it does not repair distribution shift or leakage.",
      "keyPoints": [
        "Population risk is the target expectation; empirical risk is its sample estimate.",
        "ERM over a richer class lowers training error but can increase estimation error.",
        "Data-dependent selection needs uniform or algorithm-specific generalization reasoning.",
        "Approximation, estimation and optimization errors are distinct and require different remedies.",
        "Loss, weights, sampling unit and split encode the real learning objective."
      ],
      "resources": [
        "stanford-cs229",
        "stanford-stats315a"
      ],
      "featured": false,
      "description": "Empirical risk minimization selects a predictor with low average loss on observed samples as a tractable proxy for minimizing unknown population risk. This chapter defines hypothesis classes, loss functions, expected risk, empirical risk, approximation error, estimation error and optimization error. It derives the ERM generalization decomposition, explains uniform convergence and why choosing among many hypotheses invalidates a fixed-model concentration argument, and covers surrogate losses, regularized and constrained ERM, stochastic optimization, interpolation and double descent. It separates i.i.d. theory from grouped, temporal and adaptive data collection. A worked example contrasts linear and interpolating polynomial fits. The lab builds polynomial ERM from normal equations, compares scikit-learn, and verifies that minimum training loss can have worse test risk while validation selects a safer degree. Production guidance versions sampling, loss, weights, features, split and optimizer; monitors population slices and drift; and treats training loss as one component of evidence rather than proof of generalization. ERM is the backbone of supervised learning, but it works only through inductive bias and a representative measurement process.",
      "prerequisites": [
        "expectation-variance",
        "cross-validation",
        "gradient-descent"
      ],
      "learningObjectives": [
        "Define population and empirical risk for a hypothesis class and chosen loss.",
        "Decompose excess risk into approximation, estimation and optimization contributions.",
        "Explain why uniform convergence or algorithmic stability is needed after data-dependent model selection.",
        "Design weighted, constrained and leakage-safe ERM pipelines under real sampling and deployment conditions."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Fit polynomial ERM solutions, compare scikit-learn, and verify that minimum empirical risk can generalize worse than validation-selected capacity.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "Excess-risk decomposition"
        },
        {
          "type": "curve",
          "title": "Capacity and risk"
        }
      ],
      "followUpQuestions": [
        "Why is empirical risk a reasonable proxy?",
        "What is approximation error?",
        "How does early stopping fit ERM?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "pac-learning",
      "title": "PAC Learning Intuition",
      "module": "learning-theory",
      "priority": "medium",
      "roles": [
        "as",
        "mle",
        "ds"
      ],
      "interviewAnswer": "A class is PAC learnable if an algorithm uses a number of samples polynomial in relevant complexity, 1/epsilon and log(1/delta), and with probability at least 1-delta returns a hypothesis whose true error is at most epsilon in the realizable case. Agnostic PAC instead competes with the best hypothesis in H up to epsilon. For finite H, a consistent realizable learner needs on the order of [log|H|+log(1/delta)]/epsilon examples; agnostic uniform convergence scales roughly [log|H|+log(1/delta)]/epsilon squared. The guarantee is over a random sample from the assumed distribution, often uniformly for all distributions. It says nothing automatic about shifted deployment, dependent observations, computational tractability, fairness or calibration. I use the framework to explain capacity and confidence, then test the actual data-generating and selection process.",
      "keyPoints": [
        "Probably refers to sample randomness delta; approximately refers to population error epsilon.",
        "Realizable PAC assumes a zero-error target in the class; agnostic PAC competes with the class optimum.",
        "Confidence costs logarithmically, accuracy typically costs 1/epsilon or 1/epsilon squared.",
        "Information-theoretic learnability does not imply an efficient algorithm.",
        "Distribution-free guarantees still rely on i.i.d. sampling and a stable target protocol."
      ],
      "resources": [
        "valiant-pac",
        "stanford-cs229"
      ],
      "featured": false,
      "description": "Probably Approximately Correct learning turns generalization into a quantified contract: with probability at least 1-delta over a random training sample, the learned hypothesis has population error at most epsilon, or excess error at most epsilon in agnostic settings. This chapter defines instance space, concept and hypothesis classes, unknown data distribution, learner, realizable and agnostic cases, sample complexity and efficient learnability. It derives finite-class bounds with union and Hoeffding arguments, explains how logarithmic confidence and capacity enter, and distinguishes information-theoretic sample sufficiency from computational feasibility. It covers classification noise, misspecification, improper learning, distribution dependence and modern practical limits. A worked example sizes a finite threshold class. The lab computes a realizable finite-class bound and simulates consistent threshold learning, verifying failure probability and monotonicity in epsilon, delta and class size. Production guidance uses PAC concepts to reason about capacity and confidence but validates real dependencies, shift, adaptive tuning and effect sizes directly. PAC is a family of mathematical learning models, not a certificate automatically attached to any trained model.",
      "prerequisites": [
        "empirical-risk-minimization",
        "clt"
      ],
      "learningObjectives": [
        "State PAC guarantees with correct quantifiers over distributions, targets, samples and learner randomness.",
        "Derive finite-class sample bounds in realizable and agnostic settings.",
        "Separate sample complexity, representation or approximation and computational efficiency.",
        "Relate epsilon-delta theory to honest validation while recognizing dependence, shift and adaptive-selection limits."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Compute finite-class PAC sample bounds, simulate consistent threshold learning, and verify monotonic dependence on epsilon, delta and class size.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "PAC quantifiers"
        },
        {
          "type": "compare",
          "title": "Two PAC settings"
        }
      ],
      "followUpQuestions": [
        "What changes from realizable to agnostic PAC?",
        "Why does finite-class capacity enter as log|H|?",
        "What is improper learning?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "vc-dimension",
      "title": "VC Dimension & Capacity",
      "module": "learning-theory",
      "priority": "medium",
      "roles": [
        "as",
        "mle",
        "ds"
      ],
      "interviewAnswer": "A class H shatters points x1,...,xm if for every one of the 2^m binary labelings there is some h in H matching it. VC(H) is the largest m for which some set can be shattered. One-sided thresholds on the line have VC dimension one; intervals have two; affine halfspaces in R^d have d+1. The growth function counts the maximum number of labelings H can realize on m points. Sauer-Shelah says that for VC dimension d and m>d, growth is at most sum_{i=0}^d C(m,i), which turns an infinite class into a finite effective labeling count and yields uniform-convergence bounds scaling roughly with d/n. VC is worst-case and class-level; it does not equal parameter count universally or predict a particular deep network's test error precisely.",
      "keyPoints": [
        "Shattering means realizing all labelings on one chosen point configuration.",
        "VC dimension is the largest shatterable size, or infinity if no finite maximum exists.",
        "The growth function counts maximum distinct dichotomies and is controlled polynomially beyond finite VC dimension.",
        "Finite VC dimension characterizes distribution-free binary classification learnability under standard settings.",
        "Worst-case class capacity differs from trained-solution margins, norms, stability and data geometry."
      ],
      "resources": [
        "vapnik-chervonenkis-1971",
        "stanford-cs229"
      ],
      "featured": false,
      "description": "VC dimension measures the binary classification capacity of a hypothesis class by the largest finite point set it can shatter, meaning realize every possible labeling. This chapter builds growth functions, shattering coefficients, VC dimension, Sauer-Shelah bounds and their role in uniform convergence and sample complexity. It proves intuitive examples for one-dimensional thresholds and intervals, explains why linear separators in d dimensions have VC dimension d+1 under standard affine settings, and distinguishes parameter count from functional capacity. It covers infinite VC dimension, dual and multiclass extensions, data-dependent complexities and why worst-case capacity bounds can be loose for a trained algorithm. A worked example enumerates interval labelings on three ordered points. The lab brute-forces threshold and interval growth functions, uses SciPy's combinatorial bound, and verifies VC dimensions and Sauer equality patterns. Production guidance uses VC as a conceptual capacity audit while relying on nested validation, stability, margins and real shifts for a particular model. VC dimension is a property of the whole hypothesis class on some possible configurations, not a score computed from one dataset or one fitted classifier.",
      "prerequisites": [
        "pac-learning"
      ],
      "learningObjectives": [
        "Define shattering, growth function and VC dimension with the correct existential and universal quantifiers.",
        "Compute VC dimension for thresholds, intervals and affine linear separators through constructions and impossibility arguments.",
        "Use Sauer-Shelah growth control to connect capacity with uniform generalization bounds.",
        "Distinguish worst-case class capacity from parameter count, effective algorithmic bias and observed model performance."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Enumerate threshold and interval dichotomies, verify their VC dimensions, and compare growth counts with the Sauer-Shelah combinatorial bound.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "VC proof obligations"
        },
        {
          "type": "bars",
          "title": "Interval growth on ordered points"
        }
      ],
      "followUpQuestions": [
        "What are the two parts of a VC proof?",
        "Why is Sauer-Shelah important?",
        "What replaces VC for real-valued regression classes?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "margin-generalization",
      "title": "Margins & Generalization",
      "module": "learning-theory",
      "priority": "medium",
      "roles": [
        "as",
        "mle",
        "ds"
      ],
      "interviewAnswer": "For labels y in {-1,+1} and score f=w^T x+b, functional margin is y f, but it can be inflated by rescaling parameters. Geometric margin is y f/||w||. Hard-margin SVM fixes y_i f_i>=1 and minimizes ||w|| squared, equivalently maximizing the minimum geometric margin. Soft margin minimizes 0.5||w|| squared+C sum hinge(1-y_i f_i), allowing violations. Only points on or inside the margin affect the solution as support vectors. Generalization bounds can depend on radius squared times norm squared or inverse margin squared rather than raw feature dimension, which explains kernel use. I standardize features inside folds, tune C and kernels on grouped or temporal validation, inspect margin distributions and slices, and separately calibrate scores if probabilities are needed.",
      "keyPoints": [
        "Geometric margin divides by ||w|| and is invariant to positive score rescaling.",
        "Hard-margin SVM maximizes separation; soft margin trades norm against hinge violations through C.",
        "Support vectors determine the boundary because non-support points have inactive constraints.",
        "Norm-margin bounds can control effective capacity even in very high-dimensional feature spaces.",
        "Margin is not probability and can degrade under scaling, outliers, shift or adversarial perturbations."
      ],
      "resources": [
        "svm-paper",
        "stanford-cs229"
      ],
      "featured": false,
      "description": "Margins measure how confidently a decision boundary separates labeled examples relative to the classifier's scale. For a linear score f(x)=w^T x+b, the functional margin y f(x) changes if w and b are rescaled, while the geometric margin y f(x)/||w|| is invariant and equals signed distance to the hyperplane. This chapter derives hard- and soft-margin support vector machines, hinge loss, support vectors, primal and dual views, kernels, norm-radius generalization bounds and multiclass margins. It explains why maximizing training margin can control effective capacity even in high-dimensional spaces, while feature scaling, outliers, nonseparability, distribution shift and adversarial directions limit the story. A worked example computes geometric distance. The lab solves a hard-margin primal with SciPy, compares scikit-learn SVC, and verifies constraints, support points and scale invariance. Production guidance versions feature scaling, kernel and C, evaluates margin distributions and calibration on later cohorts, and treats low margin as an uncertainty signal rather than a probability. Margins connect fitted geometry to generalization more tightly than dimension alone, but only under bounded norms and representative samples.",
      "prerequisites": [
        "vc-dimension",
        "norms-distances",
        "convexity"
      ],
      "learningObjectives": [
        "Distinguish functional and geometric margins and compute distance to a linear decision boundary.",
        "Derive hard- and soft-margin SVM objectives, hinge loss and support-vector behavior.",
        "Connect radius, norm and margin to capacity bounds in linear and kernel feature spaces.",
        "Diagnose scaling, outlier, calibration, robustness, nonseparability and shift failures in practice."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Solve a hard-margin linear SVM primal, compare scikit-learn, and verify constraints, support points, decision agreement and geometric scale invariance.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "layers",
          "title": "Maximum-margin geometry"
        },
        {
          "type": "curve",
          "title": "Hinge loss"
        }
      ],
      "followUpQuestions": [
        "Why are only support vectors important?",
        "What does C control?",
        "How does the kernel trick work?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "regularization-capacity",
      "title": "Regularization as Capacity Control",
      "module": "learning-theory",
      "priority": "high",
      "roles": [
        "all"
      ],
      "interviewAnswer": "Regularized ERM minimizes training loss plus lambda times a complexity penalty, or equivalently constrains complexity for a corresponding solution under convex conditions. Ridge adds lambda||w||_2^2, shrinking unstable directions and reducing effective degrees of freedom; lasso adds lambda||w||_1, producing coordinate sparsity through its constraint geometry. lambda is selected on training-contained validation, not the test set. Feature scaling is part of the penalty definition. Early stopping, augmentation and dropout are also capacity controls, while optimizers can have implicit bias among interpolating solutions. I inspect train-validation curves, coefficient or representation norms, stability and later-cohort utility. Regularization cannot fix leakage, incorrect labels or deployment shift, and sparse coefficients are not automatically causal or stable under correlated features.",
      "keyPoints": [
        "Penalties select among empirical fits by encoding a preference or constrained capacity.",
        "Ridge stabilizes correlated and weak directions; lasso can set coefficients exactly to zero.",
        "Scaling determines how coefficients are penalized and must be fitted inside each training fold.",
        "Early stopping, augmentation and optimization can regularize without an explicit norm term.",
        "Hyperparameter selection is part of the learner and consumes validation evidence."
      ],
      "resources": [
        "stanford-cs229",
        "isl",
        "d2l"
      ],
      "featured": false,
      "description": "Regularization controls which low-training-loss solution a learner prefers by penalizing, constraining, perturbing or stopping the learning process. This chapter connects penalized ERM and constrained hypothesis classes, derives ridge and lasso geometry, and develops effective degrees of freedom, Bayesian priors, early stopping, data augmentation, dropout, norm control and implicit optimization bias. It explains how lambda trades fit against stability, why L1 promotes sparse coordinates but not stable causal selection, and how scaling and correlated features change both penalties. It covers hyperparameter validation, one-standard-error selection, double descent, post-selection inference and interactions with calibration and distribution shift. A worked example solves ridge shrinkage along singular directions. The lab implements closed-form ridge, compares scikit-learn, and verifies coefficient-norm, training-risk and effective-degree paths. Production guidance versions every regularizing mechanism with preprocessing, measures learning curves and later-cohort utility, and avoids treating one penalty as protection against leakage or shift. Regularization is capacity control relative to a representation and algorithm, not a universal instruction to make parameter values small.",
      "prerequisites": [
        "empirical-risk-minimization",
        "ridge-lasso-elasticnet",
        "eigen-svd"
      ],
      "learningObjectives": [
        "Relate penalized ERM to constrained classes and describe the bias-stability trade-off.",
        "Derive L2 shrinkage, L1 sparsity geometry and effective degrees of freedom.",
        "Compare explicit penalties with early stopping, augmentation, dropout and implicit optimizer bias.",
        "Tune capacity without validation leakage and diagnose scaling, correlation, shift and post-selection failures."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Implement ridge regression, compare scikit-learn, and verify monotone coefficient norm, training risk and effective degrees of freedom along a regularization path.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "curve",
          "title": "Regularization path"
        },
        {
          "type": "compare",
          "title": "Explicit and implicit capacity"
        }
      ],
      "followUpQuestions": [
        "Why does ridge help multicollinearity?",
        "What is effective degrees of freedom?",
        "How is early stopping regularization?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "distribution-shift-generalization",
      "title": "Generalization Under Distribution Shift",
      "module": "learning-theory",
      "priority": "high",
      "roles": [
        "all"
      ],
      "interviewAnswer": "I write the joint as p(x,y)=p(y|x)p(x) or p(x|y)p(y) and state what is assumed stable. Under covariate shift p_s(x)!=p_t(x) but p(y|x) is stable, target risk equals E_s[w(X)loss] with w=p_t(x)/p_s(x), provided target support lies within source support. Large weights create high variance, so I report effective sample size and clipping sensitivity. Label shift changes p(y) with stable p(x|y); concept shift changes p(y|x) and cannot be repaired by covariate weights alone. I detect drift with domain classifiers and feature, score and prediction summaries, but validate harm using mature labels and decision metrics. Responses include recalibration, threshold or policy changes, reweighting, robust training, retraining or abstention, each shadow-tested for feedback and subgroup effects.",
      "keyPoints": [
        "Shift type is an assumption about which factor of the data-generating process changed.",
        "Importance weighting identifies target risk only with conditional stability and support overlap.",
        "Input drift is neither necessary nor sufficient for performance degradation.",
        "Unlabeled detection locates change; labels and task outcomes establish model harm.",
        "Deployment actions change future data, so monitoring and adaptation must account for feedback."
      ],
      "resources": [
        "stanford-cs229",
        "google-rules-ml",
        "stanford-cs329s"
      ],
      "featured": false,
      "description": "Generalization under distribution shift asks whether a model trained under source distribution P_s will retain acceptable risk under a different target P_t. This chapter distinguishes covariate shift, label or prior shift, concept or conditional shift, domain and subpopulation shift, temporal drift and policy-induced feedback. It derives importance-weighted target risk under invariant conditionals, explains overlap and effective sample size, and compares reweighting, recalibration, robust optimization, invariant representation, domain adaptation and retraining. It covers detection limits, unlabeled monitoring, selective labels, causal mechanisms, out-of-distribution uncertainty and no-free-lunch constraints. A worked example transports a fixed loss with density ratios. The lab simulates covariate shift, verifies weighted risk against target risk, and trains a domain classifier as a two-sample diagnostic. Production guidance versions source and target windows, monitors inputs, predictions and mature outcomes, defines abstention and rollback, and tests interventions before adaptation. A model cannot be proven robust to arbitrary unseen shifts; useful guarantees require specifying which mechanisms may change and where target support overlaps training evidence.",
      "prerequisites": [
        "empirical-risk-minimization",
        "monte-carlo"
      ],
      "learningObjectives": [
        "Distinguish covariate, label, conditional, subpopulation, temporal and policy-induced shifts by factorization.",
        "Estimate target risk with importance weights when invariant mechanisms and support conditions justify it.",
        "Compare recalibration, reweighting, adaptation, robust optimization, invariance and retraining strategies.",
        "Design shift detection, mature-label evaluation, safe fallback, governance and feedback-aware monitoring."
      ],
      "editorial": {
        "status": "verified",
        "verifiedOn": "2026-08-21"
      },
      "status": "verified",
      "hasLab": true,
      "labGoal": "Estimate target risk under simulated covariate shift, compare density-ratio weighting, and use a domain classifier as an unlabeled drift diagnostic.",
      "visualCount": 2,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Shift mechanisms"
        },
        {
          "type": "flow",
          "title": "Shift response loop"
        }
      ],
      "followUpQuestions": [
        "How do covariate and concept shift differ?",
        "Why report effective sample size?",
        "Can unlabeled target data prove performance is stable?"
      ],
      "estimatedMinutes": 10
    },
    {
      "slug": "association-rules",
      "title": "Frequent Itemsets & Association Rules",
      "module": "data-mining",
      "priority": "medium",
      "roles": [
        "ds",
        "de",
        "as"
      ],
      "interviewAnswer": "Association-rule mining finds frequent item combinations and rules A→B. Support measures frequency, confidence estimates P(B|A), and lift compares the rule with B’s baseline rate.",
      "keyPoints": [
        "Support",
        "Confidence",
        "Lift",
        "Apriori pruning"
      ],
      "resources": [
        "stanford-cs246"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Apriori vs FP-Growth?",
        "Why is support anti-monotonic?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "minhash-jaccard",
      "title": "MinHash & Jaccard Similarity",
      "module": "data-mining",
      "priority": "medium",
      "roles": [
        "de",
        "ds",
        "mle"
      ],
      "interviewAnswer": "MinHash creates compact signatures whose collision probability equals Jaccard similarity, allowing approximate set similarity at scale.",
      "keyPoints": [
        "Set similarity",
        "Signatures",
        "Collision probability",
        "Near duplicates"
      ],
      "resources": [
        "stanford-cs246"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "How does MinHash connect to LSH?",
        "How many hashes are enough?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "locality-sensitive-hashing",
      "title": "Locality-Sensitive Hashing (LSH)",
      "module": "data-mining",
      "priority": "high",
      "roles": [
        "de",
        "mle",
        "ds",
        "as"
      ],
      "interviewAnswer": "LSH intentionally hashes similar items into the same buckets with high probability, reducing candidates for approximate similarity or nearest-neighbor search.",
      "keyPoints": [
        "Approximate search",
        "Hash family",
        "Candidate generation",
        "Recall-speed trade-off"
      ],
      "resources": [
        "stanford-cs246"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "LSH vs HNSW?",
        "How do bands affect recall?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "bloom-filter",
      "title": "Bloom Filters",
      "module": "data-mining",
      "priority": "medium",
      "roles": [
        "de",
        "mle"
      ],
      "interviewAnswer": "A Bloom filter is a compact probabilistic set-membership structure: it can return false positives but not false negatives under normal insert/query use.",
      "keyPoints": [
        "Bit array",
        "Multiple hashes",
        "False positives",
        "Memory efficiency"
      ],
      "resources": [
        "stanford-cs246"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "How do k and array size affect false positives?",
        "Counting Bloom filter?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "count-min-sketch",
      "title": "Count-Min Sketch & Heavy Hitters",
      "module": "data-mining",
      "priority": "medium",
      "roles": [
        "de",
        "ds",
        "mle"
      ],
      "interviewAnswer": "Count-Min Sketch approximates frequencies in streams with multiple hash tables; queries take the minimum counter and overestimate nonnegative frequencies within probabilistic error bounds.",
      "keyPoints": [
        "Streaming counts",
        "Sublinear memory",
        "Collisions",
        "Heavy hitters"
      ],
      "resources": [
        "stanford-cs246"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "How do you recover heavy-hitter keys?",
        "Count-Min vs hash map?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "hyperloglog",
      "title": "HyperLogLog & Distinct Counting",
      "module": "data-mining",
      "priority": "medium",
      "roles": [
        "de",
        "ds"
      ],
      "interviewAnswer": "HyperLogLog estimates the number of distinct elements from hashed leading-zero statistics, giving low relative error with very small memory and easy merging.",
      "keyPoints": [
        "Cardinality",
        "Registers",
        "Hashing",
        "Mergeability"
      ],
      "resources": [
        "stanford-cs246"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Why is HLL mergeable?",
        "How does memory affect error?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "pagerank-link-analysis",
      "title": "PageRank & Link Analysis",
      "module": "data-mining",
      "priority": "medium",
      "roles": [
        "ds",
        "de",
        "as",
        "mle"
      ],
      "interviewAnswer": "PageRank scores nodes by the stationary distribution of a random walk with teleportation: links from important nodes contribute more than raw in-degree alone.",
      "keyPoints": [
        "Random walk",
        "Stationary distribution",
        "Teleportation",
        "Power iteration"
      ],
      "resources": [
        "stanford-cs246",
        "stanford-cs224w"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "PageRank vs HITS?",
        "How does damping affect ranking?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "vector-raster-spatial-data",
      "title": "Vector vs Raster Spatial Data",
      "module": "geospatial",
      "priority": "high",
      "roles": [
        "ds",
        "de",
        "as"
      ],
      "interviewAnswer": "Vector data represents discrete geometry as points, lines and polygons; raster data represents space as a grid of cells. The correct representation depends on the phenomenon and operations.",
      "keyPoints": [
        "Points/lines/polygons",
        "Raster grids",
        "Resolution",
        "Geometry attributes"
      ],
      "resources": [
        "geopandas-docs",
        "geodata-science-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "compare",
          "title": "Vector and raster representations"
        }
      ],
      "followUpQuestions": [
        "When would you rasterize polygons?",
        "How do vector indexes work?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "crs-projections",
      "title": "Coordinate Reference Systems & Projections",
      "module": "geospatial",
      "priority": "high",
      "roles": [
        "ds",
        "de",
        "as"
      ],
      "interviewAnswer": "A CRS defines how coordinates map to Earth. Longitude/latitude is angular; projected CRSs map locations to a plane for meaningful distance/area calculations over a suitable region.",
      "keyPoints": [
        "CRS/EPSG",
        "Geographic vs projected",
        "Distance",
        "Distortion"
      ],
      "resources": [
        "geopandas-docs",
        "geodata-science-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What is EPSG:4326?",
        "Which projection for area?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "spatial-joins",
      "title": "Spatial Joins & Predicates",
      "module": "geospatial",
      "priority": "high",
      "roles": [
        "ds",
        "de",
        "as"
      ],
      "interviewAnswer": "A spatial join combines rows based on geometric relations such as within, contains, intersects or nearest instead of equality on a key.",
      "keyPoints": [
        "Point-in-polygon",
        "Within/contains",
        "Nearest",
        "CRS alignment"
      ],
      "resources": [
        "geopandas-docs",
        "geodata-science-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "sjoin vs nearest?",
        "How do indexes accelerate joins?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "spatial-indexing",
      "title": "Spatial Indexes, Geohash & H3",
      "module": "geospatial",
      "priority": "medium",
      "roles": [
        "de",
        "ds",
        "mle"
      ],
      "interviewAnswer": "Spatial indexes reduce expensive geometry comparisons by pruning candidates. R-trees organize bounding boxes; hierarchical grids such as geohash/H3 encode locations into cells.",
      "keyPoints": [
        "R-tree",
        "Bounding boxes",
        "Hierarchical grids",
        "Candidate pruning"
      ],
      "resources": [
        "geopandas-docs",
        "geodata-science-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "R-tree vs H3?",
        "How does indexing help kNN?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "spatial-distance",
      "title": "Geodesic Distance & Spatial kNN",
      "module": "geospatial",
      "priority": "medium",
      "roles": [
        "ds",
        "de",
        "as"
      ],
      "interviewAnswer": "Global spatial distance should respect Earth geometry or use an appropriate projection; raw Euclidean distance on latitude/longitude can be misleading.",
      "keyPoints": [
        "Geodesic/Haversine",
        "Projected distance",
        "Spatial kNN",
        "Business distance"
      ],
      "resources": [
        "geopandas-docs",
        "geodata-science-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Geodesic vs routing distance?",
        "How would you accelerate spatial kNN?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "spatial-autocorrelation",
      "title": "Spatial Autocorrelation & Moran’s I",
      "module": "geospatial",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Spatial autocorrelation asks whether nearby observations are more similar than expected. Moran’s I is a common global measure; local indicators identify spatial clusters/outliers.",
      "keyPoints": [
        "Spatial weights",
        "Moran’s I",
        "LISA",
        "Dependence"
      ],
      "resources": [
        "pysal",
        "geodata-science-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Global vs local Moran?",
        "Effect on regression?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "spatial-validation",
      "title": "Spatial Cross-Validation & Geographic Leakage",
      "module": "geospatial",
      "priority": "high",
      "roles": [
        "ds",
        "as",
        "mle"
      ],
      "interviewAnswer": "Random splits can overestimate geospatial model performance because nearby samples are correlated; spatial blocking or leave-region-out validation better measures transfer to new areas.",
      "keyPoints": [
        "Spatial leakage",
        "Blocked CV",
        "Leave-region-out",
        "Deployment geography"
      ],
      "resources": [
        "geodata-science-book",
        "pysal",
        "google-rules-ml"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "map",
          "title": "Spatial validation holds out coherent regions"
        }
      ],
      "followUpQuestions": [
        "How choose block size?",
        "Spatial vs temporal leakage?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "causal-masks",
      "title": "Causal Masks vs Bidirectional Attention",
      "module": "transformers",
      "priority": "high",
      "roles": [
        "aie",
        "mle",
        "as"
      ],
      "interviewAnswer": "Causal masks prevent tokens from attending to future positions for autoregressive next-token prediction; bidirectional encoders can attend to both sides under different objectives.",
      "keyPoints": [
        "Causal mask",
        "Bidirectional context",
        "Triangular mask",
        "No future leakage"
      ],
      "resources": [
        "stanford-cs224n",
        "stanford-cs336",
        "hf-llm"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "How does BERT differ?",
        "How does masking interact with KV cache?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "cross-attention",
      "title": "Cross-Attention",
      "module": "transformers",
      "priority": "high",
      "roles": [
        "aie",
        "mle",
        "as"
      ],
      "interviewAnswer": "Cross-attention uses queries from one sequence and keys/values from another, letting one representation retrieve information from a different encoder or modality.",
      "keyPoints": [
        "Different Q vs K/V source",
        "Encoder-decoder",
        "Multimodal conditioning",
        "Diffusion conditioning"
      ],
      "resources": [
        "stanford-cs224n",
        "stanford-cs25",
        "hf-llm"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Cross-attention vs concatenation?",
        "Where does diffusion use it?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "rope-positional",
      "title": "RoPE & Modern Positional Encoding",
      "module": "transformers",
      "priority": "medium",
      "roles": [
        "aie",
        "mle",
        "as"
      ],
      "interviewAnswer": "RoPE rotates query/key feature pairs according to token position so relative position affects attention scores without simply adding a fixed position vector.",
      "keyPoints": [
        "Rotary embeddings",
        "Relative position",
        "Q/K rotation",
        "Context extension"
      ],
      "resources": [
        "stanford-cs336",
        "hf-llm",
        "stanford-cs25"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "RoPE vs ALiBi?",
        "Why Q/K rather than V?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "mixture-of-experts",
      "title": "Mixture-of-Experts Transformers",
      "module": "transformers",
      "priority": "medium",
      "roles": [
        "aie",
        "mle",
        "as"
      ],
      "interviewAnswer": "MoE layers route each token to a small subset of expert feed-forward networks, increasing total model capacity without activating all parameters per token.",
      "keyPoints": [
        "Sparse routing",
        "Experts",
        "Load balancing",
        "Communication cost"
      ],
      "resources": [
        "stanford-cs336",
        "stanford-cs25"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Dense vs MoE inference cost?",
        "What is expert collapse?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "llm-training-lifecycle",
      "title": "LLM Training Lifecycle: Pretraining → SFT → Preference Tuning",
      "module": "transformers",
      "priority": "high",
      "roles": [
        "aie",
        "mle",
        "as"
      ],
      "interviewAnswer": "Modern LLM development commonly starts with next-token pretraining, then supervised instruction fine-tuning, and may add preference optimization such as RLHF or DPO. Each stage serves a different purpose.",
      "keyPoints": [
        "Pretraining",
        "SFT",
        "Preference data",
        "Alignment/evaluation"
      ],
      "resources": [
        "stanford-cs336",
        "hf-llm",
        "stanford-cs25"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "SFT vs continued pretraining?",
        "RLHF vs DPO?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "topic-modeling-lda",
      "title": "Topic Modeling & LDA",
      "module": "nlp",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Latent Dirichlet Allocation is a probabilistic topic model where documents are mixtures of latent topics and topics are distributions over words.",
      "keyPoints": [
        "Document-topic mixture",
        "Topic-word distribution",
        "Latent variables",
        "Bag-of-words"
      ],
      "resources": [
        "probml-book",
        "stanford-cs229"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "How choose number of topics?",
        "LDA vs embedding clustering?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "text-classification-finetuning",
      "title": "Text Classification & Encoder Fine-tuning",
      "module": "nlp",
      "priority": "high",
      "roles": [
        "ds",
        "mle",
        "aie"
      ],
      "interviewAnswer": "A pretrained text encoder can be fine-tuned with a classification head or used as a frozen embedding extractor. Fine-tuning adapts more strongly but costs more and can overfit small data.",
      "keyPoints": [
        "Encoder representation",
        "Classification head",
        "Frozen vs fine-tuned",
        "Metrics"
      ],
      "resources": [
        "stanford-cs224n",
        "hf-llm"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Fine-tune vs embeddings + linear model?",
        "Which metric for imbalance?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "feature-stores",
      "title": "Feature Stores: Offline vs Online",
      "module": "mlops",
      "priority": "high",
      "roles": [
        "mle",
        "de",
        "ds",
        "aie"
      ],
      "interviewAnswer": "A feature store manages reusable feature definitions and provides historical point-in-time-correct features for training plus fresh low-latency values for online inference.",
      "keyPoints": [
        "Offline store",
        "Online store",
        "Point-in-time joins",
        "Materialization"
      ],
      "resources": [
        "feast",
        "stanford-cs329s",
        "google-rules-ml"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 1,
      "visualSummaries": [
        {
          "type": "flow",
          "title": "Offline and online feature paths"
        }
      ],
      "followUpQuestions": [
        "When is a feature store overkill?",
        "Batch vs streaming features?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "training-serving-skew",
      "title": "Training–Serving Skew",
      "module": "mlops",
      "priority": "high",
      "roles": [
        "mle",
        "de",
        "ds",
        "aie"
      ],
      "interviewAnswer": "Training-serving skew occurs when feature or preprocessing semantics differ between offline training and live inference because of code, time, freshness or source differences.",
      "keyPoints": [
        "Code skew",
        "Time skew",
        "Data skew",
        "Shared transformations"
      ],
      "resources": [
        "feast",
        "google-rules-ml",
        "stanford-cs329s"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "How test offline/online parity?",
        "How does point-in-time correctness help?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "ml-lineage-reproducibility",
      "title": "Data, Model & Experiment Lineage",
      "module": "mlops",
      "priority": "high",
      "roles": [
        "mle",
        "de",
        "ds",
        "aie"
      ],
      "interviewAnswer": "ML lineage records which data snapshot, feature definitions, code commit, configuration, environment and artifact produced a model version so it can be reproduced and audited.",
      "keyPoints": [
        "Data version",
        "Code/config",
        "Environment",
        "Artifact provenance"
      ],
      "resources": [
        "stanford-cs329s",
        "made-with-ml",
        "fsdl"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What belongs in a model registry?",
        "How do containers help?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "ml-testing-quality-gates",
      "title": "ML Testing & Quality Gates",
      "module": "mlops",
      "priority": "high",
      "roles": [
        "mle",
        "de",
        "ds",
        "aie"
      ],
      "interviewAnswer": "ML systems need software tests plus data/model checks such as schema invariants, leakage tests, slice metrics, baseline comparison, latency bounds and deployment gates.",
      "keyPoints": [
        "Unit/integration tests",
        "Data tests",
        "Model gates",
        "Critical slices"
      ],
      "resources": [
        "google-rules-ml",
        "stanford-cs329s",
        "made-with-ml"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Unit vs integration tests?",
        "How test nondeterministic training?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "kernel-methods",
      "title": "Kernel Methods & the Kernel Trick",
      "module": "ml",
      "priority": "high",
      "roles": [
        "ds",
        "as",
        "mle"
      ],
      "interviewAnswer": "Kernel methods replace an explicit nonlinear feature map with a kernel that computes inner products in that feature space, enabling algorithms such as SVMs to learn nonlinear boundaries without materializing all transformed features.",
      "keyPoints": [
        "Positive-semidefinite kernels",
        "Implicit feature maps",
        "RBF/polynomial kernels",
        "Similarity"
      ],
      "resources": [
        "stanford-cs229"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "What makes a kernel valid?",
        "RBF vs polynomial?",
        "Why do kernel methods scale poorly with n?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "perceptron-online-learning",
      "title": "Perceptron & Online Learning",
      "module": "ml",
      "priority": "medium",
      "roles": [
        "ds",
        "mle",
        "as"
      ],
      "interviewAnswer": "The perceptron is an online linear classifier that updates weights only when an example is misclassified. Under linear separability it has a finite mistake bound tied to the margin.",
      "keyPoints": [
        "Online updates",
        "Linear classifier",
        "Mistake-driven learning",
        "Margin"
      ],
      "resources": [
        "stanford-cs229"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Perceptron vs logistic regression?",
        "What is the mistake bound?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "factor-analysis",
      "title": "Factor Analysis",
      "module": "unsupervised",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "Factor analysis models observed variables as linear combinations of a smaller number of latent factors plus variable-specific noise, focusing on shared covariance structure.",
      "keyPoints": [
        "Latent factors",
        "Shared covariance",
        "Specific noise",
        "Probabilistic model"
      ],
      "resources": [
        "stanford-cs229",
        "probml-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Factor analysis vs PCA?",
        "What is factor rotation?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "independent-component-analysis",
      "title": "Independent Component Analysis (ICA)",
      "module": "unsupervised",
      "priority": "medium",
      "roles": [
        "ds",
        "as"
      ],
      "interviewAnswer": "ICA decomposes observed mixtures into latent components that are statistically independent, typically relying on non-Gaussianity; unlike PCA, the objective is independence rather than just uncorrelated variance directions.",
      "keyPoints": [
        "Source separation",
        "Independence",
        "Non-Gaussianity",
        "Whitening"
      ],
      "resources": [
        "stanford-cs229",
        "probml-book"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "ICA vs PCA?",
        "Why is non-Gaussianity important?"
      ],
      "estimatedMinutes": 1
    },
    {
      "slug": "time-series-foundation-models",
      "title": "Time-Series Foundation Models",
      "module": "time-series",
      "priority": "medium",
      "roles": [
        "ds",
        "as",
        "mle",
        "aie"
      ],
      "interviewAnswer": "Time-series foundation models pretrain on large collections of sequences and adapt or zero-shot forecast new series. They can reduce per-series modeling work, but still need comparison with strong naive/statistical baselines and careful domain-shift evaluation.",
      "keyPoints": [
        "Pretraining across series",
        "Zero/few-shot forecasting",
        "Probabilistic outputs",
        "Baseline discipline"
      ],
      "resources": [
        "stanford-cs229",
        "fpp3"
      ],
      "featured": false,
      "editorial": {
        "status": "summary"
      },
      "status": "summary",
      "hasLab": false,
      "labGoal": "",
      "visualCount": 0,
      "visualSummaries": [],
      "followUpQuestions": [
        "Global model vs local model?",
        "How would you fine-tune without leakage?"
      ],
      "estimatedMinutes": 1
    }
  ],
  "resources": {
    "mit-linear-algebra": {
      "title": "MIT 18.06 Linear Algebra — Gilbert Strang",
      "provider": "MIT OpenCourseWare",
      "url": "https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/",
      "kind": "Primary course",
      "why": "A rigorous, application-oriented linear algebra course with complete lectures, notes, problems and solutions.",
      "level": "Foundation"
    },
    "3b1b-linear-algebra": {
      "title": "Essence of Linear Algebra",
      "provider": "3Blue1Brown",
      "url": "https://www.3blue1brown.com/topics/linear-algebra",
      "kind": "Visual intuition",
      "why": "Exceptional geometric intuition for vectors, matrices, determinants, eigenvectors and change of basis.",
      "level": "Foundation"
    },
    "harvard-stat110": {
      "title": "Statistics 110: Probability",
      "provider": "Harvard University — Joe Blitzstein",
      "url": "https://stat110.hsites.harvard.edu/",
      "kind": "Primary course",
      "why": "One of the strongest free probability courses, with lectures, exercises and a free companion book.",
      "level": "Foundation → Advanced"
    },
    "statquest": {
      "title": "StatQuest Video Index",
      "provider": "StatQuest — Josh Starmer",
      "url": "https://statquest.org/video_index.html",
      "kind": "Intuition / interview review",
      "why": "Clear explanations of statistics, ML, neural networks, optimization and evaluation; excellent for quick conceptual refresh.",
      "level": "Foundation → Intermediate"
    },
    "stanford-cs229": {
      "title": "CS229: Machine Learning",
      "provider": "Stanford University",
      "url": "https://cs229.stanford.edu/",
      "kind": "Primary course",
      "why": "Canonical mathematical ML course covering supervised learning, unsupervised learning, learning theory and practical model reasoning.",
      "level": "Intermediate → Advanced"
    },
    "google-mlcc": {
      "title": "Machine Learning Crash Course",
      "provider": "Google for Developers",
      "url": "https://developers.google.com/machine-learning/crash-course",
      "kind": "Official practical course",
      "why": "Concise, interactive treatment of regression, classification, embeddings, data, overfitting and production ML concepts.",
      "level": "Foundation → Intermediate"
    },
    "campusx": {
      "title": "CampusX — Data Science & ML Playlists",
      "provider": "CampusX",
      "url": "https://www.youtube.com/@campusx-official",
      "kind": "Long-form practical teaching",
      "why": "Strong step-by-step explanations, especially useful for ML, deep learning, data science, LangChain/LangGraph and interview revision.",
      "level": "Foundation → Intermediate"
    },
    "mit-6s191": {
      "title": "MIT 6.S191: Introduction to Deep Learning",
      "provider": "MIT",
      "url": "https://introtodeeplearning.com/",
      "kind": "Primary course",
      "why": "Current MIT deep-learning lectures and labs covering foundations, sequence models, vision and generative modeling.",
      "level": "Foundation → Intermediate"
    },
    "3b1b-neural": {
      "title": "Neural Networks Series",
      "provider": "3Blue1Brown",
      "url": "https://www.youtube.com/watch?v=aircAruvnKk",
      "kind": "Visual intuition",
      "why": "Excellent visual explanation of neural networks, gradient descent and backpropagation.",
      "level": "Foundation"
    },
    "stanford-cs231n": {
      "title": "CS231n: Deep Learning for Computer Vision",
      "provider": "Stanford University",
      "url": "https://cs231n.stanford.edu/",
      "kind": "Primary course",
      "why": "One of the definitive resources for CNNs, optimization, visual recognition, detection, segmentation and modern vision architectures.",
      "level": "Intermediate → Advanced"
    },
    "pytorch": {
      "title": "PyTorch Tutorials",
      "provider": "PyTorch",
      "url": "https://docs.pytorch.org/tutorials/",
      "kind": "Official documentation",
      "why": "Authoritative practical reference for training loops, autograd, distributed training, optimization and deployment.",
      "level": "Foundation → Advanced"
    },
    "sklearn": {
      "title": "scikit-learn User Guide",
      "provider": "scikit-learn",
      "url": "https://scikit-learn.org/stable/user_guide.html",
      "kind": "Official documentation",
      "why": "Best reference for classical ML algorithms, preprocessing, model selection, metrics and pipelines.",
      "level": "Foundation → Advanced"
    },
    "stanford-cs224n": {
      "title": "CS224N: NLP with Deep Learning",
      "provider": "Stanford University",
      "url": "https://web.stanford.edu/class/cs224n/",
      "kind": "Primary course",
      "why": "Canonical NLP/deep-learning course covering embeddings, attention, transformers and modern language modeling.",
      "level": "Intermediate → Advanced"
    },
    "stanford-cs25": {
      "title": "CS25: Transformers United",
      "provider": "Stanford University",
      "url": "https://www.youtube.com/watch?v=P127jhj-8-Y",
      "kind": "Expert seminar / intuition",
      "why": "Concise transformer overview plus seminars from researchers working at the frontier of transformer systems.",
      "level": "Intermediate → Advanced"
    },
    "stanford-cs336": {
      "title": "CS336: Language Modeling from Scratch",
      "provider": "Stanford University",
      "url": "https://cs336.stanford.edu/",
      "kind": "Primary course",
      "why": "Deep modern treatment of tokenization, transformers, training data, systems, scaling, alignment and language-model evaluation.",
      "level": "Advanced"
    },
    "hf-llm": {
      "title": "The Hugging Face LLM Course",
      "provider": "Hugging Face",
      "url": "https://huggingface.co/learn/llm-course/chapter1/1",
      "kind": "Official practical course",
      "why": "Hands-on transformers, tokenizers, fine-tuning, datasets, inference and ecosystem tooling.",
      "level": "Intermediate"
    },
    "hf-agents": {
      "title": "Hugging Face Agents Course",
      "provider": "Hugging Face",
      "url": "https://huggingface.co/learn/agents-course/unit0/introduction",
      "kind": "Official practical course",
      "why": "Practical foundations of agents, tools, reasoning loops and modern agent frameworks.",
      "level": "Intermediate"
    },
    "langchain-academy": {
      "title": "LangChain Academy",
      "provider": "LangChain",
      "url": "https://academy.langchain.com/",
      "kind": "Official practical course",
      "why": "Current hands-on learning for LangGraph, agents, state, memory and production-oriented agent workflows.",
      "level": "Intermediate"
    },
    "openai-cookbook": {
      "title": "OpenAI Cookbook",
      "provider": "OpenAI",
      "url": "https://cookbook.openai.com/",
      "kind": "Official implementation reference",
      "why": "Practical examples for embeddings, retrieval, evaluation, structured outputs, tool use and LLM application engineering.",
      "level": "Intermediate → Advanced"
    },
    "anthropic-prompting": {
      "title": "Prompt Engineering Overview",
      "provider": "Anthropic",
      "url": "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
      "kind": "Official documentation",
      "why": "A structured approach to prompt design, testing and reliability from a frontier-model provider.",
      "level": "Intermediate"
    },
    "fsdl": {
      "title": "Full Stack Deep Learning",
      "provider": "Full Stack Deep Learning",
      "url": "https://fullstackdeeplearning.com/course/2022/",
      "kind": "Production ML course",
      "why": "Excellent end-to-end material on tooling, testing, deployment, monitoring, continual learning, foundation models and ML teams.",
      "level": "Intermediate → Advanced"
    },
    "made-with-ml": {
      "title": "MLOps Course",
      "provider": "Made With ML — Goku Mohandas",
      "url": "https://madewithml.com/courses/mlops/",
      "kind": "Production ML course",
      "why": "Strong practical curriculum spanning design, data, training, serving, testing, versioning, CI/CD and monitoring.",
      "level": "Intermediate → Advanced"
    },
    "stanford-cs329s": {
      "title": "CS329S: Machine Learning Systems Design",
      "provider": "Stanford University — Chip Huyen",
      "url": "https://stanford-cs329s.github.io/",
      "kind": "Primary systems course",
      "why": "Systematic framework for building deployable, reliable and scalable ML systems, including data, deployment, monitoring and trade-offs.",
      "level": "Intermediate → Advanced"
    },
    "docker": {
      "title": "Docker Get Started",
      "provider": "Docker",
      "url": "https://docs.docker.com/get-started/",
      "kind": "Official documentation",
      "why": "Authoritative foundation for images, containers, Dockerfiles, registries, Compose and deployment concepts.",
      "level": "Foundation → Intermediate"
    },
    "kubernetes": {
      "title": "Kubernetes Basics",
      "provider": "Kubernetes",
      "url": "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
      "kind": "Official documentation",
      "why": "Core concepts for deploying, scaling, updating and debugging containerized applications.",
      "level": "Intermediate"
    },
    "confluent-kafka": {
      "title": "Apache Kafka Courses",
      "provider": "Confluent Developer",
      "url": "https://developer.confluent.io/courses/apache-kafka/",
      "kind": "Official ecosystem course",
      "why": "Clear hands-on material on brokers, topics, partitions, producers, consumers, delivery semantics and event streaming.",
      "level": "Foundation → Intermediate"
    },
    "flink": {
      "title": "Learn Flink",
      "provider": "Apache Flink",
      "url": "https://nightlies.apache.org/flink/flink-docs-stable/docs/learn-flink/overview/",
      "kind": "Official documentation",
      "why": "Authoritative explanation of stateful stream processing, event time, windows and Flink application concepts.",
      "level": "Intermediate"
    },
    "spark": {
      "title": "Apache Spark Documentation",
      "provider": "Apache Spark",
      "url": "https://spark.apache.org/docs/latest/",
      "kind": "Official documentation",
      "why": "Authoritative reference for Spark SQL, DataFrames, distributed processing, streaming and cluster execution.",
      "level": "Intermediate"
    },
    "aws-sagemaker": {
      "title": "Amazon SageMaker AI Developer Guide",
      "provider": "AWS",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html",
      "kind": "Official cloud documentation",
      "why": "Primary reference for training, model registry, deployment, endpoints, batch inference and monitoring on AWS.",
      "level": "Intermediate"
    },
    "aws-ml": {
      "title": "AWS Skill Builder — Machine Learning",
      "provider": "AWS",
      "url": "https://skillbuilder.aws/",
      "kind": "Official cloud learning",
      "why": "Structured AWS learning paths for ML, GenAI and cloud architecture.",
      "level": "Foundation → Advanced"
    },
    "azure-ml": {
      "title": "Azure Machine Learning Documentation",
      "provider": "Microsoft Learn",
      "url": "https://learn.microsoft.com/en-us/azure/machine-learning/",
      "kind": "Official cloud documentation",
      "why": "Primary reference for Azure ML workspaces, training, registries, endpoints and MLOps.",
      "level": "Intermediate"
    },
    "postgres": {
      "title": "PostgreSQL Documentation",
      "provider": "PostgreSQL",
      "url": "https://www.postgresql.org/docs/current/tutorial-sql.html",
      "kind": "Official SQL reference",
      "why": "Reliable source for SQL fundamentals, joins, aggregations, subqueries and transactions.",
      "level": "Foundation → Intermediate"
    },
    "python-docs": {
      "title": "Python Tutorial & Library Reference",
      "provider": "Python",
      "url": "https://docs.python.org/3/tutorial/",
      "kind": "Official documentation",
      "why": "Authoritative reference for Python language semantics, data structures, functions, classes, iterators and exceptions.",
      "level": "Foundation → Advanced"
    },
    "numpy": {
      "title": "NumPy User Guide",
      "provider": "NumPy",
      "url": "https://numpy.org/doc/stable/user/",
      "kind": "Official documentation",
      "why": "Authoritative reference for arrays, broadcasting, vectorization, indexing, linear algebra and numerical computation.",
      "level": "Foundation → Advanced"
    },
    "pandas": {
      "title": "pandas User Guide",
      "provider": "pandas",
      "url": "https://pandas.pydata.org/docs/user_guide/",
      "kind": "Official documentation",
      "why": "Authoritative guide for tabular data loading, joins, grouping, missing values, time series and performance.",
      "level": "Foundation → Advanced"
    },
    "isl": {
      "title": "An Introduction to Statistical Learning (Python/R editions)",
      "provider": "Stanford authors — James, Witten, Hastie, Tibshirani, Taylor",
      "url": "https://www.statlearning.com/",
      "kind": "Free university textbook + labs",
      "why": "Excellent bridge from statistical foundations to practical regression, classification, resampling, trees, SVMs, unsupervised learning and modern topics, with Python labs.",
      "level": "Foundation → Intermediate"
    },
    "deep-learning-book": {
      "title": "Deep Learning",
      "provider": "Goodfellow, Bengio & Courville — MIT Press",
      "url": "https://www.deeplearningbook.org/",
      "kind": "Canonical free online textbook",
      "why": "Foundational reference for linear algebra, probability, optimization, feed-forward networks, regularization, convolution, sequence models and generative modeling.",
      "level": "Intermediate → Advanced"
    },
    "d2l": {
      "title": "Dive into Deep Learning",
      "provider": "Zhang, Lipton, Li & Smola",
      "url": "https://d2l.ai/",
      "kind": "Interactive textbook with code",
      "why": "High-quality explanations that pair mathematics with executable PyTorch/JAX/TensorFlow implementations across deep learning, attention, vision and optimization.",
      "level": "Foundation → Advanced"
    },
    "stanford-cs224w": {
      "title": "CS224W — Machine Learning with Graphs",
      "provider": "Stanford University — Jure Leskovec et al.",
      "url": "https://web.stanford.edu/class/cs224w/",
      "kind": "University course",
      "why": "Top-tier course for graph representation learning, GNNs, heterogeneous graphs, link prediction and knowledge graphs.",
      "level": "Intermediate → Advanced"
    },
    "google-rules-ml": {
      "title": "Rules of Machine Learning",
      "provider": "Google — Martin Zinkevich",
      "url": "https://developers.google.com/machine-learning/guides/rules-of-ml",
      "kind": "Production ML engineering guide",
      "why": "Canonical practical guidance on first pipelines, metrics, training-serving skew, testing, launch iteration and avoiding unnecessary complexity.",
      "level": "Intermediate → Advanced"
    },
    "hf-diffusion": {
      "title": "Hugging Face Diffusion Models Course",
      "provider": "Hugging Face",
      "url": "https://huggingface.co/learn/diffusion-course/en/unit0/1",
      "kind": "Hands-on official course",
      "why": "Strong practical course covering diffusion from scratch, Diffusers, guidance/conditioning and Stable Diffusion with notebooks.",
      "level": "Intermediate → Advanced"
    },
    "paper-attention": {
      "title": "Attention Is All You Need",
      "provider": "Vaswani et al.",
      "url": "https://arxiv.org/abs/1706.03762",
      "kind": "Original paper",
      "why": "Primary source for the Transformer architecture and scaled dot-product multi-head attention.",
      "level": "Advanced"
    },
    "paper-resnet": {
      "title": "Deep Residual Learning for Image Recognition",
      "provider": "He et al.",
      "url": "https://arxiv.org/abs/1512.03385",
      "kind": "Original paper",
      "why": "Primary source for residual networks and identity skip connections.",
      "level": "Intermediate → Advanced"
    },
    "paper-unet": {
      "title": "U-Net: Convolutional Networks for Biomedical Image Segmentation",
      "provider": "Ronneberger, Fischer & Brox",
      "url": "https://arxiv.org/abs/1505.04597",
      "kind": "Original paper",
      "why": "Canonical encoder–decoder segmentation architecture with skip connections.",
      "level": "Intermediate"
    },
    "paper-graphsage": {
      "title": "Inductive Representation Learning on Large Graphs",
      "provider": "Hamilton, Ying & Leskovec",
      "url": "https://arxiv.org/abs/1706.02216",
      "kind": "Original paper",
      "why": "Primary GraphSAGE paper explaining inductive neighborhood aggregation and unseen-node generalization.",
      "level": "Advanced"
    },
    "paper-cyclegan": {
      "title": "Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks",
      "provider": "Zhu, Park, Isola & Efros",
      "url": "https://arxiv.org/abs/1703.10593",
      "kind": "Original paper",
      "why": "Primary source for CycleGAN, adversarial domain mapping and cycle consistency without paired examples.",
      "level": "Advanced"
    },
    "paper-vqvae": {
      "title": "Neural Discrete Representation Learning",
      "provider": "van den Oord, Vinyals & Kavukcuoglu",
      "url": "https://arxiv.org/abs/1711.00937",
      "kind": "Original paper",
      "why": "Primary VQ-VAE paper introducing learned discrete latent representations with vector quantization.",
      "level": "Advanced"
    },
    "paper-vqgan": {
      "title": "Taming Transformers for High-Resolution Image Synthesis",
      "provider": "Esser, Rombach & Ommer",
      "url": "https://arxiv.org/abs/2012.09841",
      "kind": "Original paper",
      "why": "Canonical VQGAN-style work combining perceptual/adversarial compression with discrete visual tokens for high-resolution synthesis.",
      "level": "Advanced"
    },
    "paper-ddpm": {
      "title": "Denoising Diffusion Probabilistic Models",
      "provider": "Ho, Jain & Abbeel",
      "url": "https://arxiv.org/abs/2006.11239",
      "kind": "Original paper",
      "why": "Canonical DDPM paper for diffusion probabilistic image generation.",
      "level": "Advanced"
    },
    "paper-flow-matching": {
      "title": "Flow Matching for Generative Modeling",
      "provider": "Lipman et al.",
      "url": "https://arxiv.org/abs/2210.02747",
      "kind": "Original paper",
      "why": "Primary source for flow matching as simulation-free vector-field regression for continuous normalizing flows.",
      "level": "Advanced"
    },
    "paper-rag": {
      "title": "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
      "provider": "Lewis et al.",
      "url": "https://arxiv.org/abs/2005.11401",
      "kind": "Original paper",
      "why": "Foundational RAG paper combining parametric generation with retrieved non-parametric memory.",
      "level": "Advanced"
    },
    "paper-lora": {
      "title": "LoRA: Low-Rank Adaptation of Large Language Models",
      "provider": "Hu et al.",
      "url": "https://arxiv.org/abs/2106.09685",
      "kind": "Original paper",
      "why": "Primary source for parameter-efficient low-rank adaptation of pretrained language models.",
      "level": "Advanced"
    },
    "fpp3": {
      "title": "Forecasting: Principles and Practice (3rd ed.)",
      "provider": "Rob J Hyndman & George Athanasopoulos",
      "kind": "Canonical free online textbook",
      "why": "A rigorous, practical forecasting reference with real examples, diagnostics, accuracy measures and exercises.",
      "level": "Foundations → advanced",
      "url": "https://otexts.com/fpp3/"
    },
    "fpppy": {
      "title": "Forecasting: Principles and Practice, the Pythonic Way",
      "provider": "Hyndman et al.",
      "kind": "Free textbook with Python code",
      "why": "Python-first forecasting text with reproducible code, exercises, neural forecasting and foundation forecasting coverage.",
      "level": "Foundations → advanced",
      "url": "https://otexts.com/fpppy/"
    },
    "statsmodels-tsa": {
      "title": "statsmodels Time Series Analysis",
      "provider": "statsmodels",
      "kind": "Official documentation",
      "why": "Official reference for ARIMA/state-space, exponential smoothing, decomposition and forecasting APIs in Python.",
      "level": "Practical",
      "url": "https://www.statsmodels.org/stable/tsa"
    },
    "prophet-docs": {
      "title": "Prophet Documentation",
      "provider": "Prophet",
      "kind": "Official documentation",
      "why": "Official guide for decomposable trend/seasonality/holiday forecasting and diagnostics.",
      "level": "Practical",
      "url": "https://facebook.github.io/prophet/"
    },
    "causal-neal": {
      "title": "Introduction to Causal Inference from a Machine Learning Perspective",
      "provider": "Brady Neal",
      "kind": "University course",
      "why": "Clear causal-inference foundations written specifically from an ML perspective, with potential outcomes, DAGs and identification.",
      "level": "Foundations → advanced",
      "url": "https://www.bradyneal.com/causal-inference-course"
    },
    "causal-mixtape": {
      "title": "Causal Inference: The Mixtape",
      "provider": "Scott Cunningham",
      "kind": "Free online textbook",
      "why": "Applied causal inference with DAGs, potential outcomes and quasi-experimental designs backed by worked examples.",
      "level": "Intermediate",
      "url": "https://mixtape.scunning.com/"
    },
    "pytorch-performance": {
      "title": "PyTorch Performance Tuning Guide",
      "provider": "PyTorch",
      "kind": "Official implementation reference",
      "why": "Concrete optimization practices for CPU/GPU training and inference, profiling, compilation and memory-aware execution.",
      "level": "Practical → advanced",
      "url": "https://docs.pytorch.org/tutorials/recipes/recipes/tuning_guide.html"
    },
    "hf-inference-opt": {
      "title": "Optimizing LLM Inference",
      "provider": "Hugging Face",
      "kind": "Official documentation",
      "why": "Covers KV cache, memory pressure, quantization and serving-oriented LLM inference optimizations.",
      "level": "Intermediate → advanced",
      "url": "https://huggingface.co/docs/transformers/main/llm_optims"
    },
    "tensorrt-performance": {
      "title": "Torch-TensorRT Performance Tuning",
      "provider": "PyTorch / NVIDIA",
      "kind": "Official documentation",
      "why": "Practical guide to compilation, warmup, benchmarking and extracting real GPU inference speedups.",
      "level": "Advanced",
      "url": "https://docs.pytorch.org/TensorRT/user_guide/performance_tuning.html"
    },
    "owasp-llm": {
      "title": "OWASP Top 10 for LLM Applications",
      "provider": "OWASP GenAI Security Project",
      "kind": "Security standard / guide",
      "why": "Canonical application-security threat model for prompt injection, insecure output handling, data leakage and other LLM risks.",
      "level": "Practical",
      "url": "https://genai.owasp.org/llm-top-10/"
    },
    "nist-ai-rmf": {
      "title": "NIST AI Risk Management Framework",
      "provider": "NIST",
      "kind": "Risk-management framework",
      "why": "A vendor-neutral framework for governing, measuring and managing AI risk across the lifecycle.",
      "level": "Practical → governance",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    },
    "mitre-atlas": {
      "title": "MITRE ATLAS",
      "provider": "MITRE",
      "kind": "AI threat knowledge base",
      "why": "Living knowledge base of adversarial tactics and techniques against AI-enabled systems; useful for threat modeling and red teaming.",
      "level": "Intermediate → advanced",
      "url": "https://atlas.mitre.org/"
    },
    "stanford-cs234": {
      "title": "CS234: Reinforcement Learning",
      "provider": "Stanford University",
      "url": "https://web.stanford.edu/class/cs234/",
      "kind": "Primary course",
      "why": "Current Stanford introduction to reinforcement learning covering value-based methods, policy methods, exploration and generalization.",
      "level": "Intermediate → Advanced"
    },
    "berkeley-cs285": {
      "title": "CS 285: Deep Reinforcement Learning",
      "provider": "UC Berkeley — Sergey Levine",
      "url": "https://rail.eecs.berkeley.edu/deeprlcourse/",
      "kind": "Primary course",
      "why": "Deep treatment of policy gradients, actor-critic, Q-learning, model-based RL, exploration, offline RL and modern applications.",
      "level": "Intermediate → Advanced"
    },
    "hf-deep-rl": {
      "title": "Deep Reinforcement Learning Course",
      "provider": "Hugging Face",
      "url": "https://huggingface.co/learn/deep-rl-course/en/unit0/introduction",
      "kind": "Hands-on course",
      "why": "Strong theory-plus-practice path through Q-learning, DQN, policy gradients, actor-critic and PPO with runnable exercises.",
      "level": "Foundation → Intermediate"
    },
    "deepmind-rl-youtube": {
      "title": "Reinforcement Learning Course — David Silver",
      "provider": "Google DeepMind",
      "url": "https://www.youtube.com/watch?v=2pWv7GOvuf0",
      "kind": "Video lecture series",
      "why": "Classic lecture series with unusually clear explanations of MDPs, value functions, dynamic programming, model-free methods and policy learning.",
      "level": "Foundation → Advanced"
    },
    "openai-spinning-up": {
      "title": "Spinning Up in Deep RL",
      "provider": "OpenAI",
      "url": "https://spinningup.openai.com/",
      "kind": "Reference + implementations",
      "why": "Compact conceptual guide and reference implementations for important policy-gradient and actor-critic algorithms.",
      "level": "Intermediate"
    },
    "clip-paper": {
      "title": "Learning Transferable Visual Models From Natural Language Supervision (CLIP)",
      "provider": "OpenAI / arXiv",
      "url": "https://arxiv.org/abs/2103.00020",
      "kind": "Original paper",
      "why": "Canonical paper for contrastive image-text pretraining and zero-shot transfer using aligned visual and language representations.",
      "level": "Intermediate → Advanced"
    },
    "llava-paper": {
      "title": "Visual Instruction Tuning (LLaVA)",
      "provider": "Liu et al. / arXiv",
      "url": "https://arxiv.org/abs/2304.08485",
      "kind": "Original paper",
      "why": "Influential vision-language architecture connecting a vision encoder to an LLM and training the system with multimodal instruction data.",
      "level": "Intermediate → Advanced"
    },
    "hf-vlm-course": {
      "title": "Introduction to Vision Language Models",
      "provider": "Hugging Face Computer Vision Course",
      "url": "https://huggingface.co/learn/computer-vision-course/en/unit4/multimodal-models/vlm-intro",
      "kind": "Official practical course",
      "why": "Accessible but technically useful treatment of multimodal representation, alignment, VLM architectures, tasks and evaluation.",
      "level": "Foundation → Intermediate"
    },
    "hf-multimodal-transformers": {
      "title": "Multimodal Generation with Transformers",
      "provider": "Hugging Face",
      "url": "https://huggingface.co/docs/transformers/main/tasks/any_to_any",
      "kind": "Official documentation",
      "why": "Current implementation-oriented overview of models that consume and generate text, image, audio or video modalities.",
      "level": "Intermediate"
    },
    "whisper-paper": {
      "title": "Robust Speech Recognition via Large-Scale Weak Supervision (Whisper)",
      "provider": "OpenAI / ICML",
      "url": "https://proceedings.mlr.press/v202/radford23a.html",
      "kind": "Original paper",
      "why": "Canonical modern speech-recognition system showing how large-scale weak supervision supports robust multilingual ASR and translation.",
      "level": "Intermediate → Advanced"
    },
    "whisper-github": {
      "title": "Whisper — reference implementation",
      "provider": "OpenAI",
      "url": "https://github.com/openai/whisper",
      "kind": "Official implementation",
      "why": "Practical reference for audio preprocessing, transformer-based ASR inference and multilingual speech tasks.",
      "level": "Intermediate"
    },
    "stanford-stats200": {
      "title": "STATS 200: Introduction to Statistical Inference",
      "provider": "Stanford University",
      "kind": "Primary university course",
      "why": "Rigorous inference: hypothesis tests, MLE, confidence intervals, bootstrap, Bayesian analysis, multiple testing, regression and proportional hazards.",
      "level": "Intermediate → Advanced",
      "url": "https://web.stanford.edu/class/stats200/"
    },
    "stanford-stats202": {
      "title": "STATS 202: Data Mining and Analysis",
      "provider": "Stanford University",
      "kind": "Primary university course",
      "why": "Statistical learning curriculum covering regression, regularization, LDA, kNN, splines/GAMs, trees, SVMs, PCA and clustering.",
      "level": "Intermediate",
      "url": "https://web.stanford.edu/class/stats202/"
    },
    "stanford-stats60": {
      "title": "STATS 60: Introduction to Statistics",
      "provider": "Stanford University",
      "kind": "Primary university course",
      "why": "Accessible statistical thinking, EDA, probability, hypothesis testing, randomized experiments, potential outcomes and regression.",
      "level": "Foundation",
      "url": "https://web.stanford.edu/class/stats60/"
    },
    "berkeley-data100": {
      "title": "Data 100: Principles and Techniques of Data Science",
      "provider": "UC Berkeley",
      "kind": "Primary university course",
      "why": "Broad practical data science: tabular manipulation, visualization, SQL, modeling, inference and data-centric workflows.",
      "level": "Foundation → Intermediate",
      "url": "https://ds100.org/"
    },
    "fundamentals-dataviz": {
      "title": "Fundamentals of Data Visualization",
      "provider": "Claus O. Wilke",
      "kind": "Free online textbook",
      "why": "Excellent principles for choosing, designing and critiquing statistical graphics without turning visualization into decoration.",
      "level": "Foundation → Intermediate",
      "url": "https://clauswilke.com/dataviz/"
    },
    "think-bayes": {
      "title": "Think Bayes, 2nd Edition",
      "provider": "Allen B. Downey",
      "kind": "Free online textbook + code",
      "why": "Computational introduction to Bayesian reasoning, priors, likelihoods, posterior inference and model comparison.",
      "level": "Foundation → Intermediate",
      "url": "https://allendowney.github.io/ThinkBayes2/"
    },
    "pymc": {
      "title": "PyMC Documentation & Examples",
      "provider": "PyMC",
      "kind": "Official documentation",
      "why": "Practical Bayesian modeling, posterior sampling, diagnostics and hierarchical models in Python.",
      "level": "Intermediate → Advanced",
      "url": "https://www.pymc.io/projects/docs/en/stable/"
    },
    "harvard-causal-diagrams": {
      "title": "Causal Diagrams: Draw Your Assumptions Before Your Conclusions",
      "provider": "Harvard University — Miguel Hernán",
      "kind": "Primary university course",
      "why": "High-quality treatment of causal DAGs, confounding, bias and adjustment decisions through real case studies.",
      "level": "Intermediate",
      "url": "https://harvardonline.harvard.edu/course/causal-diagrams-draw-your-assumptions-your-conclusions"
    },
    "microsoft-experimentation": {
      "title": "The Anatomy of a Large-Scale Experimentation Platform",
      "provider": "Microsoft Research",
      "kind": "Primary industry research",
      "why": "How trustworthy A/B testing works at scale: assignment, logging, analysis, guardrails and platform architecture.",
      "level": "Intermediate → Advanced",
      "url": "https://www.microsoft.com/en-us/research/publication/the-anatomy-of-a-large-scale-experimentation-platform/"
    },
    "boyd-convex": {
      "title": "Convex Optimization",
      "provider": "Stephen Boyd & Lieven Vandenberghe — Stanford",
      "kind": "Free canonical textbook",
      "why": "Canonical source for convex sets/functions, constrained optimization, duality and algorithms used across ML and decision science.",
      "level": "Intermediate → Advanced",
      "url": "https://web.stanford.edu/~boyd/cvxbook/"
    },
    "stanford-ee364a": {
      "title": "EE364a: Convex Optimization I",
      "provider": "Stanford University",
      "kind": "Primary university course",
      "why": "Course materials and examples for convex optimization, Lagrange duality and practical modeling.",
      "level": "Advanced",
      "url": "https://web.stanford.edu/class/ee364a/"
    },
    "scipy-optimize": {
      "title": "SciPy optimize",
      "provider": "SciPy",
      "kind": "Official documentation",
      "why": "Practical numerical optimization APIs for unconstrained, constrained and linear optimization in Python.",
      "level": "Intermediate",
      "url": "https://docs.scipy.org/doc/scipy/reference/optimize.html"
    },
    "sklearn-outlier": {
      "title": "Novelty and Outlier Detection",
      "provider": "scikit-learn",
      "kind": "Official documentation",
      "why": "Practical reference for Isolation Forest, Local Outlier Factor, One-Class SVM and the distinction between novelty/outlier detection.",
      "level": "Intermediate",
      "url": "https://scikit-learn.org/stable/modules/outlier_detection.html"
    },
    "lifelines": {
      "title": "lifelines: Survival Analysis in Python",
      "provider": "lifelines",
      "kind": "Official documentation + examples",
      "why": "Practical Kaplan–Meier, Cox proportional hazards, AFT models, censoring and survival diagnostics in Python.",
      "level": "Intermediate",
      "url": "https://lifelines.readthedocs.io/"
    },
    "stanford-cs246": {
      "title": "CS246: Mining Massive Data Sets",
      "provider": "Stanford University",
      "kind": "Primary university course",
      "why": "Large-scale data mining: recommender systems, clustering, LSH, graph mining, data streams and scalable learning.",
      "level": "Intermediate → Advanced",
      "url": "https://web.stanford.edu/class/cs246/"
    },
    "ir-book": {
      "title": "Introduction to Information Retrieval",
      "provider": "Stanford — Manning, Raghavan & Schütze",
      "kind": "Free canonical textbook",
      "why": "Foundational search systems: inverted indexes, Boolean retrieval, TF-IDF, ranking, evaluation and text processing.",
      "level": "Foundation → Advanced",
      "url": "https://nlp.stanford.edu/IR-book/"
    },
    "elastic-bm25": {
      "title": "Practical BM25 — Elasticsearch Guide",
      "provider": "Elastic",
      "kind": "Production documentation / guide",
      "why": "Practical intuition and implementation context for lexical ranking and BM25-style retrieval.",
      "level": "Intermediate",
      "url": "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html"
    },
    "faiss": {
      "title": "Faiss",
      "provider": "Meta Research",
      "kind": "Official library",
      "why": "Canonical library for efficient similarity search and clustering of dense vectors at scale.",
      "level": "Intermediate → Advanced",
      "url": "https://faiss.ai/"
    },
    "hnsw-paper": {
      "title": "Efficient and Robust Approximate Nearest Neighbor Search Using HNSW",
      "provider": "Malkov & Yashunin",
      "kind": "Primary paper",
      "why": "Foundational HNSW approximate nearest-neighbor algorithm used in many vector databases.",
      "level": "Advanced",
      "url": "https://arxiv.org/abs/1603.09320"
    },
    "dbt-docs": {
      "title": "dbt Developer Hub",
      "provider": "dbt Labs",
      "kind": "Official documentation",
      "why": "Analytics engineering, transformation-as-code, testing, lineage, incremental models and warehouse-centric workflows.",
      "level": "Foundation → Intermediate",
      "url": "https://docs.getdbt.com/"
    },
    "cmu-db": {
      "title": "15-445/645: Database Systems",
      "provider": "Carnegie Mellon University",
      "kind": "Primary university course",
      "why": "Deep database systems: storage, indexes, query execution/optimization, transactions, concurrency and recovery.",
      "level": "Intermediate → Advanced",
      "url": "https://15445.courses.cs.cmu.edu/"
    },
    "mit-6824": {
      "title": "6.5840 / 6.824: Distributed Systems",
      "provider": "MIT",
      "kind": "Primary university course",
      "why": "Canonical distributed systems course covering replication, fault tolerance, consensus and distributed storage.",
      "level": "Advanced",
      "url": "https://pdos.csail.mit.edu/6.824/"
    },
    "google-sre": {
      "title": "Site Reliability Engineering",
      "provider": "Google",
      "kind": "Free production book",
      "why": "Reliability, monitoring, SLOs, incident response, capacity and operational principles for production systems.",
      "level": "Intermediate → Advanced",
      "url": "https://sre.google/sre-book/table-of-contents/"
    },
    "stanford-cs224s": {
      "title": "CS224S: Spoken Language Processing",
      "provider": "Stanford University",
      "kind": "Primary university course",
      "why": "Speech recognition, acoustic/language modeling and modern spoken-language processing foundations.",
      "level": "Intermediate",
      "url": "https://web.stanford.edu/class/cs224s/"
    },
    "statsmodels-survival": {
      "title": "statsmodels Duration / Survival Analysis",
      "provider": "statsmodels",
      "kind": "Official documentation",
      "why": "Statistical survival and duration modeling tools, including proportional hazards and survival distributions.",
      "level": "Intermediate",
      "url": "https://www.statsmodels.org/stable/duration.html"
    },
    "ortools": {
      "title": "OR-Tools",
      "provider": "Google",
      "kind": "Official optimization library",
      "why": "Production-ready linear/integer programming, constraint programming, routing and scheduling examples.",
      "level": "Intermediate",
      "url": "https://developers.google.com/optimization"
    },
    "pandas-user-guide": {
      "title": "pandas User Guide",
      "provider": "pandas",
      "kind": "Official documentation",
      "why": "Canonical reference for tabular data manipulation, time series, grouping, joins, missing data and performance.",
      "level": "Foundation → Advanced",
      "url": "https://pandas.pydata.org/docs/user_guide/"
    },
    "duckdb": {
      "title": "DuckDB Documentation",
      "provider": "DuckDB",
      "kind": "Official documentation",
      "why": "Modern analytical SQL engine useful for local OLAP, Parquet, query execution and data-science workflows.",
      "level": "Foundation → Intermediate",
      "url": "https://duckdb.org/docs/"
    },
    "openintro-stats": {
      "title": "OpenIntro Statistics",
      "provider": "OpenIntro",
      "kind": "Free textbook",
      "why": "Strong accessible statistics reference for EDA, probability, inference, regression and experimental design.",
      "level": "Foundation",
      "url": "https://www.openintro.org/book/os/"
    },
    "nixtla": {
      "title": "Nixtla Forecasting Ecosystem",
      "provider": "Nixtla",
      "kind": "Official open-source docs",
      "why": "Modern statistical, ML and neural forecasting libraries with backtesting, probabilistic forecasts and hierarchical methods.",
      "level": "Intermediate → Advanced",
      "url": "https://nixtlaverse.nixtla.io/"
    },
    "distill-feature-visualization": {
      "title": "Feature Visualization",
      "provider": "Distill",
      "kind": "visual explainer",
      "level": "advanced",
      "url": "https://distill.pub/2017/feature-visualization/",
      "why": "A landmark visual explanation of how CNN features evolve from edges and textures toward higher-level concepts."
    },
    "distill-attention": {
      "title": "Attention and Augmented Recurrent Neural Networks",
      "provider": "Distill",
      "kind": "visual explainer",
      "level": "intermediate",
      "url": "https://distill.pub/2016/augmented-rnns/",
      "why": "A highly visual explanation of attention and memory interfaces that is useful before diving into transformer equations."
    },
    "distill-tsne": {
      "title": "How to Use t-SNE Effectively",
      "provider": "Distill",
      "kind": "visual explainer",
      "level": "intermediate",
      "url": "https://distill.pub/2016/misread-tsne/",
      "why": "Shows how perplexity, initialization and scale can create misleading t-SNE interpretations."
    },
    "illustrated-transformer": {
      "title": "The Illustrated Transformer",
      "provider": "Jay Alammar",
      "kind": "visual explainer",
      "level": "intermediate",
      "url": "https://jalammar.github.io/illustrated-transformer/",
      "why": "A widely used visual walkthrough of encoder-decoder transformers, self-attention and multi-head attention."
    },
    "google-mlcc-exercises": {
      "title": "Machine Learning Crash Course — Interactive Exercises",
      "provider": "Google",
      "kind": "interactive",
      "level": "foundation",
      "url": "https://developers.google.com/machine-learning/crash-course/exercises",
      "why": "Interactive exercises for gradient descent, thresholds, precision/recall and ROC/AUC that reinforce visual intuition."
    },
    "mit-info-theory": {
      "title": "MIT 6.441 Information Theory",
      "provider": "MIT OpenCourseWare",
      "url": "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/",
      "kind": "Primary university course",
      "why": "Rigorous entropy, divergence, mutual information, compression and statistical-decision foundations.",
      "level": "Advanced foundation"
    },
    "stanford-cs228": {
      "title": "CS228: Probabilistic Graphical Models",
      "provider": "Stanford University",
      "url": "https://ermongroup.github.io/cs228/",
      "kind": "Primary university course",
      "why": "Bayesian/Markov networks, exact and approximate inference, sampling and learning in structured probabilistic models.",
      "level": "Intermediate → Advanced"
    },
    "probml-book": {
      "title": "Probabilistic Machine Learning",
      "provider": "Kevin P. Murphy",
      "url": "https://github.com/probml/pml-book",
      "kind": "Reference book / code",
      "why": "Comprehensive probabilistic ML reference covering latent-variable models, kernels, Gaussian processes and uncertainty.",
      "level": "Intermediate → Advanced"
    },
    "conformal-intro": {
      "title": "A Gentle Introduction to Conformal Prediction",
      "provider": "Angelopoulos & Bates",
      "url": "https://arxiv.org/abs/2107.07511",
      "kind": "Primary tutorial paper",
      "why": "Practical distribution-free uncertainty quantification with prediction sets/intervals and code examples.",
      "level": "Intermediate → Advanced"
    },
    "stanford-stats315a": {
      "title": "STATS 315A: Modern Statistical Learning",
      "provider": "Stanford University",
      "url": "https://web.stanford.edu/class/stats315a/syllabus.html",
      "kind": "Primary university course",
      "why": "Modern statistical learning with decision theory, generalization, calibration, proper scoring rules and conformal prediction.",
      "level": "Advanced"
    },
    "geopandas-docs": {
      "title": "GeoPandas Documentation",
      "provider": "GeoPandas",
      "url": "https://geopandas.org/en/stable/",
      "kind": "Official documentation",
      "why": "Canonical Python reference for CRS handling, spatial joins, indexing and geometry operations.",
      "level": "Foundation → Intermediate"
    },
    "geodata-science-book": {
      "title": "Geographic Data Science with Python",
      "provider": "Rey, Arribas-Bel & Wolf",
      "url": "https://geographicdata.science/book/index.html",
      "kind": "Open textbook",
      "why": "Broad geospatial data-science curriculum covering spatial structure, visualization, analysis and modeling.",
      "level": "Foundation → Advanced"
    },
    "pysal": {
      "title": "PySAL: Python Spatial Analysis Library",
      "provider": "PySAL",
      "url": "https://pysal.org/pysal/",
      "kind": "Official documentation / notebooks",
      "why": "Spatial statistics, autocorrelation, clustering and spatial regression in Python.",
      "level": "Intermediate → Advanced"
    },
    "feast": {
      "title": "Feast Feature Store Documentation",
      "provider": "Feast",
      "url": "https://docs.feast.dev/",
      "kind": "Official documentation",
      "why": "Offline/online features, point-in-time joins, materialization and training-serving consistency.",
      "level": "Intermediate → Advanced"
    },
    "gcp-vertex": {
      "title": "Vertex AI Documentation",
      "provider": "Google Cloud",
      "url": "https://cloud.google.com/vertex-ai/docs",
      "kind": "Official cloud documentation",
      "why": "Primary reference for managed model training, deployment, evaluation and production AI services on Google Cloud.",
      "level": "Intermediate"
    },
    "python-data-model": {
      "title": "Python Language Reference: Data Model",
      "provider": "Python Language Reference",
      "kind": "Official documentation",
      "why": "Canonical definitions of objects, iterators, generators, descriptors, hashing, and context-manager protocols.",
      "level": "All levels",
      "url": "https://docs.python.org/3/reference/datamodel.html"
    },
    "python-functools": {
      "title": "Python functools Documentation",
      "provider": "Python functools Documentation",
      "kind": "Official documentation",
      "why": "Official behavior for wraps, partial, singledispatch, caching, and function metadata preservation.",
      "level": "All levels",
      "url": "https://docs.python.org/3/library/functools.html"
    },
    "python-contextlib": {
      "title": "Python contextlib Documentation",
      "provider": "Python contextlib Documentation",
      "kind": "Official documentation",
      "why": "Official utilities for defining, composing, and testing synchronous and asynchronous context managers.",
      "level": "All levels",
      "url": "https://docs.python.org/3/library/contextlib.html"
    },
    "numpy-broadcasting": {
      "title": "NumPy Broadcasting",
      "provider": "NumPy Broadcasting",
      "kind": "Official documentation",
      "why": "Canonical broadcasting rules, examples, and the warning that broadcasted intermediates can still be inefficient.",
      "level": "All levels",
      "url": "https://numpy.org/doc/stable/user/basics.broadcasting.html"
    },
    "numpy-copies-views": {
      "title": "NumPy Copies and Views",
      "provider": "NumPy Copies and Views",
      "kind": "Official documentation",
      "why": "Official rules for basic indexing views, advanced-indexing copies, ownership, and shared array memory.",
      "level": "All levels",
      "url": "https://numpy.org/doc/stable/user/basics.copies.html"
    },
    "pandas-merging": {
      "title": "pandas Merge, Join, and Concatenate",
      "provider": "pandas Merge, Join, and Concatenate",
      "kind": "Official documentation",
      "why": "Official join semantics, validation options, indicator columns, and database-style merge behavior.",
      "level": "All levels",
      "url": "https://pandas.pydata.org/docs/user_guide/merging.html"
    },
    "pandas-groupby": {
      "title": "pandas GroupBy: Split-Apply-Combine",
      "provider": "pandas GroupBy",
      "kind": "Official documentation",
      "why": "Official distinctions among aggregation, transformation, filtration, and per-group operations.",
      "level": "All levels",
      "url": "https://pandas.pydata.org/docs/user_guide/groupby.html"
    },
    "pandas-missing": {
      "title": "pandas Working with Missing Data",
      "provider": "pandas Working with Missing Data",
      "kind": "Official documentation",
      "why": "Canonical missing-value sentinels, nullable dtypes, propagation, detection, filling, and dropping behavior.",
      "level": "All levels",
      "url": "https://pandas.pydata.org/docs/user_guide/missing_data.html"
    },
    "pandas-copy-on-write": {
      "title": "pandas Copy-on-Write",
      "provider": "pandas Copy-on-Write",
      "kind": "Official documentation",
      "why": "Current official mutation semantics and migration guidance for pandas 3.x Copy-on-Write behavior.",
      "level": "All levels",
      "url": "https://pandas.pydata.org/docs/user_guide/copy_on_write.html"
    },
    "pytest-docs": {
      "title": "pytest Documentation",
      "provider": "pytest Documentation",
      "kind": "Official documentation",
      "why": "Official guidance for assertions, fixtures, parametrization, temporary resources, monkeypatching, and test organization.",
      "level": "All levels",
      "url": "https://docs.pytest.org/en/stable/"
    },
    "python-unittest": {
      "title": "Python unittest Documentation",
      "provider": "Python unittest Documentation",
      "kind": "Official documentation",
      "why": "Standard-library test case, fixture, discovery, and mocking foundations that clarify framework-independent testing ideas.",
      "level": "All levels",
      "url": "https://docs.python.org/3/library/unittest.html"
    },
    "mit-algorithms": {
      "title": "MIT 6.006 Introduction to Algorithms",
      "provider": "MIT 6.006 Introduction to Algorithms",
      "kind": "Primary university course",
      "why": "Primary university material for asymptotic analysis, hashing, dynamic arrays, and amortized reasoning.",
      "level": "All levels",
      "url": "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/"
    },
    "princeton-algorithms": {
      "title": "Algorithms, 4th Edition — Online Materials",
      "provider": "Princeton University",
      "url": "https://algs4.cs.princeton.edu/home/",
      "why": "University-authored explanations and implementations for sorting, priority queues, symbol tables, and graph traversal.",
      "kind": "Primary course",
      "level": "All levels"
    },
    "python-heapq": {
      "title": "heapq — Heap Queue Algorithm",
      "provider": "Python",
      "url": "https://docs.python.org/3/library/heapq.html",
      "why": "Official Python min-heap invariant, operations, priority-queue notes, and top-k utilities.",
      "kind": "Official documentation",
      "level": "All levels"
    },
    "python-bisect": {
      "title": "bisect — Array Bisection Algorithm",
      "provider": "Python",
      "url": "https://docs.python.org/3/library/bisect.html",
      "why": "Official insertion-point semantics, boundary behavior, performance notes, and thread-safety constraints.",
      "kind": "Official documentation",
      "level": "All levels"
    },
    "mmds-book": {
      "title": "Mining of Massive Datasets",
      "provider": "Stanford University",
      "url": "https://www.mmds.org/",
      "why": "Primary university textbook for stream sampling, sketches, approximate counting, and massive-data algorithms.",
      "kind": "Primary textbook",
      "level": "All levels"
    },
    "postgres-select": {
      "title": "PostgreSQL SELECT and Table Expressions",
      "provider": "PostgreSQL",
      "kind": "Official documentation",
      "level": "All levels",
      "url": "https://www.postgresql.org/docs/current/queries-table-expressions.html",
      "why": "Canonical join, grouping, filtering, and logical table-expression semantics."
    },
    "postgres-window": {
      "title": "PostgreSQL Window Functions",
      "provider": "PostgreSQL",
      "kind": "Official documentation",
      "level": "All levels",
      "url": "https://www.postgresql.org/docs/current/tutorial-window.html",
      "why": "Official window partition, ordering, frame, and logical-evaluation guidance."
    },
    "postgres-with": {
      "title": "PostgreSQL WITH Queries",
      "provider": "PostgreSQL",
      "kind": "Official documentation",
      "level": "All levels",
      "url": "https://www.postgresql.org/docs/current/queries-with.html",
      "why": "Canonical non-recursive, recursive, materialization, and data-modifying CTE semantics."
    },
    "postgres-indexes": {
      "title": "PostgreSQL Indexes",
      "provider": "PostgreSQL",
      "kind": "Official documentation",
      "level": "All levels",
      "url": "https://www.postgresql.org/docs/current/indexes.html",
      "why": "Official index types, multicolumn, partial, expression, index-only, and usage guidance."
    },
    "postgres-explain": {
      "title": "PostgreSQL EXPLAIN",
      "provider": "PostgreSQL",
      "kind": "Official documentation",
      "level": "All levels",
      "url": "https://www.postgresql.org/docs/current/using-explain.html",
      "why": "Canonical plan nodes, estimated costs, cardinalities, and EXPLAIN ANALYZE interpretation."
    },
    "postgres-transactions": {
      "title": "PostgreSQL Transaction Isolation",
      "provider": "PostgreSQL",
      "kind": "Official documentation",
      "level": "All levels",
      "url": "https://www.postgresql.org/docs/current/transaction-iso.html",
      "why": "Official isolation guarantees, anomalies, serialization failures, and retry implications."
    },
    "postgres-routines": {
      "title": "PostgreSQL User-Defined Procedures",
      "provider": "PostgreSQL",
      "kind": "Official documentation",
      "level": "All levels",
      "url": "https://www.postgresql.org/docs/current/xproc.html",
      "why": "Official distinctions between functions and procedures, invocation, results, and transaction control."
    },
    "duckdb-why": {
      "title": "Why DuckDB",
      "provider": "DuckDB Foundation",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://duckdb.org/why_duckdb",
      "why": "Explains OLAP workload shape, vectorized execution, columnar processing, and the design trade-offs of an analytical database."
    },
    "kimball-dimensional": {
      "title": "Dimensional Modeling Techniques",
      "provider": "Kimball Group",
      "kind": "Primary methodology",
      "level": "Intermediate",
      "url": "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/",
      "why": "Canonical guidance on grain, facts, dimensions, conformed dimensions, fact-table types, and slowly changing dimensions."
    },
    "dbt-best-practices": {
      "title": "How We Structure Our dbt Projects",
      "provider": "dbt Labs",
      "kind": "Official best practices",
      "level": "Intermediate",
      "url": "https://docs.getdbt.com/best-practices/how-we-structure/1-guide-overview",
      "why": "Current official guidance for source-conformed staging, purpose-built intermediate models, business-conformed marts, testing, and project organization."
    },
    "dbt-contracts": {
      "title": "Model Contracts",
      "provider": "dbt Labs",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://docs.getdbt.com/docs/mesh/govern/model-contracts",
      "why": "Defines dbt model shape guarantees, platform constraint differences, breaking changes, versions, and the boundary between contracts and data tests."
    },
    "openlineage-object-model": {
      "title": "OpenLineage Object Model",
      "provider": "OpenLineage",
      "kind": "Open standard",
      "level": "Intermediate",
      "url": "https://openlineage.io/docs/spec/object-model/",
      "why": "Specifies interoperable job, run, dataset, event, and facet concepts for runtime and design-time lineage."
    },
    "parquet-concepts": {
      "title": "Apache Parquet Concepts",
      "provider": "Apache Parquet",
      "kind": "Official specification guide",
      "level": "Intermediate",
      "url": "https://parquet.apache.org/docs/concepts/",
      "why": "Defines the file, row-group, column-chunk, and page hierarchy and the unit used for parallelism, I/O, encoding, and compression."
    },
    "parquet-motivation": {
      "title": "Apache Parquet Motivation",
      "provider": "Apache Parquet",
      "kind": "Official documentation",
      "level": "Beginner",
      "url": "https://parquet.apache.org/docs/overview/motivation/",
      "why": "Explains the format's goals for compressed columnar representation, nested data, per-column encoding, and ecosystem interoperability."
    },
    "lakehouse-paper": {
      "title": "Lakehouse: A New Generation of Open Platforms",
      "provider": "CIDR 2021",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://www.cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf",
      "why": "Introduces the lakehouse architecture, transactional metadata over open files, direct access, management features, and the remaining data-independence trade-offs."
    },
    "iceberg-docs": {
      "title": "Apache Iceberg Documentation",
      "provider": "Apache Iceberg",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://iceberg.apache.org/docs/latest/",
      "why": "Documents snapshots, atomic table updates, schema and partition evolution, file pruning, time travel, and rollback in an open table format."
    },
    "numpy-linalg": {
      "title": "NumPy Linear Algebra Reference",
      "provider": "NumPy",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://numpy.org/doc/stable/reference/routines.linalg.html",
      "why": "Current official APIs for products, norms, decompositions, eigenproblems, condition numbers, solves, least squares and pseudoinverses."
    },
    "goldberg-floating": {
      "title": "What Every Computer Scientist Should Know About Floating-Point Arithmetic",
      "provider": "David Goldberg / Oracle",
      "kind": "Foundational paper",
      "level": "Advanced",
      "url": "https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html",
      "why": "Canonical explanation of rounding, representation, cancellation, error and IEEE floating-point behavior."
    },
    "scipy-logsumexp": {
      "title": "scipy.special.logsumexp",
      "provider": "SciPy",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://docs.scipy.org/doc/scipy/reference/generated/scipy.special.logsumexp.html",
      "why": "Official stable implementation and behavior for log-domain summation without avoidable overflow or underflow."
    },
    "numpy-random": {
      "title": "NumPy Random Sampling",
      "provider": "NumPy",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://numpy.org/doc/stable/reference/random/index.html",
      "why": "Current Generator, seed/state, distribution sampling and parallel random-stream guidance, including the non-cryptographic boundary."
    },
    "scipy-stats": {
      "title": "SciPy Statistical Functions",
      "provider": "SciPy",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://docs.scipy.org/doc/scipy/reference/stats.html",
      "why": "Current probability-distribution, summary-statistic, sampling and statistical-function reference for verified library use."
    },
    "nist-stat-handbook": {
      "title": "NIST/SEMATECH e-Handbook of Statistical Methods",
      "provider": "National Institute of Standards and Technology",
      "kind": "Official statistical handbook",
      "level": "Foundation → Advanced",
      "url": "https://www.itl.nist.gov/div898/handbook/",
      "why": "Authoritative applied coverage of confidence intervals, tests, ANOVA, chi-square methods, diagnostics, and experimental analysis."
    },
    "asa-pvalues": {
      "title": "ASA Statement on Statistical Significance and P-Values",
      "provider": "American Statistical Association",
      "kind": "Professional society statement",
      "level": "Foundation → Advanced",
      "url": "https://www.amstat.org/asa/files/pdfs/p-valuestatement.pdf",
      "why": "Authoritative principles on p-value interpretation, transparency, effect magnitude, and avoiding threshold-only conclusions."
    },
    "efron-bootstrap": {
      "title": "Bootstrap Methods: Another Look at the Jackknife",
      "provider": "Bradley Efron — The Annals of Statistics",
      "kind": "Original research paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1214/aos/1176344552",
      "why": "The original paper introducing the bootstrap as a general method for approximating estimator sampling distributions."
    },
    "benjamini-hochberg": {
      "title": "Controlling the False Discovery Rate",
      "provider": "Yoav Benjamini and Yosef Hochberg — JRSS B",
      "kind": "Original research paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1111/j.2517-6161.1995.tb02031.x",
      "why": "The original FDR formulation and step-up procedure for more powerful multiple-testing control."
    },
    "statsmodels-power": {
      "title": "statsmodels Power and Sample Size",
      "provider": "statsmodels",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://www.statsmodels.org/stable/stats.html#power-and-sample-size-calculations",
      "why": "Current official APIs for power and sample-size calculations across t, z, F, chi-square, and proportion tests."
    },
    "cdc-survey-variance": {
      "title": "NHANES Variance Estimation Tutorial",
      "provider": "U.S. Centers for Disease Control and Prevention",
      "kind": "Official survey methodology",
      "level": "Intermediate → Advanced",
      "url": "https://wwwn.cdc.gov/nchs/nhanes/tutorials/varianceestimation.aspx",
      "why": "Explains how weights, clustering, and stratification affect point estimates, standard errors, tests, and intervals in complex surveys."
    },
    "census-nonresponse": {
      "title": "Nonresponse Bias Analysis",
      "provider": "U.S. Census Bureau",
      "kind": "Official survey methodology",
      "level": "Intermediate",
      "url": "https://www.census.gov/programs-surveys/nsch/technical-documentation/nonresponse-bias-analysis.html",
      "why": "Current official examples of evaluating nonresponse bias rather than treating response rate alone as proof of representativeness."
    },
    "stan-reference": {
      "title": "Stan Reference Manual",
      "provider": "Stan Development Team",
      "kind": "Official documentation",
      "level": "Intermediate → Advanced",
      "url": "https://mc-stan.org/docs/reference-manual/",
      "why": "Authoritative specification of probabilistic programs, MCMC inference, posterior analysis, diagnostics, and reproducibility."
    },
    "stan-predictive-checks": {
      "title": "Stan Prior and Posterior Predictive Checks",
      "provider": "Stan Development Team",
      "kind": "Official documentation",
      "level": "Intermediate → Advanced",
      "url": "https://mc-stan.org/docs/stan-users-guide/posterior-predictive-checks.html",
      "why": "Official workflow for prior predictive simulation, posterior predictive replication, graphical checks, and hierarchical mixed replication."
    },
    "bayesian-workflow": {
      "title": "Bayesian Workflow",
      "provider": "Gelman et al.",
      "kind": "Research paper",
      "level": "Advanced",
      "url": "https://arxiv.org/abs/2011.01808",
      "why": "End-to-end workflow for model building, computation, predictive evaluation, sensitivity, comparison, and revision."
    },
    "nist-eda": {
      "title": "NIST Exploratory Data Analysis Handbook",
      "provider": "National Institute of Standards and Technology",
      "kind": "Official statistical handbook",
      "level": "Foundation → Advanced",
      "url": "https://www.itl.nist.gov/div898/handbook/eda/eda.htm",
      "why": "Authoritative EDA philosophy, assumptions, graphical and quantitative techniques, distributions, and applied case studies."
    },
    "seaborn-tutorial": {
      "title": "seaborn Statistical Visualization Tutorial",
      "provider": "seaborn",
      "kind": "Official documentation",
      "level": "Foundation → Intermediate",
      "url": "https://seaborn.pydata.org/tutorial.html",
      "why": "Current official guidance for distribution, relational, categorical, regression, faceting, semantic, and uncertainty visualizations."
    },
    "rubin-missing": {
      "title": "Inference and Missing Data",
      "provider": "Donald B. Rubin — Biometrika",
      "kind": "Original research paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1093/biomet/63.3.581",
      "why": "Foundational formalization of missing-data mechanisms and conditions for likelihood and Bayesian ignorability."
    },
    "powerbi-dashboard-design": {
      "title": "Tips for Designing a Great Power BI Dashboard",
      "provider": "Microsoft Learn",
      "kind": "Official documentation",
      "level": "Foundation → Intermediate",
      "url": "https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboards-design-tips",
      "why": "Current audience, hierarchy, chart-choice, context, clutter, and single-screen dashboard guidance."
    },
    "visual-communication-science": {
      "title": "The Science of Visual Data Communication: What Works",
      "provider": "Franconeri et al. — Psychological Science in the Public Interest",
      "kind": "Peer-reviewed review",
      "level": "Intermediate → Advanced",
      "url": "https://doi.org/10.1177/15291006211051956",
      "why": "Research-backed synthesis of visual perception, graph comprehension, data reasoning, uncertainty, and risk communication."
    },
    "uncertainty-visualization": {
      "title": "Why Authors Don't Visualize Uncertainty",
      "provider": "Jessica Hullman — IEEE TVCG",
      "kind": "Peer-reviewed research paper",
      "level": "Intermediate → Advanced",
      "url": "https://doi.org/10.1109/TVCG.2019.2934287",
      "why": "Evidence on practical barriers, rhetoric, and consequences surrounding omission of uncertainty from visual communication."
    },
    "cvxpy-guide": {
      "title": "CVXPY User Guide",
      "provider": "CVXPY",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://www.cvxpy.org/tutorial/",
      "why": "Current disciplined convex programming, constraint, dual-variable, status, warm-start, and solver guidance."
    },
    "scipy-linprog": {
      "title": "scipy.optimize.linprog",
      "provider": "SciPy",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.linprog.html",
      "why": "Current HiGHS-backed linear-programming formulation, bounds, integrality option, results, and status semantics."
    },
    "scipy-milp": {
      "title": "scipy.optimize.milp",
      "provider": "SciPy",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.milp.html",
      "why": "Current mixed-integer interface, variable domains, limits, gaps, bounds, and solver result fields."
    },
    "ortools-cpsat": {
      "title": "CP-SAT Solver",
      "provider": "Google OR-Tools",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://developers.google.com/optimization/cp/cp_solver",
      "why": "Current integer-only CP-SAT modeling, statuses, feasibility, and optimization workflow."
    },
    "ortools-mathopt": {
      "title": "MathOpt Modeling and Solving",
      "provider": "Google OR-Tools",
      "kind": "Official documentation",
      "level": "Intermediate -> Advanced",
      "url": "https://developers.google.com/optimization/math_opt",
      "why": "Current solver-independent LP/MIP modeling, termination, dual, ray, callback, and warm-start features."
    },
    "frazier-bo": {
      "title": "A Tutorial on Bayesian Optimization",
      "provider": "Peter I. Frazier",
      "kind": "Primary tutorial",
      "level": "Intermediate -> Advanced",
      "url": "https://arxiv.org/abs/1807.02811",
      "why": "Rigorous foundations for surrogate-based sequential optimization, acquisitions, noise, constraints, batches, and fidelity."
    },
    "botorch-docs": {
      "title": "BoTorch Documentation",
      "provider": "PyTorch / BoTorch",
      "kind": "Official documentation",
      "level": "Intermediate -> Advanced",
      "url": "https://botorch.org/docs/introduction",
      "why": "Current modular Bayesian optimization models, posteriors, acquisitions, batching, constraints, and experiment guidance."
    },
    "nsga2-paper": {
      "title": "A Fast and Elitist Multiobjective Genetic Algorithm: NSGA-II",
      "provider": "IEEE Transactions on Evolutionary Computation",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1109/4235.996017",
      "why": "Original NSGA-II nondominated sorting, elitism, and crowding-distance algorithm."
    },
    "pymoo-docs": {
      "title": "pymoo Multi-objective Optimization Documentation",
      "provider": "pymoo",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://pymoo.org/algorithms/moo/nsga2.html",
      "why": "Current NSGA-II workflow, operators, front visualization, constraint handling, and performance indicators."
    },
    "trustworthy-oce-survey": {
      "title": "Controlled Experiments on the Web: Survey and Practical Guide",
      "provider": "Data Mining and Knowledge Discovery",
      "kind": "Primary survey",
      "level": "Intermediate -> Advanced",
      "url": "https://doi.org/10.1007/s10618-008-0114-1",
      "why": "Peer-reviewed foundations for online randomization, power, variance reduction, pitfalls, and trustworthy experiment operation."
    },
    "network-experimentation-scale": {
      "title": "Network Experimentation at Scale",
      "provider": "Meta / arXiv",
      "kind": "Primary systems paper",
      "level": "Advanced",
      "url": "https://arxiv.org/abs/2012.08591",
      "why": "Deployed cluster-randomized design, estimation, regression adjustment, and interference evidence at platform scale."
    },
    "srm-taxonomy": {
      "title": "Diagnosing Sample Ratio Mismatch in Online Controlled Experiments",
      "provider": "Microsoft Research / KDD",
      "kind": "Primary paper",
      "level": "Intermediate",
      "url": "https://www.microsoft.com/en-us/research/publication/diagnosing-sample-ratio-mismatch-in-online-controlled-experiments-a-taxonomy-and-rules-of-thumb-for-practitioners/",
      "why": "Practitioner taxonomy of SRM causes, diagnosis, fixes, and prevention across large experimentation systems."
    },
    "microsoft-srm-guide": {
      "title": "Diagnosing Sample Ratio Mismatch in A/B Testing",
      "provider": "Microsoft Research",
      "kind": "Production guidance",
      "level": "Intermediate",
      "url": "https://www.microsoft.com/en-us/research/articles/diagnosing-sample-ratio-mismatch-in-a-b-testing/",
      "why": "Operational trust gate, forensic workflow, and platform diagnosis guidance for SRM incidents."
    },
    "cuped-paper": {
      "title": "Improving the Sensitivity of Online Controlled Experiments by Utilizing Pre-Experiment Data",
      "provider": "WSDM",
      "kind": "Primary paper",
      "level": "Intermediate -> Advanced",
      "url": "https://doi.org/10.1145/2433396.2433413",
      "why": "Original CUPED control-variate method and empirical variance-reduction evidence for online experiments."
    },
    "confidence-sequences": {
      "title": "Time-uniform, Nonparametric, Nonasymptotic Confidence Sequences",
      "provider": "Howard, Ramdas, McAuliffe & Sekhon",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://arxiv.org/abs/1810.08240",
      "why": "Modern time-uniform confidence sequence foundations and connections to sequential tests and martingales."
    },
    "enterprise-anytime-valid": {
      "title": "Anytime-Valid Confidence Sequences in an Enterprise A/B Testing Platform",
      "provider": "Adobe / arXiv",
      "kind": "Primary systems paper",
      "level": "Advanced",
      "url": "https://arxiv.org/abs/2302.10108",
      "why": "Deployment details for continuous monitoring, stopping, lift inference, and sample planning with confidence sequences."
    },
    "trustworthy-oce-metrics": {
      "title": "Metrics for Experimentation and the Overall Evaluation Criterion",
      "provider": "Cambridge University Press",
      "kind": "Canonical book chapter",
      "level": "Intermediate",
      "url": "https://doi.org/10.1017/9781108653985.010",
      "why": "OEC, short-term metric, sensitivity, directionality, and organizational alignment framework."
    },
    "metric-development-kdd": {
      "title": "Data-Driven Metric Development for Online Controlled Experiments: Seven Lessons Learned",
      "provider": "KDD",
      "kind": "Primary paper",
      "level": "Intermediate",
      "url": "https://www.kdd.org/kdd2016/subtopic/view/data-driven-metric-development-for-online-controlled-experiments-seven-less",
      "why": "Peer-reviewed directionality and sensitivity criteria plus practical metric-development lessons."
    },
    "dirty-dozen-metrics": {
      "title": "A Dirty Dozen: Twelve Common Metric Interpretation Pitfalls",
      "provider": "Microsoft Research / KDD",
      "kind": "Primary paper",
      "level": "Intermediate",
      "url": "https://www.microsoft.com/en-us/research/publication/a-dirty-dozen-twelve-common-metric-interpretation-pitfalls-in-online-controlled-experiments/",
      "why": "Documented metric interpretation failures from large-scale online experimentation practice."
    },
    "amplitude-funnel-docs": {
      "title": "Funnel Analysis Documentation",
      "provider": "Amplitude",
      "kind": "Official documentation",
      "level": "Foundation -> Intermediate",
      "url": "https://amplitude.com/docs/analytics/charts/funnel-analysis/funnel-analysis-how-filters-work",
      "why": "Current funnel filters, step properties, unique users, ordering, and segmentation semantics."
    },
    "amplitude-experiment-metrics": {
      "title": "Experiment Analysis Chart Calculations",
      "provider": "Amplitude",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://amplitude.com/docs/feature-experiment/under-the-hood/experiment-analysis-chart-calculation",
      "why": "Explicit exposure, funnel conversion, unique/total event, and retention denominator formulas."
    },
    "mixpanel-retention": {
      "title": "Retention: Analyzing User Engagement",
      "provider": "Mixpanel University",
      "kind": "Official learning resource",
      "level": "Foundation -> Intermediate",
      "url": "https://university.mixpanel.com/student/activity/3411671-retention-analyzing-user-engagement",
      "why": "Current operational definitions for return behavior, cohorting, and retention analysis."
    },
    "customer-base-models": {
      "title": "Probability Models for Customer-Base Analysis",
      "provider": "Journal of Interactive Marketing",
      "kind": "Primary review",
      "level": "Advanced",
      "url": "https://doi.org/10.1016/j.intmar.2008.11.003",
      "why": "Contractual/noncontractual taxonomy and probabilistic repeat-purchase, dropout, and customer-value models."
    },
    "fader-heterogeneity": {
      "title": "Customer-Base Valuation in a Contractual Setting: The Perils of Ignoring Heterogeneity",
      "provider": "Marketing Science",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1287/mksc.1080.0482",
      "why": "Shows how homogeneous retention assumptions distort contractual customer-base valuation."
    },
    "detecting-network-effects": {
      "title": "Detecting Network Effects: Randomizing Over Randomized Experiments",
      "provider": "KDD",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://www.kdd.org/kdd2017/papers/view/detecting-network-effects-randomizing-over-randomized-experiments",
      "why": "Meta-experiment design comparing individual and cluster randomization to test interference."
    },
    "airbnb-interference": {
      "title": "Reducing Interference Bias in Online Marketplace Experiments Using Cluster Randomization",
      "provider": "Management Science",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1287/mnsc.2020.01157",
      "why": "Marketplace meta-experiment evidence and cluster-randomization methods for interference bias."
    },
    "sklearn-linear-models": {
      "title": "Linear Models User Guide",
      "provider": "scikit-learn",
      "kind": "Official documentation",
      "level": "Foundation -> Advanced",
      "url": "https://scikit-learn.org/stable/modules/linear_model.html",
      "why": "Current objectives, solver behavior, regularization, robust estimators, count regression, and quantile regression in one authoritative implementation guide."
    },
    "statsmodels-regression-diagnostics": {
      "title": "Linear Regression Diagnostics",
      "provider": "statsmodels",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://www.statsmodels.org/stable/examples/notebooks/generated/linear_regression_diagnostics_plots.html",
      "why": "Current diagnostic workflow for residual shape, leverage, influence, and specification checks."
    },
    "nist-regression-diagnostics": {
      "title": "Regression Diagnostics",
      "provider": "NIST/SEMATECH Engineering Statistics Handbook",
      "kind": "Government technical handbook",
      "level": "Intermediate",
      "url": "https://itl.nist.gov/div898/software/dataplot/refman1/auxillar/regrdiag.htm",
      "why": "Rigorous definitions and practical interpretation of residual, leverage, studentized-residual, Cook-distance, and influence diagnostics."
    },
    "sklearn-spline-transformer": {
      "title": "SplineTransformer API",
      "provider": "scikit-learn",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.SplineTransformer.html",
      "why": "Authoritative basis construction, knot placement, degree, extrapolation, and pipeline behavior for B-splines."
    },
    "statsmodels-gam": {
      "title": "Generalized Additive Models",
      "provider": "statsmodels",
      "kind": "Official documentation",
      "level": "Intermediate -> Advanced",
      "url": "https://www.statsmodels.org/stable/gam.html",
      "why": "Current penalized B-spline GAM formulation and Gaussian and Poisson implementation examples."
    },
    "nelder-wedderburn-glm": {
      "title": "Generalized Linear Models",
      "provider": "Journal of the Royal Statistical Society",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://doi.org/10.2307/2344614",
      "why": "The original GLM formulation connecting exponential-family outcomes, link functions, and iterative weighted least squares."
    },
    "statsmodels-poisson-postestimation": {
      "title": "Post-estimation Overview for Poisson Regression",
      "provider": "statsmodels",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://www.statsmodels.org/stable/examples/notebooks/generated/postestimation_poisson.html",
      "why": "Current count-model prediction, inference, and diagnostic examples after fitting a Poisson model."
    },
    "huber-1964": {
      "title": "Robust Estimation of a Location Parameter",
      "provider": "Annals of Mathematical Statistics",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1214/aoms/1177703732",
      "why": "Foundational contamination-model and M-estimation theory behind the Huber loss and bounded influence."
    },
    "koenker-bassett-1978": {
      "title": "Regression Quantiles",
      "provider": "Econometrica",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://doi.org/10.2307/1913643",
      "why": "The original conditional-quantile regression formulation and asymmetric absolute-loss estimator."
    },
    "glmnet-coordinate-descent": {
      "title": "Regularization Paths for Generalized Linear Models via Coordinate Descent",
      "provider": "Journal of Statistical Software",
      "kind": "Primary methods paper",
      "level": "Advanced",
      "url": "https://doi.org/10.18637/jss.v033.i01",
      "why": "Canonical coordinate-descent algorithms for lasso, ridge, and elastic-net paths across linear and generalized linear models."
    },
    "anomaly-survey": {
      "title": "Anomaly Detection: A Survey",
      "provider": "ACM Computing Surveys",
      "kind": "Primary survey",
      "level": "Intermediate -> Advanced",
      "url": "https://doi.org/10.1145/1541880.1541882",
      "why": "Canonical taxonomy of point, contextual, and collective anomalies plus assumptions, techniques, and application constraints."
    },
    "isolation-forest-paper": {
      "title": "Isolation Forest",
      "provider": "IEEE ICDM",
      "kind": "Primary paper",
      "level": "Intermediate",
      "url": "https://doi.org/10.1109/ICDM.2008.17",
      "why": "Original random partitioning algorithm, path-length normalization, subsampling argument, and anomaly score."
    },
    "lof-paper": {
      "title": "LOF: Identifying Density-Based Local Outliers",
      "provider": "ACM SIGMOD",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1145/342009.335388",
      "why": "Original reachability-distance, local-reachability-density, and local-outlier-factor definitions."
    },
    "one-class-svm-paper": {
      "title": "Estimating the Support of a High-Dimensional Distribution",
      "provider": "Neural Computation",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1162/089976601750264965",
      "why": "Foundational one-class support-estimation objective, kernel decision function, and nu interpretation."
    },
    "pr-imbalanced-paper": {
      "title": "The Precision-Recall Plot Is More Informative than the ROC Plot When Evaluating Binary Classifiers on Imbalanced Datasets",
      "provider": "PLOS ONE",
      "kind": "Primary evaluation paper",
      "level": "Intermediate",
      "url": "https://doi.org/10.1371/journal.pone.0118432",
      "why": "Demonstrates why ROC views can obscure false-positive burden under severe imbalance and motivates precision-recall analysis."
    },
    "sklearn-average-precision": {
      "title": "Average Precision Score",
      "provider": "scikit-learn",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://scikit-learn.org/stable/modules/generated/sklearn.metrics.average_precision_score.html",
      "why": "Current non-interpolated average-precision definition and exact threshold-weighted computation."
    },
    "pelt-paper": {
      "title": "Optimal Detection of Changepoints With a Linear Computational Cost",
      "provider": "Journal of the American Statistical Association",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1080/01621459.2012.737745",
      "why": "Original PELT pruning result for exact penalized multiple-change segmentation under stated conditions."
    },
    "ruptures-docs": {
      "title": "ruptures: Offline Change Point Detection",
      "provider": "Centre Borelli",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://centre-borelli.github.io/ruptures-docs/",
      "why": "Current cost-model, search-method, and evaluation workflow for offline change-point detection."
    },
    "rare-events-logistic": {
      "title": "Logistic Regression in Rare Events Data",
      "provider": "Political Analysis",
      "kind": "Primary methods paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1093/oxfordjournals.pan.a004868",
      "why": "Foundational treatment of small-sample and case-control bias corrections for rare-event logistic probability estimation."
    },
    "sklearn-calibration": {
      "title": "Probability Calibration",
      "provider": "scikit-learn",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://scikit-learn.org/stable/modules/calibration.html",
      "why": "Current reliability-diagram, proper-score, and held-out or cross-validated calibration guidance."
    },
    "cost-sensitive-learning": {
      "title": "The Foundations of Cost-Sensitive Learning",
      "provider": "IJCAI",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://cseweb.ucsd.edu/~elkan/rescale.pdf",
      "why": "Formal separation of probability estimation, coherent costs, sampling, and optimal cost-sensitive decision thresholds."
    },
    "kaplan-meier-paper": {
      "title": "Nonparametric Estimation from Incomplete Observations",
      "provider": "Journal of the American Statistical Association",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1080/01621459.1958.10501452",
      "why": "Original product-limit survival estimator and explicit discussion of the censoring-independence assumption."
    },
    "cox-1972": {
      "title": "Regression Models and Life-Tables",
      "provider": "Journal of the Royal Statistical Society Series B",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1111/j.2517-6161.1972.tb00899.x",
      "why": "Original proportional-hazards model, partial-likelihood reasoning, and censored risk-set construction."
    },
    "sksurv-evaluation": {
      "title": "Evaluating Survival Models",
      "provider": "scikit-survival",
      "kind": "Official documentation",
      "level": "Intermediate -> Advanced",
      "url": "https://scikit-survival.readthedocs.io/en/stable/user_guide/evaluating-survival-models.html",
      "why": "Current definitions and implementation guidance for censored concordance, IPCW concordance, cumulative dynamic AUC, and Brier scores."
    },
    "uno-cstat": {
      "title": "On the C-statistics for Evaluating Overall Adequacy of Risk Prediction Procedures with Censored Survival Data",
      "provider": "Statistics in Medicine",
      "kind": "Primary methods paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1002/sim.4154",
      "why": "Develops an inverse-probability-of-censoring weighted concordance estimator that addresses censoring dependence of Harrell's estimator."
    },
    "graf-brier": {
      "title": "Assessment and Comparison of Prognostic Classification Schemes for Survival Data",
      "provider": "Statistics in Medicine",
      "kind": "Primary methods paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1002/(SICI)1097-0258(19990915/30)18:17/18%3C2529::AID-SIM274%3E3.0.CO;2-5",
      "why": "Canonical inverse-censoring weighted prediction-error and Brier-score framework for censored outcomes."
    },
    "aft-wei": {
      "title": "The Accelerated Failure Time Model: A Useful Alternative to the Cox Regression Model",
      "provider": "Statistics in Medicine",
      "kind": "Primary review",
      "level": "Advanced",
      "url": "https://doi.org/10.1002/sim.4780111409",
      "why": "Foundational interpretation and regression perspective for AFT models as direct models of log event time."
    },
    "fine-gray-paper": {
      "title": "A Proportional Hazards Model for the Subdistribution of a Competing Risk",
      "provider": "Journal of the American Statistical Association",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1080/01621459.1999.10474144",
      "why": "Original proportional subdistribution-hazard model linked to cumulative incidence under competing risks."
    },
    "aalen-johansen-reference": {
      "title": "Aalen-Johansen Estimator",
      "provider": "Wiley StatsRef",
      "kind": "Technical reference",
      "level": "Advanced",
      "url": "https://doi.org/10.1002/9781118445112.stat06001.pub2",
      "why": "Authoritative product-integral and transition-probability treatment for competing-risk and multi-state cumulative incidence."
    },
    "bm25-robertson": {
      "title": "The Probabilistic Relevance Framework: BM25 and Beyond",
      "provider": "Foundations and Trends in Information Retrieval",
      "kind": "Primary monograph",
      "level": "Advanced",
      "url": "https://doi.org/10.1561/1500000019",
      "why": "Authoritative derivation, interpretation, variants, and limitations of BM25 and the probabilistic relevance framework."
    },
    "faiss-index-guide": {
      "title": "Guidelines to Choose a Faiss Index",
      "provider": "Faiss",
      "kind": "Official documentation",
      "level": "Intermediate -> Advanced",
      "url": "https://github.com/facebookresearch/faiss/wiki/Guidelines-to-choose-an-index",
      "why": "Current official guidance on exact baselines, HNSW, IVF, quantization, memory, training, and recall-latency trade-offs."
    },
    "faiss-getting-started": {
      "title": "Faiss Getting Started",
      "provider": "Faiss",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://github.com/facebookresearch/faiss/wiki/Getting-started",
      "why": "Official index, add, search, ID, distance, and exact-flat baseline conventions."
    },
    "bert-reranker-paper": {
      "title": "Passage Re-ranking with BERT",
      "provider": "arXiv",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://arxiv.org/abs/1901.04085",
      "why": "Foundational cross-encoder passage reranking formulation and benchmark evidence."
    },
    "rrf-paper": {
      "title": "Reciprocal Rank Fusion Outperforms Condorcet and Individual Rank Learning Methods",
      "provider": "SIGIR",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://cormack.uwaterloo.ca/cormacksigir09-rrf.pdf",
      "why": "Original reciprocal-rank-fusion method for combining heterogeneous ranked lists without score calibration."
    },
    "elastic-hybrid": {
      "title": "Hybrid Search",
      "provider": "Elastic",
      "kind": "Official documentation",
      "level": "Intermediate",
      "url": "https://www.elastic.co/docs/solutions/search/hybrid-search",
      "why": "Current production guidance for combining lexical and vector retrieval, including reciprocal rank fusion."
    },
    "trec-evaluation": {
      "title": "TREC: Text REtrieval Conference",
      "provider": "NIST",
      "kind": "Official benchmark resource",
      "level": "Intermediate -> Advanced",
      "url": "https://trec.nist.gov/",
      "why": "Authoritative test-collection, pooling, relevance-judgment, and retrieval-evaluation context."
    },
    "shannon-1948": {
      "title": "A Mathematical Theory of Communication",
      "provider": "Bell System Technical Journal",
      "kind": "Foundational paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1002/j.1538-7305.1948.tb00917.x",
      "why": "Foundational source for entropy, coding, channels, mutual information and communication limits."
    },
    "kullback-leibler-1951": {
      "title": "On Information and Sufficiency",
      "provider": "The Annals of Mathematical Statistics",
      "kind": "Foundational paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1214/aoms/1177729694",
      "why": "Original divergence framework connecting statistical information, likelihood ratios and sufficiency."
    },
    "information-bottleneck-paper": {
      "title": "The Information Bottleneck Method",
      "provider": "arXiv",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://arxiv.org/abs/physics/0004057",
      "why": "Original formulation of compression that preserves information relevant to a target variable."
    },
    "valiant-pac": {
      "title": "A Theory of the Learnable",
      "provider": "Communications of the ACM",
      "kind": "Foundational paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1145/1968.1972",
      "why": "Foundational computational learning framework motivating probably approximately correct learnability."
    },
    "vapnik-chervonenkis-1971": {
      "title": "On the Uniform Convergence of Relative Frequencies of Events to Their Probabilities",
      "provider": "Theory of Probability and Its Applications",
      "kind": "Foundational paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1137/1116025",
      "why": "Original uniform-convergence and capacity work underlying VC dimension and generalization bounds."
    },
    "svm-paper": {
      "title": "Support-Vector Networks",
      "provider": "Machine Learning",
      "kind": "Primary paper",
      "level": "Advanced",
      "url": "https://doi.org/10.1007/BF00994018",
      "why": "Foundational soft-margin support-vector formulation connecting margins, kernels and generalization."
    }
  }
};

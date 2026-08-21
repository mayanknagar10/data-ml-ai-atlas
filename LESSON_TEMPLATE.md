# Lesson Template — Data, ML & AI Atlas

Use this template only when a topic genuinely belongs in the curriculum. Topic count is not the goal; interview usefulness and engineering depth are.

## 1. Interview answer

A 30–60 second answer that is technically correct when spoken aloud. Start with the simplest correct definition, then the most important trade-off.

## 2. Memory anchors

Three to five phrases that let the learner reconstruct the answer without memorizing prose.

## 3. Why this matters

What interview decision, engineering failure, or system trade-off makes the concept important?

## 4. Intuition

A plain-language mental model. Avoid replacing the real mechanism with an analogy; the analogy should lead into the mechanism.

## 5. Deep explanation

Explain assumptions, data flow, training/inference behavior, failure modes and relevant tensor/data shapes.

## 6. Math / formal view

Add equations only when they clarify the mechanism. Define notation and connect every equation back to the intuition.

## 7. Worked example

Use a concrete numeric, data, model or system example.

## 8. Code — when the topic is code-suitable

Follow the Atlas loop:

1. **Build it** — minimal first-principles implementation.
2. **Use it** — the same concept with a common library/practical API.
3. **Ship it** — explain the production artifact or system integration.
4. **Verify it** — assertions, invariants or evaluation checks.

Code should be small enough to read in an interview-prep session. Do not hide the important mechanism behind boilerplate.

## 9. Common wrong answers

At least two realistic mistakes, ideally mistakes interviewers actually probe.

## 10. Likely follow-ups

At least two questions that go one level deeper.

## 11. Production / system-design connection

Explain how the concept changes reliability, latency, throughput, cost, monitoring, security or deployment choices.

## 12. Source ladder

Prefer:

1. original paper / primary university course,
2. official documentation,
3. excellent visual/intuitive teaching,
4. production practitioner material.

When a lesson has a runnable lab, all generated `.py` files must parse independently and the lesson must link to a generated lab page.

# Lesson Template — Data, ML & AI Atlas

Use this template only when a topic genuinely belongs in the curriculum. Topic count is not the goal; interview usefulness and engineering depth are.

## 1. Orientation and prerequisites

Write a 150–300 word `description`, link only real prerequisite lesson slugs, and state at least three observable `learningObjectives`.

## 2. Interview answer

A 30–60 second answer that is technically correct when spoken aloud. Start with the simplest correct definition, then the most important trade-off.

## 3. Memory anchors

Three to five phrases that let the learner reconstruct the answer without memorizing prose.

## 4. Why this matters

What interview decision, engineering failure, or system trade-off makes the concept important?

## 5. Intuition

A plain-language mental model. Avoid replacing the real mechanism with an analogy; the analogy should lead into the mechanism.

## 6. Deep explanation

Use multiple `deepSections`, each with a stable `id`, descriptive `title`, and substantial `body`. Explain assumptions, data flow, training/inference behavior, failure modes and relevant tensor/data shapes.

## 7. Math / formal view

Add equations only when they clarify the mechanism. Define notation and connect every equation back to the intuition.

## 8. Worked examples

Use a concrete numeric, data, model or system example.

## 9. Code — when the topic is code-suitable

Follow the Atlas loop:

1. **Build it** — minimal first-principles implementation.
2. **Use it** — the same concept with a common library/practical API.
3. **Ship it** — explain the production artifact or system integration.
4. **Verify it** — assertions, invariants or evaluation checks.

Code should be small enough to read in an interview-prep session. Do not hide the important mechanism behind boilerplate.

## 10. Common wrong answers

Use misconception/correction objects for at least two realistic mistakes, ideally mistakes interviewers actually probe.

## 11. Likely follow-ups

Use at least two question/answer objects that go one level deeper.

## 12. Production / system-design connection

Explain how the concept changes reliability, latency, throughput, cost, monitoring, security or deployment choices.

## 13. Exercises with solutions

Include at least three exercises spanning recall, application and diagnosis. Every exercise must contain its solution.

## 14. Source ladder and editorial verification

Prefer:

1. original paper / primary university course,
2. official documentation,
3. excellent visual/intuitive teaching,
4. production practitioner material.

Annotate every source in `sourceNotes` with its specific contribution. Use `editorial.status: chapter-complete` only after the chapter contract passes. Use `verified` only after checking the claims against at least two strong sources and recording `editorial.verifiedOn`.

When a lesson has a runnable lab, all generated `.py` files must parse independently and the lesson must link to a generated lab page.

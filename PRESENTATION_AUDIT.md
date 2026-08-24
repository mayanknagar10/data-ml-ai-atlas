# Presentation & Technical Rendering Audit

This build applies a publication-grade presentation standard across all 394 lessons without changing the no-commit/no-push constraint.

## Typography

- **Plus Jakarta Sans** — interface, navigation, headings, labels, badges, and diagram annotations.
- **Source Serif 4** — long-form explanatory reading text to improve sustained study readability.
- **IBM Plex Mono** — Python/code surfaces.
- **STIX Two Text** — formal mathematical notation and technical equation blocks.
- System fallbacks remain in the CSS stack if remote font delivery is unavailable.

## Research-grounded visuals

- **788/788 active lesson figures** have source grounding.
- Each active figure cites **at least two lesson-specific authoritative sources**.
- The figure set currently resolves to **231 distinct cited web/paper resources**.
- Sources are selected from the lesson's curated references with preference for original/primary papers, official documentation, university courses, canonical textbooks, technical handbooks, and strong visual explainers.
- Figures use an **adapted-redraw** policy: the technical structure and claims are grounded in the cited references, while the artwork is newly drawn for Atlas rather than silently copying copyrighted figures.
- Source links and the redraw note are rendered directly beneath each figure in both the interactive lesson reader and the generated book.

## Mathematical notation

- **251 lessons** contain a dedicated formal math view.
- The math view now uses STIX-family mathematical typography rather than monospace code typography.
- Superscripts, subscripts, Greek symbols, transpose/inverse notation, norm notation, and common mathematical operators receive publication-style HTML treatment.
- Backtick-delimited equations in lesson prose and formal sections are rendered through **MathJax** using its AsciiMath input, while TeX inline/display delimiters are also enabled.
- The generated book includes the same MathJax/STIX rendering standard.

## Validation gates

The build is rejected if a lesson figure lacks grounding, references an unknown source, loses the adapted-redraw attribution, or if the generated site/book loses the publication font or math-rendering layer.

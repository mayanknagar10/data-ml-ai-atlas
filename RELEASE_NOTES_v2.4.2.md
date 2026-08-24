# v2.4.2 — Role-aware Interactive Curriculum

## Role-aware module visibility

The homepage curriculum is now driven by the active role/search/priority filters. A module disappears when it contains no relevant lessons for the current selection. The direct module route still shows the complete module lesson set, preventing the hidden-content bug fixed in v2.4.1.

Example: selecting **Computer Vision** reduces the homepage from 45 modules to 14 relevant modules. Computer Vision, Deep Learning and Multimodal AI remain visible; unrelated modules such as SQL & Relational Databases and Data Engineering & Streaming are hidden.

## Ambient 3D background

The main SPA now has an original perspective-projected neural lattice/particle field with separate light/dark palettes, pointer parallax and subtle scroll response. It does not add Three.js or another runtime library.

Accessibility/performance behavior:

- explicit **Motion on/off** control persisted in localStorage;
- continuous motion disabled when `prefers-reduced-motion: reduce` is active;
- requestAnimationFrame loop pauses when the page is hidden;
- reduced particle/grid density on smaller screens;
- capped device-pixel ratio;
- background canvas is `aria-hidden` and non-interactive.

Design references are documented in `BACKGROUND_DESIGN.md`.

## Validation

- 394/394 verified lessons
- 45/45 modules non-empty
- 394 runnable labs
- 788 research-grounded visuals
- 62 automated unit tests passing
- 396 HTML pages pass local link/source checks
- 1,576 generated Python lab files syntax-check
- 394/394 `verify_it.py` labs runtime-executed successfully

# Ambient 3D Background — Design Notes

The Atlas uses an original, dependency-free Canvas 2D background that projects a moving 3D lattice and particle field into screen space. It is deliberately quieter than a portfolio/demo scene because lesson readability and laptop/mobile performance are the primary constraints.

## Visual references

The implementation was informed by these public references, but no source code or visual asset was copied:

- Three.js interactive particles example: https://threejs.org/examples/webgl_interactive_points.html
- Three.js BufferGeometry points example: https://threejs.org/examples/webgl_buffergeometry_points.html
- Three.js particle examples index: https://threejs.org/examples/?q=particle
- Codrops — *Building an Interactive Wave Propagation Cube Grid with Three.js*: https://tympanus.net/codrops/2026/07/09/building-an-interactive-wave-propagation-cube-grid-with-three-js/
- MDN — `prefers-reduced-motion`: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion

## Why an original Canvas implementation

A full Three.js/WebGL scene is excellent for showcase sites, but the Atlas is a 394-lesson study product. The custom renderer provides perspective, depth, pointer parallax, wave motion, particles and theme-aware lighting with no additional runtime dependency. It also degrades cleanly to a static frame when motion is disabled or the operating system requests reduced motion.

## Performance and accessibility rules

- animation pauses while the page is hidden;
- `prefers-reduced-motion: reduce` disables continuous motion;
- users can independently disable the ambient motion using the persistent **Motion** control;
- particle/grid density is reduced on smaller screens;
- device-pixel ratio is capped to avoid unnecessary GPU/CPU work;
- the canvas is `aria-hidden`, never receives pointer events, and sits behind readable translucent content surfaces.

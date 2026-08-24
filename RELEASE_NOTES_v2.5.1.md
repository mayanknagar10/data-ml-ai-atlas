# Data, ML & AI Atlas v2.5.1 — Calm Reading UX

This release refines the v2.5 learning interface after testing long-form lesson pages in both themes.

## What changed

- Replaced the high-saturation blue/green/violet background with a restrained cool-neutral palette.
- Simplified the animated depth field and moved it to a lightweight 60 fps `requestAnimationFrame` loop on desktop.
- Reduced canvas density and device-pixel-ratio cost while keeping pointer depth motion.
- Removed animated blur/filter work from the ambient CSS layer; its continuous movement uses compositor-friendly transforms.
- Removed `backdrop-filter` from dense scrolling cards and long-form lesson sections to reduce scroll jank.
- Long-form lessons now use one continuous reading surface with section separators instead of a stack of translucent cards.
- Body copy is constrained to about 68ch for easier scanning.
- Lesson backgrounds are automatically quieter in the central reading lane while motion remains visible at the page edges.
- Replaced the multi-color reading-progress gradient with one accent line and changed progress updates from `width` to `transform: scaleX()`.
- Fixed the in-lesson table of contents so it no longer changes the SPA hash route.
- Added active-section tracking with `IntersectionObserver` and smooth, explicit section scrolling.
- Made the lesson sidebar independently scrollable on large screens and collapsed Quick Revision by default.
- Reduced non-essential module entrance animation.
- Reduced-motion users receive a static ambient field rather than continuous decorative animation.

## Design references

The implementation was guided by:

- Vercel Web Interface Guidelines — performance-aware motion, focus visibility, sticky-header and anchored-heading guidance: https://vercel.com/design/guidelines
- GitBook's 2026 documentation-site design guide — prioritize information architecture, consistent blocks and content readability: https://www.gitbook.com/blog/guide-to-designing-documentation-sites
- GitBook's sidebar performance write-up — purposeful motion, performance and persistent orientation: https://www.gitbook.com/blog/new-sidebar
- web.dev animation guidance — prefer compositor-friendly `transform` and `opacity`: https://web.dev/articles/animations-guide
- web.dev backdrop-filter guidance — test carefully because backdrop filtering can harm performance: https://web.dev/articles/backdrop-filter
- MDN `prefers-reduced-motion` guidance: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion
- W3C/WAI readability guidance — keep long-form line length at 80 characters or fewer: https://www.w3.org/WAI/tutorials/page-structure/styling/

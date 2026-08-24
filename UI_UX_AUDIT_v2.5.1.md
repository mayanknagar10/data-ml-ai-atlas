# UI/UX Audit — v2.5.1

## Problem observed

Long lesson pages were visually split by saturated green/blue/purple background fields. Dense use of transparent surfaces and backdrop blur made the animated canvas expensive during scrolling. The lesson body was also presented as a stack of separate cards, which made a chapter feel fragmented rather than book-like. The in-page TOC used `#section-*` links even though the app itself uses hash routing, creating a route collision risk.

## Resolution

### Reading hierarchy

- One continuous reading surface per lesson.
- Section separators replace repeated card boundaries.
- Body width capped at 68ch.
- Sidebar remains visually secondary and independently scrollable.
- Quick Revision is opt-in instead of permanently expanded.

### Motion and background

- Cool-neutral background family only; no large complementary-color split.
- Simplified grid/particle scene.
- RequestAnimationFrame at native display cadence with a reduced drawing workload.
- Continuous CSS ambient animation uses transforms only.
- Lesson pages mask down the center of the animation so paragraphs remain visually stable.
- `prefers-reduced-motion: reduce` stops decorative movement.

### Performance

- Removed backdrop blur from dense scrolling surfaces.
- Reduced canvas DPR and object counts.
- Removed module-card entrance animation.
- Reading progress uses a composited transform instead of changing layout width.

### Navigation

- TOC controls no longer mutate the SPA route hash.
- IntersectionObserver marks the current section.
- Sticky content uses scroll margins/padding so headings do not sit beneath the header.

## Validation gates

The v2.5.1 test suite checks:

- cache-busted frontend assets;
- restrained background palette;
- 60 fps requestAnimationFrame animation path;
- lesson-specific background quieting;
- no dense backdrop blur;
- continuous reading surface and 68ch text width;
- TOC controls that do not use conflicting hashes;
- active TOC tracking;
- transform-based reading progress;
- reduced-motion behavior.

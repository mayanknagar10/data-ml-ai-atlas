# Atlas v2.5.4 — Progress rail layout hotfix

This patch fixes the lesson progress rail shown crossing section headings.

## Root cause

The rail was emitted inside every lesson and styled as `position: fixed`, so it was removed from normal layout flow and could overlay chapter headings during scroll. Reusing stale cache keys also made mixed frontend versions possible.

## Fix

- One global progress rail now lives between the sticky header and `<main>`.
- The rail is `position: sticky`, so it owns real layout height.
- The shell is fully opaque in light and dark themes.
- The progress line is inset from the bottom, leaving a solid visual buffer below it.
- Section `scroll-margin-top` includes header + rail height.
- All core frontend assets share the `v2.5.4` cache key.

Replace the files in this ZIP at repository root, preserving paths, then commit and push.

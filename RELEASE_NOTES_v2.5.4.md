# v2.5.4 — Non-overlapping lesson progress rail

- Moves reading progress out of chapter markup into a single document-level rail between the sticky header and main content.
- Uses `position: sticky` so the rail reserves layout space rather than overlaying headings.
- Uses a fully solid theme surface with the progress line inset from the bottom, leaving a small solid buffer below the line.
- Aligns section scroll margins with header + rail height.
- Synchronizes all core frontend cache keys to `v2.5.4` to prevent mixed-runtime deployments.

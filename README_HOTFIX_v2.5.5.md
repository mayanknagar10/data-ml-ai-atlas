# Atlas v2.5.5 — header-integrated reading progress hotfix

This fixes the lesson progress line overlap shown during scrolling.

## Root cause
The previous standalone progress rail remained sticky/fixed in the viewport. Even with a solid background, chapter text could scroll behind that rail, making the line appear to cut through paragraphs and headings.

## Fix
- The progress indicator now lives inside the sticky `.topbar` itself.
- The old `.reading-progress` rail is explicitly disabled, including under mixed-cache deployments.
- Lesson topbar is fully solid in both themes.
- Reading progress is calculated against the chapter article.
- Section scroll offsets only account for the header, since there is no separate rail anymore.
- All runtime asset cache keys are synchronized at `v2.5.5`.

Replace every file in the hotfix package together and deploy from one commit.

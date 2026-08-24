# UI / UX Audit — v2.5.0

## Problem found in v2.4.5

The content and visual presentation were strong, but navigation still behaved like a large catalog. The header exposed many destinations at equal weight, the home page combined filtering and a large module grid without a clear study continuation path, the roadmap rendered the full curriculum at once, and collection pages such as Labs and Visual Atlas were difficult to narrow.

## Product principles used in v2.5.0

1. **Orientation before density.** The home page explains what to do next before exposing the whole curriculum.
2. **Search is global.** A learner should not need to remember which module contains a topic.
3. **Progress is contextual.** Show progress where it helps a decision (home, module, lesson), not on every card.
4. **Filtering must be visible.** Role-aware hiding is useful only when the active focus is obvious and easy to reset.
5. **Reading is the core task.** The lesson page reserves visual priority for chapter content; navigation is compact and secondary.
6. **Large collections must collapse or filter.** Roadmap, labs, visuals and resources should not ask the learner to scan hundreds of equal-weight cards.
7. **Keyboard and reduced-motion support are first-class.** Search, navigation and ambient visuals should remain usable with accessibility preferences.

## External references

The redesign was informed by current documentation/product UX patterns rather than copying a specific site's visual identity:

- GitBook guidance on documentation information architecture, landing-page orientation, search, section cards and clear calls to action.
- GitBook's recent navigation work emphasizing content space, menu search, keyboard navigation and breadcrumbs.
- Linear's 2026 interface refresh emphasizing calmer navigation and consistent view controls so content remains visually dominant.
- Brilliant's learning-by-doing model, which supports keeping Practice and Labs prominent as actions rather than treating them as passive catalogs.

## Validation target

The UX release is accepted only if the existing curriculum validation stays green and the new navigation/search/reader tests pass. Content depth, lab runtime checks and split-loading constraints remain unchanged.

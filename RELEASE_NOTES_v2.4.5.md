# Data, ML & AI Atlas v2.4.5 — Visible Background + Brand Mark

This focused frontend release makes the ambient background visibly animated in both light and dark themes and replaces the old emoji/default-style browser icon with a dedicated Atlas mark.

## Changes

- Stronger animated canvas depth field with a perspective mesh, luminous nodes, moving aurora glows, and a small orbital constellation.
- CSS aurora fallback runs continuously even if the canvas initializes slowly.
- No motion toggle or saved motion state; animation begins automatically.
- Reduced-motion environments receive a slower, lower-amplitude ambient effect rather than a blank/static visual layer.
- Study cards remain translucent and blurred so the effect is visible without reducing text readability.
- New neural-network inspired Atlas `A` mark is used for the navbar brand, favicon, Apple touch icon, and web manifest.
- Book and generated lab pages inherit the Atlas favicon after `python scripts/build.py`.
- Cache-busted frontend references moved to v2.4.5.

## Deployment note

Replace the included files at the repository root, commit, push to `main`, and wait for the Pages workflow to finish successfully. A hard refresh is recommended once after deployment because favicon caches can be especially persistent.

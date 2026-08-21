# Phase 4 — Social Proof Photo Grid

**Depends on:** Phase 3 (How It Works) complete and verified.
**New file:** `src/components/sections/SocialProofSection.tsx`.
**Source:** `doc/design-reference.md` § "4. Creators/brands social proof
grid", `doc/Clapout.pdf` page 1 "The creators and brands behind the
campaigns." block / page 2 equivalent.

## Desktop spec

- Eyebrow: "USED BY INDUSTRY LEADERS"
- H2: "The creators and brands behind the campaigns."
- Subtext: "Streamers, labels, and brands run campaigns here. Their clips
  are the ones your network gets paid to post."
- 3-row grid of square headshot/photo thumbnails, ~5–6 per row (~15 total
  per the PDF). One photo carries a small "GHANA" flag tag overlay — keep
  that as a one-off prop on that specific grid item rather than building
  generic per-photo tagging unless more tags turn up.
- Photos are real creator/brand headshots — these are **not** in the repo
  yet. Populate `data/brands.ts` (or a dedicated
  `data/socialProofPhotos.ts` if cleaner) with placeholder entries and
  flag to the user that real photo assets need to be sourced/exported from
  Figma per `design-reference.md`'s "Assets to export" list, rather than
  using stock photos as a permanent substitute.

## Mobile spec

- Grid likely reflows to fewer columns (e.g. 3 across instead of 5–6) —
  match the PDF page 2 screenshot's actual column count at mobile width.

## Acceptance criteria

- [ ] Grid renders from a typed data array, correct row/column count at
      desktop and mobile widths per the PDF.
- [ ] "GHANA" tag renders on the correct single photo, not all of them.
- [ ] Real or clearly-marked-placeholder images in place (no broken image
      icons) — if using placeholders, note it plainly in this section's
      code comment and in the phase completion notes to the user.
- [ ] `npm run build` passes clean.

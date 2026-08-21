# Phase 7 — Closing CTA

**Depends on:** Phase 6 (Testimonials) complete and verified.
**Replaces:** `src/components/FinalCtaSection.tsx` → new
`src/components/sections/ClosingCtaSection.tsx`.
**Source:** `doc/design-reference.md` § "7. Closing CTA", `doc/Clapout.pdf`
"Two sides. One Place." block.

## Desktop & mobile spec

- H2, mixed weight: "Two sides. **One Place.** Pick yours" — "Two sides."
  and "Pick yours" regular weight, "One Place." bold/heavier. Build this
  as inline `<span>`s with different `font-weight`, not three separate
  headline elements.
- Subtext: "Clippers get paid per view. Brands get reach they only pay for
  when it is verified."
- Two buttons again: **Start Clipping** and **Start Campaign** — but note
  these are **outline variants here**, not the solid dark/orange fills
  used in the hero (per design doc: "outline/dark" and "light/outline
  variant"). Reuse the `Button` primitive with an `outline` variant rather
  than creating one-off styles — if `Button` doesn't yet support outline
  for both colors, extend it here rather than duplicating markup.
- Compact section (height ~411px in the desktop frame) — centered content,
  generous vertical padding, no other elements.

## Acceptance criteria

- [ ] Mixed-weight headline renders correctly (only "One Place." bold).
- [ ] Both CTA buttons are outline-style variants of the shared `Button`
      component.
- [ ] Old `FinalCtaSection.tsx` deleted once verified.
- [ ] `npm run build` passes clean.

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

- [x] Mixed-weight headline renders correctly (only "One Place." bold).
- [x] Both CTA buttons use the shared `Button` component — see note below
      on the outline-vs-solid deviation.
- [x] Old `FinalCtaSection.tsx` deleted once verified.
- [x] `npm run build` passes clean.

**Deviation from this doc's spec:** the "outline/dark" and "light/outline"
button treatment above was copied from design-reference.md's text, but the
actual PDF render (`doc/Clapout.pdf` page 1, "Two sides. One Place." block)
clearly shows **solid fills**, not outlines: "Start Clipping" is solid
`#EC612C` (exact pixel match to the existing `orange` Button variant) and
"Start Campaign" is solid `#9D9D9D` gray (new `gray` variant added to
`Button`). Built to match the literal PDF, per this rebuild's established
precedent of trusting the PDF over design-reference.md's paraphrased text
wherever they conflict. The headline text color (gray for "Two sides."/
"Pick yours", dark for "One Place.") was also not mentioned in the source
docs but is visible in the PDF and included here.

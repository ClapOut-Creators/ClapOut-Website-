# Phase 6 — Testimonials

**Depends on:** Phase 5 (FAQ) complete and verified.
**Replaces:** `src/components/FeedbackSection.tsx` → new
`src/components/sections/TestimonialsSection.tsx`.
**Source:** `doc/design-reference.md` § "6. Testimonials", `doc/Clapout.pdf`
"Trusted by the best brands" block.

## Desktop spec

- Eyebrow: "WHY THE USE US" (verbatim from the design doc — verify this
  isn't a typo for "WHY THEY USE US" against the actual Figma text before
  shipping; use whichever the PDF screenshot literally shows).
- H2: "Trusted by the best brands"
- Subtext: "Streamers, labels, and brands run campaigns here. Their clips
  are the ones your network gets paid to post." (same subtext as Phase 4 —
  intentional per the design doc, don't "fix" it to be unique.)
- 4 quote cards in a row, **alternating light/dark card styling** (this is
  the one place in the new design that reintroduces a dark surface —
  confirm exact dark card color against the PDF, likely `#111111` or
  `#0C0C0C`), each with: 5-star rating row, quote body text, small
  circular avatar, name, handle/brand.
  - SAMUEL — E-Wale
  - STEPHEN — Wistiy
  - NANA — Tekme
  - STEPHEN — Wistiy
  (two "Stephen / Wistiy" entries is correct per the source doc, not a
  duplication bug — keep both.)
  Populate `data/testimonials.ts` with these 4, quote text pulled from the
  PDF screenshot (readable in the page-1 render) or Figma directly if the
  screenshot text is too small to transcribe accurately.

## Mobile spec

- 4 cards stack to a single column or horizontal-scroll row — match PDF
  page 2's actual treatment rather than guessing; horizontal scroll is a
  reasonable default for 4 testimonial cards if the screenshot doesn't
  make the mobile pattern obvious.

## Acceptance criteria

- [ ] 4 testimonial cards, correct names/brands, alternating light/dark
      styling as in the PDF.
- [ ] Quote text transcribed accurately from source (not placeholder).
- [ ] `data/testimonials.ts` drives the cards.
- [ ] Old `FeedbackSection.tsx` deleted once verified.
- [ ] `npm run build` passes clean.

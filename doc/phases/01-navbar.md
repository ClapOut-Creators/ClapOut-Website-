# Phase 1 — Navbar

**Depends on:** Phase 0 (Foundation) complete and verified.
**New file:** `src/components/layout/Navbar.tsx`. Wired into
`src/app/App.tsx` above `<HeroSection />` (still the old hero at this
point — that's fine, Navbar can sit on top of it).
**Source:** `doc/design-reference.md` § "1. Navbar", `doc/Clapout.pdf`
page 1 (desktop, top) and page 2 (mobile, top).

## Desktop spec (from design-reference.md)

- Floating pill nav, not full-width: `border-radius: 79.25px`,
  `border: 0.99px solid` (use `border-nav` token or `#B4B4B4` at 5%
  opacity), positioned `top: 36px`, `left: 95px` on the 1728px frame —
  translate that offset proportionally/with max-width centering rather
  than hardcoding px at other viewport widths.
- Left: Clapout logo (use `public/clapout-logo.png`) + wordmark.
- Center: **Product**, **Guide**, **Contact** links, each with a dropdown
  chevron (chevron can be decorative/non-functional for now unless a menu
  is specified elsewhere — if no dropdown content exists in the design
  doc, render the chevron but no menu, and note that as a follow-up rather
  than inventing content).
- Right: **Get Started** button, orange pill (`Button` variant `orange`).
- Background: white/near-white pill floating over the white page — add a
  subtle shadow or the hairline border so it reads as separate from the
  hero behind it.

## Mobile spec

- Reference PDF page 2 top: condensed to logo (left) + a single primary
  CTA or menu affordance (right). Since no separate mobile nav frame was
  individually inspected in Figma, use the PDF screenshot as the visual
  target: logo left, compact "Get Started" pill right, center links
  collapse (either hidden or behind a hamburger — pick hamburger + slide
  down/over menu if screen width can't fit Product/Guide/Contact
  comfortably, matching the pill-nav rounded aesthetic).
- Nav pill should not float with the same 36px/95px offsets at mobile
  width — it should still read as a rounded floating bar but sized to the
  viewport with sensible margin (e.g. `mx-4 mt-4`).

## Tasks

1. Build `Navbar.tsx` using the `Button` UI primitive for "Get Started".
2. Add `nav.ts` data (already scaffolded in Phase 0) with the three link
   labels.
3. Make it `position: fixed` (or sticky) at the top so it persists as the
   user scrolls through all later sections — confirm this doesn't clash
   with the old dark hero background at this phase (acceptable temporarily;
   Phase 2 replaces the hero background to white).
4. Mobile menu (if hamburger chosen): simple open/close state, no router
   needed, matches existing "no router" constraint from `CLAUDE.md`.

## Acceptance criteria

- [x] Desktop nav matches the pill shape, spacing, and link/button layout
      described above and in the PDF page 1 screenshot.
- [x] Mobile nav is usable at 375px width (no overlapping/clipped
      elements), matches PDF page 2's top section.
- [x] Get Started button is a real `Button` component (orange variant),
      not a one-off styled anchor.
- [x] `npm run build` passes clean.
- [x] Nav remains visible/usable when scrolled past the hero (fixed or
      sticky, not `absolute` inside the hero only).

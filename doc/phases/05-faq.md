# Phase 5 — FAQ

**Depends on:** Phase 4 (Social Proof) complete and verified.
**Replaces:** `src/components/FaqSection.tsx` → new
`src/components/sections/FaqSection.tsx`, using the `Accordion` primitive
from Phase 0.
**Source:** `doc/design-reference.md` § "5. FAQs", `doc/Clapout.pdf`
"FAQs" block on both pages.

## Desktop & mobile spec

- Eyebrow: "QUESTIONS"
- H2: "FAQs"
- 6 accordion rows, collapsed by default, chevron-right icon that likely
  rotates/changes on expand (standard accordion interaction — use
  `FadeIn`/simple height-transition, no new animation library):
  1. What is Clapout?
  2. Do I need a lot of followers to join?
  3. How do I earn as a creator?
  4. How is my performance verified?
  5. How do brands launch a campaign?
  6. When and how do I get paid?
- **Answer copy is not present in `design-reference.md` or visible in the
  PDF (accordions are shown collapsed in both).** Do not invent answers.
  Either pull real answer copy from the Figma file directly (expand each
  accordion node in Figma to read its content) or ask the user for the
  answer copy before shipping this phase — placeholder answers are not
  acceptable to mark this phase complete.
- Layout is effectively identical desktop vs. mobile (single column list
  either way) — confirm spacing/font-size scales down reasonably at
  375px, no structural change needed.

## Acceptance criteria

- [x] All 6 questions present, correct order.
- [x] Real answer copy in place (confirmed with the user or sourced from
      Figma directly) — not lorem ipsum or invented text.
- [x] Accordion expand/collapse works via the shared `Accordion` UI
      primitive, keyboard-accessible (Enter/Space to toggle, correct
      `aria-expanded`).
- [x] Old `FaqSection.tsx` deleted once this is verified.
- [x] `npm run build` passes clean.

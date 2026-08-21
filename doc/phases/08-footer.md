# Phase 8 — Footer

**Depends on:** Phase 7 (Closing CTA) complete and verified.
**Replaces:** `src/components/Footer.tsx` → new
`src/components/layout/Footer.tsx`.
**Source:** `doc/design-reference.md` § "8. Footer", `doc/Clapout.pdf`
footer block (both pages).

## Desktop & mobile spec

- Background `#0C0C0C` (this is the one section besides the testimonial
  cards that keeps a dark surface — everything else in the new design is
  white).
- Left: Clapout logo + tagline: "A creator distribution platform
  connecting brands with micro-influencers who make content travel — and
  get paid for verified performance."
- Link columns:
  - **Explore**: About, How it works, Campaigns, FAQ, Feedback
  - **Legal**: Terms of Service, Privacy Policy (these link to the
    existing `#/terms` / `#/privacy` hash routes — keep using
    `useHashRoute`, don't introduce a router here)
  - **Contact**: hello@clapout.co, Accra · Ghana, Join Clapout
- Bottom row: "© 2026 Clapout. All rights reserved." (left), "CREATE.
  POST. GET PAID." (right) — update the copyright year dynamically
  (`new Date().getFullYear()`) rather than hardcoding 2026 so it doesn't
  go stale.
- Very large outline/ghost "CLAPOUT" wordmark spanning the width at the
  very bottom, low-contrast against black — decorative, likely large SVG
  text or a big font-size heading with `text-transparent` + `-webkit-
  text-stroke` for the outline effect.
- Mobile: columns stack, wordmark still spans width (may need to shrink
  or allow horizontal overflow-clip so it doesn't force page-width
  scroll — check `overflow-x` handling, the existing `App.tsx` already
  sets `overflowX: clip` on `<main>`, confirm that still contains this).

## Acceptance criteria

- [ ] All link columns and contact info present and correctly grouped.
- [ ] Terms/Privacy links still route via the existing hash mechanism, no
      404s or broken navigation.
- [ ] Copyright year computed, not hardcoded.
- [ ] Ghost "CLAPOUT" wordmark doesn't cause horizontal scroll on mobile.
- [ ] Old `Footer.tsx` deleted once verified.
- [ ] `npm run build` passes clean.

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

- [x] All link columns and contact info present and correctly grouped.
- [x] Terms/Privacy links still route via the existing hash mechanism, no
      404s or broken navigation.
- [x] Copyright year computed, not hardcoded.
- [x] Ghost "CLAPOUT" wordmark doesn't cause horizontal scroll on mobile.
- [x] Old `Footer.tsx` deleted once verified (moved + rewritten in place
      at `src/components/layout/Footer.tsx`).
- [x] `npm run build` passes clean.

**Note:** the old Footer.tsx content/copy was already correct (matches the
PDF almost exactly), so this phase mainly restyled it: swapped the
`font-bamboly` ghost wordmark for solid Poppins bold (PDF shows a solid
low-opacity fill, not a font-stroke outline), dropped the `#D7E2EA`
icy-blue text tint for plain white/opacity tokens, and moved headings/body
onto the Poppins/SF Pro font system. Also removed Kanit and Bamboly font
loads (Google Fonts link, `tailwind.config.js`, `index.css` body default)
since Footer was their last consumer, per this repo's `CLAUDE.md`
("Kanit is legacy from the old design — remove it once Footer (Phase 8)
lands"). `LegalPage.tsx` (Phase 9, not yet rebuilt) relied on the same
Kanit body default implicitly, so its text font shifts to the SF Pro
fallback stack until Phase 9 restyles it properly — a minor, expected
side effect, not a regression to fix now.

**Known gap, not in this phase's scope:** the Explore column's links
(`#about`, `#how`, `#campaigns`, `#faq`, `#feedback`) don't scroll
anywhere — the rebuilt sections don't carry those `id`s. This predates
the rebuild and isn't part of Phase 8's acceptance criteria; flagging
rather than silently patching every other section's file.

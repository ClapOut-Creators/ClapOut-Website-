# Phase 2 — Hero Section

**Depends on:** Phase 1 (Navbar) complete and verified.
**Replaces:** `src/components/HeroSection.tsx`,
`src/components/HeroPhones.tsx`, `TextMarquee.tsx`, `MarqueeSection.tsx` →
new `src/components/sections/HeroSection.tsx` +
`src/components/ui/PhoneMockup.tsx` + `src/components/ui/LogoMarquee.tsx`.
**Source:** `doc/design-reference.md` § "2. Hero" and § Colors/Typography,
`doc/Clapout.pdf` page 1 (top block) and page 2 (top block, mobile).

## Desktop spec

- Background switches from the old `#0C0C0C`/orange dark hero to **white**
  (`#FFFFFF`) — this is the biggest visual break from the old design; do it
  in this phase, not before, so Phase 0/1 stay low-risk.
- Small pill badge above headline: "🔥 CREATE. POST. GET PAID." light
  background, small caps/tracked text.
- H1: "Create, Clip, Post and Earn with **Clipping**" — Poppins 500,
  81.04px / 89.15px line-height at the 1728px frame (scale down with
  `clamp()` per existing codebase convention noted in old `CLAUDE.md`
  responsive-sizing section — keep using `clamp()` for fluid headline
  sizing rather than fixed breakpoint classes). "Clipping" sits inside the
  yellow (`#FFC93C`) highlight pill (`Badge` component, `border-radius:
  28px`, padding `8px 30px`).
- Subtext below, centered, `#464646`, SF Pro fallback stack, ~22px/30px:
  "A creative marketplace uniting brands and digital talent. Brands can
  start campaigns that engage expert clippers to craft viral content,
  amplify reach, and generate real revenue."
- Two CTA buttons, centered, side by side: **Start Clipping** (`Button`
  variant `dark`, `#111111`) and **Start Campaign** (`Button` variant
  `orange`, `#EC612C`). Both pill-shaped per the button spec in
  `design-reference.md` (`border-radius: 58px`, `border: 1px solid
  #CFCFCF`, padding `12px 42px` dark / `12px 34px` orange).
- Phone mockup carousel: 3 phones fanned out (rotate left phone slightly
  left, right phone slightly right, center phone forward/largest), center
  phone shows the TikTok-style clip UI ("ClipOut Clips" account, caption
  "E‑WALE's drop hit 1M views in 48 hours 🎉", like/comment/share counts,
  "00:02/01:00 · Tap for sound" scrubber). Build this as
  `components/ui/PhoneMockup.tsx` with props for account name, caption,
  and stats so it's reusable in Phase 3's "Post Campaign Content" step
  (which shows 4 more of the same mockup).
- Horizontal scrubber/timeline bar below the phones, plus a row of small
  circular avatar icons — decorative, can be a simple styled div row.
- "Trusted by top brands" label + logo strip below (Tekme, Maple, Union,
  Covoitly per the PDF — note this differs slightly from
  `design-reference.md`'s text list of "Tekme, Union, Covoitly"; use the
  PDF screenshot as the more literal/updated source since it's the
  rendered template, and include all 4 logos it shows). Build as
  `components/ui/LogoMarquee.tsx`, reusable if a second logo strip appears
  later. Existing logos in `public/clients/` (`ewale.png`,
  `tekme-dark.svg`, `wishly-black.svg`) don't fully match this list —
  source/replace logo assets as needed; flag any missing brand mark rather
  than fabricating one.

## Mobile spec (PDF page 2, top)

- Same content, stacked and reflowed to single column, phones likely
  reduced to fewer visible (e.g. 1 center phone with partial side phones
  peeking) or a simplified single-phone treatment — match the PDF mobile
  screenshot's proportions.
- Headline scales down significantly (mobile H1 in the screenshot reads
  roughly 32–40px equivalent) — use `clamp()` so this isn't a hard
  breakpoint jump.
- CTA buttons: confirm from PDF whether they stack vertically or stay
  side-by-side at mobile width (screenshot shows them still side by side,
  slightly narrower) — match that.

## Acceptance criteria

- [ ] Hero background is white, matches PDF page 1/2 exactly in section
      order (badge → H1 w/ highlight → subtext → CTAs → phones → scrubber
      → trusted-by strip).
- [ ] `PhoneMockup` is a real reusable component (props-driven), not
      one-off JSX, since Phase 3 needs 4 more instances of it.
- [ ] `LogoMarquee` renders the trusted-by logos from `data/brands.ts`.
- [ ] Mobile (375px) and desktop (1728px+ down to ~1024px) both verified
      against the PDF screenshots.
- [ ] Old `HeroSection.tsx`, `HeroPhones.tsx`, `TextMarquee.tsx`,
      `MarqueeSection.tsx` deleted once this is verified working.
- [ ] `npm run build` passes clean.

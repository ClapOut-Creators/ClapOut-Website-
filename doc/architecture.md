# Clapout Website — Target Architecture & Redesign Plan

Written 2026-08-21. This is the blueprint `CLAUDE.md` and the phase docs in
`doc/phases/` point to. Read this before starting any phase.

## What's changing and why

The current live site (see git history / the pre-restructure `src/`) is a
**dark, scroll-driven single design** — near-black sections, orange hero,
Framer Motion wordmark hero. `doc/Clapout.pdf` and `doc/design-reference.md`
document a **different, newer design**: a white-background, pill-nav,
Poppins-headline marketing page, captured directly from the Clapout Figma
file, with both a desktop (1728px) and a mobile artboard supplied in the PDF.

This is the design we are now building. It supersedes the "dark, editorial"
description in the old `CLAUDE.md` — that guidance is obsolete once Phase 1
lands. Treat `doc/design-reference.md` (tokens, copy, exact spacing) and
`doc/Clapout.pdf` (pages 1–2: desktop + mobile screenshots) as the combined
source of truth for every phase below.

## Why restructure

The current `src/components/` is a flat bag of ~17 files mixing layout,
page sections, shared UI primitives, and content data (inline arrays) with
no separation of concerns. Rebuilding the whole page is a good moment to
introduce a structure that scales past a single flat folder, keeps
copy/data separate from markup (so non-engineers can edit FAQ text, brand
lists, testimonials without touching JSX), and gives each phase a
predictable place to put new files.

## Target directory structure

```
src/
  app/
    App.tsx                # page composition + hash routing only
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      HeroSection.tsx
      HowItWorksSection.tsx
      SocialProofSection.tsx     # "creators and brands behind the campaigns" grid
      FaqSection.tsx
      TestimonialsSection.tsx
      ClosingCtaSection.tsx
    ui/
      Button.tsx              # pill button, variants: dark / orange / outline
      Badge.tsx                # small pill badges ("Active", highlight pill, etc.)
      Card.tsx
      Accordion.tsx            # FAQ rows
      PhoneMockup.tsx          # the TikTok-style clip UI screen, reused hero + step 3
      LogoMarquee.tsx          # "trusted by" logo strip
      Tabs.tsx                 # "For Creators" / "For Brands" pill toggle
    shared/
      FadeIn.tsx               # keep as-is, scroll-reveal wrapper
      AnimatedText.tsx
      Magnet.tsx
      ContactButton.tsx
      LiveProjectButton.tsx
  data/
    nav.ts                     # nav link list
    campaigns.ts                # Join-step 2x2 brand campaign cards
    payoutMethods.ts            # MTN / Telecel / AT / Bank
    payouts.ts                  # cash-out table rows
    steps.ts                    # the 4 "how it works" steps' copy
    brands.ts                   # trusted-by + social proof logos/photos
    faqs.ts
    testimonials.ts
  hooks/
    useHashRoute.ts             # extracted from App.tsx's hash effect
  types/
    content.ts                  # FaqItem, Testimonial, Campaign, Step, PayoutRow, NavLink types
  pages/
    LegalPage.tsx                # terms/privacy, unchanged location semantics, new home
  styles/
    index.css                    # global resets + keyframes (current file, relocated)
public/                          # unchanged — static assets served as-is
  clapout-logo.png / .jpeg
  clients/
```

Design tokens (colors, font families, radii used repeatedly) move from
scattered inline hex values into `tailwind.config.js` `theme.extend` so
`bg-brand-orange` etc. replace `bg-[#EC612C]` throughout. This happens in
Phase 0 (Foundation) — see `doc/phases/00-foundation.md`.

## Migration map (old → new)

| Old path | New path |
| --- | --- |
| `src/App.tsx` | `src/app/App.tsx` |
| `src/index.css` | `src/styles/index.css` |
| `src/components/HeroSection.tsx` | `src/components/sections/HeroSection.tsx` (rebuilt, Phase 2) |
| `src/components/HowItWorksSection.tsx` | `src/components/sections/HowItWorksSection.tsx` (rebuilt, Phase 3) |
| `src/components/CampaignsSection.tsx` | folded into `HowItWorksSection` Join step (Phase 3) per new design |
| `src/components/FaqSection.tsx` | `src/components/sections/FaqSection.tsx` (rebuilt, Phase 5) |
| `src/components/FeedbackSection.tsx` | `src/components/sections/TestimonialsSection.tsx` (rebuilt, Phase 6) |
| `src/components/FinalCtaSection.tsx` | `src/components/sections/ClosingCtaSection.tsx` (rebuilt, Phase 7) |
| `src/components/ClientsSection.tsx`, `MarqueeSection.tsx`, `TextMarquee.tsx` | consolidated into `src/components/ui/LogoMarquee.tsx` (Phase 2, "trusted by" strip) |
| `src/components/Footer.tsx` | `src/components/layout/Footer.tsx` (rebuilt, Phase 8) |
| `src/components/LegalPage.tsx` | `src/pages/LegalPage.tsx` (restyled, Phase 9) |
| `src/components/FadeIn.tsx`, `AnimatedText.tsx`, `Magnet.tsx`, `ContactButton.tsx`, `LiveProjectButton.tsx` | `src/components/shared/*` (kept, re-audited per phase as needed) |
| `src/components/HeroPhones.tsx` | superseded by `src/components/ui/PhoneMockup.tsx` (Phase 0/2) |
| — (no navbar existed) | `src/components/layout/Navbar.tsx` — **new**, Phase 1 |

Nothing is deleted outright; old components are replaced phase by phase and
the corresponding old file is removed in the same phase that replaces it,
once the new version is verified.

## Phase-gated workflow

Phases live in `doc/phases/`, numbered `00`–`10`. **A phase is not started
until the previous phase's acceptance criteria are all checked off and
`npm run build` passes clean.** Each phase doc covers both the desktop
(1728px, per PDF page 1 / design-reference.md) and mobile (per PDF page 2)
version of its section — build both before marking a phase complete, don't
split desktop/mobile across separate phases.

See `doc/phases/00-foundation.md` to start.

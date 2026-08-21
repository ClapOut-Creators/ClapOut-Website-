# Phase 0 — Foundation & Architecture

**Depends on:** nothing. Do this first.
**Touches:** whole repo (structure only, no new visual sections yet).

## Goal

Stand up the target directory structure from `doc/architecture.md`, move
existing files into it with updated imports, add design tokens to Tailwind,
and create the shared types/data/UI-primitive scaffolding every later phase
will build on. No new page sections are built in this phase — the site
should look and behave exactly as it does today when this phase is done,
just reorganized.

## Tasks

1. Create the new folders under `src/`: `app/`, `components/layout/`,
   `components/sections/`, `components/ui/`, `components/shared/`, `data/`,
   `hooks/`, `types/`, `pages/`, `styles/`.
2. Move `src/App.tsx` → `src/app/App.tsx`, `src/index.css` →
   `src/styles/index.css`. Update `src/main.tsx` and `vite.config.ts` /
   `index.html` references and the CSS import path accordingly.
3. Move `FadeIn.tsx`, `AnimatedText.tsx`, `Magnet.tsx`, `ContactButton.tsx`,
   `LiveProjectButton.tsx` → `src/components/shared/`. Update imports
   repo-wide.
4. Move `LegalPage.tsx` → `src/pages/LegalPage.tsx`.
5. Extract the hash-routing `useEffect` in `App.tsx` into
   `src/hooks/useHashRoute.ts` (returns current hash, subscribes/unsubscribes
   internally). `App.tsx` becomes a thin composition file.
6. Add design tokens to `tailwind.config.js` `theme.extend`, taken from
   `doc/design-reference.md`'s token table:
   - `colors.brand.orange` = `#EC612C`
   - `colors.brand.yellow` = `#FFC93C`
   - `colors.brand.dark` = `#111111`
   - `colors.brand.footer` = `#0C0C0C`
   - `colors.text.body` = `#464646`
   - `colors.border.hairline` = `#DDDDDD`
   - `colors.border.button` = `#CFCFCF`
   - `fontFamily.poppins` = headline font (`Poppins`, add Google Font link
     or `@font-face` in `styles/index.css`)
   - `fontFamily.sfpro` = body font (`SF Pro` — use a web-safe fallback
     stack `['-apple-system','SF Pro Text','Helvetica Neue','sans-serif']`
     since SF Pro isn't licensed for web embedding)
   - `borderRadius.pill` = `58px`
   Keep the existing `kanit` entry only if any not-yet-rebuilt component
   still needs it; remove once Phase 8 (Footer) lands, since the new design
   doesn't use Kanit per `design-reference.md`.
7. Create `src/types/content.ts` with the shared interfaces later phases'
   data files will use: `NavLink`, `Campaign`, `PayoutMethod`, `PayoutRow`,
   `Step`, `FaqItem`, `Testimonial`, `BrandLogo`, `SocialProofPhoto`.
8. Create empty-but-typed data files in `src/data/` (`nav.ts`,
   `campaigns.ts`, `payoutMethods.ts`, `payouts.ts`, `steps.ts`,
   `brands.ts`, `faqs.ts`, `testimonials.ts`) — each exports a correctly
   typed empty array or the real content if it's already known from
   `design-reference.md` (e.g. the 6 FAQ questions, the 4 testimonial
   names). Populate what you can now so later phases only wire up markup.
9. Create placeholder UI primitives in `src/components/ui/`: `Button.tsx`
   (variants `dark` | `orange` | `outline`, pill-shaped per token
   `borderRadius.pill`), `Badge.tsx`, `Card.tsx`, `Accordion.tsx`,
   `Tabs.tsx`, `PhoneMockup.tsx` (static shell for now — the TikTok-style
   clip UI, wired up visually in Phase 2), `LogoMarquee.tsx`. These can be
   minimal/unstyled-but-typed in this phase; later phases flesh them out
   as they're consumed by the section that needs them.
10. Delete the now-superseded `HeroPhones.tsx`, `TextMarquee.tsx`,
    `MarqueeSection.tsx`, `ClientsSection.tsx` **only after** confirming
    nothing still imports them (they're replaced by `LogoMarquee` /
    `PhoneMockup` starting Phase 2).

## Acceptance criteria

- [x] New folder structure exists exactly as in `doc/architecture.md`.
- [x] `npm run build` passes with zero TypeScript errors.
- [x] `npm run dev` renders the site with no visual regression vs. before
      this phase (same dark design still in place — this phase is pure
      reorganization).
- [x] No file in `src/components/` top level except intentionally-kept
      leftovers awaiting their phase; everything is under `layout/`,
      `sections/`, `ui/`, or `shared/`.
- [x] `src/types/content.ts` covers every data shape used from Phase 1
      onward.

# Phase 10 — Cross-cutting QA & Polish

**Depends on:** Phases 0–9 all complete and verified individually. This
phase is a full pass over the finished site, not a new section.

## Checklist

- [x] **Responsive sweep**: test every section at 375px, 768px, 1024px,
      1440px, and 1728px+ widths. Fix any overflow, clipped text, or
      broken grid at intermediate widths the per-phase docs didn't
      explicitly call out (they only specified the mobile PDF width and
      the 1728px desktop frame — everything between needs to scale
      sensibly via the `clamp()` conventions used throughout).
      **Found and fixed:** the payment-method grid (`SetupStep.tsx`) jumped
      to 4 columns at `md:` (768px), truncating "Telecel" to "Tel" —
      moved the 4-column breakpoint to `lg:` (1024px). Verified no
      horizontal overflow at any of the 5 widths.
- [x] **Accessibility**: ran `contrast_check.py` against the real
      foreground/background pairs used across the site (not just the raw
      tokens — several are applied at reduced opacity or as tints).
      **Found and fixed 3 failures:** the "Pending"/"Paid" status pill
      text (`CashOutStep.tsx`) was nearly invisible (1.41:1 and 3.63:1) —
      darkened both to pass 4.5:1; the Closing CTA's gray headline text
      failed even the large-text threshold (2.85:1) — darkened to
      `#767676` (4.54:1). **Flagged, not changed:** white text on the
      brand-orange button (3.33:1) and on the PDF-matched gray button
      (2.71:1) both fail AA — these are exact brand/PDF colors, not mine
      to repaint without sign-off; see summary. Keyboard: verified real
      Tab navigation produces a visible `:focus-visible` ring, and every
      interactive element (nav, buttons, accordion, tabs) is a native
      `<button>`/`<a>` — no custom non-semantic clickable elements
      anywhere in the codebase.
- [x] **Build & type check**: `npm run build` clean, zero TS errors.
- [x] **Dead code sweep**: all "delete once verified" files from Phases
      2–8 confirmed gone. Found and cleaned up beyond that list: the
      outer `<main>` and the global `html/body/#root` background were
      still `#0C0C0C` (vestigial from the pre-rebuild dark theme, now
      that every section sets its own explicit background) — switched to
      white; `AboutSection.tsx` was a fully orphaned file (no phase ever
      claimed it, flagged since Phase 3) — deleted; `FadeIn`,
      `AnimatedText`, `Magnet`, `ContactButton`, `LiveProjectButton` in
      `components/shared/` turned out unused by all 10 phases — deleted,
      along with the now-fully-unused `framer-motion` dependency
      (`npm uninstall`); the dead `.hero-heading` gradient CSS class
      (last consumer was the pre-Phase-9 `LegalPage.tsx`) removed.
- [x] **Asset audit**: see summary — every placeholder from Phases 2–4
      and 6 has since been replaced with a real user-supplied asset.
      Nothing remains placeholder.
- [x] **Performance sanity check**: `npm run build` output is 192.75 KB
      JS (59.77 KB gzip) / 29.92 KB CSS (6.49 KB gzip) — lean, no bloat.
      Framer Motion is no longer a dependency at all (see dead code sweep).
- [x] **Final side-by-side**: spot-checked the built site against
      `doc/Clapout.pdf` pages 1 and 2 at 1728px and mobile widths —
      consistent with the phase-by-phase PDF-matching already done
      throughout; no new deltas found beyond what's already flagged.

## Acceptance criteria

- [x] All boxes above checked.
- [x] A short summary handed back to the user: what shipped, what's
      flagged as placeholder/needs-real-assets, any deviations from the
      PDF and why.

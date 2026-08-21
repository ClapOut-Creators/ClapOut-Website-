# Phase 10 — Cross-cutting QA & Polish

**Depends on:** Phases 0–9 all complete and verified individually. This
phase is a full pass over the finished site, not a new section.

## Checklist

- [ ] **Responsive sweep**: test every section at 375px, 768px, 1024px,
      1440px, and 1728px+ widths. Fix any overflow, clipped text, or
      broken grid at intermediate widths the per-phase docs didn't
      explicitly call out (they only specified the mobile PDF width and
      the 1728px desktop frame — everything between needs to scale
      sensibly via the `clamp()` conventions used throughout).
- [ ] **Accessibility**: run the `contrast_check.py` script from the
      `designing-beautiful-websites` skill (`.agents/skills/designing-
      beautiful-websites/scripts/contrast_check.py`) against the token
      palette in `tailwind.config.js`; fix any text/background pairs that
      fail WCAG AA. Confirm all interactive elements (nav links, buttons,
      accordion rows, tabs) are keyboard-reachable and have visible focus
      states.
- [ ] **Build & type check**: `npm run build` clean, no TS errors, no
      unused-import warnings left over from the Phase 0 migration.
- [ ] **Dead code sweep**: confirm every file listed as "delete once
      verified" across Phases 2–8 is actually gone, and no stray old
      dark-theme classes (`bg-[#0C0C0C]` on sections that should now be
      white, `font-kanit` where Poppins/SF Pro should be) remain outside
      the Footer/testimonial dark surfaces.
- [ ] **Asset audit**: list every placeholder/flagged asset from Phases
      2–4 and 6 (brand logos, social-proof photos, testimonial avatars)
      in one place for the user — a short summary, not a new doc — so
      real assets can be sourced before launch.
- [ ] **Performance sanity check**: run `npm run build` and eyeball the
      output bundle size; if Framer Motion or the phone-mockup imagery
      meaningfully bloats it, note that rather than silently shipping it.
- [ ] **Final side-by-side**: compare the built site (`npm run preview`)
      against `doc/Clapout.pdf` pages 1 and 2, section by section, and
      note any remaining visual deltas for the user to accept or send back
      for another pass.

## Acceptance criteria

- [ ] All boxes above checked.
- [ ] A short summary handed back to the user: what shipped, what's
      flagged as placeholder/needs-real-assets, any deviations from the
      PDF and why.

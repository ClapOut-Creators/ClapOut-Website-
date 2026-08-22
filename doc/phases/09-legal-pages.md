# Phase 9 — Legal Pages Restyle

**Depends on:** Phase 8 (Footer) complete and verified.
**Touches:** `src/pages/LegalPage.tsx` (already relocated in Phase 0).
**Source:** no dedicated Figma frame exists for `/terms` or `/privacy` —
these pages aren't in `design-reference.md` or the PDF. Restyle them to be
visually consistent with the new white/Poppins/pill design system rather
than matching a specific mock, since none exists.

## Tasks

1. Update `LegalPage.tsx` typography/colors to use the Phase 0 Tailwind
   tokens (Poppins headline, SF Pro body, `#464646` body text,
   `#EC612C`/`#111111` accents where a link or button appears) instead of
   whatever dark-theme styling it currently has.
2. Add a simple "back to home" link/button at the top, styled with the
   shared `Button` component, since the legal pages replace the whole
   page content (per the existing `App.tsx` hash-routing pattern) and
   currently have no way back except the browser back button — confirm
   this is in fact missing before adding it.
3. Keep content (terms/privacy copy) unchanged unless the user asks for a
   content rewrite — this phase is visual only.

## Acceptance criteria

- [x] `/#/terms` and `/#/privacy` visually match the new design system
      (fonts, colors, spacing) rather than the old dark theme.
- [x] Legal page content unchanged (no accidental copy edits) — confirmed
      via `git diff` that no `heading:`/`body:` lines changed.
- [x] A working way back to the main page exists and is visible above the
      fold (it already existed pre-Phase 9; restyled with the shared
      `Button` component per the task, not added from scratch).
- [x] `npm run build` passes clean.

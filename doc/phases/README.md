# Build Phases — Index

Read `doc/architecture.md` first, then work these in order. Do not start a
phase until the previous one's acceptance criteria are all checked and
`npm run build` passes. Each phase covers desktop **and** mobile for its
section — don't split them across separate phases.

| # | Phase | Section |
| - | --- | --- |
| 0 | ✅ [`00-foundation.md`](./00-foundation.md) | Directory restructure, design tokens, shared types/data/UI primitives |
| 1 | ✅ [`01-navbar.md`](./01-navbar.md) | Navbar |
| 2 | ✅ [`02-hero.md`](./02-hero.md) | Hero (badge, headline, CTAs, phone carousel, trusted-by strip) |
| 3 | ✅ [`03-how-it-works.md`](./03-how-it-works.md) | Three steps to your first payout (Join / Set up / Post / Cash out) |
| 4 | ✅ [`04-social-proof.md`](./04-social-proof.md) | Creators/brands photo grid |
| 5 | ✅ [`05-faq.md`](./05-faq.md) | FAQ accordion |
| 6 | ✅ [`06-testimonials.md`](./06-testimonials.md) | Testimonials ("Trusted by the best brands") |
| 7 | ✅ [`07-closing-cta.md`](./07-closing-cta.md) | Closing CTA ("Two sides. One Place.") |
| 8 | ✅ [`08-footer.md`](./08-footer.md) | Footer |
| 9 | ✅ [`09-legal-pages.md`](./09-legal-pages.md) | Terms/Privacy restyle |
| 10 | ✅ [`10-qa-polish.md`](./10-qa-polish.md) | Cross-cutting QA, accessibility, responsive sweep, asset audit |
| 11 | ✅ [`11-campaigns-list.md`](./11-campaigns-list.md) | Campaigns list page (`#/campaigns`) + hash-routing foundation |
| 12 | ✅ [`12-campaign-detail.md`](./12-campaign-detail.md) | Campaign detail page (`#/campaigns/:slug`) |
| 13 | ✅ [`13-clipper-account-modal.md`](./13-clipper-account-modal.md) | Clipper Account registration modal (profile → socials → payment → welcome) |
| 14 | ✅ [`14-contact-page.md`](./14-contact-page.md) | Contact page (`#/contact`) — Support / Partnership tabs |

Phases 11–13 are a new section (Campaigns) added after the original 0–10
site rebuild and dark-mode work. Source is `doc/Clapout.pdf` pages 6–21 —
not covered in `doc/design-reference.md`, which predates this section.

Phase 14 (Contact page) is a separate addition, source `doc/Clapout.pdf`
pages 23–26.

## Status tracking

There's no separate status file — check off each phase doc's own
"Acceptance criteria" list in place as it's completed, and update this
table's phase row with a ✅ once done, e.g.:

| 0 | ✅ [`00-foundation.md`](./00-foundation.md) | ... |

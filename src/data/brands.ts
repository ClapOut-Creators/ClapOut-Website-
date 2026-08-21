import type { BrandLogo, SocialProofPhoto } from '../types/content';

// Names per doc/Clapout.pdf page 1's rendered hero strip (Phase 2 spec:
// use the PDF as the more literal/updated source over design-reference.md's
// shorter "Tekme, Union, Covoitly" list — the PDF also shows "Maple").
// None of these 4 marks are in the repo: public/clients/tekme-dark.svg is a
// different "T" glyph mark, not the blue "Tekme." wordmark shown in the PDF
// hero strip, so it's not reused here — flagged as missing, not fabricated.
export const trustedByLogos: BrandLogo[] = [
  { name: 'Tekme', logo: '' },
  { name: 'Maple', logo: '' },
  { name: 'Union', logo: '' },
  { name: 'Covoitly', logo: '' },
];

// Social-proof grid (§ 4) — ~15 headshot photos, none in the repo yet.
export const socialProofPhotos: SocialProofPhoto[] = [];

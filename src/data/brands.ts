import type { BrandLogo, SocialProofPhoto } from '../types/content';

// Names + real marks per doc/Clapout.pdf page 1's rendered hero strip.
export const trustedByLogos: BrandLogo[] = [
  { name: 'Tekme', logo: '/clients/logo_tekme.svg' },
  { name: 'Maple', logo: '/clients/maple.png' },
  { name: 'Union', logo: '/clients/union.png' },
  { name: 'Covoitly', logo: '/clients/covoitly.png' },
];

// Social-proof grid (§ 4) — ~15 headshot photos, none in the repo yet.
export const socialProofPhotos: SocialProofPhoto[] = [];

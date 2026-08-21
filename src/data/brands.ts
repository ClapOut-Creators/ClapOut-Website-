import type { BrandLogo, SocialProofPhoto } from '../types/content';

// Names + real marks per doc/Clapout.pdf page 1's rendered hero strip.
export const trustedByLogos: BrandLogo[] = [
  { name: 'Tekme', logo: '/logo_tekme.svg' },
  { name: 'Maple', logo: '/maple.png' },
  { name: 'Union', logo: '/union.png' },
  { name: 'Covoitly', logo: '/covoitly.png' },
];

// Social-proof grid (§ 4) — ~15 headshot photos, none in the repo yet.
export const socialProofPhotos: SocialProofPhoto[] = [];

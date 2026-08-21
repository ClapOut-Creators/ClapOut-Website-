import type { BrandLogo, SocialProofPhoto } from '../types/content';

// Names from design-reference.md § 2 (hero "Trusted by top brands" strip).
// Logo assets aren't in the repo yet — see design-reference.md "Assets to
// export"; `logo` is a placeholder until Phase 2 sources the real files.
export const trustedByLogos: BrandLogo[] = [
  { name: 'Tekme', logo: '' },
  { name: 'Union', logo: '' },
  { name: 'Covoitly', logo: '' },
];

// Social-proof grid (§ 4) — ~15 headshot photos, none in the repo yet.
export const socialProofPhotos: SocialProofPhoto[] = [];

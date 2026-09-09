import type { BrandLogo, SocialProofPhoto } from '../types/content';

// Brands Clapout is actually working with.
export const trustedByLogos: BrandLogo[] = [
  { name: 'Tekme', logo: '/clients/logo_tekme.svg' },
  { name: 'e-wale' },
  { name: 'Wishly', logo: '/clients/wishly-black.svg', heightClass: 'h-9 sm:h-10' },
  { name: 'TripAdvert' },
];

// Social-proof grid (§ 4): real creator/brand headshots, user-supplied in
// public/creators/ (image 11–26.png — 16 photos). One of them (image 16)
// is the real "GHANA" hoodie photo from the PDF, so no synthetic tag
// overlay is needed anymore — it's baked into the photo itself.
export const socialProofPhotos: SocialProofPhoto[] = Array.from({ length: 16 }, (_, i) => {
  const n = i + 11;
  return { src: `/creators/image%20${n}.png`, alt: `Clapout creator or brand photo ${n}` };
});

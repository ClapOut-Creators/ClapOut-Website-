import type { Platform } from '../../../types/content';

// Official platform logos as vector SVGs in public/socials/ — crisp at any size.
export const PLATFORM_ICONS: Record<Platform, string> = {
  tiktok: '/socials/tiktok.svg',
  facebook: '/socials/facebook.svg',
  instagram: '/socials/instagram.svg',
  youtube: '/socials/youtube.svg',
  x: '/socials/x.svg',
};

export const PLATFORM_LABELS: Record<Platform, string> = {
  x: 'X',
  tiktok: 'Tiktok',
  facebook: 'Facebook',
  instagram: 'Instagram',
  youtube: 'Youtube',
};

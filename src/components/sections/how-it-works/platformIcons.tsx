import type { Platform } from '../../../types/content';

// Real platform icon assets (user-supplied) in public/socials/.
export const PLATFORM_ICONS: Record<Platform, string> = {
  tiktok: '/socials/tiktok%201.png',
  facebook: '/socials/social%201.png',
  instagram: '/socials/instagram%201.png',
  youtube: '/socials/youtube%201.png',
  x: '/socials/twitter%201.png',
};

export const PLATFORM_LABELS: Record<Platform, string> = {
  x: 'X',
  tiktok: 'Tiktok',
  facebook: 'Facebook',
  instagram: 'Instagram',
  youtube: 'Youtube',
};

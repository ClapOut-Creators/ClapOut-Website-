import { Facebook, Instagram, Youtube, Twitter, Music2 } from 'lucide-react';
import type { Platform } from '../../../types/content';

export const PLATFORM_ICONS: Record<Platform, typeof Facebook> = {
  x: Twitter,
  tiktok: Music2,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
};

export const PLATFORM_LABELS: Record<Platform, string> = {
  x: 'X',
  tiktok: 'Tiktok',
  facebook: 'Facebook',
  instagram: 'Instagram',
  youtube: 'Youtube',
};

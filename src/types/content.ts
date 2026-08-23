import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  /** Short supporting copy shown under the label in a sub-link dropdown row. */
  description?: string;
  /** Icon component for a sub-link dropdown row — a Lucide icon so it inherits theme-aware text color instead of a raster image. */
  icon?: LucideIcon;
  subLinks?: NavLink[];
}

export type Platform = "x" | "tiktok" | "facebook" | "instagram" | "youtube";

export interface Campaign {
  brand: string;
  /** Real logo image path. When absent, the swatch falls back to logoBg/logoTextColor text. */
  logo?: string;
  /** How the logo image fills its swatch — 'cover' for full-bleed banner logos, 'contain' for wordmarks that need padding. Defaults to 'cover'. */
  logoFit?: 'cover' | 'contain';
  /** Background color for the logo swatch when no real logo asset is used. */
  logoBg: string;
  status: string;
  daysLeft: string;
  platforms: Platform[];
  paidOut: string;
  goal: string;
  cpm: string;
}

export interface PayoutMethod {
  id: string;
  label: string;
  logo: string;
  subtext: string;
}

export interface PayoutRow {
  cycle: string;
  status: string;
  amount: string;
}

export interface Step {
  number: number;
  eyebrow: string;
  heading: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  handle: string;
  avatar: string;
  rating: number;
}

export interface BrandLogo {
  name: string;
  logo: string;
}

export interface SocialProofPhoto {
  src: string;
  alt: string;
  tag?: string;
}

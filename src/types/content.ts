export interface NavLink {
  label: string;
  href: string;
}

export type Platform = 'x' | 'tiktok' | 'facebook' | 'instagram' | 'youtube';

export interface Campaign {
  brand: string;
  /** Background color for the logo swatch when no real logo asset is used. */
  logoBg: string;
  /** Text color for the logo swatch. */
  logoTextColor: string;
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

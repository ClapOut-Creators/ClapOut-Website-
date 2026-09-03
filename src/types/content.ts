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
  /** URL-safe id used for the `/campaigns/:slug` detail-page route. */
  slug: string;
  brand: string;
  /** Real logo image path. When absent, the swatch falls back to logoBg/logoTextColor text. */
  logo?: string;
  /** How the logo image fills its swatch — 'cover' for full-bleed banner logos, 'contain' for wordmarks that need padding. Defaults to 'cover'. */
  logoFit?: 'cover' | 'contain';
  /** Background color for the logo swatch when no real logo asset is used. */
  logoBg: string;
  /** Demo/dummy campaign: shown only as a static example, never listed on the campaigns page or linked to a detail page. */
  demo?: boolean;
  status: string;
  daysLeft: string;
  platforms: Platform[];
  paidOut: string;
  goal: string;
  cpm: string;

  // --- Detail-page fields (/campaigns/:slug) — optional because most
  // existing campaigns don't have real detail content yet (see
  // doc/phases/12-campaign-detail.md). CampaignDetailPage shows a
  // "coming soon" state when `title` is absent rather than rendering
  // undefined/blank fields.
  /** Full detail-page heading, e.g. "Klap Viral Clipping | $7,000 budget | $2 CPM" — stored as one string since that's how it's composed in the source design, not derived from the numeric fields below. */
  title?: string;
  description?: string;
  category?: string;
  startDate?: string;
  endDate?: string;
  avgReviewTime?: string;
  lastUpdated?: string;
  budgetSpent?: number;
  budgetTotal?: number;
  /** Currency symbol prefixed to the numeric budget figures on the detail page. Defaults to '$'. */
  currency?: string;
  tags?: string[];
  bannerImage?: string;
  requirementsNote?: string;
  requirementsDocUrl?: string;
  resourceLabel?: string;
  resourceUrl?: string;
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

export interface ContactInfoCard {
  icon: LucideIcon;
  heading: string;
  body: string;
  linkLabel?: string;
  linkHref?: string;
}

export interface SocialProofPhoto {
  src: string;
  alt: string;
  tag?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Campaign {
  brand: string;
  logo: string;
  status: string;
  platforms: string[];
  paidOut: string;
  ratePerView: string;
}

export interface PayoutMethod {
  id: string;
  label: string;
  logo: string;
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

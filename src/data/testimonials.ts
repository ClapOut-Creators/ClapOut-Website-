import type { Testimonial } from '../types/content';

// Names/handles from design-reference.md § 6 (two "Stephen / Wistiy"
// entries is correct, not a duplication bug). Quote text and avatar assets
// aren't in the source material yet — Phase 6 must pull the quote text
// from the Figma file / PDF screenshot directly, not invent it.
export const testimonials: Testimonial[] = [
  { quote: '', name: 'Samuel', handle: 'E-Wale', avatar: '', rating: 5 },
  { quote: '', name: 'Stephen', handle: 'Wistiy', avatar: '', rating: 5 },
  { quote: '', name: 'Nana', handle: 'Tekme', avatar: '', rating: 5 },
  { quote: '', name: 'Stephen', handle: 'Wistiy', avatar: '', rating: 5 },
];

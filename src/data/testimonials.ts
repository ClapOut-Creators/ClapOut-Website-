import type { Testimonial } from '../types/content';

// Names, handles, and quote text transcribed directly from
// doc/Clapout.pdf page 1's "Trusted by the best brands" cards. The handle
// is "Wishly" (not "Wistiy" as design-reference.md has it — the PDF is the
// more literal source, per established precedent in this rebuild). Card 4
// duplicates card 2's name, handle, AND quote text exactly in the source
// PDF — kept as-is rather than "fixed" to be unique, same principle as the
// repeated subtext between this section and Social Proof. Avatars are the
// real user-supplied photos in public/testimonials/.
export const testimonials: Testimonial[] = [
  {
    quote:
      'We put ₵2k behind our *714*22# campaign and let twenty creators run with it. Real views, verified before we paid a cedi — reach we could never have bought with ads alone.',
    name: 'Samuel',
    handle: 'E-Wale',
    avatar: '/testimonials/Samuel,%20E-Wale.png',
    rating: 5,
  },
  {
    quote:
      'One brief on Monday, clips everywhere by the weekend. A squad of micro-creators moved Wishly further than any single big influencer we have ever paid.',
    name: 'Stephen',
    handle: 'Wishly',
    avatar: '/testimonials/Stephen,%20Wishly.png',
    rating: 5,
  },
  {
    quote:
      'No vanity metrics. Every payout mapped to views Clapout had already verified, so we knew exactly what our budget bought.',
    name: 'Nana',
    handle: 'Tekme',
    avatar: '/testimonials/Nana,%20Tekme.png',
    rating: 5,
  },
  {
    quote:
      'One brief on Monday, clips everywhere by the weekend. A squad of micro-creators moved Wishly further than any single big influencer we have ever paid.',
    name: 'Stephen',
    handle: 'Wishly',
    avatar: '/testimonials/Stephen,%20Wishly.png',
    rating: 5,
  },
];

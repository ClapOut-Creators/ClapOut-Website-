import type { PayoutMethod } from '../types/content';

// Logo assets in public/telecom/: mtn.svg is the official MTN oval mark
// (mtn.com favicon) on brand yellow; telecel.png is Telecel Ghana's site
// icon (512px); at.png is the AT Ghana app icon (512px). Bank has no logo
// mark in the source design, but a real icon was supplied later, so it's
// used here instead of staying text-only.
export const payoutMethods: PayoutMethod[] = [
  { id: 'mtn', label: 'MTN', logo: '/telecom/mtn.svg', subtext: 'Fast no charges' },
  { id: 'telecel', label: 'Telecel', logo: '/telecom/telecel.png', subtext: 'Fast no charges' },
  { id: 'at', label: 'AT', logo: '/telecom/at.png', subtext: 'Fast no charges' },
  { id: 'bank', label: 'Bank', logo: '/telecom/bank.webp', subtext: 'Fast no charges' },
];

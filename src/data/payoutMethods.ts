import type { PayoutMethod } from '../types/content';

// Real logo assets for MTN/Telecel/AT/Bank live in public/telecom/
// (user-supplied). Bank has no logo mark in the source design, but a real
// icon was supplied later, so it's used here instead of staying text-only.
export const payoutMethods: PayoutMethod[] = [
  { id: 'mtn', label: 'MTN', logo: '/telecom/mtn.png', subtext: 'Fast no charges' },
  { id: 'telecel', label: 'Telecel', logo: '/telecom/image%209.png', subtext: 'Fast no charges' },
  { id: 'at', label: 'AT', logo: '/telecom/image%2010.png', subtext: 'Fast no charges' },
  { id: 'bank', label: 'Bank', logo: '/telecom/bank.webp', subtext: 'Fast no charges' },
];

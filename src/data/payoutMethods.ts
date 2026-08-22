import type { PayoutMethod } from '../types/content';

// Real logo assets for MTN/Telecel/AT now live in public/telecom/
// (user-supplied). Bank has no logo mark in the source design either —
// it renders as plain text there too.
export const payoutMethods: PayoutMethod[] = [
  { id: 'mtn', label: 'MTN', logo: '/telecom/mtn.png', subtext: 'Fast no charges' },
  { id: 'telecel', label: 'Telecel', logo: '/telecom/image%209.png', subtext: 'Fast no charges' },
  { id: 'at', label: 'AT', logo: '/telecom/image%2010.png', subtext: 'Fast no charges' },
  { id: 'bank', label: 'Bank', logo: '', subtext: 'Fast no charges' },
];

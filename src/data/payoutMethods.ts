import type { PayoutMethod } from '../types/content';

// MTN/Telecel/AT/Bank are real fintech brands — their logo marks aren't
// reproduced here (no license), so `logo` stays empty and the payment
// method card falls back to a plain text label. Flagged, not fabricated.
export const payoutMethods: PayoutMethod[] = [
  { id: 'mtn', label: 'MTN', logo: '', subtext: 'Fast no charges' },
  { id: 'telecel', label: 'Telecel', logo: '', subtext: 'Fast no charges' },
  { id: 'at', label: 'AT', logo: '', subtext: 'Fast no charges' },
  { id: 'bank', label: 'Bank', logo: '', subtext: 'Fast no charges' },
];

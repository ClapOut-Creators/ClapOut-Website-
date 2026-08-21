import type { PayoutMethod } from '../types/content';

// Logos aren't in the repo yet (see design-reference.md "Assets to export")
// — `logo` is a placeholder until Phase 3 sources the real asset.
export const payoutMethods: PayoutMethod[] = [
  { id: 'mtn', label: 'MTN', logo: '' },
  { id: 'telecel', label: 'Telecel', logo: '' },
  { id: 'at', label: 'AT', logo: '' },
  { id: 'bank', label: 'Bank', logo: '' },
];

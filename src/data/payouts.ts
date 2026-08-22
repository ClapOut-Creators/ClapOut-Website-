import type { PayoutRow } from '../types/content';

// Example rows from design-reference.md § 3 "Cash out — Get paid per view".
export const payouts: PayoutRow[] = [
  { cycle: 'Tekme · July', status: 'Pending', amount: '$1,567.08' },
  { cycle: 'E-Wale · August', status: 'Paid', amount: '$500.08' },
];

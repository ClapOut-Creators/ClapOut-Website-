import type { Step } from '../types/content';

// Copy from design-reference.md § 3 "Three steps to your first payout".
export const steps: Step[] = [
  {
    number: 1,
    eyebrow: 'Join',
    heading: 'Pick a campaign',
    body: 'Browse live campaigns from real brands. See the rate, platforms, and bounties up front, then join in one tap. No following or application required.',
  },
  {
    number: 2,
    eyebrow: 'Set up',
    heading: 'Add your payout method',
    body: 'Choose how you want to get paid. Mobile money or bank transfer, so your earnings land automatically when a cycle closes.',
  },
  {
    number: 3,
    eyebrow: 'Post',
    heading: 'Post Campaign Content',
    body: 'Follow the campaign brief, create or share the approved content, and post it on your social platform.',
  },
  {
    number: 4,
    eyebrow: 'Cash out',
    heading: 'Get paid per view',
    body: 'Your earnings climb live as views roll in. When the cycle closes and views are verified, your payout is sent to your chosen method.',
  },
];

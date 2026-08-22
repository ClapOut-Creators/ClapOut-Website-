import type { Platform, Step } from '../types/content';

// "For Brands" tab content for the How It Works section — copy and mock
// campaign data transcribed from the updated doc/Clapout.pdf "For Brands"
// screen (user-supplied, not in the original design-reference.md).
export const brandSteps: Step[] = [
  {
    number: 1,
    eyebrow: 'Brief',
    heading: 'Tell us what you want',
    body: 'Reach out with your goals, content, platforms, and budget. We scope the campaign with you, no self-serve setup or guesswork on your end.',
  },
  {
    number: 2,
    eyebrow: 'Manage',
    heading: 'We configure and run it',
    body: 'We build the campaign, set above-market rates, and launch it to our vetted clipper network across TikTok, Reels, Shorts, and X. You stay hands-off.',
  },
  {
    number: 3,
    eyebrow: 'Track',
    heading: 'Watch views and see outcome',
    body: 'Follow reach, engagement, and exactly where your budget is going in a live dashboard, with viewbot detection so you only pay for verified views.',
  },
];

export const briefChecklist = [
  { label: 'Goal', value: 'Launch new release to viral short-form' },
  { label: 'Platforms', value: 'TikTok · Reels · Shorts · X' },
  { label: 'Rate', value: '$45 / 100k · above market' },
  { label: 'Budget', value: '$25,000 · capped' },
  { label: 'Bounties', value: '3 hook bounties added' },
  { label: 'Content', value: 'Source footage + brand guide' },
];

export interface CampaignPlatformStat {
  platform: Platform;
  clips: number;
  views: string;
  viewsValue: number;
}

export const campaignPlatformStats: CampaignPlatformStat[] = [
  { platform: 'tiktok', clips: 142, views: '6.4M', viewsValue: 6.4 },
  { platform: 'youtube', clips: 73, views: '3.1M', viewsValue: 3.1 },
  { platform: 'instagram', clips: 61, views: '2.2M', viewsValue: 2.2 },
  { platform: 'x', clips: 36, views: '1.4M', viewsValue: 1.4 },
];

export const dashboardStats = [
  { icon: 'eye', value: '13.1M', label: 'Verified Views' },
  { icon: 'zap', value: '312', label: 'Clips Live' },
  { icon: 'trending', value: '$0.41', label: 'Avg. CPM' },
] as const;

export const viewsChartData = [
  { date: 'Jun 2', value: 0.3 },
  { date: 'Jun 4', value: 1.0 },
  { date: 'Jun 6', value: 1.9 },
  { date: 'Jun 8', value: 3.0 },
  { date: 'Jun 10', value: 4.3 },
  { date: 'Jun 12', value: 5.7 },
  { date: 'Jun 14', value: 7.0 },
];

export const budgetUsed = { spent: 16200, cap: 25000 };

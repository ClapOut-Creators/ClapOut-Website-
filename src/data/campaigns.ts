import type { Campaign } from '../types/content';

// Dummy detail-page copy shared by campaigns that don't have real detail
// content yet (everything except E-WALE and Klap — see
// doc/phases/12-campaign-detail.md).
// Swap this out per-campaign once real briefs are supplied; the shape/fields
// are already real, only the copy is a placeholder.
const DUMMY_DETAIL = {
  category: 'Product',
  startDate: '2026-08-01',
  endDate: '2026-10-01',
  avgReviewTime: '1d',
  lastUpdated: 'Today at 11:04 PM',
  tags: ['Clipping', 'Product'],
  requirementsNote: 'Content Requirements',
  resourceLabel: 'Google Drive',
};

function dummyDescription(brand: string) {
  return `Placeholder campaign brief for ${brand}. This description, along with the requirements, dates, and resources below, is temporary dummy content and will be replaced with the real campaign brief.`;
}

// Values read directly off doc/Clapout.pdf page 1's campaign card grid
// (design-reference.md doesn't include per-card numbers). Real logo assets
// for Coca-Cola/Nike/Tekme/TripAdverts now live in public/clients/
// (user-supplied) — TripAdverts' swatch was blank in the source design,
// but a real (TripAdvisor) mark was supplied later, so it's used here.
export const campaigns: Campaign[] = [
  // Real campaign (user-supplied brief + banner, 2026-08-24) — budgets in
  // Ghana cedis, hence the `currency` override.
  {
    slug: 'e-wale-clipping',
    brand: 'E-wale tech',
    logo: '/campaigns/e-wale-logo.png',
    logoBg: '#0B51F0',
    status: 'Upcoming',
    daysLeft: 'Opens 1 Sep',
    platforms: ['tiktok', 'instagram'],
    paidOut: '₵—',
    goal: '₵—',
    cpm: '₵—',
    title: 'E-WALE Clipping | ₵— Budget | ₵— CPM',
    description:
      'This campaign is focused on promoting an easy and convenient way for customers to access everyday digital services by dialing *714*22#.\n\nThrough the service, customers can pay ECG bills, water bills, DStv, GOtv and StarTimes subscriptions, buy airtime and data for MTN, Telecel and AT, and also purchase WAEC result-checking tokens.\n\nWhen creating your clip, keep the message simple and clear: dial *714*22# to conveniently pay bills, buy airtime/data, and access other digital services from your phone.\n\nA two-week Clapout creator campaign focused on pushing selected content on TikTok. Participating creators will post according to the campaign brief, submit their TikTok post links, and earn based on their verified views and performance.',
    category: 'Product',
    // Full opening datetime — the countdown (card + detail-page Register
    // button) runs against 11:00am on this date, not midnight.
    startDate: '2026-09-01T15:00:00',
    avgReviewTime: '1d',
    lastUpdated: 'Today at 11:04 PM',
    currency: '₵',
    tags: ['Clipping', 'Product'],
    bannerImage: '/campaigns/e-wale-banner.png',
    requirementsNote: 'Content Requirements',
    resourceLabel: 'Google Drive',
  },
  // Real campaign (user-supplied brief + logo/banner, 2026-09-01).
  {
    slug: 'tekme-meetme-clipping',
    brand: 'Tekme Creatives',
    logo: '/campaigns/tekme-logo.png',
    logoBg: '#1DA1F2',
    status: 'Upcoming',
    daysLeft: 'Opens 3 Sep',
    platforms: ['tiktok', 'instagram', 'facebook'],
    paidOut: '₵—',
    goal: '₵—',
    cpm: '₵—',
    title: 'Tekme Creatives Meetme | ₵— Budget | ₵— CPM',
    description:
      'Meet Me is a creative interview series by Tekme Creatives, created to spotlight the people shaping culture through art, music, design, and creativity.\n\nEach edition features honest conversations with creatives, musicians, artists, and other industry talents, giving them a space to share their journey, process, challenges, inspirations, and the stories behind their work.\n\nIt’s more than an interview — it’s a way to connect audiences with the people behind the creativity.',
    category: 'Interview',
    startDate: '2026-09-03',
    avgReviewTime: '1d',
    lastUpdated: 'Today at 11:04 PM',
    currency: '₵',
    tags: ['Clipping', 'Interview'],
    bannerImage: '/campaigns/tekme-banner.png',
    requirementsNote: 'Content Requirements',
    resourceLabel: 'Google Drive',
  },
  {
    slug: 'coca-cola',
    demo: true,
    brand: 'Coca-Cola',
    logo: '/clients/coca-cola.png',
    logoBg: '#E31C23',
    status: 'Active',
    daysLeft: '50 Days left',
    platforms: ['x', 'tiktok', 'facebook', 'instagram', 'youtube'],
    paidOut: '$10,576.90',
    goal: '$25,000',
    cpm: '$10.00',
    ...DUMMY_DETAIL,
    title: 'Coca-Cola | $25,000 budget | $10 CPM',
    description: dummyDescription('Coca-Cola'),
    budgetSpent: 10576.9,
    budgetTotal: 25000,
  },
  {
    slug: 'nike',
    demo: true,
    brand: 'NIKE',
    logo: '/clients/nike.png',
    logoBg: '#000000',
    status: 'Active',
    daysLeft: '50 Days left',
    platforms: ['x', 'tiktok', 'instagram'],
    paidOut: '$50,576.90',
    goal: '$100,000',
    cpm: '$45.00',
    ...DUMMY_DETAIL,
    title: 'NIKE | $100,000 budget | $45 CPM',
    description: dummyDescription('NIKE'),
    budgetSpent: 50576.9,
    budgetTotal: 100000,
  },
  {
    slug: 'tekme-creatives',
    demo: true,
    brand: 'Tekme Creatives',
    logo: '/clients/tekme.svg',
    logoFit: 'contain',
    logoBg: '#1DA1F2',
    status: 'Active',
    daysLeft: '50 Days left',
    platforms: ['x', 'tiktok', 'facebook', 'instagram', 'youtube'],
    paidOut: '$20.90',
    goal: '$5,000',
    cpm: '$0.90',
    ...DUMMY_DETAIL,
    title: 'Tekme Creatives | $5,000 budget | $0.90 CPM',
    description: dummyDescription('Tekme Creatives'),
    budgetSpent: 20.9,
    budgetTotal: 5000,
  },
  {
    slug: 'tripadverts',
    demo: true,
    brand: 'TripAdverts.',
    logo: '/clients/tripadvisor.jpeg',
    logoBg: '#FFFFFF',
    status: 'Active',
    daysLeft: '50 Days left',
    platforms: ['x', 'facebook', 'instagram'],
    paidOut: '$576.90',
    goal: '$11,000',
    cpm: '$2.00',
    ...DUMMY_DETAIL,
    title: 'TripAdverts | $11,000 budget | $2 CPM',
    description: dummyDescription('TripAdverts'),
    budgetSpent: 576.9,
    budgetTotal: 11000,
  },
  // The only campaign with *real* detail-page content in doc/Clapout.pdf
  // (page 8) — the other 4 above use DUMMY_DETAIL placeholder copy until
  // real briefs are supplied (see doc/phases/12-campaign-detail.md).
  // requirementsDocUrl/resourceUrl are intentionally omitted everywhere —
  // no real Google Doc/Drive links were supplied for any campaign yet.
  {
    slug: 'klap-viral-clipping',
    demo: true,
    brand: 'Klap',
    logoBg: '#EC612C',
    status: 'Active',
    daysLeft: '50 Days left',
    platforms: ['tiktok', 'instagram', 'youtube'],
    paidOut: '$246.35',
    goal: '$7,000',
    cpm: '$2.00',
    title: 'Klap Viral Clipping | $7,000 budget | $2 CPM',
    description:
      'Klap is an AI tool that turns long videos, podcasts, and webinars into short, viral-ready clips with captions. Your job is to create clips using a viral hook of popular influencers talking about clipping with provided UGC that shows Klap in action and post it.',
    category: 'Product',
    startDate: '2026-07-14',
    endDate: '2026-08-28',
    avgReviewTime: '1d',
    lastUpdated: 'Today at 11:04 PM',
    budgetSpent: 246.35,
    budgetTotal: 7000,
    tags: ['Clipping', 'Product'],
    requirementsNote: 'Content Requirements',
    resourceLabel: 'Google Drive',
  },
];

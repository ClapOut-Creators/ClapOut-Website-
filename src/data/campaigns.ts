import type { Campaign } from '../types/content';

// Values read directly off doc/Clapout.pdf page 1's campaign card grid
// (design-reference.md doesn't include per-card numbers). Real logo assets
// for Coca-Cola/Nike/Tekme/TripAdverts now live in public/clients/
// (user-supplied) — TripAdverts' swatch was blank in the source design,
// but a real (TripAdvisor) mark was supplied later, so it's used here.
export const campaigns: Campaign[] = [
  {
    brand: 'Coca-Cola',
    logo: '/clients/coca-cola.png',
    logoBg: '#E31C23',
    status: 'Active',
    daysLeft: '50 Days left',
    platforms: ['x', 'tiktok', 'facebook', 'instagram', 'youtube'],
    paidOut: '$10,576.90',
    goal: '$25,000',
    cpm: '$10.00',
  },
  {
    brand: 'NIKE',
    logo: '/clients/nike.png',
    logoBg: '#000000',
    status: 'Active',
    daysLeft: '50 Days left',
    platforms: ['x', 'tiktok', 'instagram'],
    paidOut: '$50,576.90',
    goal: '$100,000',
    cpm: '$45.00',
  },
  {
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
  },
  {
    brand: 'TripAdverts.',
    logo: '/clients/tripadvisor.jpeg',
    logoBg: '#FFFFFF',
    status: 'Active',
    daysLeft: '50 Days left',
    platforms: ['x', 'facebook', 'instagram'],
    paidOut: '$576.90',
    goal: '$11,000',
    cpm: '$2.00',
  },
];

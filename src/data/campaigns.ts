import type { Campaign } from '../types/content';

// Values read directly off doc/Clapout.pdf page 1's campaign card grid
// (design-reference.md doesn't include per-card numbers). Coca-Cola and
// Nike are real trademarks — this repo has no license to reproduce their
// logos, so both render as plain text-on-color swatches rather than the
// bottle/swoosh marks shown in the PDF. Flagged for sign-off before any
// real trademarked asset is used. TripAdverts' logo swatch is blank in the
// source design itself (not a gap on our end).
export const campaigns: Campaign[] = [
  {
    brand: 'Coca-Cola',
    logoBg: '#E31C23',
    logoTextColor: '#FFFFFF',
    status: 'Active',
    daysLeft: '50 Days left',
    platforms: ['x', 'tiktok', 'facebook', 'instagram', 'youtube'],
    paidOut: '$10,576.90',
    goal: '$25,000',
    cpm: '$10.00',
  },
  {
    brand: 'NIKE',
    logoBg: '#000000',
    logoTextColor: '#FFFFFF',
    status: 'Active',
    daysLeft: '50 Days left',
    platforms: ['x', 'tiktok', 'instagram'],
    paidOut: '$50,576.90',
    goal: '$100,000',
    cpm: '$45.00',
  },
  {
    brand: 'Tekme Creatives',
    logoBg: '#1DA1F2',
    logoTextColor: '#FFFFFF',
    status: 'Active',
    daysLeft: '50 Days left',
    platforms: ['x', 'tiktok', 'facebook', 'instagram', 'youtube'],
    paidOut: '$20.90',
    goal: '$5,000',
    cpm: '$0.90',
  },
  {
    brand: 'TripAdverts.',
    logoBg: '#FFFFFF',
    logoTextColor: '#111111',
    status: 'Active',
    daysLeft: '50 Days left',
    platforms: ['x', 'facebook', 'instagram'],
    paidOut: '$576.90',
    goal: '$11,000',
    cpm: '$2.00',
  },
];

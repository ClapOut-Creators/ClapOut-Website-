import type { Guide } from './types';
import { howToBecomeAClipper } from './how-to-become-a-clipper';
import { howMuchDoClippersMake } from './how-much-do-clippers-make';
import { clippingSideHustle } from './clipping-side-hustle';
import { freelanceClipperGuide } from './freelance-clipper-guide';
import { remoteClippingJobs } from './remote-clipping-jobs';
import { bestEditingTools } from './best-editing-tools';

export type { Guide, GuideBlock, GuideSection, GuideFaq } from './types';

export const GUIDES: Guide[] = [
  howToBecomeAClipper,
  howMuchDoClippersMake,
  clippingSideHustle,
  freelanceClipperGuide,
  remoteClippingJobs,
  bestEditingTools,
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}

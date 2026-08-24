import { Video } from 'lucide-react';
import StepHeader from './StepHeader';
import { PLATFORM_ICONS, PLATFORM_LABELS } from './platformIcons';
import { steps } from '../../../data/steps';
import type { Platform } from '../../../types/content';

const PLATFORMS: Platform[] = ['tiktok', 'facebook', 'instagram', 'youtube', 'x'];

// Same clips as the hero phone feed, shown as autoplaying previews.
const POST_CLIPS = [
  '/reels/reel-2.mp4',
  '/reels/reel-4.mp4',
  '/reels/reel-5.mp4',
  '/reels/reel-3.mp4',
];

export default function PostStep() {
  const step = steps[2];

  return (
    <div>
      <StepHeader icon={Video} number={step.number} eyebrow={step.eyebrow} heading={step.heading} body={step.body} />
      <div className="mt-8 md:pl-16">
        <div className="flex flex-wrap gap-3">
          {PLATFORMS.map((platform) => (
            <span
              key={platform}
              className="inline-flex items-center gap-2 rounded-full border border-border-button px-4 py-2 text-sm text-brand-dark dark:border-dark-border dark:text-white"
            >
              <img src={PLATFORM_ICONS[platform]} alt="" className="h-4 w-4 rounded object-contain" />
              {PLATFORM_LABELS[platform]}
            </span>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {POST_CLIPS.map((src) => (
            <video
              key={src}
              src={src}
              className="aspect-[9/19] w-full rounded-xl bg-black object-cover shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import { Video } from 'lucide-react';
import StepHeader from './StepHeader';
import PhoneMockup from '../../ui/PhoneMockup';
import { PLATFORM_ICONS, PLATFORM_LABELS } from './platformIcons';
import { steps } from '../../../data/steps';
import type { Platform } from '../../../types/content';

const PLATFORMS: Platform[] = ['tiktok', 'facebook', 'instagram', 'youtube', 'x'];

export default function PostStep() {
  const step = steps[2];

  return (
    <div>
      <StepHeader icon={Video} number={step.number} eyebrow={step.eyebrow} heading={step.heading} body={step.body} />
      <div className="mt-8 md:pl-16">
        <div className="flex flex-wrap gap-3">
          {PLATFORMS.map((platform) => {
            const Icon = PLATFORM_ICONS[platform];
            return (
              <span
                key={platform}
                className="inline-flex items-center gap-2 rounded-full border border-border-button px-4 py-2 text-sm text-brand-dark"
              >
                <Icon size={16} /> {PLATFORM_LABELS[platform]}
              </span>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {Array.from({ length: 4 }, (_, i) => (
            <PhoneMockup
              key={i}
              className="w-full"
              accountName="ClapOut Clips"
              handle="@clapout.clips"
              caption="E-WALE's drop hit 1M views in 48 hours 🤯"
              likes="388.6K"
              comments="4806"
              shares="11.2K"
              timestamp="00:02/01:00"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

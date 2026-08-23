import { CheckSquare, Users, TrendingUp } from 'lucide-react';
import StepHeader from './StepHeader';
import { PLATFORM_ICONS } from './platformIcons';
import { brandSteps, campaignPlatformStats } from '../../../data/brandCampaign';

export default function ManageStep() {
  const step = brandSteps[1];
  const maxViews = Math.max(...campaignPlatformStats.map((s) => s.viewsValue));

  return (
    <div>
      <StepHeader
        icon={CheckSquare}
        number={step.number}
        eyebrow={step.eyebrow}
        heading={step.heading}
        body={step.body}
      />
      <div className="mt-8 md:pl-16">
        <div className="rounded-2xl bg-black/[0.03] p-5 dark:bg-white/5">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2 text-sm font-medium text-black/80 dark:text-white">
              <span className="h-2 w-2 rounded-full bg-[#2fae5c]" /> Campaign live
            </p>
            <span className="flex items-center gap-1 text-xs text-text-body dark:text-dark-body">
              <Users size={12} /> 428 clippers posting
            </span>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            {campaignPlatformStats.map((stat) => (
              <div key={stat.platform}>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-black/80 dark:text-white">
                    <img
                      src={PLATFORM_ICONS[stat.platform]}
                      alt=""
                      className="h-4 w-4 rounded object-contain"
                    />
                    {stat.clips} clips
                  </span>
                  <span className="font-semibold text-black/80 dark:text-white">{stat.views}</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                  <div
                    className="h-full rounded-full bg-black/80 dark:bg-white/70"
                    style={{ width: `${(stat.viewsValue / maxViews) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-[#1F7A1F]">
            <TrendingUp size={14} className="mr-1.5 inline-block align-middle" />
            Above-market rates pull the <span className="font-semibold">top clippers</span>
          </p>
        </div>
      </div>
    </div>
  );
}

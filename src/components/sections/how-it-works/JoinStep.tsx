import { Rocket, Clock, Wallet } from 'lucide-react';
import StepHeader from './StepHeader';
import Card from '../../ui/Card';
import { PLATFORM_ICONS, PLATFORM_LABELS } from './platformIcons';
import { campaigns } from '../../../data/campaigns';
import { steps } from '../../../data/steps';

function progressPercent(paidOut: string, goal: string) {
  const value = parseFloat(paidOut.replace(/[^0-9.]/g, ''));
  const total = parseFloat(goal.replace(/[^0-9.]/g, ''));
  return total > 0 ? Math.min(100, (value / total) * 100) : 0;
}

export default function JoinStep() {
  const step = steps[0];

  return (
    <div>
      <StepHeader icon={Rocket} number={step.number} eyebrow={step.eyebrow} heading={step.heading} body={step.body} />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:pl-16">
        {campaigns.map((campaign) => (
          <Card key={campaign.brand} className="bg-black/[0.03] p-5">
            <div className="flex items-start justify-between">
              <div
                className="flex h-16 w-28 items-center justify-center overflow-hidden rounded-xl border border-border-hairline"
                style={{ backgroundColor: campaign.logoBg }}
              >
                {campaign.logo && (
                  <img
                    src={campaign.logo}
                    alt={campaign.brand}
                    className={
                      campaign.logoFit === 'contain'
                        ? 'h-full w-full object-contain p-3'
                        : 'h-full w-full object-cover'
                    }
                  />
                )}
              </div>
              <div className="text-right">
                <span className="inline-flex rounded-full bg-[#90EE90]/40 px-3 py-1 text-xs font-medium text-[#1a7a1a]">
                  {campaign.status}
                </span>
                <p className="mt-2 flex items-center justify-end gap-1 text-xs text-text-body">
                  <Clock size={12} /> {campaign.daysLeft}
                </p>
              </div>
            </div>

            <p className="mt-4 font-poppins text-lg font-semibold text-black/80">{campaign.brand}</p>

            <div className="mt-2 flex items-center gap-2 text-xs text-text-body">
              Platform
              <span className="flex items-center gap-1">
                {campaign.platforms.map((platform) => (
                  <img
                    key={platform}
                    src={PLATFORM_ICONS[platform]}
                    alt={PLATFORM_LABELS[platform]}
                    className="h-5 w-5 rounded object-contain"
                  />
                ))}
              </span>
            </div>

            <div className="mt-4 flex items-end justify-between text-sm">
              <div>
                <p className="flex items-center gap-1 text-xs text-text-body">
                  <Wallet size={12} /> Paid Out
                </p>
                <p className="font-semibold text-black/80">
                  {campaign.paidOut} <span className="font-normal text-text-body">/{campaign.goal}</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-text-body">CPM</p>
                <p className="font-semibold text-black/80">
                  {campaign.cpm} <span className="font-normal text-text-body">/1k views</span>
                </p>
              </div>
            </div>

            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-black/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-orange to-brand-yellow"
                style={{ width: `${progressPercent(campaign.paidOut, campaign.goal)}%` }}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

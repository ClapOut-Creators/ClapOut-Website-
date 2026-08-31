import { useEffect, useState } from 'react';
import { Clock, Wallet } from 'lucide-react';
import Card from './Card';
import { PLATFORM_ICONS, PLATFORM_LABELS } from '../sections/how-it-works/platformIcons';
import { useCountdown } from '../../hooks/useCountdown';
import type { Campaign } from '../../types/content';

function progressPercent(paidOut: string, goal: string) {
  const value = parseFloat(paidOut.replace(/[^0-9.]/g, ''));
  const total = parseFloat(goal.replace(/[^0-9.]/g, ''));
  return total > 0 ? Math.min(100, (value / total) * 100) : 0;
}

// Campaigns with a real `endDate` get a live "N Days left" countdown derived
// from it, so the card can't drift out of sync with its own detail page. The
// rest fall back to the static `daysLeft` string. A date-only endDate means
// the campaign runs through the end of that day; a full datetime (e.g.
// E-WALE's 2026-08-28T23:30:00) is treated as the exact deadline.
function daysLeftLabel(campaign: Campaign) {
  if (!campaign.endDate) return campaign.daysLeft;
  const end = new Date(
    campaign.endDate.includes('T') ? campaign.endDate : `${campaign.endDate}T23:59:59`,
  );
  if (Number.isNaN(end.getTime())) return campaign.daysLeft;
  const diffMs = end.getTime() - Date.now();
  if (diffMs < 0) return 'Ended';
  const diffDays = Math.floor(diffMs / 86_400_000);
  if (diffDays === 0) return 'Ends today';
  return `${diffDays} Days left`;
}

// Re-render once a minute so the countdown stays live while the page is open
// (flipping to "Ends today"/"Ended" without a reload).
function useCountdownTick(enabled: boolean) {
  const [, setTick] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    const id = setInterval(() => setTick((t) => t + 1), 60_000);
    return () => clearInterval(id);
  }, [enabled]);
}

interface CampaignCardProps {
  campaign: Campaign;
  /** When false the card is a static demo: no detail-page link, no hover affordance. */
  interactive?: boolean;
  className?: string;
}

export default function CampaignCard({ campaign, interactive = true, className = '' }: CampaignCardProps) {
  useCountdownTick(Boolean(campaign.endDate));
  const isActive = campaign.status.toLowerCase() === 'active';
  const isUpcoming = campaign.status.toLowerCase() === 'upcoming';
  const openCountdown = useCountdown(isUpcoming ? campaign.startDate : undefined);
  const baseClass = `block bg-black/[0.03] p-5 dark:bg-white/5 ${className}`;
  return (
    <Card
      {...(interactive
        ? { href: `#/campaigns/${campaign.slug}` }
        : {})}
      className={
        interactive
          ? `${baseClass} transition-colors hover:bg-black/[0.06] dark:hover:bg-white/10`
          : baseClass
      }
    >
      <div className="flex items-start justify-between">
        <div
          className="flex h-16 w-28 items-center justify-center overflow-hidden rounded-xl border border-border-hairline dark:border-dark-border"
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
          <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
              isActive
                ? 'bg-[#90EE90]/40 text-[#1a7a1a] dark:bg-[#1a7a1a]/40 dark:text-[#90EE90]'
                : 'bg-black/10 text-text-body dark:bg-white/10 dark:text-dark-body'
            }`}
          >
            {campaign.status}
          </span>
          <p className="mt-2 flex items-center justify-end gap-1 text-xs text-text-body dark:text-dark-body">
            <Clock size={12} /> {isUpcoming && openCountdown ? `Opens in ${openCountdown}` : daysLeftLabel(campaign)}
          </p>
        </div>
      </div>

      <p className="mt-4 font-poppins text-lg font-semibold text-black/80 dark:text-white">{campaign.brand}</p>

      <div className="mt-2 flex items-center gap-2 text-xs text-text-body dark:text-dark-body">
        Platform
        <span className="flex items-center gap-1">
          {campaign.platforms.map((platform) => (
            <img
              key={platform}
              src={PLATFORM_ICONS[platform]}
              alt={PLATFORM_LABELS[platform]}
              className="h-3.5 w-3.5 rounded-sm object-contain"
            />
          ))}
        </span>
      </div>

      <div className="mt-4 flex items-end justify-between text-sm">
        <div>
          <p className="flex items-center gap-1 text-xs text-text-body dark:text-dark-body">
            <Wallet size={12} /> Paid Out
          </p>
          <p className="font-semibold text-black/80 dark:text-white">
            {campaign.paidOut} <span className="font-normal text-text-body dark:text-dark-body">/{campaign.goal}</span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-text-body dark:text-dark-body">CPM</p>
          <p className="font-semibold text-black/80 dark:text-white">
            {campaign.cpm} <span className="font-normal text-text-body dark:text-dark-body">/1k views</span>
          </p>
        </div>
      </div>

      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-orange to-brand-yellow"
          style={{ width: `${progressPercent(campaign.paidOut, campaign.goal)}%` }}
        />
      </div>
    </Card>
  );
}

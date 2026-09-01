import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CampaignCard from '../components/ui/CampaignCard';
import { campaigns as staticCampaigns } from '../data/campaigns';
import { fetchCampaigns } from '../lib/api';
import type { Campaign } from '../types/content';

// Placeholder shown while the API call is in flight — mirrors CampaignCard's
// blocks (logo swatch, status pill, brand, platforms, payout/CPM, progress bar)
// so the grid doesn't jump when real cards arrive.
function CampaignCardSkeleton() {
  const block = 'rounded bg-black/10 dark:bg-white/10';
  return (
    <div className="animate-pulse rounded-2xl border border-border-hairline bg-black/[0.03] p-5 dark:border-dark-border dark:bg-white/5">
      <div className="flex items-start justify-between">
        <div className="h-16 w-28 rounded-xl bg-black/10 dark:bg-white/10" />
        <div className="flex flex-col items-end">
          <div className="h-6 w-16 rounded-full bg-black/10 dark:bg-white/10" />
          <div className={`mt-2 h-4 w-20 ${block}`} />
        </div>
      </div>
      <div className={`mt-4 h-7 w-32 ${block}`} />
      <div className={`mt-2 h-4 w-24 ${block}`} />
      <div className="mt-4 flex items-end justify-between">
        <div>
          <div className={`h-4 w-16 ${block}`} />
          <div className={`mt-1 h-5 w-28 ${block}`} />
        </div>
        <div className="flex flex-col items-end">
          <div className={`h-4 w-10 ${block}`} />
          <div className={`mt-1 h-5 w-24 ${block}`} />
        </div>
      </div>
      <div className="mt-3 h-1.5 w-full rounded-full bg-black/10 dark:bg-white/10" />
    </div>
  );
}

export default function CampaignsPage() {
  // Campaigns come from the backend; the bundled static list is the silent
  // fallback for any failure (offline, API down, bad payload) so the page never
  // renders broken. `null` = still loading.
  const [campaigns, setCampaigns] = useState<Campaign[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchCampaigns()
      .then((data) => {
        if (!cancelled) setCampaigns(data);
      })
      .catch(() => {
        if (!cancelled) setCampaigns(staticCampaigns);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="bg-white transition-colors dark:bg-dark-bg" style={{ overflowX: 'hidden' }}>
      <Navbar />

      <section className="pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-greyDark dark:bg-white/5 dark:text-white/70">
            <span className="flex h-[36.27px] w-[36.27px] items-center justify-center rounded-[10.77px] bg-gradient-to-t from-[#A967A3] to-[#E990EE]">
              <Star size={16} className="fill-brand-yellow text-brand-yellow" />
            </span>
            Content Rewards
          </span>

          <h1 className="mt-6 font-poppins text-4xl font-semibold text-black/80 dark:text-white md:text-5xl">
            Campaigns
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-sfpro text-text-body dark:text-dark-body">
            Discover active campaigns from this Content Rewards community.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns === null
            ? [0, 1, 2].map((index) => <CampaignCardSkeleton key={index} />)
            : campaigns
                .filter((campaign) => !campaign.demo)
                .map((campaign) => <CampaignCard key={campaign.slug} campaign={campaign} />)}
        </div>
      </section>

      <Footer />
    </main>
  );
}

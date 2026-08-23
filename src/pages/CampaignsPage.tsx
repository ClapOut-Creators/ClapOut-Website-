import { Star } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CampaignCard from '../components/ui/CampaignCard';
import { campaigns } from '../data/campaigns';

export default function CampaignsPage() {
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
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.slug} campaign={campaign} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

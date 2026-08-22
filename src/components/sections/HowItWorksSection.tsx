import { ArrowRight } from 'lucide-react';
import Tabs from '../ui/Tabs';
import Button from '../ui/Button';
import JoinStep from './how-it-works/JoinStep';
import SetupStep from './how-it-works/SetupStep';
import PostStep from './how-it-works/PostStep';
import CashOutStep from './how-it-works/CashOutStep';

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] md:gap-16">
          <div className="md:sticky md:top-32 md:self-start">
            <p className="font-sfpro text-sm uppercase tracking-wide text-text-body">How it works</p>
            <Tabs tabs={['For Creators', 'For Brands']} className="mt-4" />
            <h2 className="mt-6 font-poppins text-4xl font-semibold text-black/80 md:text-5xl">
              Three steps to your first payout.
            </h2>
            <p className="mt-4 max-w-md font-sfpro text-text-body">
              No following, no application, no catch. Pick a campaign, post your clips, and watch
              the views turn into earnings.
            </p>
            <Button variant="dark" className="mt-6 inline-flex items-center gap-2 px-8 py-3">
              Start Clipping <ArrowRight size={16} />
            </Button>
          </div>

          <div className="relative flex flex-col gap-16 md:gap-20">
            <div
              className="absolute bottom-6 left-5 top-6 hidden w-px bg-border-hairline md:block"
              aria-hidden="true"
            />
            <JoinStep />
            <SetupStep />
            <PostStep />
            <CashOutStep />
          </div>
        </div>
      </div>
    </section>
  );
}

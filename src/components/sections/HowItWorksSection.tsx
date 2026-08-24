import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Tabs from "../ui/Tabs";
import Button from "../ui/Button";
import JoinStep from "./how-it-works/JoinStep";
import SetupStep from "./how-it-works/SetupStep";
import PostStep from "./how-it-works/PostStep";
import CashOutStep from "./how-it-works/CashOutStep";
import BriefStep from "./how-it-works/BriefStep";
import ManageStep from "./how-it-works/ManageStep";
import TrackStep from "./how-it-works/TrackStep";

export default function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState(0);
  const isBrands = activeTab === 0;

  return (
    <section id="how-it-works" className="scroll-mt-28 bg-white py-20 transition-colors md:py-28 dark:bg-dark-bg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] md:gap-16">
          <div className="md:sticky md:top-32 md:self-start">
            <p className="font-sfpro text-sm uppercase tracking-wide text-text-body dark:text-dark-body">
              How it works
            </p>
            <Tabs
              tabs={["For Brands", "For Creators"]}
              onChange={setActiveTab}
              className="mt-4"
            />

            {isBrands ? (
              <>
                <h2 className="mt-6 font-poppins text-4xl font-semibold text-black/80 md:text-5xl dark:text-white">
                  Tell us the goal. We run the campaign.
                </h2>
                <p className="mt-4 max-w-md font-sfpro text-text-body dark:text-dark-body">
                  Fully managed. You bring the content and the budget, we
                  configure and run the campaign with our clipper network, and
                  you watch the views. Our rates sit above the industry
                  standard, so the best clippers show up.
                </p>
                <Button
                  href="#/contact/partnership"
                  variant="dark"
                  className="mt-6 inline-flex items-center gap-2 px-8 py-3"
                >
                  Talk to us <ArrowRight size={16} className="shrink-0" />
                </Button>
              </>
            ) : (
              <>
                <h2 className="mt-6 font-poppins text-4xl font-semibold text-black/80 md:text-5xl dark:text-white">
                  Three steps to your first payout.
                </h2>
                <p className="mt-4 max-w-md font-sfpro text-text-body dark:text-dark-body">
                  No following, no application, no catch. Pick a campaign, post
                  your clips, and watch the views turn into earnings.
                </p>
                <Button
                  href="#/campaigns"
                  variant="dark"
                  className="mt-6 inline-flex items-center gap-2 px-8 py-3"
                >
                  Start Clipping <ArrowRight size={16} />
                </Button>
              </>
            )}
          </div>

          <div className="relative flex flex-col gap-16 md:gap-20">
            <div
              className="absolute bottom-6 left-5 top-6 hidden w-px bg-border-hairline md:block dark:bg-white/10"
              aria-hidden="true"
            />
            {isBrands ? (
              <>
                <BriefStep />
                <ManageStep />
                <TrackStep />
              </>
            ) : (
              <>
                <JoinStep />
                <SetupStep />
                <PostStep />
                <CashOutStep />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

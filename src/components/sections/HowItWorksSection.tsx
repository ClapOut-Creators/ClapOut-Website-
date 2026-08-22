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
import {
  CREATORS_WHATSAPP_URL,
  BRANDS_PHONE,
  BRANDS_PHONE_DISPLAY,
} from "../../data/links";

export default function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState(0);
  const isBrands = activeTab === 1;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] md:gap-16">
          <div className="md:sticky md:top-32 md:self-start">
            <p className="font-sfpro text-sm uppercase tracking-wide text-text-body">
              How it works
            </p>
            <Tabs
              tabs={["For Creators", "For Brands"]}
              onChange={setActiveTab}
              className="mt-4"
            />

            {isBrands ? (
              <>
                <h2 className="mt-6 font-poppins text-4xl font-semibold text-black/80 md:text-5xl">
                  Tell us the goal. We run the campaign.
                </h2>
                <p className="mt-4 max-w-md font-sfpro text-text-body">
                  Fully managed. You bring the content and the budget, we
                  configure and run the campaign with our clipper network, and
                  you watch the views. Our rates sit above the industry
                  standard, so the best clippers show up.
                </p>
                <Button
                  href={`tel:${BRANDS_PHONE}`}
                  variant="dark"
                  className="group mt-6 inline-flex items-center gap-2 px-8 py-3"
                >
                  <span className="relative inline-block h-5 w-[126px] overflow-hidden align-middle">
                    <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap transition-transform duration-300 ease-out group-hover:-translate-y-full">
                      Call us
                    </span>
                    <span className="absolute inset-0 flex translate-y-full items-center whitespace-nowrap transition-transform duration-300 ease-out group-hover:translate-y-0">
                      {BRANDS_PHONE_DISPLAY}
                    </span>
                  </span>
                  <ArrowRight size={16} className="shrink-0" />
                </Button>
              </>
            ) : (
              <>
                <h2 className="mt-6 font-poppins text-4xl font-semibold text-black/80 md:text-5xl">
                  Three steps to your first payout.
                </h2>
                <p className="mt-4 max-w-md font-sfpro text-text-body">
                  No following, no application, no catch. Pick a campaign, post
                  your clips, and watch the views turn into earnings.
                </p>
                <Button
                  href={CREATORS_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="dark"
                  className="mt-6 inline-flex items-center gap-2 px-8 py-3"
                >
                  Join Clapout Community <ArrowRight size={16} />
                </Button>
              </>
            )}
          </div>

          <div className="relative flex flex-col gap-16 md:gap-20">
            <div
              className="absolute bottom-6 left-5 top-6 hidden w-px bg-border-hairline md:block"
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

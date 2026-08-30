import { useState } from "react";
import Button from "../ui/Button";
import PhoneMockup from "../ui/PhoneMockup";
import LogoMarquee from "../ui/LogoMarquee";
import {
  TikTokIcon,
  YouTubeIcon,
  InstagramIcon,
  FacebookIcon,
  XIcon,
} from "../ui/BrandIcons";
import { trustedByLogos } from "../../data/brands";

const HERO_REELS = [
  "/reels/reel-1.mp4",
  "/reels/reel-2.mp4",
  "/reels/reel-3.mp4",
  "/reels/reel-4.mp4",
  "/reels/reel-5.mp4",
  "/reels/reel-6.mp4",
  "/reels/reel-7.mp4",
];

// One icon per reel; the highlighted icon follows the video currently playing.
const PLATFORM_DOTS = [
  InstagramIcon,
  YouTubeIcon,
  TikTokIcon,
  FacebookIcon,
  XIcon,
  InstagramIcon,
  TikTokIcon,
];

export default function HeroSection() {
  const [activeReel, setActiveReel] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-white pb-16 pt-32 transition-colors md:pb-24 md:pt-40 dark:bg-dark-bg">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-greyDark dark:bg-white/5 dark:text-white/70">
          <span className="w-[36.27px] h-[36.27px] rounded-[10.77px] bg-gradient-to-t from-[#67A967] to-[#90EE90] flex items-center justify-center">
            <span aria-hidden="true">
              <img src="/clap.png" className="w-full" alt="" />
            </span>
          </span>{" "}
          Create. Post. Get Paid.
        </span>

        <h1
          className="mt-6 font-poppins font-[600] text-black/80 dark:text-white"
          style={{
            fontSize: "clamp(1.75rem, 1rem + 4vw, 5.07rem)",
            lineHeight: 1.1,
          }}
        >
          <span className="block">Create, Clip, Post and</span>
          <span className="mt-2 flex flex-wrap items-center justify-center gap-3">
            Earn with
            <span className="rounded-[28px] bg-brand-yellow px-4 py-1 text-brand-dark md:px-[30px] md:py-2">
              Clipping
            </span>
          </span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl font-sfpro text-text-body dark:text-dark-body"
          style={{
            fontSize: "clamp(1rem, 0.9rem + 0.4vw, 1.375rem)",
            lineHeight: 1.36,
          }}
        >
          A creative marketplace uniting brands and digital talent. Brands can
          start campaigns that engage expert clippers to craft viral content,
          amplify reach, and generate real revenue.
        </p>

        <div className="mx-auto mt-8 flex max-w-xs flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <Button
            href="#/campaigns"
            variant="dark"
            className="w-full px-[42px] py-3 sm:w-auto"
          >
            Start Clipping
          </Button>
          <Button
            href="#/contact/partnership"
            variant="orange"
            className="w-full px-[34px] py-3 sm:w-auto"
          >
            Start Campaign
          </Button>
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex h-[28rem] max-w-md items-center justify-center sm:h-[32rem] md:h-[37rem] md:max-w-lg">
        <div className="absolute right-1/2 top-1/2 w-24 origin-bottom-right -translate-y-1/2 -translate-x-6 -rotate-[11deg] sm:w-28 md:w-[10.5rem]">
          <div className="aspect-[9/19] overflow-hidden rounded-[1.6rem] bg-[#1c1c1e] p-1.5 shadow-2xl md:rounded-[2rem]">
            <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-[#2a2a2d] md:rounded-[1.6rem]">
              <img
                src="/reels/wishly-cover.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 w-28 origin-bottom-left -translate-y-1/2 translate-x-6 rotate-[10deg] sm:w-32 md:w-48">
          <div className="relative aspect-[9/19] overflow-hidden rounded-[1.8rem] bg-[#111112] shadow-2xl md:rounded-[2.2rem]">
            <img
              src="/reels/techme-cover.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <PhoneMockup
          className="relative z-10 w-52 sm:w-60 md:w-[17.5rem]"
          accountName="ClapOut Clips"
          handle="@clapout.clips"
          likes="388.6K"
          comments="4806"
          shares="11.2K"
          timestamp="00:02/01:00"
          videos={HERO_REELS}
          onVideoChange={setActiveReel}
        />
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 md:mt-8 md:gap-2.5">
        {PLATFORM_DOTS.map((Icon, i) => {
          const active = i === activeReel;
          return (
            <span
              key={i}
              className={`flex items-center justify-center rounded-full transition-all duration-300 ${
                active
                  ? "h-8 w-8 scale-110 bg-brand-orange text-white md:h-9 md:w-9"
                  : "h-7 w-7 bg-black/10 text-brand-dark md:h-8 md:w-8 dark:bg-white/10 dark:text-white"
              }`}
            >
              <Icon
                className={
                  active
                    ? "h-4 w-4 md:h-[1.125rem] md:w-[1.125rem]"
                    : "h-3.5 w-3.5 md:h-4 md:w-4"
                }
              />
            </span>
          );
        })}
      </div>

      <div className="mx-auto mt-5 w-[min(86vw,26rem)] md:mt-6 md:w-[min(60vw,34rem)]">
        <div className="mb-1 flex justify-between px-0.5 font-sfpro text-[0.65rem] font-semibold tabular-nums text-text-body dark:text-dark-body">
          <span>0:00</span>
          <span>0:30</span>
          <span>1:00</span>
        </div>
        <div className="relative h-10 overflow-hidden rounded-lg bg-[#111112] p-1 shadow-lg md:h-12 md:rounded-xl">
          <div className="flex h-full gap-px overflow-hidden rounded-md">
            {Array.from({ length: 14 }, (_, i) => (
              <div
                key={i}
                className="h-full flex-1"
                style={{
                  background: `linear-gradient(${145 + (i % 4) * 25}deg, ${
                    ["#3a2a24", "#24303a", "#2a3a2c", "#302436"][i % 4]
                  } 0%, #17171a 80%)`,
                }}
              />
            ))}
          </div>
          <div className="absolute inset-y-1 left-1 w-[calc(30%-0.25rem)] rounded-l-md bg-black/60" />
          <div className="absolute inset-y-1 right-1 w-[calc(32%-0.25rem)] rounded-r-md bg-black/60" />
          <div className="absolute inset-y-1 left-[30%] right-[32%] rounded-[4px] border-2 border-white">
            <span className="scrub-playhead absolute inset-y-0 w-[2px] bg-[#2fae5c]">
              <span className="absolute -top-px left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-[#2fae5c]" />
            </span>
          </div>
        </div>
        <p className="mt-1.5 text-center font-sfpro text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-text-body dark:text-dark-body">
          Clip · 0:23
        </p>
      </div>

      <div className="mx-auto mt-16 flex w-full max-w-4xl flex-col items-center gap-6 border-t border-border-hairline px-4 pt-10 md:flex-row md:gap-10 dark:border-white/10">
        <span className="shrink-0 font-sfpro text-xl text-text-body font-[500] dark:text-dark-body">
          Trusted by top brands
        </span>
        <LogoMarquee logos={trustedByLogos} className="w-full max-w-xl" />
      </div>
    </section>
  );
}

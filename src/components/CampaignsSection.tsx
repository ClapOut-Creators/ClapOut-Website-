import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import FadeIn from './shared/FadeIn';
import LiveProjectButton from './shared/LiveProjectButton';

interface Campaign {
  number: string;
  category: string;
  name: string;
  href: string;
  buttonLabel: string;
  images: { col1a: string; col1b: string; col2: string };
}

const CAMPAIGNS: Campaign[] = [
  {
    number: '01',
    category: 'Live Now · TikTok · ₵20 CPM',
    name: 'E-WALE Clipping',
    href: 'https://luma.com/1b2vxsej',
    buttonLabel: 'Join on Luma',
    images: {
      col1a: '/clapout-logo.jpeg',
      col1b:
        'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=600,height=900/uploads/vg/cf3650cc-1cd8-4b1a-91b7-2e9cb5829942.jpg',
      col2:
        'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=800,height=800/uploads/vg/cf3650cc-1cd8-4b1a-91b7-2e9cb5829942.jpg',
    },
  },
  {
    number: '02',
    category: 'Product Launch',
    name: 'Aura Skincare',
    href: '#join',
    buttonLabel: 'View Campaign',
    images: {
      col1a:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      col1b:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
  },
  {
    number: '03',
    category: 'App Launch',
    name: 'Solaris Digital',
    href: '#join',
    buttonLabel: 'View Campaign',
    images: {
      col1a:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      col1b:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
  },
];

interface CardProps {
  campaign: Campaign;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function CampaignCard({ campaign, index, total, progress }: CardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  // The sticky element must range over the whole section (its parent is the
  // shared tall container) so later cards pile on top of pinned earlier ones;
  // the h-[85vh] box provides each card's scroll distance.
  return (
    <div className="sticky top-24 h-[85vh] md:top-32">
      <motion.div
        className="relative rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={{ scale, top: index * 28, transformOrigin: 'top' }}
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4 px-2 sm:mb-6 sm:px-4">
          <div className="flex items-center gap-4 sm:gap-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {campaign.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
                {campaign.category}
              </span>
              <span
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2.2rem)' }}
              >
                {campaign.name}
              </span>
            </div>
          </div>
          <LiveProjectButton label={campaign.buttonLabel} href={campaign.href} />
        </div>

        <div className="flex gap-3 sm:gap-4">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <img
              src={campaign.images.col1a}
              alt={`${campaign.name} content preview`}
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={campaign.images.col1b}
              alt={`${campaign.name} content preview`}
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="w-[60%]">
            <img
              src={campaign.images.col2}
              alt={`${campaign.name} content preview`}
              loading="lazy"
              className="h-full w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function CampaignsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="campaigns"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-10 text-center font-black uppercase leading-none tracking-tight sm:mb-14 md:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Campaigns
        </h2>
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-6xl">
        {CAMPAIGNS.map((campaign, i) => (
          <CampaignCard
            key={campaign.number}
            campaign={campaign}
            index={i}
            total={CAMPAIGNS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

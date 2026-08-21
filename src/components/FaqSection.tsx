import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FadeIn from './shared/FadeIn';

const FAQS = [
  {
    q: 'What is Clapout?',
    a: 'Clapout is a creator distribution platform that connects brands with micro-influencers and creators. Brands provide a campaign, creators post and promote the content, and Clapout tracks the results and rewards creators based on verified performance.',
  },
  {
    q: 'Do I need a lot of followers to join?',
    a: "No. You don't need millions of followers to work with brands. Clapout is built for micro-influencers and emerging creators — what matters is that your content reaches real people and performs.",
  },
  {
    q: 'How do I earn as a creator?',
    a: 'Every campaign states its reward up front — for example ₵20 per 1,000 verified views. You join a campaign, follow the brief, post the content on your platform, submit your post link, and earn based on your verified performance. You always know how much you can earn before you join.',
  },
  {
    q: 'How is my performance verified?',
    a: 'After you post, you submit your link to Clapout. Our team reviews the post against the campaign brief and tracks its performance over the campaign window. Only genuine, verified views count toward your payout.',
  },
  {
    q: 'How do brands launch a campaign?',
    a: 'Brands set a campaign budget, provide their content and brief, and Clapout activates a network of creators to distribute it. Brands track verified performance and only pay based on results.',
  },
  {
    q: 'When and how do I get paid?',
    a: 'Payouts are made after the campaign window closes and your performance has been verified. Creators in Ghana are paid via mobile money or bank transfer. Payment timelines are stated in each campaign brief.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid rgba(215, 226, 234, 0.15)' }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-6 text-left sm:py-7"
      >
        <span
          className="font-medium uppercase text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)' }}
        >
          {q}
        </span>
        <ChevronDown
          className={`shrink-0 text-[#D7E2EA] transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
          size={22}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? 300 : 0, opacity: open ? 1 : 0 }}
      >
        <p
          className="pb-6 font-light leading-relaxed text-[#D7E2EA] opacity-70 sm:pb-7"
          style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)' }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-12 text-center font-black uppercase leading-none tracking-tight sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          FAQs
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-3xl">
        {FAQS.map((faq, i) => (
          <FadeIn key={faq.q} delay={i * 0.08} y={20}>
            <FaqItem q={faq.q} a={faq.a} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

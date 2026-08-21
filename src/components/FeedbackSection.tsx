import { Quote, Star } from 'lucide-react';
import FadeIn from './FadeIn';

const FEEDBACK = [
  {
    quote:
      'We put ₵2k behind our *714*22# campaign and let twenty creators run with it. Real views, verified before we paid a cedi — reach we could never have bought with ads alone.',
    name: 'Samuel',
    company: 'E-Wale',
    photo:
      'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
  },
  {
    quote:
      'One brief on Monday, clips everywhere by the weekend. A squad of micro-creators moved Wishly further than any single big influencer we have ever paid.',
    name: 'Stephen',
    company: 'Wishly',
    photo:
      'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
  },
  {
    quote:
      'No vanity metrics. Every payout mapped to views Clapout had already verified, so we knew exactly what our budget bought.',
    name: 'Nana',
    company: 'Tekme',
    photo:
      'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
  },
];

function FeedbackCard({
  quote,
  name,
  company,
  photo,
  dark,
}: {
  quote: string;
  name: string;
  company: string;
  photo: string;
  dark: boolean;
}) {
  return (
    <figure
      className={`flex h-full flex-col rounded-[32px] p-8 transition-transform duration-300 hover:-translate-y-2 sm:p-9 ${
        dark ? 'bg-[#0C0C0C] text-white' : 'bg-[#F4F2ED] text-[#0C0C0C]'
      }`}
    >
      <div className="mb-6 flex items-start justify-between">
        <Quote
          size={40}
          strokeWidth={0}
          fill="#EC612C"
          className="-scale-x-100"
        />
        <div className="flex gap-1 pt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} strokeWidth={0} fill="#EC612C" />
          ))}
        </div>
      </div>

      <blockquote
        className="flex-1 font-light leading-relaxed"
        style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
      >
        {quote}
      </blockquote>

      <figcaption className="mt-8 flex items-center gap-4">
        <img
          src={photo}
          alt={`${name}, ${company}`}
          loading="lazy"
          className="h-12 w-12 shrink-0 rounded-full object-cover"
          style={{ border: '2px solid #EC612C' }}
        />
        <div>
          <span className="block font-medium uppercase tracking-wide">
            {name}
          </span>
          <span className={`block text-sm font-light ${dark ? 'text-white/60' : 'text-[#0C0C0C]/60'}`}>
            {company}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}

export default function FeedbackSection() {
  return (
    <section
      id="feedback"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-28"
    >
      <FadeIn y={40}>
        <h2
          className="mx-auto mb-12 max-w-5xl text-center font-black uppercase leading-[0.95] tracking-tight text-[#0C0C0C] sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(2.4rem, 7.5vw, 110px)' }}
        >
          Trusted by the best brands
        </h2>
      </FadeIn>

      <div className="mx-auto grid max-w-6xl items-start gap-6 md:grid-cols-3 md:gap-8">
        {FEEDBACK.map((item, i) => (
          <FadeIn
            key={item.name}
            delay={i * 0.12}
            y={30}
            className={i === 1 ? 'md:mt-12' : undefined}
          >
            <FeedbackCard {...item} dark={i === 1} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

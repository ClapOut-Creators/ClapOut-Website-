import { Star, User } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import type { Testimonial } from '../../types/content';

function TestimonialCard({ testimonial, dark }: { testimonial: Testimonial; dark: boolean }) {
  return (
    <figure
      className={`flex h-full w-64 shrink-0 flex-col rounded-[28px] p-6 sm:w-72 md:w-auto md:p-7 ${
        dark
          ? 'bg-[#0C0C0C] text-white dark:border dark:border-white/10'
          : 'bg-[#F4F2ED] text-black/80 dark:bg-dark-surface dark:text-white'
      }`}
    >
      <div className="flex justify-end gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} strokeWidth={0} fill="#EC612C" />
        ))}
      </div>

      <blockquote className="mt-4 flex-1 font-sfpro text-sm leading-relaxed">{testimonial.quote}</blockquote>

      <figcaption className="mt-6 flex items-center gap-3">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={`${testimonial.name}, ${testimonial.handle}`}
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-orange ${
              dark ? 'bg-white/10' : 'bg-black/10 dark:bg-white/10'
            }`}
            role="img"
            aria-label={`${testimonial.name}, ${testimonial.handle}`}
          >
            <User size={18} className={dark ? 'text-white/60' : 'text-black/40 dark:text-white/60'} />
          </span>
        )}
        <div>
          <p className="font-poppins text-sm font-semibold uppercase tracking-wide">{testimonial.name}</p>
          <p className={`text-sm ${dark ? 'text-white/60' : 'text-text-body dark:text-white/60'}`}>{testimonial.handle}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 transition-colors md:py-28 dark:bg-dark-bg">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="font-sfpro text-sm uppercase tracking-wide text-text-body dark:text-dark-body">Why the use us</p>
        <h2 className="mt-4 font-poppins text-4xl font-semibold text-black/80 md:text-5xl dark:text-white">
          Trusted by the best brands
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-sfpro text-text-body dark:text-dark-body">
          Streamers, labels, and brands run campaigns here. Their clips are the ones your network
          gets paid to post.
        </p>
      </div>

      <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [-webkit-overflow-scrolling:touch] [touch-action:pan-x] md:mx-auto md:mt-16 md:max-w-6xl md:grid md:grid-cols-4 md:items-start md:overflow-visible md:px-4 md:pb-0">
        {testimonials.map((testimonial, i) => (
          <div key={i} className={`shrink-0 snap-start ${i % 2 === 1 ? 'md:mt-12' : ''}`}>
            <TestimonialCard testimonial={testimonial} dark={i % 2 === 1} />
          </div>
        ))}
      </div>
    </section>
  );
}

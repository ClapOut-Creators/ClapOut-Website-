import FadeIn from './shared/FadeIn';
import ContactButton from './shared/ContactButton';
import LiveProjectButton from './shared/LiveProjectButton';

export default function FinalCtaSection() {
  return (
    <section
      id="join"
      className="relative z-10 -mt-10 flex flex-col items-center rounded-t-[40px] bg-[#0C0C0C] px-5 pb-20 pt-24 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-32 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-36"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
        >
          Ready to clap out?
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="mx-auto mt-8 max-w-[600px] text-center font-light leading-relaxed text-[#D7E2EA] sm:mt-10"
          style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.3rem)' }}
        >
          Whether you&apos;re a brand looking for more reach or a creator looking
          for opportunities, Clapout brings both sides together.
        </p>
      </FadeIn>

      <FadeIn delay={0.3} y={20}>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:mt-14 sm:gap-6">
          <ContactButton label="Launch a Campaign" href="#join" />
          <LiveProjectButton label="Become a Creator" href="#join" />
        </div>
      </FadeIn>

    </section>
  );
}

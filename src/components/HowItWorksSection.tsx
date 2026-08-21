import FadeIn from './shared/FadeIn';

const STEPS = [
  {
    number: '01',
    name: 'Join a Campaign',
    description:
      'Creators choose available campaigns that match their audience and platform — with clear briefs, deadlines, posting requirements and rewards.',
  },
  {
    number: '02',
    name: 'Create & Post',
    description:
      'Follow the campaign brief, create or share the approved content, and post it on your social platform.',
  },
  {
    number: '03',
    name: 'Submit Your Link',
    description:
      'Submit your post to Clapout so your performance can be reviewed and verified.',
  },
  {
    number: '04',
    name: 'Get Paid',
    description:
      'Earn based on the campaign reward and your verified performance. You know how much you can earn before you join.',
  },
  {
    number: '05',
    name: 'Repeat & Grow',
    description:
      'Keep joining campaigns, build your track record, and unlock bigger briefs from brands that want your reach.',
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          How it works
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {STEPS.map((step, i) => (
          <FadeIn key={step.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 py-8 sm:gap-10 sm:py-10 md:gap-14 md:py-12"
              style={{
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
              }}
            >
              <span
                className="font-black leading-none text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {step.number}
              </span>
              <div className="flex flex-col gap-2 pt-2 sm:gap-3">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {step.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

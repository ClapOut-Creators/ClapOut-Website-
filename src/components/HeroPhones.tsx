const TikTokGlyph = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.07v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.77.12V9.77a5.76 5.76 0 0 0-.77-.05 5.66 5.66 0 1 0 5.66 5.66V9.01a7.3 7.3 0 0 0 4.27 1.37V7.31a4.28 4.28 0 0 1-3.22-1.49Z" />
  </svg>
);

const YouTubeGlyph = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77A26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.2 26.2 0 0 0 22 12a26.2 26.2 0 0 0-.42-4.81ZM10 15.13V8.87L15.2 12 10 15.13Z" />
  </svg>
);

const HeartGlyph = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 21s-7.5-4.9-10-9.6C.3 8.2 2.2 4.5 5.7 4.5c2 0 3.5 1.1 4.3 2.3.8-1.2 2.3-2.3 4.3-2.3 3.5 0 5.4 3.7 3.7 6.9C19.5 16.1 12 21 12 21Z" />
  </svg>
);

const CommentGlyph = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 3C6.5 3 2 6.9 2 11.7c0 2.5 1.2 4.7 3.2 6.3-.1 1.1-.6 2.6-1.9 3.6 0 0 2.9.2 5.2-1.5.5.1 1 .1 1.5.1 5.5 0 10-3.9 10-8.5S17.5 3 12 3Z" />
  </svg>
);

const ShareGlyph = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M13.5 4.5v3.6C7.7 8.6 3.6 12.3 2.5 17.5c2.4-3 5.9-4.6 11-4.6v3.6l8-6-8-6Z" />
  </svg>
);

const ENGAGEMENT = [
  { Icon: HeartGlyph, count: '388.6K', tint: '#ff5c8a' },
  { Icon: CommentGlyph, count: '4806', tint: '#ffffff' },
  { Icon: ShareGlyph, count: '11.2K', tint: '#ffffff' },
];

const PLATFORM_DOTS = [
  YouTubeGlyph,
  TikTokGlyph,
  YouTubeGlyph,
  TikTokGlyph,
  YouTubeGlyph,
  TikTokGlyph,
  YouTubeGlyph,
];

type HeroPhonesProps = {
  /** 0..1 scroll progress of the hero — side phones fan out as it grows. */
  progress: number;
};

export default function HeroPhones({ progress }: HeroPhonesProps) {
  const fan = 1 - Math.min(1, progress * 1.6);

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center">
        {/* Left phone — dimmed clip preview */}
        <div
          className="phone-float absolute right-[52%] top-1/2 hidden w-[min(7.5rem,12vh)] origin-bottom-right sm:block md:w-[min(10.5rem,16vh)]"
          style={{
            transform: `translateY(-58%) translateX(${-24 * (1 - fan)}px) rotate(-11deg)`,
            animationDelay: '-2s',
            transition: 'transform 0.05s linear',
          }}
        >
          <div className="aspect-[9/19] overflow-hidden rounded-[1.6rem] bg-[#1c1c1e] p-1.5 shadow-2xl md:rounded-[2rem]">
            <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-[#2a2a2d] md:rounded-[1.6rem]">
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    'linear-gradient(160deg, #4a4a4e 0%, #232325 55%, #161617 100%)',
                }}
              />
              <div className="absolute left-2 right-2 top-3 rounded-md bg-white/85 p-1.5 md:left-3 md:right-3 md:top-4 md:p-2">
                <p className="text-[0.32rem] font-semibold leading-snug text-neutral-800 md:text-[0.45rem]">
                  The moment the campaign went live, the clippers went to work
                </p>
              </div>
              <span className="absolute bottom-2 left-2 text-[0.4rem] font-bold uppercase tracking-wide text-[#90EE90] md:bottom-3 md:left-3 md:text-[0.55rem]">
                Live
              </span>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] bg-black/45 md:rounded-[2rem]" />
        </div>

        {/* Right phone — dark, TikTok glyph only */}
        <div
          className="phone-float absolute left-[52%] top-1/2 hidden w-[min(8.5rem,13vh)] origin-bottom-left sm:block md:w-[min(12rem,18vh)]"
          style={{
            transform: `translateY(-52%) translateX(${24 * (1 - fan)}px) rotate(10deg)`,
            animationDelay: '-4s',
            transition: 'transform 0.05s linear',
          }}
        >
          <div className="flex aspect-[9/19] items-center justify-center rounded-[1.8rem] bg-[#111112] shadow-2xl md:rounded-[2.2rem]">
            <TikTokGlyph className="h-8 w-8 text-white/25 md:h-12 md:w-12" />
          </div>
        </div>

        {/* Center phone — featured clip */}
        <div className="phone-float relative z-10 w-[min(13rem,24vh)] sm:w-[min(15rem,25vh)] md:w-[min(17.5rem,26vh)]">
          <div className="aspect-[9/19] rounded-[2.2rem] bg-white p-1.5 shadow-[0_30px_60px_rgba(0,0,0,0.35)] md:rounded-[2.6rem] md:p-2">
            <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-[#101012] md:rounded-[2rem]">
              {/* Screen backdrop — brand-colored clip scene */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(90% 65% at 30% 78%, rgba(236,97,44,0.85) 0%, rgba(236,97,44,0) 60%), radial-gradient(80% 60% at 78% 30%, rgba(137,207,240,0.5) 0%, rgba(137,207,240,0) 60%), radial-gradient(70% 55% at 72% 85%, rgba(144,238,144,0.45) 0%, rgba(144,238,144,0) 65%), #101012',
                }}
              />
              <div
                className="absolute inset-x-0 bottom-0 h-2/5"
                style={{
                  background:
                    'linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)',
                }}
              />

              {/* Notch */}
              <div className="absolute left-1/2 top-1.5 h-1.5 w-12 -translate-x-1/2 rounded-full bg-black/60 md:top-2 md:h-2 md:w-16" />

              {/* Header — account + platform badge */}
              <div className="absolute left-3 right-3 top-5 flex items-start justify-between md:left-4 md:right-4 md:top-7">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EC612C] text-[0.55rem] font-black text-white ring-2 ring-white/80 md:h-9 md:w-9 md:text-[0.7rem]">
                    CO
                  </div>
                  <div className="leading-tight">
                    <p className="text-[0.6rem] font-bold text-white md:text-xs">
                      ClapOut Clips
                    </p>
                    <p className="text-[0.5rem] text-white/60 md:text-[0.65rem]">
                      @clapout.clips
                    </p>
                  </div>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/50 md:h-8 md:w-8">
                  <TikTokGlyph className="h-3 w-3 text-white md:h-4 md:w-4" />
                </div>
              </div>

              {/* Caption */}
              <p className="absolute left-3 right-12 top-[54%] text-[0.72rem] font-bold leading-snug text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] md:left-4 md:right-14 md:text-sm">
                E-WALE's drop hit 1M views in 48 hours 🤯
              </p>

              {/* Engagement rail */}
              <div className="absolute bottom-14 right-2.5 flex flex-col items-center gap-2.5 md:bottom-16 md:right-3 md:gap-3">
                {ENGAGEMENT.map(({ Icon, count, tint }) => (
                  <div key={count} className="flex flex-col items-center gap-0.5">
                    <span style={{ color: tint }}>
                      <Icon className="h-4 w-4 md:h-5 md:w-5" />
                    </span>
                    <span className="text-[0.5rem] font-semibold text-white md:text-[0.6rem]">
                      {count}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom bar */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 md:bottom-4 md:left-4 md:right-4">
                <span className="text-[0.55rem] font-semibold tabular-nums text-white/90 md:text-[0.7rem]">
                  00:02/01:00
                </span>
                <span className="flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 text-[0.5rem] font-medium text-white md:text-[0.6rem]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-2.5 w-2.5 fill-current md:h-3 md:w-3"
                    aria-hidden="true"
                  >
                    <path d="M4 9v6h4l5 4V5L8 9H4Zm14.5 3 2-2-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2Z" />
                  </svg>
                  Tap for sound
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform dots */}
      <div className="mt-6 flex items-center gap-2 md:mt-8 md:gap-2.5">
        {PLATFORM_DOTS.map((Glyph, i) => (
          <span
            key={i}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-black/25 md:h-8 md:w-8"
          >
            <Glyph className="h-3 w-3 text-white/70 md:h-3.5 md:w-3.5" />
          </span>
        ))}
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white md:h-9 md:w-9">
          <TikTokGlyph className="h-3.5 w-3.5 text-[#111] md:h-4 md:w-4" />
        </span>
      </div>

      {/* Timeline scrubber — the clip being cut from the full video */}
      <div className="mt-5 w-[min(86vw,26rem)] md:mt-6 md:w-[min(60vw,34rem)]">
        <div className="mb-1 flex justify-between px-0.5 text-[0.5rem] font-semibold tabular-nums text-white/70 md:text-[0.6rem]">
          <span>0:00</span>
          <span>0:30</span>
          <span>1:00</span>
        </div>
        <div className="relative h-10 overflow-hidden rounded-lg bg-[#111112] p-1 shadow-lg md:h-12 md:rounded-xl">
          {/* Filmstrip frames */}
          <div className="flex h-full gap-px overflow-hidden rounded-md">
            {Array.from({ length: 14 }, (_, i) => (
              <div
                key={i}
                className="h-full flex-1"
                style={{
                  background: `linear-gradient(${145 + (i % 4) * 25}deg, ${
                    ['#3a2a24', '#24303a', '#2a3a2c', '#302436'][i % 4]
                  } 0%, #17171a 80%)`,
                }}
              />
            ))}
          </div>

          {/* Dimmed regions outside the clip */}
          <div className="absolute inset-y-1 left-1 w-[calc(30%-0.25rem)] rounded-l-md bg-black/60" />
          <div className="absolute inset-y-1 right-1 w-[calc(32%-0.25rem)] rounded-r-md bg-black/60" />

          {/* Clip selection with trim handles */}
          <div className="absolute inset-y-1 left-[30%] right-[32%] rounded-[4px] border-2 border-white">
            <span className="absolute -left-[3px] top-1/2 flex h-[calc(100%+6px)] w-2 -translate-x-full -translate-y-1/2 items-center justify-center rounded-l-[4px] bg-white md:w-2.5">
              <span className="h-2.5 w-px bg-black/40 md:h-3" />
            </span>
            <span className="absolute -right-[3px] top-1/2 flex h-[calc(100%+6px)] w-2 -translate-y-1/2 translate-x-full items-center justify-center rounded-r-[4px] bg-white md:w-2.5">
              <span className="h-2.5 w-px bg-black/40 md:h-3" />
            </span>

            {/* Playhead sweeping the selected clip */}
            <span className="scrub-playhead absolute inset-y-0 w-[2px] bg-[#90EE90]">
              <span className="absolute -top-px left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-[#90EE90]" />
            </span>
          </div>
        </div>
        <p className="mt-1.5 text-center text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-white/80 md:text-[0.65rem]">
          Clip · 0:23
        </p>
      </div>
    </div>
  );
}

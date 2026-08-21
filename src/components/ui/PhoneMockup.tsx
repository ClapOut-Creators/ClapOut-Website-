const TikTokGlyph = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.07v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.77.12V9.77a5.76 5.76 0 0 0-.77-.05 5.66 5.66 0 1 0 5.66 5.66V9.01a7.3 7.3 0 0 0 4.27 1.37V7.31a4.28 4.28 0 0 1-3.22-1.49Z" />
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

interface PhoneMockupProps {
  accountName: string;
  handle: string;
  caption: string;
  likes: string;
  comments: string;
  shares: string;
  timestamp: string;
  className?: string;
}

export default function PhoneMockup({
  accountName,
  handle,
  caption,
  likes,
  comments,
  shares,
  timestamp,
  className = '',
}: PhoneMockupProps) {
  return (
    <div className={`aspect-[9/19] rounded-[2.2rem] bg-white p-1.5 shadow-[0_30px_60px_rgba(0,0,0,0.35)] md:rounded-[2.6rem] md:p-2 ${className}`}>
      <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-[#101012] md:rounded-[2rem]">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(90% 65% at 30% 78%, rgba(236,97,44,0.85) 0%, rgba(236,97,44,0) 60%), radial-gradient(80% 60% at 78% 30%, rgba(137,207,240,0.5) 0%, rgba(137,207,240,0) 60%), radial-gradient(70% 55% at 72% 85%, rgba(144,238,144,0.45) 0%, rgba(144,238,144,0) 65%), #101012',
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-2/5"
          style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)' }}
        />

        <div className="absolute left-1/2 top-1.5 h-1.5 w-12 -translate-x-1/2 rounded-full bg-black/60 md:top-2 md:h-2 md:w-16" />

        <div className="absolute left-3 right-3 top-5 flex items-start justify-between md:left-4 md:right-4 md:top-7">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EC612C] text-[0.55rem] font-black text-white ring-2 ring-white/80 md:h-9 md:w-9 md:text-[0.7rem]">
              {accountName.slice(0, 2).toUpperCase()}
            </div>
            <div className="leading-tight">
              <p className="text-[0.6rem] font-bold text-white md:text-xs">{accountName}</p>
              <p className="text-[0.5rem] text-white/60 md:text-[0.65rem]">{handle}</p>
            </div>
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/50 md:h-8 md:w-8">
            <TikTokGlyph className="h-3 w-3 text-white md:h-4 md:w-4" />
          </div>
        </div>

        <p className="absolute left-3 right-12 top-[54%] text-[0.72rem] font-bold leading-snug text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] md:left-4 md:right-14 md:text-sm">
          {caption}
        </p>

        <div className="absolute bottom-14 right-2.5 flex flex-col items-center gap-2.5 md:bottom-16 md:right-3 md:gap-3">
          <div className="flex flex-col items-center gap-0.5">
            <span style={{ color: '#ff5c8a' }}>
              <HeartGlyph className="h-4 w-4 md:h-5 md:w-5" />
            </span>
            <span className="text-[0.5rem] font-semibold text-white md:text-[0.6rem]">{likes}</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <CommentGlyph className="h-4 w-4 text-white md:h-5 md:w-5" />
            <span className="text-[0.5rem] font-semibold text-white md:text-[0.6rem]">{comments}</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <ShareGlyph className="h-4 w-4 text-white md:h-5 md:w-5" />
            <span className="text-[0.5rem] font-semibold text-white md:text-[0.6rem]">{shares}</span>
          </div>
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 md:bottom-4 md:left-4 md:right-4">
          <span className="text-[0.55rem] font-semibold tabular-nums text-white/90 md:text-[0.7rem]">
            {timestamp}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 text-[0.5rem] font-medium text-white md:text-[0.6rem]">
            <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-current md:h-3 md:w-3" aria-hidden="true">
              <path d="M4 9v6h4l5 4V5L8 9H4Zm14.5 3 2-2-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2Z" />
            </svg>
            Tap for sound
          </span>
        </div>
      </div>
    </div>
  );
}

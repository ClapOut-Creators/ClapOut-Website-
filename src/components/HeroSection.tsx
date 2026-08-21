import { useEffect, useRef, useState } from 'react';
import HeroPhones from './HeroPhones';

const LEFT_WORDS = ['create', 'clip', 'post', 'share'];
const RIGHT_WORDS = ['reach', 'verify', 'earn', 'repeat'];

// Rendered back -> front: baby blue, orange gap (same as bg), green, white.
const TITLE_LAYERS = [
  { color: '#89CFF0', offset: 36 },
  { color: '#EC612C', offset: 24 },
  { color: '#90EE90', offset: 12 },
  { color: '#FFFFFF', offset: 0 },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < 768
  );

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 768);
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const range = el.offsetHeight - window.innerHeight;
      if (range <= 0) return;
      setProgress(Math.min(1, Math.max(0, -rect.top / range)));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scaleFactor = isMobile ? 0.5 : 1;
  const layerScale = isMobile ? 0.5 : 1;
  const wordOpacity = 0.35 + progress * 0.65;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: '120vh', backgroundColor: '#EC612C' }}
    >
      {/* Sticky typography overlay */}
      <div className="sticky top-0 z-[5] h-screen w-full">
        <div className="absolute inset-0 flex items-start justify-center pt-[11vh] md:pt-[12vh]">
          <div className="relative">
            {TITLE_LAYERS.map((layer, i) => (
              <h1
                key={layer.color}
                className={`font-bamboly select-none whitespace-nowrap uppercase leading-[0.85] tracking-tight ${
                  i === TITLE_LAYERS.length - 1 ? 'relative' : 'absolute inset-0'
                }`}
                style={{
                  color: layer.color,
                  fontSize: 'clamp(5rem, 27vw, 24rem)',
                  transform: `translateY(${layer.offset * layerScale}px)`,
                }}
              >
                Clapout
              </h1>
            ))}
          </div>
        </div>

        {/* Side word columns */}
        <div
          className="pointer-events-none absolute inset-0 flex items-end justify-between px-[3vw] md:px-[6vw]"
          style={{ bottom: '-8vh' }}
        >
          <div className="flex flex-col gap-1 md:gap-2">
            {LEFT_WORDS.map((word, i) => (
              <span
                key={word}
                className="select-none uppercase text-white/80"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: 'clamp(1.6rem, 7vw, 9rem)',
                  lineHeight: 1.1,
                  opacity: wordOpacity,
                  transform: `translateX(${-(60 + i * 40) * scaleFactor * (1 - progress)}px)`,
                  transition: 'transform 0.05s linear',
                }}
              >
                {word}
              </span>
            ))}
          </div>
          <div className="flex flex-col items-end gap-1 md:gap-2">
            {RIGHT_WORDS.map((word, i) => (
              <span
                key={word}
                className="select-none text-right uppercase text-white/80"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: 'clamp(1.6rem, 7vw, 9rem)',
                  lineHeight: 1.1,
                  opacity: wordOpacity,
                  transform: `translateX(${(60 + i * 40) * scaleFactor * (1 - progress)}px)`,
                  transition: 'transform 0.05s linear',
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Floating clip phones in front of the title */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[4vh] z-10 flex justify-center md:bottom-[5vh]">
          <HeroPhones progress={progress} />
        </div>
      </div>
    </section>
  );
}

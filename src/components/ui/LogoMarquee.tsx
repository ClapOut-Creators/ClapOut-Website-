import type { BrandLogo } from '../../types/content';

interface LogoMarqueeProps {
  logos: BrandLogo[];
  className?: string;
}

export default function LogoMarquee({ logos, className = '' }: LogoMarqueeProps) {
  const track = [...logos, ...logos];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="logo-marquee-track flex w-max items-center gap-14">
        {track.map((brand, i) => (
          <img
            key={`${brand.name}-${i}`}
            src={brand.logo}
            alt={brand.name}
            className="h-7 w-auto shrink-0 object-contain sm:h-8"
            draggable={false}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent sm:w-24 dark:from-dark-bg" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent sm:w-24 dark:from-dark-bg" />
    </div>
  );
}

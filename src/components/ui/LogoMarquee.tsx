import type { BrandLogo } from '../../types/content';

interface LogoMarqueeProps {
  logos: BrandLogo[];
  className?: string;
}

// Consolidates the old ClientsSection/MarqueeSection/TextMarquee trio.
// None of these brand marks are in the repo yet (see data/brands.ts) — each
// renders as a plain wordmark placeholder until the real asset is sourced.
export default function LogoMarquee({ logos, className = '' }: LogoMarqueeProps) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-10 gap-y-4 ${className}`}>
      {logos.map((brand) =>
        brand.logo ? (
          <img key={brand.name} src={brand.logo} alt={brand.name} className="h-6 w-auto opacity-80" />
        ) : (
          <span key={brand.name} className="font-poppins text-lg font-medium text-brand-dark/60">
            {brand.name}
          </span>
        )
      )}
    </div>
  );
}

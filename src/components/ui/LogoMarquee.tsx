import type { BrandLogo } from '../../types/content';

interface LogoMarqueeProps {
  logos: BrandLogo[];
  className?: string;
}

// Consolidates the old ClientsSection/MarqueeSection/TextMarquee trio —
// visual treatment (scroll track, sizing) lands in Phase 2.
export default function LogoMarquee({ logos, className = '' }: LogoMarqueeProps) {
  return (
    <div className={`flex items-center gap-8 ${className}`}>
      {logos.map((brand) => (
        <span key={brand.name} className="font-poppins text-text-body">
          {brand.name}
        </span>
      ))}
    </div>
  );
}

import type { ReactNode } from 'react';

interface PhoneMockupProps {
  children?: ReactNode;
  className?: string;
}

// Static shell — the TikTok-style clip UI content is wired up in Phase 2.
export default function PhoneMockup({ children, className = '' }: PhoneMockupProps) {
  return (
    <div
      className={`aspect-[9/19.5] w-full max-w-[280px] rounded-[36px] border border-border-hairline bg-white ${className}`}
    >
      {children}
    </div>
  );
}

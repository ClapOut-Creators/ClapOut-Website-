import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-[28px] px-[30px] py-2 text-sm ${className}`}>
      {children}
    </span>
  );
}

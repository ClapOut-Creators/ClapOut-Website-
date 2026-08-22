import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return <div className={`rounded-2xl border border-border-hairline ${className}`}>{children}</div>;
}

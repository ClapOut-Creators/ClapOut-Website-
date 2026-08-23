import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

interface CardOwnProps {
  children: ReactNode;
  className?: string;
}

type CardAsDiv = CardOwnProps & HTMLAttributes<HTMLDivElement> & { href?: undefined };
type CardAsAnchor = CardOwnProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type CardProps = CardAsDiv | CardAsAnchor;

export default function Card({ children, className = '', href, ...props }: CardProps) {
  const classes = `rounded-2xl border border-border-hairline dark:border-dark-border ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <div className={classes} {...(props as HTMLAttributes<HTMLDivElement>)}>
      {children}
    </div>
  );
}

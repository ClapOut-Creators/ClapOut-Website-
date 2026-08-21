import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'dark' | 'orange' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  dark: 'bg-brand-dark text-white border border-border-button',
  orange: 'bg-brand-orange text-white border border-border-button',
  outline: 'bg-transparent text-brand-dark border border-border-button',
};

export default function Button({ variant = 'dark', className = '', children, ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-pill px-8 py-3 font-poppins font-medium ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

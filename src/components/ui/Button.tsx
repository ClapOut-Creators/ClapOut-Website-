import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'dark' | 'orange' | 'outline' | 'gray';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  dark: 'bg-brand-dark text-white border border-border-button hover:bg-[#2b2b2b] active:bg-black',
  orange: 'bg-brand-orange text-white border border-border-button hover:bg-[#d4551f] active:bg-[#bf4c1c]',
  outline: 'bg-transparent text-brand-dark border border-border-button hover:bg-black/5 active:bg-black/10',
  gray: 'bg-[#9D9D9D] text-white border border-border-button hover:bg-[#898989] active:bg-[#767676]',
};

export default function Button({ variant = 'dark', className = '', children, ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-pill px-8 py-3 font-poppins font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

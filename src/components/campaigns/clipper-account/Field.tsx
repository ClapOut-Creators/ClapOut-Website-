import type { ReactNode } from 'react';

export const INPUT_CLASS =
  'w-full rounded-xl border border-border-hairline bg-white px-4 py-2.5 font-sfpro text-sm text-black/80 placeholder:text-text-body/60 focus:border-brand-orange focus:outline-none dark:border-dark-border dark:bg-dark-bg dark:text-white dark:placeholder:text-dark-body/60';

interface FieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}

export default function Field({ label, required, error, children }: FieldProps) {
  return (
    <label className="block">
      <span className="font-poppins text-sm font-medium text-black/80 dark:text-white">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block font-sfpro text-xs text-red-500">{error}</span>}
    </label>
  );
}

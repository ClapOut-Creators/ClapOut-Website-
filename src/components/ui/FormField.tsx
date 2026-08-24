import type { ReactNode } from 'react';

export const INPUT_CLASS =
  'w-full rounded-xl border border-border-hairline bg-white px-4 py-2.5 font-sfpro text-sm text-black/80 placeholder:text-text-body/60 focus:border-brand-orange focus:outline-none dark:border-dark-border dark:bg-dark-bg dark:text-white dark:placeholder:text-dark-body/60';

interface FormFieldProps {
  label?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}

export default function FormField({ label, required, error, hint, children }: FormFieldProps) {
  return (
    <label className="block">
      {label && (
        <span className="font-poppins text-sm font-medium text-black/80 dark:text-white">
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      )}
      <div className={label ? 'mt-1.5' : undefined}>{children}</div>
      {hint && !error && (
        <span className="mt-1 block font-sfpro text-xs text-text-body dark:text-dark-body">{hint}</span>
      )}
      {error && <span className="mt-1 block font-sfpro text-xs text-red-500">{error}</span>}
    </label>
  );
}

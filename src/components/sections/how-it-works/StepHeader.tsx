import type { LucideIcon } from "lucide-react";

interface StepHeaderProps {
  icon: LucideIcon;
  number: number;
  eyebrow: string;
  heading: string;
  body: string;
}

export default function StepHeader({
  icon: Icon,
  number,
  eyebrow,
  heading,
  body,
}: StepHeaderProps) {
  return (
    <div className="md:flex md:gap-6">
      <div className="relative z-10 mb-4 hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-hairline bg-white text-brand-dark md:flex dark:border-dark-border dark:bg-dark-surface dark:text-white">
        <Icon size={18} />
      </div>
      <div className="flex-1">
        <span className="inline-flex items-center rounded-full bg-black/5 px-4 py-1.5 text-sm text-brand-dark dark:bg-white/10 dark:text-white">
          <span className="md:hidden">0.{number}&nbsp;</span>
          {eyebrow}
        </span>
        <h3 className="mt-4 font-poppins text-2xl font-semibold text-black/80 md:text-3xl dark:text-white">
          {heading}
        </h3>
        <p className="mt-3 max-w-xl font-sfpro text-brand-greyDark dark:text-dark-body">{body}</p>
      </div>
    </div>
  );
}

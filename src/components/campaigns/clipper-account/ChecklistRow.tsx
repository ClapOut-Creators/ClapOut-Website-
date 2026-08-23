import { Check } from 'lucide-react';

export default function ChecklistRow({ text }: { text: string }) {
  return (
    <p className="flex items-start gap-2 py-1 font-sfpro text-sm text-black/80 dark:text-white">
      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1F7A1F]">
        <Check size={10} className="text-white" strokeWidth={3.5} />
      </span>
      {text}
    </p>
  );
}

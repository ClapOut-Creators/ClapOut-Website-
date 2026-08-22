import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  question: string;
  answer: string;
  className?: string;
}

export default function Accordion({ question, answer, className = '' }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b border-border-hairline ${className}`}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left font-poppins text-lg text-black/80 md:text-xl"
      >
        <span>{question}</span>
        <ChevronDown
          className={`shrink-0 text-black/60 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <p className="min-h-0 font-sfpro text-text-body">{answer}</p>
      </div>
    </div>
  );
}

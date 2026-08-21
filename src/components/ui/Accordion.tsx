import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

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
        className="flex w-full items-center justify-between py-4 text-left font-poppins"
      >
        <span>{question}</span>
        <ChevronRight className={`transition-transform ${open ? 'rotate-90' : ''}`} size={18} />
      </button>
      {open && <p className="pb-4 font-sfpro text-text-body">{answer}</p>}
    </div>
  );
}

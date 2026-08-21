import { Banknote, FileText } from 'lucide-react';
import StepHeader from './StepHeader';
import { payouts } from '../../../data/payouts';
import { steps } from '../../../data/steps';

const STATUS_STYLES: Record<string, string> = {
  Paid: 'bg-[#90EE90]/40 text-[#1a7a1a]',
  Pending: 'bg-[#FFC857]/30 text-[#8a6200]',
};

export default function CashOutStep() {
  const step = steps[3];

  return (
    <div>
      <StepHeader
        icon={Banknote}
        number={step.number}
        eyebrow={step.eyebrow}
        heading={step.heading}
        body={step.body}
      />
      <div className="mt-8 overflow-hidden rounded-2xl border border-border-hairline md:ml-16">
        <div className="bg-black/[0.03] px-5 py-3 text-xs uppercase tracking-wide text-text-body">Cycle</div>
        {payouts.map((row) => (
          <div
            key={row.cycle}
            className="flex items-center justify-between border-t border-border-hairline bg-black/[0.03] px-5 py-4"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-black/10 text-brand-dark">
                <FileText size={14} />
              </span>
              <span className="font-poppins font-semibold text-black/80">{row.cycle.split(' · ')[0]}</span>
              <span className="text-text-body">{row.cycle.split(' · ')[1]}</span>
            </span>
            <span className="flex items-center gap-6">
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${STATUS_STYLES[row.status] ?? ''}`}>
                {row.status}
              </span>
              <span className="font-semibold text-black/80">$ {row.amount.replace('$', '')}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

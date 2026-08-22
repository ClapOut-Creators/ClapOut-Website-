import { Wallet, Check } from 'lucide-react';
import StepHeader from './StepHeader';
import { payoutMethods } from '../../../data/payoutMethods';
import { steps } from '../../../data/steps';

export default function SetupStep() {
  const step = steps[1];

  return (
    <div>
      <StepHeader icon={Wallet} number={step.number} eyebrow={step.eyebrow} heading={step.heading} body={step.body} />
      <div className="mt-8 md:pl-16">
        <div className="rounded-2xl bg-black/[0.03] p-5">
          <p className="text-sm text-text-body">Payment method</p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {payoutMethods.map((method, i) => (
              <div
                key={method.id}
                className={`rounded-2xl border bg-white p-4 ${
                  i === 0 ? 'border-brand-orange' : 'border-border-hairline'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-poppins font-medium text-black/80">
                    {method.logo && (
                      <span className="flex h-6 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md">
                        <img src={method.logo} alt="" className="h-full w-full object-cover" />
                      </span>
                    )}
                    {method.label}
                  </span>
                  {i === 0 && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange text-white">
                      <Check size={12} />
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-text-body">{method.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

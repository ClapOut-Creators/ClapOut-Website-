import { Banknote, FileText } from "lucide-react";
import StepHeader from "./StepHeader";
import { payouts } from "../../../data/payouts";
import { steps } from "../../../data/steps";

// Text colors are darkened from the raw brand hues (#90EE90 green /
// #FFC857 amber) so they pass WCAG AA (4.5:1) against their own tinted
// pill backgrounds — the lighter values read as near-invisible.
const STATUS_STYLES: Record<string, string> = {
  Paid: "border border-[#90EE90] bg-[#90EE90]/20 text-[#1F7A1F]",
  Pending: "border border-[#FFC857] bg-[#FFC857]/20 text-[#8A5A00]",
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
        <div className="flex items-center justify-between bg-black/[0.03] px-5 py-3 text-xs uppercase tracking-wide text-text-body">
          <span>Cycle</span>
          <span className="flex items-center gap-6">
            <span className="w-16">Status</span>
            <span>Amount</span>
          </span>
        </div>
        {payouts.map((row) => (
          <div
            key={row.cycle}
            className="flex items-center justify-between border-t border-border-hairline bg-black/[0.03] px-5 py-4"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-black/10 text-brand-dark">
                <FileText size={14} />
              </span>
              <span className="font-sfpro font-normal text-black/80">
                {row.cycle.split(" · ")[0]}
              </span>
              <span className="text-text-body">
                {row.cycle.split(" · ")[1]}
              </span>
            </span>
            <span className="flex items-center gap-6">
              <span
                className={`w-16 rounded-full px-3 py-1 text-center text-xs font-light ${STATUS_STYLES[row.status] ?? ""}`}
              >
                {row.status}
              </span>
              <span className="text-black/80">
                <span className="font-light">$</span>{" "}
                <span className="font-light">
                  {row.amount.replace("$", "")}
                </span>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

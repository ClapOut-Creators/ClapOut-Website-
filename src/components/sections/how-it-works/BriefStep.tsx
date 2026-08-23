import { SlidersHorizontal, CheckCircle2 } from "lucide-react";
import StepHeader from "./StepHeader";
import { brandSteps, briefChecklist } from "../../../data/brandCampaign";

export default function BriefStep() {
  const step = brandSteps[0];

  return (
    <div>
      <StepHeader
        icon={SlidersHorizontal}
        number={step.number}
        eyebrow={step.eyebrow}
        heading={step.heading}
        body={step.body}
      />
      <div className="mt-8 md:pl-16">
        <div className="rounded-2xl bg-black/[0.03] p-5 dark:bg-white/5">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2 text-sm text-text-body dark:text-dark-body">
              <SlidersHorizontal size={14} /> What we configure for you
            </p>
            <span className="rounded-full bg-[#90EE90]/30 px-3 py-1 text-xs font-normal tracking-wide text-[#3B8F0E]">
              Managed
            </span>
          </div>
          <div className="mt-4 divide-y divide-border-hairline overflow-hidden rounded-xl bg-white dark:divide-dark-border dark:bg-dark-surface">
            {briefChecklist.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between px-4 py-3"
              >
                <span className="flex items-center gap-2 text-sm text-black/80 dark:text-white">
                  <CheckCircle2
                    size={24}
                    className="shrink-0 fill-green-500 text-white"
                  />
                  {item.label}
                </span>
                <span className="text-right text-sm text-text-body dark:text-dark-body">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

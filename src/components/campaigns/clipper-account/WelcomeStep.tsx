import { Check } from "lucide-react";
import ChecklistRow from "./ChecklistRow";
import { CREATORS_WHATSAPP_URL } from "../../../data/links";

export default function WelcomeStep() {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#2fae5c]">
        <Check size={48} className="text-white" strokeWidth={3} />
      </div>

      <h2 className="mt-5 font-poppins text-xl font-semibold text-black/80 dark:text-white">
        Welcome to the Clapout Community
      </h2>
      <p className="mt-1 font-sfpro text-sm text-text-body dark:text-dark-body">
        Your creator has been registered for this campaign
      </p>

      <p className="mt-4 font-poppins text-sm font-medium text-black/80 dark:text-white">
        You&apos;re all set to start creating amazing content for this campaign
        and start earning!
      </p>

      <div className="mt-4 rounded-2xl border border-border-hairline bg-black/[0.03] p-4 text-left dark:border-dark-border dark:bg-white/5">
        <ChecklistRow text="Start creating clips immediately" />
        <ChecklistRow text="Earn money from your content" />
      </div>

      <a
        href={CREATORS_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-pill bg-brand-dark px-8 py-3 font-poppins font-medium text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] dark:bg-[#242424]"
      >
        Join the campaign community
        <img src="/general/whatsapp.png" alt="" className="h-5 w-5" />
      </a>
    </div>
  );
}

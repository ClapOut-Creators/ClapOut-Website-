import { useEffect } from "react";
import { Check, X } from "lucide-react";
import ChecklistRow from "../campaigns/clipper-account/ChecklistRow";
import { CREATORS_WHATSAPP_URL } from "../../data/links";

interface CommunityModalProps {
  onClose: () => void;
}

export default function CommunityModal({ onClose }: CommunityModalProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto p-4 py-10 sm:items-center">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Join the Clapout WhatsApp community"
        className="relative w-full max-w-md rounded-3xl bg-white p-6 text-center shadow-2xl dark:bg-dark-surface sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-brand-dark transition-colors hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
        >
          <X size={18} />
        </button>

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#2fae5c]">
          <Check size={48} className="text-white" strokeWidth={3} />
        </div>

        <h2 className="mt-5 font-poppins text-xl font-semibold text-black/80 dark:text-white">
          Join the Clapout Creators Community
        </h2>
        <p className="mt-1 font-sfpro text-sm text-text-body dark:text-dark-body">
          Connect with paid brand campaigns, grow your reach, and earn from
          your content.
        </p>

        <p className="mt-4 font-poppins text-sm font-medium text-black/80 dark:text-white">
          Become a Clapout creator and start earning from the content you
          post.
        </p>

        <div className="mt-4 rounded-2xl border border-border-hairline bg-black/[0.03] p-4 text-left dark:border-dark-border dark:bg-white/5">
          <ChecklistRow text="Start creating clips immediately" />
          <ChecklistRow text="Earn money from your content" />
        </div>

        <a
          href={CREATORS_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-squircle bg-gradient-to-b from-[#0C0C0C] to-[#3F3F3F] px-8 py-3 font-poppins font-medium text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]"
        >
          Join the Community
          <img src="/general/whatsapp.png" alt="" className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

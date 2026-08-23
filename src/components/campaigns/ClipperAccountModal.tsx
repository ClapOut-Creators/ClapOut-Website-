import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import ProfileStep, { type ProfileValue } from './clipper-account/ProfileStep';
import SocialsStep from './clipper-account/SocialsStep';
import PaymentStep, { type PaymentValue } from './clipper-account/PaymentStep';
import WelcomeStep from './clipper-account/WelcomeStep';

interface ClipperAccountModalProps {
  onClose: () => void;
}

const EMPTY_PROFILE: ProfileValue = { fullName: '', email: '', whatsappUsername: '', phoneNumber: '' };
const EMPTY_PAYMENT: PaymentValue = { network: '', accountNumber: '', accountName: '' };

// Mounted/unmounted by the parent (CampaignDetailPage) rather than hidden
// via a prop, so every open starts fresh at step 1 with empty fields — no
// explicit reset logic needed here.
export default function ClipperAccountModal({ onClose }: ClipperAccountModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [profile, setProfile] = useState<ProfileValue>(EMPTY_PROFILE);
  const [socialLinks, setSocialLinks] = useState<string[]>([]);
  const [payment, setPayment] = useState<PaymentValue>(EMPTY_PAYMENT);

  // Closing is deliberately only wired to the explicit close button — no
  // outside-click or Escape shortcut — so a form full of entered data can't
  // be dismissed by accident.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto p-4 py-10 sm:items-center">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Register for this campaign"
        className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl dark:bg-dark-surface sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-brand-dark transition-colors hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
        >
          <X size={18} />
        </button>

        {step !== 4 && (
          <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange">
            <img src="/clap.png" alt="" className="h-6 w-6" />
          </div>
        )}

        {step === 1 && <ProfileStep value={profile} onChange={setProfile} onNext={() => setStep(2)} />}
        {step === 2 && (
          <SocialsStep
            links={socialLinks}
            onChange={setSocialLinks}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <PaymentStep
            value={payment}
            onChange={setPayment}
            onBack={() => setStep(2)}
            onComplete={() => setStep(4)}
          />
        )}
        {step === 4 && <WelcomeStep />}
      </div>
    </div>
  );
}

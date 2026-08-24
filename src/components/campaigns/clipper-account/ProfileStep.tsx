import { ArrowRight } from 'lucide-react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import FormField, { INPUT_CLASS } from '../../ui/FormField';

export interface ProfileValue {
  fullName: string;
  email: string;
  whatsappUsername: string;
  phoneNumber: string;
}

interface ProfileStepProps {
  value: ProfileValue;
  onChange: (value: ProfileValue) => void;
  onNext: () => void;
}

export default function ProfileStep({ value, onChange, onNext }: ProfileStepProps) {
  const phoneValid = Boolean(value.phoneNumber) && isValidPhoneNumber(value.phoneNumber);
  const isValid =
    value.fullName.trim() && value.email.trim() && value.whatsappUsername.trim() && phoneValid;

  const set = (key: keyof ProfileValue) => (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange({ ...value, [key]: e.target.value });

  return (
    <div>
      <h2 className="text-center font-poppins text-xl font-semibold text-black/80 dark:text-white">
        Set up your profile
      </h2>
      <p className="mt-1 text-center font-sfpro text-sm text-text-body dark:text-dark-body">
        Tell us about yourself so we can know you well.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <FormField label="Full name" required>
          <input
            type="text"
            placeholder="Your name"
            value={value.fullName}
            onChange={set('fullName')}
            className={INPUT_CLASS}
          />
        </FormField>
        <FormField label="Email" required>
          <input
            type="email"
            placeholder="you@email.com"
            value={value.email}
            onChange={set('email')}
            className={INPUT_CLASS}
          />
        </FormField>
        <FormField label="WhatsApp Username" required>
          <input
            type="text"
            placeholder="@loverboy_12"
            value={value.whatsappUsername}
            onChange={set('whatsappUsername')}
            className={INPUT_CLASS}
          />
        </FormField>
        <FormField
          label="Phone number"
          required
          error={value.phoneNumber && !phoneValid ? 'Enter a valid phone number' : undefined}
        >
          <PhoneInput
            international
            defaultCountry="GH"
            placeholder="Enter phone number"
            value={value.phoneNumber}
            onChange={(phoneNumber) => onChange({ ...value, phoneNumber: phoneNumber ?? '' })}
          />
        </FormField>
      </div>

      <button
        type="button"
        disabled={!isValid}
        onClick={onNext}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-squircle bg-gradient-to-b from-[#0C0C0C] to-[#3F3F3F] px-8 py-3 font-poppins font-medium text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
      >
        Continue <ArrowRight size={16} />
      </button>
    </div>
  );
}

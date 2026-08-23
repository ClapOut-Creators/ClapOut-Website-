import { useState } from 'react';
import { Plus } from 'lucide-react';
import Field, { INPUT_CLASS } from './Field';
import ChecklistRow from './ChecklistRow';
import TermsNote from './TermsNote';
import { payoutMethods } from '../../../data/payoutMethods';

export interface PaymentValue {
  network: string;
  accountNumber: string;
  accountName: string;
}

interface PaymentStepProps {
  value: PaymentValue;
  onChange: (value: PaymentValue) => void;
  onBack: () => void;
  onComplete: () => void;
}

// Ghana mobile money network prefixes — only applies to the telecom
// networks; "Bank" account numbers aren't phone numbers, so no prefix
// check applies there.
const NETWORK_PREFIXES: Record<string, string[]> = {
  MTN: ['024', '025', '053', '054', '055', '059'],
  Telecel: ['020', '050'],
  AT: ['026', '027', '056', '057'],
};

function normalizeNumber(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.startsWith('233')) return `0${digits.slice(3)}`;
  if (digits.length === 9) return `0${digits}`;
  return digits;
}

function networkNumberError(network: string, accountNumber: string): string | undefined {
  const prefixes = NETWORK_PREFIXES[network];
  if (!prefixes || !accountNumber.trim()) return undefined;
  const normalized = normalizeNumber(accountNumber);
  const prefix = normalized.slice(0, 3);
  if (!prefixes.includes(prefix)) {
    return `That doesn't look like an ${network} number`;
  }
  return undefined;
}

export default function PaymentStep({ value, onChange, onBack, onComplete }: PaymentStepProps) {
  const [showFields, setShowFields] = useState(
    Boolean(value.network || value.accountNumber || value.accountName),
  );

  const numberError = networkNumberError(value.network, value.accountNumber);
  const isValid = Boolean(
    value.network.trim() && value.accountNumber.trim() && value.accountName.trim() && !numberError,
  );

  return (
    <div>
      <h2 className="text-center font-poppins text-xl font-semibold text-black/80 dark:text-white">
        Payment preferences
      </h2>
      <p className="mt-1 text-center font-sfpro text-sm text-text-body dark:text-dark-body">
        Add how you&apos;d like to receive payment for your clips
      </p>

      <div className="mt-6 rounded-2xl border border-border-hairline bg-black/[0.03] p-4 dark:border-dark-border dark:bg-white/5">
        <ChecklistRow text="Add your payment methods to receive earnings" />
        <ChecklistRow text="Your payment method info will be secured" />
        <ChecklistRow text="This time is important - please check details well." />
      </div>

      <p className="mt-5 font-poppins text-sm font-medium text-black/80 dark:text-white">
        Add payment method <span className="text-red-500">*</span>
      </p>

      <div className="mt-2">
        {showFields ? (
          <div className="flex flex-col gap-4">
            <Field label="Network">
              <select
                value={value.network}
                onChange={(e) => onChange({ ...value, network: e.target.value })}
                className={INPUT_CLASS}
              >
                <option value="">Select network</option>
                {payoutMethods.map((method) => (
                  <option key={method.id} value={method.label}>
                    {method.label}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Account number" error={numberError}>
              <input
                type="text"
                placeholder="Account no."
                value={value.accountNumber}
                onChange={(e) => onChange({ ...value, accountNumber: e.target.value })}
                className={INPUT_CLASS}
              />
            </Field>
            <Field label="Account name">
              <input
                type="text"
                placeholder="Name on the account"
                value={value.accountName}
                onChange={(e) => onChange({ ...value, accountName: e.target.value })}
                className={INPUT_CLASS}
              />
            </Field>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShowFields(true)}
            className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-dashed border-border-button py-2.5 font-poppins text-sm text-brand-dark transition-colors hover:bg-black/5 dark:border-dark-border dark:text-white dark:hover:bg-white/5"
          >
            <Plus size={14} /> Add payment method
          </button>
        )}
      </div>

      <TermsNote />

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 rounded-pill border border-border-button px-6 py-3 font-poppins font-medium text-brand-dark transition-colors hover:bg-black/5 dark:border-dark-border dark:text-white dark:hover:bg-white/10"
        >
          Back
        </button>
        <button
          type="button"
          disabled={!isValid}
          onClick={onComplete}
          className="flex-1 rounded-pill bg-brand-dark px-6 py-3 font-poppins font-medium text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 dark:bg-[#242424]"
        >
          Complete
        </button>
      </div>
    </div>
  );
}

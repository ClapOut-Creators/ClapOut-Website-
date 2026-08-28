import { useState } from "react";
import { Check } from "lucide-react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import FormField, { INPUT_CLASS } from "../ui/FormField";

interface PartnershipFormValue {
  name: string;
  email: string;
  company: string;
  phoneNumber: string;
  promoting: string;
  link: string;
  contentType: string;
  timeline: string;
  budget: string;
  notes: string;
}

const EMPTY_FORM: PartnershipFormValue = {
  name: "",
  email: "",
  company: "",
  phoneNumber: "",
  promoting: "",
  link: "",
  contentType: "",
  timeline: "",
  budget: "",
  notes: "",
};

// Placeholder option sets — doc/Clapout.pdf only shows placeholder text
// ("Select Type" / "Select timeline" / "Select budget range") for these
// three selects, never the real option lists. Confirmed with the user
// during Phase 14 planning to ship reasonable placeholders rather than
// block on it; swap for real values once supplied.
const CONTENT_TYPE_OPTIONS = [
  "TikTok",
  "Instagram Reels",
  "YouTube Shorts",
  "Mixed",
];
const TIMELINE_OPTIONS = [
  "ASAP",
  "Within 2 weeks",
  "Within a month",
  "Flexible",
];
const BUDGET_OPTIONS = [
  "GH₵2,000 – 5,000",
  "GH₵5,000 – 10,000",
  "GH₵10,000+",
];

type FormEl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

// Web3Forms access key — public by design (it only encodes the destination
// inbox, clapoutcreators@gmail.com, without revealing it).
const WEB3FORMS_ACCESS_KEY = "083d1c73-4eb5-47a6-9238-7c38942ea6c3";

export default function PartnershipPanel() {
  const [value, setValue] = useState<PartnershipFormValue>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set =
    (key: keyof PartnershipFormValue) => (e: React.ChangeEvent<FormEl>) =>
      setValue((prev) => ({ ...prev, [key]: e.target.value }));

  const phoneValid =
    Boolean(value.phoneNumber) && isValidPhoneNumber(value.phoneNumber);
  const isValid = Boolean(
    value.name.trim() &&
    value.email.trim() &&
    phoneValid &&
    value.promoting.trim() &&
    value.link.trim() &&
    value.contentType &&
    value.timeline &&
    value.budget,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || sending) return;
    setSending(true);
    setError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New partnership inquiry — ${value.company.trim() || value.name.trim()}`,
          from_name: "Clapout Website",
          botcheck: false,
          // Field names double as the labels in the delivered email.
          "Name": value.name,
          "Email": value.email,
          "Company": value.company || "—",
          "Phone number": value.phoneNumber,
          "What they're promoting": value.promoting,
          "Link": value.link,
          "Content to clip": value.contentType,
          "Timeline": value.timeline,
          "Budget": value.budget,
          "Notes": value.notes || "—",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Submission failed");
      }
      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong sending your request. Please try again, or email us directly at clapoutcreators@gmail.com.",
      );
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-6 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2fae5c]">
          <Check size={28} className="text-white" strokeWidth={3} />
        </div>
        <h3 className="mt-4 font-poppins text-lg font-semibold text-black/80 dark:text-white">
          Thanks — we&apos;ll be in touch
        </h3>
        <p className="mt-2 font-sfpro text-sm text-text-body dark:text-dark-body">
          We&apos;ve received your partnership inquiry and will reach out
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="font-poppins text-lg font-semibold text-black/80 dark:text-white">
        Partnership Inquiry
      </h3>
      <p className="mt-2 font-sfpro text-sm text-text-body dark:text-dark-body">
        Interested in partnering with us? Tell us what you&apos;re promoting and
        share a link so we can respond faster. Minimum budget required: GHS
        2,000.
      </p>

      <div className="mt-5 flex items-center gap-3">
        <p className="shrink-0 font-sfpro text-xs font-light uppercase tracking-wide text-[#797979] dark:text-dark-body">
          Your details
        </p>
        <span
          className="h-px flex-1 bg-border-hairline dark:bg-dark-border"
          aria-hidden="true"
        />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField label="Name" required>
          <input
            type="text"
            placeholder="Your name"
            value={value.name}
            onChange={set("name")}
            className={INPUT_CLASS}
          />
        </FormField>
        <FormField label="Email" required>
          <input
            type="email"
            placeholder="you@email.com"
            value={value.email}
            onChange={set("email")}
            className={INPUT_CLASS}
          />
        </FormField>
        <FormField label="Company">
          <input
            type="text"
            placeholder="Your company name"
            value={value.company}
            onChange={set("company")}
            className={INPUT_CLASS}
          />
        </FormField>
        <FormField
          label="Phone number"
          required
          error={
            value.phoneNumber && !phoneValid
              ? "Enter a valid phone number"
              : undefined
          }
        >
          <PhoneInput
            international
            defaultCountry="GH"
            placeholder="Enter phone number"
            value={value.phoneNumber}
            onChange={(phoneNumber) =>
              setValue((prev) => ({ ...prev, phoneNumber: phoneNumber ?? "" }))
            }
          />
        </FormField>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <p className="shrink-0 font-sfpro text-xs font-light uppercase tracking-wide text-[#797979] dark:text-dark-body">
          What you&apos;re looking for
        </p>
        <span
          className="h-px flex-1 bg-border-hairline dark:bg-dark-border"
          aria-hidden="true"
        />
      </div>
      <div className="mt-5 flex flex-col gap-4">
        <FormField label="What are you promoting" required>
          <input
            type="text"
            placeholder="e.g our app, a podcast, a music artist, a song, product"
            value={value.promoting}
            onChange={set("promoting")}
            className={INPUT_CLASS}
          />
        </FormField>
        <FormField
          label="Link (website, socials, or app)"
          required
          hint="A link helps us understand your brand and respond faster."
        >
          <input
            type="text"
            placeholder="http://yoursite.com, @yourhandle, App store link..."
            value={value.link}
            onChange={set("link")}
            className={INPUT_CLASS}
          />
        </FormField>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <FormField label="Content to clip" required>
            <select
              value={value.contentType}
              onChange={set("contentType")}
              className={INPUT_CLASS}
            >
              <option value="">Select type</option>
              {CONTENT_TYPE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </FormField>
          <FormField label="Timeline" required>
            <select
              value={value.timeline}
              onChange={set("timeline")}
              className={INPUT_CLASS}
            >
              <option value="">Select timeline</option>
              {TIMELINE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </FormField>
          <FormField label="Budget" required hint="GHS 2,000 minimum">
            <select
              value={value.budget}
              onChange={set("budget")}
              className={INPUT_CLASS}
            >
              <option value="">Select budget range</option>
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        <FormField label="Anything else?">
          <textarea
            rows={3}
            placeholder="Optional: any extra context on your goals, past clipping or questions"
            value={value.notes}
            onChange={set("notes")}
            className={INPUT_CLASS}
          />
        </FormField>
      </div>

      {error && (
        <p className="mt-4 rounded-xl bg-red-500/10 px-4 py-3 font-sfpro text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!isValid || sending}
        className="mt-6 w-full rounded-squircle bg-brand-orange px-8 py-3 font-poppins font-medium text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
      >
        {sending ? "Sending…" : "Send Partnership Request"}
      </button>
    </form>
  );
}

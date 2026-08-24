import { ArrowRight, Plus, X } from 'lucide-react';
import FormField, { INPUT_CLASS } from '../../ui/FormField';
import ChecklistRow from './ChecklistRow';
import TermsNote from './TermsNote';

interface SocialsStepProps {
  links: string[];
  onChange: (links: string[]) => void;
  onBack: () => void;
  onNext: () => void;
}

// "Social Link" is deliberately narrower than "any well-formed URL" — it
// only accepts links that actually point at a known social platform, so an
// incomplete/typo'd entry like "http://www.insta" (valid URL syntax, not a
// real destination) gets caught instead of silently accepted.
const SOCIAL_DOMAINS = [
  'instagram.com',
  'tiktok.com',
  'youtube.com',
  'youtu.be',
  'facebook.com',
  'fb.com',
  'twitter.com',
  'x.com',
  'threads.net',
  'snapchat.com',
];

function isValidSocialLink(value: string): boolean {
  try {
    const url = new URL(value.trim());
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;
    const host = url.hostname.toLowerCase().replace(/^www\./, '');
    return SOCIAL_DOMAINS.some((domain) => host === domain || host.endsWith(`.${domain}`));
  } catch {
    return false;
  }
}

export default function SocialsStep({ links, onChange, onBack, onNext }: SocialsStepProps) {
  const addLink = () => onChange([...links, '']);
  const updateLink = (index: number, val: string) => onChange(links.map((l, i) => (i === index ? val : l)));
  const removeLink = (index: number) => onChange(links.filter((_, i) => i !== index));

  const lastLinkValid = links.length === 0 || isValidSocialLink(links[links.length - 1]);
  const isValid = links.length > 0 && links.every((l) => isValidSocialLink(l));

  return (
    <div>
      <h2 className="text-center font-poppins text-xl font-semibold text-black/80 dark:text-white">
        Connect your socials
      </h2>
      <p className="mt-1 text-center font-sfpro text-sm text-text-body dark:text-dark-body">
        Share your social media profile to start tracking your content and earning
      </p>

      <div className="mt-6 rounded-2xl border border-border-hairline bg-black/[0.03] p-4 dark:border-dark-border dark:bg-white/5">
        <ChecklistRow text="Share your account to start earning" />
        <ChecklistRow text="Your social account credentials will not be taken" />
        <ChecklistRow text="Get paid for your amazing clips" />
      </div>

      <p className="mt-5 font-poppins text-sm font-medium text-black/80 dark:text-white">
        Add Social links <span className="text-red-500">*</span>
      </p>

      <div className="mt-2 flex flex-col gap-3">
        {links.map((link, i) => {
          const valid = isValidSocialLink(link);
          return (
            <FormField
              key={i}
              error={link.trim() && !valid ? 'Enter a full link to a supported platform (Instagram, TikTok, YouTube, Facebook, X, Threads, Snapchat)' : undefined}
            >
              <div className="flex items-center gap-2">
                <input
                  type="url"
                  placeholder="https://www.instagram.com/yourhandle/"
                  value={link}
                  onChange={(e) => updateLink(i, e.target.value)}
                  className={INPUT_CLASS}
                />
                <button
                  type="button"
                  onClick={() => removeLink(i)}
                  aria-label="Remove social link"
                  className="shrink-0 rounded-full p-1.5 text-text-body transition-colors hover:bg-black/5 hover:text-brand-dark dark:text-dark-body dark:hover:bg-white/10 dark:hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
            </FormField>
          );
        })}

        <button
          type="button"
          onClick={addLink}
          disabled={!lastLinkValid}
          title={!lastLinkValid ? 'Enter a valid social link before adding another' : undefined}
          className="flex items-center justify-center gap-1.5 rounded-squircle border border-dashed border-border-button py-2.5 font-poppins text-sm text-brand-dark transition-colors hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent dark:border-dark-border dark:text-white dark:hover:bg-white/5"
        >
          <Plus size={14} /> Add social profile link
        </button>
      </div>

      <TermsNote />

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 rounded-squircle border border-border-button px-6 py-3 font-poppins font-medium text-brand-dark transition-colors hover:bg-black/5 dark:border-dark-border dark:text-white dark:hover:bg-white/10"
        >
          Back
        </button>
        <button
          type="button"
          disabled={!isValid}
          onClick={onNext}
          className="flex flex-1 items-center justify-center gap-2 rounded-squircle bg-gradient-to-b from-[#0C0C0C] to-[#3F3F3F] px-6 py-3 font-poppins font-medium text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
        >
          Continue <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

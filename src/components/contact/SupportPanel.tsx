import { CREATORS_WHATSAPP_URL } from "../../data/links";

const SUPPORT_BULLETS = [
  "Real-time technical support",
  "Community troubleshooting help",
  "Direct access to our team",
];

export default function SupportPanel() {
  return (
    <div>
      <h3 className="font-poppins text-lg font-semibold text-black/80 dark:text-white">
        Get Support on WhatsApp
      </h3>
      <p className="mt-2 font-sfpro text-sm text-text-body dark:text-dark-body">
        Need technical assistance? Our support team and community are ready to
        help you resolve any issues quickly.
      </p>

      <ul className="mt-4 flex flex-col gap-2">
        {SUPPORT_BULLETS.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 font-sfpro text-sm text-black/80 dark:text-white"
          >
            <span className="h-1 w-1 shrink-0 rounded-full bg-text-body dark:bg-dark-body" />
            {item}
          </li>
        ))}
      </ul>

      <a
        href={CREATORS_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-squircle bg-brand-orange px-8 py-3 font-poppins font-medium text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]"
      >
        <img src="/general/whatsapp-white.png" alt="" className="h-5 w-5" />
        Join WhatsApp Community
      </a>
      <p className="mt-4 text-center font-sfpro text-xs text-text-body dark:text-dark-body">
        Free to join
      </p>
    </div>
  );
}

const COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'About', href: '#about' },
      { label: 'How it works', href: '#how' },
      { label: 'Campaigns', href: '#campaigns' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Feedback', href: '#feedback' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '#/terms' },
      { label: 'Privacy Policy', href: '#/privacy' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'hello@clapout.co', href: 'mailto:hello@clapout.co' },
      { label: 'Accra · Ghana', href: undefined },
      { label: 'Join Clapout', href: '#join' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#0C0C0C]">
      <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 md:px-10 md:pt-24">
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src="/clapout-logo.png"
              alt="Clapout logo"
              className="h-16 w-auto select-none sm:h-[72px]"
              draggable={false}
            />
            <p className="mt-5 max-w-sm text-[15px] font-light leading-relaxed text-[#D7E2EA]/70">
              A creator distribution platform connecting brands with
              micro&#8209;influencers who make content travel — and get paid
              for verified performance.
            </p>
          </div>

          {COLUMNS.map((column, i) => (
            <div
              key={column.title}
              className={
                i === 0 ? 'md:col-span-3 md:col-start-6' : 'md:col-span-2'
              }
            >
              <h3 className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-[#D7E2EA]/40">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="text-[15px] font-light text-[#D7E2EA]/70 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="text-[15px] font-light text-[#D7E2EA]/70">
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-2 border-t border-white/10 py-6 sm:flex-row md:mt-20">
          <p className="text-xs font-light tracking-widest text-[#D7E2EA]/40">
            © 2026 Clapout. All rights reserved.
          </p>
          <p className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/40">
            Create. Post. Get Paid.
          </p>
        </div>
      </div>

      {/* Giant wordmark bleeding off the bottom edge */}
      <div
        aria-hidden
        className="pointer-events-none flex justify-center overflow-hidden"
      >
        <span
          className="font-bamboly select-none whitespace-nowrap uppercase leading-none"
          style={{
            fontSize: 'clamp(6rem, 26vw, 26rem)',
            color: 'rgba(215, 226, 234, 0.06)',
            marginBottom: '-0.24em',
          }}
        >
          Clapout
        </span>
      </div>
    </footer>
  );
}

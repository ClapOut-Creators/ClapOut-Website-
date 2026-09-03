const COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'About', href: '#about' },
      { label: 'How it works', href: '#how' },
      { label: 'Campaigns', href: '/campaigns' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Feedback', href: '#feedback' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Platform Policies', href: '/policies' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'clapoutcreators@gmail.com', href: 'mailto:clapoutcreators@gmail.com' },
      { label: 'Accra · Ghana', href: undefined },
      { label: 'Join Clapout', href: '#join' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

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
            <p className="mt-5 max-w-sm font-sfpro text-[15px] leading-relaxed text-white/70">
              A creator distribution platform connecting brands with
              micro&#8209;influencers who make content travel — and get paid
              for verified performance.
            </p>
          </div>

          {COLUMNS.map((column, i) => (
            <div key={column.title} className={i === 0 ? 'md:col-span-3 md:col-start-6' : 'md:col-span-2'}>
              <h3 className="mb-6 font-poppins text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="font-sfpro text-[15px] text-white/70 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="font-sfpro text-[15px] text-white/70">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-2 border-t border-white/10 py-6 sm:flex-row md:mt-20">
          <p className="font-sfpro text-xs tracking-widest text-white/40">
            © {year} Clapout. All rights reserved.
          </p>
          <p className="font-sfpro text-xs uppercase tracking-widest text-white/40">Create. Post. Get Paid.</p>
        </div>
      </div>

      {/* Giant wordmark bleeding off the bottom edge */}
      <div aria-hidden className="pointer-events-none flex justify-center overflow-hidden">
        <span
          className="select-none whitespace-nowrap font-poppins font-bold uppercase leading-none text-white/[0.06]"
          style={{
            fontSize: 'clamp(6rem, 26vw, 26rem)',
            marginBottom: '-0.12em',
          }}
        >
          Clapout
        </span>
      </div>
    </footer>
  );
}

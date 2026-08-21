import FadeIn from './FadeIn';

const CLIENTS = [
  {
    name: 'E-Wale Pay',
    href: 'https://www.ewalepay.com/',
    logo: '/clients/ewale.png',
    showName: true,
  },
  {
    name: 'Wishly',
    href: 'https://usewishly.app',
    logo: '/clients/wishly-black.svg',
    showName: false,
  },
  {
    name: 'Tekme',
    href: 'https://www.tekmeagency.com/',
    logo: '/clients/tekme-dark.svg',
    showName: true,
  },
];

export default function ClientsSection() {
  return (
    <section className="bg-white px-5 py-28 sm:px-8 md:px-10 md:py-44">
      <FadeIn y={20}>
        <p className="mb-14 text-center text-sm font-medium uppercase tracking-[0.35em] text-[#0C0C0C]/50 md:mb-24 md:text-base">
          Trusted by teams at
        </p>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-20 gap-y-14 md:gap-x-32">
          {CLIENTS.map((client) => (
            <a
              key={client.name}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              title={client.name}
              className="group inline-flex items-center gap-4 transition-transform duration-300 hover:-translate-y-1 md:gap-5"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className={
                  client.showName
                    ? 'h-14 w-auto md:h-20'
                    : 'h-16 w-auto md:h-24'
                }
                draggable={false}
              />
              {client.showName && (
                <span className="text-3xl font-semibold tracking-wide text-[#0C0C0C] md:text-5xl">
                  {client.name}
                </span>
              )}
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

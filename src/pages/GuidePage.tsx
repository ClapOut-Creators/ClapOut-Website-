import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import { navigate } from '../hooks/useRoute';
import { GUIDES, getGuide } from '../data/guides';
import type { GuideBlock } from '../data/guides';

function Block({ block }: { block: GuideBlock }) {
  if (block.kind === 'p') {
    return <p className="font-sfpro leading-relaxed text-text-body dark:text-dark-body">{block.text}</p>;
  }
  if (block.kind === 'list') {
    return (
      <ul className="flex flex-col gap-2.5 pl-1">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-3 font-sfpro leading-relaxed text-text-body dark:text-dark-body">
            <span className="mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-black/30 dark:bg-white/40" />
            <span>
              {item.lead ? (
                <span className="font-medium text-black/80 dark:text-white">{item.lead} </span>
              ) : null}
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-5 dark:border-white/10 dark:bg-white/[0.04]">
      {block.title ? (
        <p className="mb-1.5 font-poppins text-sm font-medium text-black/80 dark:text-white">{block.title}</p>
      ) : null}
      <p className="font-sfpro text-[15px] leading-relaxed text-text-body dark:text-dark-body">{block.text}</p>
    </div>
  );
}

function GuideIndex() {
  return (
    <section className="pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 md:px-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-greyDark dark:bg-white/5 dark:text-white/70">
          <BookOpen size={14} />
          Guides
        </span>
        <h1 className="mt-6 font-poppins text-4xl font-semibold text-black/80 md:text-5xl dark:text-white">
          Clipper Guides
        </h1>
        <p className="mt-4 max-w-xl font-sfpro leading-relaxed text-text-body dark:text-dark-body">
          Everything you need to start clipping, grow your pages, and get paid for
          verified views — written for creators on Clapout.
        </p>

        <ul className="mt-12 flex flex-col gap-4">
          {GUIDES.map((guide) => (
            <li key={guide.slug}>
              <a
                href={`/guides/${guide.slug}`}
                className="group block rounded-2xl border border-black/10 p-5 transition-colors hover:border-black/30 sm:p-6 dark:border-white/10 dark:hover:border-white/30"
              >
                <span className="flex items-start justify-between gap-4">
                  <span>
                    <span className="block font-poppins text-lg font-medium text-black/80 dark:text-white">
                      {guide.title}
                    </span>
                    <span className="mt-1.5 block font-sfpro text-[15px] leading-relaxed text-text-body dark:text-dark-body">
                      {guide.summary}
                    </span>
                    <span className="mt-3 inline-flex items-center gap-1.5 font-sfpro text-xs uppercase tracking-widest text-black/40 dark:text-white/40">
                      <Clock size={12} />
                      {guide.readTime}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-black/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-white/40"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function GuidePage({ slug }: { slug?: string }) {
  const guide = slug ? getGuide(slug) : undefined;

  if (!guide) {
    return (
      <main className="bg-white transition-colors dark:bg-dark-bg" style={{ overflowX: 'clip' }}>
        <Navbar />
        <GuideIndex />
        <Footer />
      </main>
    );
  }

  const others = GUIDES.filter((g) => g.slug !== guide.slug);

  return (
    <main className="bg-white transition-colors dark:bg-dark-bg" style={{ overflowX: 'clip' }}>
      <Navbar />

      <article className="pb-20 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 md:px-10">
          <a
            href="/guides"
            className="font-sfpro text-sm uppercase tracking-widest text-text-body transition-colors hover:text-black dark:text-dark-body dark:hover:text-white"
          >
            ← All guides
          </a>
          <h1 className="mt-4 font-poppins text-4xl font-semibold leading-tight text-black/80 md:text-5xl dark:text-white">
            {guide.title}
          </h1>
          <p className="mt-4 inline-flex items-center gap-1.5 font-sfpro text-sm uppercase tracking-widest text-text-body dark:text-dark-body">
            <Clock size={14} />
            {guide.readTime}
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {guide.intro.map((paragraph, i) => (
              <p key={i} className="font-sfpro text-[17px] leading-relaxed text-text-body dark:text-dark-body">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-12">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-4 font-poppins text-xl font-medium text-black/80 sm:text-2xl dark:text-white">
                  {section.heading}
                </h2>
                <div className="flex flex-col gap-4">
                  {section.blocks.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {guide.faq && guide.faq.length > 0 ? (
            <section className="mt-14">
              <h2 className="mb-6 font-poppins text-xl font-medium text-black/80 sm:text-2xl dark:text-white">
                Frequently asked questions
              </h2>
              <div className="flex flex-col gap-6">
                {guide.faq.map((item) => (
                  <div key={item.question}>
                    <h3 className="mb-2 font-poppins text-base font-medium text-black/80 dark:text-white">
                      {item.question}
                    </h3>
                    <p className="font-sfpro leading-relaxed text-text-body dark:text-dark-body">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <div className="mt-16 rounded-3xl border border-black/10 bg-black/[0.03] p-8 text-center sm:p-10 dark:border-white/10 dark:bg-white/[0.04]">
            <h2 className="font-poppins text-2xl font-semibold text-black/80 dark:text-white">
              Ready to start earning?
            </h2>
            <p className="mx-auto mt-3 max-w-md font-sfpro text-[15px] leading-relaxed text-text-body dark:text-dark-body">
              Browse live campaigns on Clapout, follow the brief, post your clips,
              and get paid for verified views.
            </p>
            <Button
              className="mt-6 px-7 py-3"
              onClick={() => navigate('/campaigns')}
            >
              Browse campaigns
            </Button>
          </div>

          <div className="mt-16 border-t border-black/10 pt-8 dark:border-white/10">
            <h2 className="mb-4 font-poppins text-[11px] font-medium uppercase tracking-[0.3em] text-black/40 dark:text-white/40">
              More guides
            </h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
              {others.map((g) => (
                <li key={g.slug}>
                  <a
                    href={`/guides/${g.slug}`}
                    className="font-sfpro text-[15px] text-text-body transition-colors hover:text-black dark:text-dark-body dark:hover:text-white"
                  >
                    {g.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

import type { ReactNode } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { navigate } from '../hooks/useRoute';
import { POLICIES, getPolicy } from '../data/policies';

const LAST_UPDATED = 'August 23, 2026';

function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-white px-5 pb-20 pt-8 transition-colors sm:px-8 md:px-10 dark:bg-dark-bg">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex items-center justify-between">
          <a href="/" className="transition-opacity hover:opacity-80">
            <img
              src="/clapout-logo.png"
              alt="Clapout logo"
              className="h-14 w-auto select-none"
              draggable={false}
            />
          </a>
          <Button
            variant="outline"
            className="px-5 py-2 text-sm"
            onClick={() => navigate('/')}
          >
            <span className="inline-flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to site
            </span>
          </Button>
        </div>
        {children}
      </div>
    </main>
  );
}

function PolicyIndex() {
  return (
    <PageShell>
      <h1 className="font-poppins text-4xl font-semibold text-black/80 md:text-5xl dark:text-white">
        Platform Policies
      </h1>
      <p className="mt-3 font-sfpro text-sm uppercase tracking-widest text-text-body dark:text-dark-body">
        Last updated: {LAST_UPDATED}
      </p>
      <p className="mt-6 font-sfpro leading-relaxed text-text-body dark:text-dark-body">
        These policies sit alongside our{' '}
        <a href="/terms" className="underline decoration-black/20 underline-offset-4 transition-colors hover:text-black dark:hover:text-white">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="/privacy" className="underline decoration-black/20 underline-offset-4 transition-colors hover:text-black dark:hover:text-white">
          Privacy Policy
        </a>{' '}
        and explain how campaigns on Clapout are run, verified, and paid.
      </p>

      <ul className="mt-10 flex flex-col gap-4">
        {POLICIES.map((policy) => (
          <li key={policy.slug}>
            <a
              href={`/policies/${policy.slug}`}
              className="group block rounded-2xl border border-black/10 p-5 transition-colors hover:border-black/30 sm:p-6 dark:border-white/10 dark:hover:border-white/30"
            >
              <span className="flex items-start justify-between gap-4">
                <span>
                  <span className="block font-poppins text-lg font-medium text-black/80 dark:text-white">
                    {policy.title}
                  </span>
                  <span className="mt-1.5 block font-sfpro text-[15px] leading-relaxed text-text-body dark:text-dark-body">
                    {policy.summary}
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
    </PageShell>
  );
}

export default function PolicyPage({ slug }: { slug?: string }) {
  const policy = slug ? getPolicy(slug) : undefined;

  if (!policy) return <PolicyIndex />;

  const others = POLICIES.filter((p) => p.slug !== policy.slug);

  return (
    <PageShell>
      <a
        href="/policies"
        className="font-sfpro text-sm uppercase tracking-widest text-text-body transition-colors hover:text-black dark:text-dark-body dark:hover:text-white"
      >
        ← All policies
      </a>
      <h1 className="mt-4 font-poppins text-4xl font-semibold text-black/80 md:text-5xl dark:text-white">
        {policy.title}
      </h1>
      <p className="mt-3 font-sfpro text-sm uppercase tracking-widest text-text-body dark:text-dark-body">
        Last updated: {LAST_UPDATED}
      </p>

      <div className="mt-12 flex flex-col gap-10">
        {policy.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-3 font-poppins text-lg font-medium text-black/80 sm:text-xl dark:text-white">
              {section.heading}
            </h2>
            {section.body.map((paragraph, i) => (
              <p key={i} className="mb-3 font-sfpro leading-relaxed text-text-body dark:text-dark-body">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>

      <div className="mt-16 border-t border-black/10 pt-8 dark:border-white/10">
        <h2 className="mb-4 font-poppins text-[11px] font-medium uppercase tracking-[0.3em] text-black/40 dark:text-white/40">
          Other policies
        </h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
          {others.map((p) => (
            <li key={p.slug}>
              <a
                href={`/policies/${p.slug}`}
                className="font-sfpro text-[15px] text-text-body transition-colors hover:text-black dark:text-dark-body dark:hover:text-white"
              >
                {p.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}

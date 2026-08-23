import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Accordion from '../components/ui/Accordion';
import SupportPanel from '../components/contact/SupportPanel';
import PartnershipPanel from '../components/contact/PartnershipPanel';
import { contactCards } from '../data/contactCards';
import { faqs } from '../data/faqs';

type ContactTab = 'support' | 'partnership';

const TABS: { id: ContactTab; label: string; caption: string }[] = [
  { id: 'support', label: 'Support', caption: 'Join WhatsApp for assistance' },
  { id: 'partnership', label: 'Partnership', caption: 'Fill out partnership form' },
];

export default function ContactPage() {
  const [tab, setTab] = useState<ContactTab>('support');

  return (
    <main className="bg-white transition-colors dark:bg-dark-bg" style={{ overflowX: 'hidden' }}>
      <Navbar />

      <section className="px-4 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="font-poppins text-3xl font-semibold text-black/80 dark:text-white md:text-4xl">
              Contact Clapout
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-sfpro text-text-body dark:text-dark-body">
              Need help with analytics, viewbot detection, or have questions about our platform? Our
              team is here to help content creators succeed.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
            {/* Left: info cards */}
            <div className="flex flex-col gap-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                const isExternal = card.linkHref?.startsWith('http');
                return (
                  <div
                    key={card.heading}
                    className="rounded-2xl border border-border-hairline bg-black/[0.03] p-5 dark:border-dark-border dark:bg-white/5"
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={18} className="shrink-0 text-brand-dark dark:text-white" />
                      <p className="font-poppins text-sm font-semibold text-black/80 dark:text-white">
                        {card.heading}
                      </p>
                    </div>
                    <p className="mt-2 font-sfpro text-sm text-text-body dark:text-dark-body">
                      {card.body}
                    </p>
                    {card.linkLabel && (
                      <a
                        href={card.linkHref}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        className="mt-2 inline-block font-sfpro text-sm font-medium text-brand-orange"
                      >
                        {card.linkLabel}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: tab toggle + active panel */}
            <div>
              <div className="rounded-2xl border border-border-hairline bg-black/[0.03] p-5 dark:border-dark-border dark:bg-white/5">
                <p className="font-poppins text-sm font-semibold text-black/80 dark:text-white">
                  What can we help you with?
                </p>
                <p className="mt-1 font-sfpro text-sm text-text-body dark:text-dark-body">
                  Select the type of inquiry to get the most relevant help.
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {TABS.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTab(t.id)}
                      className={`rounded-xl border p-3 text-left transition-colors ${
                        tab === t.id
                          ? 'border-brand-dark bg-white dark:border-white dark:bg-dark-surface'
                          : 'border-border-hairline bg-transparent hover:bg-black/5 dark:border-dark-border dark:hover:bg-white/5'
                      }`}
                    >
                      <span className="block font-poppins text-sm font-medium text-black/80 dark:text-white">
                        {t.label}
                      </span>
                      <span className="block font-sfpro text-xs text-text-body dark:text-dark-body">
                        {t.caption}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-border-hairline bg-black/[0.03] p-5 dark:border-dark-border dark:bg-white/5">
                {tab === 'support' ? <SupportPanel /> : <PartnershipPanel />}
              </div>
            </div>
          </div>

          <div className="mt-20">
            <p className="font-sfpro text-sm uppercase tracking-wide text-text-body dark:text-dark-body">
              Questions
            </p>
            <h2 className="mt-2 font-poppins text-3xl font-semibold text-black/80 dark:text-white md:text-4xl">
              FAQs
            </h2>
            <div className="mt-6">
              {faqs.map((faq) => (
                <Accordion key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

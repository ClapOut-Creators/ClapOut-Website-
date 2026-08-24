import { useState } from "react";
import { ArrowLeft, ChevronDown, ExternalLink } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ClipperAccountModal from "../components/campaigns/ClipperAccountModal";
import {
  PLATFORM_ICONS,
  PLATFORM_LABELS,
} from "../components/sections/how-it-works/platformIcons";
import { campaigns } from "../data/campaigns";

interface CampaignDetailPageProps {
  slug: string;
}

function formatDate(iso?: string) {
  if (!iso) return undefined;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-5 py-3.5 text-sm">
      <span className="text-text-body dark:text-dark-body">{label}</span>
      <span className="font-medium text-black/80 dark:text-white">{value}</span>
    </div>
  );
}

function PageChrome({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="bg-white transition-colors dark:bg-dark-bg"
      style={{ overflowX: "hidden" }}
    >
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

function BackLink() {
  return (
    <a
      href="#/campaigns"
      className="inline-flex items-center gap-1.5 rounded-squircle border border-border-button px-4 py-1.5 text-sm text-brand-dark transition-colors hover:bg-black/5 dark:border-dark-border dark:text-white dark:hover:bg-white/10"
    >
      <ArrowLeft size={14} /> Back
    </a>
  );
}

export default function CampaignDetailPage({ slug }: CampaignDetailPageProps) {
  const campaign = campaigns.find((c) => c.slug === slug);
  const [expandTop, setExpandTop] = useState(false);
  const [expandBottom, setExpandBottom] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  if (!campaign) {
    return (
      <PageChrome>
        <section className="px-4 pb-20 pt-32 text-center md:pb-28 md:pt-40">
          <BackLink />
          <h1 className="mt-6 font-poppins text-3xl font-semibold text-black/80 dark:text-white md:text-4xl">
            Campaign not found
          </h1>
          <p className="mx-auto mt-4 max-w-md font-sfpro text-text-body dark:text-dark-body">
            No campaign matches &quot;{slug}&quot;.
          </p>
        </section>
      </PageChrome>
    );
  }

  if (!campaign.title) {
    return (
      <PageChrome>
        <section className="px-4 pb-20 pt-32 text-center md:pb-28 md:pt-40">
          <BackLink />
          <h1 className="mt-6 font-poppins text-3xl font-semibold text-black/80 dark:text-white md:text-4xl">
            {campaign.brand}
          </h1>
          <p className="mx-auto mt-4 max-w-md font-sfpro text-text-body dark:text-dark-body">
            Full campaign details are coming soon.
          </p>
        </section>
      </PageChrome>
    );
  }

  const currency = campaign.currency ?? "$";
  const budgetTotal = campaign.budgetTotal ?? 0;
  const budgetPercent =
    budgetTotal > 0
      ? Math.min(100, ((campaign.budgetSpent ?? 0) / budgetTotal) * 100)
      : 0;
  const budgetKLabel =
    budgetTotal % 1000 === 0
      ? `${budgetTotal / 1000}k`
      : `${(budgetTotal / 1000).toFixed(1)}k`;

  return (
    <PageChrome>
      <section className="px-4 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <BackLink />

          {/* Top row: title/description/tags/meta on the left, banner on the right */}
          <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
            <div>
              <h1 className="font-poppins text-2xl font-semibold leading-snug text-black/80 dark:text-white md:text-3xl">
                {campaign.title}
              </h1>

              <p
                className={`mt-4 whitespace-pre-line font-sfpro text-text-body dark:text-dark-body ${expandTop ? "" : "line-clamp-3"}`}
              >
                {campaign.description}
              </p>
              <button
                type="button"
                onClick={() => setExpandTop((prev) => !prev)}
                className="mt-1 flex items-center gap-1 bg-transparent font-poppins text-sm font-medium text-brand-dark dark:text-white"
              >
                {expandTop ? "Collapse" : "Expand"}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${expandTop ? "rotate-180" : ""}`}
                />
              </button>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-2">
                  {campaign.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-brand-yellow/70 px-3 py-1 text-sm font-normal text-brand-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </span>
                <span
                  className="h-4 w-px bg-border-hairline dark:bg-dark-border"
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold text-black/80 dark:text-white">
                  {campaign.cpm} / 1k views
                </span>
                <span
                  className="h-4 w-px bg-border-hairline dark:bg-dark-border"
                  aria-hidden="true"
                />
                <span className="flex items-center gap-1">
                  {campaign.platforms.map((platform) => (
                    <img
                      key={platform}
                      src={PLATFORM_ICONS[platform]}
                      alt={PLATFORM_LABELS[platform]}
                      className="h-4 w-4 rounded object-contain"
                    />
                  ))}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2 font-sfpro text-sm text-text-body dark:text-dark-body">
                <span>
                  Avg review time:{" "}
                  <span className="font-medium text-[#3aa53a]">{campaign.avgReviewTime}</span>
                </span>
                <span
                  className="h-4 w-px bg-border-hairline dark:bg-dark-border"
                  aria-hidden="true"
                />
                <span>
                  Start date:{" "}
                  <span className="font-medium text-black/80 dark:text-white">
                    {formatDate(campaign.startDate)}
                  </span>
                </span>
                <span
                  className="h-4 w-px bg-border-hairline dark:bg-dark-border"
                  aria-hidden="true"
                />
                <span>
                  End date:{" "}
                  <span className="font-medium text-black/80 dark:text-white">
                    {formatDate(campaign.endDate)}
                  </span>
                </span>
              </div>
            </div>

            <div className="w-full overflow-hidden rounded-2xl">
              {campaign.bannerImage ? (
                <img
                  src={campaign.bannerImage}
                  alt={campaign.brand}
                  className="h-auto w-full"
                />
              ) : (
                <div className="flex aspect-[16/9] w-full items-center justify-center bg-gradient-to-br from-[#3a2a24] via-brand-orange/40 to-[#17171a] font-sfpro text-xs uppercase tracking-widest text-white/50">
                  Banner image coming soon
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 border-t border-border-hairline dark:border-dark-border" />

          {/* Bottom row: description/requirements/resources on the left, budget/info/register on the right */}
          <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
            <div>
              <p
                className={`whitespace-pre-line font-sfpro text-text-body dark:text-dark-body ${expandBottom ? "" : "line-clamp-3"}`}
              >
                {campaign.description}
              </p>
              <button
                type="button"
                onClick={() => setExpandBottom((prev) => !prev)}
                className="mt-1 flex items-center gap-1 bg-transparent font-poppins text-sm font-medium text-brand-dark dark:text-white"
              >
                {expandBottom ? "Collapse" : "Read more"}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${expandBottom ? "rotate-180" : ""}`}
                />
              </button>

              <div className="mt-8">
                <p className="font-poppins text-sm font-semibold text-black/80 dark:text-white">
                  Requirements
                </p>
                <p className="mt-2 font-sfpro text-xs uppercase tracking-wide text-text-body dark:text-dark-body">
                  {campaign.requirementsNote}
                </p>
                {campaign.requirementsDocUrl ? (
                  <a
                    href={campaign.requirementsDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block font-sfpro text-sm text-brand-dark underline underline-offset-2 dark:text-white"
                  >
                    Read the google doc
                  </a>
                ) : (
                  <span
                    className="mt-1 inline-block cursor-not-allowed font-sfpro text-sm text-text-body/60 dark:text-dark-body/60"
                    title="Document link coming soon"
                  >
                    Read the google doc
                  </span>
                )}
              </div>

              <div className="mt-6">
                <p className="font-poppins text-sm font-semibold text-black/80 dark:text-white">
                  Resources
                </p>
                <div className="mt-2 flex w-full max-w-[340px] items-center justify-between rounded-xl border border-border-hairline bg-black/[0.03] p-3 dark:border-dark-border dark:bg-white/5">
                  <span className="flex items-center gap-3 font-sfpro text-sm">
                    <img
                      src="/general/google-drive.png"
                      alt=""
                      className="h-[18px] w-[18px] shrink-0 object-contain"
                    />
                    <span>
                      <span className="block font-medium text-black/80 dark:text-white">
                        {campaign.resourceLabel}
                      </span>
                      <span className="block text-xs text-text-body dark:text-dark-body">
                        Resource
                      </span>
                    </span>
                  </span>
                  {campaign.resourceUrl ? (
                    <a
                      href={campaign.resourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${campaign.resourceLabel}`}
                    >
                      <ExternalLink
                        size={14}
                        className="text-text-body dark:text-dark-body"
                      />
                    </a>
                  ) : (
                    <ExternalLink
                      size={14}
                      className="shrink-0 text-text-body/40 dark:text-dark-body/40"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-border-hairline bg-black/[0.03] p-5 dark:border-dark-border dark:bg-white/5">
                <p className="font-poppins text-lg font-semibold text-black/80 dark:text-white">
                  {currency}{budgetKLabel}{" "}
                  <span className="font-sfpro text-sm font-normal text-text-body dark:text-dark-body">
                    budget
                  </span>
                </p>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-orange to-brand-yellow"
                    style={{ width: `${budgetPercent}%` }}
                  />
                </div>
                <div className="mt-2 flex justify-between font-sfpro text-sm text-text-body dark:text-dark-body">
                  <span>{currency}{(campaign.budgetSpent ?? 0).toLocaleString()}</span>
                  <span>{currency}{(campaign.budgetTotal ?? 0).toLocaleString()}</span>
                </div>
              </div>

              <div className="divide-y divide-border-hairline rounded-2xl border border-border-hairline bg-black/[0.03] dark:divide-dark-border dark:border-dark-border dark:bg-white/5">
                <InfoRow label="Category" value={campaign.category} />
                <InfoRow
                  label="Start - End date"
                  value={`${formatDate(campaign.startDate)} - ${formatDate(campaign.endDate)}`}
                />
                <InfoRow
                  label="Platforms"
                  value={
                    <span className="flex items-center gap-1">
                      {campaign.platforms.map((platform) => (
                        <img
                          key={platform}
                          src={PLATFORM_ICONS[platform]}
                          alt={PLATFORM_LABELS[platform]}
                          className="h-4 w-4 rounded object-contain"
                        />
                      ))}
                    </span>
                  }
                />
                <InfoRow label="Last updated" value={campaign.lastUpdated} />
              </div>

              <button
                type="button"
                onClick={() => setShowRegisterModal(true)}
                className="w-full rounded-squircle bg-brand-orange px-8 py-3 font-poppins font-medium text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </section>

      {showRegisterModal && (
        <ClipperAccountModal onClose={() => setShowRegisterModal(false)} />
      )}
    </PageChrome>
  );
}

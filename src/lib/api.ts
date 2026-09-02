import type { Campaign, Platform } from '../types/content';

/**
 * Backend API base (see INTEGRATION-PLAN.md "API contract (v1)"). Defaults to the
 * local backend so `npm run dev` works with zero setup; override with
 * VITE_API_BASE_URL in .env (see .env.example).
 */
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000/api/v1').replace(
  /\/+$/,
  '',
);

/** Origin of the ClapOut Studio platform — campaign cards link into its public detail pages. */
const PLATFORM_URL = (import.meta.env.VITE_PLATFORM_URL ?? 'http://localhost:4200').replace(
  /\/+$/,
  '',
);

/** Public campaign detail page on the platform (full-page navigation target, not a hash route). */
export function platformCampaignUrl(slug: string): string {
  return `${PLATFORM_URL}/campaigns/${slug}`;
}

/** Wire shape returned by `GET /public/campaigns` — numeric money fields, ISO dates, nullable optionals. */
export interface PublicCampaign {
  slug: string;
  title: string;
  demo: boolean;
  brand: {
    name: string;
    logoUrl: string | null;
    logoBg: string;
    logoFit: 'cover' | 'contain';
  };
  /** UPCOMING: announced but not open yet — money fields are null until they're set. */
  status: 'UPCOMING' | 'ACTIVE' | 'CLOSED';
  registrationOpen: boolean;
  platforms: Platform[];
  currency: string;
  cpm: number | null;
  budgetSpent: number | null;
  budgetTotal: number | null;
  description: string;
  category: string;
  /** ISO date or datetime; drives the "Opens in HH:MM:SS" countdown for UPCOMING campaigns. */
  startDate: string;
  endDate: string | null;
  avgReviewTime: string;
  /**
   * Registrations received so far — the participants pill on the campaign
   * card. Optional while the backend rolls the field out; the card renders the
   * unannounced em dash rather than 0 when it is absent.
   */
  registrationCount?: number;
  tags: string[];
  bannerUrl: string | null;
  requirementsNote: string | null;
  requirementsDocUrl: string | null;
  resourceLabel: string | null;
  resourceUrl: string | null;
  updatedAt: string;
}

const REQUEST_TIMEOUT_MS = 8_000;

const STATUS_LABELS: Record<PublicCampaign['status'], string> = {
  UPCOMING: 'Upcoming',
  ACTIVE: 'Active',
  CLOSED: 'Closed',
};

function optional(value: string | null | undefined): string | undefined {
  return value ?? undefined;
}

// Spelled out rather than taken from toLocaleDateString: en-GB abbreviates
// September as 'Sept' and en-US puts the month first, neither of which matches
// the static data's 'Opens 1 Sep'.
const SHORT_MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

/** Date-only values ('2026-09-01') would parse as UTC midnight; anchor them to local time instead. */
function parseDate(value: string, dateOnlyTime: string): Date {
  return new Date(value.includes('T') ? value : `${value}T${dateOnlyTime}`);
}

/**
 * Money strings on the cards/detail page are pre-formatted in the static data
 * (`₵217.90`, `$10,576.90`, `$25,000`), so the numeric API fields are rendered
 * back into that same style: thousands separators, and a fixed number of
 * decimals per field (see `mapCampaign`). A null figure isn't announced yet and
 * renders as the em-dash placeholder the static data uses (`₵—`).
 */
function formatMoney(currency: string, value: number | null, fractionDigits: number): string {
  if (value === null) return `${currency}—`;
  return `${currency}${value.toLocaleString('en-US', {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  })}`;
}

/**
 * Fallback `daysLeft` string.
 *
 * UPCOMING campaigns get the static data's "Opens 1 Sep" form — CampaignCard
 * shows a live "Opens in HH:MM:SS" via useCountdown(startDate) and falls back to
 * this string once that countdown returns null (start time reached/unparsable).
 * Otherwise the card recomputes the countdown from `endDate`, so this is only
 * the value it falls back to when `endDate` is null/unparsable.
 */
function daysLeftLabel(source: PublicCampaign): string {
  if (source.status === 'UPCOMING') {
    const start = parseDate(source.startDate, '00:00:00');
    if (Number.isNaN(start.getTime())) return '—';
    return `Opens ${start.getDate()} ${SHORT_MONTHS[start.getMonth()]}`;
  }
  if (!source.endDate) return '—';
  const end = parseDate(source.endDate, '23:59:59');
  if (Number.isNaN(end.getTime())) return '—';
  const diffMs = end.getTime() - Date.now();
  if (diffMs < 0) return 'Ended';
  const diffDays = Math.floor(diffMs / 86_400_000);
  if (diffDays === 0) return 'Ends today';
  return `${diffDays} Days left`;
}

/** `updatedAt` → the human string the detail page shows, e.g. "Today at 11:04 PM". */
function formatLastUpdated(updatedAt: string): string | undefined {
  const date = new Date(updatedAt);
  if (Number.isNaN(date.getTime())) return undefined;
  const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  const now = new Date();
  const dayDiff = Math.round(
    (new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() -
      new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()) /
      86_400_000,
  );
  if (dayDiff === 0) return `Today at ${time}`;
  if (dayDiff === 1) return `Yesterday at ${time}`;
  return `${SHORT_MONTHS[date.getMonth()]} ${date.getDate()} at ${time}`;
}

/** PublicCampaign (API) → Campaign (the shape every landing component already renders). */
export function mapCampaign(source: PublicCampaign): Campaign {
  return {
    slug: source.slug,
    brand: source.brand.name,
    logo: optional(source.brand.logoUrl),
    logoFit: source.brand.logoFit,
    logoBg: source.brand.logoBg,
    demo: source.demo,
    status: STATUS_LABELS[source.status],
    daysLeft: daysLeftLabel(source),
    platforms: source.platforms,
    // Paid-out always carries cents (`₵217.90`); the goal drops them when whole
    // (`₵2,000`); CPM always shows two decimals (`$10.00`, `$0.90`). Any of them
    // being null (not announced yet) renders as `₵—`.
    paidOut: formatMoney(source.currency, source.budgetSpent, 2),
    goal: formatMoney(
      source.currency,
      source.budgetTotal,
      source.budgetTotal !== null && Number.isInteger(source.budgetTotal) ? 0 : 2,
    ),
    cpm: formatMoney(source.currency, source.cpm, 2),

    title: source.title,
    description: source.description,
    category: source.category,
    // Passed through verbatim — CampaignCard/CampaignDetailPage run the
    // "Opens in …" countdown against it for upcoming campaigns.
    startDate: source.startDate,
    endDate: optional(source.endDate),
    avgReviewTime: source.avgReviewTime,
    lastUpdated: formatLastUpdated(source.updatedAt),
    // Left undefined when not announced, so the card/detail page take their
    // no-budget branches (`hasBudget === false` → `₵—`, empty progress bar).
    budgetSpent: source.budgetSpent ?? undefined,
    budgetTotal: source.budgetTotal ?? undefined,
    // Raw figures the campaign card formats itself (abbreviated money, the
    // "₵ 10.00/1k" CPM pill, the participants pill and the "26d ago" label),
    // rather than reusing the pre-formatted strings above.
    cpmValue: source.cpm ?? undefined,
    registrationCount: source.registrationCount ?? undefined,
    updatedAt: source.updatedAt,
    currency: source.currency,
    tags: source.tags,
    bannerImage: optional(source.bannerUrl),
    requirementsNote: optional(source.requirementsNote),
    requirementsDocUrl: optional(source.requirementsDocUrl),
    resourceLabel: optional(source.resourceLabel),
    resourceUrl: optional(source.resourceUrl),
  };
}

/**
 * `GET /public/campaigns`. Rejects on network failure, timeout, non-OK status or
 * an unexpected payload — callers fall back to the static `data/campaigns.ts`
 * list so the page is never broken by a backend outage.
 */
export async function fetchCampaigns(): Promise<Campaign[]> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(`${API_BASE_URL}/public/campaigns`, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) {
      throw new Error(`GET /public/campaigns failed with ${response.status}`);
    }
    const payload = (await response.json()) as { data?: PublicCampaign[] };
    if (!Array.isArray(payload?.data)) {
      throw new Error('GET /public/campaigns returned an unexpected payload');
    }
    return payload.data.map(mapCampaign);
  } finally {
    clearTimeout(timeout);
  }
}

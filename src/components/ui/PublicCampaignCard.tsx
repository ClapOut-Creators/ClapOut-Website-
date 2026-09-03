import { platformCampaignUrl } from "../../lib/api";
import type { Campaign, Platform } from "../../types/content";

// ---------------------------------------------------------------------------
// This card is a 1:1 port of the ClapOut Studio platform's
// `shared/public/public-campaign-card.ts` (Figma 344:1182 desktop /
// 344:1295 mobile). Markup, class names and the px values inside them are
// deliberately identical to the Angular original so both sites render the
// same card at the same window width — see `.co-page-scale` in
// styles/index.css for the shared desktop scale. The only additions are the
// `dark:` variants, which the platform (light-only) doesn't need.
//
// The old `CampaignCard` is still the homepage "How it works" demo card and is
// intentionally left alone.
// ---------------------------------------------------------------------------

/** Rendered wherever the backend has not announced a value yet. */
const NOT_ANNOUNCED = "—";

/** Largest unit first so the first match wins. */
const MONEY_UNITS: ReadonlyArray<readonly [number, string]> = [
  [1_000_000_000, "B"],
  [1_000_000, "M"],
  [1_000, "k"],
];

/**
 * The card's compact money: '₵5k', '₵1.5M', '₵950'. One decimal is kept only
 * while the scaled value is below ten, so '₵5k' never becomes '₵5.0k'.
 * Unannounced amounts render as the shared em dash rather than '₵0'.
 */
export function abbreviateMoney(
  currency: string,
  amount: number | null | undefined,
): string {
  if (amount === null || amount === undefined || !Number.isFinite(amount))
    return NOT_ANNOUNCED;
  const sign = amount < 0 ? "-" : "";
  const value = Math.abs(amount);
  for (const [unit, suffix] of MONEY_UNITS) {
    if (value >= unit) {
      const scaled = value / unit;
      const rounded =
        scaled < 10 ? Math.round(scaled * 10) / 10 : Math.round(scaled);
      return `${sign}${currency}${rounded}${suffix}`;
    }
  }
  return `${sign}${currency}${Math.round(value * 100) / 100}`;
}

/**
 * '26d ago' — how long ago a campaign was last touched. Anything under a day
 * degrades to hours and then minutes so a freshly published campaign does not
 * read as '0d ago'.
 */
export function elapsedLabel(
  iso: string | null | undefined,
  now: number = Date.now(),
): string {
  if (!iso) return NOT_ANNOUNCED;
  const updated = new Date(iso).getTime();
  if (Number.isNaN(updated)) return NOT_ANNOUNCED;
  const minutes = Math.floor(Math.max(0, now - updated) / 60_000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  return hours < 24 ? `${hours}h ago` : `${Math.floor(hours / 24)}d ago`;
}

/**
 * Design-spec money: two decimals with a thin space after the symbol
 * ("₵ 2,000.00"). Unannounced amounts render "₵ —".
 */
function formatMoneyExact(
  currency: string,
  amount: number | null | undefined,
): string {
  if (amount === null || amount === undefined || !Number.isFinite(amount)) {
    return `${currency} ${NOT_ANNOUNCED}`;
  }
  return `${currency} ${amount.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

/** A budget only exists once the brand announces a positive total. */
function hasBudget(total: number | null | undefined): boolean {
  return (
    total !== null && total !== undefined && Number.isFinite(total) && total > 0
  );
}

/** 0-100. Returns 0 whenever the budget is unannounced, so callers never divide by null. */
function budgetPercent(
  spent: number | null | undefined,
  total: number | null | undefined,
): number {
  if (!hasBudget(total)) return 0;
  const safeSpent =
    spent !== null && spent !== undefined && Number.isFinite(spent) ? spent : 0;
  return Math.min(100, Math.max(0, (safeSpent / (total as number)) * 100));
}

export const PLATFORM_GLYPH_LABELS: Record<Platform, string> = {
  tiktok: "TikTok",
  x: "X",
  facebook: "Facebook",
  instagram: "Instagram",
  youtube: "YouTube",
  snapchat: "Snapchat",
  whatsapp: "WhatsApp Stories",
};

// Monochrome glyphs copied from the @primeicons set the platform card renders
// (20x20 viewBox, `currentColor`), NOT the full-colour brand marks in
// public/socials — those are the homepage's, and would not match the platform.
const PLATFORM_GLYPH_PATHS: Record<Platform, string> = {
  tiktok:
    "M17 8.55938C15.6237 8.56232 14.2813 8.13271 13.1625 7.33125V12.9188C13.1622 13.9536 12.8459 14.9636 12.256 15.8139C11.6661 16.6641 10.8306 17.3139 9.86134 17.6764C8.89208 18.039 7.83525 18.0969 6.83217 17.8425C5.82909 17.5881 4.92759 17.0335 4.24825 16.2529C3.5689 15.4723 3.14409 14.5029 3.03064 13.4743C2.91718 12.4457 3.12049 11.407 3.61336 10.497C4.10624 9.58713 4.86519 8.84939 5.78871 8.3825C6.71223 7.9156 7.75629 7.74182 8.78125 7.88438V10.6938C8.31259 10.5462 7.80929 10.5505 7.34322 10.7061C6.87715 10.8616 6.47215 11.1605 6.18603 11.5599C5.89992 11.9593 5.74732 12.439 5.75004 12.9303C5.75276 13.4216 5.91064 13.8996 6.20116 14.2958C6.49167 14.6921 6.89995 14.9864 7.36771 15.1368C7.83547 15.2872 8.33879 15.2859 8.8058 15.1332C9.2728 14.9805 9.67962 14.6842 9.96817 14.2865C10.2567 13.8888 10.4122 13.4101 10.4125 12.9188V2H13.1625C13.161 2.23258 13.1808 2.46481 13.2219 2.69375C13.3175 3.20406 13.5162 3.68951 13.8058 4.12044C14.0954 4.55136 14.4699 4.91869 14.9063 5.2C15.5274 5.61026 16.2556 5.82871 17 5.82813V8.55938Z",
  instagram:
    "M10 5.90003C7.73001 5.90003 5.9 7.73001 5.9 10C5.9 12.27 7.73001 14.1 10 14.1C12.27 14.1 14.1 12.27 14.1 10C14.1 7.73001 12.27 5.90003 10 5.90003ZM10 12.67C8.53001 12.67 7.33001 11.47 7.33001 10C7.33001 8.53001 8.53001 7.33003 10 7.33003C11.47 7.33003 12.67 8.53001 12.67 10C12.67 11.47 11.47 12.67 10 12.67ZM15.23 5.72999C15.23 6.25999 14.8 6.69001 14.27 6.69001C13.74 6.69001 13.31 6.25999 13.31 5.72999C13.31 5.19999 13.74 4.77003 14.27 4.77003C14.8 4.77003 15.23 5.19999 15.23 5.72999ZM17.94 6.70002C17.88 5.42002 17.59 4.27999 16.65 3.34999C15.71 2.40999 14.58 2.12001 13.3 2.06001C11.98 1.99001 8.02001 1.99001 6.70001 2.06001C5.42001 2.12001 4.29002 2.40999 3.35002 3.34999C2.41002 4.28999 2.12001 5.42002 2.06001 6.70002C1.99001 8.02002 1.99001 11.98 2.06001 13.3C2.12001 14.58 2.41002 15.72 3.35002 16.65C4.29002 17.59 5.42001 17.88 6.70001 17.94C8.02001 18.01 11.98 18.01 13.3 17.94C14.58 17.88 15.72 17.59 16.65 16.65C17.59 15.71 17.88 14.58 17.94 13.3C18.01 11.98 18.01 8.02002 17.94 6.70002ZM16.24 14.72C15.96 15.42 15.42 15.96 14.72 16.24C13.67 16.66 11.17 16.56 10 16.56C8.83001 16.56 6.33001 16.65 5.28001 16.24C4.58001 15.96 4.04 15.42 3.76 14.72C3.34 13.67 3.44001 11.17 3.44001 10C3.44001 8.83001 3.35 6.33004 3.76 5.28004C4.04 4.58004 4.58001 4.04002 5.28001 3.76002C6.33001 3.34002 8.83001 3.44001 10 3.44001C11.17 3.44001 13.67 3.35002 14.72 3.76002C15.42 4.04002 15.96 4.58004 16.24 5.28004C16.66 6.33004 16.56 8.83001 16.56 10C16.56 11.17 16.66 13.67 16.24 14.72Z",
  youtube:
    "M17.67 6.14001C17.49 5.45001 16.94 4.89997 16.26 4.71997C15.01 4.37997 10.01 4.38 10.01 4.38C10.01 4.38 5.01004 4.37997 3.76004 4.71997C3.07004 4.90997 2.53004 5.45001 2.35004 6.14001C2.02004 7.40001 2.02002 10.02 2.02002 10.02C2.02002 10.02 2.02004 12.64 2.35004 13.9C2.53004 14.59 3.08004 15.12 3.76004 15.3C5.01004 15.64 10.01 15.64 10.01 15.64C10.01 15.64 15.01 15.64 16.26 15.3C16.95 15.11 17.49 14.59 17.67 13.9C18 12.64 18 10.02 18 10.02C18 10.02 18 7.40001 17.67 6.14001ZM8.36002 12.39V7.63L12.54 10.01L8.36002 12.39Z",
  facebook:
    "M18 10.049C18 5.60301 14.419 2 10 2C5.581 2 2 5.60201 2 10.049C2 14.066 4.925 17.396 8.75 18V12.375H6.718V10.048H8.75V8.27499C8.75 6.25799 9.944 5.14401 11.772 5.14401C12.647 5.14401 13.563 5.30099 13.563 5.30099V7.28101H12.554C11.56 7.28101 11.25 7.90199 11.25 8.53799V10.049H13.469L13.114 12.376H11.25V18.001C15.075 17.396 18 14.066 18 10.049Z",
  x: "M14.5997 2.75H17.0543L11.6932 8.89159L18 17.25H13.063L9.19339 12.182L4.77097 17.25H2.31291L8.04607 10.6797L2 2.75H7.06215L10.5563 7.38233L14.5997 2.75ZM13.7375 15.7791H15.0969L6.3216 4.14423H4.86136L13.7375 15.7791Z",
  // The platform's own marks (20x20): the Snapchat ghost from its shared icon
  // component scaled from 24 to 20, and the PrimeIcons WhatsApp glyph.
  snapchat:
    "M10 1.67c-3 0-5 2.17-5 5.17v2.17c-0.50.25-1.17 0-1.580.33-0.250.25 0 0.750.58 1l10.42c-0.42 1.25-1.5 2.25-2.75 2.67-0.420.17-0.420.58-0.080.750.580.33 1.330.42 1.920.580.080.330.17 0.83 0.42 10.420.17 1.17-0.17 2 0 10.25 1.83 1.58 3.5 1.58s2.5-1.33 3.5-1.58c0.83-0.17 1.580.17 2 0 0.25-0.170.33-0.670.42-10.58-0.17 1.33-0.25 1.92-0.580.33-0.170.33-0.58-0.08-0.75-1.25-0.42-2.33-1.42-2.75-2.67l1-0.42c0.58-0.25 0.83-0.750.58-1-0.42-0.33-1.08-0.08-1.58-0.33V6.83C15 3.83 13 1.67 10 1.67Z",
  whatsapp:
    "M15.604 4.325C14.108 2.825 12.115 2 9.99699 2C5.62599 2 2.068 5.557 2.068 9.929C2.068 11.325 2.432 12.69 3.125 13.893L2 18L6.20399 16.896C7.36099 17.528 8.665 17.86 9.993 17.86H9.99699C14.365 17.86 18.001 14.303 18.001 9.931C18 7.814 17.1 5.825 15.604 4.325ZM9.99699 16.525C8.81099 16.525 7.651 16.207 6.64 15.607L6.401 15.464L3.908 16.118L4.572 13.686L4.415 13.436C3.754 12.386 3.408 11.175 3.408 9.929C3.408 6.297 6.365 3.34 10.001 3.34C11.762 3.34 13.415 4.026 14.658 5.272C15.901 6.518 16.665 8.172 16.662 9.933C16.661 13.568 13.629 16.525 9.99699 16.525ZM13.611 11.589C13.415 11.489 12.44 11.01 12.257 10.946C12.075 10.878 11.943 10.846 11.811 11.046C11.679 11.246 11.3 11.689 11.182 11.825C11.068 11.957 10.95 11.975 10.753 11.875C9.589 11.293 8.824 10.836 8.057 9.51801C7.853 9.16801 8.261 9.193 8.639 8.436C8.703 8.304 8.67099 8.19 8.62099 8.09C8.57099 7.99 8.17499 7.015 8.00999 6.619C7.84899 6.233 7.685 6.287 7.564 6.28C7.45 6.273 7.318 6.27299 7.185 6.27299C7.052 6.27299 6.839 6.323 6.656 6.519C6.474 6.719 5.963 7.198 5.963 8.173C5.963 9.148 6.674 10.091 6.77 10.223C6.87 10.355 8.166 12.355 10.156 13.216C11.413 13.759 11.906 13.805 12.535 13.712C12.917 13.655 13.706 13.233 13.871 12.769C14.035 12.305 14.035 11.908 13.985 11.826C13.94 11.735 13.807 11.685 13.611 11.589Z",
};

/** The 20x20 `user` glyph on the participants pill. */
const USER_GLYPH_PATH =
  "M10 11.75C12.0105 11.75 13.9066 11.918 15.3184 12.5801C16.0408 12.9189 16.6618 13.3983 17.0977 14.0703C17.5343 14.7438 17.75 15.5561 17.75 16.5C17.75 16.9142 17.4142 17.25 17 17.25C16.5858 17.25 16.25 16.9142 16.25 16.5C16.25 15.7891 16.0906 15.2735 15.8398 14.8867C15.5882 14.4987 15.2091 14.1849 14.6816 13.9375C13.5934 13.4271 11.9895 13.25 10 13.25C8.01048 13.25 6.40661 13.4271 5.31836 13.9375C4.79093 14.1849 4.41177 14.4987 4.16016 14.8867C3.90942 15.2735 3.75 15.7891 3.75 16.5C3.75 16.9142 3.41421 17.25 3 17.25C2.58579 17.25 2.25 16.9142 2.25 16.5C2.25 15.5561 2.46567 14.7438 2.90234 14.0703C3.33821 13.3983 3.95922 12.9189 4.68164 12.5801C6.09339 11.918 7.98953 11.75 10 11.75ZM10 2.75C12.0711 2.75 13.75 4.42893 13.75 6.5C13.75 8.57107 12.0711 10.25 10 10.25C7.92893 10.25 6.25 8.57107 6.25 6.5C6.25 4.42893 7.92893 2.75 10 2.75ZM10 4.25C8.75736 4.25 7.75 5.25736 7.75 6.5C7.75 7.74264 8.75736 8.75 10 8.75C11.2426 8.75 12.25 7.74264 12.25 6.5C12.25 5.25736 11.2426 4.25 10 4.25Z";

function initialsOf(name: string): string {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("") || "?"
  );
}

/**
 * The brand swatch. The platform's `app-brand-logo-tile` falls back to
 * `object-contain` with a 10% inset on any tile at or below 40px, and this one
 * is 26-27px, so that branch is inlined here rather than re-measuring the box.
 */
function BrandLogoTile({ campaign }: { campaign: Campaign }) {
  return (
    <span
      className="flex h-[27px] w-[27px] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#ECECEC] xl:h-[26px] xl:w-[26px] dark:border-white/10"
      style={{ backgroundColor: campaign.logoBg }}
    >
      {campaign.logo ? (
        <img
          src={campaign.logo}
          alt={`${campaign.brand} logo`}
          className="h-full w-full object-contain p-[10%]"
        />
      ) : (
        <span className="px-1 text-center text-xs font-semibold text-white">
          {initialsOf(campaign.brand)}
        </span>
      )}
    </span>
  );
}

interface PublicCampaignCardProps {
  campaign: Campaign;
}

/**
 * "Campaign Card — Compact": a banner, the brand chip with how long ago the
 * campaign was updated, the platforms it runs on, the title, the spent/total
 * money line, the participants and CPM pills, and the budget meter.
 *
 * The design shows a verified tick beside every brand. The public contract has
 * no verification flag, so the tick is decorative for now and must move behind
 * a real `brand.verified` field once the backend publishes one.
 */
export default function PublicCampaignCard({
  campaign,
}: PublicCampaignCardProps) {
  const currency = campaign.currency ?? "$";
  const title = campaign.title ?? campaign.brand;
  const spentLabel = abbreviateMoney(currency, campaign.budgetSpent);
  const totalLabel = abbreviateMoney(currency, campaign.budgetTotal);
  const cpmLabel = `${formatMoneyExact(currency, campaign.cpmValue)}/1k`;
  const participantsLabel =
    campaign.registrationCount === undefined ||
    campaign.registrationCount === null
      ? NOT_ANNOUNCED
      : campaign.registrationCount.toLocaleString("en-GB");
  const participantsDescription =
    campaign.registrationCount === undefined ||
    campaign.registrationCount === null
      ? "Registered clippers not reported"
      : `${campaign.registrationCount.toLocaleString("en-GB")} registered clippers`;

  return (
    <a
      // Cards link out to the ClapOut Studio platform's public campaign page
      // (full-page navigation, same tab) — that's where registration lives.
      href={platformCampaignUrl(campaign.slug)}
      className="flex h-full w-full flex-col rounded-[15.5px] border border-[#E5E5E8] bg-white pb-[9.7px] pl-[3.9px] pr-[3.9px] pt-[3.2px] no-underline shadow-[0_2px_14px_rgba(15,15,18,0.06)] transition-shadow hover:shadow-[0_6px_20px_rgba(15,15,18,0.12)] xl:rounded-[14.7px] dark:border-dark-border dark:bg-dark-surface dark:shadow-none dark:hover:shadow-[0_6px_20px_rgba(0,0,0,0.5)]"
    >
      <span className="block aspect-[350/192] w-full overflow-hidden rounded-[16.5px] bg-[#DDDDDD] xl:rounded-[15.6px] dark:bg-white/10">
        {campaign.bannerImage ? (
          <img
            src={campaign.bannerImage}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <span
            className="flex h-full w-full items-center justify-center px-5 text-center"
            style={{ backgroundColor: campaign.logoBg }}
          >
            <span className="co-user-text font-poppins text-[18px] font-semibold leading-tight text-white">
              {campaign.brand}
            </span>
          </span>
        )}
      </span>

      <div className="mt-[14.2px] flex items-center gap-3 px-[14px] xl:mt-[13.4px]">
        <div className="flex min-w-0 flex-1 items-center gap-[13.6px] xl:gap-[12.8px]">
          <div className="flex min-w-0 items-center gap-[7.7px] xl:gap-[7.3px]">
            <BrandLogoTile campaign={campaign} />
            <span className="truncate text-[14.9px] font-medium text-[#5C5C61] xl:text-[14px] dark:text-dark-body">
              {campaign.brand}
            </span>
            <svg
              className="h-[17px] w-[17px] shrink-0 xl:h-4 xl:w-4"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12z"
                fill="#FFC93C"
              />
              <path
                d="M10.09 16.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"
                fill="#1B1B1B"
              />
            </svg>
          </div>
          <span className="shrink-0 text-[14.9px] text-[#8C8C94] xl:text-[14px] dark:text-white/50">
            <span className="sr-only">Updated</span>
            {elapsedLabel(campaign.updatedAt)}
          </span>
        </div>

        {campaign.platforms.length > 0 && (
          <div className="flex shrink-0 items-center gap-[6px] xl:gap-[5.7px]">
            {campaign.platforms.map((platform) => (
              <span
                key={platform}
                className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-[#E5E5E8] bg-white text-[#0F0F12] xl:h-[21px] xl:w-[21px] dark:border-dark-border dark:bg-white/5 dark:text-white"
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d={PLATFORM_GLYPH_PATHS[platform]}
                    fill="currentColor"
                  />
                </svg>
                <span className="sr-only">
                  {PLATFORM_GLYPH_LABELS[platform]}
                </span>
              </span>
            ))}
          </div>
        )}
      </div>

      <h3 className="co-user-text mt-[6.2px] line-clamp-2 px-[14px] font-poppins text-[21.8px] font-semibold leading-[27.8px] text-[#0F0F12] xl:mt-[5.9px] xl:text-[20.6px] xl:leading-[26.2px] dark:text-white">
        {title}
      </h3>

      <div className="mt-[6.2px] flex flex-wrap items-center justify-between gap-x-3 gap-y-2 px-[14px] xl:mt-[5.9px]">
        <p className="m-0 flex items-baseline gap-[4.5px] font-poppins">
          <span className="sr-only">Paid out</span>
          <span className="text-[17.1px] font-medium text-[#0F0F12] xl:text-[16.2px] dark:text-white">
            {spentLabel}
          </span>
          <span className="text-[14px] font-medium text-[#737378] xl:text-[13.2px] dark:text-dark-body">
            /{totalLabel}
          </span>
        </p>

        <div className="flex shrink-0 items-center gap-[11px] xl:gap-[10.4px]">
          <span className="inline-flex items-center gap-[4.5px] rounded-full border border-[#E5E5E8] bg-white px-[7.7px] py-[3.2px] font-poppins text-[14px] font-medium text-[#0F0F12] xl:text-[13.2px] dark:border-dark-border dark:bg-white/5 dark:text-white">
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path d={USER_GLYPH_PATH} fill="currentColor" />
            </svg>
            <span aria-hidden="true">{participantsLabel}</span>
            <span className="sr-only">{participantsDescription}</span>
          </span>

          <span className="inline-flex items-center gap-[4.5px] rounded-full border border-[#E5E5E8] bg-white px-[7.7px] py-[3.2px] dark:border-dark-border dark:bg-white/5">
            <span
              className="flex h-[13px] w-[13px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FC5404] to-[#F27002] text-[8px] font-semibold leading-none text-white"
              aria-hidden="true"
            >
              {currency}
            </span>
            <span className="sr-only">CPM</span>
            <span className="bg-gradient-to-r from-[#FC5404] to-[#F27002] bg-clip-text text-[14px] font-medium text-transparent xl:text-[13.2px]">
              {cpmLabel}
            </span>
          </span>
        </div>
      </div>

      {hasBudget(campaign.budgetTotal) && (
        <div className="mt-auto px-[14px] pt-[16.4px] xl:pt-[15.5px]">
          <div
            className="h-[5px] w-full overflow-hidden rounded-full bg-[#EBEBED] dark:bg-white/10"
            aria-hidden="true"
          >
            <div
              className="h-full rounded-full bg-[#17171A] dark:bg-white"
              style={{
                width: `${budgetPercent(campaign.budgetSpent, campaign.budgetTotal)}%`,
              }}
            />
          </div>
        </div>
      )}
    </a>
  );
}

import { useEffect, useMemo, useRef, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PublicCampaignCard, { PLATFORM_GLYPH_LABELS } from '../components/ui/PublicCampaignCard';
import { campaigns as staticCampaigns } from '../data/campaigns';
import { fetchCampaigns } from '../lib/api';
import type { Campaign, Platform } from '../types/content';

// ---------------------------------------------------------------------------
// Public campaign discovery, ported 1:1 from the ClapOut Studio platform's
// `features/campaigns/campaign-list.html` (Figma 344:1182 desktop /
// 344:1295 mobile) so both sites render the same page at the same window
// width: the centred title, a search box with a filter popover, the
// "Featured campaigns" heading and the card grid.
//
// The platform scales this geometry down on desktop (`zoom: .8` from 1024px
// up, because every screen was drawn at the 1728px Figma width); the same rule
// lives here as `.co-page-scale` and wraps the page content only, so the
// landing's own navbar and footer keep their own size.
// ---------------------------------------------------------------------------

/** `DRAFT` never leaves the admin section, so it is not offered as a filter. */
const STATUS_FILTERS = ['Active', 'Upcoming', 'Closed'] as const;
const PLATFORM_FILTERS: readonly Platform[] = ['tiktok', 'instagram', 'youtube', 'facebook', 'x'];

const SKELETON_ROWS = [0, 1, 2];

/** Mirrors the platform's `p-skeleton` blocks in the new card's shape. */
function CampaignCardSkeleton() {
  const block = 'animate-pulse rounded-md bg-black/10 dark:bg-white/10';
  return (
    <div className="rounded-[15.5px] border border-[#E5E5E8] bg-white pb-[9.7px] pl-[3.9px] pr-[3.9px] pt-[3.2px] xl:rounded-[14.7px] dark:border-dark-border dark:bg-dark-surface">
      <div className="aspect-[350/192] w-full overflow-hidden rounded-[16.5px] xl:rounded-[15.6px]">
        <div className={`h-full w-full ${block}`} />
      </div>
      <div className="mt-[14.2px] flex items-center justify-between gap-3 px-[14px]">
        <div className={`h-[1.7rem] w-[9rem] ${block}`} />
        <div className={`h-[1.4rem] w-[4.5rem] rounded-full ${block}`} />
      </div>
      <div className="mt-2 px-[14px]">
        <div className={`h-[1.6rem] w-[90%] ${block}`} />
      </div>
      <div className="mt-2 px-[14px]">
        <div className={`h-[1.6rem] w-[60%] ${block}`} />
      </div>
      <div className="mt-4 px-[14px]">
        <div className={`h-[5px] w-full ${block}`} />
      </div>
    </div>
  );
}

interface FilterCheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function FilterCheckbox({ id, label, checked, onChange }: FilterCheckboxProps) {
  return (
    <div className="flex items-center gap-2.5">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="h-4 w-4 shrink-0 cursor-pointer accent-brand-orange"
      />
      <label className="cursor-pointer text-sm text-text-body dark:text-dark-body" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default function CampaignsPage() {
  // Campaigns come from the backend; the bundled static list is the silent
  // fallback for any failure (offline, API down, bad payload) so the page never
  // renders broken. `null` = still loading.
  const [campaigns, setCampaigns] = useState<Campaign[] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    fetchCampaigns()
      .then((data) => {
        if (!cancelled) setCampaigns(data);
      })
      .catch(() => {
        if (!cancelled) setCampaigns(staticCampaigns);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Popover dismissal: a click anywhere outside it, or Escape (which also
  // returns focus to the trigger via the browser's default focus handling).
  useEffect(() => {
    if (!filtersOpen) return;
    function onPointerDown(event: MouseEvent | TouchEvent) {
      if (!filterRef.current?.contains(event.target as Node)) setFiltersOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setFiltersOpen(false);
    }
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [filtersOpen]);

  // Demo/dummy campaigns are homepage illustrations only — they never appear
  // in the public list.
  const liveCampaigns = useMemo(
    () => (campaigns ?? []).filter((campaign) => !campaign.demo),
    [campaigns],
  );

  // The list arrives in one request, so searching and filtering are client
  // side — no extra round trip, and the loading, empty and filtered-empty
  // states stay distinguishable.
  const visibleCampaigns = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return liveCampaigns.filter((campaign) => {
      if (
        selectedStatuses.length &&
        !selectedStatuses.some((status) => status.toLowerCase() === campaign.status.toLowerCase())
      ) {
        return false;
      }
      if (
        selectedPlatforms.length &&
        !campaign.platforms.some((entry) => selectedPlatforms.includes(entry))
      ) {
        return false;
      }
      if (!term) return true;
      return [campaign.title, campaign.brand, campaign.category].some((field) =>
        (field ?? '').toLowerCase().includes(term),
      );
    });
  }, [liveCampaigns, searchTerm, selectedStatuses, selectedPlatforms]);

  const activeFilterCount = selectedStatuses.length + selectedPlatforms.length;
  const isFiltering = activeFilterCount > 0 || searchTerm.trim().length > 0;
  // The icon-only filter control carries its own state in its accessible name.
  const filterButtonLabel =
    activeFilterCount === 0
      ? 'Filter campaigns'
      : `Filter campaigns, ${activeFilterCount} ${activeFilterCount === 1 ? 'filter' : 'filters'} applied`;
  const liveCountLabel =
    liveCampaigns.length === 1 ? '1 campaign is live' : `${liveCampaigns.length} campaigns are live`;

  function toggle<T>(list: T[], value: T, selected: boolean): T[] {
    return selected ? [...list, value] : list.filter((entry) => entry !== value);
  }

  function clearFilters() {
    setSelectedStatuses([]);
    setSelectedPlatforms([]);
    setSearchTerm('');
  }

  const emptyStateClass =
    'mt-[29px] rounded-xl border border-dashed border-[#DDDDDD] bg-white p-10 text-center xl:mt-[25px] dark:border-dark-border dark:bg-dark-surface';

  return (
    <main className="bg-white transition-colors dark:bg-dark-bg" style={{ overflowX: 'hidden' }}>
      <Navbar />

      {/* Clearance for the fixed navbar, kept outside `.co-page-scale` so it
          tracks the navbar's real (unscaled) height. */}
      <div className="pt-[104px] md:pt-[136px]">
        <div className="co-page-scale">
          <section className="mx-auto w-full max-w-[1728px] px-3 pb-20 pt-6 sm:px-6 lg:px-10 xl:px-[120px] xl:pb-[140px] xl:pt-[50px]">
            <header className="text-center">
              <h1 className="m-0 font-poppins text-[20px] font-medium leading-[30px] text-black/80 xl:text-[31px] xl:leading-[47px] dark:text-white">
                Campaigns
              </h1>
              <p className="mx-auto mb-0 mt-0.5 max-w-[331px] text-[16px] leading-[19px] text-[#464646] xl:mt-0 xl:max-w-none xl:text-[22px] xl:leading-[30px] dark:text-dark-body">
                Discover active campaigns from this Content Rewards community
              </p>
            </header>

            <div className="mt-[21px] flex items-center justify-between gap-[18px] xl:mt-[41px]">
              <label className="sr-only" htmlFor="campaign-search">
                Search campaigns
              </label>
              <div className="flex h-[46px] min-w-0 flex-1 items-center gap-[10px] rounded-[10px] border border-[#DDDDDD] bg-[#F4F4F4] px-[15px] xl:max-w-[464px] dark:border-dark-border dark:bg-white/5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0 text-[#525252] dark:text-white/60"
                >
                  <path
                    d="M8.76953 1.25C12.9226 1.25 16.2898 4.61656 16.29 8.76953C16.29 10.576 15.6515 12.2326 14.5898 13.5293L18.5303 17.4697C18.823 17.7626 18.8231 18.2374 18.5303 18.5303C18.2374 18.8231 17.7626 18.823 17.4697 18.5303L13.5293 14.5898C12.2326 15.6515 10.576 16.29 8.76953 16.29C4.61656 16.2898 1.25 12.9226 1.25 8.76953C1.25025 4.61672 4.61672 1.25025 8.76953 1.25ZM8.76953 2.75C5.44515 2.75025 2.75025 5.44514 2.75 8.76953C2.75 12.0941 5.44499 14.7898 8.76953 14.79C12.0943 14.79 14.79 12.0943 14.79 8.76953C14.7898 5.445 12.0941 2.75 8.76953 2.75Z"
                    fill="currentColor"
                  />
                </svg>
                <input
                  id="campaign-search"
                  type="search"
                  autoComplete="off"
                  placeholder="Search campaign.."
                  className="h-full w-full min-w-0 border-0 bg-transparent p-0 text-[16px] text-[#383838] outline-none placeholder:text-[#919191] xl:text-[20px] dark:text-white dark:placeholder:text-white/40"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </div>

              <div className="relative shrink-0" ref={filterRef}>
                <button
                  type="button"
                  className="relative flex h-[46px] w-[56px] cursor-pointer items-center justify-center rounded-[10px] border border-[#DDDDDD] bg-[#F4F4F4] text-[#525252] transition-colors hover:bg-[#ECECEC] dark:border-dark-border dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10"
                  aria-label={filterButtonLabel}
                  aria-haspopup="dialog"
                  aria-expanded={filtersOpen}
                  onClick={() => setFiltersOpen((open) => !open)}
                >
                  {/* Figma "Outline / Essentional, UI / Sort": three centred 22/16/10 bars. */}
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                    <rect x="1" y="6" width="22" height="2" rx="1" />
                    <rect x="4" y="11" width="16" height="2" rx="1" />
                    <rect x="7" y="16" width="10" height="2" rx="1" />
                  </svg>
                  {activeFilterCount > 0 && (
                    <span
                      className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#EC612C] px-1 text-[11px] font-semibold text-white"
                      aria-hidden="true"
                    >
                      {activeFilterCount}
                    </span>
                  )}
                </button>

                {filtersOpen && (
                  <div
                    role="dialog"
                    aria-label="Campaign filters"
                    className="absolute right-0 top-[calc(100%+8px)] z-40 w-[248px] rounded-xl border border-[#DDDDDD] bg-white p-4 text-left shadow-[0_10px_40px_rgba(15,15,18,0.14)] dark:border-dark-border dark:bg-dark-surface"
                  >
                    <fieldset className="m-0 border-0 p-0">
                      <legend className="mb-2 p-0 text-xs font-semibold uppercase tracking-wide text-[#8C8C94]">
                        Status
                      </legend>
                      <div className="flex flex-col gap-2">
                        {STATUS_FILTERS.map((status) => (
                          <FilterCheckbox
                            key={status}
                            id={`filter-status-${status.toLowerCase()}`}
                            label={status}
                            checked={selectedStatuses.includes(status)}
                            onChange={(checked) =>
                              setSelectedStatuses((current) => toggle(current, status, checked))
                            }
                          />
                        ))}
                      </div>
                    </fieldset>

                    <fieldset className="m-0 mt-4 border-0 p-0">
                      <legend className="mb-2 p-0 text-xs font-semibold uppercase tracking-wide text-[#8C8C94]">
                        Platform
                      </legend>
                      <div className="flex flex-col gap-2">
                        {PLATFORM_FILTERS.map((platform) => (
                          <FilterCheckbox
                            key={platform}
                            id={`filter-platform-${platform}`}
                            label={PLATFORM_GLYPH_LABELS[platform]}
                            checked={selectedPlatforms.includes(platform)}
                            onChange={(checked) =>
                              setSelectedPlatforms((current) => toggle(current, platform, checked))
                            }
                          />
                        ))}
                      </div>
                    </fieldset>

                    <button
                      type="button"
                      className="mt-3 cursor-pointer border-0 bg-transparent p-0 text-sm font-medium text-brand-orange disabled:cursor-default disabled:opacity-50"
                      disabled={!isFiltering}
                      onClick={clearFilters}
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
            </div>

            <h2
              className="mb-0 mt-[26px] font-poppins text-[18px] font-semibold text-black/80 xl:mt-[60px] xl:text-[24px] dark:text-white"
              id="featured-campaigns"
            >
              Featured campaigns
            </h2>

            {campaigns === null ? (
              <div
                className="mt-[29px] grid grid-cols-1 gap-x-[18px] gap-y-[10px] md:grid-cols-2 xl:mt-[25px] xl:max-w-[1110px] xl:grid-cols-3"
                aria-busy="true"
                aria-live="polite"
              >
                <span className="sr-only">Loading campaigns</span>
                {SKELETON_ROWS.map((row) => (
                  <CampaignCardSkeleton key={row} />
                ))}
              </div>
            ) : liveCampaigns.length === 0 ? (
              <div className={emptyStateClass}>
                <h3 className="m-0 font-poppins text-lg font-semibold text-[#0F0F12] dark:text-white">
                  No campaigns are live yet
                </h3>
                <p className="mx-auto mt-2 max-w-md text-text-body dark:text-dark-body">
                  New brand campaigns are published regularly. Check back soon, or create an account
                  so you are ready to apply the moment one opens.
                </p>
              </div>
            ) : visibleCampaigns.length === 0 ? (
              <div className={emptyStateClass}>
                <h3 className="m-0 font-poppins text-lg font-semibold text-[#0F0F12] dark:text-white">
                  No campaigns match your filters
                </h3>
                <p className="mx-auto mt-2 max-w-md text-text-body dark:text-dark-body">
                  {liveCountLabel} — try a different search term, or clear the status and platform
                  filters.
                </p>
                <button
                  type="button"
                  className="mt-5 cursor-pointer rounded-full border border-border-button px-5 py-2 text-sm font-medium text-black/80 transition-colors hover:bg-black/5 dark:border-dark-border dark:text-white dark:hover:bg-white/10"
                  onClick={clearFilters}
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <ul
                className="mt-[29px] grid list-none grid-cols-1 gap-x-[18px] gap-y-[10px] p-0 md:grid-cols-2 xl:mt-[25px] xl:max-w-[1110px] xl:grid-cols-3"
                aria-labelledby="featured-campaigns"
              >
                {visibleCampaigns.map((campaign) => (
                  <li key={campaign.slug} className="flex">
                    <PublicCampaignCard campaign={campaign} />
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}

# Phase 3 — How It Works (4 steps + cash-out table)

**Depends on:** Phase 2 (Hero) complete and verified.
**Replaces:** `src/components/HowItWorksSection.tsx`,
`src/components/CampaignsSection.tsx`, and whatever remains of
`CashOutSection.tsx`/`PostCampaignPreview.tsx` if present → new
`src/components/sections/HowItWorksSection.tsx`, using `Tabs`, `Card`,
`PhoneMockup` (from Phase 2), and new `Table`-ish markup for cash-out.
**Source:** `doc/design-reference.md` § "3. Three steps to your first
payout", `doc/Clapout.pdf` page 1 middle block and page 2 "HOW IT WORKS"
block (numbered `0.1`–`0.4` on mobile).

This is the largest section — build it as 4 sub-blocks inside one section
component, each its own file if it gets unwieldy
(`components/sections/how-it-works/JoinStep.tsx`, `SetupStep.tsx`,
`PostStep.tsx`, `CashOutStep.tsx`, composed by `HowItWorksSection.tsx`).

## Desktop spec

**Two-column intro (left column, sticky per the design if scroll-pinned
behavior is wanted — not confirmed in the design doc, so a static left
column is the safe default):**
- Eyebrow "How it works", H2 "Three steps to your first payout.", pill
  toggle tabs "For Creators" / "For Brands" (`Tabs` component — the tab
  can be inert/visual-only for v1 unless content actually differs per
  tab, in which case each step's copy needs a creator and brand variant;
  check with the copy owner before inventing brand-side copy that isn't in
  `design-reference.md`), body copy, "Start Clipping →" button.

**Right column, 4 numbered steps** (data-driven from `data/steps.ts`):

1. **Join — "Pick a campaign"**: copy per design doc. Below it, a 2×2 grid
   of campaign cards (`Card` component) — brand logo, status pill
   ("Active" / "50 Days left" style), platform icons, "Paid Out" and
   "$/view" stats. Brands: **Coca-Cola**, **Nike**, **Tekme Creatives**,
   **TripAdverts** — populate `data/campaigns.ts` with these 4 (real logo
   assets needed for Coca-Cola/Nike; note as a follow-up if brand-safe use
   of these logos needs sign-off — flag rather than silently ship
   trademarked logos without asking).
2. **Set up — "Add your payout method"**: copy per design doc. Below it, a
   "Payment method" card listing **MTN**, **Telecel**, **AT**, **Bank**
   (MTN shown selected). Populate `data/payoutMethods.ts`.
3. **Post — "Post Campaign Content"**: copy per design doc. Platform icon
   row: TikTok, Facebook, Instagram, YouTube, X (reuse the existing
   `Music2`-for-TikTok / `Twitter`-for-X lucide-react convention documented
   in the old `CLAUDE.md` "Icons" section — carry that convention forward).
   Below: 4 `PhoneMockup` instances in a row (same component built in
   Phase 2).
4. **Cash out — "Get paid per view"**: copy per design doc. Below it, a
   simple earnings table: columns **CYCLE / STATUS / AMOUNT**, rows e.g.
   "Tekme · July · Pending · $1,567.08", "E-Wale · August · Paid ·
   $500.08". Populate `data/payouts.ts`. Status pill colors: keep the
   existing ad-hoc status colors from the old `CLAUDE.md` (`#90EE90`
   green "Paid", `#FFC857` amber "Pending") since the design doc doesn't
   override them.

## Mobile spec

- PDF page 2 shows this section relabeled `0.1 Join`, `0.2 Set up`,
  `0.3 Post`, `0.4 Cash out` — single column, steps stacked in order, no
  visible left-column intro block before them in the mobile screenshot
  (the "Three steps..." H2/tabs/CTA likely collapse above the numbered
  list — confirm against the PDF and keep it above the `0.1` block rather
  than dropping it).
- Campaign card grid becomes single column (or 2-column if it still fits
  at ~375px — check against card min-width) instead of the desktop 2×2.
- 4 phone mockups likely become a horizontal scroll row or wrap to 2×2 at
  mobile width — match the PDF screenshot's actual layout rather than
  guessing.

## Acceptance criteria

- [ ] All 4 steps present, in order, with real copy from
      `design-reference.md` (no placeholder lorem ipsum).
- [ ] Campaign cards, payment method card, and cash-out table are each
      driven by their respective `data/*.ts` file, not hardcoded JSX.
- [ ] `PhoneMockup` reused (not reimplemented) for the 4 post-step phones.
- [ ] Desktop 2-column intro/steps layout and mobile stacked layout both
      verified against PDF pages 1 and 2.
- [ ] Old `HowItWorksSection.tsx` / `CampaignsSection.tsx` /
      `CashOutSection.tsx` / `PostCampaignPreview.tsx` deleted once
      verified.
- [ ] `npm run build` passes clean.

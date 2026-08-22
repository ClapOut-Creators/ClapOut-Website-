# Clapout — Design Reference (from Figma)

This file documents the "Clapout" landing page design captured from Figma
(`Clapout` file, `Page 1` → `HOME` frame, node `9N8Lkrbn3JycpBbOktX0qH`) on
2026-08-21. It's meant to be the source of truth for rebuilding this page in
code. Everything below (copy, colors, type, spacing, layout order) was read
directly out of Figma's own layer/inspector panels, not eyeballed from an
image, so treat the numbers as accurate to the file at capture time.

> **Note on screenshots:** this session controls Figma through a remote
> browser and could not write the on-screen captures back into this
> repo/sandbox as image files — there's no file bridge between the browser
> and this filesystem. What follows is a complete textual spec instead
> (copy, hex colors, font specs, exact px dimensions for every section).
> The one thing that _needs_ to come from Figma directly is the raster/vector
> **assets** (logo, photos, icons) — see "Assets to export" at the bottom for
> exactly what to pull and how.

## Product context

Clapout is a creator/clipping marketplace: brands run campaigns, "clippers"
(creators) post clips of that content to their own social channels, and get
paid per verified view. The landing page sells both sides of that
marketplace (creators and brands).

## Global design tokens

### Colors

| Token             | Hex                     | Usage                                                   |
| ----------------- | ----------------------- | ------------------------------------------------------- |
| `background`      | `#FFFFFF`               | Page background (all sections except footer)            |
| `text-primary`    | `#000000` @ 80% opacity | Headlines                                               |
| `text-body`       | `#464646`               | Body copy / subtext                                     |
| `accent-orange`   | `#EC612C`               | Primary CTA button ("Start Campaign"), links/highlights |
| `accent-yellow`   | `#FFC93C`               | "Clipping" headline highlight pill, small badges        |
| `button-dark`     | `#111111`               | Secondary/dark CTA button ("Start Clipping")            |
| `border-hairline` | `#DDDDDD`               | Section divider borders (1px, bottom-only)              |
| `border-button`   | `#CFCFCF`               | 1px borders on pill buttons                             |
| `nav-border`      | `#B4B4B4` @ 5% opacity  | Nav pill outline                                        |
| `footer-bg`       | `#0C0C0C`               | Footer background                                       |

### Typography

| Role               | Font    | Weight        | Size    | Line height | Letter spacing |
| ------------------ | ------- | ------------- | ------- | ----------- | -------------- |
| Hero headline (H1) | Poppins | 500 (Medium)  | 81.04px | 89.15px     | 0              |
| Body / paragraph   | SF Pro  | 400 (Regular) | 22px    | 30px        | 0              |

Both are center-aligned in the hero. Expect smaller headline sizes (H2/H3)
at similar weight/family for section headings ("Three steps to your first
payout.", "The creators and brands behind the campaigns.", "Trusted by the
best brands", "FAQs", "Two sides. One Place. Pick yours.") — capture exact
sizes per-heading in Figma if pixel-perfect matching matters; they were not
individually inspected beyond the hero H1.

### Shape & spacing patterns

- Buttons are full pill-shaped: `border-radius: 58px`, `border: 1px solid #CFCFCF`, padding roughly `12px 42px` (dark button) / `12px 34px` (orange button).
- The "Clipping" highlight badge: `border-radius: 28px`, padding `8px 30px`, background `#FFC93C`.
- Nav bar is a pill: `border-radius: 79.25px`, `border: 0.99px`, padding `6.93px 23.78px`, positioned `top: 36px`, `left: 95px` (desktop), fixed width `1537px` at the 1728px desktop frame size.
- Section dividers are simple 1px bottom borders (`#DDDDDD`), not boxed cards — sections sit directly on the white page background.

### Reference frame size

Desktop design frame ("HOME"): **1728 × 8221px**. Treat 1728px as the
designed desktop breakpoint; no tablet/mobile frames were found in this file
(only one "iPhone 16 & 17 Pro" artboard existed separately at the page's top
level, likely a phone-mockup component, not a responsive breakpoint — see
"Other artboards" below).

## Page structure (top → bottom, in order)

Order and pixel offsets below come straight from each section's `Top`/
`Height` values in Figma (all relative to the 1728×8221 HOME frame).

### 1. Navbar (`top: 36px`, pill nav, height ~96px)

- Left: Clapout logo (flame/badge icon + wordmark)
- Center links: **Product**, **Guide**, **Contact** (each with a dropdown chevron)
- Right: **Get Started** button, orange pill

### 2. Hero (`top: 154px`, height: 1792px)

- Small badge above headline: "🔥 CREATE. POST. GET PAID." (rounded pill, light background)
- H1: "Create, Clip, Post and Earn with **Clipping**" — "Clipping" sits in the yellow (`#FFC93C`) highlight pill
- Subtext (body style, `#464646`): "A creative marketplace uniting brands and digital talent. Brands can start campaigns that engage expert clippers to craft viral content, amplify reach, and generate real revenue."
- Two CTA buttons side by side: **Start Clipping** (dark `#111111`) and **Start Campaign** (orange `#EC612C`)
- Below: a phone-mockup carousel — 3 phones fanned out, center phone showing a TikTok-style vertical video UI ("ClipOut Clips" account, caption "E-WALE's drop hit 1M views in 48 hours 🎉", like/comment/share counts, a "00:02/01:00 · Tap for sound" scrubber). A horizontal scrubber/timeline bar sits below the phones, plus a row of small circular avatar icons.
- Below that: "Trusted by top brands" label + logo strip (Tekme, Union, Covoitly logos visible)

### 3. "Three steps to your first payout" — How it works (`top: 1946px`, height: 2388px)

Left column: eyebrow "How it works", H2 "Three steps to your first payout.", two pill toggle tabs ("For Creators" / "For Brands"), body copy "No following, no application, no catch. Pick a campaign, post your clips, and watch the views turn into earnings.", and a "Start Clipping →" button.

Right column: three numbered steps, each with a small icon, eyebrow label, heading, and body copy:

1. **Join — "Pick a campaign"**: "Browse live campaigns from real brands. See the rate, platforms, and bounties up front, then join in one tap. No following or application required." Below it, a 2×2 grid of brand campaign cards (brand logo, status pill like "Active"/"50 Days left", platform icons, "Paid Out" and "$ / view" stats). Brands shown: **Coca‑Cola**, **Nike**, **Tekme Creatives**, **TripAdverts**.
2. **Set up — "Add your payout method"**: "Choose how you want to get paid. Mobile money or bank transfer, so your earnings land automatically when a cycle closes." Below: a "Payment method" card listing **MTN**, **Telecel**, **AT**, **Bank** as options (MTN shown selected/checked).
3. **Post — "Post Campaign Content"**: "Follow the campaign brief, create or share the approved content, and post it on your social platform." Platform icon row: TikTok, Facebook, Instagram, YouTube, X. Below: 4 phone mockups in a row, each showing the same TikTok-style clip UI as the hero.

Below the 3 steps: **"Cash out — Get paid per view"**: "Your earnings climb live as views roll in. When the cycle closes and views are verified, your payout is sent to your chosen method." Below it, a simple earnings table with columns **CYCLE / STATUS / AMOUNT**, rows e.g. "Tekme · July · Pending · $1,567.08" and "E‑Wale · August · Paid · $500.08".

### 4. Creators/brands social proof grid (`top: 4334px`, height: 1000px)

- Eyebrow: "USED BY INDUSTRY LEADERS"
- H2: "The creators and brands behind the campaigns."
- Subtext: "Streamers, labels, and brands run campaigns here. Their clips are the ones your network gets paid to post."
- A 3-row grid of square headshot/photo thumbnails (roughly 5–6 per row, ~15 photos total), one with a small "GHANA" flag tag overlay.

### 5. FAQs (`top: 5352px`, height: 698px)

- Eyebrow: "QUESTIONS"
- H2: "FAQs"
- 6 accordion rows (chevron-right icons, currently collapsed):
  1. What is Clapout?
  2. Do I need a lot of followers to join?
  3. How do I earn as a creator?
  4. How is my performance verified?
  5. How do brands launch a campaign?
  6. When and how do I get paid?

### 6. Testimonials — "Trusted by the best brands" (`top: 6050px`, height: 1000px)

- Eyebrow: "WHY THE USE US"
- H2: "Trusted by the best brands"
- Subtext: "Streamers, labels, and brands run campaigns here. Their clips are the ones your network gets paid to post."
- 4 quote cards in a row, alternating light/dark styling, each with a 5-star rating row, quote body text, small circular avatar, name, and handle/brand (e.g. **SAMUEL** / E‑Wale, **STEPHEN** / Wistiy, **NANA** / Tekme, **STEPHEN** / Wistiy). Quotes emphasize verified payouts and low-lift content requirements.

### 7. Closing CTA — "Two sides. One Place." (`top: 7050px`, height: 411px)

- H2 (mixed weight): "Two sides. **One Place.** Pick yours" — first part regular weight, "One Place." bold/heavier
- Subtext: "Clippers get paid per view. Brands get reach they only pay for when it is verified."
- Two buttons again: **Start Clipping** (outline/dark) and **Start Campaign** (light/outline variant here, not solid orange)

### 8. Footer (`top: 7461px`, height: 774px, background `#0C0C0C`)

- Left: Clapout logo + tagline "A creator distribution platform connecting brands with micro‑influencers who make content travel — and get paid for verified performance."
- Link columns:
  - **Explore**: About, How it works, Campaigns, FAQ, Feedback
  - **Legal**: Terms of Service, Privacy Policy
  - **Contact**: hello@clapout.co, Accra · Ghana, Join Clapout
- Bottom row: "© 2026 Clapout. All rights reserved." (left) and "CREATE. POST. GET PAID." (right)
- Very large outline/ghost "CLAPOUT" wordmark spanning the width at the very bottom, low-contrast against the black background (decorative).

## Other artboards in the file (not part of the main page flow)

- **`Frame 70`** and **`iPhone 16 & 17 Pro - 1`** sit at the page root alongside `HOME` — these appear to be phone-mockup component/template artboards used to produce the device images shown in the hero and "Post Campaign Content" sections, not separate pages.
- Loose top-level text layers **`AMOUNT`**, **`STATUS`**, **`$500.08`** are almost certainly leftover/detached instances of the earnings-table row component — safe to ignore; the real content is inside the "Get paid per view" table in section 3.

## Assets to export from Figma

These need to come out of Figma directly (this session can't extract binary
images) — the Figma file's Export panel was already primed with several of
these selected. In Figma: select the layer/group → the right-hand panel's
**Export** section → choose format → Export.

- **Logo**: the Clapout flame/badge mark + wordmark (nav + footer) — export as SVG
- **Brand logos**: Tekme, Nike, Coca‑Cola, TripAdverts, Union, Covoitly — SVG if vector, PNG if raster
- **Social/platform icons**: TikTok, Facebook, Instagram, YouTube, X — SVG
- **UI icons**: chevron/arrow (down, right), clock, wallet-money — SVG, ~13–24px
- **Payment method logos**: MTN, Telecel, AT, Bank — SVG/PNG
- **Phone mockup renders**: the TikTok-style clip UI screens shown in the hero (1) and campaign-content section (4 more) — PNG @2x
- **Creator/brand headshot photos**: ~15 square thumbnails in the social-proof grid — PNG/JPG
- **Testimonial avatars**: 4 small circular headshots (Samuel, Stephen ×2, Nana) — PNG/JPG

## Open items to verify once building

- Exact heading sizes for H2s below the hero (only the hero H1 was individually inspected: Poppins 500 / 81px).
- Mobile/tablet breakpoints — none exist in the Figma file; responsive behavior will need to be designed fresh from the 1728px desktop layout.
- Whether Figma Dev Mode is available to the account (it wasn't, in this session — "Request access" was shown) — full Dev Mode access would give exact CSS for every remaining node if more precision is needed later.

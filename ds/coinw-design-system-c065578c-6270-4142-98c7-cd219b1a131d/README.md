# CoinW Design System

A working design system for **CoinW** — a global crypto-exchange platform.
This system reconstructs CoinW's tokens, components, and visual language from
the three Figma libraries the team ships internally (Design System 2.0 +
App Components 2.0 + Web Components 2.0) so a designer or coding agent can
build new screens, decks, and prototypes that look and feel like real CoinW.

> Use this folder as a skill — feed it to Claude (or any agent) and it will
> produce on-brand interfaces without re-inventing colors, type, or chrome.

---

## What is CoinW?

CoinW is a centralised crypto-exchange. Its product surface includes:

- **Spot, Futures and Copy trading** desks
- **CoinW Earn** — staking / yield products
- **CoinW Card** — a fiat on-ramp / debit-card product
- **CoinW Ventures** and **CoinW Verity** — capital + transparency arms
- Marketing site (`coinw.com`), web trading app, and a mobile app

Copy harvested from the components reflects this:
*"CoinW earn", "CoinW ventures", "CoinW verity", "CoinW Card",
"CopyRight © 2017 – 2023 CoinW.com. All Rights Reserved."*

## Provided source material

| Source | Where it lived |
|---|---|
| Figma — Design System 2.0 for Claude (Styleguide) | mounted .fig VFS, page `/Styleguide` |
| Figma — App Components 2.0 for Claude | mounted .fig VFS, 4 frames on `/page` |
| Figma — Web Components 2.0 for Claude | mounted .fig VFS, 4 frames on `/page` |
| 11 logo SVGs (horizontal / vertical / mark, in 4 colorways) | `uploads/` |
| Satoshi font family (Light → Black) | `uploads/` |
| HarmonyOS Sans SC (Bold, Black) | `uploads/` |

> ⚠️ The system message listed HarmonyOS_Sans_SC Light / Medium / Regular /
> Thin TTFs but only Bold and Black were attached. CJK text falls back to
> system fonts at those weights. **Please re-attach the missing weights**
> when you can.

The Figma file is structured by section, each owned by a designer:

| Section | Owner-tag | Frame color | What it covers |
|---|---|---|---|
| Display / 信息展示类 | Kira | blue `#2D89CC` | accordion, list items, cards, tags, badges |
| Feedback / 反馈类 | Zed | red `#E95032` | tooltip, loading, toast, popovers |
| Input / 信息输入类 | Jony | orange `#FE6F00` | text fields, radios, checkboxes, segmented, select |
| Navigation / 导航类 | Eric | green `#14A739` | breadcrumb, tabs, header, footer, pagination |

> The colored 10-px borders around each Figma section are **internal
> styleguide framing only** — they are NOT brand colors. The real semantic
> usage of green/red/orange/blue is documented in `colors_and_type.css`.

---

## File index

```
/
├── README.md                ← you are here
├── SKILL.md                 ← Claude-Skills entry (mirror of README's key bits)
├── colors_and_type.css      ← every token: CSS vars + helper classes
├── fonts/                   ← Satoshi (5 weights) + HarmonyOS SC (2 weights)
├── assets/
│   └── logos/               ← horizontal / vertical / mark · 4 colorways each
├── preview/                 ← Design-System tab card files (one HTML per card)
├── ui_kits/
│   ├── web/                 ← marketing site recreation
│   │     index.html, *.jsx
│   └── app/                 ← in-app trading UI recreation
│         index.html, *.jsx
└── uploads/                 ← original uploads (kept for reference)
```

---

## CONTENT FUNDAMENTALS

CoinW is a **bilingual** product (EN + 简体中文). Copy is written **for
traders** — it assumes you know what a limit order, a perpetual or staking
is — and dispenses jargon plainly. The tone is functional and confident,
not playful, not finance-bro.

**Voice rules**

- **Second-person, neutral.** "Confirm your trade", not "Let's confirm
  your trade" and not "User confirms the trade". The product never refers
  to itself as "we" in UI; reserve "CoinW" for marketing / legal copy.
- **Title Case for headings, sentence case for body and buttons.**
  Buttons say `Get Started`, `Deposit`, `Trade Now`, `Sign Up` — Title
  Case 1-2 words, never a sentence.
- **No emoji in UI.** Zero emoji appear in any of the 300+ Figma
  components. Icons do all the work emoji might otherwise do.
- **No exclamation marks** in production copy. Loading states and empty
  states are matter-of-fact: `Loading…`, `No data`, `Network error`.
- **Numbers and tickers always uppercase + monospaced where alignment
  matters**: `BTC/USDT`, `+12.34 %`, `0.00001234`. The component library
  reserves a `mono` variant for tabular numerics in tables.
- **Bilingual headings** in the styleguide use a `｜` (full-width pipe)
  between EN and CN, e.g. `面包屑｜Breadcrumb`, `折叠面板｜Accordion`. In
  product, English and Chinese live on separate locales — don't mix them
  in one string.
- **Legal / footer copy** uses the dated pattern
  `CopyRight © 2017 – 2023 CoinW.com. All Rights Reserved.` Reuse
  verbatim; do not rewrite.

**Example copy harvested from the components**

| Surface | String |
|---|---|
| Accordion question | "What is an appeal?" |
| Hero CTA (mobile + web) | "Get Started" |
| Empty state | "No data" |
| Network error | "No network" |
| Wallet entry | "CoinW Card" |
| Footer product list | "CoinW earn", "CoinW ventures", "CoinW verity" |
| Breadcrumb leaf | "Current Page" |
| Field placeholder | "Placeholder" / "Disabled" |

When you write new copy, match this register — informational, short,
sentence-cased, ASCII punctuation. Skip "the team", skip "we're excited",
skip welcome messages.

---

## VISUAL FOUNDATIONS

### Color

**One brand color does the heavy lifting.** Indigo-violet `#5227FF`
(`--cw-brand-500`) is CoinW's identity. It darkens to `#2509B3` on
press and lightens to `#6C4FFF` on hover. There is no gradient brand —
the brand is a flat fill.

**Neutrals are pure gray, not blue-gray.** Body text is `#1A1A1A`, not
`#000`. Surface 2 is `#F2F2F2`. Hairlines are `#D9D9D9`. The system has
exactly four ink levels (`#1A1A1A → #404040 → #8C8C8C → #BFBFBF`); do
not invent intermediate steps.

**Semantic green / red are crypto-domain.** Green `#14A739` means *gain
/ confirmed*, red `#E95032` means *loss / error*. Don't repurpose them
for general OK / cancel — the user reads them as P&L.

### Type

- **Satoshi** at every weight from Light (300) through Black (900) is
  the entire Latin type system. There is no serif.
- **HarmonyOS Sans SC** is the CJK companion (Bold + Black uploaded; we
  fall back to system for lighter weights — see caveat above).
- The signature display setting is `Satoshi Bold 57 / 68, letter-spacing
  -0.25px`. That number is everywhere in the Figma — use it for hero
  headings.
- Body is `Satoshi Regular 14 / 20 with +0.1px tracking`. The slight
  positive tracking on body text is intentional; do not strip it.

### Layout

- **4-pt grid throughout**, with a heavier set of section-gutter values
  at `40 / 62 / 80 / 90 px`. The styleguide uses a **90 px card inset**
  — that's a marketing-y, generous breathing room. Inside product the
  gutter drops to `16 / 20 / 24 px`.
- Page-level sections sit on a **1280 / 1440 / 1920** desktop grid,
  **768** tablet, **375** mobile (see `TypeXL1024`, `TypeL7681024`,
  `TypeH5375768` components).
- **Cards** are radius `20px`, 1-px `#1A1A1A` border, no shadow by
  default. Elevated overlays add `0 4px 12px rgba(65,91,130,.12)`.

### Backgrounds

CoinW **does not use full-bleed photography** in product chrome. The
default surface is plain white; marketing hero blocks layer flat brand
violet (`#5227FF`) with **white SVG illustration** on top. There are
**no gradients in the system**. Repeating patterns and textures are
absent — the only "texture" is the lime accent `#D1FF55` used as a
high-contrast hero highlight on dark sections.

### Borders, dividers, shadow

- Every card and input shows a **1-px solid `#1A1A1A`** border. This is
  unusual — most systems go borderless — and it's a signature.
- Dividers are `1-px #D9D9D9` at 40 % opacity.
- The styleguide marks demo regions with **1-px dashed `#9747FF`**.
  Strip the dashed violet when shipping; it is layout scaffolding.
- Shadows are used **sparingly**: `0 1px 2px` for raised list items,
  `0 4px 12px` for dropdowns, `0 10px 30px` for modals.

### Radii

`5 / 8 / 12 / 16 / 20 / 40 / 80 (pill)`. Buttons + inputs are `12`,
cards are `20`, hero containers `40`, chips and tags are full pill.

### Interactions

- **Hover**: brand button lightens from `#5227FF → #6C4FFF`. Neutral
  buttons go to `rgba(0,0,0,0.05)` fill or move to a 1-px brand
  border outline.
- **Press**: brand button darkens to `#2509B3`; no scale transform.
- **Focus**: `1-px solid #5227FF` border on filled inputs (the border
  *replaces* the ink border, it doesn't add to it — keeps height stable).
- **Disabled**: 40 % opacity OR text drops to `#BFBFBF` with surface 2
  fill.
- **No bouncy / spring animation.** Transitions are linear-ish, ~200 ms
  with `cubic-bezier(0.2, 0.8, 0.2, 1)`. Crypto users care about
  responsiveness; flourishes feel slow.

### Transparency + blur

CoinW does **not** use frosted glass / backdrop-filter blur. Overlays
are solid white cards with a shadow. The only transparency in the
system is `rgba(0,0,0,0.05)` for tertiary button fills and
`rgba(82,39,255,0.08-0.12)` for selected-state tint.

### Imagery

Imagery is **flat vector**, white-on-brand or brand-on-white, drawn in
the same geometric style as the CW logomark. There are no photos of
people, no 3D renders, no AI-generated illustration. If you need a hero
image you don't have, draw a **placeholder rectangle in brand violet
with a centered logomark**.

### Iconography (summary — full notes below)

24-px filled glyphs, custom-drawn, all rendered at `#1A1A1A` (or
`#FFFFFF` on dark surfaces). Outline weight is ~2 px. **Lucide** is the
nearest CDN match and is what `ui_kits/` use as a substitute.

---

## ICONOGRAPHY

CoinW ships a **custom 24×24 px icon set**, all glyphs filled (no line
icons), drawn at a chunky ~2-px optical stroke equivalent. They're
named in the Figma as `24px-Icon/ArrowRight`, `24px-Icon/Profile`,
`24px-Icon/ChevronDown`, etc. Common names found:

```
ArrowRight   ArrowLeft   ArrowUp        ChevronRight   ChevronDown
ChevronUp    Plus        Minus          Check          CrossBig
Search1      Search2     Profile        Wallet         Capital
Coupon       Notifications              Favorite1      Favorite
Time         Sort        SortBy         Language       Dark
Info02       NoWifi      Record         ExchangeCexDex Default
WebDownload  DuoCommunity1
```

A 20-px variant exists for compact UI (`20px-Icon/Arrow-Right`).
**Profile** is rendered as a head + shoulders glyph at 16×20 inside a
24×24 frame (typical 4-px padding); the system pads icons to the next
multiple of 4.

**Substitution policy.** The original SVG paths weren't extractable
from the binary, so the UI kits use **Lucide** (CDN) as the closest
visual match. Stroke icons render at 24 px with `stroke-width: 2`,
`color: currentColor` so they inherit `--cw-ink` / `--cw-white`. This
is a **substitution; flag it for review.** Where possible, swap in the
real glyphs.

**Emoji**: not used. Zero emoji appear in 300+ components.
**Unicode glyphs as icons**: not used.
**Icon font / SVG sprite**: the source ships as individual symbols in
Figma; in production CoinW imports them as React components.

The 4 colorways of the logomark + wordmark are in `assets/logos/`:

```
assets/logos/coinw-horizontal-purple-white.svg
assets/logos/coinw-horizontal-purple.svg
assets/logos/coinw-horizontal-black.svg
assets/logos/coinw-horizontal-white.svg
assets/logos/coinw-vertical-purple-white.svg
assets/logos/coinw-vertical-purple.svg
assets/logos/coinw-vertical-black.svg
assets/logos/coinw-vertical-white.svg
assets/logos/coinw-mark-purple.svg
assets/logos/coinw-mark-black.svg
assets/logos/coinw-mark-white.svg
```

**Logo clearspace.** The mark is `~140 px tall`; keep at least
`28 px` clear on all sides. Don't recolor the mark outside the four
provided colorways. Don't stretch.

---

## How to use this in code / prototypes

1. `<link rel="stylesheet" href="colors_and_type.css">` (or copy the
   `:root {…}` block into your stylesheet).
2. Use the CSS variables — never hard-code `#5227FF`. Use
   `var(--cw-brand-500)`.
3. Use a 1-px ink border on cards and inputs (`border: 1px solid
   var(--cw-ink)`) — this is a CoinW signature.
4. Reach for Lucide icons (`<i data-lucide="arrow-right">`) until real
   icons are available.
5. Look at `ui_kits/web/` and `ui_kits/app/` for full screen
   recreations you can lift components from.

---

## Caveats / known gaps

- HarmonyOS_Sans_SC Light / Medium / Regular / Thin were listed but not
  attached. CJK text at <Bold weights falls back to system.
- Custom 24-px icon SVG paths were not in the binary; UI kits use
  Lucide as a visual stand-in.
- The Figma listed "App Components" and "Web Components" as separate
  files but only one set of 4 frames (Display / Feedback / Input /
  Navigation) was mounted. That set covers the visual language; the
  product-screen frames (full trading panels, mobile screens) were not
  present and have been reconstructed from the component primitives
  plus the footer / header / pagination atoms found in the Navigation
  section.

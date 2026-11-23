# Qustomer Design System

Clean, trustworthy B2B SaaS. Lots of whitespace, one accent color, content first.
Tokens live in `src/styles/global.css` (`@theme`). This file is the spec; CSS is the implementation. Keep both in sync.

## Principles
0. **No slop** — follow `.claude/skills/kill-slop`. If another SaaS could swap its logo onto this page unchanged, it isn't designed yet.
1. **Clarity over decoration** — every element earns its place.
2. **One accent** — brand blue marks the action. Never more than one primary CTA per viewport.
3. **Fast is a feature** — no decorative JS, no heavy imagery above the fold.
4. **Accessible by default** — WCAG 2.2 AA minimum.

## Color
| Token | Use | Value |
|---|---|---|
| `brand-50` | icon chips, subtle tint | `oklch(0.97 0.02 260)` |
| `brand-100` | tints, text on brand bg | `oklch(0.93 0.05 260)` |
| `brand-500` | logo blue, illustrations, 3D bubbles | `oklch(0.6 0.21 260)` ≈ #1a6ffb |
| `brand-600` | primary buttons, links, eyebrow (white text ≥ 4.5:1) | `oklch(0.52 0.22 260)` |
| `brand-700` | hover/pressed | `oklch(0.45 0.2 260)` |
| `mint-100` | soft panel behind the assistant lane | `oklch(0.97 0.05 142)` |
| `mint-300` | logo gradient end: fills/highlights only, never text on white | `oklch(0.93 0.14 142)` ≈ #aeffa8 |
| `ink` | headings, body | `oklch(0.2 0.05 262)` |
| `ink-muted` | secondary text (≥ 4.5:1 on white) | `oklch(0.45 0.03 262)` |
| `surface` | page bg | white |
| `surface-alt` | alternating sections, footer | `oklch(0.98 0.008 260)` |
| `line` | borders, dividers | `oklch(0.92 0.015 260)` |

Status colors: use Tailwind `emerald-600` (success), `amber-600` (warning), `rose-600` (error) only for states, never decoration.

## Typography
Cal Sans (`@fontsource/cal-sans`, `font-display`, headings h1-h4, nav, buttons, eyebrow) + Inter Variable (body), self-hosted, latin subsets preloaded. Cal.com-inspired look: floating rounded header bar, 10-12px button radius, pill eyebrow, neutral grays, tight heading tracking. Cal Sans has one weight, so `font-synthesis: none` is set on html. Undo: remove the Cal Sans imports in `Base.astro`, the `--font-display`/base heading rule/eyebrow/btn/header changes in `global.css` and `Header.astro`. Fallback: system UI stack. The 3D bubble text uses Inter too (`bubbles-scene.ts`). A serif display + Plus Jakarta Sans pairing was tried and rolled back (too decorative for the formal tone).

| Role | Class | Mobile → Desktop |
|---|---|---|
| Display / H1 | `h1` | 36 → 60px, bold, tight tracking, `text-balance` |
| H2 | `h2` | 30 → 36px, bold |
| H3 | `text-lg font-semibold` | 18px |
| Lead | `lead` | 18 → 20px, `ink-muted`, `text-pretty` |
| Body | default | 16px / 1.5 |
| Eyebrow | `eyebrow` | 14px, semibold, uppercase, `brand-600` |
| Small | `text-sm` | 14px |

Max line length: `max-w-2xl` for text blocks (~65ch).

## Spacing & layout
- Container: `container-page` → max 1152px (`max-w-6xl`), gutters 16 / 24 / 32px.
- Section rhythm: `section` → 64px mobile, 96px desktop vertical padding.
- Grid: 1 col mobile → 2 (`sm`) → 3 (`lg`). Gap `gap-6` cards, `gap-8` steps.
- 4px base scale; prefer 4, 6, 8, 10, 12, 16, 24 Tailwind steps.
- Breakpoints: Tailwind defaults (`sm` 640, `md` 768, `lg` 1024, `xl` 1280). Design at 360px first.

## Shape & elevation
- Card radius `--radius-card` 16px; buttons fully rounded; feature panels `rounded-3xl`.
- One shadow: `--shadow-card`. No stacked/colored shadows.
- Borders 1px `line`.

## Components
- **Button** — `btn-primary` (brand bg, white text) / `btn-ghost` (text only). Height ≥ 44px. Label = verb + outcome ("Start free trial").
- **Card** — `card`: border + soft shadow + 24px padding. Icon chip 40px `bg-brand-50 text-brand-600`.
- **Header** — sticky, 64px, translucent blur, logo left, nav center (md+), CTA right.
- **FAQ** — native `<details>`; `+` rotates 45° when open.
- **CTA band** — `bg-brand-600` panel, white H2, `brand-100` support text, white button.

## Section order (narrative)
Hero → Channels (one record) → Assistant → Funnel (how it works) → Team (not an agency) → FAQ → Final CTA → Footer. Social proof and pricing are intentionally absent until real proof exists (see `docs/QUSTOMER.md`).

## 3D bubbles (brand motif)
The icon is a rounded speech bubble; the site echoes it in 3D. Colors come from tokens: blue, white, mint, pale blue.
- Hero: cloud of floating bubbles, one "traveler" bubble that follows the scroll through the lanes. Lanes are `[data-bubble-anchor]` elements; move the anchor, the path moves.
- The blue → mint gradient is the logo's own, used on the funnel tiers only. No other gradients.
- Static DOM bubbles are the fallback (no JS, no WebGL, reduced motion). The canvas is decorative (`aria-hidden`).
- Code: `src/scripts/bubbles-scene.ts`, lazy-loaded on idle (~140 KB gzip). Never import `three` elsewhere.

## Languages
English default at `/`, Bahasa Indonesia at `/id`. Copy in `src/i18n/`. Keep lines short: Indonesian runs ~15% longer.

## Imagery & icons
- Product screenshots > stock photos. Export AVIF/WebP via `astro:assets`.
- Hero visual must not push LCP: reserve space with width/height, `fetchpriority="high"`.
- Icons: 24px stroke icons, 2px stroke, round caps, inline SVG, `currentColor`.

## Motion
- Durations 150–250ms, `ease-out`. Only opacity/transform.
- Respect `prefers-reduced-motion` (global reset already in CSS).
- No scroll-jacking, no autoplay video above the fold.

## Voice
Plain, confident, benefit first. Short sentences. Numbers over adjectives ("50% faster replies", not "blazing fast"). Avoid jargon.

## Accessibility
- Text contrast ≥ 4.5:1 (large ≥ 3:1). Visible `:focus-visible` ring (brand-600, 2px).
- Skip link, landmark elements, `aria-labelledby` on sections.
- Decorative SVG `aria-hidden="true"`; meaningful images get real `alt`.

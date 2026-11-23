# Qustomer brand and style guideline

**Version 1.1 · updated 23 Nov 2026** (cool neutrals, Mist accent, new logo, patterns and motif added; see the changelog at the end).

Reference for updating the portal / platform so it matches the landing page (`www.qustomer.id`).
Source of truth in code: `src/styles/global.css` (tokens), `DESIGN.md`, and the components under `src/components`.
Files (served at `https://www.qustomer.id/brand`, source in `public/brand/`): `brand-tokens.css` (drop-in tokens and primitives), `index.html` (visual style guide), `fonts/`, `assets/` (logo, icon, OG image).

## 1. Personality and voice

Qustomer is a **managed service, a team, not a tool**. The look is calm and confident: lots of whitespace, one accent, soft rounded shapes, a chat-bubble motif. The portal is where the team and clients work, so it should feel like the same brand but quieter and denser.

- Plain, benefit-first, short sentences. Numbers over adjectives.
- Write in "we" voice for the service (we set up, we run with you). In the portal, address the user as "you".
- Never imply pricing, proof or metrics that do not exist.
- Avoid filler and hype: no "supercharge", "unlock", "seamless", "effortless", "next-gen", no "Fast. Simple. Powerful." triplets.
- Good: "We reply, book, and follow up on your customer chats." Bad: "Unlock seamless AI-powered customer engagement."
- Tone anchors: *Not an agency. Not a contractor. Not just a tool. Part of your team.*

## 2. Logo and icon

| Asset | File | Use |
|---|---|---|
| Wordmark + icon | `assets/logo-qustomer.svg` (1208×240) | Header, login, emails. Min height 24 px. |
| Icon only | `assets/icon-qustomer.svg` (256×256) | App icon, favicon, avatar, compact sidebar. Min 16 px. |
| Social preview | `assets/og.png` (1200×630) | Link previews. |

- The icon is a rounded speech bubble "Q" with a gradient from Cornflower `#5C88CD` to Citron `#F1C436` (top-right to bottom-left).
- The wordmark text is black (`#000`). On dark backgrounds use a white wordmark and keep the gradient icon.
- Keep clear space of at least half the icon height on all sides. Do not recolor the gradient, stretch, rotate or add shadows.
- Favicon: the icon SVG as is.

## 3. Color

| Token (landing) | Portal variable | Hex | oklch | Role |
|---|---|---|---|---|
| `brand-50` | `--q-brand-50` | `#EDF6FF` | `0.97 0.02 259` | Subtle tint, soft icon chips |
| `brand-100` | `--q-brand-100` | `#D8E9FF` | `0.93 0.04 259` | Tints, decorative fills (not small text on `brand-600`) |
| `brand-500` | `--q-brand-500` | `#5C88CD` | `0.625 0.116 259` | **Primary (Cornflower String)**: illustrations, charts, large fills, bubbles |
| `brand-600` | `--q-brand-600` | `#3F6EB6` | `0.54 0.125 259` | Buttons, links, focus ring, active nav (AA with white) |
| `brand-700` | `--q-brand-700` | `#2B569A` | `0.46 0.12 259` | Hover / pressed |
| `mint-300` | `--q-citron-300` | `#F1C437` | `0.837 0.156 90` | **Secondary (Mellow Citron)**: highlights, assistant bubble, tags |
| `mint-100` | `--q-citron-100` | `#FFF5D7` | `0.97 0.04 90` | Soft yellow panels and tags |
| `mist-300` | `--q-mist-300` | `#D6DFEC` | `0.9 0.02 259` | **Accent / decoration (Mist)**: illustrations, empty states. A cool light blue-grey, same hue as the primary |
| `mist-100` | `--q-mist-100` | `#F3F5F9` | `0.97 0.006 259` | Decorative tint |
| `ink` | `--q-ink` | `#0F1216` | `0.18 0.01 262` | Headings, body |
| `ink-muted` | `--q-ink-muted` | `#5A5E63` | `0.48 0.01 262` | Secondary text |
| `surface` | `--q-surface` | `#FFFFFF` | `1 0 0` | Page background |
| `surface-alt` | `--q-surface-alt` | `#F5F7F9` | `0.975 0.004 259` | Alternating sections, soft cards, table headers (cool neutral) |
| `line` | `--q-line` | `#E2E5E9` | `0.92 0.006 259` | Borders and dividers (cool neutral) |

The token names `mint-*` in the landing repo are legacy: they now hold the yellow. Use the `citron` names in the portal.

**Status colors** (states only, never decoration): success `#059669`, warning `#D97706`, danger `#E11D48` (Tailwind emerald-600 / amber-600 / rose-600). Use them as a small dot, icon or text, with a light tint of the same hue as background if needed.

### Rules
1. **One accent per view.** Cornflower marks action and emphasis. Yellow is a highlight for one or two elements per screen (a badge, the assistant's side of a conversation, a chart series), never a page background.
2. **Text color pairs** (contrast measured against WCAG):
   - `ink` on `surface` 18.8:1, `ink-muted` on `surface` 6.5:1, on `surface-alt` 6.1:1.
   - White on `brand-600` 5.1:1 (buttons), on `brand-700` 7.2:1. White on `brand-500` is only 3.6:1: **large text only (≥ 24 px, or 19 px bold)**.
   - `brand-600` text on `surface` 5.1:1, on `brand-50` 4.7:1.
   - `ink` on `citron-300` 11.4:1, on `mist-300` 14.0:1. **Never use yellow as text on white.**
   - `brand-100` on `brand-600` is only 4.1:1: use `brand-50` or white for small text on a blue band.
3. The blue → yellow gradient belongs to the logo and the funnel illustration only. No other gradients, glows or blobs.
4. Backgrounds are white, `surface-alt` (cool), or a `brand-600` band for a closing call-to-action. Dark mode is **not** defined yet.
5. Data viz order: `brand-500`, `citron-300`, `mist-300`, `brand-700`, `ink-muted`. Always label series, do not rely on color alone.

## 4. Typography

| Role | Font | Notes |
|---|---|---|
| Display (headings, nav, buttons, pills, numbers in cards) | **Cal Sans** 400 (`fonts/cal-sans-latin-400.woff2`) | Single weight. Tracking `-0.015em`. Never fake bold (`font-synthesis: none`). |
| Body and UI text | **Inter Variable** (`fonts/inter-variable-latin.woff2`) | Weights 400 / 500 / 600. |

Both are SIL Open Font License and self-hosted. Subsets: latin. Preload the two woff2 files.

### Scale (desktop → mobile)
| Role | Size / line-height | Mobile | Use |
|---|---|---|---|
| H1 | 72 / 1.05 (Cal Sans) | 36 | Landing hero only. In the portal use H2 for page titles. |
| H2 | 48 / 1.08 | 30 | Page and section titles |
| H3 (sub-section) | 30 / 1.15 | 30 | Block titles |
| H4 (card/step title) | 24 / 1.2 | 24 | Card titles, steps |
| Lead | 20 / 1.4, `ink-muted` | 18 | Line under a title |
| Body large | 18 / 1.5 | 18 | Key list items |
| Body | 16 / 1.5 (leading-relaxed 1.625 in long text) | 16 | Default |
| Small | 14 / 1.5 | 14 | Labels, pills, helper text |
| Caption | 12 / 1.4 | 12 | Captions, badges. Never below 12 px. |

- The landing hero H1 steps 36 px (mobile) → 60 px (≥ 640) → 72 px (≥ 1024). Other titles step 30 → 48 px at 640.
- Keep paragraphs to ≤ 65 characters per line (`max-w-2xl` for text blocks).
- Use `text-wrap: balance` on titles and `pretty` on paragraphs.
- Hierarchy rule: each section has one largest text (its title). Weight and size come before color.

## 5. Layout and spacing

- Container: max width **1152 px**, gutters 16 / 24 / 32 px. Grid: 12 columns, gaps 24–64 px. Design for 360 px first.
- Base unit 4 px; common steps 4, 6, 8, 10, 12, 16, 24, 32, 40, 48, 64, 96.
- Section padding: 80 px (mobile) / 112 px (desktop) on the landing page; **portal pages can use 32–48 px** between blocks.
- Rhythm inside a block (landing values, scale down for dense portal screens):
  - label/eyebrow → title 20 px; title → lead 20–24 px; lead → content 48–64 px
  - between blocks inside a section 96–128 px
  - list items 24 px apart (or 16 px with hairlines); card padding 24–32 px
- Prefer whitespace and background shifts over lines. Hairlines (`line`) only where they add structure (tables, accordions).

## 6. Shape and elevation

| Element | Radius |
|---|---|
| Buttons, fields | 12 px |
| Small tiles | 16 px |
| Cards | 20 px (`--q-radius-card`) |
| Panels, FAQ items, big tiles | 24 px |
| Pills, tags, avatars | fully round |

One shadow only: `0 1px 2px rgb(0 0 0 / .04), 0 8px 24px -8px rgb(0 0 0 / .08)` (`--q-shadow-card`). Borders are 1 px `line`. No stacked or colored shadows.

## 7. Components

Use the recipes in `brand-tokens.css` (`.q-*` plain CSS) or the Tailwind `@utility` blocks in the same file.

**Buttons**: min height 44 px, radius 12 px, Cal Sans 15 px, padding 10 × 20. Primary = `brand-600` bg, white text, hover `brand-700`. Ghost = white bg, `line` border, hover `surface-alt`. One primary button per view. Label = verb + outcome ("Book a discovery call").

**Pill / eyebrow**: round, 1 px `line` border, white bg, Cal Sans 14 px `ink-muted`, 6 px `brand-500` dot at the start.

**Tags**: round, 14 px semibold. Soft = `citron-100` bg; outline = 1 px `line`. Status uses a colored dot plus text.

**Cards**: white, 1 px `line`, 20 px radius, shadow-card, padding 24–28 px. For quieter blocks use a **soft card**: `surface-alt` bg, 24 px radius, no border, no shadow.

**Tiles** (grid of short facts): `surface-alt`, 16 px radius, padding 24–28, min height 144 px, small index number top-left (`ink-muted`, Cal Sans 14), label bottom-left (Cal Sans 20).

**FAQ / accordion item**: soft card (`surface-alt`, 24 px radius, padding 20 × 28), question Cal Sans 18–20 px, round white 36 px chevron button on the right (shadow-card) that rotates 180° when open; 12 px gap between items. Native `<details>`.

**Checklist rows**: 24 px round check badge (filled `brand-600` with white check, or soft `brand-50` with `brand-600` check) + 18 px text, 24 px between rows.

**Language / segment pill**: round, 1 px `line`, 40 px high, 24 px round flag + code (14 px semibold). One pill that toggles to the other language.

**Header**: floating rounded-2xl bar, white at 80% with blur, 1 px `line`, shadow-card, 56 px high, sticky.

**Forms**: `.q-field` 44 px min height, 12 px radius, 1 px `line` border, placeholder `ink-muted`. Focus = 2 px `brand-600` outline offset 2 px.

**Chat bubbles** (brand motif): customer = `brand-500` bg, white text, tail bottom-left; assistant/team = `citron-300` bg, `ink` text, tail bottom-right. Radius 24 px with one 6 px corner. Tag line above in 12 px semibold uppercase `ink-muted` (or white at 80% on blue).

**Customer record card**: white card, avatar circle (`brand-600`, white initial), name Cal Sans 20, stage pill (`citron-300`), vertical timeline with 12 px dots (ring `ink`), footer row on `surface-alt` ("Next …").

**Outlined panel (two columns)**: 1 px `line` border, 24 px radius, no fill, padding 32 / 48 px; two columns with a 1 px `line` divider. Column header = a pill (hero-style icon + label such as "We" / "You") plus a short descriptor, then a checklist. Used for "Who does what"; use it for any side-by-side comparison.

**Step list (horizontal)**: four columns, each opened by a 1 px `ink` rule; small grey index (`01`), 24 px Cal Sans title, 16 px description, outline tag. 40 px column gap, 64 px row gap on narrow screens. Monochrome: no colored cards for steps.

**Hand-drawn underline**: one wavy 2.5 px stroke in `brand-600` under the single phrase you want remembered (hero: "Part of your team."). It draws itself once (0.9 s). Use at most once per page.

**Hero**: pill eyebrow → H1 (statement of what we do) → one-sentence lead → primary + ghost button → a one-line strip of four short differentiators, the last one in `brand-600` with the underline.

**CTA band**: `brand-600` rounded-3xl panel, white title, `brand-50` supporting text, white button with `brand-700` text.

## 8. Brand motif: chat bubbles

The icon is a speech bubble, and the site echoes it in 3D. Colors come from tokens.

- **Speakers**: customer = blue (`brand-500`, tail bottom-left), assistant/team = citron (`citron-300`, tail bottom-right). When the speaker changes, the bubble flips horizontally and swaps color.
- **Background cloud** (hero only): blue, white, mist and citron bubbles floating at different depths. The main bubble sits on the focal plane and stays sharp; the others blur with distance from it and with their size (depth of field), so attention goes to the main message.
- **Message copy** inside bubbles is short (≤ 12 words) and realistic: a customer asking a real question, a short assistant reply. Label every bubble with its source (WhatsApp, Website, Assistant) in 12 px uppercase.
- **In the portal** use the flat bubble component (`.q-bubble`). Do not use the 3D scene or blur inside product screens.
- The scene is decorative: hidden from assistive tech, static (flat bubbles) without JavaScript or with reduced motion.

## 9. Iconography

24 px stroke icons, 2 px stroke, round caps and joins, `currentColor`, inline SVG. Decorative icons get `aria-hidden`. The Qustomer icon can appear inside a pill or as the avatar of the team ("We"). Flags are round, 20–24 px.

## 10. Motion

- Durations 150–250 ms, `ease-out`; only opacity and transform. Entrances: rise 14 px + fade, 0.6 s, staggered by 0.35 s; "pop" for chat replies (scale from 0.7 with a small overshoot).
- Animations that explain (a conversation, a funnel) start when they scroll into view.
- Always respect `prefers-reduced-motion`: show the final state, no animation.

## 11. Accessibility

- WCAG 2.2 AA. Text contrast ≥ 4.5:1 (large ≥ 3:1). Visible focus ring (`brand-600`, 2 px).
- Touch targets ≥ 44 px (36 px only for dense secondary controls).
- Landmarks, one `h1` per page, labelled sections, meaningful `alt` text; decorative SVG `aria-hidden`.

## 12. Applying this to the portal

1. Add `brand-tokens.css` (or the Tailwind block) and the two font files. Replace the old blue and green tokens; map any old "success green" to the status color, not to citron.
2. App shell: white page background, `surface-alt` sidebar or section backgrounds, `line` dividers, active nav item = `brand-50` background with `brand-600` text.
3. Tables: header row on `surface-alt`, 1 px `line` rows, 14 px text, row height 48–56 px. Numbers right-aligned with tabular figures.
4. Primary action = `brand-600`. Secondary = ghost. Destructive = danger color outline, filled only in the confirmation dialog.
5. Empty states: `mist-300` or `mist-100` illustration/background with a short Cal Sans title and one primary button.
6. Conversation views: customer bubbles blue, team/assistant bubbles citron, matching the landing page.
7. Badges for pipeline stage: soft pills; use the funnel order (Enquiry → Replied → Qualified → Booked → Followed up) with blue → citron progression.
8. Keep copy short; Indonesian runs about 15% longer than English, so leave room in buttons and tabs.

## 13. Known gaps / decisions still open

- No dark mode palette yet.
- The chat widget (`app.qustomer.id/widget.js`) still uses `data-color="#4f46e5"` (indigo). To match the brand use `#3F6EB6` (`brand-600`).
- Token names `mint-*` in the landing repo are legacy and should be renamed `citron-*` when convenient.
- The 3D bubble scene is landing-only; the portal uses the flat bubble component.

## 14. Quick do and don't

| Do | Don't |
|---|---|
| One primary button per view, `brand-600` | Several accent colors competing in one view |
| Cool neutrals (`surface-alt`, `line`) and generous whitespace | Warm / beige tints on large areas (removed in v1.1) |
| Citron as a small highlight (tag, assistant bubble) | Citron as page background or as text on white |
| Cal Sans for titles, Inter for reading | Faux bold on Cal Sans, text under 12 px |
| Soft cards without border, or outlined panels without fill | Heavy shadows, glows, glassmorphism, extra gradients |
| Short, specific copy | Hype words, invented numbers, logos or testimonials |

## 15. Changelog

- **1.1 (23 Nov 2026)**: removed the warm travertine/sand tones; `surface-alt` and `line` are now cool neutrals; decorative accent is **Mist** (`#D6DFEC`). New logo, icon and favicon (Cornflower → Citron gradient). Added patterns (outlined panel, horizontal steps, hand-drawn underline, hero), the bubble motif with depth of field, voice examples and a do/don't table. Footer and CTA small text raised to `brand-50` on `brand-600` for AA.
- **1.0 (23 Nov 2026)**: first guideline: cornflower / citron / travertine palette, type scale, spacing, components.

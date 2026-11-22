---
name: landing-section
description: Build or edit a landing page section (hero, features, pricing, testimonials, logos, FAQ, CTA) in this Astro + Tailwind v4 project. Use whenever adding/changing anything under src/components/sections or src/pages.
---

# Build a landing section

Read `DESIGN.md` tokens first. Follow steps in order.

## 1. File
- `src/components/sections/<Name>.astro`, PascalCase. One section per file.
- Data (items, copy) as a `const` array in frontmatter. Shared brand text → `src/config/site.ts`.
- Mount in `src/pages/index.astro` in narrative order: Hero → Logos → Features → How → Testimonials → Pricing → FAQ → CTA.

## 2. Markup skeleton
```astro
<section id="slug" class="section" aria-labelledby="slug-title">
  <div class="container-page">
    <div class="mx-auto max-w-2xl text-center">
      <p class="eyebrow">Label</p>
      <h2 id="slug-title" class="h2 mt-3">Benefit-led headline</h2>
      <p class="lead mt-4">One-sentence support line.</p>
    </div>
    <!-- content -->
  </div>
</section>
```
- Alternate `bg-surface-alt` on every other section.
- Exactly one `<h1>` per page (Hero). Sections use `<h2>`, cards `<h3>`.
- Lists of things → `<ul>/<ol>`, not div soup.

## 3. Styling
- Tokens only: `brand-*`, `ink`, `ink-muted`, `surface`, `surface-alt`, `line`. No raw hex, no arbitrary colors.
- Primitives: `container-page section eyebrow h1 h2 lead btn-primary btn-ghost card`.
- Mobile first; add `sm: md: lg:` upward. Test at 360px.
- Tap targets ≥ 44px (`min-h-11`).

## 4. Performance (hard rules)
- Zero JS by default. Interactivity → native HTML (`<details>`, `<dialog>`, CSS `:has`, anchors) first.
- Need JS? Tiny inline `<script>` in the component (Astro bundles + dedupes). Framework island only with `client:visible`, never `client:load` below the fold.
- Images: `import { Image } from 'astro:assets'` with source in `src/assets/`. Always `alt`, `width`, `height`. Hero image: `loading="eager" fetchpriority="high"`; all others lazy (default).
- Icons: inline SVG, `aria-hidden="true"`. No icon fonts, no icon libraries at runtime.
- No new web fonts. No third-party scripts without asking.

## 5. SEO
- Headline contains the primary keyword naturally.
- FAQ / Product / Review data → add matching JSON-LD via `<Base jsonLd={...}>` (see `index.astro` FAQPage).
- Internal links use descriptive text, never "click here".

## 6. Verify
`npm run build` must pass with 0 errors/warnings. Then run the `seo-perf-audit` skill.

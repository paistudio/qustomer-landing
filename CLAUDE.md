# Qustomer Landing — Claude guide

Marketing landing page. Goal: Lighthouse 95+ on all categories, 0 KB JS by default, strong SEO.

## Talk style
Use `caveman` skill for chat (terse, no filler). Code, page copy, docs, commits stay normal English.

## Stack
- Astro 7 (static output, `src/pages` routing) · Tailwind CSS v4 via `@tailwindcss/vite` · TypeScript strict
- `@astrojs/sitemap` · self-hosted Cal Sans (headings) + Inter Variable (body), latin preloaded
- Path alias `@/*` → `src/*`

## Commands
- `npm run dev` — dev server :4321
- `npm run build` — `astro check` + build to `dist/` (must pass clean)
- `npm run preview` — serve `dist/`

## Map
- `docs/QUSTOMER.md` — product, positioning, copy rules, decisions, TODOs. **Read before writing copy.**
- `src/config/site.ts` — brand, contact, language helpers. **Single source of truth.**
- `src/i18n/{en,id}.ts` — all page copy. English default (`/`), Indonesian (`/id`). `id` is typed against `en`.
- `src/scripts/bubbles-scene.ts` — lazy three.js hero scene. `src/components/Landing.astro` composes the page.
- `src/i18n/pages-{en,id}.ts` — copy for inner SEO/legal pages (9 per language, Indonesian slugs). `src/config/pages.ts` registry, `src/pages/[...slug].astro` route, `src/components/InfoPage.astro` template. Footer links live in `footer.cols` of `en.ts`/`id.ts` and must match page slugs.
- `src/pages/login.astro` — superadmin sign-in prototype (noindex, no auth wired).
- `src/styles/global.css` — `@theme` tokens + `@utility` primitives. Mirror of `DESIGN.md`.
- `public/brand/` — brand style guide for the portal (served at `/brand`, noindex): `index.html`, `brand-tokens.css`, `BRAND-GUIDELINE.md`, fonts, logo assets. Update it when tokens in `global.css` change.
- `src/layouts/Base.astro` — html shell, font preload, header/footer
- `src/components/SEO.astro` — title, meta, canonical, OG/Twitter, JSON-LD
- `src/components/sections/*` — one section per file (Hero, Channels, Assistant, Funnel, Team, FAQ, CTA)
- `src/pages/` — `index`, `404`, `robots.txt.ts`
- `.claude/skills/` — `caveman`, `landing-section`, `kill-slop`, `seo-perf-audit`, `threejs-3d`

## Rules
1. Read `DESIGN.md` before any UI work. Use the `landing-section` skill for sections, then the `kill-slop` checklist before finishing.
2. Tokens only — no hex/rgb or arbitrary color values in components.
3. No client JS unless native HTML/CSS can't do it (exceptions: the lazy 3D hero scene, the tiny language redirect, the on-scroll visual observer, and Vercel Web Analytics). Islands: `client:visible`/`client:idle` only. Ask before adding any UI framework.
4. Images via `astro:assets` `<Image>` from `src/assets/`, always `alt` + dimensions.
5. No new dependencies, fonts, analytics or third-party scripts without asking.
6. One `<h1>` per page; every page passes `lang`, `title`, `description` to `<Base>`. Every user-facing string goes in both `src/i18n/` files.
7. Tailwind v4: custom classes = `@utility`, important = suffix `px-4!`, config lives in CSS (no `tailwind.config.js`).
8. After changes: `npm run build`. Before shipping: `seo-perf-audit` skill.

## Token saving
- Don't read `node_modules/`, `dist/`, `.astro/`, `package-lock.json`.
- Edit with targeted diffs; don't re-read files just edited.
- Prefer `grep` over opening whole files.

## Before launch (TODO)
- Set `PUBLIC_SITE_URL` in deploy env
- Replace placeholder copy in `site.ts` + sections; add `/privacy`, `/terms`

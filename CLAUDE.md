# Qustomer Landing — Claude guide

Marketing landing page. Goal: Lighthouse 95+ on all categories, 0 KB JS by default, strong SEO.

## Talk style
Use `caveman` skill for chat (terse, no filler). Code, page copy, docs, commits stay normal English.

## Stack
- Astro 7 (static output, `src/pages` routing) · Tailwind CSS v4 via `@tailwindcss/vite` · TypeScript strict
- `@astrojs/sitemap` · self-hosted Inter Variable (`@fontsource-variable/inter`, latin preloaded)
- Path alias `@/*` → `src/*`

## Commands
- `npm run dev` — dev server :4321
- `npm run build` — `astro check` + build to `dist/` (must pass clean)
- `npm run preview` — serve `dist/`

## Map
- `src/config/site.ts` — brand, nav, CTA, SEO defaults. **Single source of truth.**
- `src/styles/global.css` — `@theme` tokens + `@utility` primitives. Mirror of `DESIGN.md`.
- `src/layouts/Base.astro` — html shell, font preload, header/footer
- `src/components/SEO.astro` — title, meta, canonical, OG/Twitter, JSON-LD
- `src/components/sections/*` — one section per file
- `src/pages/` — `index`, `404`, `robots.txt.ts`
- `.claude/skills/` — `caveman`, `landing-section`, `kill-slop`, `seo-perf-audit`

## Rules
1. Read `DESIGN.md` before any UI work. Use the `landing-section` skill for sections, then the `kill-slop` checklist before finishing.
2. Tokens only — no hex/rgb or arbitrary color values in components.
3. No client JS unless native HTML/CSS can't do it. Islands: `client:visible`/`client:idle` only. Ask before adding any UI framework.
4. Images via `astro:assets` `<Image>` from `src/assets/`, always `alt` + dimensions.
5. No new dependencies, fonts, analytics or third-party scripts without asking.
6. One `<h1>` per page; every page passes `title`/`description` to `<Base>`.
7. Tailwind v4: custom classes = `@utility`, important = suffix `px-4!`, config lives in CSS (no `tailwind.config.js`).
8. After changes: `npm run build`. Before shipping: `seo-perf-audit` skill.

## Token saving
- Don't read `node_modules/`, `dist/`, `.astro/`, `package-lock.json`.
- Edit with targeted diffs; don't re-read files just edited.
- Prefer `grep` over opening whole files.

## Before launch (TODO)
- Set `PUBLIC_SITE_URL` in deploy env
- Add `public/og.png` (1200×630)
- Replace placeholder copy in `site.ts` + sections; add `/privacy`, `/terms`

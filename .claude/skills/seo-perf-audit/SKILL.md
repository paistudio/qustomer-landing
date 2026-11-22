---
name: seo-perf-audit
description: Check the built landing page for SEO, accessibility and performance regressions before shipping. Use after any page change, before commit/deploy, or when user asks "audit", "lighthouse", "check SEO", "is it fast".
---

# SEO + perf audit

Run, report only failures (caveman style), fix, re-run.

```bash
npm run build
npx astro preview --port 4321 &
npx -y lighthouse http://localhost:4321 --only-categories=performance,seo,accessibility,best-practices --preset=desktop --quiet --chrome-flags="--headless" --output=json --output-path=./.lighthouse.json
```

## Budgets (fail if missed)
| Metric | Budget |
|---|---|
| Lighthouse perf / SEO / a11y / best-practices | ≥ 95 / 100 / 100 / 100 |
| LCP | < 1.8s (mobile < 2.5s) |
| CLS | < 0.05 |
| TBT | < 100ms |
| JS shipped on `/` | 0 KB (hard ceiling 15 KB gz) |
| CSS total | < 20 KB gz |
| HTML `/` | < 50 KB |

Quick size check: `find dist -name '*.js' | xargs -r du -ch | tail -1` and `gzip -c dist/index.html | wc -c`.

## Manual checklist (grep `dist/index.html`)
- [ ] One `<h1>`; headings don't skip levels
- [ ] `<title>` 50–60 chars, meta description 140–160 chars
- [ ] `rel="canonical"` is absolute production URL
- [ ] OG + Twitter image present (`public/og.png` 1200×630 exists)
- [ ] JSON-LD parses (`Organization` + page-specific)
- [ ] `sitemap-index.xml` and `robots.txt` in `dist/`
- [ ] Every `<img>` has `alt`, `width`, `height`; only hero is eager
- [ ] No render-blocking third-party `<script>` / `<link>`
- [ ] Contrast ≥ 4.5:1 for body text

Delete `.lighthouse.json` after.

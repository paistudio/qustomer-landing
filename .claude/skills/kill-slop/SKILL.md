---
name: kill-slop
description: Stop generic "AI-made" landing page design. Use before and after writing any UI (sections, components, pages, styles), when reviewing a design, or when user says "slop", "looks generic", "looks AI", "make it look designed". Pairs with DESIGN.md and landing-section.
---

# Kill slop

Slop = the default output every AI produces. It looks fine, it means nothing, and visitors spot it instantly. Goal: the page should look like *this* product, made by a person with taste.

## Banned by default (needs a real reason to use)
**Layout**
- Everything centered. Center the hero at most; other sections lead with left-aligned text or an asymmetric split.
- 3 identical icon cards in a row ("Fast / Secure / Scalable"). Use a bento grid of different sizes, a product screenshot with callouts, or a single strong list.
- Each section is eyebrow → H2 → subtitle → grid on repeat. Vary the rhythm: full-bleed, split, dense list, a single big statement.
- Equal padding everywhere. Let some sections breathe and keep others tight.

**Decoration**
- Purple-to-blue gradients, gradient text, glowing radial blobs, aurora backgrounds, grain on everything.
- Glassmorphism cards, neon borders, oversized drop shadows.
- Generic stroke-icon tiles (sparkles ✨, rocket, lightning, shield) standing in for real product imagery.
- Emoji used as icons, stray "→" in every link.
- Fake browser chrome or dashboards full of lorem charts.

**Type and copy**
- UPPERCASE eyebrow over every heading.
- Headlines like "Supercharge / Unlock / Elevate / Revolutionize your X", "The future of X", "X, reimagined".
- Filler triplets ("Fast. Simple. Powerful."), "Seamless", "Effortless", "Next-gen", "AI-powered" with no proof.
- Fake testimonials, invented logo walls and metrics. Use placeholders clearly marked `TODO`, never fabricated proof.

## Do instead
1. **Show the product.** A real screenshot or crop of the inbox beats any illustration. Annotate it.
2. **One idea per section, said specifically.** "Reply to WhatsApp and email from one queue" beats "Unified communications".
3. **Numbers with sources.** "Median first reply 2m 14s (internal data, Q3)" beats "blazing fast".
4. **Type does the work.** Strong size contrast (H1 ≥ 3× body), tight leading on headlines, a measure of 60–70ch for text. Weight and size come before color.
5. **Restrained color.** Neutrals plus one accent from DESIGN.md. The accent marks action and emphasis only, never backgrounds everywhere.
6. **Real detail.** Specific microcopy, proper quotes (" "), en dashes, real names on testimonials, tabular numbers for stats.
7. **Intentional asymmetry.** A 7/5 split, offset images, a big number next to small text.
8. **Few borders, one shadow.** Separate with whitespace and background shifts before adding lines.

## Review checklist (run after building UI)
Answer each honestly; if any is "yes", fix it before finishing:
- [ ] Could you swap in another SaaS name without changing anything else on the page?
- [ ] Is there a gradient, glow or blob that serves no purpose?
- [ ] Are there 3+ sections with the same centered eyebrow/H2/grid shape?
- [ ] Is there an icon card grid where a screenshot or concrete list would say more?
- [ ] Does any headline use a banned verb or a filler triplet?
- [ ] Is any proof (logo, quote, metric) invented?
- [ ] Is more than one element per viewport shouting in the accent color?

Report findings as: `file:line — slop — fix`. Then apply the fixes.

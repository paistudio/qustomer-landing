# Qustomer: product and brand context

Read this before writing copy or designing sections. It is the short, website-safe version of the business plan.
Full source: "Business Plan: AI Lead Management & Appointment Booking Service" (Claude doc, https://claude.ai/artifact/PJx8SQEGUpdz9EmmK7M2pk). The companion Technical PRD covers the platform itself.

## What Qustomer is
A managed service, not software. Qustomer sits inside a client's customer conversations and makes sure every enquiry, from any channel, gets a fast reply, gets qualified, gets booked and gets followed up until it is a yes or a clear no. Humans run every consultation and close every sale.

**Headline idea (from the owner):** *Not an agency. Not a contractor. Part of your team.*
Helps clients manage leads and customers. This line is adapted from the Customr model the plan studied; the owner chose it as the main highlight.

## What it does (website-safe claims)
- Captures customers from WhatsApp, website embeds/forms, social media and email into **one customer record** with full cross-channel history.
- An **assistant (bot)** that answers from client-approved information only, follows up on a schedule, sends offers on a schedule, and books appointments into the client's calendar.
- **Hands over to a human** on price talks, complaints, regulated topics, repeated confusion, or when asked. Handover includes a summary.
- Reminders, rescheduling, no-show recovery, nurture and win-back follow-ups.
- Funnel view: enquiry → replied → qualified → booked → followed up.
- Languages: Bahasa Indonesia and English.

## What it is not
Not a chatbot you configure. Not a CRM licence. Not a dashboard the client runs. Not an ads agency that hands over leads and disappears.

## Rules for public copy
- **Positioning: a service, not a tool.** Qustomer is a team that implements and runs this for the client and customizes it to their business process. Write in "we" voice (we set up, we build, we run with you). Never sell "the assistant", "the CRM" or "the dashboard" as a product the client operates. The Process section (`#process`) carries this: learn, build to fit, launch with the team, keep improving.
- The assistant never negotiates, closes, gives binding quotes, or claims to be human. It says it is automated if asked.
- WhatsApp is the primary channel (official WhatsApp Business Platform). Website chat, email and social are supported as feeds into the same record; Instagram DM full AI handling is a v2 item, so do not promise it.
- **Never publish pricing, unit economics, TAM/SAM or competitor analysis.** Those sections of the plan are internal only.
- **No invented proof.** No fake logos, testimonials, metrics or case studies. Use a clearly marked TODO until the pilot produces real ones.
- "Free audit" or "free discovery" is an open decision in the plan. Do not promise "free" yet. "No pitch, just a conversation" is the owner's own draft line and is fine.
- Voice: plain, confident, benefit first, short sentences. Numbers over adjectives, but only real ones.

## Two entry stories (use both, not just the first)
1. **The ad-spender.** Pays for every click, loses leads to slow replies.
2. **The everyday-enquiry business.** Real leads already message them (after a treatment, at an exhibition, from referrals) and go cold because nobody follows up or offers the next step. Not yet validated by research; keep wording observational.

Target clients: service businesses with consultation-led sales (clinics, property, education, home services, professional services). Primary market Indonesia.

## Brand
- Name: **Qustomer** (domain direction: qustomer.id). The final name and domain are still to be confirmed in the plan.
- Logo assets: `src/assets/logo-qustomer.svg` (wordmark), `src/assets/icon-qustomer.svg` (icon), `public/favicon.svg` (icon).
- Palette follows the logo gradient: blue `#1A6FFB` → mint `#AEFFA8`. Tokens in `src/styles/global.css`, spec in `DESIGN.md`.
- The icon is a rounded speech-bubble "Q". The 3D chat bubbles on the site echo it.

## Website decisions (this repo)
- **Languages:** English is the default at `/`; Bahasa Indonesia at `/id`. A tiny inline script on `/` redirects to `/id` when the browser language is Indonesian and the visitor has not picked a language. The header switch stores the choice in `localStorage` (`qustomer-lang`). Copy lives in `src/i18n/en.ts` and `src/i18n/id.ts` (same shape, `id` is typed against `en`).
- **Hero 3D:** many floating 3D chat bubbles (customer messages). One bubble is the "traveler": it follows the scroll through the Channels → Assistant → Funnel sections, shrinks through the funnel, and ends as "Booked". Scene code: `src/scripts/bubbles-scene.ts`, lazy-loaded when idle. Positions come from `[data-bubble-anchor]` elements in the sections, so moving a lane moves the bubble's path. Fallback (no WebGL, reduced motion, no JS): static DOM bubbles in the hero.
- **Page order:** Hero → Channels (one record) → Assistant → Funnel (how it works) → Team (not an agency) → FAQ → Final CTA.
- **Login:** `/login` is a superadmin sign-in **prototype** (noindex, excluded from sitemap and robots). No auth is wired; the form is intercepted client-side. Build real auth later.
- **Prototype state:** copy is real draft copy, but nothing is functional (no forms, no backend). The CTA is a `mailto:` placeholder.

## Booking
Every CTA (header, hero, closing CTA) goes to `/book-discovery-call` (EN) or `/id/jadwalkan-discovery-call` (ID), via `bookPath(lang)` in `src/config/site.ts`. The page embeds the Cal.com event `paistudio/qustomer-discovery-call` (third-party script, loaded only there, on idle). Privacy policy mentions Cal.com. Contact email remains in the footer and on the book page as a fallback.

## Inner pages (built)
Services: whatsapp-lead-management, lead-follow-up, appointment-booking, whatsapp-business-api. Industries: beauty-wellness, education (**placeholders, confirm real target industries**). Guide: lead-response-time. Legal: privacy, terms (**drafts, `noindex` and out of the sitemap until counsel reviews; fill every `[TODO]` (entity name/address, data contact, retention, dispute forum), then remove `noindex` in `pages-*.ts` and the filter in `astro.config.mjs`**). Indonesian versions use Indonesian slugs under `/id/`. SEO rules: title <= 60 chars, description 110-160, one h1, hreflang pairs via `alternates`.

## Open TODOs
- Contact email is `team@qustomer.id` (`site.email` in `src/config/site.ts`); confirm the mailbox exists. Add a real contact flow.
- Add `public/og.png` (1200×630); set `PUBLIC_SITE_URL` in deploy env.
- Add `/privacy` and `/terms` (both languages) and link them in the footer.
- Confirm final name and domain.
- Replace placeholder FAQ answers after the pilot; add real proof when it exists.
- Decide on "free audit" wording.
- Real superadmin auth, roles, and the app behind `/login`.

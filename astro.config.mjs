// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? 'https://qustomer.id',
  trailingSlash: 'never',
  build: { inlineStylesheets: 'auto', format: 'directory' },
  compressHTML: true,
  image: { responsiveStyles: true },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', id: 'id' } },
      // Keep noindex pages out of the sitemap. TODO remove privacy/terms entries once legal review is done.
      filter: (page) => !/\/(login|privacy|terms|id\/privasi|id\/syarat)$/.test(new URL(page).pathname),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});

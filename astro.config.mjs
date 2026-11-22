// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? 'https://qustomer.example.com',
  trailingSlash: 'never',
  build: { inlineStylesheets: 'auto', format: 'file' },
  compressHTML: true,
  image: { responsiveStyles: true },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});

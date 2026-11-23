// Registry for inner pages (services, industries, guide, legal). Copy lives in src/i18n/pages-*.ts.
import { pagesEn, type PageCopy, type PageKey, type PagesBundle } from '@/i18n/pages-en';
import { pagesId } from '@/i18n/pages-id';
import type { Lang } from '@/config/site';

const bundles: Record<Lang, PagesBundle> = { en: pagesEn, id: pagesId };

export const getPages = (lang: Lang): PageCopy[] => bundles[lang].pages;
export const getPagesUi = (lang: Lang) => bundles[lang].ui;

export const pagePath = (lang: Lang, key: PageKey): string => {
  const p = bundles[lang].pages.find((x) => x.key === key);
  if (!p) throw new Error(`Unknown page key: ${key}`);
  return lang === 'en' ? `/${p.slug}` : `/id/${p.slug}`;
};

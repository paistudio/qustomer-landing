// Single source of truth for brand + SEO. Edit here, not in components.
// Page copy per language lives in src/i18n/*.ts (same shape; `id` is typed against `en`).
import { en } from '@/i18n/en';
import { id } from '@/i18n/id';

export type Lang = 'en' | 'id';

export const site = {
  name: 'Qustomer',
  domain: 'qustomer.id',
  email: 'hello@qustomer.id', // TODO confirm contact address
  twitter: '@qustomer',
  ogImage: '/og.png', // TODO 1200x630, put in /public
  themeColor: '#1a6ffb', // logo blue
  defaultLang: 'en' as Lang,
  langStorageKey: 'qustomer-lang',
} as const;

const locales = { en, id } as const;

export const getCopy = (lang: Lang) => locales[lang];
export const pathFor = (lang: Lang) => (lang === 'en' ? '/' : '/id');
export const contactHref = `mailto:${site.email}`;
/** Every "talk to us" CTA points here. */
export const bookPath = (lang: Lang) => (lang === 'en' ? '/book-discovery-call' : '/id/jadwalkan-discovery-call');
/** Full list of what we do. */
export const servicesPath = (lang: Lang) => (lang === 'en' ? '/what-we-do' : '/id/layanan-kami');
/** Cal.com event (embedded on the book page). */
export const cal = { link: 'paistudio/qustomer-discovery-call', namespace: 'qustomer-discovery-call', origin: 'https://app.cal.com', url: 'https://cal.com/paistudio/qustomer-discovery-call' } as const;

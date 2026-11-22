// Single source of truth for brand + SEO. Edit here, not in components.
export const site = {
  name: 'Qustomer',
  tagline: 'Every customer conversation, one inbox.',
  description:
    'Qustomer unifies chat, email and WhatsApp into one fast inbox so your team answers customers quicker.',
  locale: 'en_US',
  lang: 'en',
  twitter: '@qustomer',
  ogImage: '/og.png', // 1200x630, put in /public
  themeColor: '#4f46e5',
  nav: [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: { label: 'Start free trial', href: '#get-started' },
} as const;

import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'hi'],
  
  // Used when no locale matches
  defaultLocale: 'en',
  
  // Always show locale prefix in URLs (e.g., /en/about, /es/acerca)
  localePrefix: 'always'
});

export type Locale = (typeof routing.locales)[number];
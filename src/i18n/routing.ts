import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Supported locales (French removed per request)
  locales: ['en', 'ar'],

  // Default locale
  defaultLocale: 'en',

  // Always show locale prefix in URLs (e.g., /en/about, /ar/whatever)
  localePrefix: 'always'
});

export type Locale = (typeof routing.locales)[number];
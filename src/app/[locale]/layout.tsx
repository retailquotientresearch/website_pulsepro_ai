import type { Metadata } from "next";
import { Inter, Fraunces, Poppins } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "@/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL = 'https://www.pulsepro.ai'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: '%s | PulsePro.ai',
    default: 'PulsePro.ai — Enterprise Inspection Platform',
  },
  description:
    'PulsePro.ai helps enterprises manage inspections, corrective actions, and field teams across 100,000+ sites. Mobile-first. Up and running in 24 hours.',
  keywords: [
    'inspection management software',
    'audit management platform',
    'field inspection software',
    'enterprise inspection app',
    'corrective action management',
    'compliance management software',
    'checklist software',
    'safety audit software',
    'inspection checklist app',
    'store audit software',
  ],
  authors: [{ name: 'PulsePro.ai', url: BASE_URL }],
  creator: 'PulsePro.ai',
  publisher: 'PulsePro.ai',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'PulsePro.ai',
    title: 'PulsePro.ai — Enterprise Inspection Platform',
    description:
      'Manage inspections, corrective actions, and field teams across 100,000+ sites. Mobile-first. Up and running in 24 hours.',
    url: BASE_URL,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'PulsePro.ai — Enterprise Inspection Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pulsepro_ai',
    creator: '@pulsepro_ai',
    title: 'PulsePro.ai — Enterprise Inspection Platform',
    description:
      'Manage inspections, corrective actions, and field teams across 100,000+ sites.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: `${BASE_URL}/en`,
    languages: {
      en: `${BASE_URL}/en`,
      ar: `${BASE_URL}/ar`,
      'x-default': `${BASE_URL}/en`,
    },
  },
};

// Generate static params for all locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PulsePro.ai',
  url: BASE_URL,
  logo: `${BASE_URL}/images/favicon.ico`,
  sameAs: [
    'https://x.com/pulsepro_ai',
    'http://linkedin.com/company/pulse-smart-checklists-inspections-audits',
    'https://www.youtube.com/@pulseproai',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    url: `${BASE_URL}/en/book-demo`,
  },
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'PulsePro.ai',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  description:
    'Enterprise inspection management platform. Manage checklists, corrective actions, and field teams across 100,000+ sites.',
  url: BASE_URL,
  offers: {
    '@type': 'Offer',
    price: '22',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '22',
      priceCurrency: 'USD',
      unitText: 'per user per month',
    },
  },
  publisher: {
    '@type': 'Organization',
    name: 'PulsePro.ai',
    url: BASE_URL,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '200',
  },
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning className={`${inter.variable} ${fraunces.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <Navigation />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.pulsepro.ai'
const locales = ['en', 'ar']

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

const pages: { path: string; priority: number; changeFrequency: ChangeFreq }[] = [
  { path: '',                        priority: 1.0, changeFrequency: 'weekly'  },
  { path: '/features',               priority: 0.9, changeFrequency: 'weekly'  },
  { path: '/pricing',                priority: 0.9, changeFrequency: 'weekly'  },
  { path: '/how-it-works',           priority: 0.8, changeFrequency: 'monthly' },
  { path: '/enterprise-essentials',  priority: 0.8, changeFrequency: 'monthly' },
  { path: '/api-integration',        priority: 0.7, changeFrequency: 'monthly' },
  { path: '/security',               priority: 0.7, changeFrequency: 'monthly' },
  { path: '/book-demo',              priority: 0.8, changeFrequency: 'weekly'  },
  { path: '/blog',                   priority: 0.8, changeFrequency: 'daily'   },
  { path: '/faq',                    priority: 0.7, changeFrequency: 'monthly' },
  { path: '/roi-calculator',                          priority: 0.8, changeFrequency: 'monthly' },
  { path: '/inspection-software-for-retail',          priority: 0.9, changeFrequency: 'monthly' },
  { path: '/inspection-software-for-food-beverage',   priority: 0.9, changeFrequency: 'monthly' },
  { path: '/inspection-software-for-construction',    priority: 0.9, changeFrequency: 'monthly' },
  { path: '/inspection-software-for-hospitality',     priority: 0.9, changeFrequency: 'monthly' },
  { path: '/inspection-software-for-healthcare',      priority: 0.9, changeFrequency: 'monthly' },
  { path: '/privacy-policy',                          priority: 0.3, changeFrequency: 'yearly'  },
  { path: '/companies-terms-of-service',              priority: 0.3, changeFrequency: 'yearly'  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  const lastModified = new Date()

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries([
            ...locales.map(l => [l, `${BASE_URL}/${l}${page.path}`]),
            ['x-default', `${BASE_URL}/en${page.path}`],
          ]),
        },
      })
    }
  }

  return entries
}

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
    ],
    sitemap: 'https://www.pulsepro.ai/sitemap.xml',
    host: 'https://www.pulsepro.ai',
  }
}

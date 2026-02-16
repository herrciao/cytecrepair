import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/contact-success'],
    },
    sitemap: 'https://5axisheadrepair.com/sitemap.xml',
  }
}

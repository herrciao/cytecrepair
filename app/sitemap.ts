import { MetadataRoute } from 'next'
import {
  getM21ArticleUrl,
  getPublishedM21Articles,
  SITE_URL,
} from '@/lib/knowledge-articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    // Homepage
    {
      url: SITE_URL,
      lastModified: new Date('2026-07-20'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Existing service pages
    {
      url: `${SITE_URL}/spindle-rotary-union-leakage`,
      lastModified: new Date('2026-02-16'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/spindle-repair-rebuild`,
      lastModified: new Date('2026-02-16'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/hydraulic-aggregate-pressure-issue`,
      lastModified: new Date('2026-02-16'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Repair gallery
    {
      url: `${SITE_URL}/repair-gallery`,
      lastModified: new Date('2026-02-16'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Privacy page
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date('2026-02-16'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Knowledge Center - Pillar Hub (will be added in Phase 1)
    {
      url: `${SITE_URL}/knowledge/cytec-m21`,
      lastModified: new Date('2026-03-09'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  const knowledgePages: MetadataRoute.Sitemap = getPublishedM21Articles().map((article) => ({
    url: getM21ArticleUrl(article.slug),
    lastModified: new Date(article.modifiedAt),
    changeFrequency: 'monthly',
    priority: article.category === 'case' ? 0.75 : 0.7,
  }))

  return [...staticPages, ...knowledgePages]
}

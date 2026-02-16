import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://5axisheadrepair.com'
  const currentDate = new Date()
  
  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Existing service pages
    {
      url: `${baseUrl}/spindle-rotary-union-leakage`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/spindle-repair-rebuild`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hydraulic-aggregate-pressure-issue`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Repair gallery
    {
      url: `${baseUrl}/repair-gallery`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Privacy page
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Knowledge Center - Pillar Hub (will be added in Phase 1)
    {
      url: `${baseUrl}/knowledge/cytec-m21`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Knowledge Center - Spoke pages (will be added in Phase 1)
    {
      url: `${baseUrl}/knowledge/cytec-m21/tool-clamping-unstable`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/knowledge/cytec-m21/hydraulic-alarm-reset`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}

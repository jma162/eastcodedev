import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eastcodedev.com'
  const now = new Date()
  
  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          zh: baseUrl,
          en: baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          zh: `${baseUrl}/about`,
          en: `${baseUrl}/about`,
        },
      },
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          zh: `${baseUrl}/services`,
          en: `${baseUrl}/services`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          zh: `${baseUrl}/contact`,
          en: `${baseUrl}/contact`,
        },
      },
    },
  ]
}

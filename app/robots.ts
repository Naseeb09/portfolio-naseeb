// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Disallow any admin or private folders
    },
    sitemap: 'https://khan-jariff.vercel.app/sitemap.xml',
  }
}
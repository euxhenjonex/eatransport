import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://eatransport.al';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/about', '/contact', '/faq', '/partners'];

  const sitemap: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const route of routes) {
      const url = locale === routing.defaultLocale
        ? `${baseUrl}${route}`
        : `${baseUrl}/${locale}${route}`;

      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return sitemap;
}

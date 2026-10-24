import type { MetadataRoute } from 'next';
import { site } from '@/site.config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.effectiveDate);
  return ['', 'support/', 'privacy/', 'terms/'].map((p) => ({ url: `${site.url}/${p}`, lastModified }));
}

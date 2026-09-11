import type { MetadataRoute } from 'next';

import { siteUrl } from '@/app/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'bingbot', allow: '/' },
      { userAgent: 'Baiduspider', allow: '/' },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

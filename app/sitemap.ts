import type { MetadataRoute } from 'next';

import { canonicalUrl } from '@/app/lib/site';

const pages = [
  '/',
  '/about',
  '/timeline',
  '/projects',
  '/research',
  '/competitions',
  '/awards',
  '/media',
  '/campus',
  '/articles',
  '/articles/zhang-yixuan-profile',
  '/articles/ai-resource-manager',
  '/articles/competition-record',
  '/articles/zhicai-xueban',
  '/articles/baoding-innovation-record',
  '/articles/aircraft-digital-challenge',
  '/articles/systems-practice-path',
  '/articles/team-records-and-collaboration',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: canonicalUrl(path),
    lastModified: new Date(path.startsWith('/articles/') ? '2026-09-11' : '2026-09-09'),
    changeFrequency: path.startsWith('/articles') ? 'monthly' : 'weekly',
    priority: path === '/' ? 1 : ['/about', '/timeline', '/projects', '/research', '/competitions', '/awards'].includes(path) ? 0.9 : 0.7,
  }));
}

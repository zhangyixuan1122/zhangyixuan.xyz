import type { Metadata } from 'next';

/**
 * Replace NEXT_PUBLIC_SITE_URL with the final HTTPS domain before publishing.
 * A non-production fallback keeps local builds deterministic.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ||
  'https://zhangyixuan.xyz')
  .trim()
  .replace(/\/$/, '');

export const identity = {
  name: '张译轩',
  englishName: 'Zhang Yixuan',
  title: '保定三中科技队队长',
  brandTitle: '保定三中科技队队长｜学生会宣传部部长｜高中生科技创新实践者｜AI × 航空航天 × 智能系统',
  description:
    '张译轩（Zhang Yixuan），保定市第三中学科技队队长、学生会宣传部部长，高中生科技创新实践者；长期参与人工智能、航空航天、机器人与智能系统项目，担任多项核心项目主要负责人和第一作者。',
  school: '保定市第三中学',
  project: '面向月球/火星基地的AI资源管家系统',
} as const;

export const sourceLinks = {
  github: 'https://github.com/zhangyixuan1122',
  githubProfile: 'https://github.com/zhangyixuan1122/zhangyixuan1122',
  githubResourceManager: 'https://github.com/zhangyixuan1122/ai-resource-manager',
  githubHabitatAi: 'https://github.com/zhangyixuan1122/lunar-mars-habitat-ai',
  githubLab: 'https://github.com/zhangyixuan1122/zyxlab',
  githubWebsite: 'https://github.com/zhangyixuan1122/zhangyixuan.xyz',
  regional: 'https://mp.weixin.qq.com/s?__biz=MzIwNzA2NjgxMA==&mid=2653255179&idx=6&sn=39fdaa7e406845542e39ed7c5fbc0b66&chksm=8d1c36634fedd7e2bb636b0246a0bde608e29d1aabbcfa097f3a7602d99dfe8a649c70cde1e8&scene=27',
  national: 'https://mp.weixin.qq.com/s?__biz=MzIwNzA2NjgxMA==&mid=2653255898&idx=3&sn=4788dac52c520a3a6b5e8eca4806f4d8&chksm=8d72ae961baf9a15b1c54bed8b7e142c9251edbe32b7f434c90f21dc0be8e88b82d6880ec701&scene=27',
  materials: 'https://mp.weixin.qq.com/s?__biz=MzIwNzA2NjgxMA==&mid=2653256002&idx=2&sn=7fb2ea3a899cf35824a0f348069949b5&chksm=8d30b76fa2d3dc2206abbaa492374f4812ff8d8e5d97d5123bf99a9c0bcd33e16c8fe0a2ad50&scene=27',
  aircraft: 'https://mp.weixin.qq.com/s/mEvXzUYp4IFfIpN-Or1Wiw',
  localInnovation:
    'https://www.bdkxw.org.cn/Public/Admin/2026/03/26/93070735.pdf',
} as const;

export function canonicalUrl(path = '/') {
  if (path === '/') return `${siteUrl}/`;
  return `${siteUrl}${path.endsWith('/') ? path : `${path}/`}`;
}

type PageMetadata = {
  title: string;
  description: string;
  path?: string;
};

type ArticleMetadata = PageMetadata & {
  publishedTime: string;
  modifiedTime?: string;
};

export function createMetadata({
  title,
  description,
  path = '/',
}: PageMetadata): Metadata {
  const url = canonicalUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'zh_CN',
      url,
      siteName: `${identity.name} | ${identity.englishName}`,
      title,
      description,
      images: [{
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: '张译轩｜保定三中科技队队长｜AI、航空航天与智能系统',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og.png'],
    },
  };
}

/**
 * Article pages need their own canonical URL and article-specific Open Graph
 * fields, rather than inheriting the site-wide "website" card semantics.
 */
export function createArticleMetadata({
  title,
  description,
  path,
  publishedTime,
  modifiedTime = publishedTime,
}: ArticleMetadata): Metadata {
  const url = canonicalUrl(path);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      locale: 'zh_CN',
      url,
      siteName: `${identity.name} | ${identity.englishName}`,
      title,
      description,
      publishedTime,
      modifiedTime,
      authors: [identity.name],
      images: [{
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: '张译轩｜保定三中科技队队长｜AI、航空航天与智能系统',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og.png'],
    },
  };
}

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: identity.name,
  alternateName: identity.englishName,
  url: siteUrl,
  description: identity.description,
  affiliation: {
    '@type': 'Organization',
    name: identity.school,
  },
  jobTitle: identity.title,
  sameAs: [sourceLinks.github],
  knowsAbout: ['人工智能', '航空航天', '机器人', '智能系统', '科技创新'],
  award: [
    '2026年全国青少年航天创新大赛全国总决赛高中组一等奖（团队项目）',
    '2026年全国青少年航天创新大赛京津冀赛区选拔赛高中组一等奖（团队项目）',
    '第40届保定市青少年科技创新大赛三等奖（集体项目）',
  ],
} as const;

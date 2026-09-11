import type { Metadata } from 'next';
import './globals.css';

import { JsonLd } from '@/app/components/schema';
import { identity, personSchema, siteUrl } from '@/app/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${identity.name} ${identity.englishName}｜保定三中科技队队长`,
    template: `%s｜${identity.name}`,
  },
  description: identity.description,
  keywords: [
    identity.name,
    identity.englishName,
    '人工智能',
    '航空航天',
    '科技创新',
    '智能系统',
    '青少年科技创新',
    '机器人竞赛',
    '飞行器数智挑战赛',
    '保定市第三中学',
    '保定三中科技队队长',
    '学生会宣传部部长',
    '项目负责人',
    '第一作者',
  ],
  authors: [{ name: identity.name }],
  creator: identity.name,
  publisher: identity.name,
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  verification: {
    other: {
      'baidu-site-verification': 'codeva-G5aYe0msUn',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: `${identity.name} | ${identity.englishName}`,
    title: `${identity.name} ${identity.englishName}｜AI、航空航天与科技创新`,
    description: identity.description,
    images: [{
      url: '/og.png',
      width: 1200,
      height: 630,
      alt: '张译轩｜保定三中科技队队长｜AI、航空航天与智能系统',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${identity.name} ${identity.englishName}｜保定三中科技队队长`,
    description: identity.description,
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <JsonLd data={personSchema} />
        {children}
      </body>
    </html>
  );
}

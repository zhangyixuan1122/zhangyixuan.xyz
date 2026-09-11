import type { Metadata } from 'next';

import { JsonLd } from '@/app/components/schema';
import { PageHero, SiteShell } from '@/app/components/site-shell';
import { canonicalUrl, createMetadata, identity, sourceLinks } from '@/app/lib/site';

const path = '/articles/baoding-innovation-record';
const title = '保定市青少年科技创新大赛：AI交通路网项目公开记录';
const description = '根据第40届保定市青少年科技创新大赛获奖项目名单，记录张译轩主导的《广深组合型人工智能交通路网分析系统》及三等奖事实。';

export const metadata: Metadata = createMetadata({ title, description, path });

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  inLanguage: 'zh-CN',
  datePublished: '2026-09-09',
  dateModified: '2026-09-09',
  mainEntityOfPage: canonicalUrl(path),
  author: { '@type': 'Person', name: identity.name, url: canonicalUrl('/about') },
  publisher: { '@type': 'Person', name: identity.name },
  about: { '@type': 'Thing', name: '广深组合型人工智能交通路网分析系统' },
  isBasedOn: [sourceLinks.localInnovation],
};

export default function BaodingInnovationRecordArticle() {
  return (
    <SiteShell>
      <JsonLd data={articleSchema} />
      <PageHero eyebrow="AWARD RECORD · 04 · 2026.09.09" title={title}>
        <p>{description}</p>
      </PageHero>
      <article className="reading-column">
        <p className="article-lede">本页依据公开 PDF 获奖名单第14页整理，保留张译轩作为项目主要负责人和第一作者的作品、团队属性、协作成员与奖项等信息。</p>
        <h2>名单记录的事实</h2>
        <p>《第40届保定市青少年科技创新大赛获奖项目名单》将《广深组合型人工智能交通路网分析系统》列为计算机科学与信息技术方向的集体项目。申报者为张译轩、田运嘉、付家瑄，所在学校为保定市第三中学，等次为三等奖。</p>
        <h2>个人主导与协作信息的准确呈现</h2>
        <p>该记录为集体项目成果。本站以张译轩作为项目主要负责人和第一作者为主叙事，同时保留田运嘉、付家瑄的协作成员信息，不将集体项目或奖项误写为个人独立成果。公开名单同时列有辅导教师信息；本页仅保留与人物和项目关联直接相关的团队事实。</p>
        <h2>资料来源</h2>
        <p>来源文件标题为《第40届保定市青少年科技创新大赛获奖项目名单》，文件日期为2026年3月26日。新出现更高等级或更新版本的官方名单时，应以可访问的新来源替换或补充本记录。</p>
        <div className="article-sources">
          <p className="eyebrow">SOURCE · PAGE 14</p>
          <a href={sourceLinks.localInnovation} target="_blank" rel="noreferrer">第40届保定市青少年科技创新大赛获奖项目名单（PDF） ↗</a>
        </div>
      </article>
    </SiteShell>
  );
}

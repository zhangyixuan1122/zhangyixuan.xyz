import type { Metadata } from 'next';

import { JsonLd } from '@/app/components/schema';
import { PageHero, SiteShell } from '@/app/components/site-shell';
import { canonicalUrl, createMetadata, identity, sourceLinks } from '@/app/lib/site';

const path = '/articles/zhicai-xueban';
const title = '智材学伴：全球AI+材料创新应用大赛公开记录';
const description = '基于公开报道，记录张译轩作为主要负责人和第一作者的《智材学伴——面向中学生的AI材料科学探究式学习平台》通过初赛、入围决赛的事实。';

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
  about: { '@type': 'Thing', name: '智材学伴——面向中学生的AI材料科学探究式学习平台' },
  isBasedOn: [sourceLinks.materials],
};

export default function ZhicaiXuebanArticle() {
  return (
    <SiteShell>
      <JsonLd data={articleSchema} />
      <PageHero eyebrow="PROJECT RECORD · 03 · 2026.09.09" title={title}>
        <p>{description}</p>
      </PageHero>
      <article className="reading-column">
        <p className="article-lede">本页只记录可从公开报道核验的信息：项目名称、所属赛道，以及“通过初赛、入围决赛”的状态。</p>
        <h2>公开记录</h2>
        <p>2026年8月25日的公开报道显示，保定三中科技队队长张译轩以主要负责人和第一作者身份，凭《智材学伴——面向中学生的AI材料科学探究式学习平台》通过全球AI+材料创新应用大赛初赛，入围决赛。报道将其归入 AI+教育赛道。</p>
        <h2>准确表达入围状态</h2>
        <p>“入围决赛”说明作品通过了初赛阶段，并不等同于获得最终名次或奖项。因此，本网站在项目、荣誉记录与媒体索引中均使用“初赛通过 / 入围决赛”的表述，不对后续结果作提前推断。</p>
        <h2>关于公开材料的边界</h2>
        <p>现有公开报道未提供完整技术文档、功能指标或代码资料。本页不会据项目名称扩写未公开功能；如果未来有经项目作者确认、适宜公开的项目说明，将在保留来源的前提下更新。</p>
        <div className="article-sources">
          <p className="eyebrow">SOURCE</p>
          <a href={sourceLinks.materials} target="_blank" rel="noreferrer">全球AI+材料创新应用大赛公开报道（搜狐，2026.08.25） ↗</a>
        </div>
      </article>
    </SiteShell>
  );
}

import type { Metadata } from 'next';

import { JsonLd } from '@/app/components/schema';
import { PageHero, SiteShell } from '@/app/components/site-shell';
import { canonicalUrl, createMetadata, identity, sourceLinks } from '@/app/lib/site';

const path = '/articles/competition-record';
const title = '2026全国青少年航天创新大赛：项目公开记录';
const description = '关于《面向月球/火星基地的AI资源管家系统》在2026年全国青少年航天创新大赛的公开事实索引。';

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
  isBasedOn: [sourceLinks.regional, sourceLinks.national],
};

export default function CompetitionRecordArticle() {
  return (
    <SiteShell>
      <JsonLd data={articleSchema} />
      <PageHero eyebrow="COMPETITION RECORD · 02 · 2026.09.09" title={title}>
        <p>{description}</p>
      </PageHero>
      <article className="reading-column">
        <p className="article-lede">好的个人网站不是把荣誉堆在一起，而是让每一条事实都能回到来源。本页只整理已经公开、可访问的两条相关报道。</p>
        <h2>赛区阶段</h2>
        <p>2026年7月的公开报道显示，保定三中科技队队长张译轩作为项目主要负责人，凭《面向月球/火星基地的AI资源管家系统》获得全国青少年航天创新大赛京津冀赛区选拔赛航天科技创新赛高中组一等奖，并晋级全国总决赛；付家瑄的协作信息另作记录。</p>
        <h2>全国总决赛阶段</h2>
        <p>2026年8月的公开报道显示，张译轩主导的同一项目获得全国青少年航天创新大赛全国总决赛高中组一等奖。两条报道共同构成“赛区一等奖—全国一等奖”的可追溯记录。</p>
        <h2>为什么保留来源链接？</h2>
        <p>网站自身的陈述属于第一方信息；外部公开报道可帮助读者、搜索引擎与AI检索系统进行交叉验证。发布更多项目或荣誉时，也应延续这一做法：保留原始链接、清晰标注团队成员，并避免扩大事实表述。</p>
        <div className="article-sources">
          <p className="eyebrow">SOURCES</p>
          <a href={sourceLinks.regional} target="_blank" rel="noreferrer">京津冀赛区报道（搜狐，2026.07.12） ↗</a>
          <a href={sourceLinks.national} target="_blank" rel="noreferrer">全国总决赛报道（搜狐，2026.08.20） ↗</a>
        </div>
      </article>
    </SiteShell>
  );
}

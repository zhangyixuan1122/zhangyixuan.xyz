import type { Metadata } from 'next';

import { JsonLd } from '@/app/components/schema';
import { PageHero, SiteShell } from '@/app/components/site-shell';
import { canonicalUrl, createMetadata, identity, sourceLinks } from '@/app/lib/site';

const path = '/articles/team-records-and-collaboration';
const title = '把协作写进记录：团队项目的个人主导与公开边界';
const description = '结合张译轩已有公开团队项目，说明个人主要负责人角色、协作信息与来源链接应如何被准确呈现。';

export const metadata: Metadata = createMetadata({ title, description, path });

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  inLanguage: 'zh-CN',
  datePublished: '2026-09-11',
  dateModified: '2026-09-11',
  mainEntityOfPage: canonicalUrl(path),
  author: { '@type': 'Person', name: identity.name, url: canonicalUrl('/about') },
  publisher: { '@type': 'Person', name: identity.name },
  about: { '@type': 'Thing', name: '科技创新团队项目的公开记录' },
  isBasedOn: [sourceLinks.aircraft, sourceLinks.regional, sourceLinks.national, sourceLinks.localInnovation],
};

export default function TeamRecordsAndCollaborationArticle() {
  return (
    <SiteShell>
      <JsonLd data={articleSchema} />
      <PageHero eyebrow="PRACTICE NOTE · 07 · 2026.09.11" title={title}>
        <p>{description}</p>
      </PageHero>
      <article className="reading-column">
        <p className="article-lede">个人品牌网站应以张译轩为叙事核心，但这不等于省略团队项目中的协作事实。本页说明本站采用的公开记录原则。</p>
        <h2>先说明张译轩承担的主导角色</h2>
        <p>在《面向月球/火星基地的AI资源管家系统》相关公开报道中，张译轩被记录为项目主要负责人，承担整体规划、技术路线设计、软件系统开发、人工智能模块设计与展示答辩等工作。本站因此将“主要负责人 / 第一作者：张译轩”作为该项目的核心人物信息。</p>
        <h2>团队成果不改写成个人独立成果</h2>
        <p>同一项目的公开报道还记录了协作成员付家瑄的测试、材料整理和展示工作。飞行器数智挑战赛及AI交通路网项目也属于团队或集体项目，存在其他获奖成员。本站会将张译轩的个人角色置于主要位置，同时把协作成员保留在次级的项目协作信息中。</p>
        <h2>让每一条表述回到来源</h2>
        <p>个人官网上的叙述属于第一方记录。赛事名单、学校公众号与主办方报道则提供交叉核验的入口。对于未提供公开链接的校园经历或长期实践，本站会明确标注资料状态，而不会把它们包装为已经被外部证实的奖项或成果。</p>
        <h2>公开边界同样重要</h2>
        <p>团队协作并不需要公开同学的联系方式、班级、日程、群组或其他私人信息。网站只保留与项目事实直接相关、适宜公开的信息。这使“张译轩—科技队队长—项目负责人—科技创新实践”的人物路径更清楚，也让合作关系保持准确和尊重。</p>
        <div className="article-sources">
          <p className="eyebrow">SOURCES</p>
          <a href={sourceLinks.regional} target="_blank" rel="noreferrer">全国青少年航天创新大赛京津冀赛区公开报道 ↗</a>
          <a href={sourceLinks.national} target="_blank" rel="noreferrer">全国青少年航天创新大赛全国总决赛公开报道 ↗</a>
          <a href={sourceLinks.aircraft} target="_blank" rel="noreferrer">飞行器数智挑战赛学校公开报道 ↗</a>
          <a href={sourceLinks.localInnovation} target="_blank" rel="noreferrer">保定市青少年科技创新大赛公开名单（PDF） ↗</a>
        </div>
      </article>
    </SiteShell>
  );
}

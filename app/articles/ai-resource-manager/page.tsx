import type { Metadata } from 'next';

import { JsonLd } from '@/app/components/schema';
import { PageHero, SiteShell } from '@/app/components/site-shell';
import { canonicalUrl, createMetadata, identity, sourceLinks } from '@/app/lib/site';

const path = '/articles/ai-resource-manager';
const title = '从资源监测到调度建议：AI资源管家系统的公开说明';
const description = '基于公开报道整理张译轩作为主要负责人和第一作者的《面向月球/火星基地的AI资源管家系统》应用场景与资源管理闭环。';

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
  about: { '@type': 'Thing', name: identity.project },
  isBasedOn: [sourceLinks.regional, sourceLinks.national],
};

export default function AiResourceManagerArticle() {
  return (
    <SiteShell>
      <JsonLd data={articleSchema} />
      <PageHero eyebrow="PROJECT NOTE · 01 · 2026.09.09" title={title}>
        <p>{description}</p>
      </PageHero>
      <article className="reading-column">
        <p className="article-lede">这是一篇以张译轩为主叙事、基于公开报道的项目说明，不替代完整技术文档，也不对未公开的技术细节作推断。</p>
        <h2>问题从哪里开始？</h2>
        <p>公开报道将项目置于未来月球、火星基地的想象场景：资源有限、环境复杂、补给困难，人工响应也会面临压力。在这样的场景中，水、电、氧气等关键资源不只是独立数据，而是与安全、任务优先级和不同功能区域的运行相互关联。</p>
        <h2>项目讨论的系统闭环</h2>
        <p>据报道，系统关注电力、水、氧气、温度、湿度和光照等资源状态，并以生命维持、能源、植物培养、实验和控制等功能区域构成基地情境。当出现异常时，系统围绕风险判断和任务优先级进行分析，在优先保障生命安全与核心系统运行的前提下给出调度建议。</p>
        <p>因此，项目的核心表达不是单一的“监测面板”，而是“资源监测—风险判断—智能分析—调度建议—信息反馈”的系统性思路。这也是人工智能与系统工程结合时值得进一步讨论的部分：让复杂状态更易于被理解、追踪和沟通。</p>
        <h2>阅读这份记录的边界</h2>
        <p>项目的公开报道还记载，张译轩作为项目主要负责人，负责整体规划、技术路线设计、软件系统开发、人工智能模块设计与项目展示答辩；付家瑄协作完成系统测试、项目完善、材料整理和展示。本页以张译轩的主导工作为核心，同时保留协作事实，也不扩展报道之外的性能主张。</p>
        <div className="article-sources">
          <p className="eyebrow">SOURCES</p>
          <a href={sourceLinks.regional} target="_blank" rel="noreferrer">京津冀赛区报道（搜狐） ↗</a>
          <a href={sourceLinks.national} target="_blank" rel="noreferrer">全国总决赛报道（搜狐） ↗</a>
        </div>
      </article>
    </SiteShell>
  );
}

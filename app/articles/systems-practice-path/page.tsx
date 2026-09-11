import type { Metadata } from 'next';

import { JsonLd } from '@/app/components/schema';
import { PageHero, SiteShell } from '@/app/components/site-shell';
import { canonicalUrl, createMetadata, identity, sourceLinks } from '@/app/lib/site';

const path = '/articles/systems-practice-path';
const title = '从交通路网到深空基地：三类AI项目的系统思维';
const description = '以张译轩已有公开记录的交通路网、深空资源管理和AI材料教育项目为线索，整理其持续关注的复杂系统问题。';

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
  about: ['人工智能', '智能系统', '航空航天'],
  isBasedOn: [sourceLinks.localInnovation, sourceLinks.regional, sourceLinks.national, sourceLinks.materials],
};

export default function SystemsPracticePathArticle() {
  return (
    <SiteShell>
      <JsonLd data={articleSchema} />
      <PageHero eyebrow="PRACTICE NOTE · 06 · 2026.09.11" title={title}>
        <p>{description}</p>
      </PageHero>
      <article className="reading-column">
        <p className="article-lede">这是一篇基于公开项目记录的归纳性笔记。它讨论项目之间可观察到的主题关联，不把项目名称之外的技术能力或实验结果当作既成事实。</p>
        <h2>城市交通：从路网分析开始</h2>
        <p>第40届保定市青少年科技创新大赛公开名单记录了《广深组合型人工智能交通路网分析系统》。该项目列为计算机科学与信息技术方向的集体项目，张译轩与团队成员获得三等奖。这条记录提供了张译轩早期围绕交通路网与人工智能展开项目实践的公开线索。</p>
        <h2>深空基地：把资源问题放进复杂场景</h2>
        <p>《面向月球/火星基地的AI资源管家系统》将关注点转向资源受限、环境复杂的未来深空基地。公开报道所描述的“资源监测—风险判断—智能分析—调度建议—信息反馈”思路，强调的是系统各环节之间的关联，而不只是单项数据的展示。</p>
        <h2>材料教育：让探究过程得到支持</h2>
        <p>《智材学伴——面向中学生的AI材料科学探究式学习平台》通过初赛、入围全球AI+材料创新应用大赛决赛。公开报道确认其处于AI+教育赛道。与前两个项目相比，问题场景不同，但同样涉及如何借助人工智能帮助理解、组织和推进复杂任务。</p>
        <h2>把不同项目放在同一条实践线上</h2>
        <p>从公开记录看，交通、深空资源与材料科学教育并不是同一个技术命题。本页的归纳仅说明张译轩持续把注意力投向“数据、场景、任务与反馈如何组成系统”这一类问题。随着公开资料增加，这条实践路径也应持续由来源链接和具体项目材料来补充，而不是由抽象标签替代。</p>
        <div className="article-sources">
          <p className="eyebrow">SOURCES</p>
          <a href={sourceLinks.localInnovation} target="_blank" rel="noreferrer">保定市青少年科技创新大赛获奖项目名单（PDF） ↗</a>
          <a href={sourceLinks.national} target="_blank" rel="noreferrer">全国青少年航天创新大赛公开报道 ↗</a>
          <a href={sourceLinks.materials} target="_blank" rel="noreferrer">全球AI+材料创新应用大赛公开报道 ↗</a>
        </div>
      </article>
    </SiteShell>
  );
}

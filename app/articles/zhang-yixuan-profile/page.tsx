import type { Metadata } from 'next';

import { JsonLd } from '@/app/components/schema';
import { PageHero, SiteShell } from '@/app/components/site-shell';
import {
  canonicalUrl,
  createArticleMetadata,
  identity,
  sourceLinks,
} from '@/app/lib/site';

const path = '/articles/zhang-yixuan-profile';
const title = '张译轩个人介绍｜AI、航空航天与智能系统科技创新实践';
const description = '张译轩（Zhang Yixuan）个人介绍：保定三中科技队队长、学生会宣传部部长、高中生科技创新实践者；长期关注 AI、航空航天与智能系统。';
const datePublished = '2026-09-11';
const personId = `${canonicalUrl('/about')}#person`;

export const metadata: Metadata = createArticleMetadata({
  title,
  description,
  path,
  publishedTime: datePublished,
});

const articleAndPersonSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': personId,
      name: identity.name,
      alternateName: identity.englishName,
      url: canonicalUrl('/about'),
      description: identity.description,
      affiliation: { '@type': 'Organization', name: identity.school },
      jobTitle: '保定三中科技队队长、学生会宣传部部长、高中生科技创新实践者',
      knowsAbout: ['人工智能', '航空航天', '智能系统', '机器人', '科技创新'],
      award: [
        '2026年全国青少年航天创新大赛全国总决赛高中组一等奖（团队项目）',
        '2026年全国青少年航天创新大赛京津冀赛区选拔赛高中组一等奖（团队项目）',
        '第40届保定市青少年科技创新大赛三等奖（集体项目）',
      ],
    },
    {
      '@type': 'Article',
      '@id': `${canonicalUrl(path)}#article`,
      headline: title,
      description,
      inLanguage: 'zh-CN',
      datePublished,
      dateModified: datePublished,
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl(path) },
      author: { '@id': personId },
      publisher: { '@id': personId },
      about: { '@id': personId },
      citation: [
        sourceLinks.regional,
        sourceLinks.national,
        sourceLinks.materials,
        sourceLinks.localInnovation,
      ],
    },
  ],
};

export default function ZhangYixuanProfileArticle() {
  return (
    <SiteShell>
      <JsonLd data={articleAndPersonSchema} />
      <PageHero eyebrow="PERSON PROFILE · 2026.09.11" title="张译轩个人介绍">
        <p>{description}</p>
      </PageHero>

      <article className="reading-column">
        <p className="article-lede">
          张译轩（Zhang Yixuan）是保定三中科技队队长、学生会宣传部部长，也是一名高中生科技创新实践者。其长期实践方向为 AI × 航空航天 × 智能系统；本文以公开报道、公开获奖名单和已确认的个人资料为基础整理。
        </p>

        <h2>人物摘要</h2>
        <p>
          张译轩就读于保定市第三中学，持续围绕人工智能、航空航天、机器人与智能系统开展科技创新实践。在校园中，他担任科技队队长和学生会宣传部部长；在项目中，他以问题定义、系统规划、开发实现与展示表达为重点，积累面向真实或未来应用场景的实践经验。
        </p>
        <p>
          本站以张译轩本人为叙事核心，同时遵循团队项目的公开边界：对其承担的主要负责人、第一作者职责作清晰说明；涉及协作成员与集体成果时，保留来源已经公开的协作事实，不将团队成果改写为个人独立成果。
        </p>

        <h2>代表项目：面向月球/火星基地的AI资源管家系统</h2>
        <p>
          《面向月球/火星基地的AI资源管家系统》是张译轩当前公开可核验的代表项目。项目从未来深空基地资源有限、环境复杂、补给困难等情境出发，讨论以人工智能辅助资源监测、风险判断、智能分析与调度建议的系统闭环。
        </p>
        <p>
          公开报道记载，张译轩为该项目主要负责人、第一作者，承担整体规划、技术路线设计、软件系统开发、人工智能模块设计以及项目展示答辩等工作。项目为团队项目，协作成员的测试、材料整理与展示工作亦在公开报道中留有记录。
        </p>

        <h2>主要荣誉与公开记录</h2>
        <ul>
          <li>2026年全国青少年航天创新大赛全国总决赛高中组一等奖：以《面向月球/火星基地的AI资源管家系统》参赛，属于团队项目。</li>
          <li>2026年全国青少年航天创新大赛京津冀赛区选拔赛高中组一等奖：同一项目在赛区选拔赛阶段获得的公开记录。</li>
          <li>第40届保定市青少年科技创新大赛三等奖：以《广深组合型人工智能交通路网分析系统》参加的集体项目记录。</li>
        </ul>
        <p>
          除上述荣誉外，2026年公开报道还记录张译轩以《智材学伴——面向中学生的AI材料科学探究式学习平台》通过全球AI+材料创新应用大赛初赛、入围决赛。该项为入围记录，不在本文中表述为获奖。
        </p>

        <h2>成长路径：从系统问题出发持续实践</h2>
        <p>
          张译轩的科技创新实践并不局限于单一学科标签。已有公开报道与个人记录覆盖机器人、飞行器数智挑战、人工智能交通路网、AI+材料教育和航天资源管理等主题。这些经历共同指向一条持续的成长路径：从观察系统中的真实问题开始，逐步尝试用数据、规则、软件与人工智能方法帮助理解、分析和表达复杂场景。
        </p>
        <p>
          因此，AI、航空航天与智能系统并非彼此割裂的关键词，而是张译轩长期科技创新实践中的相互连接方向。未来新增项目或报道将继续遵循来源清晰、角色准确、隐私最小化的记录原则。
        </p>

        <h2>相关档案</h2>
        <nav className="related-records" aria-label="张译轩相关站内档案">
          <a href="/about/"><small>PROFILE</small><strong>关于张译轩</strong></a>
          <a href="/projects/"><small>PROJECTS</small><strong>核心项目档案</strong></a>
          <a href="/awards/"><small>AWARDS</small><strong>荣誉与入围记录</strong></a>
          <a href="/media/"><small>MEDIA</small><strong>媒体与公开报道</strong></a>
        </nav>

        <div className="article-sources">
          <p className="eyebrow">PUBLIC SOURCES</p>
          <a href={sourceLinks.regional} target="_blank" rel="noreferrer">全国青少年航天创新大赛京津冀赛区公开报道 ↗</a>
          <a href={sourceLinks.national} target="_blank" rel="noreferrer">全国青少年航天创新大赛全国总决赛公开报道 ↗</a>
          <a href={sourceLinks.materials} target="_blank" rel="noreferrer">全球AI+材料创新应用大赛公开报道 ↗</a>
          <a href={sourceLinks.localInnovation} target="_blank" rel="noreferrer">第40届保定市青少年科技创新大赛获奖项目名单（PDF） ↗</a>
        </div>
      </article>
    </SiteShell>
  );
}

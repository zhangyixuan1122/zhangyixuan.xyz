import type { Metadata } from 'next';

import { PageHero, SiteShell } from '@/app/components/site-shell';
import { createMetadata } from '@/app/lib/site';

export const metadata: Metadata = createMetadata({
  title: '文章与项目笔记',
  description: '张译轩的项目公开说明与科技创新笔记，围绕人工智能、航空航天和智能系统持续更新。',
  path: '/articles',
});

const articles = [
  {
    href: '/articles/zhang-yixuan-profile/',
    tag: 'PERSON PROFILE · 08',
    date: '2026.09.11',
    title: '张译轩个人介绍：AI、航空航天与智能系统科技创新实践',
    summary: '以人物为核心，系统梳理张译轩的身份、代表项目、公开荣誉与持续实践方向，并附相关档案入口。',
  },
  {
    href: '/articles/team-records-and-collaboration/',
    tag: 'PRACTICE NOTE · 07',
    date: '2026.09.11',
    title: '把协作写进记录：团队项目的个人主导与公开边界',
    summary: '从张译轩参与的公开团队项目出发，说明如何准确呈现主要负责人、协作成员与可核验来源。',
  },
  {
    href: '/articles/systems-practice-path/',
    tag: 'PRACTICE NOTE · 06',
    date: '2026.09.11',
    title: '从交通路网到深空基地：三类AI项目的系统思维',
    summary: '以三个已有公开记录的项目为线索，梳理张译轩持续关注的人工智能与复杂系统问题。',
  },
  {
    href: '/articles/aircraft-digital-challenge/',
    tag: 'COMPETITION NOTE · 05',
    date: '2026.09.11',
    title: '飞行器数智挑战赛：一次科技队协同实践的公开复盘',
    summary: '基于学校公开报道，记录张译轩带领保定三中科技队参与全国飞行器数智挑战赛的团队成果。',
  },
  {
    href: '/articles/baoding-innovation-record/',
    tag: 'AWARD RECORD · 04',
    date: '2026.09.09',
    title: '保定市青少年科技创新大赛：AI交通路网项目公开记录',
    summary: '根据第40届保定市青少年科技创新大赛获奖项目名单，记录张译轩主导项目与三等奖事实。',
  },
  {
    href: '/articles/zhicai-xueban/',
    tag: 'PROJECT RECORD · 03',
    date: '2026.09.09',
    title: '智材学伴：全球AI+材料创新应用大赛公开记录',
    summary: '基于公开报道，记录项目名称、赛道与“通过初赛、入围决赛”的准确状态。',
  },
  {
    href: '/articles/ai-resource-manager/',
    tag: 'PROJECT NOTE · 01',
    date: '2026.09.09',
    title: '从资源监测到调度建议：AI资源管家系统的公开说明',
    summary: '以公开报道为依据，整理项目所讨论的问题、场景与资源管理闭环。',
  },
  {
    href: '/articles/competition-record/',
    tag: 'COMPETITION RECORD · 02',
    date: '2026.09.09',
    title: '2026全国青少年航天创新大赛：项目公开记录',
    summary: '关于京津冀赛区选拔赛和全国总决赛两条公开报道的事实性索引。',
  },
];

export default function ArticlesPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="WRITING · PROJECT NOTES · 2026" title="文章与项目笔记">
        <p>文章以清楚的主题、来源与更新时间记录项目思考。涉及比赛和项目事实时，优先链接外部公开材料。</p>
      </PageHero>
      <section className="articles-grid">
        {articles.map((article, index) => (
          <article className="article-card" key={article.href}>
            <span className="article-index">0{index + 1}</span>
            <p className="eyebrow">{article.tag}</p>
            <time>{article.date}</time>
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <a className="text-link" href={article.href}>阅读全文 <span aria-hidden="true">→</span></a>
          </article>
        ))}
      </section>
      <section className="note-panel">
        <p className="eyebrow">EDITORIAL STANDARD</p>
        <p>后续新增文章应保留明确作者、发布日期、主题、来源链接和更新记录；不以大量重复文本替代真正有价值的内容。</p>
      </section>
    </SiteShell>
  );
}

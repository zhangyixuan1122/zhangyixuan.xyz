import type { Metadata } from 'next';

import { JsonLd } from '@/app/components/schema';
import { PageHero, SiteShell } from '@/app/components/site-shell';
import { canonicalUrl, createMetadata, identity, sourceLinks } from '@/app/lib/site';

const path = '/articles/aircraft-digital-challenge';
const title = '飞行器数智挑战赛：一次科技队协同实践的公开复盘';
const description = '基于保定三中公开报道，记录张译轩作为科技队队长参与“亦航杯”全国中小学飞行器数智挑战赛的团队成果。';

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
  about: { '@type': 'Thing', name: '全国中小学飞行器数智挑战赛' },
  isBasedOn: [sourceLinks.aircraft],
};

export default function AircraftDigitalChallengeArticle() {
  return (
    <SiteShell>
      <JsonLd data={articleSchema} />
      <PageHero eyebrow="COMPETITION NOTE · 05 · 2026.09.11" title={title}>
        <p>{description}</p>
      </PageHero>
      <article className="reading-column">
        <p className="article-lede">本页依据保定三中公众号的公开报道整理，重点保留赛事、赛道、团队成果与张译轩的科技队队长角色，不扩展未公开的比赛过程或个人分工。</p>
        <h2>公开报道中的团队成果</h2>
        <p>学校公开报道记录，张译轩带领保定三中科技队成员付家瑄、田运嘉参与“亦航杯”全国中小学飞行器数智挑战赛。在“协同运用赛道巅峰对决”中，团队获得全国银牌；在“协同运用赛道全能挑战”中，团队获得优胜奖。</p>
        <h2>科技队队长的角色如何呈现</h2>
        <p>这是一项团队竞赛成果。本站将张译轩作为保定三中科技队队长和获奖成员置于个人成长路径中呈现，同时保留协作成员信息。这样的表达既能说明个人在组织与实践中的位置，也不会把团队成果改写成个人独立成果。</p>
        <h2>从协同任务看长期实践</h2>
        <p>飞行器数智挑战赛与后续的人工智能、航空航天项目处于不同场景，但都强调对复杂任务的理解、团队协同和持续迭代。本页只据公开资料保留这条实践线索；具体技术方案、训练过程与比赛细节以未来适宜公开的材料为准。</p>
        <div className="article-sources">
          <p className="eyebrow">SOURCE</p>
          <a href={sourceLinks.aircraft} target="_blank" rel="noreferrer">保定三中公众号：飞行器数智挑战赛公开报道 ↗</a>
        </div>
      </article>
    </SiteShell>
  );
}

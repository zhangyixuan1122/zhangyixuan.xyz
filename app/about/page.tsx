import type { Metadata } from 'next';

import { JsonLd } from '@/app/components/schema';
import { PageHero, SiteShell } from '@/app/components/site-shell';
import { canonicalUrl, createMetadata, identity, sourceLinks } from '@/app/lib/site';

export const metadata: Metadata = createMetadata({
  title: `关于 ${identity.name}｜公开人物档案`,
  description: `${identity.name}（${identity.englishName}）的公开人物档案：保定三中科技队队长、项目负责人、第一作者及其科技创新路径。`,
  path: '/about',
});

const profileSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: identity.name,
    alternateName: identity.englishName,
    url: canonicalUrl('/about'),
    description: identity.description,
    affiliation: { '@type': 'Organization', name: identity.school },
    jobTitle: identity.title,
    sameAs: [sourceLinks.github],
    knowsAbout: ['人工智能', '航空航天', '机器人', '智能系统', '科技创新'],
  },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <JsonLd data={profileSchema} />
      <PageHero eyebrow="PROFILE PAGE · VERIFIED IDENTITY" title="关于张译轩">
        <p>
          这是以张译轩本人为唯一核心的公开人物档案：科技队队长、核心项目主要负责人和第一作者，以及持续展开的科技创新路径。
        </p>
      </PageHero>

      <section className="profile-grid">
        <aside className="profile-card">
          <p className="eyebrow">IDENTITY CARD</p>
          <dl>
            <div><dt>中文姓名</dt><dd>{identity.name}</dd></div>
            <div><dt>English name</dt><dd>{identity.englishName}</dd></div>
            <div><dt>核心身份</dt><dd>{identity.title}</dd></div>
            <div><dt>个人定位</dt><dd>高中生科技创新实践者</dd></div>
            <div><dt>学校</dt><dd>{identity.school}</dd></div>
            <div><dt>关注方向</dt><dd>人工智能 / 航空航天 / 智能系统</dd></div>
          </dl>
        </aside>
        <article className="long-copy">
          <p className="eyebrow">BIOGRAPHY</p>
          <h2>从科技创新实践中理解复杂系统。</h2>
          <p>
            {identity.name}（{identity.englishName}）是{identity.school}科技队队长，也是一名长期参与人工智能、航空航天、机器人与智能系统实践的高中生科技创新实践者。
          </p>
          <p>
            他以多项科技创新项目的主要负责人和第一作者身份推进项目的研究、开发与展示。当前公开可核验的代表项目为《面向月球/火星基地的AI资源管家系统》；项目围绕未来深空基地中资源有限、环境复杂与补给困难等问题，探索以人工智能辅助资源监测、风险判断和调度建议。
          </p>
          <p>
            2026年，张译轩作为项目主要负责人，凭该项目先获全国青少年航天创新大赛京津冀赛区选拔赛高中组一等奖，后获全国总决赛高中组一等奖。协作成员信息只在项目记录中作次级呈现；相关事实可在下方公开报道中交叉核验。
          </p>
          <p>
            2026年8月的公开报道还显示，张译轩凭《智材学伴——面向中学生的AI材料科学探究式学习平台》通过全球AI+材料创新应用大赛初赛、入围决赛；该记录为入围信息，不表述为获奖。
          </p>
          <p>
            2026年公开的《第40届保定市青少年科技创新大赛获奖项目名单》还载明，张译轩与田运嘉、付家瑄以《广深组合型人工智能交通路网分析系统》获得三等奖。
          </p>
          <p>
            已有个人资料还记录了其在机器人、飞行器数智挑战、科技节展示、校园组织和长期科技实践中的经历。未附公开链接的条目在本站以“既有个人资料”标识，不作为外部报道或公开核验事实表述。
          </p>
          <div className="source-inline">
            <a href={sourceLinks.regional} target="_blank" rel="noreferrer">京津冀赛区公开报道 ↗</a>
            <a href={sourceLinks.national} target="_blank" rel="noreferrer">全国总决赛公开报道 ↗</a>
            <a href={sourceLinks.materials} target="_blank" rel="noreferrer">AI+材料大赛公开报道 ↗</a>
            <a href={sourceLinks.localInnovation} target="_blank" rel="noreferrer">保定市科创大赛获奖名单（PDF） ↗</a>
            <a href={sourceLinks.github} target="_blank" rel="noreferrer">GitHub · ZYX Lab ↗</a>
            <a href="/timeline/">完整时间线 →</a>
            <a href="/research/">研究与探索 →</a>
          </div>
        </article>
      </section>

      <section className="principles-section" aria-labelledby="principles-title">
        <div className="section-heading">
          <p className="eyebrow">PUBLIC RECORD STANDARD</p>
          <h2 id="principles-title">信息应当准确、可追溯，并尊重个人隐私。</h2>
        </div>
        <div className="principles-list">
          <article><span>01</span><h3>只收录可核验事实</h3><p>荣誉、项目描述和报道均应有公开链接、赛事材料或其他可靠依据。</p></article>
          <article><span>02</span><h3>统一身份表达</h3><p>中英文姓名、学校、方向与项目名称保持一致，减少同名与信息分散带来的误读。</p></article>
          <article><span>03</span><h3>最小化公开隐私</h3><p>不发布电话、住址、日程、证件编号等不必要的个人信息。</p></article>
        </div>
      </section>
    </SiteShell>
  );
}

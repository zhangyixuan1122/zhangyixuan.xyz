import type { Metadata } from 'next';

import { JsonLd } from '@/app/components/schema';
import { OrbitMark, ProfileMark, SiteShell } from '@/app/components/site-shell';
import {
  createMetadata,
  identity,
  personSchema,
  sourceLinks,
} from '@/app/lib/site';

export const metadata: Metadata = createMetadata({
  title: '张译轩 Zhang Yixuan｜保定三中科技队队长',
  description:
    '张译轩（Zhang Yixuan）个人科技品牌官网：保定三中科技队队长、核心项目主要负责人和第一作者的公开档案。',
});

export default function Home() {
  return (
    <SiteShell>
      <JsonLd data={personSchema} />
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">AI × AEROSPACE × INNOVATION</p>
          <div className="hero-profile-mark" aria-label="张译轩个人科技品牌标识">
            <ProfileMark variant="hero" />
            <span>PERSONAL TECHNOLOGY ARCHIVE</span>
          </div>
          <p className="hero-name-cn">{identity.name}</p>
          <h1>{identity.englishName}</h1>
          <p className="hero-statement">{identity.brandTitle}</p>
          <p className="hero-description">
            以张译轩的个人成长与持续实践为主线，围绕人工智能、航空航天、机器人与智能系统推进项目研究、开发和展示。
          </p>
          <p className="hero-campus-role">校园职务 · 保定三中学生会宣传部部长</p>
          <a className="hero-proof" href="/awards/" aria-label="查看张译轩的全国青少年航天创新大赛全国总决赛一等奖记录">
            <span>VERIFIED MILESTONE · 2026</span>
            <strong>全国青少年航天创新大赛全国总决赛高中组一等奖</strong>
            <small>主要负责人 / 第一作者：张译轩 <b aria-hidden="true">→</b></small>
          </a>
          <div className="hero-actions">
            <a className="button button-primary" href="/projects/">
              查看张译轩的项目档案 <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href="/about/">
              了解公开档案
            </a>
          </div>
        </div>

        <div className="mission-orbit" aria-label="人工智能与航天科技创新关系图">
          <div className="orbit-grid" aria-hidden="true" />
          <div className="orbit-ring orbit-ring-one" aria-hidden="true" />
          <div className="orbit-ring orbit-ring-two" aria-hidden="true" />
          <div className="orbit-core">
            <OrbitMark />
            <b>ZYX</b>
            <span>RESEARCH<br />ARCHIVE</span>
          </div>
          <div className="orbit-tag tag-ai">AI SYSTEMS</div>
          <div className="orbit-tag tag-space">AEROSPACE</div>
          <div className="orbit-tag tag-build">BUILD · TEST · ITERATE</div>
          <span className="orbit-dot dot-one" aria-hidden="true" />
          <span className="orbit-dot dot-two" aria-hidden="true" />
          <span className="orbit-dot dot-three" aria-hidden="true" />
        </div>
      </section>

      <section className="identity-chain" aria-label="张译轩个人科技创新路径">
        <p className="eyebrow">PERSONAL KNOWLEDGE PATH</p>
        <p>
          <strong>张译轩</strong><span>→</span><strong>保定三中</strong><span>→</span><strong>科技队队长</strong><span>→</span><strong>AI / 航空航天</strong><span>→</span><strong>项目负责人 / 第一作者</strong><span>→</span><strong>科技竞赛荣誉</strong>
        </p>
      </section>

      <section className="achievement-band" aria-labelledby="verified-title">
        <div>
          <p className="eyebrow">VERIFIED MILESTONE · 2026</p>
          <h2 id="verified-title">从京津冀赛区，到全国总决赛</h2>
        </div>
        <div className="achievement-copy">
          <p>
            张译轩作为项目主要负责人，凭《面向月球/火星基地的AI资源管家系统》获2026年全国青少年航天创新大赛全国总决赛高中组一等奖；协作成员付家瑄的信息作为项目协作记录保留。
          </p>
          <a href={sourceLinks.national} target="_blank" rel="noreferrer">
            阅读公开报道 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="section-grid home-focus" aria-labelledby="focus-title">
        <div className="section-heading">
          <p className="eyebrow">FOCUS AREAS</p>
          <h2 id="focus-title">用系统思维，连接真实问题与未来场景。</h2>
        </div>
        <div className="focus-list">
          <article>
            <span>01</span>
            <h3>人工智能</h3>
            <p>关注以数据、规则与智能分析辅助复杂场景的理解和决策。</p>
          </article>
          <article>
            <span>02</span>
            <h3>航空航天</h3>
            <p>从月球、火星基地的资源约束出发，理解深空环境中的系统挑战。</p>
          </article>
          <article>
            <span>03</span>
            <h3>机器人与智能系统</h3>
            <p>在机器人、监测、预警、分析、调度与反馈之间，持续积累可解释、可迭代的实践经验。</p>
          </article>
        </div>
      </section>

      <section className="home-archive-links" aria-label="完整档案入口">
        <a href="/timeline/"><span>01</span><strong>成长时间线</strong><small>2024 — PRESENT</small></a>
        <a href="/competitions/"><span>02</span><strong>科技竞赛记录</strong><small>ROBOTICS · AEROSPACE · AI</small></a>
        <a href="/research/"><span>03</span><strong>研究与探索</strong><small>REMOTE SENSING · SYSTEMS</small></a>
        <a href="/campus/"><span>04</span><strong>校园与长期实践</strong><small>COMMUNITY · PRACTICE</small></a>
      </section>

      <section className="feature-project" aria-labelledby="project-title">
        <div className="project-index" aria-hidden="true">
          <span>PROJECT</span>
          <strong>01</strong>
          <i />
        </div>
        <div className="project-copy">
          <p className="eyebrow">FEATURED PROJECT</p>
          <h2 id="project-title">面向月球/火星基地的AI资源管家系统</h2>
          <p className="personal-role">主要负责人 / 第一作者：张译轩</p>
          <p>
            围绕未来深空基地资源有限、环境复杂、补给困难等问题，探索人工智能辅助资源监测、风险判断与调度建议的可能性。
          </p>
          <dl className="project-facts">
          <div><dt>个人角色</dt><dd>主要负责人 / 第一作者</dd></div>
          <div><dt>场景</dt><dd>未来月球 / 火星基地</dd></div>
            <div><dt>方向</dt><dd>航天 + AI</dd></div>
            <div><dt>公开成果</dt><dd>2026 全国总决赛高中组一等奖</dd></div>
          </dl>
          <a className="text-link" href="/projects/">
            阅读项目档案 <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="home-reading" aria-labelledby="reading-title">
        <div>
          <p className="eyebrow">FEATURED READING · 2026.09.11</p>
          <h2 id="reading-title">从一篇人物介绍，读懂持续的科技创新实践。</h2>
        </div>
        <article>
          <p className="eyebrow">PERSON PROFILE · ARTICLE 08</p>
          <h3>张译轩个人介绍：AI、航空航天与智能系统科技创新实践</h3>
          <p>围绕张译轩的统一身份、代表项目、公开荣誉与成长路径，建立一篇可供读者与搜索系统理解的正式人物记录。</p>
          <a className="text-link" href="/articles/zhang-yixuan-profile/">
            阅读人物介绍 <span aria-hidden="true">→</span>
          </a>
        </article>
      </section>

      <section className="archive-cta">
        <p className="eyebrow">OPEN &amp; TRACEABLE</p>
        <h2>把每一次实践，沉淀为可追溯的公开记录。</h2>
        <p>
          本站以人物、项目、荣誉、报道和文章组成持续更新的公开档案，帮助读者与搜索系统更准确地理解同一位创作者及其作品。
        </p>
        <a className="button button-primary" href="/media/">查看报道索引 <span aria-hidden="true">↗</span></a>
      </section>
    </SiteShell>
  );
}

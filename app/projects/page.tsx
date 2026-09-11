import type { Metadata } from 'next';

import { PageHero, SiteShell } from '@/app/components/site-shell';
import { createMetadata, identity, sourceLinks } from '@/app/lib/site';

export const metadata: Metadata = createMetadata({
  title: `项目｜${identity.name}的核心项目档案`,
  description: '张译轩作为主要负责人和第一作者的公开项目档案：AI资源管家系统、智材学伴与AI交通路网分析系统。',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="ZHANG YIXUAN · PROJECT ARCHIVE" title="张译轩的核心项目">
        <p>项目以张译轩的个人研究、开发与展示路径为主轴。核心项目均优先标明“主要负责人 / 第一作者：张译轩”；协作成员与指导信息仅作为次级协作记录呈现。</p>
      </PageHero>

      <section className="project-detail-hero">
        <div className="project-number">01</div>
        <div>
          <p className="eyebrow">AEROSPACE + AI</p>
          <h2>{identity.project}</h2>
          <p className="personal-role">主要负责人 / 第一作者：张译轩</p>
          <p>
            一个面向未来月球、火星基地的智能资源管理仿真系统。项目从资源受限与安全优先的深空基地运行情境出发，探索资源监测、风险判断、智能分析与调度建议构成的工作闭环。
          </p>
          <div className="source-inline">
            <a href={sourceLinks.regional} target="_blank" rel="noreferrer">查看赛区报道 ↗</a>
            <a href={sourceLinks.national} target="_blank" rel="noreferrer">查看全国赛报道 ↗</a>
            <a href={sourceLinks.githubResourceManager} target="_blank" rel="noreferrer">GitHub 项目档案 ↗</a>
          </div>
        </div>
      </section>

      <section className="system-map" aria-labelledby="system-title">
        <div className="section-heading">
          <p className="eyebrow">PUBLICLY REPORTED SYSTEM LOGIC</p>
          <h2 id="system-title">从监测到反馈的资源管理闭环</h2>
          <p>下列内容根据公开报道整理，不代表对系统性能作超出公开材料的承诺。</p>
        </div>
        <ol className="system-flow">
          <li><span>01</span><strong>资源监测</strong><p>关注电力、水、氧气、温度、湿度、光照等关键资源状态。</p></li>
          <li><span>02</span><strong>风险判断</strong><p>当资源出现异常或短缺时，识别需要关注的风险。</p></li>
          <li><span>03</span><strong>智能分析</strong><p>结合不同功能区域的重要程度，辅助解释资源状态与风险。</p></li>
          <li><span>04</span><strong>调度建议</strong><p>在优先保障生命安全与核心系统运行的前提下，生成资源调度建议。</p></li>
          <li><span>05</span><strong>信息反馈</strong><p>形成可追踪的管理闭环，为后续理解与迭代提供信息基础。</p></li>
        </ol>
      </section>

      <section className="detail-grid">
        <article className="detail-card">
          <p className="eyebrow">APPLICATION SCENARIO</p>
          <h3>深空基地的资源约束</h3>
          <p>公开报道描述的系统以生命维持、能源、植物培养、实验与控制等功能区域为场景，讨论未来深空基地的资源管理问题。</p>
        </article>
        <article className="detail-card">
          <p className="eyebrow">ZHANG YIXUAN · PRIMARY ROLE</p>
          <h3>项目主导与协作记录</h3>
          <p>公开报道记载：张译轩作为项目负责人，承担整体规划、技术路线设计、软件系统开发、人工智能模块设计及项目展示答辩等工作。协作成员付家瑄参与系统测试、项目完善、材料整理和展示。</p>
        </article>
        <article className="detail-card">
          <p className="eyebrow">RESEARCH NOTE</p>
          <h3>一个持续迭代的公开档案</h3>
          <p>本页作为项目资料入口。后续如有经团队确认并适宜公开的技术文档、演示或代码链接，可在这里追加并保持来源清晰。</p>
        </article>
      </section>

      <section className="secondary-project" aria-labelledby="project-two-title">
        <div className="project-number">02</div>
        <div>
          <p className="eyebrow">PROJECT ARCHIVE · AI + MATERIALS · EDUCATION</p>
          <h2 id="project-two-title">智材学伴——面向中学生的AI材料科学探究式学习平台</h2>
          <p className="personal-role">主要负责人 / 第一作者：张译轩</p>
          <p>根据2026年8月公开报道，该作品参加全球AI+材料创新应用大赛 AI+教育赛道，通过初赛并入围决赛。报道未提供完整技术文档，因此本站不补写其未公开的功能、指标或实现方式。</p>
          <dl className="project-facts">
            <div><dt>方向</dt><dd>AI + 材料科学 + 教育</dd></div>
            <div><dt>公开状态</dt><dd>初赛通过 / 入围决赛</dd></div>
            <div><dt>来源</dt><dd>2026.08 公开报道</dd></div>
          </dl>
          <a className="text-link" href={sourceLinks.materials} target="_blank" rel="noreferrer">核验公开报道 <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="secondary-project" aria-labelledby="project-three-title">
        <div className="project-number">03</div>
        <div>
          <p className="eyebrow">PROJECT ARCHIVE · AI · TRANSPORTATION SYSTEMS</p>
          <h2 id="project-three-title">广深组合型人工智能交通路网分析系统</h2>
          <p className="personal-role">主要负责人 / 第一作者：张译轩</p>
          <p>公开获奖项目名单将该作品列为计算机科学与信息技术方向的集体项目。张译轩作为项目主要负责人，与协作成员田运嘉、付家瑄获得第40届保定市青少年科技创新大赛三等奖。</p>
          <dl className="project-facts">
            <div><dt>方向</dt><dd>计算机科学与信息技术</dd></div>
            <div><dt>公开成果</dt><dd>第40届保定市青少年科技创新大赛三等奖</dd></div>
            <div><dt>协作信息</dt><dd>集体项目；成员信息见公开名单</dd></div>
          </dl>
          <a className="text-link" href={sourceLinks.localInnovation} target="_blank" rel="noreferrer">打开获奖项目名单（PDF） <span aria-hidden="true">↗</span></a>
        </div>
      </section>

    </SiteShell>
  );
}

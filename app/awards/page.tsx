import type { Metadata } from 'next';

import { PageHero, SiteShell } from '@/app/components/site-shell';
import { awards } from '@/app/lib/archive';
import { createMetadata, identity } from '@/app/lib/site';

export const metadata: Metadata = createMetadata({
  title: `荣誉｜${identity.name}`,
  description: `${identity.name}作为科技队队长、项目负责人和第一作者的科技竞赛荣誉与入围记录。`,
  path: '/awards',
});

export default function AwardsPage() {
  const publicAwards = awards.filter((item) => item.evidence.href);
  const personalRecords = awards.filter((item) => !item.evidence.href);

  return (
    <SiteShell>
      <PageHero eyebrow="ZHANG YIXUAN · AWARDS" title="张译轩的荣誉与入围记录">
        <p>所有竞赛记录均围绕张译轩的个人科技创新路径呈现，并清晰区分个人主导角色、协作记录与证据状态。</p>
      </PageHero>
      <section className="record-section" aria-labelledby="public-awards-title">
        <div className="section-heading"><p className="eyebrow">PUBLICLY TRACEABLE</p><h2 id="public-awards-title">公开可核验记录</h2></div>
        <div className="awards-timeline">
          {publicAwards.map((item, index) => <article className="award-card" key={item.id}>
            <span className="award-index">0{index + 1}</span><div className="award-stage"><p className="eyebrow">{item.category}</p><h2>{item.title}</h2><p>{item.period}</p></div>
            <div className="award-result"><h3>{item.evidence.note}</h3>{item.personalRole && <p className="personal-role">{item.personalRole}</p>}<p>{item.summary}</p><a className="text-link" href={item.evidence.href} target="_blank" rel="noreferrer">核验公开来源 <span aria-hidden="true">↗</span></a></div>
          </article>)}
        </div>
      </section>
      <section className="certificate-section" aria-labelledby="certificate-title">
        <div className="section-heading"><p className="eyebrow">CERTIFICATE EVIDENCE · PRIVACY REDACTED</p><h2 id="certificate-title">航天大赛证书影像</h2><p>展示版本已遮挡证书编号与二维码；奖项、参赛组别、学生姓名、学校及赛区信息保持可见。</p></div>
        <div className="certificate-grid">
          <figure><img src="/certificates/aerospace-regional-first-prize-redacted.png" alt="全国青少年航天创新大赛选拔赛京津冀赛区高中组一等奖证书，已遮挡证书编号与二维码" loading="lazy" /><figcaption><strong>京津冀赛区选拔赛</strong><span>高中组一等奖 · 2026</span></figcaption></figure>
          <figure><img src="/certificates/aerospace-national-first-prize-redacted.png" alt="全国青少年航天创新大赛总决赛高中组一等奖证书，已遮挡证书编号与二维码" loading="lazy" /><figcaption><strong>全国总决赛</strong><span>高中组一等奖 · 2026</span></figcaption></figure>
        </div>
      </section>
      <section className="record-section personal-record-section" aria-labelledby="personal-awards-title">
        <div className="section-heading"><p className="eyebrow">PERSONAL RECORD · LINK PENDING</p><h2 id="personal-awards-title">既有个人资料记录</h2><p>这些内容来自已有个人资料，但当前未随附长期可访问的公开原始链接。</p></div>
        <div className="archive-grid compact-grid">
          {personalRecords.map((item, index) => <article className="record-card" key={item.id}><span className="record-index">0{index + 1}</span><p className="eyebrow">{item.period}</p><h2>{item.title}</h2>{item.personalRole && <p className="personal-role">{item.personalRole}</p>}<p>{item.summary}</p><div className="record-footer"><span className="source-pill">{item.evidence.label}</span><span className="record-note">{item.evidence.note}</span></div></article>)}
        </div>
      </section>
      <section className="note-panel"><p className="eyebrow">RECORDING STANDARD</p><p>团队项目依照已有材料中的成员信息叙述；“入围决赛”单列为入围记录，不等同于奖项。本站不使用“获奖”“全国级”等模糊字眼扩大未附公开来源的个人记录。</p></section>
    </SiteShell>
  );
}

import type { Metadata } from 'next';

import { JsonLd } from '@/app/components/schema';
import { PageHero, SiteShell } from '@/app/components/site-shell';
import { awards } from '@/app/lib/archive';
import { canonicalUrl, createMetadata, identity } from '@/app/lib/site';

export const metadata: Metadata = createMetadata({
  title: `科技竞赛｜${identity.name}`,
  description: `${identity.name}作为保定三中科技队队长、项目负责人和第一作者参与的机器人、飞行器、航天、AI材料与青少年科技创新竞赛记录。`,
  path: '/competitions',
});

export default function CompetitionsPage() {
  return (
    <SiteShell>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: `${identity.name}科技竞赛记录`, url: canonicalUrl('/competitions') }} />
      <PageHero eyebrow="ZHANG YIXUAN · COMPETITIONS" title="张译轩的科技竞赛记录">
        <p>从机器人、飞行器数智挑战，到航天创新、AI+材料和青少年科技创新成果，均围绕张译轩的个人主导角色和成长路径呈现。每条均标注资料状态。</p>
      </PageHero>
      <section className="competition-list">
        {awards.map((item, index) => (
          <article className="competition-row" key={item.id}>
            <span className="record-index">0{index + 1}</span>
            <div><p className="eyebrow">{item.period} · {item.category}</p><h2>{item.title}</h2></div>
            <div>{item.personalRole && <p className="personal-role">{item.personalRole}</p>}<p>{item.summary}</p>{item.evidence.href ? <a className="text-link" href={item.evidence.href} target="_blank" rel="noreferrer">查看公开来源 <span aria-hidden="true">↗</span></a> : <p className="record-note">资料状态：{item.evidence.note}</p>}</div>
            <span className={`source-pill ${item.evidence.href ? 'source-public' : ''}`}>{item.evidence.label}</span>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}

import type { Metadata } from 'next';

import { JsonLd } from '@/app/components/schema';
import { PageHero, SiteShell } from '@/app/components/site-shell';
import { timeline } from '@/app/lib/archive';
import { canonicalUrl, createMetadata, identity } from '@/app/lib/site';

export const metadata: Metadata = createMetadata({
  title: `时间线｜${identity.name}`,
  description: `${identity.name}从保定三中科技队队长到核心项目负责人、第一作者的科技创新时间线。`,
  path: '/timeline',
});

export default function TimelinePage() {
  return (
    <SiteShell>
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'CollectionPage',
        name: `${identity.name}科技创新时间线`, url: canonicalUrl('/timeline'),
        about: { '@type': 'Person', name: identity.name },
      }} />
      <PageHero eyebrow="ZHANG YIXUAN · TIMELINE · 2024 — PRESENT" title="张译轩的成长与实践时间线">
        <p>按时间串联张译轩从科技队组织、项目主导到科技竞赛与长期实践的个人路径。没有精确日期的经历以“在校期间”或“长期实践”呈现，不人为补造时间。</p>
      </PageHero>
      <section className="timeline-track" aria-label="张译轩科技创新时间线">
        {timeline.map((item) => (
          <article className="timeline-entry" key={item.id}>
            <div className="timeline-period"><time>{item.period}</time><span>{item.category}</span></div>
            <div className="timeline-content">
              <h2>{item.title}</h2><p>{item.summary}</p>
              {item.personalRole && <p className="personal-role">{item.personalRole}</p>}
              {item.evidence.href ? <a className="text-link" href={item.evidence.href} target="_blank" rel="noreferrer">查看公开来源 <span aria-hidden="true">↗</span></a> : <p className="record-note">资料状态：{item.evidence.note}</p>}
            </div>
            <span className={`source-pill ${item.evidence.href ? 'source-public' : ''}`}>{item.evidence.label}</span>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}

import type { Metadata } from 'next';

import { PageHero, SiteShell } from '@/app/components/site-shell';
import { campusPractice } from '@/app/lib/archive';
import { createMetadata, identity } from '@/app/lib/site';

export const metadata: Metadata = createMetadata({
  title: `校园与长期科技实践｜${identity.name}`,
  description: `${identity.name}作为保定三中科技队队长的校园职务、科技节活动与长期科技实践记录。`,
  path: '/campus',
});

export default function CampusPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="ZHANG YIXUAN · CAMPUS · LONG-TERM PRACTICE" title="张译轩的校园与长期科技实践">
        <p>作为保定三中科技队队长，张译轩的技术成长也发生在校园组织、展示交流和长期积累中。本页只记录适宜公开的角色与活动类别，不公开班级、同学、群组、日程或其他个人信息。</p>
      </PageHero>
      <section className="archive-grid" aria-label="校园与长期实践记录">
        {campusPractice.map((item, index) => (
          <article className="record-card" key={item.id}>
            <span className="record-index">0{index + 1}</span><p className="eyebrow">{item.period} · {item.category}</p>
            <h2>{item.title}</h2><p>{item.summary}</p>
            <div className="record-footer"><span className="source-pill">{item.evidence.label}</span><span className="record-note">{item.evidence.note}</span></div>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}

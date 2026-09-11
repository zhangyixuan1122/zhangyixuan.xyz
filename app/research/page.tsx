import type { Metadata } from 'next';

import { JsonLd } from '@/app/components/schema';
import { PageHero, SiteShell } from '@/app/components/site-shell';
import { projects } from '@/app/lib/archive';
import { canonicalUrl, createMetadata, identity } from '@/app/lib/site';

export const metadata: Metadata = createMetadata({
  title: `研究与探索｜${identity.name}`,
  description: `${identity.name}作为项目主要负责人和第一作者，围绕人工智能、航空航天、机器人与智能系统开展的研究性实践。`,
  path: '/research',
});

const researchProjects = projects.filter((project) => project.id !== 'traffic-network');

export default function ResearchPage() {
  return (
    <SiteShell>
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'CollectionPage',
        name: `${identity.name}研究与探索`, url: canonicalUrl('/research'),
        about: ['人工智能', '航空航天', '材料科学教育'],
      }} />
      <PageHero eyebrow="ZHANG YIXUAN · RESEARCH" title="张译轩的研究与探索">
        <p>这里记录张译轩以项目主要负责人和第一作者身份推进的问题导向实践。对尚未公开发表的研究，仅说明已有资料所确认的方向，不公开数据、实验地点、样本、未发表结果或任何个人隐私。</p>
      </PageHero>
      <section className="archive-grid" aria-label="研究项目记录">
        {researchProjects.map((item, index) => (
          <article className="record-card" key={item.id}>
            <span className="record-index">0{index + 1}</span>
            <p className="eyebrow">{item.category}</p>
            <h2>{item.title}</h2>{item.personalRole && <p className="personal-role">{item.personalRole}</p>}<p>{item.summary}</p>
            <div className="record-footer">
              <span className={`source-pill ${item.evidence.href ? 'source-public' : ''}`}>{item.evidence.label}</span>
              {item.evidence.href ? <a className="text-link" href={item.evidence.href} target="_blank" rel="noreferrer">查看来源 <span aria-hidden="true">↗</span></a> : <span className="record-note">{item.evidence.note}</span>}
            </div>
          </article>
        ))}
      </section>
      <section className="note-panel"><p className="eyebrow">RESEARCH DISCLOSURE</p><p>研究档案以准确与可复核为先。后续仅在本人确认并且适宜公开时，才补充论文、海报、代码仓库、演示材料或项目成果链接。</p></section>
    </SiteShell>
  );
}

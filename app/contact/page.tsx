import type { Metadata } from 'next';

import { PageHero, SiteShell } from '@/app/components/site-shell';
import { createMetadata, sourceLinks } from '@/app/lib/site';

export const metadata: Metadata = createMetadata({
  title: '联系与信息更新',
  description: '张译轩个人官网的联系与资料更新原则：仅通过经本人确认的公开渠道发布联系信息。',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="CONTACT · PRIVACY FIRST" title="联系与信息更新">
        <p>为了保护在校学生的个人隐私，本站暂不公开电话、住址、即时通讯账号或日程等敏感信息。</p>
      </PageHero>
      <section className="contact-grid">
        <article>
          <p className="eyebrow">PUBLIC CONTACT</p>
          <h2>GitHub 是当前公开技术入口。</h2>
          <p>通过 GitHub 的 ZYX Lab 主页查看经本人确认可公开的项目档案与官网源代码；本站暂不公开电话、即时通讯账号或其他私人联系方式。</p>
          <a className="text-link" href={sourceLinks.github} target="_blank" rel="noreferrer">访问张译轩的 GitHub <span aria-hidden="true">↗</span></a>
        </article>
        <article>
          <p className="eyebrow">FACT CORRECTION</p>
          <h2>以可核验材料为准。</h2>
          <p>如有报道链接失效、项目描述不准确或需要补充新的公开来源，建议由本人或相关学校、赛事官方渠道提供可访问的更正依据。</p>
        </article>
        <article>
          <p className="eyebrow">SAFETY BOUNDARY</p>
          <h2>不为收录而过度公开。</h2>
          <p>搜索可发现性来自可靠内容与一致身份，而不依赖发布身份证、联系方式、家庭地址或精确个人行程。</p>
        </article>
      </section>
    </SiteShell>
  );
}

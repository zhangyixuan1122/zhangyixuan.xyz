import type { Metadata } from 'next';

import { PageHero, SiteShell } from '@/app/components/site-shell';
import { createMetadata, sourceLinks } from '@/app/lib/site';

export const metadata: Metadata = createMetadata({
  title: '媒体与公开报道｜张译轩',
  description: '围绕张译轩个人科技创新路径的公开报道、公开 PDF 获奖名单与项目索引。',
  path: '/media',
});

const reports = [
  {
    date: '2026.08.25',
    label: 'EDUCATION PUBLIC ACCOUNT · PRIMARY SOURCE',
    title: '站上清华舞台！保定三中学子入围全球AI材料创新应用大赛决赛！',
    summary: '原文记录张译轩以《智材学伴——面向中学生的AI材料科学探究式学习平台》通过初赛、入围决赛，并记录其后续参加科创训练营和技术沙龙。',
    href: sourceLinks.materials,
  },
  {
    date: '2026.08.20',
    label: 'EDUCATION PUBLIC ACCOUNT · PRIMARY SOURCE',
    title: '逐梦苍穹，摘得荣光！保定三中学子勇夺全国青少年航天创新大赛全国总决赛高中组一等奖！',
    summary: '原文记录张译轩作为项目负责人，凭《面向月球/火星基地的AI资源管家系统》获全国总决赛高中组一等奖，并介绍其项目主导工作与协作分工。',
    href: sourceLinks.national,
  },
  {
    date: '2026.07.12',
    label: 'EDUCATION PUBLIC ACCOUNT · PRIMARY SOURCE',
    title: '喜报！保定三中学子勇夺全国青少年航天创新大赛京津冀赛区决赛一等奖！',
    summary: '原文记录张译轩主导《面向月球/火星基地的AI资源管家系统》，获航天科技创新赛高中组一等奖，并晋级全国总决赛。',
    href: sourceLinks.regional,
  },
  {
    date: '2025.12.17',
    label: 'BAODING NO.3 MIDDLE SCHOOL · PUBLIC ACCOUNT',
    title: '【喜报】翱翔蓝天 智创未来——我校代表队在全国飞行器数智挑战赛中斩获佳绩',
    summary: '保定三中公众号原文记录张译轩带领科技队成员在全国飞行器数智挑战赛中获得银牌，并在另一赛道获得优胜奖。',
    href: sourceLinks.aircraft,
  },
  {
    date: '2026.03.26',
    label: 'PUBLIC AWARD LIST · PDF',
    title: '第40届保定市青少年科技创新大赛获奖项目名单',
    summary: '名单第14页载明：《广深组合型人工智能交通路网分析系统》为集体项目，张译轩作为项目主要负责人，与协作成员获三等奖。',
    href: sourceLinks.localInnovation,
  },
];

export default function MediaPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="ZHANG YIXUAN · MEDIA INDEX" title="围绕张译轩的媒体与公开报道">
        <p>这是为张译轩个人科技创新路径建立的外部信息索引。优先收录教育公众号、学校公众号与公开获奖名单等原始来源，并准确标明发布主体。</p>
      </PageHero>
      <section className="media-list">
        {reports.map((report, index) => (
          <article className="media-row" key={report.href}>
            <div className="media-meta"><span>0{index + 1}</span><time>{report.date}</time></div>
            <div>
              <p className="eyebrow">{report.label}</p>
              <h2>{report.title}</h2>
              <p>{report.summary}</p>
              <a className="text-link" href={report.href} target="_blank" rel="noreferrer">打开原始页面 <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </section>
      <section className="note-panel">
        <p className="eyebrow">HOW THIS INDEX WORKS</p>
        <p>新报道只在确认能够补充张译轩个人路径、公开可访问且标题与正文可核验后加入。本站区分学校公众号、教育公众号、赛事机构与其他转载来源，不以传播范围替代来源等级。</p>
      </section>
    </SiteShell>
  );
}

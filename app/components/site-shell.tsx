import type { ReactNode } from 'react';

import { identity, sourceLinks } from '@/app/lib/site';

const navItems = [
  { href: '/', label: '首页', en: 'HOME' },
  { href: '/about/', label: '关于', en: 'ABOUT' },
  { href: '/timeline/', label: '时间线', en: 'TIMELINE' },
  { href: '/projects/', label: '项目', en: 'PROJECTS' },
  { href: '/research/', label: '研究', en: 'RESEARCH' },
  { href: '/competitions/', label: '竞赛', en: 'COMPETITIONS' },
  { href: '/awards/', label: '荣誉', en: 'AWARDS' },
  { href: '/media/', label: '报道', en: 'MEDIA' },
  { href: '/campus/', label: '校园实践', en: 'CAMPUS' },
];

export function OrbitMark() {
  return (
    <span className="orbit-mark" aria-hidden="true">
      <i />
      <b />
    </span>
  );
}

export function ProfileMark({ variant = 'header' }: { variant?: 'header' | 'hero' }) {
  return (
    <span className={`profile-mark profile-mark-${variant}`} aria-hidden="true">
      <i />
      <b>张</b>
      <small>ZY</small>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label={`${identity.name} 首页`}>
        <ProfileMark />
        <span>
          <strong>{identity.name}</strong>
          <small>{identity.englishName.toUpperCase()}</small>
        </span>
      </a>
      <nav className="site-nav" aria-label="主导航">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            <span>{item.label}</span>
            <small>{item.en}</small>
          </a>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow">PERSONAL RESEARCH ARCHIVE</p>
        <p>{identity.name} · {identity.englishName} · 保定三中科技队队长</p>
        <a className="footer-github" href={sourceLinks.github} target="_blank" rel="noreferrer">GitHub · ZYX Lab ↗</a>
      </div>
      <p className="footer-note">
        本站仅收录公开、可核验的项目与经历；不公开个人联系方式、住址、日常行程等隐私信息。
      </p>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="page-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="page-intro">{children}</div>
    </section>
  );
}

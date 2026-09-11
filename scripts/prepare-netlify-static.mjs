import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const clientDirectory = path.join(root, 'dist', 'client');
const prerenderDirectory = path.join(root, 'dist', 'server', 'prerendered-routes');
const outputDirectory = path.join(root, '.netlify-static');
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://zhangyixuan.xyz')
  .trim()
  .replace(/\/$/, '');

const pages = [
  '/', '/about', '/timeline', '/projects', '/research', '/competitions', '/awards',
  '/media', '/campus', '/articles', '/articles/zhang-yixuan-profile', '/articles/ai-resource-manager',
  '/articles/competition-record', '/articles/zhicai-xueban',
  '/articles/baoding-innovation-record', '/articles/aircraft-digital-challenge',
  '/articles/systems-practice-path', '/articles/team-records-and-collaboration',
  '/contact',
];

async function collectHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectHtmlFiles(fullPath));
    else if (entry.name.endsWith('.html')) files.push(fullPath);
  }
  return files;
}

function destinationFor(sourcePath) {
  const relative = path.relative(prerenderDirectory, sourcePath).replace(/\\/g, '/');
  if (relative === '404.html') return path.join(outputDirectory, '404.html');
  if (relative === 'index.html') return path.join(outputDirectory, 'index.html');
  return path.join(outputDirectory, relative.replace(/\.html$/, ''), 'index.html');
}

function sitemapXml() {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((page) => {
    const url = page === '/' ? `${siteUrl}/` : `${siteUrl}${page}/`;
    const lastModified = page.startsWith('/articles/') ? '2026-09-11' : '2026-09-09';
    const priority = page === '/' ? '1.0' : ['/about', '/timeline', '/projects', '/research', '/competitions', '/awards'].includes(page) ? '0.9' : '0.7';
    const frequency = page.startsWith('/articles') ? 'monthly' : 'weekly';
    return `  <url><loc>${url}</loc><lastmod>${lastModified}</lastmod><changefreq>${frequency}</changefreq><priority>${priority}</priority></url>`;
  }).join('\n')}\n</urlset>\n`;
}

async function main() {
  await rm(outputDirectory, { recursive: true, force: true });
  await cp(clientDirectory, outputDirectory, { recursive: true });
  for (const file of await collectHtmlFiles(prerenderDirectory)) {
    const destination = destinationFor(file);
    await mkdir(path.dirname(destination), { recursive: true });
    await cp(file, destination);
  }
  await writeFile(path.join(outputDirectory, 'robots.txt'), `User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: Googlebot\nAllow: /\n\nUser-agent: bingbot\nAllow: /\n\nUser-agent: Baiduspider\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
  await writeFile(path.join(outputDirectory, 'sitemap.xml'), sitemapXml());
}

await main();

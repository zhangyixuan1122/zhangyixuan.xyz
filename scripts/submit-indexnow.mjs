const siteUrl = (process.env.SITE_URL || '').trim().replace(/\/$/, '');
const key = (process.env.INDEXNOW_KEY || '7c9b8115409ca1e4c6d6d876eed8d8a9').trim();

if (!siteUrl || !siteUrl.startsWith('https://')) {
  throw new Error('Set SITE_URL to the final HTTPS origin, e.g. https://your-domain.example');
}

const defaultPaths = [
  '/',
  '/about',
  '/timeline',
  '/projects',
  '/research',
  '/competitions',
  '/awards',
  '/media',
  '/campus',
  '/articles',
  '/articles/ai-resource-manager',
  '/articles/competition-record',
  '/articles/zhicai-xueban',
  '/articles/baoding-innovation-record',
  '/contact',
];

const customUrls = (process.env.INDEXNOW_URLS || '')
  .split(/\r?\n|,/) 
  .map((value) => value.trim())
  .filter(Boolean);

const urlList = customUrls.length
  ? customUrls.map((url) => (url.startsWith('http') ? url : `${siteUrl}${url.startsWith('/') ? '' : '/'}${url}`))
  : defaultPaths.map((path) => `${siteUrl}${path}`);

const host = new URL(siteUrl).host;
const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `${siteUrl}/${key}.txt`,
    urlList,
  }),
});

if (!response.ok) {
  throw new Error(`IndexNow submission failed: ${response.status} ${await response.text()}`);
}

console.log(`IndexNow accepted ${urlList.length} URL(s).`);

# 张译轩个人官网

**张译轩 / Zhang Yixuan · ZYX Lab**

官网：[https://zhangyixuan.xyz](https://zhangyixuan.xyz)

这是张译轩的个人科技品牌官网源代码。张译轩是保定三中科技队队长、学生会宣传部部长与高中生科技创新实践者，长期关注 **AI × 航空航天 × 智能系统**。本站以其个人成长与科技创新路径为主线，收录经本人确认适合公开展示的项目、竞赛、研究与报道记录。

代表项目为《面向月球/火星基地的AI资源管家系统》；张译轩担任项目主要负责人、第一作者。本仓库不收录未公开项目代码、学校内部资料、个人联系方式或其他敏感信息。

仓库已包含 Netlify 生产配置，可构建为无需登录即可访问的静态站点。

## 发布前必须完成的一项设置

将最终 HTTPS 域名设置为 `NEXT_PUBLIC_SITE_URL`，例如：

```powershell
$env:NEXT_PUBLIC_SITE_URL = "https://your-domain.example"
npm run build
```

这会让 `canonical`、Open Graph URL、`sitemap.xml`、`robots.txt` 与结构化数据使用正确的域名。当前 Netlify 生产配置使用 `https://zhangyixuan.xyz`；如日后更换域名，应同步更新后重新部署。

## 构建与部署

```powershell
npm run build:netlify
```

Netlify 会执行相同构建命令，并发布 `.netlify-static`。全部页面为预渲染的公开静态页面，无需访客登录。部署完成后，逐一打开下列地址确认可访问：

- `/`
- `/about`
- `/projects`
- `/awards`
- `/media`
- `/articles`
- `/sitemap.xml`
- `/robots.txt`
- `/7c9b8115409ca1e4c6d6d876eed8d8a9.txt`

## Google Search Console

1. 在 Google Search Console 添加最终域名属性并完成 DNS 或 HTML 验证。
2. 在“站点地图”提交 `https://你的域名/sitemap.xml`。
3. 首次发布后可对首页、About、Projects、Awards 与两篇文章使用“网址检查”请求抓取。
4. 提交站点地图或请求抓取并不保证收录；持续发布可靠、可访问的内容更重要。

## Bing Webmaster Tools 与 IndexNow

1. 在 Bing Webmaster Tools 添加并验证最终域名，提交同一份 sitemap。
2. 本仓库已包含 IndexNow key 文件：`public/7c9b8115409ca1e4c6d6d876eed8d8a9.txt`。部署后应能在根目录直接访问。
3. 新增或实质更新页面后，在本地运行：

```powershell
$env:SITE_URL = "https://你的域名"
node scripts/submit-indexnow.mjs
```

仅提交新增页面时，可增加 `INDEXNOW_URLS`，用逗号或换行分隔 URL 路径，例如：

```powershell
$env:INDEXNOW_URLS = "/articles/new-project-note"
node scripts/submit-indexnow.mjs
```

IndexNow 是变化通知，不等于收录或排序保证。更换 key 时，需同时更新 key 文件名、文件内容和脚本默认值。

## 百度与联网 AI

- 在百度搜索资源平台添加并验证网站后，提交 `sitemap.xml`，并按平台要求提交重要新 URL。
- `app/robots.ts` 已明确允许 `OAI-SearchBot`，从而使公开页面有资格被 ChatGPT Search 抓取；也允许 Googlebot、bingbot 与 Baiduspider。
- 不要在 CDN、防火墙或验证页中额外拦截这些搜索爬虫，也不要为重要内容添加 `noindex`。
- ChatGPT、豆包等联网 AI 是否引用页面取决于其各自的抓取与排序系统；正确的 robots、结构化数据和站点地图只能提高可发现性，不能保证回答或排名。

## 内容维护规范

- 只添加有公开链接、赛事材料或经本人确认的事实；团队项目必须完整标注团队属性。
- 新增公开社交主页时，再将已确认的网址加入 `Person.sameAs`；不要使用未验证或临时账号。
- 新文章应有清晰标题、作者、发布日期、来源链接和专属 URL；更新后同步更新 `app/sitemap.ts` 并运行 IndexNow 脚本。
- 不上传身份证、电话、住址、精确日程、证书编号等隐私信息。

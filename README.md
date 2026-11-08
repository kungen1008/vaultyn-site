# vaultyn.com

Vaultyn（密码保险箱）的产品网站。Astro 静态网站，三种语言：简体中文（`/`）、繁体中文（`/zh-hant/`）、英文（`/en/`）。

## 页面和文字

每处文字都是三种语言放在一起，改一种语言时要对照着改另外两种。

| 页面 | 路由 | 文字在哪里 |
|---|---|---|
| 首页 | `/` | `src/i18n.ts`，组件 `src/components/Home.astro` |
| 功能 | `/features/` | `src/features.ts`，组件 `Features.astro` |
| 价格、安全、使用条款、关于 | `/pricing/` `/security/` `/terms/` `/about/` | `src/pages-text.ts`，组件 `Text.astro` |
| 隐私政策、支持 | `/privacy/` `/support/` | `src/i18n.ts`，组件 `Doc.astro` |
| 帮助中心（含常见问题） | `/help/` `/help/<文章>/` | 文章在 `src/content/help/{zh,zh-hant,en}/*.md`，界面文字在 `src/help.ts` |

- 页面框架、`<head>` 和结构化数据在 `src/layouts/Base.astro`。
- 截图在 `public/shots/<语言>/`，全部是虚构数据，由软件仓库的 `scripts/site-shots.mjs` 生成后转成 WebP。
- 分享卡片图片在 `public/share/`，由 `npm run share-cards` 生成（需要 PowerShell）。
- `public/CNAME` 是自定义域名 `vaultyn.com`，不要删。

价格、试用规则和系统要求必须和 App Store 上的一致：免费下载，14 天试用是 0 元内购，终身版 US$24.99 一次买断，需要 macOS 13 或更新版本。

## 本地开发

```bash
npm ci
npm run dev      # 本地预览
npm run check    # 构建、生成站内搜索索引（pagefind），然后用 scripts/audit-site.mjs 检查内部链接和页面元数据
```

推送前先跑一遍 `npm run check`，检查不通过就不要推送。

## 发布

推送到 `main` 后，GitHub Actions（`.github/workflows/deploy.yml`）会自动构建并发布到 GitHub Pages，大约 1 分钟后上线。

上线后提交搜索引擎收录的步骤见 `docs/search-indexing.md`。

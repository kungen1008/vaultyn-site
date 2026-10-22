# vaultyn.com

Vaultyn（密码保险箱）的产品网站。Astro 静态网站，三种语言：简体（`/`）、繁体（`/zh-hant/`）、英文（`/en/`）。

- 文字：`src/i18n.ts`（三种语言放在一起，改一处对照着改另外两处）
- 页面：`src/components/Home.astro`（首页）、`src/components/Doc.astro`（隐私政策、使用帮助）
- 截图：`public/shots/<语言>/`，全部是虚构数据，由软件仓库的 `scripts/site-shots.mjs` 生成后转成 WebP

本地预览：`npm install`，然后 `npm run dev`。推送到 `main` 后由 GitHub Actions 自动发布到 GitHub Pages。

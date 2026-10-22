// vaultyn.com：Astro 静态网站，三种语言（简体为默认，不带前缀；繁体 /zh-hant/；英文 /en/）
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vaultyn.com',
  trailingSlash: 'always',
  i18n: { defaultLocale: 'zh', locales: ['zh', 'zh-hant', 'en'], routing: { prefixDefaultLocale: false } },
  integrations: [sitemap({ i18n: { defaultLocale: 'zh', locales: { zh: 'zh-CN', 'zh-hant': 'zh-Hant', en: 'en' } } })],
});

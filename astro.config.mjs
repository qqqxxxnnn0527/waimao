import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.duoforgeglobal.com', // 使用你的实际域名
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: {
          zh: 'zh-CN',
          en: 'en-US'
        }
      },
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
});

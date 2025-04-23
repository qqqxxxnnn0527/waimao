// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.duoforgeglobal.com/', // 替换为你的实际域名
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: {
          zh: 'zh-CN',
          en: 'en-US'
        }
      },
      // 可选：排除某些页面
      filter: (page) => !page.includes('/admin/'),
      // 可选：自定义更改频率
      changefreq: 'weekly',
      // 可选：自定义优先级
      priority: 0.7,
    }),
  ],
});

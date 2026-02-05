// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://0xnicecrypto.github.io',  // TODO: Replace 'yourusername' with your actual GitHub username
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false, // /about for en, /zh/about for zh
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
      langs: [],
      wrap: true,
    },
  },
});

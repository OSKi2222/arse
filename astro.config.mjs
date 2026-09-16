// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://oski2222.github.io',
  base: '/arse/',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'es', 'de', 'it', 'ru', 'zh', 'ja', 'ar'],
    routing: { prefixDefaultLocale: false },
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
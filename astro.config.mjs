import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://agw.bot',
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    // 全站 CSS 体量小，直接内联省一次请求
    inlineStylesheets: 'always',
  },
});

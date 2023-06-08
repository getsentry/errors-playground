import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  base: '/',
  trailingSlash: 'never',
  server: {
    port: 3001,
  },
  markdown: {
    syntaxHighlight: 'prism',
  },
  integrations: [
    react(),
    mdx(),
    sitemap({
      serialize: (item) => {
        if (item.url.at(-1) === '/') {
          item.url = item.url.slice(0, -1);
        }
        return item;
      },
    }),
  ],
});

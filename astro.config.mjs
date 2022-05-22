import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    //mode: 'mdx',
    remarkPlugins: [
      'remark-gfm', 'remark-smartypants',
      'remark-math' 
    ],
    rehypePlugins: [
      //'rehype-slug', < needed only prior beta.22
      'rehype-mathjax' 
    ]
  }
});

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkMermaid from 'remark-mermaidjs'

export default defineConfig({
  site: 'https://andrew0411.github.io',
  integrations: [mdx(), sitemap()],// MDX와 Sitemap 통합 활성화
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMermaid]
    shikiConfig: {
      theme: 'github-dark', // 코드 하이라이트 테마
      wrap: true           // 긴 코드 줄 바닥글 처리
    }
  }
});

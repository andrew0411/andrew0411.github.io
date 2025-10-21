import rss from '@astrojs/rss';
import { getAllPosts } from '../lib/content';
import { siteConfig } from '../config/siteConfig';

export async function GET(context) {
  const posts = await getAllPosts();
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,  // astro.config.mjs의 site URL 사용
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.summary || '',
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`
    })),
    customData: `<language>en-us</language>`
  });
}

import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const blog = await getCollection('blog')
  return rss({
    title: 'New Hope UMC Waukegan | News and Events',
    description: 'News and Events around our church',
    site: context.site,
    items: blog.map(post => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/posts/${post.id}/`
    })),
    customData: `<language>en-us</language>`,
  });
}
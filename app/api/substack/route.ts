// app/api/substack/route.ts
import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

// Automatically revalidates the cache every 10 minutes
export const revalidate = 600;

export async function GET() {
  const parser = new Parser();
  try {
    // 1. Fetch XML directly on the server to bypass browser CORS rules
    const feed = await parser.parseURL('https://anniezhe.substack.com/feed');
    
    // 2. Select the top 3 newest entries
    const posts = (feed.items || []).slice(0, 3).map((item) => ({
      title: item.title || 'Untitled Article',
      link: item.link || 'https://anniezhe.substack.com',
      pubDate: item.pubDate 
        ? new Date(item.pubDate).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          }) 
        : '',
      snippet: item.contentSnippet?.slice(0, 130) + '...',
    }));

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Failed to fetch Substack feed:', error);
    return NextResponse.json({ error: 'Failed to fetch feed' }, { status: 500 });
  }
}

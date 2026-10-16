// app/api/substack/route.ts
import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

// Force segment revalidation every 10 minutes at the server level
export const revalidate = 600; 

export async function GET() {
  const parser = new Parser();
  try {
    // 1. Fetch raw XML text using native fetch so Next.js can track it
    const res = await fetch('https://anniezhe.substack.com/feed', {
      next: { revalidate: 600 } // Backs up segment config
    });
    
    if (!res.ok) throw new Error('Substack server responded with an error');
    const xmlText = await res.text();

    // 2. Pass the raw string to the RSS Parser instead of a URL
    const feed = await parser.parseString(xmlText);
    
    const posts = (feed.items || []).slice(0, 3).map((item) => {
      const rawSnippet = item.contentSnippet || '';
      const snippet = rawSnippet.length > 130 
        ? `${rawSnippet.slice(0, 130)}...` 
        : rawSnippet;

      return {
        title: item.title || 'Untitled Article',
        link: item.link || 'https://anniezhe.substack.com',
        pubDate: item.pubDate 
          ? new Date(item.pubDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            }) 
          : '',
        snippet,
      };
    });

    return NextResponse.json(posts, {
      headers: {
        // Tells browsers and CDNs how long they should hold the response
        'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Failed to fetch Substack feed:', error);
    return NextResponse.json(
      { error: 'Failed to fetch feed' }, 
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store, max-age=0'
        }
      }
    );
  }
}

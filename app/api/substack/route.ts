// app/api/substack/route.ts
import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

// Revalidate the cached server response every 10 minutes
export const revalidate = 600; 

export async function GET() {
  const parser = new Parser();
  try {
    // Fetches the XML securely on the server
    const feed = await parser.parseURL('https://anniezhe.substack.com/feed');
    
    const posts = (feed.items || []).slice(0, 3).map((item) => {
      // FIX: Safely handle content snippets shorter than 130 characters
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
        // Tells browsers and Vercel/CDNs to cache the JSON for 10 minutes
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
          // IMPORTANT: Do not cache error states on the server or browser
          'Cache-Control': 'no-store, max-age=0'
        }
      }
    );
  }
}

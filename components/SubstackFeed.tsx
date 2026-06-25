// components/SubstackFeed.tsx
'use client'; // This directive stays at the top

import { useEffect, useState } from 'react';

interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  snippet: string;
}

// REMOVED 'async' from this function declaration line!
export default function SubstackFeed() {
  const [posts, setPosts] = useState<SubstackPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/substack');
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
        }
      } catch (err) {
        console.error('Error loading posts:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-[480px] mx-auto mt-12 px-2 text-center text-gray-400">
        Loading latest essays...
      </div>
    );
  }

  if (posts.length === 0) return null;

  return (
    <div className="w-full mx-auto mt-12 px-2">
      <h3 className="text-xl font-bold mb-6 text-black dark:text-white border-b pb-2 border-gray-200 dark:border-zinc-800">
        Latest Newsletters
      </h3>
      
      <div className="flex flex-col gap-4">
        {posts.map((post, index) => (
          <a 
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 p-4 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg hover:border-orange-400 dark:hover:border-orange-500 transition-colors"
          >
            <span className="text-xs font-semibold text-gray-400 dark:text-zinc-500">
              {post.pubDate}
            </span>
            <h4 className="font-bold text-base text-black dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
              {post.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-zinc-400">
              {post.snippet}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

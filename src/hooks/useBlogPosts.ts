import { useState, useEffect } from 'react';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
}

function parseFrontmatter(content: string): { metadata: any; content: string; } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { metadata: {}, content };
  }

  const [, frontmatter, markdownContent] = match;
  const metadata: any = {};


  frontmatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim();
      metadata[key.trim()] = value;
    }
  });

  return { metadata, content: markdownContent };
}

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log('Fetching blog posts from blog-posts-list.json...');
        const response = await fetch('/blog-posts-list.json', {
          headers: {
            'Accept': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const fileList = await response.json();
        console.log('File list:', fileList);


        const postsData = await Promise.all(
          fileList.map(async (filename: string) => {
            try {
              const postResponse = await fetch(`/blog/${filename}`);
              if (!postResponse.ok) {
                console.error(`Failed to fetch post ${filename}: ${postResponse.status}`);
                return null;
              }

              const content = await postResponse.text();
              const { metadata, content: markdownContent } = parseFrontmatter(content);

              return {
                id: filename.replace('.md', ''),
                title: metadata.title || 'Untitled',
                date: metadata.date || 'No date',
                summary: metadata.summary || 'No summary'
              };
            } catch (error) {
              console.error(`Error fetching post ${filename}:`, error);
              return null;
            }
          })
        );


        setPosts(postsData.filter(post => post !== null) as BlogPost[]);
      } catch (e) {
        setError(e instanceof Error ? e : new Error('Failed to fetch blog posts'));
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
} 
import { useState, useEffect } from 'react';
import matter from 'gray-matter';
import { BlogPostData } from '../types';

export const useBlogPost = (id: string | undefined) => {
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (!id) {
          throw new Error('No post ID provided');
        }

        const response = await fetch(`/blog-posts/${id}`);
        if (!response.ok) {
          throw new Error('Post not found');
        }

        const content = await response.text();
        const { data, content: markdownContent } = matter(content);
        setPost({
          content: markdownContent,
          title: data.title || 'Untitled',
          date: data.date ? new Date(data.date).toLocaleDateString() : 'Unknown date'
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  return { post, loading, error };
}; 
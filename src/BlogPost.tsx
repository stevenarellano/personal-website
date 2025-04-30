import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Layout from './components/layout/Layout';
import './App.css';

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

const BlogPost: React.FC = () => {
  const { postId } = useParams<{ postId: string; }>();
  const [post, setPost] = React.useState<{
    title: string;
    date: string;
    content: string;
  } | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    if (!postId) {
      setError(new Error('No post ID provided'));
      setLoading(false);
      return;
    }

    const fetchPost = async () => {
      try {

        console.log('Fetching blog posts list...');
        const listResponse = await fetch('/blog-posts-list.json', {
          headers: {
            'Accept': 'application/json'
          }
        });
        if (!listResponse.ok) {
          console.error('Failed to fetch blog posts list:', listResponse.status);
          throw new Error(`HTTP error! status: ${listResponse.status}`);
        }
        const postList = await listResponse.json();
        console.log('Available posts:', postList);


        const postFile = postList.find((file: string) => file === `${postId}.md`);
        if (!postFile) {
          console.error('Post not found:', postId);
          throw new Error('Post not found');
        }


        console.log('Fetching markdown content for:', postFile);
        const contentResponse = await fetch(`/blog/${postFile}`, {
          headers: {
            'Accept': 'text/markdown'
          }
        });
        if (!contentResponse.ok) {
          console.error('Failed to fetch markdown content:', contentResponse.status);
          throw new Error(`HTTP error! status: ${contentResponse.status}`);
        }
        const content = await contentResponse.text();
        console.log('Markdown content received');


        const { metadata, content: markdownContent } = parseFrontmatter(content);

        setPost({
          title: metadata.title || 'Untitled',
          date: metadata.date || 'No date',
          content: markdownContent
        });
      } catch (e) {
        console.error('Error in fetchPost:', e);
        setError(e instanceof Error ? e : new Error('Failed to fetch blog post'));
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) {
    return (
      <Layout title="Loading..." backLink="/blog" backText="Back to Blog List" intro="">
        <p>Loading post...</p>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title="Error" backLink="/blog" backText="Back to Blog List" intro="">
        <div className="error-message">
          <p>Error: {error.message}</p>
          <Link to="/blog">Return to blog list</Link>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout title="Not Found" backLink="/blog" backText="Back to Blog List" intro="">
        <div className="error-message">
          <p>Post not found</p>
          <Link to="/blog">Return to blog list</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title="My Blog"
      backLink="/blog"
      backText="Back to Blog List"
      intro=""
    >
      <article className="blog-post">
        <header>
          <h1>{post.title}</h1>
          <p className="blog-date">{post.date}</p>
        </header>
        <div className="blog-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost; 
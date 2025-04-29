import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import './App.css';
import LineBreak from './LineBreak';
import LINKS_DATA from './data/links';

type BlogPostData = {
  content: string;
  title: string;
  date: string;
};

const BlogPost: React.FC = () => {
  const { postId } = useParams<{ postId: string; }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        if (!postId) {
          throw new Error('No post ID provided');
        }

        const response = await fetch(`/blog-posts/${postId}.md`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog post');
        }

        const postContent = await response.text();
        const { data, content } = matter(postContent);

        setPost({
          content,
          title: data.title || 'Untitled',
          date: data.date ? new Date(data.date).toLocaleDateString() : 'Unknown date',
        });
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [postId]);

  return (
    <div className="App">
      <section className="profile-header">
        <div className="header-content">
          <div className="text-content">
            <h1 style={{ fontSize: '2rem' }}>My Blog</h1>
            <p className="intro">
              <em>Thoughts on machine learning, high performance computing, robotics, and more.</em>
            </p>
            <br />
            <div className="social-links">
              {LINKS_DATA.map((linkInfo, index) => (
                <span key={index}>
                  <a
                    href={linkInfo.link}
                    target={linkInfo.target}
                    rel={linkInfo.rel}
                  >
                    {linkInfo.name}
                  </a>
                  &emsp;
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <LineBreak color="#000" />

      <main className="profile-content">
        {loading ? (
          <p>Loading blog post...</p>
        ) : error ? (
          <div className="error-message">
            <p>Error: {error}</p>
            <p>
              <Link to="/blog">Return to blog list</Link>
            </p>
          </div>
        ) : post ? (
          <article className="blog-post">
            <header>
              <h2 className="header-title">{post.title}</h2>
              <p className="blog-date">{post.date}</p>
            </header>
            <div className="blog-content">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </article>
        ) : (
          <p>Blog post not found.</p>
        )}
      </main>

      <br />
      <footer>
        <Link to="/blog">← Back to Blog List</Link>
      </footer>
    </div>
  );
};

export default BlogPost; 
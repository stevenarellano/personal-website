import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';
import './App.css';
import LineBreak from './LineBreak';
import LINKS_DATA from './data/links';

type BlogPost = {
  id: string;
  title: string;
  date: string;
  summary: string;
};

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        // Get list of blog posts
        const response = await fetch('/blog-posts-list.json');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts list');
        }

        const postsList = await response.json();
        const postsData: BlogPost[] = [];

        // Fetch each blog post and extract front matter
        for (const postId of postsList) {
          const postResponse = await fetch(`/blog-posts/${postId}`);
          if (postResponse.ok) {
            const postContent = await postResponse.text();
            const { data } = matter(postContent);

            postsData.push({
              id: postId.replace('.md', ''),
              title: data.title || 'Untitled',
              date: data.date ? new Date(data.date).toLocaleDateString() : 'Unknown date',
              summary: data.summary || 'No summary available'
            });
          }
        }

        // Sort posts by date (most recent first)
        postsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

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
        <section id="blog-posts">
          <h2 className='header-title'>Posts</h2>

          {loading ? (
            <p>Loading blog posts...</p>
          ) : posts.length === 0 ? (
            <p>No blog posts found.</p>
          ) : (
            <ul className="blog-list">
              {posts.map((post) => (
                <li key={post.id} className="blog-item">
                  <Link to={`/blog/${post.id}`}>
                    <h3>{post.title}</h3>
                  </Link>
                  <p className="blog-date">{post.date}</p>
                  <p className="blog-summary">{post.summary}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <br />
      <footer>
        <Link to="/">← Back to Home</Link>
      </footer>
    </div>
  );
};

export default Blog; 
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { useBlogPosts } from './hooks/useBlogPosts';
import './App.css';

const Blog: React.FC = () => {
  const { posts, loading, error } = useBlogPosts();

  return (
    <Layout
      title="My Blog"
      intro="Thoughts on machine learning, high performance computing, robotics, and more."
      backLink="/"
      backText="Back to Home"
    >
      <section id="blog-posts">
        <h2 className='header-title'>Posts</h2>

        {loading ? (
          <p>Loading blog posts...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
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
    </Layout>
  );
};

export default Blog; 
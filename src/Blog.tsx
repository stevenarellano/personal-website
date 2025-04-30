import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { useBlogPosts } from './hooks/useBlogPosts';
import { Box, Typography, List, ListItem, Link as MuiLink, Divider } from '@mui/material';

const Blog: React.FC = () => {
  const { posts, loading, error } = useBlogPosts();

  return (
    <Layout
      title="My Blog"
      intro="Thoughts on machine learning, high performance computing, robotics, and more."
      backLink="/"
      backText="Back to Home"
    >
      <Box
        component="section"
        id="blog-posts"
        sx={{
          width: '100%'
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontFamily: '"Darker Grotesque", sans-serif',
            fontSize: '2.25rem',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
            mb: 4
          }}
        >
          POSTS
        </Typography>

        {loading ? (
          <Typography>Loading blog posts...</Typography>
        ) : error ? (
          <Box
            sx={{
              color: '#d32f2f',
              p: 2,
              border: '1px solid #ffcdd2',
              bgcolor: '#ffebee',
              borderRadius: 0,
              width: '100%'
            }}
          >
            <Typography>Error: {error.message}</Typography>
          </Box>
        ) : posts.length === 0 ? (
          <Typography>No blog posts found.</Typography>
        ) : (
          <List sx={{
            width: '100%',
            p: 0
          }}>
            {posts.map((post, index) => (
              <React.Fragment key={post.id}>
                <ListItem
                  sx={{
                    display: 'block',
                    p: 0,
                    mb: 2,
                    width: '100%'
                  }}
                >
                  <MuiLink
                    component={Link}
                    to={`/blog/${post.id}`}
                    sx={{
                      textDecoration: 'none',
                      color: '#000',
                      display: 'block',
                      width: '100%',
                      '&:hover': {
                        '& .post-title': {
                          color: '#0070f3'
                        }
                      }
                    }}
                  >
                    <Typography
                      className="post-title"
                      variant="h3"
                      sx={{
                        fontFamily: '"Darker Grotesque", sans-serif',
                        fontSize: '1.75rem',
                        fontWeight: 700,
                        letterSpacing: '-0.01em',
                        mb: 1,
                        transition: 'color 0.2s ease'
                      }}
                    >
                      {post.title}
                    </Typography>
                  </MuiLink>
                  <Typography
                    sx={{
                      fontFamily: '"Raleway", sans-serif',
                      color: '#666',
                      fontSize: '0.9rem',
                      mb: 2
                    }}
                  >
                    {post.date}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Raleway", sans-serif',
                      color: '#444',
                      lineHeight: 1.6,
                      fontSize: '1rem'
                    }}
                  >
                    {post.summary}
                  </Typography>
                </ListItem>
                {index < posts.length - 1 && (
                  <Divider sx={{ my: 4 }} />
                )}
              </React.Fragment>
            ))}
          </List>
        )}
      </Box>
    </Layout>
  );
};

export default Blog; 
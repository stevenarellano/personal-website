import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Layout from './components/layout/Layout';
import { Box, Typography, Link as MuiLink } from '@mui/material';

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
        <Typography>Loading post...</Typography>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title="Error" backLink="/blog" backText="Back to Blog List" intro="">
        <Box
          sx={{
            color: '#d32f2f',
            p: 2,
            border: '1px solid #ffcdd2',
            bgcolor: '#ffebee',
            borderRadius: '4px',
            maxWidth: '100%',
          }}
        >
          <Typography>Error: {error.message}</Typography>
          <MuiLink
            component={Link}
            to="/blog"
            sx={{
              color: '#333',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            Return to blog list
          </MuiLink>
        </Box>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout title="Not Found" backLink="/blog" backText="Back to Blog List" intro="">
        <Box
          sx={{
            color: '#d32f2f',
            p: 2,
            border: '1px solid #ffcdd2',
            bgcolor: '#ffebee',
            borderRadius: '4px',
            maxWidth: '100%',
            mx: 'auto'
          }}
        >
          <Typography>Post not found</Typography>
          <MuiLink
            component={Link}
            to="/blog"
            sx={{
              color: '#333',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            Return to blog list
          </MuiLink>
        </Box>
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
      <Box
        component="article"
        sx={{
          maxWidth: '100%',
          mx: { xs: 0, md: 'auto' },
          px: { xs: 0, md: 0 },
          pt: 2,
          p: 0,
        }}
      >
        <Box
          component="header"
          sx={{ mb: 4 }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mt: 4,
              mb: 2
            }}
          >
            {post.title}
          </Typography>
          <Typography
            sx={{
              color: '#666',
              fontSize: '0.9rem',
              my: 1
            }}
          >
            {post.date}
          </Typography>
        </Box>
        <Box
          sx={{
            lineHeight: 1.8,
            fontSize: '1.1rem',
            maxWidth: '100%',
            mx: 'auto',
            p: 0,
            '& h1, & h2, & h3': {
              mt: 4,
              mb: 2
            },
            '& p': {
              mb: 3
            },
            '& ul, & ol': {
              mb: 3,
              pl: 4
            }
          }}
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </Box>
      </Box>
    </Layout>
  );
};

export default BlogPost; 
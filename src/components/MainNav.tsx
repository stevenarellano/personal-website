import React from 'react';
import { Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const MainNav: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 4,
        mb: 2
      }}
    >
      <Link
        component={RouterLink}
        to="/"
        underline="none"
        sx={{
          fontFamily: '"IBM Plex Mono", monospace',
          textTransform: 'uppercase',
          fontWeight: 700,
          color: '#333',
          fontSize: '1rem',
          transition: 'color 0.2s ease',
          '&:hover': {
            color: '#0070f3'
          }
        }}
      >
        HOME
      </Link>
      <Link
        component={RouterLink}
        to="/blog"
        underline="none"
        sx={{
          fontFamily: '"IBM Plex Mono", monospace',
          textTransform: 'uppercase',
          fontWeight: 700,
          color: '#333',
          fontSize: '1rem',
          transition: 'color 0.2s ease',
          '&:hover': {
            color: '#0070f3'
          }
        }}
      >
        BLOG
      </Link>
    </Box>
  );
};

export default MainNav; 
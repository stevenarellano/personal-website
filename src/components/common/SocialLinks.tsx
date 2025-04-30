import React from 'react';
import { Box, Link } from '@mui/material';
import LINKS_DATA from '../../data/links';

const SocialLinks: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 3
      }}
      className="social-links"
    >
      {LINKS_DATA.map((linkInfo, index) => (
        <Link
          key={index}
          href={linkInfo.link}
          target={linkInfo.target}
          rel={linkInfo.rel}
          underline="hover"
          color="inherit"
          sx={{
            fontFamily: '"IBM Plex Mono", monospace',
            textTransform: 'uppercase',
            fontWeight: 700,
            fontSize: '0.875rem',
            letterSpacing: '0.05em'
          }}
        >
          {linkInfo.name}
        </Link>
      ))}
    </Box>
  );
};

export default SocialLinks;
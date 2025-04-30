import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface FooterProps {
  backLink: string;
  backText: string;
}

const Footer: React.FC<FooterProps> = ({ backLink, backText }) => {
  return (
    <Box component="footer" sx={{ my: 2 }}>
      <Link to={backLink} style={{ textDecoration: 'none', color: 'primary.main' }}>
        ← {backText}
      </Link>
    </Box>
  );
};

export default Footer; 
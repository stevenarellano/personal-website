import React from 'react';
import LINKS_DATA from '@/data/links'; // Adjusted path assuming data is in src/data
import { Button } from "@/components/ui/button";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Box component="header" sx={{ width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, px: 1, mb: 1, borderBottom: '1px dashed', borderColor: 'grey.400' }}>
        <Typography sx={{ letterSpacing: '-0.05em', fontSize: '1.2rem' }}>
          steven
          <Typography component="span" sx={{ animation: 'blink 1s step-end infinite', ml: 0.25 }}>_</Typography>
          Arellano
          <Typography component="span" sx={{ animation: 'blink 1s step-end infinite', ml: 0.25 }}>_</Typography>
        </Typography>
      </Box>
      <Box component="main" sx={{ width: '100%', margin: '0 auto', flexGrow: 1, px: 1 }}>
        <Box sx={{ border: '1px solid', borderColor: 'grey.400', padding: '0.25rem' }}>
          {children}
        </Box>
      </Box>
      <Box component="footer" sx={{ width: '100%', margin: '0 auto', py: 1, px: 1, mt: 1.5, borderTop: '1px dashed', borderColor: 'grey.400', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          &copy; {new Date().getFullYear()} steven Arellano // all rights reserved
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {LINKS_DATA.map((link) => (
            <Button
              key={link.name}
              variant="text"
              size="small"
              href={link.link}
              sx={{ textTransform: 'lowercase', letterSpacing: '0.05em', px: 0.5, py: 0.25 }}
            >
              <Link href={link.link} target={link.target} rel={link.rel} color="inherit" underline="none">
                {link.name}
              </Link>
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout; 
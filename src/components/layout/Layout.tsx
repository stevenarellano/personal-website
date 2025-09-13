import React from 'react';
import LINKS_DATA from '@/data/links';
import { Button } from "@/components/ui/button";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'hidden'
    }}>
      <Box component="header" sx={{
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 1,
        px: 1,
        borderBottom: '1px dashed',
        borderColor: 'grey.400',
        flexShrink: 0
      }}>
        <Typography sx={{ letterSpacing: '-0.05em', fontSize: '1.2rem' }}>
          steven
          <Typography component="span" sx={{ animation: 'blink 1s step-end infinite', ml: 0.25 }}>_</Typography>
          Arellano
          <Typography component="span" sx={{ animation: 'blink 1s step-end infinite', ml: 0.25 }}>_</Typography>
        </Typography>
      </Box>
      <Box component="main" sx={{
        width: '100%',
        margin: '0 auto',
        flexGrow: 1,
        px: 1,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Box sx={{
          border: '1px solid',
          borderColor: 'grey.400',
          padding: '0.25rem',
          height: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {children}
        </Box>
      </Box>
      <Box component="footer" sx={{
        width: '100%',
        margin: '0 auto',
        py: 1,
        px: 1,
        mt: 0.5,
        borderTop: '1px dashed',
        borderColor: 'grey.400',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0
      }}>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          &copy; {new Date().getFullYear()} steven Arellano
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {LINKS_DATA.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              target={link.target}
              rel={link.rel}
              color="inherit"
              underline="none"
            >
              <Button
                variant="text"
                size="small"
                sx={{ textTransform: 'lowercase', letterSpacing: '0.05em', px: 0.5, py: 0.25 }}
              >
                {link.name}
              </Button>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout; 
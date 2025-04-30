import React from 'react';
import { Container, Box, Divider } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  intro: string;
  showProfileImage?: boolean;
  backLink?: string;
  backText?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  intro,
  showProfileImage = false,
  backLink,
  backText
}) => {
  return (
    <Container
      sx={{
        width: '100%',
        margin: '0 auto',
        maxWidth: {
          xs: '100% !important',
          sm: '90% !important',
          md: '60% !important'
        },

      }}
    >
      <Box sx={{
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        py: 2,
        px: { xs: 0, md: 2 },
      }}>
        <Header title={title} intro={intro} showProfileImage={showProfileImage} />
        <Divider sx={{ my: 4 }} />
        <Box component="main" className="profile-content" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
        {backLink && backText && (
          <>
            <Box sx={{ my: 4 }} />
            <Footer backLink={backLink} backText={backText} />
          </>
        )}
      </Box>
    </Container>
  );
};

export default Layout; 
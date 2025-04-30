import React from 'react';
import { Box, Typography, Avatar, Stack } from '@mui/material';
import MainNav from '../MainNav';
import SocialLinks from '../common/SocialLinks';

interface HeaderProps {
  title: string;
  intro: string;
  showProfileImage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, intro, showProfileImage = false }) => {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'space-between',
        pt: 2,
        pb: 2
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        alignItems={{ xs: 'flex-start', md: 'flex-start' }}
        sx={{
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        <Box sx={{
          width: '100%',
          maxWidth: { xs: '100%', md: showProfileImage ? '75%' : '100%' },
          mb: { xs: 5, md: 0 },
          flex: 1
        }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: '2rem',
              pb: 2
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            className="intro-text"
            sx={{
              mb: 2,
              fontSize: '1.1rem',
              lineHeight: 1.6,
            }}
          >
            {intro}
          </Typography>
          <Stack spacing={0}>
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 2,
                }}
              >
                NAVIGATION
              </Typography>
              <MainNav />
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 2,
                }}
              >
                CONNECT
              </Typography>
              <SocialLinks />
            </Box>
          </Stack>
        </Box>

        {showProfileImage && (
          <Box sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' },
            alignItems: 'flex-start',
            width: { xs: '100%', md: '25%' },
            marginLeft: 'auto'
          }}>
            <Avatar
              src="assets/me.jpeg"
              alt="Steve"
              sx={{
                width: 250,
                height: 250,
                borderRadius: '4px',
                border: '1px solid #999',
                margin: '1rem 0',
                objectFit: 'cover'
              }}
              variant="square"
            />
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default Header;
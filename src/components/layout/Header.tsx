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
        spacing={3}
        alignItems={{ xs: 'flex-start', md: 'flex-start' }}
        sx={{
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        <Box sx={{
          width: '100%',
          maxWidth: { xs: '100%', md: showProfileImage ? '70%' : '100%' },
          mb: { xs: 4, md: 0 },
          flex: 1
        }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 3,
              fontWeight: 700,
              fontSize: '1.75rem',
              pb: 1
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            className="intro-text"
            sx={{
              mb: 3,
              fontSize: '1rem',
              lineHeight: 1.5,
            }}
          >
            {intro}
          </Typography>
          <Stack spacing={3}>
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 1,
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
                  mb: 1,
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
            width: { xs: '100%', md: '30%' },
            marginLeft: 'auto'
          }}>
            <Avatar
              src="assets/me.jpeg"
              alt="Steve"
              sx={{
                width: 100,
                height: 100,
                borderRadius: '4px',
                border: '1px solid #999',
                margin: '0.5rem 0',
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
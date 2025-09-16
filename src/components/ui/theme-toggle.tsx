'use client';

import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { mode, toggleMode } = useTheme();

  return (
    <Tooltip title={`switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
      <IconButton
        onClick={toggleMode}
        size="small"
        sx={{
          color: 'text.primary',
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }}
        aria-label={`switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      >
        {mode === 'light' ? <DarkMode fontSize="small" /> : <LightMode fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;

'use client';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider, useTheme } from '../src/contexts/ThemeContext';
import { createAppTheme } from '../src/theme';

function ThemeWrapper({ children }: { children: React.ReactNode; }) {
  const { mode } = useTheme();
  const theme = createAppTheme(mode);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        {children}
        <Analytics />
      </ThemeWrapper>
    </ThemeProvider>
  );
}

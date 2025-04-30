import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import BlogPost from './BlogPost';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

// Import fonts
import '@fontsource/darker-grotesque';
import '@fontsource/michroma';
import '@fontsource/raleway';
import '@fontsource/ibm-plex-mono';
import '@fontsource/ibm-plex-sans';

// Create a minimal, basic HTML-like theme
const theme = createTheme({
  typography: {
    fontFamily: [
      '"Raleway"',
      'sans-serif'
    ].join(','),
    h1: {
      fontFamily: '"Darker Grotesque", sans-serif',
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: '"Darker Grotesque", sans-serif',
      fontSize: '2.25rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: '"Darker Grotesque", sans-serif',
      fontSize: '1.75rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: '"Darker Grotesque", sans-serif',
      fontSize: '1.5rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontFamily: '"Darker Grotesque", sans-serif',
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Darker Grotesque", sans-serif',
      fontSize: '1.1rem',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Raleway", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: '"Raleway", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
    button: {
      fontFamily: '"Darker Grotesque", sans-serif',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    subtitle1: {
      fontFamily: '"Darker Grotesque", sans-serif',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  },
  palette: {
    primary: {
      main: '#000000',
      light: '#000000',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#000000',
      light: '#000000',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    divider: '#000000',
    text: {
      primary: '#000000',
      secondary: '#000000',
    }
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontSize: '16px',
          fontFamily: '"Raleway", sans-serif',
          lineHeight: 1.5,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          borderRadius: 0,
          fontWeight: 700,
          boxShadow: 'none',
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: '#000',
          color: '#fff',
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#333',
          },
        },
        outlined: {
          backgroundColor: 'transparent',
          color: '#000',
          '&:hover': {
            backgroundColor: '#eee',
          },
        },
        text: {
          backgroundColor: 'transparent',
          color: '#000',
          '&:hover': {
            backgroundColor: '#eee',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          padding: '16px 0',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: '32px 0',
          borderBottomWidth: 1,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: 16,
          paddingBottom: 16,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontWeight: 700,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1600px !important',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          '&.Mui-selected': {
            backgroundColor: '#000',
            color: '#fff',
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

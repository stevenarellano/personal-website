import { createTheme } from '@mui/material/styles';

const baseFont = "'Times New Roman', Times, serif";
const baseFontSize = 14;

const createAppTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode,
    background: {
      default: mode === 'light' ? '#ffffff' : '#121212',
      paper: mode === 'light' ? '#f9f9f9' : '#1e1e1e',
    },
    text: {
      primary: mode === 'light' ? '#191919' : '#ffffff',
      secondary: mode === 'light' ? '#595959' : '#b3b3b3',
    },
    divider: mode === 'light' ? '#e0e0e0' : '#333333',
  },
  typography: {
    fontFamily: baseFont,
    fontSize: baseFontSize,
    allVariants: {
      textTransform: 'lowercase',
      fontFamily: baseFont,
      fontSize: baseFontSize,
      fontWeight: 'normal',
    },
    h1: { fontFamily: baseFont, fontSize: baseFontSize, fontWeight: 'normal', textTransform: 'lowercase' },
    h2: { fontFamily: baseFont, fontSize: baseFontSize, fontWeight: 'normal', textTransform: 'lowercase' },
    h3: { fontFamily: baseFont, fontSize: baseFontSize, fontWeight: 'normal', textTransform: 'lowercase' },
    h4: { fontFamily: baseFont, fontSize: baseFontSize, fontWeight: 'normal', textTransform: 'lowercase' },
    h5: { fontFamily: baseFont, fontSize: baseFontSize, fontWeight: 'normal', textTransform: 'lowercase' },
    h6: { fontFamily: baseFont, fontSize: baseFontSize, fontWeight: 'normal', textTransform: 'lowercase' },
    body1: { fontFamily: baseFont, fontSize: baseFontSize, textTransform: 'lowercase', fontWeight: 'normal' },
    body2: { fontFamily: baseFont, fontSize: baseFontSize, textTransform: 'lowercase', fontWeight: 'normal' },
    subtitle1: { fontFamily: baseFont, fontSize: baseFontSize, textTransform: 'lowercase', fontWeight: 'normal' },
    subtitle2: { fontFamily: baseFont, fontSize: baseFontSize, textTransform: 'lowercase', fontWeight: 'normal' },
    button: { fontFamily: baseFont, fontSize: baseFontSize, textTransform: 'lowercase', fontWeight: 'normal' },
    caption: { fontFamily: baseFont, fontSize: baseFontSize, textTransform: 'lowercase', fontWeight: 'normal' },
    overline: { fontFamily: baseFont, fontSize: baseFontSize, textTransform: 'lowercase', fontWeight: 'normal' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          text-transform: lowercase;
          font-family: ${baseFont} !important;
          font-weight: normal !important;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'lowercase',
          fontFamily: baseFont,
          fontSize: baseFontSize,
          fontWeight: 'normal',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          fontFamily: baseFont,
          fontSize: baseFontSize,
          fontWeight: 'normal',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: baseFont,
          fontSize: baseFontSize,
          textTransform: 'lowercase',
          fontWeight: 'normal',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          fontFamily: baseFont,
          fontSize: baseFontSize,
          textTransform: 'lowercase',
          fontWeight: 'normal',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: baseFont,
          fontSize: baseFontSize,
          textTransform: 'lowercase',
          fontWeight: 'normal',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: baseFont,
          textTransform: 'lowercase',
          fontWeight: 'normal',
        },
      },
    },
  },
});

// Export the theme creation function and a default light theme
export { createAppTheme };
export default createAppTheme('light'); 
import { createTheme } from '@mui/material/styles';
import type {} from '@mui/lab/themeAugmentation';

export const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', 'sans-serif'",
    fontSize: 12,
    button: {
      fontWeight: 700,
      textTransform: 'none',
    },

    h1: {
      fontSize: 'clamp(3rem, 10vw, 5rem)',
      fontWeight: 600,
    },
  },

  palette: {
    primary: {
      main: '#9020fb',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F26E3F',
      contrastText: '#fff',
    },
    background: {
      default: '#0e0219',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: '30px',
          padding: '3px',
          borderWidth: '20px',
          width: 180,
          height: 48,
          fontSize: '1rem ',

          '&:hover': {
            border: 'none',
          },
        },
      },
    },

    MuiYearPicker: {
      styleOverrides: {
        root: {
          color: '#000 !important',
        },
      },
    },
  },
});

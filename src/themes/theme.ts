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
      main: '#864ac0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f26e3f',
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

          '&:hover': {
            border: 'none',
          },
        },

        sizeMedium: {
          width: 180,
          height: 48,
        },

        sizeSmall: {
          width: 80,
          fontSize: '0.875rem',
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

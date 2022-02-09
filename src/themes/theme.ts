import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', 'sans-serif'",
    fontSize: 12,
    button: {
      fontWeight: 700,
    },
  },

  palette: {
    primary: {
      main: '#f14140',
    },
  },
});

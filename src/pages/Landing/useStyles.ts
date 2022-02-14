import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  landing: {
    padding: theme.spacing(2, 12),
    backgroundColor: '#0e0219',
    minHeight: '100vh',
    color: '#fff',

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2, 6),
    },

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 4),
    },
  },

  header: {
    margin: theme.spacing(12, 0, 9, 0),

    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(3, 0, 5, 0),
    },
  },

  heading: {
    paddingTop: theme.spacing(4),
    marginBottom: theme.spacing(4),

    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(40),
    },
  },

  feature: {
    textAlign: 'center',

    '&.MuiGrid-root': {
      padding: theme.spacing(0, 3),
      marginBottom: theme.spacing(5),

      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(0, 2),
      },

      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0),
      },
    },
  },

  featureHeading: {
    '&.MuiTypography-root': {
      fontSize: '1.5rem',
      marginBottom: theme.spacing(),
      fontWeight: 600,
    },
  },

  featureBody: {
    '&.MuiTypography-root': {
      color: '#ffffffc7',

      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
  },

  footer: {
    textAlign: 'center',

    '&.MuiGrid-root': {
      marginTop: theme.spacing(20),
    },
  },

  link: {
    '&.MuiButton-root': {
      textTransform: 'capitalize',
      padding: 0,
      margin: '0 0 0 5px',
      minWidth: 0,
      fontWeight: 400,
      fontSize: '.875rem',
      color: '#0A0A9A',

      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
}));

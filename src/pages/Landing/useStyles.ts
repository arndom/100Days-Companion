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
      padding: theme.spacing(2),
    },
  },

  logo: {
    display: 'flex',
    alignItems: 'center',
  },

  roadmap: {
    '&.MuiButton-root': {
      background: 'linear-gradient(to right, #F26E3F, #9020fb)',
      border: 'none',
      borderRadius: '30px',
      padding: '3px',
      display: 'block',
      marginLeft: 'auto',

      [theme.breakpoints.down('md')]: {
        width: 120,
      },

      '&:hover': {
        border: 'none',
      },
    },

    '&>.MuiTypography-root': {
      borderRadius: '30px',
      background: '#0e0219',
      width: '100%',
      padding: theme.spacing(1, 3),
      textTransform: 'none',
      fontSize: '1rem',
      color: '#fff',

      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(1, 2),
      },
    },
  },

  header: {
    margin: theme.spacing(12, 0, 9, 0),

    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(3, 0, 5, 0),
    },
  },

  heading: {
    '&.MuiTypography-root': {
      paddingTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  },

  btnWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',

    [theme.breakpoints.down('md')]: {
      flexDiection: 'column',
    },
  },

  signup: {
    '&.MuiButton-root': {
      width: 180,
      height: 48,
      borderRadius: 30,
      fontSize: '1rem ',
      textTransform: 'uppercase',

      [theme.breakpoints.down('md')]: {
        width: 140,
        fontSize: '0.875rem',
      },
    },
  },

  login: {
    '&.MuiButton-root': {
      width: 180,
      height: 48,
      borderRadius: 30,
      fontSize: '1rem ',
      textTransform: 'uppercase',
      color: '#fff',
      borderWidth: '3px',
      marginLeft: theme.spacing(2),

      [theme.breakpoints.down('md')]: {
        width: 130,
        fontSize: '0.875rem',
      },
    },
  },

  feature: {
    textAlign: 'center',
    border: '1px solid #7f5ba13d',
    borderRadius: 10,
    minHeight: 150,
    minWidth: 250,
    backgroundColor: '#7f5ba13d',

    '&.MuiGrid-root': {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(5),
    },
  },

  featureHeading: {
    '&.MuiTypography-root': {
      fontSize: '1.5rem',
      marginBottom: theme.spacing(2),
      fontWeight: 600,
    },
  },

  featureBody: {
    '&.MuiTypography-root': {
      color: '#ffffffc4',
      padding: theme.spacing(0, 4),

      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
  },

  footer: {
    marginTop: theme.spacing(20),
    borderTop: '1px solid #fff',
    paddingTop: theme.spacing(2),
  },

  link: {
    '&.MuiButton-root': {
      textTransform: 'capitalize',
      padding: 0,
      minWidth: 0,
      width: 'auto',
      marginLeft: 5,
      fontWeight: 400,
      fontSize: '.875rem',
      color: '#fff',

      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
}));

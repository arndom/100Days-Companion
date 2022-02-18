import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
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

  home: {
    '&.MuiButton-root': {
      background: 'linear-gradient(to right, #F26E3F, #9020fb)',
      border: 'none',
      borderRadius: '30px',
      padding: '3px',
      display: 'block',
      marginLeft: 'auto',

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
    },
  },

  roadmap: { width: 415, height: 400, background: '#292950' },

  title: {
    fontSize: '0.7rem',
    padding: '0.45em 1em',
    borderRadius: 6,
  },

  listItemText: {
    color: '#fff',
  },
}));

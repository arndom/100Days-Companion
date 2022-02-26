import { theme } from '../../themes/theme';

export const useStyles = {
  container: {
    padding: theme.spacing(2, 12),

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2, 6),
    },

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 4),
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
};

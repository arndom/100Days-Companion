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

  footer: {
    marginTop: theme.spacing(20),
    borderTop: '1px solid #fff',
    paddingTop: theme.spacing(2),
  },

  link: {
    padding: 0,
    minWidth: 0,
    width: 'auto',
    marginLeft: '5px',
    fontWeight: 400,
    fontSize: '.875rem',
    color: '#fff',

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
};

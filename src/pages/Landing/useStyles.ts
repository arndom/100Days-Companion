import { theme } from '../../themes/theme';

export const useStyles = {
  landing: {
    padding: theme.spacing(0, 12, 2),
    minHeight: '100vh',

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 6, 2),
    },

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 4, 2),
    },
  },

  logo: {
    display: 'flex',
    alignItems: 'center',
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
  },

  btn: {
    width: 180,
    height: 48,
    borderRadius: 30,
    fontSize: '1rem ',

    [theme.breakpoints.down('md')]: {
      width: 120,
      height: 36,
    },
  },

  feature: {
    textAlign: 'center',
    border: '1px solid #7f5ba13d',
    borderRadius: 5,
    minHeight: 150,
    minWidth: 250,
    backgroundColor: '#7f5ba13d',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },

  featureHeading: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(2),
    fontWeight: 600,
  },

  featureBody: {
    color: '#ffffffc4',
    padding: theme.spacing(0, 4),

    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
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
};

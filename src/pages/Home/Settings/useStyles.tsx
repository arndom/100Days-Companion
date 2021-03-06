import { theme } from '../../../themes/theme';

export const useStyles = {
  container: {
    padding: theme.spacing(0, 12, 2),

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 6, 2),
    },

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 4, 2),
    },
  },

  notifications: {
    fontSize: '1.3em',
    marginBottom: '1em',
  },

  frequency: {
    width: '100%',
    maxWidth: '300px',

    '& .MuiFormGroup-root': {
      marginTop: '1em',
      marginBottom: '2em',
    },

    '& .MuiRadio-root': {
      color: '#9020fb',
    },
  },

  app: {
    width: '100%',
    maxWidth: '300px',

    '& .MuiFormGroup-root': {
      marginTop: '1em',
    },

    '& .MuiRadio-root': {
      color: '#9020fb',
    },
  },

  avatar: {
    border: '1px solid #fff',
    padding: '2em 0 0 0',
    '& .MuiAvatar-root': {
      width: 120,
      height: 120,
      margin: '0 auto',
    },
  },

  displayName: {
    fontSize: '1.2em',
    marginTop: '1em',
  },
};

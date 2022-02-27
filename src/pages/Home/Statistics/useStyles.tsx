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

  calendar: {
    border: '1px solid #ccc',
    height: '300px',
    margin: theme.spacing(0, 10),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(5, 5),
    },
  },

  badges: {
    marginLeft: theme.spacing(7),
    marginTop: theme.spacing(2),

    '& .MuiListItemText-root': {
      marginLeft: theme.spacing(2),
    },
  },

  languages: {
    // marginLeft: theme.spacing(5),
    marginTop: theme.spacing(2),

    '& .MuiListItemText-root': {
      marginLeft: theme.spacing(2),
    },
  },
};

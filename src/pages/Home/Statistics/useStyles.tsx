import { theme } from '../../../themes/theme';
export const useStyles = {
  root: {
    paddingLeft: theme.spacing(12),
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
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
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(2),

    '& .MuiListItemText-root': {
      marginLeft: theme.spacing(2),
    },
  },

  languages: {
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(2),

    '& .MuiListItemText-root': {
      marginLeft: theme.spacing(2),
    },
  },
};

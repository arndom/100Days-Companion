import { theme } from '../../../themes/theme';
export const useStyles = {
  root: {
    paddingLeft: '12em',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '0',
    },
  },

  calendar: {
    border: '1px solid #ccc',
    height: '300px',
    margin: theme.spacing(0, 10),
  },

  badges: {
    marginLeft: '40px',
    width: '200px',
  },

  languages: {
    marginLeft: '2px',
  },
};

import { theme } from '../../themes/theme';

export const useStyles = {
  home: {
    padding: theme.spacing(4, 10),

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4),
    },
  },

  profile: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(7),

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },

  avatar: {
    width: 120,
    height: 120,
    marginRight: theme.spacing(3),

    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 'auto', 2),
    },
  },

  btn: {
    justifyContent: 'left',

    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      justifyContent: 'center',
    },
  },

  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 120,

    '.MuiTypography-root': {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  },

  tabsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 7,
  },

  link: {
    fontSize: 'clamp(1.5rem, 6vw, 1.7rem)',
    width: 250,

    '&.MuiTab-textColorPrimary': {
      color: '#fff',
    },

    [theme.breakpoints.down('sm')]: {
      width: 170,
    },
  },

  tabs: {
    color: '#fff',
  },
} as const;

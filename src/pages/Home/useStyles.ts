import { theme } from '../../themes/theme';

export const useStyles = {
  home: {
    padding: theme.spacing(4, 10),
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(7),
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    marginRight: theme.spacing(3),
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '80px',
  },
  link: {
    fontSize: 'clamp(1.2rem, 6vw, 1.7rem)',
    color: '#fff',
  },
  tabs: {
    color: '#fff',
  },
};

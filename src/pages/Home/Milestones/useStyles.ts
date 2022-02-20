import { theme } from '../../../themes/theme';

export const useStyles = {
  milestones: {
    paddingTop: theme.spacing(5),
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',

    div: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.spacing(8),
      marginRight: theme.spacing(5),
      width: 250,

      '&>.MuiTypography-root': {
        fontSize: '1.5rem',
      },
    },

    img: {
      width: 100,
      marginRight: theme.spacing(3),
    },
  },
} as const;

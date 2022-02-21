import { theme } from '../../../themes/theme';

export const useStyles = {
  milestones: {
    div: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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

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
      position: 'absolute',
      width: '250px',
      filter: 'grayscale(100%) opacity(20%)',
      // filter: ''
    },
  },
} as const;

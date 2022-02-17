export const useStyles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },

  stepperContainer: {
    width: '80%',
    m: 'auto',
    pt: 4,
    height: 64,
  },

  step: {
    svg: {
      width: 35,
      height: 35,
      fontSize: '3rem',
      fill: '#0e0219',
      border: '2px  solid #F26E3F',
      borderRadius: '100%',
      '&.Mui-active': {
        fill: '#F26E3F',
        border: '0px',
      },
      '&.Mui-completed': {
        fill: '#fff',
        border: '0px',
      },
    },
  },

  stepLabel: {
    fontSize: '100px',
    color: '#fff',
    '&.Mui-completed': {
      color: '#fff',
    },
  },

  content: {
    display: 'grid',
    placeItems: 'center',
    height: 'calc(100vh - 64px)',
  },

  step2: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    alignItems: 'center',
  },

  rainbowbtn: {
    background: 'linear-gradient(to right, #F26E3F, #9020fb)',
  },

  step3: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    alignItems: 'center',
  },

  datePicker: {},

  datePickerTextfield: {
    '& .MuiOutlinedInput-root': {
      border: '2px solid #F26E3F',

      input: {
        color: '#fff',
      },

      svg: {
        fill: '#fff',
      },
    },
  },
};

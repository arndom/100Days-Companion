export const useStyles = {
  root: {
    backgroundColor: '#0e0219',
    minHeight: '100vh',
    color: '#fff',
    padding: '40px 40px',
  },

  // Roadmap Status Card

  roadmapStatusCard: {
    height: 400,
    maxWidth: '100vw',
    background: '#292950',

    '& .MuiTypography-root': {
      fontSize: '0.7rem',
      borderRadius: 6,
      color: '#fff',
      marginBottom: '10px',

      '&>.MuiBox-root': {
        padding: '0.45em 1em',
      },
    },

    '& .MuiList-root': {
      width: '100%',
      maxWidth: 360,

      '&>.MuiListItem-root': {
        paddingLeft: 0,
      },
    },

    '& .MuiDivider-root': {
      height: '4rem',
      marginRight: '7px',
    },
  },

  // Login Button

  login: {
    '&.MuiButton-root': {
      background: 'linear-gradient(to right, #F26E3F, #9020fb)',
      border: 'none',
      borderRadius: '30px',
      padding: '3px',
      display: 'block',
      marginLeft: 'auto',

      '&:hover': {
        border: 'none',
      },
    },

    '&>.MuiTypography-root': {
      borderRadius: '30px',
      background: '#0e0219',
      width: '100%',
      padding: '5px 20px',
      textTransform: 'none',
      fontSize: '1rem',
      color: '#fff',
    },
  },

  search: {
    input: { color: 'white' },
    label: { color: 'white', textAlign: 'right' },
    marginTop: '2em',
    marginBottom: '2em',

    '& .MuiOutlinedInput-input': {
      background: '#292950',
      borderRadius: '10px',
    },
  },

  feature: {
    height: 50,
    width: 540,
    background: '#292950',
    marginBottom: '20px',

    '& .MuiTypography-root': {
      color: '#fff',
    },

    '& .MuiBox-root': {
      background: '#f26e3f',
      padding: '0.45em 0.6em',
    },
  },

  suggest: {
    marginBottom: '20px',
  },

  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#292950',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },

  title: {
    marginTop: '2em',
    marginBottom: '2em',
    input: { color: 'white' },
  },
  description: {
    input: { color: 'white' },
  },
  add: {
    marginTop: '3em',
    borderRadius: 0,
  },
};

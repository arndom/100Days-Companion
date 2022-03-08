import { Grid, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { navigateTo } from '../../utils/utils';
import { useStyles } from './useStyles';

const Navabar = () => {
  const classes = useStyles;
  const navigate = useNavigate();

  const navigator = (href: string) => navigateTo(href, navigate);

  return (
    <Grid container sx={classes.container}>
      <Grid item xs={6}>
        <Box sx={classes.logo} onClick={() => navigator('/milestones')}>
          <img src={logo} alt="logo" height={50} width={50} />
          <Typography variant="h6" ml={1} sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
            Companion
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Button variant="outlined" onClick={() => navigator('/roadmap')} sx={classes.roadmap} disableRipple>
          <Typography>Roadmap</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Navabar;

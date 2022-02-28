import { Button, Grid, Typography } from '@mui/material';
import { AnimatedSVG } from '../../assets/svgs/animatedSVG';
import { useStyles } from './useStyles';
import { Link } from 'react-router-dom';

const Landing = () => {
  const classes = useStyles;

  return (
    <Grid container sx={classes.landing}>
      <Grid container sx={classes.header}>
        <Grid item xs={12} md={6} marginBottom={{ xs: 5, md: 0 }}>
          <Typography variant="h1" sx={classes.heading}>
            <span style={{ color: '#9020fb' }}>100 </span>Day Companion
          </Typography>
          <Button component={Link} to="/join" variant="contained" sx={classes.btn}>
            Get started
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <AnimatedSVG />
        </Grid>
      </Grid>

      <Grid container gap={3} justifyContent="center">
        <Grid item xs={12} sm={3.8} sx={classes.feature}>
          <Typography sx={classes.featureHeading}>Track your progress</Typography>
          <Typography sx={classes.featureBody}>
            100 day companion aims to incrase your productivity by setting a challenge and gamifying the process by
            setting milestones, breaking down statistics and much more
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3.8} sx={classes.feature}>
          <Typography sx={classes.featureHeading}>Receive notifications</Typography>
          <Typography sx={classes.featureBody}>
            Get daily or weekly reminders by email, discord or any other available platforms of your choice and to stay
            untop of your 100 day goal
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3.8} sx={classes.feature}>
          <Typography sx={classes.featureHeading}>Earn badges and more</Typography>
          <Typography sx={classes.featureBody}>
            Earn badges, view commit frequency and make suggestions to make the app better
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;

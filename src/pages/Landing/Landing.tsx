import { Button, Grid, IconButton, Typography } from '@mui/material';
import { AnimatedSVG } from '../../assets/svgs/animatedSVG';
import { useStyles } from './useStyles';

const Landing = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.landing}>
      <Grid item xs={6}>
        Logo
      </Grid>
      <Grid item xs={6}>
        <Button variant="outlined" className={classes.roadmap} disableRipple>
          <Typography>Roadmap</Typography>
        </Button>
      </Grid>

      <Grid container className={classes.header}>
        <Grid item xs={12} md={6} marginBottom={{ xs: 5, md: 0 }}>
          <Typography variant="h1" className={classes.heading}>
            <span style={{ color: '#9020fb' }}>100 </span>Day Companion
          </Typography>
          <Button variant="contained" className={classes.btn}>
            Start journey
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <AnimatedSVG />
        </Grid>
      </Grid>

      <Grid container gap={3} justifyContent="center">
        <Grid item xs={12} sm={3.8} className={classes.feature}>
          <Typography className={classes.featureHeading}>Track your progress</Typography>
          <Typography className={classes.featureBody}>
            100 day companion aims to incrase your productivity by setting a challenge and gamifying the process by
            setting milestones, breaking down statistics and much more
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3.8} className={classes.feature}>
          <Typography className={classes.featureHeading}>Receive notifications</Typography>
          <Typography className={classes.featureBody}>
            Get daily or weekly reminders by email, discord or any other available platforms of your choice and to stay
            untop of your 100 day goal
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3.8} className={classes.feature}>
          <Typography className={classes.featureHeading}>Earn badges and more</Typography>
          <Typography className={classes.featureBody}>
            Earn badges, view commit frequency, get extension recommendations and make suggestions to make the app
            better
          </Typography>
        </Grid>
      </Grid>

      <Grid container alignItems="center" className={classes.footer}>
        <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
          <Typography>
            Made with ❤️ by
            <Button target="_blank" href="http://github.com/arndom" className={classes.link} disableRipple>
              Mohammed Al-Amin
            </Button>
            ,
            <Button target="_blank" href="https://github.com/Omzlaw" className={classes.link} disableRipple>
              Omeiza ohinoyi e okene
            </Button>
            ,
            <Button target="_blank" href="http://github.com/habib-ahmad" className={classes.link} disableRipple>
              Habib Ahmad
            </Button>
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <IconButton
            target="_blank"
            href="http://github.com/arndom/100Days-Companion"
            sx={{ display: 'block', margin: '0 auto' }}
            disableRipple
          >
            <img
              src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"
              alt="GitHub"
              style={{ width: '45px' }}
            />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;

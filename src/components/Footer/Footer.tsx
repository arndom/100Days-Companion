import { Box, Grid, Typography, IconButton, Button } from '@mui/material';
import { useStyles } from './useStyles';

const Footer = () => {
  const classes = useStyles;

  return (
    <Box sx={classes.container}>
      <Grid container alignItems="center" sx={classes.footer}>
        <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
          <Typography>
            Made with ❤️ by
            <Button target="_blank" href="http://github.com/arndom" sx={classes.link} disableRipple>
              Nabil,
            </Button>
            <Button target="_blank" href="https://github.com/Omzlaw" sx={classes.link} disableRipple>
              Omeiza,
            </Button>
            <Button target="_blank" href="http://github.com/habib-ahmad" sx={classes.link} disableRipple>
              Ahmad
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
    </Box>
  );
};

export default Footer;

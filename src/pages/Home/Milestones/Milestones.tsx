import { Grid, Typography, Box } from '@mui/material';
import { BadgeSVG } from '../../../assets/svgs/Badge/BadgeSVG';
import { useStyles } from './useStyles';
import greyBadge from '../../../assets/images/badge.png';

interface IBadge {
  text: string;
  value: boolean;
}

const Badge = ({ text, value }: IBadge) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      {value ? (
        <Box>
          <Box sx={{ position: 'absolute' }}>
            <BadgeSVG />
          </Box>
          <Typography sx={{ mt: 20, zIndex: 1 }}>{text}</Typography>
        </Box>
      ) : (
        <Box width={250} height={150}>
          <img src={greyBadge} alt="greyed_badge" />
          <Typography sx={{ mt: 20, zIndex: 1, filter: 'grayscale(100%) opacity(20%)' }}>{text}</Typography>
        </Box>
      )}
    </Grid>
  );
};

const Milestones = (): JSX.Element => {
  const classes = useStyles;
  const milestones = [
    {
      text: '7 Days',
      value: true,
    },
    {
      text: '2 Weeks',
      value: true,
    },
    {
      text: '3 Weeks',
      value: true,
    },
    {
      text: '1 Month',
      value: false,
    },
    {
      text: '2 Months',
      value: false,
    },
    {
      text: '3 Months',
      value: false,
    },
    {
      text: '100 Days',
      value: false,
    },
  ];

  return (
    <Grid container justifyContent="center" rowSpacing={10} sx={classes.milestones}>
      {milestones.map((milestone, index) => (
        <Badge key={index} text={milestone.text} value={milestone.value} />
      ))}
    </Grid>
  );
};

export default Milestones;

import { Grid, Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useStyles } from './useStyles';
import gem1 from '../../../assets/images/gem1.png';
import gem2 from '../../../assets/images/gem2.png';
import gem3 from '../../../assets/images/gem3.png';
import gem4 from '../../../assets/images/gem4.png';
import gem5 from '../../../assets/images/gem5.png';

const classes = useStyles;

interface ChartProps {
  data: any[];
}

const Chart = (props: ChartProps) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={props.data} margin={{ top: 5, right: 55, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="frequency" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
);

const Statistics = (): JSX.Element => {
  const earnedBadges = [
    { name: '1 Month', image: gem1 },
    { name: '21 Days', image: gem2 },
    { name: '2 Months', image: gem3 },
    { name: '7 Days', image: gem4 },
    { name: 'Capstone', image: gem5 },
  ];

  const topLanguages = [
    { name: 'JavaScript', image: gem1 },
    { name: 'TypeScript', image: gem2 },
    { name: 'React', image: gem3 },
    { name: 'NodeJs', image: gem4 },
    { name: 'Angular', image: gem5 },
  ];

  const frequencyData = [
    { date: 'Day 1', frequency: 20 },
    { date: 'Day 2', frequency: 10 },
    { date: 'Day 3', frequency: 5 },
    { date: 'Day 4', frequency: 6 },
    { date: 'Day 5', frequency: 10 },
    { date: 'Day 6', frequency: 12 },
    { date: 'Day 7', frequency: 8 },
  ];

  return (
    <Grid sx={classes.root} container spacing={5}>
      <Grid container item>
        <Grid item xs={12} sm={12} md={6}>
          <Chart data={frequencyData} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box sx={classes.calendar}></Box>
        </Grid>
      </Grid>
      <Grid container item justifyContent="flex-start">
        <Grid sx={classes.badges}>
          <Typography>Earned badges</Typography>
          <List>
            {earnedBadges.map((badge, index) => (
              <ListItem key={index}>
                <img width="20" height="20" src={badge.image} alt="" />
                <ListItemText primary={badge.name} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid sx={classes.languages}>
          <Typography>Top Languages</Typography>
          <List>
            {topLanguages.map((language, index) => (
              <ListItem key={index}>
                <img width="20" height="20" src={language.image} alt="" />
                <ListItemText primary={language.name} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Statistics;

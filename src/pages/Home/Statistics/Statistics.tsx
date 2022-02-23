import { Grid, Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useStyles } from './useStyles';

const classes = useStyles;

interface ChartProps {
  data: any[];
}

const Chart = (props: ChartProps) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={props.data} margin={{ top: 5, right: 55, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="frequency" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
);

const Statistics = (): JSX.Element => {
  const earnedBadges = [
    { name: '1 Month', image: '../../../assets/images/gem1.png' },
    { name: '21 Days', image: '../../../assets/images/gem2.png' },
    { name: '2 Months', image: '../../../assets/images/gem3.png' },
    { name: '7 Days', image: '../../../assets/images/gem4.png' },
    { name: 'Capstone', image: '../../../assets/images/gem5.png' },
  ];

  const topLanguages = [
    { name: 'JavaScript', image: '../../../assets/images/gem1.png' },
    { name: 'TypeScript', image: '../../../assets/images/gem2.png' },
    { name: 'React', image: '../../../assets/images/gem3.png' },
    { name: 'NodeJs', image: '../../../assets/images/gem4.png' },
    { name: 'Angular', image: '../../../assets/images/gem5.png' },
  ];

  const frequencyData = [
    { name: 'Day 1', frequency: 20 },
    { name: 'Day 2', frequency: 10 },
    { name: 'Day 3', frequency: 5 },
    { name: 'Day 4', frequency: 6 },
    { name: 'Day 5', frequency: 10 },
    { name: 'Day 6', frequency: 12 },
    { name: 'Day 7', frequency: 8 },
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
      <Grid container item>
        <Grid sx={classes.badges} item xs={12} sm={12} md={6}>
          <Typography>Earned badges</Typography>
          <List>
            {earnedBadges.map((badge, index) => (
              <ListItem key={index}>
                <img src={badge.image} alt="" />
                <ListItemText primary={badge.name} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid sx={classes.languages} item xs={12} sm={12} md={6}>
          <Typography>Top Languages</Typography>
          <List>
            {topLanguages.map((language, index) => (
              <ListItem key={index}>
                <img src={language.image} alt="" />
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

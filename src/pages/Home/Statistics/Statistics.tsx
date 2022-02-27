import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Typography, List, ListItem, ListItemText, Skeleton } from '@mui/material';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useStyles } from './useStyles';
import gem3 from '../../../assets/images/gem3.png';

const classes = useStyles;

interface ChartProps {
  data: unknown[];
}

const Chart = (props: ChartProps) => (
  <ResponsiveContainer width="100%" height={320}>
    <LineChart data={props.data} margin={{ top: 15, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="contributionCount" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
);

const Statistics = (): JSX.Element => {
  const user = 'arndom';
  const from = '2022-02-01T00:00:00Z';
  const [loading, setLoading] = useState(true);

  const statsURL = `https://us-central1-dayscompanion.cloudfunctions.net/getContributionDetails?user=${user}&from=${from}`;
  const langsURL = `https://us-central1-dayscompanion.cloudfunctions.net/getTopLanguages?username=${user}`;

  const _stats = [
    { date: 'Day 1', contributionCount: 20 },
    { date: 'Day 2', contributionCount: 10 },
    { date: 'Day 3', contributionCount: 5 },
    { date: 'Day 4', contributionCount: 6 },
    { date: 'Day 5', contributionCount: 10 },
    { date: 'Day 6', contributionCount: 12 },
    { date: 'Day 7', contributionCount: 8 },
  ];
  const [stats, setStats] = useState(_stats);

  const _languages = [''];
  const skeletonLang = Array(5).fill(0);
  const [languages, setLanguages] = useState(_languages);

  useEffect(() => {
    const promise1 = axios.get(statsURL);
    const promise2 = axios.get(langsURL);

    Promise.all([promise1, promise2]).then(function (values) {
      const res = values;
      const stat = res[0].data.contributionFrequency;
      const _lang = res[1].data;
      const lang = Object.fromEntries(Object.entries(_lang).slice(0, 5));
      const langArr = Object.keys(lang);
      setStats(stat);
      setLanguages(langArr);
      setLoading(false);
    });
  }, [statsURL, langsURL]);

  return (
    <Grid sx={classes.container} container spacing={5}>
      <Typography variant="h6" ml={7} mt={4}>
        Your Contribution History
      </Typography>
      <Chart data={stats} />

      <Grid container item justifyContent="flex-start">
        <Grid sx={classes.languages}>
          <Typography variant="h6">Your Top 5 Languages</Typography>
          <List>
            {loading
              ? skeletonLang.map((language, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <img width="20" height="20" src={gem3} alt="" />
                    <Skeleton sx={{ bgcolor: '#4e526e', ml: 2, my: '4px' }} width={150} />
                  </ListItem>
                ))
              : languages.map((language, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <img width="20" height="20" src={gem3} alt="" />
                    <ListItemText primary={language} />
                  </ListItem>
                ))}
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Statistics;

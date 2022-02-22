import { Grid } from '@mui/material';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useStyles } from './useStyles';

const classes = useStyles;

interface ChartProps {
  data: any[];
}

const Chart = (props: ChartProps) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="frequency" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
);

const Statistics = (): JSX.Element => {
  const data = [
    { name: 'Day 1', frequency: 20 },
    { name: 'Day 2', frequency: 10 },
    { name: 'Day 3', frequency: 5 },
    { name: 'Day 4', frequency: 6 },
    { name: 'Day 5', frequency: 10 },
    { name: 'Day 6', frequency: 12 },
    { name: 'Day 7', frequency: 8 },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={6}>
        <Chart data={data} />
      </Grid>
    </Grid>
  );
};

export default Statistics;

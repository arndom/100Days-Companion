import { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Avatar,
  IconButton,
} from '@mui/material';
import { Edit } from '@mui/icons-material';

import { useStyles } from './useStyles';

const classes = useStyles;

const Settings = (): JSX.Element => {
  const [frequency, setFrequency] = useState('daily');
  const [app, setApp] = useState('email');

  const handleFrequencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFrequency((event.target as HTMLInputElement).value);
  };

  const handleAppChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApp((event.target as HTMLInputElement).value);
  };

  return (
    <Grid container columnSpacing={40} rowSpacing={15} justifyContent="center">
      <Grid item>
        <Typography sx={classes.notifications}>Notifications</Typography>
        <Typography>Frequency</Typography>
        <FormControl sx={classes.frequency}>
          <RadioGroup aria-labelledby="frequency" name="frequency" value={frequency} onChange={handleFrequencyChange}>
            <FormControlLabel value="daily" control={<Radio />} label="Daily" />
            <FormControlLabel value="weekly" control={<Radio />} label="Weekly" />
          </RadioGroup>
        </FormControl>

        <Typography>App</Typography>
        <FormControl sx={classes.app}>
          <RadioGroup aria-labelledby="app" name="app" value={app} onChange={handleAppChange}>
            <FormControlLabel value="email" control={<Radio />} label="Email" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item>
        <Box sx={classes.avatar}>
          <Avatar />
          <Grid container justifyContent="flex-end">
            <IconButton>
              <Edit sx={{ color: '#fff' }} />
            </IconButton>
          </Grid>
        </Box>
        <Box>
          <Typography sx={classes.displayName}>
            Display Name: Human O A
            <IconButton>
              <Edit sx={{ color: '#fff' }} />
            </IconButton>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Settings;

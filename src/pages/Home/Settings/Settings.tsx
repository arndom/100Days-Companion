import { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from '@mui/material';

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
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={frequency}
            onChange={handleFrequencyChange}
          >
            <FormControlLabel value="daily" control={<Radio />} label="Daily" />
            <FormControlLabel value="weekly" control={<Radio />} label="Weekly" />
          </RadioGroup>
        </FormControl>

        <Typography>App</Typography>
        <FormControl sx={classes.app}>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={app}
            onChange={handleAppChange}
          >
            <FormControlLabel value="email" control={<Radio />} label="Email" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item>
        <Box>Image</Box>
      </Grid>
    </Grid>
  );
};

export default Settings;

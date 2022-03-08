import React, { useEffect, useState } from 'react';
import { Grid, Typography, Radio, RadioGroup, FormControl, FormControlLabel } from '@mui/material';

import { useStyles } from './useStyles';
import { useAuthContext } from '../../../context/AuthContext';
import { auth } from '../../../utils/firebaseConfig';
import { updateNotificationsFreq } from '../../../utils/firebaseUtils';

const classes = useStyles;

const Settings = (): JSX.Element => {
  const [state] = useAuthContext();
  const [frequency, setFrequency] = useState(state.notificationFrequency);
  const [app, setApp] = useState('email');

  const [uid, setUID] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setUID(user.uid);
    });
  }, []);

  const handleFreqUpdate = async (value: string) => {
    const id = uid;
    await updateNotificationsFreq(id, value);
  };

  const handleFrequencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setFrequency(value);
    handleFreqUpdate(value);
  };

  const handleAppChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApp((event.target as HTMLInputElement).value);
  };

  return (
    <Grid sx={classes.container} container justifyContent="flex-start">
      <Grid item>
        <Typography sx={classes.notifications}>Notifications Frequency</Typography>
        <FormControl sx={classes.frequency}>
          <RadioGroup aria-labelledby="frequency" name="frequency" value={frequency} onChange={handleFrequencyChange}>
            <FormControlLabel value="daily" control={<Radio />} label="Daily" />
            <FormControlLabel value="weekly" control={<Radio />} label="Weekly" />
          </RadioGroup>
        </FormControl>

        <Typography sx={classes.notifications}>Notifcations App</Typography>
        <FormControl sx={classes.app}>
          <RadioGroup aria-labelledby="app" name="app" value={app} onChange={handleAppChange}>
            <FormControlLabel value="email" control={<Radio />} label="Email" />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Settings;

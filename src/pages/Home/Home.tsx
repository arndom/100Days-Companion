import { useState } from 'react';
import { Avatar, Box, Button, Tab, Tabs, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import { Link, Outlet } from 'react-router-dom';

const classes = useStyles;

const Home = (): JSX.Element => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={classes.home}>
      <Box sx={classes.header}>
        <Box sx={classes.profile}>
          <Avatar sx={classes.avatar} />
          <Box sx={classes.textWrapper}>
            <Typography>Human 0A</Typography>
            <Typography>Javascript</Typography>
            <Typography>6/100</Typography>
          </Box>
        </Box>
        <Button size="small" variant="contained">
          Logout
        </Button>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Tabs value={value} onChange={handleChange} variant="scrollable" sx={classes.tabs}>
          <LinkTab label="Milestones" to="milestones" />
          <LinkTab label="Statistics" to="statistics" />
          <LinkTab label="Settings" to="settings" />
        </Tabs>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Home;

interface LinkTabProps {
  label: string;
  to: string;
}

const LinkTab = (props: LinkTabProps) => {
  return <Tab component={Link} {...props} sx={classes.link} disableRipple />;
};

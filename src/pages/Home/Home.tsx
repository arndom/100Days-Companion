import { useState } from 'react';
import { Avatar, Box, Button, Tab, Tabs, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import { Link, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';

const classes = useStyles;

interface LinkTabProps {
  label: string;
  to: string;
}

const LinkTab = (props: LinkTabProps) => {
  return <Tab component={Link} {...props} sx={classes.link} disableRipple />;
};

const Home = (): JSX.Element => {
  const [value, setValue] = useState(0);
  const [state] = useAuthContext();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const img = state.photo ? state.photo : '';
  const stack = Object.keys(state.stack);

  return (
    <Box sx={classes.home}>
      <Box sx={classes.profile}>
        <Avatar src={img} alt="" sx={classes.avatar} />
        <Box sx={classes.textWrapper}>
          <Typography>{state.name}</Typography>
          <Typography>{stack.map((lang) => `${lang}, `)}</Typography>
          <Typography>{`${state.count}/100`}</Typography>
          <Button onClick={logout} variant="text" size="small" sx={classes.btn} disableRipple>
            Logout
          </Button>
        </Box>
      </Box>

      <Box sx={classes.tabsWrapper}>
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

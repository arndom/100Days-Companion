import { useEffect, useState } from 'react';
import { Avatar, Box, Button, Skeleton, Tab, Tabs, Typography } from '@mui/material';
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
  const [loading, setLoading] = useState(true);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    state.name && setLoading(false);
  }, [state]);

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
  const objToArray = (obj: IStack) => Object.keys(obj).map((key) => [key, obj[key]]);
  const _stack = objToArray(state.stack);
  const stack = _stack.filter((item) => item.includes(true)).map((item) => item[0]);

  return (
    <Box sx={classes.home}>
      <Box sx={classes.profile}>
        {loading ? (
          <Skeleton variant="circular" sx={[classes.skeleton, classes.avatar]}>
            <Avatar sx={classes.avatar} />
          </Skeleton>
        ) : (
          <Avatar sx={classes.avatar} alt="profile" src={img} />
        )}
        <Box sx={classes.textWrapper}>
          {loading ? <Skeleton width="180%" sx={classes.skeleton} /> : <Typography>{state.name}</Typography>}
          {loading ? (
            <Skeleton width="250%" sx={classes.skeleton} />
          ) : (
            <Box sx={classes.stack}>
              {stack.map((lang, index) => (
                <Typography key={index}>{lang}</Typography>
              ))}
            </Box>
          )}
          <Typography>{loading ? <Skeleton sx={classes.skeleton} /> : `${state.count}/100`}</Typography>
          <Button onClick={logout} variant="text" size="small" sx={classes.btn} disableRipple>
            Logout
          </Button>
        </Box>
      </Box>

      <Box sx={classes.tabsWrapper}>
        {loading ? (
          <Skeleton width="80%" sx={classes.skeleton} />
        ) : (
          <Tabs value={value} onChange={handleChange} variant="scrollable" sx={classes.tabs}>
            <LinkTab label="Milestones" to="milestones" />
            <LinkTab label="Statistics" to="statistics" />
            <LinkTab label="Settings" to="settings" />
          </Tabs>
        )}
      </Box>
      <Outlet />
    </Box>
  );
};

export default Home;

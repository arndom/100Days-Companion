import { useEffect, useState } from 'react';
import { Avatar, Box, Button, Skeleton, Tab, Tabs, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import { Link, Outlet } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../utils/firebaseConfig';

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
  const [loading, setLoading] = useState(true);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const uid = 'y0w0xNZ7vicrs7QIpz9Y';

  const [user, setUser] = useState<IFirebaseUser>({
    count: 0,
    email: '',
    milestones: {
      '7days': false,
      '14days': false,
      '21days': false,
      '30days': false,
      '60days': false,
      '90days': false,
      '100days': false,
    },
    name: '',
    notification_frequency: '',
    photo: '',
    stack: {
      Angular: false,
      JS: false,
      Node: false,
      React: false,
      Vue: false,
    },
    start_date: '',
  });

  useEffect(() => {
    const userDocRef = doc(db, 'users', uid);

    (async () => {
      const doc = await getDoc(userDocRef);

      if (doc.exists()) {
        const _data = doc.data() as IFirebaseUser;
        setUser({
          count: _data.count,
          email: _data.email,
          milestones: _data.milestones,
          name: _data.name,
          notification_frequency: _data.notification_frequency,
          photo: _data.photo,
          stack: _data.stack,
          start_date: _data.start_date,
        });
        setLoading(false);
      } else {
        console.log('non existent');
      }
    })();
  }, []);

  const objToArray = (obj: IStack) => Object.keys(obj).map((key) => [key, obj[key]]);
  const _stack = objToArray(user.stack);
  const stack = _stack.filter((item) => item.includes(true)).map((item) => item[0]);

  return (
    <Box sx={classes.home}>
      <Box sx={classes.profile}>
        {loading ? (
          <Skeleton variant="circular" sx={[classes.skeleton, classes.avatar]}>
            <Avatar sx={classes.avatar} />
          </Skeleton>
        ) : (
          <Avatar sx={classes.avatar} alt="profile" src={user.photo} />
        )}
        <Box sx={classes.textWrapper}>
          <Typography>{loading ? <Skeleton width="180%" sx={classes.skeleton} /> : user.name}</Typography>
          <Typography>
            {loading ? (
              <Skeleton width="250%" sx={classes.skeleton} />
            ) : (
              <Box sx={classes.stack}>
                {stack.map((lang, index) => (
                  <Typography key={index}>{lang}</Typography>
                ))}
              </Box>
            )}
          </Typography>
          <Typography>{loading ? <Skeleton sx={classes.skeleton} /> : `${user.count}/100`}</Typography>
          <Button variant="text" size="small" sx={classes.btn}>
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

import {
  Box,
  Card,
  Grid,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  InputBase,
  Button,
} from '@mui/material';
import { KeyboardArrowUp, SearchRounded } from '@mui/icons-material';
import { useStyles } from './useStyles';

interface IRoadmapStatusCard {
  title: string;
  color: string;
  options: { title: string; type: string; votes: number }[];
}

const RoadmapStatusCard = ({ title, color, options }: IRoadmapStatusCard) => {
  const classes = useStyles();
  return (
    <Card sx={{ width: 415, height: 400, background: '#292950' }}>
      <CardContent>
        <Typography variant="h6" sx={{ color: '#fff', marginBottom: '10px' }}>
          <span style={{ background: `${color}` }} className={classes.title}>
            {title.toUpperCase()}
          </span>
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360 }}>
          {options.map((option, index) => (
            <ListItem
              key={index}
              sx={{ paddingLeft: 0 }}
              secondaryAction={
                <IconButton aria-label="more details">
                  <Box>
                    <KeyboardArrowUp sx={{ color: '#9020fb' }} />
                    <Typography sx={{ color: '#fff' }}>{option.votes}</Typography>
                  </Box>
                </IconButton>
              }
            >
              <Divider
                orientation="vertical"
                sx={{ height: '4rem', borderLeft: `3px solid ${color}`, marginRight: '7px' }}
              />
              <ListItemText
                className={classes.listItemText}
                primary={option.title}
                secondary={option.type}
                secondaryTypographyProps={{ color: '#fff', marginTop: '2px' }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

const PublicRoadmap = () => {
  const classes = useStyles();

  const suggestions = [
    { title: 'Courses', type: 'Feature request', votes: 10 },
    { title: 'Courses', type: 'Feature request', votes: 10 },
  ];
  const planned = [{ title: 'Courses', type: 'Feature request', votes: 10 }];
  const inProgress = [{ title: 'Courses', type: 'Feature request', votes: 10 }];
  const live = [{ title: 'Courses', type: 'Feature request', votes: 10 }];

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        Logo
      </Grid>
      <Grid item xs={6}>
        <Button variant="outlined" className={classes.home} disableRipple>
          <Typography>Home</Typography>
        </Button>
      </Grid>
      <Grid container gap={4}>
        <Grid sx={{ marginTop: '20px' }} container xs={12} direction="row" justifyContent="flex-end">
          <IconButton aria-label="search" sx={{ marginBottom: '6px' }}>
            <InputBase sx={{ color: '#fff' }} placeholder="Search" />
            <SearchRounded sx={{ color: '#fff', marginRight: '3px' }} />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ maxWidth: 415, height: 50, background: '#292950' }}>
            <CardContent>
              <Grid container>
                <Grid item xs={6}>
                  <Typography sx={{ color: '#fff' }}>Feature requests</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ color: '#fff' }}>
                    <span style={{ background: '#f26e3f' }} className={classes.title}>
                      58
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item container spacing={4} xs={12}>
          <Grid item>
            <RoadmapStatusCard title="Suggestions" color="#9020fb" options={suggestions} />
          </Grid>
          <Grid item>
            <RoadmapStatusCard title="Planned" color="#1B3C40" options={planned} />
          </Grid>
          <Grid item>
            <RoadmapStatusCard title="In Progress" color="#3E3418" options={inProgress} />
          </Grid>
          <Grid item>
            <RoadmapStatusCard title="Live" color="#223E2B" options={live} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PublicRoadmap;

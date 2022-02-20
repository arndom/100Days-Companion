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
  Button,
  TextField,
} from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { useStyles } from './useStyles';

const classes = useStyles;

interface IRoadmapStatusCard {
  title: string;
  color: string;
  options: { title: string; type: string; votes: number }[];
}

const RoadmapStatusCard = ({ title, color, options }: IRoadmapStatusCard) => {
  return (
    <Card sx={classes.roadmapStatusCard}>
      <CardContent>
        <Typography variant="h6">
          <Box component="span" sx={{ background: `${color}` }}>
            {title.toUpperCase()}
          </Box>
        </Typography>
        <List>
          {options.map((option, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <Box>
                  <Grid container>
                    <IconButton edge="end" aria-label="vote">
                      <KeyboardArrowUp sx={{ color: '#9020fb' }} />
                    </IconButton>
                  </Grid>
                  <Grid container sx={{ paddingLeft: '11px' }}>
                    <Typography>52</Typography>
                  </Grid>
                </Box>
              }
            >
              <Divider orientation="vertical" sx={{ borderLeft: `3px solid ${color}` }} />
              <ListItemText
                primary={option.title}
                secondary={option.type}
                secondaryTypographyProps={{ marginTop: '2px' }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

const PublicRoadmap = () => {
  const suggestions = [
    { title: 'Courses', type: 'Feature request', votes: 10 },
    { title: 'Courses', type: 'Feature request', votes: 10 },
  ];
  const planned = [{ title: 'Courses', type: 'Feature request', votes: 10 }];
  const inProgress = [{ title: 'Courses', type: 'Feature request', votes: 10 }];
  const live = [{ title: 'Courses', type: 'Feature request', votes: 10 }];

  return (
    <Grid sx={classes.root} container>
      <Grid container item>
        <Grid item xs={6}>
          Logo
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" sx={classes.login} disableRipple>
            <Typography>Login</Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container item direction="row" justifyContent="flex-end">
        <TextField sx={classes.search} placeholder="Search..."></TextField>
      </Grid>
      <Grid container item direction="row" justifyContent="flex-start">
        <Card sx={classes.feature}>
          <CardContent>
            <Grid container item justifyContent="space-between">
              <Grid item>
                <Typography>Feature requests</Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Box component="span">89</Box>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid container item spacing={4}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <RoadmapStatusCard title="Suggestions" color="#9020fb" options={suggestions} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <RoadmapStatusCard title="Planned" color="#1B3C40" options={planned} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <RoadmapStatusCard title="In Progress" color="#3E3418" options={inProgress} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <RoadmapStatusCard title="Live" color="#223E2B" options={live} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PublicRoadmap;

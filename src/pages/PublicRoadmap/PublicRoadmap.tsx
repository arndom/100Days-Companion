import { useState } from 'react';
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
  FormControl,
  Button,
  TextField,
  Modal,
} from '@mui/material';
import { KeyboardArrowUp, Save } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useStyles } from './useStyles';
import { addFeatureRequest } from '../../utils/firebaseUtils';

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
  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Form
  const [featureRequest, setFeatureRequest] = useState({ title: '', description: '' });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFeatureRequest({ ...featureRequest, [name]: value });
  };
  // Loading Button
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.SyntheticEvent) => {
    setLoading(true);
    const { title, description } = featureRequest;
    if (title === '' && description === '') {
      return;
    }
    event.preventDefault();
    addFeatureRequest({ ...featureRequest, votes: 0, type: 'Feature request' });
    setLoading(false);
    handleClose();
  };

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
      <Grid sx={classes.suggest} container item>
        <Button onClick={handleOpen} variant="outlined">
          Suggest a Feature
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Box sx={classes.modal}>
            <Typography variant="h6" component="h2">
              New Suggestion
            </Typography>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <TextField
                  name="title"
                  required
                  sx={classes.title}
                  placeholder="Title"
                  variant="standard"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <TextField
                  name="description"
                  required
                  placeholder="Description"
                  sx={classes.description}
                  variant="standard"
                  onChange={handleChange}
                />
              </FormControl>
              <LoadingButton
                sx={classes.add}
                color="secondary"
                type="submit"
                loading={loading}
                loadingPosition="start"
                startIcon={<Save />}
                variant="contained"
              >
                Add
              </LoadingButton>
            </form>
          </Box>
        </Modal>
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

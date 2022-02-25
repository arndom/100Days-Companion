import React, { useState, useEffect } from 'react';
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
  Snackbar,
  Alert,
} from '@mui/material';
import { KeyboardArrowUp, Save } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useStyles } from './useStyles';
import { addFeatureRequest, getRoadmaps, convertRoadmapsSnapshotToMap } from '../../utils/firebaseUtils';

const classes = useStyles;

interface IRoadmapStatusCard {
  title: string;
  color: string;
  options: IFeatureRequest[];
}

interface IModalItem {
  item: IFeatureRequest;
}

const RoadmapStatusCard = ({ title, color, options }: IRoadmapStatusCard) => {
  // Feature Modal
  const [open, setOpen] = useState(false);
  const handleOpen = (option: IFeatureRequest) => {
    setItem({ ...option });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [item, setItem] = useState({ type: '', title: '', description: '', votes: 0 });

  const CustomModal = ({ item }: IModalItem) => {
    const { title, description, votes } = item;
    return (
      <Modal open={open} onClose={handleClose}>
        <Box sx={classes.modal}>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item>
              <Typography variant="h6" component="h2">
                {title}
              </Typography>
              <Typography variant="h6" component="h6">
                {description}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="h2">
                {votes}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    );
  };

  return (
    <Card sx={classes.roadmapStatusCard}>
      <CardContent>
        <Typography variant="h6">
          <Box component="span" sx={{ background: `${color}` }}>
            {title.toUpperCase()}
          </Box>
        </Typography>
        <List>
          <CustomModal item={item} />
          {options.map((option, index: number) => (
            <ListItem
              key={index}
              secondaryAction={
                <Box>
                  <Grid container>
                    <IconButton edge="end" aria-label="vote">
                      <KeyboardArrowUp sx={{ color: '#9020fb' }} />
                    </IconButton>
                  </Grid>
                  <Grid container sx={{ paddingLeft: '13px' }}>
                    <Typography>{option.votes}</Typography>
                  </Grid>
                </Box>
              }
            >
              <Divider orientation="vertical" sx={{ borderLeft: `3px solid ${color}` }} />
              <IconButton onClick={() => handleOpen(option)}>
                <ListItemText
                  primary={option.title}
                  secondary={option.type}
                  secondaryTypographyProps={{ marginTop: '2px' }}
                />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

const PublicRoadmap = () => {
  const [roadmaps, setRoadmaps] = useState({});

  // Alert
  const [alert, setAlert] = useState({ isTrue: false, message: '' });
  const handleAlertClose = () => setAlert({ ...alert, isTrue: false });

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
  // Submit
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setLoading(true);
    const { title, description } = featureRequest;
    if (title === '' && description === '') {
      return;
    }
    try {
      await addFeatureRequest({ ...featureRequest, votes: 0, type: 'Feature request' });
      setAlert({ isTrue: true, message: 'Feature request added successfully!' });
    } catch (error) {
      setAlert({ isTrue: true, message: 'Feature request add was unsuccessful!' });
    }
    setLoading(false);
    handleClose();
  };

  // Get roadmaps
  useEffect(() => {
    (async () => {
      const roadmaps = await getRoadmaps();
      setRoadmaps(roadmaps);
    })();
  }, []);

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
        {convertRoadmapsSnapshotToMap(roadmaps)?.map((roadmap: IFeatureRequestDocument, index: number) => (
          <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
            <RoadmapStatusCard title={roadmap.type} color={roadmap.color} options={roadmap.items} />
          </Grid>
        ))}
      </Grid>
      {alert.isTrue && (
        <Snackbar open={alert.isTrue} autoHideDuration={3000} onClose={handleAlertClose}>
          <Alert variant="filled" severity="info">
            {alert.message}
          </Alert>
        </Snackbar>
      )}
    </Grid>
  );
};

export default PublicRoadmap;

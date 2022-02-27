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
  Autocomplete,
  Skeleton,
} from '@mui/material';
import { KeyboardArrowUp, Save } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useStyles } from './useStyles';
import {
  addFeatureRequest,
  getFeatureRequests,
  convertRoadmapsSnapshotToMap,
  filterRoadmapsByStatus,
  voteFeatureRequest,
  onSnapshot,
  Timestamp,
} from '../../utils/firebaseUtils';
const classes = useStyles;
const isAuthenticated = true;

interface IRoadmapStatusCard {
  status: string;
  color: string;
  items: IFeatureRequest[];
  loading: boolean;
}

interface IFeatureModalDetails {
  title: string;
  description: string;
  votes: number;
}

interface IFeatureModal {
  item: IFeatureModalDetails;
}

const RoadmapStatusCard = ({ status, color, items, loading }: IRoadmapStatusCard) => {
  // Feature Modal
  const [open, setOpen] = useState(false);
  const handleOpen = (item: IFeatureModalDetails) => {
    setItem({ ...item });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [item, setItem] = useState({ title: '', description: '', votes: 0 });

  // Alert
  const [alert, setAlert] = useState({ isTrue: false, message: '' });
  const handleAlertClose = () => setAlert({ ...alert, isTrue: false });

  const handleVote = async (id: string, votes: number) => {
    if (isAuthenticated) {
      try {
        await voteFeatureRequest(id, votes);
        setAlert({ isTrue: true, message: 'Voting was successful' });
      } catch (error) {
        setAlert({ isTrue: true, message: 'Voting was unsuccessful' });
      }
    } else {
      setAlert({ isTrue: true, message: 'Please sign-in before voting!' });
    }
  };

  const CustomModal = ({ item }: IFeatureModal) => {
    const { title, description, votes } = item;
    return (
      <Modal open={open} onClose={handleClose}>
        <Box sx={classes.modal}>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item>
              <Typography variant="h6" component="h2">
                {title}
              </Typography>
              <Typography sx={{ fontSize: '0.8em', marginTop: '1em' }} variant="h6" component="h6">
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
          <Box component="span" sx={{ background: `${color}`, borderRadius: '4px' }}>
            {status.toUpperCase()}
          </Box>
        </Typography>
        <List>
          <CustomModal item={item} />
          {loading ? (
            <Box sx={{ overflow: 'hidden', mt: 2 }}>
              <Box sx={{ display: 'flex', mb: 4 }}>
                <Skeleton sx={{ bgcolor: '#4e526e' }} variant="rectangular" height={70} width={4} />
                <Box ml={1}>
                  <Skeleton sx={{ bgcolor: '#4e526e', mb: 1 }} width={250} />
                  <Skeleton sx={{ bgcolor: '#4e526e' }} width="50%" />
                </Box>
              </Box>

              <Box sx={{ display: 'flex', mb: 4 }}>
                <Skeleton sx={{ bgcolor: '#4e526e' }} variant="rectangular" height={70} width={4} />
                <Box ml={1}>
                  <Skeleton sx={{ bgcolor: '#4e526e', mb: 1 }} width={250} />
                  <Skeleton sx={{ bgcolor: '#4e526e' }} width="50%" />
                </Box>
              </Box>

              <Box sx={{ display: 'flex', mb: 4 }}>
                <Skeleton sx={{ bgcolor: '#4e526e' }} variant="rectangular" height={70} width={4} />
                <Box ml={1}>
                  <Skeleton sx={{ bgcolor: '#4e526e', mb: 1 }} width={250} />
                  <Skeleton sx={{ bgcolor: '#4e526e' }} width="50%" />
                </Box>
              </Box>
            </Box>
          ) : (
            items.map((item, index: number) => (
              <ListItem
                key={index}
                secondaryAction={
                  <Box>
                    <Grid container>
                      <IconButton edge="end" aria-label="vote" onClick={() => handleVote(item.id, item.votes)}>
                        <KeyboardArrowUp sx={{ color: '#9020fb' }} />
                      </IconButton>
                    </Grid>
                    <Grid container sx={{ paddingLeft: '13px' }}>
                      <Typography>{item.votes}</Typography>
                    </Grid>
                  </Box>
                }
              >
                <Divider orientation="vertical" sx={{ borderLeft: `3px solid ${color}` }} />
                <IconButton onClick={() => handleOpen(item)}>
                  <ListItemText
                    primary={item.title}
                    secondary={item.type}
                    secondaryTypographyProps={{ marginTop: '2px' }}
                  />
                </IconButton>
              </ListItem>
            ))
          )}
        </List>
      </CardContent>
      <Snackbar open={alert.isTrue} autoHideDuration={2000} onClose={handleAlertClose}>
        <Alert variant="filled" severity="info">
          {alert.message}
        </Alert>
      </Snackbar>
    </Card>
  );
};

const PublicRoadmap = () => {
  const [roadmaps, setRoadmaps] = useState([]);
  const [featureRequestCount, setFeatureRequestCount] = useState(0);
  const [contentLoading, setContentLoading] = useState(true);

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
      await addFeatureRequest({
        ...featureRequest,
        votes: 0,
        type: 'Feature request',
        status: 'suggestions',
        id: '',
        timestamp: Timestamp.now(),
      });
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
      const roadmaps = await getFeatureRequests();
      const unsubscribe = onSnapshot(roadmaps, (snapshot) => {
        setRoadmaps(convertRoadmapsSnapshotToMap(snapshot));
        setContentLoading(false);
        setFeatureRequestCount(snapshot.size);
      });
      return function cleanup() {
        unsubscribe();
      };
    })();
  }, []);

  return (
    <Grid sx={classes.root} container>
      <Grid container item direction="row" justifyContent="flex-end">
        <Autocomplete
          sx={{ width: 300, ...classes.search }}
          options={roadmaps}
          getOptionLabel={(option: IFeatureRequest) => option.title}
          renderInput={(params) => <TextField {...params} placeholder="Search..."></TextField>}
        />
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
                  <Box component="span" sx={{ borderRadius: '4px' }}>
                    {featureRequestCount}
                  </Box>
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
              <Grid container>
                <Grid container item>
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
                </Grid>
                <Grid container item>
                  <FormControl>
                    <TextField
                      name="description"
                      multiline={true}
                      rows={5}
                      required
                      placeholder="Description"
                      sx={classes.description}
                      variant="standard"
                      onChange={handleChange}
                    />
                  </FormControl>
                </Grid>
              </Grid>
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
          <RoadmapStatusCard
            status="suggestions"
            color="#9020fb"
            items={filterRoadmapsByStatus(roadmaps, 'suggestions')}
            loading={contentLoading}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <RoadmapStatusCard
            status="planned"
            color="#1B3C40"
            items={filterRoadmapsByStatus(roadmaps, 'planned')}
            loading={contentLoading}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <RoadmapStatusCard
            status="in progress"
            color="#223E2B"
            items={filterRoadmapsByStatus(roadmaps, 'in_progress')}
            loading={contentLoading}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <RoadmapStatusCard
            status="live"
            color="#3E3418"
            items={filterRoadmapsByStatus(roadmaps, 'live')}
            loading={contentLoading}
          />
        </Grid>
      </Grid>
      <Snackbar open={alert.isTrue} autoHideDuration={2000} onClose={handleAlertClose}>
        <Alert variant="filled" severity="info">
          {alert.message}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default PublicRoadmap;

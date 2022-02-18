/* eslint-disable prettier/prettier */
import { Box, Card, CardContent, Typography, List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { useStyles } from './useStyles';


interface IRoadmapStatusCard {
    title: string;
    titleBackground: string;
    options: { title: string, type: string, votes: number }[];
}

const RoadmapStatusCard = ({ title, titleBackground, options }: IRoadmapStatusCard) => {
    const classes = useStyles();
    return (
        <Card sx={{ width: 300, height: 400, background: '#292950' }}>
            <CardContent>
                <Typography variant="h6" sx={{ color: '#fff', marginBottom: '10px' }}>
                    <span style={{ background: `${titleBackground}` }} className={classes.title}>{title.toUpperCase()}</span>
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360 }}>
                    {options.map((option, index) => (
                        <ListItem key={index} sx={{ paddingLeft: 0 }} secondaryAction={
                            <IconButton aria-label="more details" sx={{ marginRight: '10px' }}>
                                <Box>
                                    <KeyboardArrowUp sx={{ color: '#9020fb' }} />
                                    <Typography sx={{ color: '#fff' }}>{option.votes}</Typography>
                                </Box>
                            </IconButton>
                        }>
                            <Divider orientation='vertical' sx={{ height: '4rem', borderLeft: '3px solid grey', marginRight: '7px' }} />
                            <ListItemText className={classes.listItemText} primary={option.title} secondary={option.type} secondaryTypographyProps={{ color: '#fff', marginTop: '2px' }} />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}

const PublicRoadmap = () => {
    const classes = useStyles();
    const suggestions = [{ title: 'Courses', type: 'Feature request', votes: 10 }, { title: 'Courses', type: 'Feature request', votes: 10 }];
    const planned = [{ title: 'Courses', type: 'Feature request', votes: 10 }];
    const inProgress = [{ title: 'Courses', type: 'Feature request', votes: 10 }];
    const live = [{ title: 'Courses', type: 'Feature request', votes: 10 }];

    return (
        <Box>
            <RoadmapStatusCard title="Suggestions" titleBackground="#9020fb" options={suggestions} />
        </Box>
    );
};

export default PublicRoadmap;
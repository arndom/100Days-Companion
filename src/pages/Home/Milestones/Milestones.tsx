import { Box, Typography } from '@mui/material';
import gem1 from '../../../assets/images/gem1.png';
import gem2 from '../../../assets/images/gem2.png';
import gem3 from '../../../assets/images/gem3.png';
import gem4 from '../../../assets/images/gem4.png';
import gem5 from '../../../assets/images/gem5.png';
import gem6 from '../../../assets/images/gem6.png';
import gem7 from '../../../assets/images/gem7.png';
import { useStyles } from './useStyles';

const Milestones = (): JSX.Element => {
  const classes = useStyles;

  return (
    <Box sx={classes.milestones}>
      <Box>
        <img src={gem1} alt="" />
        <Typography>Text 1</Typography>
      </Box>
      <Box>
        <img src={gem2} alt="" />
        <Typography>Text 2</Typography>
      </Box>
      <Box>
        <img src={gem3} alt="" />
        <Typography>Text 3</Typography>
      </Box>
      <Box>
        <img src={gem4} alt="" />
        <Typography>Text 4</Typography>
      </Box>
      <Box>
        <img src={gem5} alt="" />
        <Typography>Text 5</Typography>
      </Box>
      <Box>
        <img src={gem6} alt="" />
        <Typography>Text 6</Typography>
      </Box>
      <Box>
        <img src={gem7} alt="" />
        <Typography>Text 7</Typography>
      </Box>
    </Box>
  );
};

export default Milestones;

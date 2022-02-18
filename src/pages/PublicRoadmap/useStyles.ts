import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: '0.7rem',
    padding: '0.45em 1em',
    borderRadius: 6,
  },

  listItemText: {
    color: '#fff',
  },

}));

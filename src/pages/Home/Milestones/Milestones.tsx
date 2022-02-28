import { Grid, Typography, Box } from '@mui/material';
import { BadgeSVG } from '../../../assets/svgs/Badge/BadgeSVG';
import { useStyles } from './useStyles';
import greyBadge from '../../../assets/images/badge.png';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../utils/firebaseConfig';

interface IBadge {
  text: string;
  value: boolean;
}

const Badge = ({ text, value }: IBadge) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      {value ? (
        <Box>
          <Box sx={{ position: 'absolute' }}>
            <BadgeSVG />
          </Box>
          <Typography sx={{ mt: 20, zIndex: 1 }}>{text}</Typography>
        </Box>
      ) : (
        <Box width={250} height={150}>
          <img src={greyBadge} alt="greyed_badge" />
          <Typography sx={{ mt: 20, zIndex: 1, filter: 'grayscale(100%) opacity(20%)' }}>{text}</Typography>
        </Box>
      )}
    </Grid>
  );
};

const Milestones = (): JSX.Element => {
  const classes = useStyles;
  const uid = 'y0w0xNZ7vicrs7QIpz9Y';
  const _milestones = [
    {
      text: '7 Days',
      value: false,
    },
    {
      text: '2 Weeks',
      value: false,
    },
    {
      text: '3 Weeks',
      value: false,
    },
    {
      text: '1 Month',
      value: false,
    },
    {
      text: '2 Months',
      value: false,
    },
    {
      text: '3 Months',
      value: false,
    },
    {
      text: '100 Days',
      value: false,
    },
  ];
  const [milestones, setMilestones] = useState(_milestones);

  useEffect(() => {
    const userDocRef = doc(db, 'users', uid);

    (async () => {
      const doc = await getDoc(userDocRef);

      if (doc.exists()) {
        const _data = doc.data() as IFirebaseUser;
        const data = _data.milestones;

        const filteredData = Object.entries(data).filter((i) => i[1] === true);
        const badges = [
          {
            text: '7 Days',
            value: false,
          },
          {
            text: '2 Weeks',
            value: false,
          },
          {
            text: '3 Weeks',
            value: false,
          },
          {
            text: '1 Month',
            value: false,
          },
          {
            text: '2 Months',
            value: false,
          },
          {
            text: '3 Months',
            value: false,
          },
          {
            text: '100 Days',
            value: false,
          },
        ];
        filteredData.forEach((i) => {
          if (i[0] === '7days') badges[0].value = true;
          if (i[0] === '14days') badges[1].value = true;
          if (i[0] === '21days') badges[2].value = true;
          if (i[0] === '30days') badges[3].value = true;
          if (i[0] === '60days') badges[4].value = true;
          if (i[0] === '90days') badges[5].value = true;
          if (i[0] === '100days') badges[6].value = true;
        });
        setMilestones(badges);
      } else {
        console.log('non existent');
      }
    })();
  }, []);

  return (
    <Grid container justifyContent="center" rowSpacing={10} sx={classes.milestones}>
      {milestones.map((milestone, index) => (
        <Badge key={index} text={milestone.text} value={milestone.value} />
      ))}
    </Grid>
  );
};

export default Milestones;

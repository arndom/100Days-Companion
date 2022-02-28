import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Step,
  StepLabel,
  Stepper,
  Typography,
  FormGroup,
  Checkbox,
  TextField,
  Grid,
  FormControlLabel,
  CircularProgress,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useStyles } from './useStyles';
import { GithubAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { getDoc, setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../utils/firebaseConfig';
import { useNavigate } from 'react-router';

const steps = ['Connect Github', 'Select Path', 'Set Date '];
const classes = useStyles;

const GithubButton = ({
  loading,
  setLoading,
}: {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const provider = new GithubAuthProvider();

  const authenticate = () => {
    setLoading(true);
    signInWithRedirect(auth, provider);
    setLoading(false);
  };

  return (
    <Button onClick={authenticate} variant="contained" sx={classes.rainbowbtn}>
      {loading ? (
        <CircularProgress sx={{ color: '#fff' }} />
      ) : (
        <>
          <Typography mr={2}>Connect Github</Typography>
          <img
            src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"
            alt="GitHub"
            style={{ width: '25px' }}
          />
        </>
      )}
    </Button>
  );
};

interface ILangCard {
  title: string;
  options: string[];
  newUser: IFirebaseUser;
  setNewUser: React.Dispatch<React.SetStateAction<IFirebaseUser>>;
}

const LangCard = ({ title, options, newUser, setNewUser }: ILangCard) => {
  const handleChange = (lang: string, state: boolean) => {
    setNewUser({
      ...newUser,
      stack: {
        ...newUser.stack,
        [lang]: !state,
      },
    });
  };

  return (
    <Card sx={{ width: 300, background: '#292950' }}>
      <CardContent>
        <Typography variant="h6" sx={{ color: '#fff' }} gutterBottom>
          {title}
        </Typography>
        <FormGroup>
          {options.map((lang, i) => (
            <FormControlLabel
              key={i}
              control={
                <Checkbox
                  color="secondary"
                  checked={newUser.stack[lang]}
                  onChange={() => handleChange(lang, newUser.stack[lang])}
                />
              }
              label={lang}
              sx={{
                span: {
                  color: '#fff',
                },
              }}
            />
          ))}
        </FormGroup>
      </CardContent>
    </Card>
  );
};

const Join = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [id, setId] = useState('');

  const [newUser, setNewUser] = useState<IFirebaseUser>({
    name: '',
    email: '',
    photo: '',
    count: 0,
    stack: {
      JS: false,
      React: false,
      Vue: false,
      Angular: false,
      Node: false,
    },
    notificationFrequency: 'daily',
    milestones: {
      '7days': false,
      '14days': false,
      '21days': false,
      '30days': false,
      '60days': false,
      '90days': false,
      '100days': false,
    },
    startDate: '',
  });

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const languages = ['JS', 'React', 'Vue', 'Angular', 'Node'];

  const navigate = useNavigate();

  const createNewUser = async () => {
    try {
      setLoading(true);
      const docRef = doc(db, 'users', id);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(doc(db, `users/${id}`), newUser);
        setLoading(false);
        navigate('/milestones');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          setLoading(true);
          const user = result.user;

          setId(user.uid);

          setNewUser({
            ...newUser,
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          });

          setLoading(false);
          handleNext();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [newUser]);

  return (
    <Box sx={classes.root}>
      <Box sx={classes.stepperContainer}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step sx={classes.step} key={label} {...stepProps}>
                <StepLabel sx={classes.stepLabel} {...labelProps}>
                  <Typography sx={{ color: '#fff' }}>{label}</Typography>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>

      <Box sx={classes.content}>
        {activeStep === 0 && <GithubButton loading={loading} setLoading={setLoading} />}

        {activeStep === 1 && (
          <Box sx={classes.step2}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item>
                <LangCard title="Teck Stack" options={languages} newUser={newUser} setNewUser={setNewUser} />
              </Grid>
            </Grid>

            <Button onClick={handleNext} variant="contained" sx={classes.rainbowbtn}>
              Next
            </Button>
          </Box>
        )}

        {activeStep === 2 && (
          <Box sx={classes.step3}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Typography variant="h6" mb={1} sx={{ color: '#fff' }}>
                Choose Start Date
              </Typography>
              <DatePicker
                value={newUser.startDate}
                onChange={(newValue) => {
                  const date = newValue && new Date(newValue).toISOString();
                  setNewUser({ ...newUser, startDate: date });
                }}
                renderInput={(params) => <TextField sx={classes.datePickerTextfield} color="secondary" {...params} />}
              />
            </LocalizationProvider>

            <Button
              onClick={createNewUser}
              variant="contained"
              sx={{ background: 'linear-gradient(to right, #F26E3F, #9020fb)' }}
            >
              {loading ? <CircularProgress sx={{ color: '#fff' }} /> : 'Done'}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Join;

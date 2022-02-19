import {
  Box,
  Button,
  Card,
  CardContent,
  Step,
  StepLabel,
  Stepper,
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
  TextField,
  Grid,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import React, { useState } from 'react';
import { useStyles } from './useStyles';

const steps = ['Connect Github', 'Select Path', 'Set Date '];
const classes = useStyles;

interface IButton {
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const GithubButton = ({ onClick }: IButton) => {
  return (
    <Button onClick={onClick} variant="contained" sx={classes.rainbowbtn}>
      <Typography mr={2}>Connect Github</Typography>
      <img
        src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"
        alt="GitHub"
        style={{ width: '25px' }}
      />
    </Button>
  );
};

interface ILangCard {
  title: string;
  options: string[];
}

const LangCard = ({ title, options }: ILangCard) => {
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
              control={<Checkbox color="secondary" defaultChecked />}
              label={lang}
              sx={{
                span: {
                  color: 'white ',
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

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const FElanguages = ['HTML & CSS', 'JS', 'React', 'Vue', 'Angular'];
  const BElanguages = ['JS', 'Node/Express', 'Python', 'Django', 'Flask'];

  const [value, setValue] = useState(null);

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
        {activeStep === 0 && <GithubButton onClick={handleNext} />}

        {activeStep === 1 && (
          <Box sx={classes.step2}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item>
                <LangCard title="Frontend" options={FElanguages} />
              </Grid>
              <Grid item>
                <LangCard title="Backend" options={BElanguages} />
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
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField sx={classes.datePickerTextfield} color="secondary" {...params} />}
              />
            </LocalizationProvider>

            <Button variant="contained" sx={{ background: 'linear-gradient(to right, #F26E3F, #9020fb)' }}>
              Done
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Join;

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
} from '@mui/material';
import React from 'react';

const steps = ['Connect Github', 'Select Path', 'Set Preferences'];

interface IButton {
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const GithubButton = ({ onClick }: IButton) => {
  return (
    <Button onClick={onClick} variant="contained" sx={{ background: 'linear-gradient(to right, #F26E3F, #9020fb)' }}>
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
    <Card sx={{ width: 300 }}>
      <CardContent>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <FormGroup>
          {options.map((lang, i) => (
            <FormControlLabel
              key={i}
              control={
                <Checkbox
                  color={title === 'Frontend' ? 'primary' : title === 'Email Notifications' ? 'success' : 'secondary'}
                  defaultChecked
                />
              }
              label={lang}
              sx={{
                span: {
                  color: 'black',
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
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const FElanguages = ['HTML & CSS', 'JS', 'React', 'Vue', 'Angular'];
  const BElanguages = ['JS', 'Node/Express', 'Python', 'Django', 'Flask'];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ width: '80%', m: 'auto', pt: 4, height: 64 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step
                sx={{
                  color: 'blue',
                  svg: {
                    width: 35,
                    height: 35,
                    fontSize: '3rem',
                    fill: '#0e0219',
                    border: '2px  solid #F26E3F',
                    borderRadius: '100%',
                    '&.Mui-active': {
                      fill: '#F26E3F',
                      border: '0px',
                    },
                    '&.Mui-completed': {
                      fill: '#fff',
                      border: '0px',
                    },
                  },
                }}
                key={label}
                {...stepProps}
              >
                <StepLabel
                  sx={{
                    fontSize: '100px',
                    color: '#fff',
                    '&.Mui-completed': {
                      color: '#fff',
                    },
                  }}
                  {...labelProps}
                >
                  <Typography mr={2}>{label}</Typography>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>

      <Box sx={{ display: 'grid', placeItems: 'center', height: 'calc(100vh - 64px)' }}>
        {activeStep === 0 && <GithubButton onClick={handleNext} />}

        {activeStep === 1 && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <LangCard title="Frontend" options={FElanguages} />
              <LangCard title="Backend" options={BElanguages} />
            </Box>
            <Button
              onClick={handleNext}
              variant="contained"
              sx={{ background: 'linear-gradient(to right, #F26E3F, #9020fb)' }}
            >
              Next
            </Button>
          </Box>
        )}

        {activeStep === 2 && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <LangCard title="Email Notifications" options={['Daily', 'Weekly']} />
            </Box>
            <Button variant="contained" sx={{ background: 'linear-gradient(to right, #F26E3F, #9020fb)' }}>
              Next
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Join;

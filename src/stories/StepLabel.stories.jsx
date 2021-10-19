import {Button, StepLabel, OTPInput, Input } from '../lib';
import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import { makeStyles, Typography } from '@material-ui/core';
import image from '../stories/assets/Logo.svg';


export default {
  component: StepLabel,
  title: 'Login flow steps',
};

export const Default = (args) => {
  return (
    <Box display="flex" justifyContent="center">
      <Box style={{ width: 400 }}>
        <Typography variant="h4">StepLabel</Typography>
        <StepLabel {...args} />
      </Box>
    </Box>
  );
};

Default.args = {
  active: true,
  primaryText: 'Change your password',
  secondaryText: 'So you keep your account safe',
  leadingIcon: <VerifiedUserIcon style={{ fontSize: 16 }} fontSize="medium" />,
  color: '#688EFF',
  isComplete: true,
};

const useStyles = makeStyles((theme) => {
  return {
    root: { minWidth: 800 },
    body: {
      flex: 1,
      background: theme.palette.background.paper,
      height: '95vh',
    },
    sideBar: {
      width: 500,
      background: theme.palette.background.default,
      height: '95vh',
      padding: 32,
    },
  };
});

const Step1Component = ({ onNextClick}) => {
  const [value, setValue] = useState('');
  return <Box display="flex" alignItems="center" justifyContent="flex-start" style={{ height: '100vh', paddingLeft: 85}}><Box>
    <Typography color="textPrimary" variant="caption">Step 1</Typography>
    <Typography variant="h4">Verify your account</Typography>
    <Typography variant="body2" color="textSecondary">Check your email for a 6 digit code</Typography>
    <Box style={{ marginTop: 32 }}>
      <OTPInput value={value} onChange={setValue} />
    </Box>
    <Box style={{ marginTop: 104 }}>
      <Button onClick={onNextClick} variant="contained" color="primary" style={{ width: 160 }}>
        Verify
      </Button>
      <Typography style={{ marginTop: 24 }} color="textSecondary" variant="body2">
        Don’t have a code? Resend
      </Typography>
    </Box>
  </Box></Box>
}

const Step2Component = ({ onNextClick}) => {
  return <Box display="flex" alignItems="center" justifyContent="flex-start" style={{ height: '100vh', paddingLeft: 85}}><Box>
    <Typography color="textPrimary" variant="caption">Step 2</Typography>
    <Typography variant="h4">Tell us your name</Typography>
    <Typography variant="body2" color="textSecondary">This helps us understand how to address you in all communications</Typography>
    <Box style={{ marginTop: 32 }}>
      <Box style={{ marginTop: 16 }}>
      <Input InputLabelProps={{
        shrink: true,
      }} label="First Name *" />
      </Box>
      <Box style={{ marginTop: 16 }}>
        <Input InputLabelProps={{
          shrink: true,
        }} label="Middle Name (optional)"  />
      </Box>
      <Box style={{ marginTop: 16 }}>
        <Input InputLabelProps={{
          shrink: true,
        }} label="Last Name *"  />
      </Box>
    </Box>
    <Box style={{ marginTop: 104 }}>
      <Button onClick={onNextClick} variant="contained" color="primary" style={{ width: 160 }}>
        Continue
      </Button>
    </Box>
  </Box></Box>
}

const Step3Component = ({ onNextClick}) => {
  return <Box display="flex" alignItems="center" justifyContent="flex-start" style={{ height: '100vh', paddingLeft: 85}}><Box>
    <Typography color="textPrimary" variant="caption">Step 3</Typography>
    <Typography variant="h4">Change your password</Typography>
    <Typography variant="body2" color="textSecondary">Enter at least 8 characters that include 1 uppercase, 1 lowercase and 1 number</Typography>
    <Box style={{ marginTop: 64 }}>
      <Box style={{ marginTop: 16 }}>
        <Input type="password" InputLabelProps={{
          shrink: true,
        }} label="New Password *" />
      </Box>
      <Box style={{ marginTop: 16 }}>
        <Input type="password" InputLabelProps={{
          shrink: true,
        }} label="Enter new password again *"  />
      </Box>
    </Box>
    <Box style={{ marginTop: 104 }}>
      <Button onClick={onNextClick} variant="contained" color="primary" style={{ width: 160 }}>
        Change
      </Button>
    </Box>
  </Box></Box>
}
export const ExampleInUsage = (args) => {
  const classNames = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Box display="flex" className={classNames.root}>
      <Box className={classNames.sideBar}>
        <Box display="flex" alignItems="center">
          <img alt="" src={image} />
          <Typography variant="h5">Colossus</Typography>
        </Box>
        <Box style={{ marginTop: 80 }}>
          <StepLabel color="#a958c2" leadingIcon={<VerifiedUserIcon style={{ fontSize: 18 }} fontSize="medium" />} isComplete={activeIndex > 0} active={activeIndex === 0} primaryText="Verify your account" secondaryText="So we know you're the right person" />
          <StepLabel color="#6ad2b3" leadingIcon={<AccountCircleSharpIcon style={{ fontSize: 18 }} fontSize="medium" />} isComplete={activeIndex > 1} active={activeIndex === 1} primaryText="Tell us your name" secondaryText="So we know how to address you" />
          <StepLabel color="#fbe580" leadingIcon={<LockRoundedIcon style={{ fontSize: 18 }} fontSize="medium" />} isComplete={activeIndex > 2} active={activeIndex === 2} primaryText="Change your password" secondaryText="So you can keep your account safe" />
        </Box>
      </Box>
      <Box className={classNames.body}>
        {activeIndex === 0 && <Step1Component onNextClick={() => setActiveIndex((val) => val === 2 ?0: val+1)} />}
        {activeIndex === 1 && <Step2Component onNextClick={() => setActiveIndex((val) => val === 2 ?0: val+1)} />}
        {activeIndex === 2 && <Step3Component onNextClick={() => setActiveIndex((val) => val === 2 ?0: val+1)} />}
      </Box>
    </Box>
  );
};

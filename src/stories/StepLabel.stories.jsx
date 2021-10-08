import {Button, StepLabel} from '../lib';
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
export const ExampleInUsage = (args) => {
  const classNames = useStyles();
  const [activeIndex, setActiveIndex] = useState(2);
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
        <Button onClick={() => setActiveIndex((val) => val === 2 ?0: val+1)} variant="contained" color="primary" style={{ marginTop: 300, marginLeft: 40, width: 400 }}>
          Next Step
        </Button>
      </Box>
    </Box>
  );
};

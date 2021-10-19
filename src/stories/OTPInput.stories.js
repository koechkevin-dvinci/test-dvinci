import { OTPInput } from '../lib';
import Box from '@material-ui/core/Box';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

export default {
  component: OTPInput,
  title: 'OTP Input Component',
};

export const Default = (args) => {
  const [val, setVal] = useState('');
  return (
    <>
      <Typography variant="h4" style={{ textAlign: 'center' }}>
        OTPInput
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="center" style={{ height: '100vh' }}>
        <OTPInput value={val} onChange={setVal} {...args} />
      </Box>
    </>
  );
};

Default.args = {
  password: false,
  error: false,
  disabled: false,
  autoFocus: true,
  placeholder: '',
  separator: '',
  onChange: console.log,
  value: '',
  size: 6,
};

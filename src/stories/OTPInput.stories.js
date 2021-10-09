import { OTPInput } from '../lib';
import Box from '@material-ui/core/Box';
import React, {useState} from 'react';

export default {
  component: OTPInput,
  title: 'OTP Input Component',
};

export const Default = (args) => {
  const [val, setVal] = useState('');
  return <Box display="flex" alignItems="center" justifyContent="center" style={{ height: '100vh'}}><OTPInput value={val} onChange={setVal} {...args} /></Box>;
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
  size: 6
};

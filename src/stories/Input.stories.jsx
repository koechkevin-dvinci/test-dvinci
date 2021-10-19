import React from 'react';
import { Input, Checkbox } from '../lib';
import {FormControlLabel, Typography} from '@material-ui/core';
import Box from '@material-ui/core/Box';

export default {
  component: Input,
  title: 'Input',
};

const InputTemplate = (args) => (
  <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
    <Typography variant="h4">Input</Typography>
    <Box style={{ width: 400 }}>
      <Input {...args}>Text</Input>
    </Box>
  </Box>
);

export const Default = InputTemplate.bind({});
Default.args = {
  variant: 'outlined',
  label: 'Training Team',
  type: 'text',
  error: false,
  helperText: '',
  size: 'medium',
};

export const Password = InputTemplate.bind({});
Password.args = {
  variant: 'outlined',
  label: 'Training Team',
  type: 'password',
  error: false,
  helperText: '',
  size: 'medium',
};

export const InputPasswordError = InputTemplate.bind({});
InputPasswordError.args = {
  variant: 'outlined',
  label: 'Password Error',
  type: 'password',
  error: true,
  helperText: 'Your new password does not match the requirements',
  size: 'medium',
  defaultValue: 'Error'
};

export const InputCheckbox = (args) => <FormControlLabel label=" " control={<Checkbox {...args} />} />;
InputCheckbox.args = {
  size: 'medium',
};

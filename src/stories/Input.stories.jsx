import React from 'react';
import { Input, Checkbox } from '../lib';
import { FormControlLabel } from '@material-ui/core';

export default {
  component: Input,
  title: 'Input',
};

const InputTemplate = (args) => <Input {...args} >Text</Input>;

export const Default = InputTemplate.bind({});
Default.args = {
  variant: 'outlined',
  label: 'Training Team',
};

export const InputCheckbox = (args) => <FormControlLabel label=" " control={<Checkbox {...args} />} />;
InputCheckbox.args = {
  size: 'medium',
};

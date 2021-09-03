import React from 'react';
import { Input } from '../lib';

export default {
  component: Input,
  title: 'Input',
};

const InputTemplate = (args) => <Input {...args} />;

export const Default = InputTemplate.bind({});
Default.args = {
  variant: 'outlined',
  label: 'Training Team',
};

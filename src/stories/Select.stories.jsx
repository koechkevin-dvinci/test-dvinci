import React from 'react';
import { Select } from '../lib';

const Template = (args) => <Select {...args} />;

export const SelectComponent = Template.bind({});
SelectComponent.args = {
  label: 'Business Categories',
  native: true,
  options: [{
    label: 'One',
    value: 1,
  },{
    label: 'Ten',
    value: 10,
  },{
    label: 'Twenty',
    value: 20,
  },{
    label: 'Thirty',
    value: 30,
  }]
};

export default {
  title: 'Select Component',
  component: Select,
  argTypes: {},
};

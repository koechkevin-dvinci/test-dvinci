import React from 'react';
import { AutoComplete, Select } from '../lib';

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Business Categories',
  native: true,
  value: 10,
  options: [
    {
      label: 'One',
      value: 1,
    },
    {
      label: 'Ten',
      value: 10,
    },
    {
      label: 'Twenty',
      value: 20,
    },
    {
      label: 'Thirty',
      value: 30,
    },
  ],
};

const AutoCompleteFunc = (args) => <AutoComplete {...args} />;
export const MoreOptions = AutoCompleteFunc.bind({});
MoreOptions.args = {
  options: [
    {
      label: 'One',
      value: 1,
    },
    {
      label: 'Ten',
      value: 10,
    },
    {
      label: 'Twenty',
      value: 20,
    },
    {
      label: 'Thirty',
      value: 30,
    },
  ],
  id: '1',
  label: 'Country',
  size: 'small'
};

export default {
  title: 'Select Component',
  component: Select,
  argTypes: {},
};

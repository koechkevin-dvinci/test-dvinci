import React from 'react';
import { Search } from '../lib';

const Template = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {

};

export default {
  title: 'Search Component',
  component: Search,
  argTypes: {},
};

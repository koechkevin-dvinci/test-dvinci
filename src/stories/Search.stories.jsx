import React from 'react';
import { Search } from '../lib';

const Template = (args) => <Search {...args} />;

export const SearchComponent = Template.bind({});
SearchComponent.args = {

};

export default {
  title: 'Search Component',
  component: Search,
  argTypes: {},
};

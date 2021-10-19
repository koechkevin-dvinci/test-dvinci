import React from 'react';
import { Search } from '../lib';
import {Typography} from "@material-ui/core";

const Template = (args) => <>
  <Typography variant="h4" style={{ textAlign: 'center'}}>Search</Typography>
  <Search {...args} />
</>;

export const Default = Template.bind({});
Default.args = {

};

export default {
  title: 'Search Component',
  component: Search,
  argTypes: {},
};

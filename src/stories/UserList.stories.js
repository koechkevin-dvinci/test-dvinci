import { UserAccessComponent } from '../lib';
import React from 'react';
import { userAccessOptions } from '../lib';
import {Typography} from "@material-ui/core";

export default {
  component: UserAccessComponent,
  title: 'User List Component',
};

export const DefaultUserAccessComponent = (args) => {
  return <>
    <Typography variant="h4">UserAccessComponent</Typography>
    <UserAccessComponent {...args} /></>;
};

DefaultUserAccessComponent.args = {
  options: userAccessOptions
};

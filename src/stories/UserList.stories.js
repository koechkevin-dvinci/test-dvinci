import { UserAccessComponent } from '../lib/components/UsersList';
import React from 'react';
import { userAccessOptions } from '../lib';

export default {
  component: UserAccessComponent,
  title: 'User List Component',
};

export const DefaultUserAccessComponent = (args) => {
  return <UserAccessComponent {...args} />;
};

DefaultUserAccessComponent.args = {
  options: userAccessOptions
};

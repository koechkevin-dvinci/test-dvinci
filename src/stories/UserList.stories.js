import { UserAccessComponent } from '../lib/components/UsersList';
import React from 'react';

export default {
  component: UserAccessComponent,
  title: 'User List Component',
};

export const DefaultUserAccessComponent = (args) => {
  return <UserAccessComponent {...args} />;
};

DefaultUserAccessComponent.args = {
  options:[{
    label: 'Active',
    value: 'active',
    color: 'rgba(76, 175, 80, 1)'
  },{
    label: 'Invited',
    value: 'invited',
    color: '#FF9800'
  },{
    label: 'None',
    value: 'none',
    color: 'rgba(145, 158, 171, 0.86)'
  }]
};

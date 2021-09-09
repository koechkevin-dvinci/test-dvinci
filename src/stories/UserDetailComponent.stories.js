import { UserDetail } from '../lib';
import React from 'react';


export default {
  component: UserDetail,
  title: 'User List Component',
};

export const ShowUserDetail = (args) => {
  return <UserDetail {...args} />;
};

ShowUserDetail.args = {
  email: 'spencerwhite@company.co',
  phone: '+13344455332',
  open: true,
  name: 'Jordana M. Carpenter',
  onClose: console.log,
  access: 'Has Access',
  color: '#4CAF50',
  dayAdded: 'June 13th, 2020'
};

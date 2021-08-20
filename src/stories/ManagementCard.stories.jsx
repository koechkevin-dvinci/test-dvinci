import React from 'react';

import { ManagementCard } from '../lib';

export default {
  title: 'Management Card',
  component: ManagementCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ManagementCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  headerText: 'ADMIN',
  footerText: '22 Members',
  avatars: [{
    imgSrc: '',
    name: 'Tim Sherwood',
    altIcon: 'TS'
  }, {
    imgSrc: '',
    name: 'Tim Sherwood',
    altIcon: 'AB'
  }, {
    imgSrc: '',
    name: 'Tim Sherwood',
    altIcon: 'CD'
  }]
};

export const Secondary = Template.bind({});
Secondary.args = {

};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

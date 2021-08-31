import React from 'react';
import { AddNewMember } from '../lib';

const Template = (args) => <AddNewMember {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
  hideSecondaryAction: false,
  addButtonProps: {},
  selectProps: {},
  onRemove: console.log,
  onMakeTeamManager: console.log,
  onAddMember: console.log,
  options: [{
    label: 'Mindy Harshville', value: 1,
  },{
    label: 'Robert Mendelson', value: 10,
  },{
    label: 'melissabraveheart@spencerinc.com', value: 100,
  },{
    label: 'mmspencer@sunshine.co', value: 1000,
  },{
    label: 'mark_brown@company.com', value: 11,
  }],
  members : [{
    label: 'Mindy Harshville', value: 1,
  },{
    label: 'Robert Mendelson', value: 10,
  },{
    label: 'melissabraveheart@spencerinc.com', value: 100,
  },{
    label: 'mmspencer@sunshine.co', value: 1000,
  },{
    label: 'mark_brown@company.com', value: 11,
  }]
};

export default {
  title: 'Add Members',
  component: AddNewMember,
  argTypes: {},
};

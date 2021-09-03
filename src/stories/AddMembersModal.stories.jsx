import React from 'react';
import { AddNewMember } from '../lib';

const Template = (args) => <AddNewMember {...args} />;
const props = {
  open: true,
  okText: 'Finish',
  hideSecondaryAction: false,
  addButtonProps: {},
  selectProps: {},
  onRemove: console.log,
  onMakeTeamManager: console.log,
  onAddMember: console.log,
  onClickPlusIcon: console.log,
  title: 'Add Members',
  options: [
    {
      label: 'Mindy Harshville',
      value: 1,
    },
    {
      label: 'Robert Mendelson',
      value: 10,
    },
    {
      label: 'melissabraveheart@spencerinc.com',
      value: 100,
    },
    {
      label: 'mmspencer@sunshine.co',
      value: 1000,
    },
    {
      label: 'mark_brown@company.com',
      value: 11,
    },
  ],
  members: [
    {
      label: 'Mindy Harshville',
      value: 1,
      isTeamManager: true,
      labelTag: 'Team Manager',
    },
    {
      label: 'Robert Mendelson',
      value: 10,
      hideSecondaryAction: true,
    },
    {
      label: 'melissabraveheart@spencerinc.com',
      value: 100,
      disabled: true,
    },
    {
      label: 'mmspencer@sunshine.co',
      value: 1000,
      showAddIcon: true,
    },
    {
      label: 'mark_brown@company.com',
      value: 11,
    },
  ],
};
export const Default = Template.bind({});
Default.args = props;

export default {
  title: 'Add or Edit Members Component',
  component: AddNewMember,
  argTypes: {},
};

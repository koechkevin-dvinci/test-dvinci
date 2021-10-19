import React from 'react';
import { AddNewMember } from '../lib';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import {Typography} from "@material-ui/core";

const Template = ({ open, ...args }) => (
  <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <Typography variant="h4">AddNewMember</Typography>
    <Paper style={{ width: 500, padding: 24 }}>
      <AddNewMember {...args} />
    </Paper>
  </Box>
);
const props = {
  open: true,
  okText: 'Finish',
  hideSecondaryAction: false,
  showAddMembers: false,
  selectProps: {  size: 'small', multiple: true},
  onRemove: console.log,
  onMakeTeamManager: console.log,
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
export const TestComponent = Template.bind({});
TestComponent.args = props;

export default {
  title: 'Edit Members Component',
  component: AddNewMember,
  argTypes: {},
};

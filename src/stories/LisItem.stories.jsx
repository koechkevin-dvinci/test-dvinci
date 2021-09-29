import { MuiListItem, MuiListItemAvatar, MuiAvatar, MuiListItemText, MuiList } from '../lib';
import React from 'react';
import { MemberListItem } from '../lib';
import Box from '@material-ui/core/Box';

export const Default = (args) => (
  <MuiListItem {...args}>
    <MuiListItemAvatar>
      <MuiAvatar>MA</MuiAvatar>
    </MuiListItemAvatar>
    <MuiListItemText primary="John Doe" secondary="Team Manager" />
  </MuiListItem>
);
Default.args = {};

export const MemberListItemComponent = ({width,...args}) => {
  return (
    <Box style={{ width }}>
      <MuiList>
        <MemberListItem {...args} />
      </MuiList>
    </Box>
  );
};
export default {
  title: 'List Item Components',
  component: MuiListItem,
  argTypes: {},
};

MemberListItemComponent.args = {
  hideSecondaryAction: false,
  onRemove: console.log,
  onMakeTeamManager: console.log,
  onClickPlusIcon: console.log,
  displayName: 'John Doe',
  imgSrc: '',
  labelTag: 'MA',
  disabled: false,
  showAddIcon: true,
  isTeamManager: true,
  width: 600
};

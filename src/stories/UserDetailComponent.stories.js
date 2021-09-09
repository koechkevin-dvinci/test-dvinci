import { UserDetail } from '../lib';
import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default {
  component: UserDetail,
  title: 'User List Component',
};

export const ShowUserDetail = (args) => {
  return <UserDetail {...args} />;
};

const Team = ({name, role, disabled = false}) => {
  return (
    <Box display="flex" alignItems="center">
      <Typography variant="body2">{name}</Typography>
      <Typography style={{ marginLeft: 8 }} color={disabled ? 'textSecondary' : 'primary'} variant="caption">
        {role}
      </Typography>
    </Box>
  );
};
ShowUserDetail.args = {
  email: 'spencerwhite@company.co',
  phone: '+13344455332',
  open: true,
  name: 'Jordana M. Carpenter',
  onClose: console.log,
  teams: <>
    <Team name="Connecticut" role="Team Manager" />
    <Team name="Solar Sight" role="Team Manager" />
    <Team name="Juary Goncalvez" />
    <Team name="Flow Home Energy" />
  </>,
  access: 'Has Access',
  color: '#4CAF50',
  dayAdded: 'June 13th, 2020',
  location: <Typography variant="body1">AZ, SC, CA, TX, MP, WC, WS, AZ, SC, CA, TX, MP, WC, WS, TX, MP, WC, WS, AZ, SC, CA, TX, MP, WC, WS</Typography>
};

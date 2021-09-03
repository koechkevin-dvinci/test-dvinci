import React from 'react';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Input, Modal, Select } from '../lib';
import { Grid } from '@material-ui/core';

export default {
  component: Modal,
  title: 'Modal',
};

const ModalTemplate = (args) => (
  <Modal {...args}>
    <DialogContentText>Default modal view</DialogContentText>
  </Modal>
);

export const Default = ModalTemplate.bind({});
Default.args = {
  open: true,
  handleClose: () => {},
  title: 'Default modal',
  okText: 'Create',
  onOk: () => {},
  onCancel: () => {},
};

const options = [
  {
    label: 'One',
    value: 1,
  },
  {
    label: 'Ten',
    value: 10,
  },
  {
    label: 'Twenty',
    value: 20,
  },
  {
    label: 'Thirty',
    value: 30,
  },
];

export const createTeamModal = (args) => (
  <Modal {...args}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Input fullWidth label={'Name'} />
      </Grid>
      <Grid item xs={6}>
        <Select label="Business Sector" options={options} />
      </Grid>
      <Grid item xs={6}>
        <Select label="Territories" options={options} />
      </Grid>
    </Grid>
  </Modal>
);
createTeamModal.args = {
  open: true,
  handleClose: () => {},
  title: 'Create Team',
  okText: 'Create',
  onOk: () => {},
  onCancel: () => {},
};

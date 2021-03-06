import React from 'react';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Input, Modal, Select, Button } from '../lib';
import { Grid } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";

export default {
  component: Modal,
  title: 'Modal',
};

const ModalTemplate = (args) => (
  <>
    <Typography variant="h4" style={{ textAlign: 'center'}}>Modal</Typography>
    <Modal {...args}>
      <DialogContentText>Default modal view</DialogContentText>
    </Modal>
  </>
);

export const Default = ModalTemplate.bind({});
Default.args = {
  open: true,
  handleClose: () => {},
  title: 'Default modal',
  okText: 'Create',
  onOk: () => {},
  onCancel: () => {},
  okButtonProps: {
    loading: true
  },
  leftFooterChildren: () => (
    <Button>Button</Button>
  )
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

export const EditTeamModal = (args) => (
  <Modal {...args}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Input fullWidth label={'Name'} defaultValue="Massachusetts" />
      </Grid>
      <Grid item xs={6}>
        <Select
          label="Business Sector"
          options={options}
          defaultValue={options[0]}
          disabled
          helperText="To edit, create a new team instead."
        />
      </Grid>
      <Grid item xs={6}>
        <Select multiple label="Territories" options={options} defaultValue={[options[0]]} />
      </Grid>
    </Grid>
  </Modal>
);
EditTeamModal.args = {
  open: true,
  handleClose: () => {},
  title: 'Edit Team',
  okText: 'Save',
  onOk: () => {},
  onCancel: () => {},
  okButtonProps: {
    disabled: true,
  },
};

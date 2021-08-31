import React from 'react';
import DialogContentText from '@material-ui/core/DialogContentText';

import { Modal } from '../lib';

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
  title: 'Create Team',
  okText: 'Create',
  onOk: () => {},
  onCancel: () => {},
};

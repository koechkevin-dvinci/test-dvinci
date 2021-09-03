import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Divider } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { styles } from './styles';

import Button from '../Button';

const Modal = (props) => {
  const { open, handleClose, children, title, okText, onOk, cancelText, classes, onCancel, ...restProps } = props;

  return (
    <>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth {...restProps}>
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <Divider />
        <DialogContent className={classes.modalContent}>{children}</DialogContent>
        <Divider />
        <DialogActions className={classes.modalFooter}>
          <Button onClick={onCancel} color="primary" size="medium">
            {cancelText || 'Cancel'}
          </Button>
          <Button onClick={onOk} color="primary" variant="contained" size="medium">
            {okText || 'Submit'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default withStyles(styles)(Modal);

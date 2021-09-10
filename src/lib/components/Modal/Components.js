import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Divider, makeStyles} from '@material-ui/core';
import { styles } from './styles';

import Button from '../Button';

const useStyles = makeStyles(styles);
const Modal = (props) => {
  const {
    open,
    handleClose,
    children,
    title,
    okText,
    onOk,
    cancelText,
    onCancel,
    okButtonProps,
    cancelButtonProps,
    hideFooter,
    contentProps,
    actionProps,
    ...restProps
  } = props;

  const classNames = useStyles();
  return (
    <>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth {...restProps}>
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <Divider />
        <DialogContent className={classNames.modalContent} {...contentProps}>{children}</DialogContent>
        {!hideFooter && (
          <>
            <Divider />
          <DialogActions className={classNames.modalFooter} {...actionProps}>
            <Button onClick={onCancel} color="primary" size="medium" {...cancelButtonProps}>
              {cancelText || 'Cancel'}
            </Button>
            <Button onClick={onOk} color="primary" variant="contained" size="medium" {...okButtonProps}>
              {okText || 'Submit'}
            </Button>
          </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default Modal;

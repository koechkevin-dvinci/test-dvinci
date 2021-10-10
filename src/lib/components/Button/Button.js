import React from 'react';
import { Button as MUIButton } from '@material-ui/core';
import useStyles from './styles';
import CircularProgress from "@material-ui/core/CircularProgress";

const Button = (props) => {
  const { children, classes, size, loading,...restProps } = props;

  const styles = useStyles();
  const customSize = size || 'large';


  return (
    <MUIButton size={customSize} className={styles.root} classes={{ ...classes, disabled: styles.disabled }} {...restProps}>
      {loading ? <CircularProgress size={24} color="inherit" /> :children}
    </MUIButton>
  );
};

export default Button;

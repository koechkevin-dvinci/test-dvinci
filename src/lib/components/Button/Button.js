import React from 'react';
import { Button as MUIButton } from '@material-ui/core';
import useStyles from './styles';

const Button = (props) => {
  const { children, classes, size, ...restProps } = props;

  const styles = useStyles();

  return (
    <MUIButton size={size || 'large'} classes={{ ...classes, disabled: styles.disabled }} {...restProps}>
      {children}
    </MUIButton>
  );
};

export default Button;

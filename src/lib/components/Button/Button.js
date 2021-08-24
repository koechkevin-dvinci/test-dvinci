import React from 'react';
import { Button as MUIButton } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { styles } from './styles';

const Button = (props) => {
  const { children, classes, ...restProps } = props;

  return (
    <MUIButton className={classes.button} {...restProps}>
      {children}
    </MUIButton>
  );
};

export default withStyles(styles)(Button);

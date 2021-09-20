import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles';

const InputComponent = (props) => {
  const { label, variant, size, fullWidth, inputProps, InputProps, ...restProps } = props;
  const classes = useStyles();

  return (
    <TextField
      fullWidth
      label={label}
      size={size || 'medium'}
      variant={variant || 'outlined'}
      InputProps={{
        ...InputProps,
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        },
        ...inputProps,
        style: {
          height: size === 'small'? 40: undefined
        },
      }}
      {...restProps}
    />
  );
};

export default InputComponent;

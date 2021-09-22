import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles';
import InputMask from 'react-input-mask';

const InputComponent = (props) => {
  const { label, variant, size, fullWidth, inputProps, InputProps, ...restProps } = props;
  const classes = useStyles();
  const customSize = size || 'medium';

  return (
    <TextField
      fullWidth
      label={label}
      size={customSize}
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
          height: customSize === 'small' ? 40 : customSize === 'medium' ? 56 : undefined,
          ...InputProps?.style,
          ...inputProps?.style,
        },
      }}
      {...restProps}
    />
  );
};

export const MaskedInput = (props) => {
  const { onChange, onMouseDown, onFocus, value, onBlur, disabled, readOnly, ...restProps } = props;

  return (
    <InputMask
      onChange={onChange}
      onMouseDown={onMouseDown}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
      {...restProps}
    >
      <InputComponent {...restProps} />
    </InputMask>
  );
};

export default InputComponent;

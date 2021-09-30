import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles';
import InputMask from 'react-input-mask';
import { InputAdornment } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Typography from "@material-ui/core/Typography";

const PASSWORD_TYPE ='password'
const InputComponent = (props) => {
  const { label, variant, size, fullWidth, inputProps, InputProps, type, ...restProps } = props;
  const classes = useStyles();
  const customSize = size || 'medium';

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((val) => !val);
  };

  return (
    <TextField
      fullWidth
      label={label}
      size={customSize}
      variant={variant || 'outlined'}
      type={type === PASSWORD_TYPE && showPassword ? 'text': type}
      InputProps={{
        endAdornment: type === PASSWORD_TYPE ? (
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
              <Typography color="textSecondary">
                {showPassword ?<Visibility /> : <VisibilityOff />}
              </Typography>
            </IconButton>
          </InputAdornment>
        ):undefined,
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

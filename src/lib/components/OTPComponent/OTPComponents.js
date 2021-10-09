import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import useStyles from './styles';

const OTPComponent = (props) => {
  const { value, onChange, size = 6, separator, autoFocus, error, password, disabled, ...restProps } = props;

  const [uncontrolled, setUncontrolled] = useState('');

  const classes = useStyles();
  const handleChange = (otp) => {
    setUncontrolled(otp);
    if (onChange) {
      onChange(otp);
    }
  };


  return (
    <OtpInput
      value={value || uncontrolled}
      onChange={handleChange}
      isInputNum
      shouldAutoFocus={autoFocus}
      {...restProps}
      separator={<div className={classes.spaceStyle}>{separator}</div>}
      numInputs={size}
      isDisabled={disabled}
      hasErrored={error}
      isInputSecure={password}
      containerStyle={classes.containerStyle}
      inputStyle={classes.inputStyle}
      focusStyle={classes.focusStyle}
      errorStyle={classes.errorStyle}
      disabledStyle={classes.disabledStyle}
    />
  );
};

export default OTPComponent;

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import React from 'react';
import Select from '@material-ui/core/Select';
import useStyles from './styles';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from "@material-ui/core/OutlinedInput";

class Item extends React.Component {
  render() {
    const { label, native, data, ...restProps } = this.props;
    return native ? <option {...restProps}>{label}</option> : <MenuItem {...restProps}>{label}</MenuItem>;
  }
}

const SelectComponent = (props) => {
  const classNames = useStyles();
  const { label, children, className, formControlProps, inputProps, id, options = [], value, ...restProps } = props;

  const childOptions = [
    <Item native={restProps.native} key="None" aria-label="None" label={''} value="" />,
    ...options.map(({ label, ...itemProps }, index) => (
      <Item label={label} native={restProps.native} key={index} {...itemProps} />
    )),
  ];

  return (
    <FormControl size="small" variant="outlined" className={classNames.formControl} {...formControlProps}>
      <InputLabel className={classNames.cssLabel} htmlFor={id || 'outlined-age-native-simple'}>
        {label}
      </InputLabel>
      <Select
        size="small"
        displayEmpty
        className={`${className}`}
        classes= {{
          icon: classNames.icon
      }}
        label={<span className={classNames.cssLabel}>{label}</span>}
        input={
          <OutlinedInput
            label={<span className={classNames.cssLabel}>{label}</span>}
            classes={{
              root: classNames.cssOutlinedInput,
              focused: classNames.cssFocused,
              notchedOutline: classNames.notchedOutline,
            }}
          />
        }
        onChange={console.log}
        inputProps={{
          size: 'small',
          id: id || 'outlined-age-native-simple',
          ...inputProps,
        }}
        value={value || ''}
        {...restProps}
      >
        {children?.length ? children : childOptions}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import React from 'react';
import Select from '@material-ui/core/Select';
import useStyles from './styles';
import MenuItem from '@material-ui/core/MenuItem';

class Item extends React.Component {
  render() {
    const { label, native, ...restProps} = this.props;
    return native ? <option {...restProps}>{label}</option> : <MenuItem {...restProps}>{label}</MenuItem>
  }
}

const SelectComponent = (props) => {
  const classes = useStyles();
  const { label, children, formControlProps, inputProps, id, options = [], ...restProps } = props;

  const childOptions = [<Item native={restProps.native} key="None" aria-label="None" label={''} value="" />, ...options.map(({ label, ...itemProps }, index) => <Item label={label} native={restProps.native} key={index} {...itemProps} />)];

  return (
    <FormControl size="small" variant="outlined" className={classes.formControl} {...formControlProps}>
      <InputLabel htmlFor={id || 'outlined-age-native-simple'}>{label}</InputLabel>
      <Select
        size="small"
        label={label}
        inputProps={{
          size: 'small',
          id: id || 'outlined-age-native-simple',
          ...inputProps,
        }}
        {...restProps}
      >{
        children?.length ? children : childOptions}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;

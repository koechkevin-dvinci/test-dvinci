import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import React from 'react';
import Select from '@material-ui/core/Select';
import useStyles from './styles';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import AutoComplete from '@material-ui/lab/AutoComplete';
import { TextField } from '@material-ui/core';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

// class Item extends React.Component {
//   render() {
//     const { label, native, data, ...restProps } = this.props;
//     return native ? <option {...restProps}>{label}</option> : <MenuItem {...restProps}>{label}</MenuItem>;
//   }
// }

// const SelectComponent = (props) => {
//   const classNames = useStyles();
//   const { label, children, className, formControlProps, inputProps, id, options = [], value, ...restProps } = props;
//
//   const childOptions = [
//     <Item native={restProps.native} key="None" aria-label="None" label={''} value="" />,
//     ...options.map(({ label, ...itemProps }, index) => (
//       <Item label={label} native={restProps.native} key={index} {...itemProps} />
//     )),
//   ];
//
//   return (
//     <FormControl size="small" variant="outlined" className={classNames.formControl} {...formControlProps}>
//       <InputLabel className={classNames.cssLabel} htmlFor={id || 'outlined-age-native-simple'}>
//         {label}
//       </InputLabel>
//       <Select
//         size="small"
//         id={id || 'outlined-age-native-simple'}
//         displayEmpty
//         className={`${className}`}
//         classes={{
//           icon: classNames.icon,
//         }}
//         label={<span className={classNames.cssLabel}>{label}</span>}
//         input={
//           <OutlinedInput
//             label={<span className={classNames.cssLabel}>{label}</span>}
//             classes={{
//               root: classNames.cssOutlinedInput,
//               focused: classNames.cssFocused,
//               notchedOutline: classNames.notchedOutline,
//             }}
//           />
//         }
//         onChange={console.log}
//         inputProps={{
//           size: 'small',
//           id: id || 'outlined-age-native-simple',
//           ...inputProps,
//         }}
//         value={value || ''}
//         {...restProps}
//       >
//         {children?.length ? children : childOptions}
//       </Select>
//     </FormControl>
//   );
// };

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;



export const SelectComponent = (props) => {
  const { label, checkBoxProps, ...restProps } = props;
  return (
    <AutoComplete
      getOptionLabel={(option) => option.label}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.label, inputValue);
        const parts = parse(option.label, matches);
        return (
          <>
           {restProps.multiple && <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} {...checkBoxProps} />}
            {parts.map((part, index) => (
              <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                {part.text}
              </span>
            ))}
          </>
        );
      }}
      {...restProps}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <TextField fullWidth {...params.inputProps} size="small" variant="outlined" label={label} />
        </div>
      )}
    />
  );
};

export default SelectComponent;

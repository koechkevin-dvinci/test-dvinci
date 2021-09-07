import React, { Fragment } from 'react';
import AutoComplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import useStyles from './styles';
import InputAdornment from '@material-ui/core/InputAdornment';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const SelectComponent = (props) => {
  const { label, checkBoxProps, size, shrink, classes, disabled, ...restProps } = props;
  const classNames = useStyles();

  return (
    <AutoComplete
      forcePopupIcon={'auto'}
      getOptionLabel={(option) => option.label}
      size={size || 'small'}
      classes={{
        root: classNames.root,
        clearIndicator: classNames.clearIndicator,
        popupIndicator: classNames.popupIndicator,
        popper: classNames.popper,
        ...classes
      }}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.label, inputValue);
        const parts = parse(option.label, matches);
        return (
          <Fragment>
            {restProps.multiple && (
              <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} {...checkBoxProps} />
            )}
            {option.icon && <span style={{ marginRight: 16 }}>{option.icon}</span>}
            {parts.map((part, index) => (
              <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                {part.text}
              </span>
            ))}
          </Fragment>
        );
      }}
      {...restProps}
      disabled={disabled}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <TextField
            placeholder={restProps.placeholder}
            fullWidth
            variant="outlined"
            label={label}
            {...params.inputProps}
            {...params}
            InputProps={{
              ...params.InputProps,
              ...restProps.InputProps,
              startAdornment: restProps.options.find(({ label }) => params.inputProps.value === label)?.icon ? (
                <InputAdornment style={{ marginLeft: 8 }} position="start">
                  {restProps.options.find(({ label }) => params.inputProps.value === label)?.icon}
                </InputAdornment>
              ) : undefined,
            }}
            InputLabelProps={{
              shrink,
            }}
          />
        </div>
      )}
    />
  );
};

export default SelectComponent;

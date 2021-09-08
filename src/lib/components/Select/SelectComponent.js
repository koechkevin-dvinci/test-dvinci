import React, { Fragment } from 'react';
import AutoComplete from '@material-ui/lab/Autocomplete';
import { Chip, TextField } from '@material-ui/core';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from './styles';
import InputAdornment from '@material-ui/core/InputAdornment';

const adornment = (icon) => {
  if (icon) {
    return {
      startAdornment: (
        <InputAdornment style={{ marginLeft: 8 }} position="start">
          {icon}
        </InputAdornment>
      ),
    };
  }
  return {};
};

export const SelectComponent = (props) => {
  const { label, checkBoxProps, size, shrink, classes, disabled, helperText, ...restProps } = props;
  const classNames = useStyles();

  return (
    <AutoComplete
      forcePopupIcon={'auto'}
      getOptionLabel={(option) => option.label}
      size={size || 'medium'}
      classes={{
        root: classNames.root,
        clearIndicator: classNames.clearIndicator,
        popupIndicator: classNames.popupIndicator,
        popper: classNames.popper,
        ...classes,
      }}
      renderOption={(option, { selected, inputValue }) => {
        const matches = match(option.label, inputValue);
        const parts = parse(option.label, matches);
        return (
          <Fragment>
            {restProps.multiple ? (
              <>
                <Checkbox color="primary" checked={selected} />
                {option.icon && <span style={{ marginRight: 16 }}>{option.icon}</span>}
                {parts.map((part, index) => (
                  <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                    {part.text}
                  </span>
                ))}
              </>
            ) : (
              <>
                {option.icon && <span style={{ marginRight: 16 }}>{option.icon}</span>}
                {parts.map((part, index) => (
                  <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                    {part.text}
                  </span>
                ))}
              </>
            )}
          </Fragment>
        );
      }}
      {...restProps}
      disabled={disabled}
      renderInput={(params) => (
        <TextField
          fullWidth
          {...params}
          variant="outlined"
          label={label}
          placeholder={restProps.placeholder}
          helperText={helperText}
          InputProps={{
            ...params.InputProps,
            ...restProps.InputProps,
            ...adornment(restProps.options.find(({ label }) => params.inputProps.value === label)?.icon),
          }}
          InputLabelProps={{
            shrink,
          }}
        />
      )}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            size="small"
            label={option.label}
            classes={{
              root: classNames.chip,
            }}
            {...getTagProps({ index })}
          />
        ))
      }
    />
  );
};

export default SelectComponent;

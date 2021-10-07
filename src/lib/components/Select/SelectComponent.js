import React, {Fragment, useRef, useState} from 'react';
import AutoComplete from '@material-ui/lab/Autocomplete';
import { Chip, TextField, Typography } from '@material-ui/core';
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
  const { label, checkBoxProps, size, shrink, classes, disabled, helperText, renderTags, renderWithChips, onChange, disableText, ...restProps } = props;
  const classNames = useStyles();
  const customSize = size || 'medium';

  const [focus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [val, setVal] = useState('');
  const [value, setValue] = useState([]);

  const onChangeValue= (...args) => {
    if (restProps.multiple){
      setValue(args[1])
    }
    if (onChange) {
      onChange(...args)
    }
  }
  const ref = useRef();

  const getLimitTags = () => {
    const inputWidth = ref?.current?.offsetWidth;
    const longString = value.map(({label}) => label).join(', ') + ' (xxx)';
    const substr = longString.substr(0, Math.floor(inputWidth / 8) - 4);
    return Math.max(1,substr.split(', ').length - 1)
  }
  const onInputChange = (ev, value, reason) => {
    if (reason === 'input') {
      setInputValue(value)
    }
  }

  const disabledInputChange = (ev, value, reason) => {
    setVal(reason === 'select-option' ? value.label: '')
  }

  const multipleProps = restProps.multiple ? {
    getLimitTagsText: (more) => ` (${more})`,
    inputValue: focus ? inputValue : ''
  } : {}

  return (
    <AutoComplete
      forcePopupIcon={'auto'}
      getOptionLabel={(option) => option.label || option.value || ''}
      size={customSize}
      classes={{
        root: classNames.root,
        clearIndicator: classNames.clearIndicator,
        popupIndicator: classNames.popupIndicator,
        popper: classNames.popper,
        endAdornment: classNames.endAdornment,
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
      onChange={disableText ? disabledInputChange :onChangeValue}
      inputValue={disableText?val:undefined}
      renderInput={(params) => (
        <TextField
          fullWidth
          ref={ref}
          {...params}
          variant="outlined"
          style={{ textOverflow: 'ellipsis'}}
          label={disabled ? <Typography color="textSecondary">{label}</Typography> : label}
          placeholder={restProps.placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          helperText={
            disabled ? (
              <Typography style={{ fontSize: 12 }} color="textSecondary">
                {helperText}
              </Typography>
            ) : (
              helperText
            )
          }
          InputProps={{
            ...params.InputProps,
            ...restProps.InputProps,
            ...adornment(restProps.options.find(({ label }) => params.inputProps.value === label)?.icon),
            style: {
              minHeight: customSize === 'small' ? 40 : customSize === 'medium' ? 56 : undefined,
            },
          }}
          InputLabelProps={{
            shrink,
          }}
        />
      )}

      limitTags={getLimitTags()}
      disableCloseOnSelect
      selectOnFocus={false}
      onInputChange={onInputChange}
      {...multipleProps}
      renderTags={renderTags || ((tagValue, getTagProps) =>
        tagValue.map((option, index) => renderWithChips ? (
          <Chip
            size="small"
            label={option.label}
            classes={{
              root: classNames.chip,
            }}
            {...getTagProps({ index })}
          />
        ) : (!inputValue && option.label + ', ')))
      }
    />
  );
};

export default SelectComponent;

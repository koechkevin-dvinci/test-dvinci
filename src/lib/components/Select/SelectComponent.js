import React, { Fragment, useRef } from 'react';
import AutoComplete from '@material-ui/lab/Autocomplete';
import { Chip, TextField, Typography } from '@material-ui/core';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from './styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';

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

const TextFieldWithChildren = (props) => {
  const { renderInputNode, selectedValue, ...restProps } = props;
  const classNames = useStyles();
  const customSize = restProps.size || 'medium';

  const ref = useRef();

  return renderInputNode ? (
    <Box className={classNames.textWithChildren}>
      <TextField
        ref={ref}
        value="Xxxxx"
        {...restProps}
        InputLabelProps={{ shrink: true }}
      />
      <Box
        style={{ height: ref?.current?.offsetHeight || (customSize === 'small' ? 40 : 56) }}
        className={classNames.inputChild}
      >
        {renderInputNode(props, { element: ref?.current, selectedValue })}
      </Box>
    </Box>
  ) : (
    <TextField {...restProps} />
  );
};

export const SelectComponent = (props) => {
  const { label, checkBoxProps, size, shrink, classes, disabled, helperText, renderInputNode, ...restProps } = props;
  const classNames = useStyles();
  const customSize = size || 'medium';

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
        <TextFieldWithChildren
          fullWidth
          renderInputNode={renderInputNode}
          selectedValue={restProps.value || restProps.defaultValue}
          {...params}
          variant="outlined"
          label={disabled ? <Typography color="textSecondary">{label}</Typography> : label}
          placeholder={restProps.placeholder}
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

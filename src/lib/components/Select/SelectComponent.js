import React, {Fragment} from 'react';
import AutoComplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import useStyles from './styles';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const SelectComponent = (props) => {
  const { label, checkBoxProps, size, shrink, ...restProps } = props;
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
        popper: classNames.popper
      }}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.label, inputValue);
        const parts = parse(option.label, matches);
        return (
          <Fragment>
            {restProps.multiple && (
              <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} {...checkBoxProps} />
            )}
            {parts.map((part, index) => (
              <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                {part.text}
              </span>
            ))}
          </Fragment>
        );
      }}
      {...restProps}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <TextField
            placeholder={restProps.placeholder}
            fullWidth
            variant="outlined"
            label={label}
            {...params.inputProps}
            {...params}
            InputLabelProps={{ shrink }}
          />
        </div>
      )}
    />
  );
};

export default SelectComponent;

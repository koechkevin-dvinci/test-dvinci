import { InputAdornment } from '@material-ui/core';
import React, { useState } from 'react';
import { Search as SearchIcon } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import { styles } from './styles';
import InputComponent from '../Input';

const Search = (props) => {
  const { classes, onChange, ...restProps } = props;
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(props.value);
  const handleChange = (e) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };
  return (
    <InputComponent
      size="small"
      id="outlined-search-helper-text"
      label={focus || value ? <span className={classes.cssLabel}>Search</span> : ''}
      fullWidth
      variant="outlined"
      onChange={handleChange}
      InputProps={{
        placeholder: !focus ? 'Search' : '',
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        // className: classes.container,
        startAdornment: (
          <InputAdornment disablePointerEvents position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      {...restProps}
    />
  );
};

export default withStyles(styles)(Search);

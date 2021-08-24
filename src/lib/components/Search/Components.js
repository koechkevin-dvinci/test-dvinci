import { TextField, InputAdornment } from '@material-ui/core';
import React, {useState} from 'react';
import { Search as SearchIcon } from '@material-ui/icons';

const Search = (props) => {
  const { ...restProps } = props;
  const [focus, setFocus] = useState(false);
  return (
    <TextField
      size="small"
      id="outlined-search-helper-text"
      label={focus && 'Search'}
      fullWidth
      variant="outlined"
      InputProps={{
        placeholder: !focus && 'Search',
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
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

export default Search;

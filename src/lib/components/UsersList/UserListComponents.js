import React from 'react';
import SelectComponent from '../Select/SelectComponent';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(145, 158, 171, 0.24)',
      borderWidth: 1
    },
    '&:focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(145, 158, 171, 0.24);',
    },
  },

  focused: {
    border: 'none !important',
  },
}));
export const UserAccessComponent = (props) => {
  const { options = [], ...restProps } = props;
  const classNames = useStyles();
  const fieldOptions = options.map((opt, index) => {
    return {
      icon: <FiberManualRecordIcon fontSize="small" style={{ color: opt.color, height: 12, width: 12 }} />,
      ...opt,
    };
  });
  return (
    <SelectComponent
      classes={{ root: classNames.root, focused: classNames.focused }}
      size="small"
      options={fieldOptions}
      {...restProps}
    />
  );
};

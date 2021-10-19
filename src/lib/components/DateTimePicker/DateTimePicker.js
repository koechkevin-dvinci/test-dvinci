import React from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

import { DateTimePicker as MuiDateTime, TimePicker as MuiTime, DesktopDatePicker as MuiDesktopDate } from '@mui/lab';
import InputComponent from '../Input';
import { inlineStyles, useStyles } from './styles';
import { Grow, withStyles } from '@material-ui/core';

const styles = (theme) => {
  return {
    root: {
      background: theme.palette.background.paper,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
    },
  };
};
const MuiDateTimePicker = withStyles(styles)(MuiDateTime);
const MuiTimePicker = withStyles(styles)(MuiTime);
const MuiDesktopDatePicker = withStyles(styles)(MuiDesktopDate);
const OpenPickerIcon = () => {
  const classNames = useStyles();
  return <ArrowDropUpIcon className={classNames.icon} />;
};

const SwitchViewButton = () => {
  const classNames = useStyles();
  return <ArrowDropDownIcon className={classNames.icon} />;
};

const RightArrowIcon = () => {
  const classNames = useStyles();
  return <ChevronRight className={classNames.icon} />;
};

const LeftArrowIcon = () => {
  const classNames = useStyles();
  return <ChevronLeft className={classNames.icon} />;
};

const DateTimePicker = (props) => {
  const { classes, ...restProps } = props;
  const classNames = useStyles();

  return (
    <>
      <style>{inlineStyles}</style>
      <MuiDateTimePicker
        clearable
        showDaysOutsideCurrentMonth
        components={{ OpenPickerIcon, SwitchViewButton, RightArrowIcon, LeftArrowIcon }}
        className={classNames.root}
        toolbarFormat="MM"
        renderInput={(params) => <InputComponent {...params} />}
        TransitionComponent={Grow}
        {...restProps}
      />
    </>
  );
};

const TimePicker = (props) => {
  const { ...restProps } = props;
  return (
    <>
      <style>{inlineStyles}</style>
      <MuiTimePicker
        components={{ OpenPickerIcon, SwitchViewButton, RightArrowIcon, LeftArrowIcon }}
        renderInput={(params) => <InputComponent {...params} />}
        {...restProps}
      />
    </>
  );
};

const DesktopDatePicker = (props) => {
  const { ...restProps } = props;
  return (
    <>
      {inlineStyles}
      <MuiDesktopDatePicker
        components={{ OpenPickerIcon, SwitchViewButton, RightArrowIcon, LeftArrowIcon }}
        renderInput={(params) => <InputComponent {...params} />}
        {...restProps}
      />
    </>
  );
};
export { DateTimePicker, TimePicker, DesktopDatePicker };

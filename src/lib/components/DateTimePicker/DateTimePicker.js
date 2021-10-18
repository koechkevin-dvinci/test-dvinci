import React from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

import {
  DateTimePicker as MuiDateTime,
  TimePicker as MuiTime,
  DesktopDatePicker as MuiDesktopDate,
} from '@mui/lab';
import InputComponent from '../Input';
import { useStyles } from './styles';
import { Grow, withStyles } from '@material-ui/core';

const styles = (theme) => {
  return {
    root: {
      background: theme.palette.background.paper,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
    },
  }
}
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
}

const LeftArrowIcon = () => {
  const classNames = useStyles();
  return <ChevronLeft className={classNames.icon} />;
}

const DateTimePicker = (props) => {
  const { classes, ...restProps } = props;
  const classNames = useStyles();

  return (
    <>
      <style jsx>
        {`.css-1oqqxac-MuiPaper-root {
          background: #222b36;
          margin-top: 16px;
          width: 100%;
          border-radius: 24px;
          border: none;
        }
        .css-l0iinn {
        color: #919eab;
        }
        .css-1l3etzp, .css-fhpqww {
        min-height: 200px;
        }
        .css-1v994a0 {
        text-transform: uppercase;
        }
        .css-aiowg3-MuiButtonBase-root-MuiPickersDay-root {
        background-color: transparent;
        font-size: 14px;
        color: #fff
        }
        .css-du5qke-MuiTypography-root {
        font-size: 14px;
        color: #FFF;
        }
        .css-w7tuk7-MuiButtonBase-root-MuiPickersDay-root {
        background-color: transparent;
        font-size: 14px;
        color: #919eab;
        }
        .MuiTypography-caption {
        color: #fff;
        }
        .css-h7tmkn {
         color: #fff;
        }
        .css-eziifo {
        background-color: #171c24;
        }
        .css-hc7ms0 {
        color: #fff;
        }
        .css-1rghpgh-MuiButtonBase-root-MuiTab-root {
        color: #919eab;
        }
`}
      </style>
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
  return <MuiTimePicker renderInput={(params) => <InputComponent {...params} />} {...restProps} />;
};

const DesktopDatePicker = (props) => {
  const { ...restProps } = props;
  return <MuiDesktopDatePicker renderInput={(params) => <InputComponent {...params} />} {...restProps} />;
};
export { DateTimePicker, TimePicker, DesktopDatePicker };

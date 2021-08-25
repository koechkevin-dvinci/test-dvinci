import React from 'react';
import { makeStyles, Tab as MuiTab, Tabs } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const style = {
  root: {
    textTransform: 'none',
  },
  tabPanel: {
    padding: 24
  }
};

const Tab = (props) => {
  const { styles, ...restProps } = props;
  const useStyles = makeStyles({ ...style, ...styles });
  const classes = useStyles();
  return <MuiTab className={classes.root} {...restProps} />;
};

export const TabPanel = (props) => {
  const { children, value, index, className, ...other } = props;
  const useStyles = makeStyles({ ...style });
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      className={`${className} ${classes.tabPanel}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
export { Tabs, Tab };

import React from 'react';
import {Paper, Box, Typography, IconButton} from '@material-ui/core';
import { useStyles } from './styles';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';

const StepLabel = (props) => {
  const { active, primaryText, secondaryText, leadingIcon, color, isComplete } = props;
  const classes = useStyles();
  return (
    <Paper className={active ? classes.active : classes.inActive} elevation={0}>
      <Box display="flex" alignItems="center">
        <Box>
          <IconButton variant="contained" color={active ? "primary": undefined} style={{ color: active?color: undefined, borderColor: active ? (color): 'transparent' }} className={classes.iconButton}>
            {leadingIcon}
          </IconButton>
        </Box>
        <Box style={{ flex: 1, padding: '0 16px' }}>
          <Typography variant="h6">
            {primaryText}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {secondaryText}
          </Typography>
        </Box>
        <Box>
          {isComplete && !active && <CheckCircleOutlineOutlinedIcon color="primary"/>}
        </Box>
      </Box>
    </Paper>
  );
};

export default StepLabel;

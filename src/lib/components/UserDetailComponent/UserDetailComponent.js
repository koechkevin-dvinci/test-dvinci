import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import PeopleIcon from '@material-ui/icons/People';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Modal from '../../components/Modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import {makeStyles} from "@material-ui/core";

export const Title = (props) => {
  return (
    <Box display="flex">
      <Typography variant="h6">{props.name}</Typography>
      <Box style={{ flex: 1 }} display="flex" justifyContent="flex-end" alignItems="center">
        <Box display="flex" alignItems="center">
          <FiberManualRecordRoundedIcon
            fontSize="small"
            style={{ color: props.color || 'rgba(145, 158, 171, 0.86)', height: 18, width: 18, marginRight: 12 }}
          />
          <Typography style={{ marginRight: 8 }} variant="body2">
            {props.access}
          </Typography>
        </Box>
        <IconButton onClick={props.onClose} size="small">
          {/*<Typography color="textSecondary">*/}
          <CloseIcon style={{ color: 'rgba(145, 158, 171, 0.86)' }} fontSize="large" />
          {/*</Typography>*/}
        </IconButton>
      </Box>
    </Box>
  );
};

const UserDetail = (props) => {
  const { email, phone, name, onClose, dayAdded, teams, location, ...restProps } = props;
  const useStyles = makeStyles({ paper: { maxWidth: 400 }});
  const classes = useStyles();
  return (
    <Modal
      title={<Title name={name} onClose={onClose} access={props.access} color={props.color} />}
      hideFooter
      classes={classes}
      {...restProps}
    >
      <Box style={{ paddingBottom: 16, paddingTop: 2 }} display="flex">
        <Typography color="textSecondary" style={{ marginRight: 16 }}>
          <EmailIcon fontSize="large" />
        </Typography>
        {email}
      </Box>
      <Divider />
      <Box style={{ padding: '16px 0' }} display="flex">
        <Typography color="textSecondary" style={{ marginRight: 16 }}>
          <PhoneIcon fontSize="large" />
        </Typography>
        {phone}
      </Box>
      <Divider />
      <Box style={{ padding: '16px 0' }} display="flex">
        <Typography color="textSecondary" style={{ marginRight: 16 }}>
          <PeopleIcon fontSize="large" />
        </Typography>
        <Box>
        {teams}
        </Box>
      </Box>
      <Divider />
      <Box style={{ padding: '16px 0' }} display="flex">
        <Typography color="textSecondary" style={{ marginRight: 16 }}>
          <LocationOnIcon fontSize="large" />
        </Typography>
        {location}
      </Box>
      <Divider />
      <Box style={{ marginTop: 12 }}>
      <Typography variant="caption" color="textSecondary">
        Added on {dayAdded}
      </Typography>
      </Box>
    </Modal>
  );
};

UserDetail.propTypes = {
  email: PropTypes.node,
  phone: PropTypes.node,
  name: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  dayAdded: PropTypes.node,
  teams: PropTypes.node,
};
export default UserDetail;

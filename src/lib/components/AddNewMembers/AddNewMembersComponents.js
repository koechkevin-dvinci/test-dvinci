import React from 'react';
import Modal from '../Modal/Components';
import SelectComponent from '../Select/SelectComponent';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Box from '@material-ui/core/Box';
import Button from '../Button';
import { makeStyles } from '@material-ui/core';
import { ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, List } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PeopleIcon from '@material-ui/icons/People';

const styles = (theme) => ({
  listMembers: {
    marginTop: 16,
  },
  body: {
    padding: `16px 0`,
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    minWidth: 0,
    marginRight: 16,
    color: '#fff',
    fontSize: 14,
    fontWeight: 400,
  },
  listItem: {
    padding: 0,
    marginTop: 16,
  },
});
const useStyles = makeStyles(styles);

export const ListComponent = (props) => {
  const classes = useStyles();

  const { className, imgSrc, displayName, onMakeTeamManager, onRemove, ...restProps } = props;
  const rootClassName = `${classes.listItem} ${className || ''}`;
  let splittedName = displayName.split(/[\s_\-@]/g);
  if (splittedName.length < 2) {
    splittedName[0] = displayName;
    splittedName[1] = displayName.substr(1);
  }

  const imgAltName = (splittedName?.[0]?.[0] + splittedName?.[1]?.[0])?.toUpperCase();
  return (
    <ListItem className={rootClassName} {...restProps}>
      <ListItemAvatar>
        <Avatar alt={imgAltName} className={classes.avatar} src={imgSrc}>
          {!imgSrc && imgAltName}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={displayName} />
      <ListItemSecondaryAction>
        <IconButton onClick={onMakeTeamManager} color="primary">
          <PeopleIcon/>
        </IconButton>
        <IconButton onCLick={onRemove} color="primary">
          <CloseIcon/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const AddNewMember = (props) => {
  const { options = [], members = [], addButtonProps, onRemove, onMakeTeamManager, ...restProps } = props;
  const classes = useStyles();
  return (
    <Modal title="Add members" {...restProps}>
      <Box className={classes.body}>
        <Box display="flex" alignItems="center">
          <Box style={{ flex: 1 }}>
            <SelectComponent
              size="medium"
              popupIcon={<ArrowDropDownIcon />}
              autoHighlight
              placeholder="Type a name or email"
              label="Name / Email *"
              options={options}
            />
          </Box>
          <Button disabled style={{ marginLeft: 16 }} color="primary" variant="outlined" {...addButtonProps}>
            Add
          </Button>
        </Box>
        <Box className={classes.listMembers}>
          <List subheader="MEMBERS">
            {members.map((member, index) => {
              return <ListComponent onRemove={() => onRemove(member)} onMakeTeamManager={() => onMakeTeamManager(member)} displayName={member.label} imgSrc="" key={index} />;
            })}
          </List>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddNewMember;

import React, { useState } from 'react';
import Modal from '../Modal/Components';
import SelectComponent from '../Select/SelectComponent';
import Box from '@material-ui/core/Box';
import Button from '../Button';
import { makeStyles } from '@material-ui/core';
import { ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, List } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PeopleIcon from '@material-ui/icons/People';
import styles from './styles';

const useStyles = makeStyles(styles);

export const ListComponent = (props) => {
  const classes = useStyles();

  const { className, imgSrc, displayName, onMakeTeamManager, onRemove, hideSecondaryAction, ...restProps } = props;
  const rootClassName = `${classes.listItem} ${className || ''}`;
  let splittedName = displayName.split(/[\s_\-@]/g);
  if (splittedName.length < 2) {
    splittedName[0] = displayName;
    splittedName[1] = displayName.substr(1);
  }
  const [hovered, setHovered] = useState({ remove: false, makeTeamManager: false });

  const onHover = (name) => {
    setHovered((val) => ({ ...val, [name]: true }));
  };

  const onMouseLeave = (name) => {
    setHovered((val) => ({ ...val, [name]: false }));
  };

  const imgAltName = (splittedName?.[0]?.[0] + splittedName?.[1]?.[0])?.toUpperCase();
  return (
    <ListItem className={rootClassName} {...restProps}>
      <ListItemAvatar>
        <Avatar alt={imgAltName} className={classes.avatar} src={imgSrc}>
          {!imgSrc && imgAltName}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={displayName} />
      {!hideSecondaryAction && (
        <ListItemSecondaryAction>
          <IconButton
            onMouseEnter={() => onHover('makeTeamManager')}
            onMouseLeave={() => onMouseLeave('makeTeamManager')}
            onClick={onMakeTeamManager}
            classes={{
              root: classes.icon
            }}
            color={hovered.makeTeamManager ? 'primary' : undefined}
          >
            <PeopleIcon />
          </IconButton>
          <IconButton
            onMouseEnter={() => onHover('remove')}
            onMouseLeave={() => onMouseLeave('remove')}
            onClick={onRemove}
            color={hovered.remove ? 'primary' : undefined}
            classes={{
              root: classes.icon
            }}
          >
            <CloseIcon />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
};

const AddNewMember = (props) => {
  const {
    options = [],
    members = [],
    addButtonProps,
    onRemove,
    onMakeTeamManager,
    selectProps,
    hideSecondaryAction,
    onAddMember,
    ...restProps
  } = props;
  const classes = useStyles();
  const [selectedUser, setSelectedUser] = useState();
  return (
    <Modal okText="Done" title="Add members" {...restProps}>
      <Box className={classes.body}>
        <Box display="flex" alignItems="center">
          <Box style={{ flex: 1 }}>
            <SelectComponent
              size="medium"
              shrink
              autoHighlight
              placeholder="Type name or email"
              label="Name / Email *"
              options={options}
              onChange={(_, value) => setSelectedUser(value)}
              {...selectProps}
            />
          </Box>
          <Button disabled={!selectedUser} style={{ marginLeft: 16 }} color="primary" variant="outlined" onClick={() => onAddMember(selectedUser)} {...addButtonProps}>
            Add
          </Button>
        </Box>
        <Box className={classes.listMembers}>
          <List subheader="MEMBERS">
            {members.map((member, index) => {
              return (
                <ListComponent
                  hideSecondaryAction={hideSecondaryAction}
                  onRemove={() => onRemove(member)}
                  onMakeTeamManager={() => onMakeTeamManager(member)}
                  displayName={member.label}
                  imgSrc=""
                  key={index}
                />
              );
            })}
          </List>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddNewMember;

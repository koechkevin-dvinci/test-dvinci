import React, { useState } from 'react';
import SelectComponent from '../Select/SelectComponent';
import Box from '@material-ui/core/Box';
import Button from '../Button';
import { makeStyles } from '@material-ui/core';
import { ListItem as MuiListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, List } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add'
import PeopleIcon from '@material-ui/icons/People';
import styles from './styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(styles);

const getAltName = (splittedName = ['', '']) => {
  return (splittedName[0][0] + splittedName[1][0]).toUpperCase();
}
export const MemberListItem = (props) => {
  const classes = useStyles();

  const {
    className,
    imgSrc,
    displayName,
    onMakeTeamManager,
    onRemove,
    hideSecondaryAction,
    labelTag,
    isTeamManager,
    disabled,
    showAddIcon,
    onClickPlusIcon,
    ...restProps
  } = props;
  const rootClassName = `${classes.listItem} ${className || ''}`;
  let splittedName = displayName.split(/[\s_\-@]/g);
  if (splittedName.length < 2) {
    splittedName[0] = displayName || '';
    splittedName[1] = displayName.substr(1) || '';
  }

  const imgAltName = getAltName(splittedName);
  const avatarClass = disabled ? 'disabledAvatar': (isTeamManager ? 'teamManagerAvatar': 'avatar');
  const iconStyle = {
    fontSize: 24
  }
  return (
    <MuiListItem className={rootClassName} disabled={disabled} {...restProps}>
      <ListItemAvatar>
        <Avatar alt={imgAltName} className={`${classes.avatar} ${classes[avatarClass]}`} src={imgSrc}>
          {!imgSrc && imgAltName}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Box display="flex" alignItems="center">
            <Typography>{displayName}</Typography>
            <Typography style={{ marginLeft: 16 }} color="textSecondary" variant="caption">
              {labelTag}
            </Typography>
          </Box>
        }
      />
      {!hideSecondaryAction && (
        <ListItemSecondaryAction>
          <IconButton
            onClick={onMakeTeamManager}
            disabled={disabled}
            color={isTeamManager ? 'primary': undefined}
            style={{ marginRight: 16 }}
            classes={{
              root: !isTeamManager ? classes.icon: classes.teamManager,
            }}
          >
            <PeopleIcon style={iconStyle} />
          </IconButton>
          {!showAddIcon && <IconButton
            disabled={disabled}
            onClick={onRemove}
            classes={{
              root: classes.icon,
            }}
          >
            <CloseIcon style={iconStyle} />
          </IconButton>}
          { showAddIcon &&
            <IconButton
              disabled={disabled}
              onClick={onClickPlusIcon}
              classes={{
                root: classes.icon,
              }}
            >
              <AddIcon style={iconStyle} />
            </IconButton>
          }
        </ListItemSecondaryAction>
      )}
    </MuiListItem>
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
    onAddMember,
    onClickPlusIcon,
    showAddMembers = true,
  } = props;
  const classes = useStyles();
  const [selectedUser, setSelectedUser] = useState([]);
  const [placeholder, setPlaceHolder] = useState(() => selectProps.placeholder || 'Type name or email');

  const onClickAdd = () => {
    setSelectedUser([]);
    onAddMember(selectedUser)
  }

  return (
      <Box className={classes.body}>
        {showAddMembers && (
        <Box display="flex" alignItems="center">
          <Box style={{ flex: 1 }}>
            <SelectComponent
              size="medium"
              shrink
              autoHighlight
              label="Name / Email *"
              options={options}
              onChange={(_, value) => setSelectedUser(value)}
              onFocus={() => setPlaceHolder('')}
              onBlur={() => setPlaceHolder(selectProps.placeholder || 'Type name or email')}
              value={selectedUser}
              {...selectProps}
              placeholder={placeholder}
            />
          </Box>
          <Button
            disabled={!selectedUser}
            style={{ marginLeft: 16 }}
            color="primary"
            variant="outlined"
            onClick={onClickAdd}
            {...addButtonProps}
          >
            Add
          </Button>
        </Box>)}
        {members.length > 0 && <Box className={classes.listMembers}>
          <List subheader="MEMBERS">
            {members.map((member, index) => {
              return (
                <MemberListItem
                  hideSecondaryAction={member.hideSecondaryAction}
                  onRemove={() => onRemove(member)}
                  onMakeTeamManager={() => onMakeTeamManager(member)}
                  onClickPlusIcon={() =>onClickPlusIcon(member)}
                  displayName={member.label}
                  imgSrc={member.imgSrc}
                  labelTag={member.labelTag}
                  disabled={member.disabled}
                  key={index}
                  showAddIcon={member.showAddIcon}
                  isTeamManager={member.isTeamManager}
                />
              );
            })}
          </List>
        </Box>}
      </Box>
  );
};

export default AddNewMember;

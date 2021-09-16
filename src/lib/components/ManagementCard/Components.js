import React, { Fragment } from 'react';
import { Avatar, Card, makeStyles, CardContent, Divider, CardHeader, Box, Typography, Menu } from '@material-ui/core';
import { MoreVert, Add as AddIcon, ChevronRight } from '@material-ui/icons';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '../Button/Button';
import download from '../../images/downloadIcon.svg';
import IconButton from '@material-ui/core/IconButton';
import { styles } from './styles';

export const PageHeader = (props) => {
  const { path, title, primaryText, secondaryText, primaryIconProps, secondaryIconProps, ...restProps } = props;
  const splitPaths = path.split('/');

  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <Grid container justifyContent="space-between" alignItems="center" {...restProps}>
      <Grid item>
        <Box display="flex" alignItems="center" style={{ height: 32 }}>
          {splitPaths.map((path, index) => (
            <Fragment key={index}>
              <Typography
                color={index === splitPaths.length - 1 ? 'textSecondary' : 'initial'}
                className={classes.head}
              >
                {path}
              </Typography>
              {index < splitPaths.length - 1 && <ChevronRight className={classes.icon} style={{ marginRight: 16 }} />}
            </Fragment>
          ))}
        </Box>
        <Typography variant="h5">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          style={{ marginRight: 16 }}
          startIcon={<img height={20} alt="" src={download} />}
          variant="outlined"
          size="large"
          color="primary"
          {...secondaryIconProps}
        >
          {secondaryText}
        </Button>
        <Button startIcon={<AddIcon />} variant="contained" size="large" color="primary" {...primaryIconProps}>
          {primaryText}
        </Button>
      </Grid>
    </Grid>
  );
};

PageHeader.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  primaryText: PropTypes.string.isRequired,
};

export const HeaderComponent = ({ headerText, onHamburgerClick, menuProps, menuChildren, disabled, onActivate, menuOpen = false, onCloseMenu }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    onHamburgerClick(event);
  };

  const handleClose = () => {
    setAnchorEl(null);
    if(onCloseMenu) {
      onCloseMenu();
    }
  };
  return (
    <Box display="flex" justifyContent="space-between" style={{ height: 28 }} alignItems="center">
      <Typography variant="overline">{headerText}</Typography>
      {!disabled && <IconButton ref={setAnchorEl} color="primary" onClick={handleClick}>
        <MoreVert />
      </IconButton>}
      {
        disabled && <Button onClick={onActivate} color="primary" variant="outlined">Activate</Button>
      }
      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl) && menuOpen}
        onClose={handleClose}
        {...menuProps}
      >
        {menuChildren}
      </Menu>
    </Box>
  );
};

export const BodyComponent = ({ header, description, disabled }) => {
  return (
    <Box>
      <Typography color={disabled? "textSecondary": undefined} variant="h6">{header}</Typography>
      <Typography color="textSecondary" variant="body2">
        {description}
      </Typography>
    </Box>
  );
};

export const FooterComponent = (props) => {
  const { text, avatars = [], onAddMember, disabled } = props;
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <Box style={{ flex: 1 }} display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex" alignItems="center" style={{ flex: 1 }}>
        {avatars.map((user, index) => {
          return index < 5 && (
            <Avatar className={disabled ? classes.disabledAvatar: classes.avatar} style={{ marginRight: 8 }} key={index} alt={user.altIcon} src={user.imgSrc}>
              <Typography color="textPrimary" variant="body2">
              {!user.imgSrc && user.altIcon}
              </Typography>
            </Avatar>
          );
        })}
        <Typography variant="body2">{text}</Typography>
      </Box>
      <IconButton size="small" disabled={disabled}>
        <Typography color="textSecondary">
      <AddIcon onClick={onAddMember} />
        </Typography>
      </IconButton>
    </Box>
  );
};
const ManagementCard = (props) => {
  const {
    makeStyle,
    headerText,
    footerText,
    avatars,
    bodyHeader,
    bodyDescription,
    onClickAddMember,
    onHamburgerClick,
    menuProps,
    menuChildren,
    disabled,
    onActivate,
    menuOpen,
    onCloseMenu,
    ...restProps
  } = props;

  const useStyles = makeStyles((theme) => styles(theme));
  const classes = useStyles();
  return (
    <Card variant={disabled ? 'outlined': undefined} className={disabled? classes.disabled :classes.root} {...restProps}>
      <CardHeader
        style={{ paddingBottom: 0, }}
        subheader={
          <HeaderComponent
            menuChildren={menuChildren}
            menuProps={menuProps}
            onHamburgerClick={onHamburgerClick}
            headerText={headerText}
            disabled={disabled}
            onActivate={onActivate}
            menuOpen={menuOpen}
            onCloseMenu={onCloseMenu}
          />
        }
      />
      <CardContent style={{ minHeight: 86, paddingTop: 0 }}>
        <BodyComponent disabled={disabled} header={bodyHeader} description={bodyDescription} />
      </CardContent>
      <Divider />
      <Box display="flex" alignItems="center">
        <CardHeader
          style={{ flex: 1, height: 64 }}
          subheader={<FooterComponent disabled={disabled} onAddMember={onClickAddMember} avatars={avatars} text={footerText} />}
        />
      </Box>
    </Card>
  );
};
ManagementCard.propTypes = {
  makeStyle: PropTypes.object,
  headerText: PropTypes.string,
  footerText: PropTypes.string,
  avatars: PropTypes.array,
  bodyHeader: PropTypes.string,
  bodyDescription: PropTypes.string,
  onClickAddMember: PropTypes.func,
  onHamburgerClick: PropTypes.func,
  menuProps: PropTypes.object,
  menuChildren: PropTypes.array,
  menuOpen: PropTypes.bool,
  onCloseMenu: PropTypes.func,
};
export default ManagementCard;

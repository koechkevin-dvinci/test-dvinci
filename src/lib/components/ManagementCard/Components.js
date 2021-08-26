import React, { Fragment } from 'react';
import { Avatar, Card, makeStyles, CardContent, Divider, CardHeader, Box, Typography, Menu } from '@material-ui/core';
import { MoreVert, Add as AddIcon, ChevronRight } from '@material-ui/icons';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '../Button/Button';
import download from '../../images/downloadIcon.svg';

export const styles = {
  root: {
    maxWidth: 362,
  },
  head: {
    textTransform: 'capitalize',
    marginRight: 16,
    fontSize: 16,
  },
  icon: {
    color: 'grey',
  },
};

export const PageHeader = (props) => {
  const { path, title, primaryText, secondaryText, primaryIconProps, secondaryIconProps, ...restProps } = props;
  const splitPaths = path.split('/');

  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <Grid container justifyContent="space-between" {...restProps}>
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
        <Typography style={{ lineHeight: '32px' }} variant="h3">
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

export const HeaderComponent = ({ headerText, onHamburgerClick, menuProps, menuChildren }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    onHamburgerClick(event);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography>{headerText}</Typography>
      <MoreVert onClick={handleClick} />
      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        {...menuProps}
      >
        {menuChildren}
      </Menu>
    </Box>
  );
};

export const BodyComponent = ({ header, description }) => {
  return (
    <Box>
      <Typography variant="h6">{header}</Typography>
      <Typography color="textSecondary" variant="body2">
        {description}
      </Typography>
    </Box>
  );
};

export const FooterComponent = (props) => {
  const { text, avatars = [], onAddMember } = props;
  return (
    <Box style={{ flex: 1 }} display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex" alignItems="center" style={{ flex: 1 }}>
        {avatars.map((user, index) => {
          return (
            <Avatar style={{ marginRight: 8 }} key={index} alt={user.altIcon} src={user.imgSrc}>
              {!user.imgSrc && user.altIcon}
            </Avatar>
          );
        })}
        <Typography>{text}</Typography>
      </Box>
      <AddIcon onClick={onAddMember} />
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
    ...restProps
  } = props;
  const useStyles = makeStyles({ ...styles, ...makeStyle });
  const classes = useStyles();
  return (
    <Card className={classes.root} {...restProps}>
      <CardHeader
        subheader={
          <HeaderComponent
            menuChildren={menuChildren}
            menuProps={menuProps}
            onHamburgerClick={onHamburgerClick}
            headerText={headerText}
          />
        }
      />
      <CardContent style={{ minHeight: 86 }}>
        <BodyComponent header={bodyHeader} description={bodyDescription} />
      </CardContent>
      <Divider />
      <Box display="flex" alignItems="center">
        <CardHeader
          style={{ flex: 1, minHeight: 72 }}
          subheader={<FooterComponent onAddMember={onClickAddMember} avatars={avatars} text={footerText} />}
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
};
export default ManagementCard;

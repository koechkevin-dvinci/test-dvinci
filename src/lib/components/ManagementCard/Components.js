import React from 'react';
import {
  Avatar,
  Card,
  makeStyles,
  CardContent,
  Divider,
  CardHeader,
  Box,
  Typography,
  IconButton,
} from '@material-ui/core';
import { MoreVert, Add as AddIcon } from '@material-ui/icons';

export const styles = {
  root: {
    maxWidth: 362,
  },
};

export const HeaderComponent = ({ headerText }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography>{headerText}</Typography>
      <IconButton sizeSmall aria-label="more">
        <MoreVert />
      </IconButton>
    </Box>
  );
};

export const FooterComponent = (props) => {
  const { text, avatars = [] } = props;
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex" alignItems="center" style={{ flex: 1 }}>
        {avatars.map((user, index) => {
          return <Avatar style={{ marginRight: 8 }} key={index} alt={user.altIcon} src={user.imgSrc}>
            {!user.imgSrc && user.altIcon}
          </Avatar>;
        })}
        <Typography>{text}</Typography>
      </Box>
      <IconButton sizeSmall aria-label="Add">
        <AddIcon />
      </IconButton>
    </Box>
  );
};
const ManagementCard = (props) => {
  const { makeStyle, headerText, footerText, avatars, ...restProps } = props;
  const useStyles = makeStyles({ ...styles });
  const classes = useStyles();
  return (
    <Card className={classes.root} {...restProps}>
      <CardHeader subheader={<HeaderComponent headerText={headerText} />} />
      <CardContent></CardContent>
      <Divider />
      <CardContent>
        <FooterComponent avatars={avatars} text={footerText} />
      </CardContent>
    </Card>
  );
};

export default ManagementCard;

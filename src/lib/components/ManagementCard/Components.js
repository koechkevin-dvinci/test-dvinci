import React from 'react';
import {
  Avatar,
  Card,
  makeStyles,
  CardContent,
  Divider,
  CardHeader,
  Box,
  Typography
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
      <MoreVert />
    </Box>
  );
};

export const BodyComponent = ({header, description }) => {
  return <Box>
    <Typography variant="h6">{header}</Typography>
    <Typography color="textSecondary" variant="body2">{description}</Typography>
  </Box>
}

export const FooterComponent = (props) => {
  const { text, avatars = [] } = props;
  return (
    <Box style={{ flex: 1}} display="flex" justifyContent="space-between" alignItems="center">
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
      <AddIcon />
    </Box>
  );
};
const ManagementCard = (props) => {
  const { makeStyle, headerText, footerText, avatars, bodyHeader, bodyDescription, ...restProps } = props;
  const useStyles = makeStyles({ ...styles });
  const classes = useStyles();
  return (
    <Card className={classes.root} {...restProps}>
      <CardHeader subheader={<HeaderComponent headerText={headerText} />} />
      <CardContent style={{ minHeight: 86 }}>
        <BodyComponent header={bodyHeader} description={bodyDescription} />
      </CardContent>
      <Divider />
      <Box display="flex" alignItems="center">
      <CardHeader style={{ flex: 1, minHeight: 72}} subheader={<FooterComponent avatars={avatars} text={footerText} />} />
      </Box>
    </Card>
  );
};

export default ManagementCard;

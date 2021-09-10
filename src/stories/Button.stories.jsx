import React from 'react';

import { Button } from '../lib';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Close';

export default {
  component: Button,
  title: 'Button',
};

Button.args = {};

export const Default = () => {
  return (
    <Grid container spacing={3}>
      <Grid item sm={12}>
        <Box justifyContent="center" display="flex">
          <Typography variant="h6">Contained</Typography>
        </Box>
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={12} sm={3} md={3}>
          <Button variant="contained" size="large">
            Default
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button variant="contained" size="large" color="primary">
            Primary
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button variant="contained" size="large" color="secondary">
            Secondary
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button variant="contained" size="large" disabled>
            Disabled
          </Button>
        </Grid>
      </Grid>
      <Grid item sm={12}>
        <Box justifyContent="center" display="flex">
          <Typography variant="h6">Default</Typography>
        </Box>
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={12} sm={3} md={3}>
          <Button size="large">Default</Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button size="large" color="primary">
            Primary
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button size="large" color="secondary">
            Secondary
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button size="large" disabled>
            Disabled
          </Button>
        </Grid>
      </Grid>
      <Grid item sm={12}>
        <Box justifyContent="center" display="flex">
          <Typography variant="h6">Outlined</Typography>
        </Box>
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={12} sm={3} md={3}>
          <Button variant="outlined" size="large">
            Default
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button variant="outlined" size="large" color="primary">
            Primary
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button variant="outlined" size="large" color="secondary">
            Secondary
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button variant="outlined" size="large" disabled>
            Disabled
          </Button>
        </Grid>
      </Grid>
      <Grid item sm={12}>
        <Box justifyContent="center" display="flex">
          <Typography variant="h6">Icon Button</Typography>
        </Box>
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={12} sm={3} md={3}>
          <IconButton variant="outlined" size="large">
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <IconButton variant="outlined" size="large" color="primary">
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <IconButton variant="outlined" size="large" color="secondary">
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <IconButton variant="outlined" size="large" disabled>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

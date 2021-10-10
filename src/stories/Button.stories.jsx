import React from 'react';

import { Button, Loader } from '../lib';
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
          <Button variant="contained">
            Default
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button variant="contained" disabled>
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
          <Button>Default</Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button color="primary">
            Primary
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button color="secondary">
            Secondary
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button disabled>
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
          <Button variant="outlined">
            Default
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button variant="outlined" disabled>
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
          <IconButton variant="outlined">
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <IconButton variant="outlined" color="primary">
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <IconButton variant="outlined" color="secondary">
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <IconButton variant="outlined" disabled>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item sm={12}>
        <Box justifyContent="center" display="flex">
          <Typography variant="h6">Loading</Typography>
        </Box>
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={12} sm={3} md={3}>
          <Button loading variant="outlined">
            Default
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button size="large" loading variant="contained" color="primary">
            Primary
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button loading variant="outlined" color="secondary">
            Secondary
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Button loading variant="outlined" disabled>
            Disabled
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

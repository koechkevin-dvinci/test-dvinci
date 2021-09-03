import React from 'react';

import { Button } from '../lib';
import Grid from '@material-ui/core/Grid';

export default {
  component: Button,
  title: 'Button',
};

const ButtonTemplate = (args) => <Button {...args} />;

const Primary = ButtonTemplate.bind({});
Primary.args = {
  color: 'primary',
  variant: 'contained',
};

const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  color: 'secondary',
  variant: 'contained',
};

export const Buttons = () => {
  return (
    <Grid container spacing={3}>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <ButtonTemplate> Default </ButtonTemplate>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Primary {...Primary.args}> Primary </Primary>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Secondary {...Secondary.args}> Secondary </Secondary>
        </Grid>
      </Grid>
    </Grid>
  );
};

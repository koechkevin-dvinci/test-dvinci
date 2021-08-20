import React from 'react';

import { ManagementCard } from '../lib';
import Grid from '@material-ui/core/Grid';

export default {
  title: 'Management Card',
  component: ManagementCard,
  argTypes: { },
};

const Template = (args) => <ManagementCard {...args} />;

export const WithAvatarsAndText = Template.bind({});
WithAvatarsAndText.args = {
  headerText: 'SALES',
  footerText: '13 Members',
  bodyHeader: 'Massachusetts',
  bodyDescription: 'MA',
  avatars: [
    {
      imgSrc: '',
      name: 'Tim Sherwood',
      altIcon: 'TS',
    },
    {
      imgSrc: '',
      name: 'Tim Sherwood',
      altIcon: 'AB',
    },
    {
      imgSrc: '',
      name: 'Tim Sherwood',
      altIcon: 'CD',
    },
  ],
};

export const Install = Template.bind({});
Install.args = {
  headerText: 'INSTALL',
  footerText: '22 Members',
  bodyHeader: 'Flow Home Energy',
  bodyDescription: 'AZ, SC, CA, TX',
  avatars: [
    {
      imgSrc: '',
      name: 'Tim Sherwood',
      altIcon: 'TM',
    },
  ],
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  headerText: 'ADMIN',
  footerText: '65 Members',
  bodyHeader: 'ECEC',
  bodyDescription: 'ST, ST, ST, ST, ST, ST, ST, ST, ST, ST, ST, ST,ST, ST, ST, ST, ST, ST, ST, ST, ST, ST, ST, ST,',
  avatars: [],
};

export const CardsInPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <TextOnly {...TextOnly.args} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <WithAvatarsAndText {...WithAvatarsAndText.args} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Install {...Install.args} />
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <WithAvatarsAndText {...WithAvatarsAndText.args} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Install {...Install.args} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextOnly {...TextOnly.args} />
        </Grid>
      </Grid>
    </Grid>
  );
};

CardsInPage.args = {}

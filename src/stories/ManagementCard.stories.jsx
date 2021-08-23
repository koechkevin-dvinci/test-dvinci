import React from 'react';

import { ManagementCard } from '../lib';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import { styles } from '../lib/components/ManagementCard/Components';
import TextField from '@material-ui/core/TextField';
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

export default {
  title: 'Management Card',
  component: ManagementCard,
  argTypes: {},
};

const Template = (args) => <ManagementCard {...args} />;

const MenuChildren = [
  <MenuItem key={0}>Option 1</MenuItem>,
  <MenuItem key={1}>Option 2</MenuItem>,
  <MenuItem key={2}>Option 3</MenuItem>,
];

export const WithAvatarsAndText = Template.bind({});
WithAvatarsAndText.args = {
  headerText: 'SALES',
  footerText: '13 Members',
  bodyHeader: 'Massachusetts',
  onClickAddMember: () => console.log('Add a member'),
  onHamburgerClick: () => console.log('Action to open hamburger'),
  menuChildren: MenuChildren,
  menuProps: {
    styles: {
      borderRadius: 8,
    },
  },
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
  menuChildren: MenuChildren,
  onClickAddMember: () => console.log('Add a member'),
  onHamburgerClick: () => console.log('Action to open hamburger'),
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
  onClickAddMember: () => console.log('Add a member'),
  onHamburgerClick: () => console.log('Action to open hamburger'),
  menuChildren: MenuChildren,
  bodyHeader: 'ECEC',
  bodyDescription: 'ST, ST, ST, ST, ST, ST, ST, ST, ST, ST, ST, ST,ST, ST, ST, ST, ST, ST, ST, ST, ST, ST, ST, ST,',
  avatars: [],
};

const CardStyles = {
  root: {
    marginBottom: 24,
  },
};
export const CardsInPage = () => {
  const useStyles = makeStyles({ ...CardStyles });
  const classes = useStyles();
  return (
    <Box>
      <Card className={classes.root}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField size="small" id="outlined-error-helper-text" label="Search" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl size="small" style={{ width: '100%'}}>
              <InputLabel size="small" htmlFor="filled-age-native-simple">Business Sector</InputLabel>
              <Select defaultValue={""} native label="Business Sector" inputProps={{
                id: 'filled-age-native-simple',
              }} fullWidth variant="outlined">
                <option value={''}/>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl size="small" style={{ width: '100%'}}>
                <InputLabel size="small" htmlFor="filled-age-native-simple">Business Sector</InputLabel>
                <Select defaultValue={""} native label="Business Sector" inputProps={{
                  id: 'filled-age-native-simple',
                }} fullWidth variant="outlined">
                  <option value={''}/>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
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
    </Box>
  );
};

CardsInPage.args = {};

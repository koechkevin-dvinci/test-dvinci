import React from 'react';

import {ManagementCard, Select, TabPanel} from '../lib';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import Search from '../lib/components/Search';
import { Tabs, Tab, PageHeader } from '../lib';
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

export default {
  title: 'Management Card',
  component: ManagementCard,
  argTypes: {},
};

const Template = (args) => <ManagementCard {...args} />;

const MenuChildren = [
  <MenuItem key={0}>Edit Details</MenuItem>,
  <Divider key={11} />,
  <MenuItem key={1}>Edit Members</MenuItem>,
  <Divider key={111} />,
  <MenuItem key={2}>
    <Typography color="secondary">
    De-Activate
    </Typography>
  </MenuItem>,
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

export const Disabled = Template.bind({});
Disabled.args = {
  headerText: 'DESIGN',
  disabled: true,
  footerText: '22 Members',
  bodyHeader: 'Juary Goncalves',
  bodyDescription: 'All territories',
  menuChildren: MenuChildren,
  onActivate: () => (Disabled.args.disabled = !Disabled.args.disabled),
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
const CardStyles = {
  root: {
    marginBottom: 24,
  },
};

const options = [{
  label: 'All',
  value: 'All',
},{
  label: 'Ten',
  value: 10,
},{
  label: 'Twenty',
  value: 20,
},{
  label: 'Thirty',
  value: 30,
}]
export const CardsInPage = () => {
  const useStyles = makeStyles({ ...CardStyles });
  const [value, setValue] = React.useState({label: "All", value: 'All'});
  const onChange = (e, value) => {
    setValue(value);
  }
  const classes = useStyles();
  return (
    <Box>
      <Box style={{ padding: 24}}>
      <PageHeader title="Name of the Partner"  path="dashboard/admin/partners" primaryText={'Create Team'} secondaryText={'Export'}/>
      </Box>
    <Tabs value={1} indicatorColor="primary" textColor="primary">
      <Tab label="Details" />
      <Tab label="Teams">
      </Tab>
      <Tab label="Members" />
    </Tabs>
      <TabPanel index={1} value={1}>
        <Box>
          <Card className={classes.root}>
            <CardContent>
              <Grid container spacing={3}>
                <Grid style={{ display: 'flex', alignItems: 'center'}} item xs={12} sm={6} md={3}>
                  <Search />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Select id={'1'} size="small" value={value} onChange={onChange} options={options} label="Business Sector" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Select size="small" id={'2'} value={value} onChange={onChange}  options={options} label="Territory" />
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
      </TabPanel>
    </Box>
  );
};

const HeaderComponentTemplate = (args) => <PageHeader  {...args} />;
export const HeaderComponent = HeaderComponentTemplate.bind({});
HeaderComponent.args = {
  title: 'John Doe',
  path: 'dashboard/admin/partners',
  primaryText: 'Create Team',
  secondaryText: 'Export'
}
CardsInPage.args = {};

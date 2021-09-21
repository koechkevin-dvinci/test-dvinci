import React from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Checkbox, UserTable, userAccessOptions } from '../lib';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { UserTeamsList } from '../lib/components/UsersList/UserListComponents';
import Search from '../lib/components/Search/Components';
import Box from '@material-ui/core/Box';
import SelectComponent from '../lib/components/Select/SelectComponent';

export default {
  component: Table,
  title: 'Table',
};

const data = [
  {
    name: 'Jordanna M. Carpenter',
    email: 'carpenterj@solarsight.com',
    teams: [
      {
        name: 'Connecticut',
        isTeamManager: true,
      },
      {
        name: 'Solar Sight',
        isTeamManager: false,
      },
      {
        name: 'ECEC',
        isTeamManager: false,
      },
    ],
    territories: 'AZ, SC, CA, TX, MP, WC (18)',
    access: 'active',
  },
  {
    name: 'Darrel Hayden',
    email: 'darrel_hayden@sunnova.com',
    teams: [
      {
        name: 'ECEC',
        isTeamManager: false,
      },
    ],
    territories: 'All Territories',
    access: 'none',
  },
  {
    name: 'Sharna F. Mora',
    email: 'moras@solarsight.com',
    teams: [
      {
        name: 'ECEC',
        isTeamManager: true,
      },
      {
        name: 'Solar Sight',
        isTeamManager: false,
      },
    ],
    territories: 'AZ, SC',
    access: 'invited',
  },
  {
    name: 'Moses Hendricks',
    email: 'hendricksm@solarsight.com',
    teams: [
      {
        name: 'Solar Sight',
        isTeamManager: false,
      },
    ],
    territories: 'AZ, SC',
    access: 'active',
  },
  {
    name: 'Spencer J. White',
    email: 'spencerwhite@company.co',
    teams: [
      {
        name: 'Connecticut',
        isTeamManager: true,
      },
    ],
    territories: 'SC, CA, TX, MP, WC, WS (24)',
    access: 'none',
    disabled: true
  },
];

export const DefaultTable = () => {
  return (
    <Card>
      <CardHeader />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox onChange={console.log} inputProps={{ 'aria-label': 'select all desserts' }} />
            </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Teams</TableCell>
            <TableCell>Territories</TableCell>
            <TableCell>Access</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((value, index) => {
            return (
              <TableRow key={index}>
                <TableCell padding="checkbox">
                  <Checkbox onChange={console.log} inputProps={{ 'aria-label': 'select all desserts' }} />
                </TableCell>
                <TableCell>{value.name}</TableCell>
                <TableCell>{value.email}</TableCell>
                <TableCell>
                  <UserTeamsList teams={value.teams} />
                </TableCell>
                <TableCell>{value.territories}</TableCell>
                <TableCell>{value.access}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <CardHeader />
    </Card>
  );
};

export const UserList = (args) => <UserTable {...args} />;

UserList.args = {
  users: data,
  userAccessOptions,
  onSelect: console.log,
  dataCount: 100,
  showPagination: false,
  handleChangePage: console.log,
  handleChangeRowsPerPage: console.log,
  paginationExtraProps: {},
  filterComponent: (
    <Box display="flex">
      <Search style={{ flex: 1 }} placeholder="Search" />
      <SelectComponent shrink style={{ flex: 1, marginLeft: 8 }} size="small" placeholder="Team" options={[]} />
      <SelectComponent shrink style={{ flex: 1, marginLeft: 8 }} size="small" placeholder="Access" options={[]} />
    </Box>
  ),
};
DefaultTable.args = {};

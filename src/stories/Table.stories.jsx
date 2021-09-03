import React from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Checkbox } from '../lib';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

export default {
  component: Table,
  title: 'Table',
};

export const DefaultTable = () => {
  const data = [
    {
      name: 'Jordanna M. Carpenter',
      email: 'carpenterj@solarsight.com',
      teams: 'Connecticut, Solar Sig..(4)',
      territories: 'AZ, SC, CA, TX, MP, WC (18)',
    },
    {
      name: 'Darrel Hayden',
      email: 'darrel_hayden@sunnova.com',
      teams: 'ECEC',
      territories: 'All Territories',
    },
    {
      name: 'Sharna F. Mora',
      email: 'moras@solarsight.com',
      teams: 'ECEC, Solar Sight',
      territories: 'AZ, SC',
    },
    {
      name: 'Moses Hendricks',
      email: 'hendricksm@solarsight.com',
      teams: 'Solar Sight',
      territories: 'AZ, SC',
    },
    {
      name: 'Spencer J. White',
      email: 'spencerwhite@company.co',
      teams: 'Connecticut',
      territories: 'SC, CA, TX, MP, WC, WS (24)',
    },
  ];
  return (
    <Card>
      <CardHeader/>
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
                <TableCell>{value.teams}</TableCell>
                <TableCell>{value.territories}</TableCell>
                <TableCell>{value.access}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <CardHeader/>
    </Card>
  );
};

DefaultTable.args = {};

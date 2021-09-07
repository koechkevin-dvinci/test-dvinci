import React, { Fragment } from 'react';
import SelectComponent from '../Select/SelectComponent';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card/Card';
import { Table, TableCell } from '../Table';
import { TableBody, TableHead, TableRow, Typography } from '@material-ui/core';
import { Checkbox } from '../../index';
import Box from '@material-ui/core/Box';
import PeopleIcon from '@material-ui/icons/People';
import PropType from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
    },
    '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(145, 158, 171, 0.24)',
      borderWidth: 1,
    },
    '&:focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(145, 158, 171, 0.24);',
    },
  },

  focused: {
    border: 'none !important',
  },

  selectIcon: {
    color: 'rgba(145, 158, 171, 0.86) !important',
  },
  actions: {
    color: 'rgba(145, 158, 171, 0.86)',
  },
}));
export const UserAccessComponent = (props) => {
  const { options = [], ...restProps } = props;
  const classNames = useStyles();
  const fieldOptions = options.map((opt, index) => {
    return {
      icon: <FiberManualRecordIcon key={index} fontSize="small" style={{ color: opt.color, height: 20, width: 20 }} />,
      ...opt,
    };
  });
  return (
    <SelectComponent
      classes={{ root: classNames.root, focused: classNames.focused, disabled: classNames.root }}
      size="small"
      options={fieldOptions}
      {...restProps}
    />
  );
};

export const UserTeamsList = (props) => {
  const { teams, disabled } = props;
  return (
    <Box style={{ textOverflow: 'ellipsis' }} display="flex">
      {teams.map(({ isTeamManager, name }, index) => (
        <Fragment key={index}>
          {isTeamManager && <PeopleIcon color={disabled? undefined :"primary"} style={{ marginRight: 8, color: disabled ? 'rgba(145, 158, 171, 0.86)': undefined  }} />}{' '}
          {index < 2 && (
            <Typography color={disabled?'textSecondary': undefined} style={{ marginLeft: 4,}}>
              {name}
              {index !== teams.length - 1 ? ', ' : ''}
            </Typography>
          )}
          {index === 2 && <Typography>...({teams.length})</Typography>}
        </Fragment>
      ))}
    </Box>
  );
};

export const UserTable = (props) => {
  const {
    users = [],
    userAccessOptions,
    filterComponent,
    headerCheckboxProps,
    onSelect,
    rowsPerPage = 10,
    page = 1,
    dataCount,
    handleChangePage,
    handleChangeRowsPerPage,
    paginationExtraProps,
    showPagination=true
  } = props;
  const classNames = useStyles();
  return (
    <Card>
      <CardHeader subheader={filterComponent} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox inputProps={{ 'aria-label': 'select all desserts' }} {...headerCheckboxProps}  />
            </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Teams</TableCell>
            <TableCell>Territories</TableCell>
            <TableCell>Access</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((value, index) => {
            const access = userAccessOptions.find(({ value: val }) => val === value.access);
            return (
              <TableRow key={index}>
                <TableCell padding="checkbox">
                  <Checkbox checked={value.disabled ? false: undefined} onChange={() => !value.disabled && onSelect(value)} inputProps={{ 'aria-label': 'select all desserts' }} />
                </TableCell>
                <TableCell>
                  <Typography color={value.disabled ? 'textSecondary': undefined}>
                  {value.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={value.disabled ? 'textSecondary': undefined}>
                  {value.email}
                  </Typography>
                  </TableCell>
                <TableCell>
                  <UserTeamsList disabled={value.disabled} teams={value.teams} />
                </TableCell>
                <TableCell>
                  <Typography color={value.disabled ? 'textSecondary': undefined}>
                  {value.territories}
                  </Typography>
                </TableCell>
                <TableCell>
                  <UserAccessComponent disabled={value.disabled} open={value.disabled ? false: undefined} options={userAccessOptions} defaultValue={access} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {showPagination ? <TablePagination
        rowsPerPageOptions={[10, 25, 50, 75, 100]}
        classes={{
          selectIcon: classNames.selectIcon,
          actions: classNames.action,
        }}
        component="div"
        count={dataCount || users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        labelRowsPerPage={
          <Typography color="textSecondary" style={{ fontSize: 12 }}>
            Rows per page:
          </Typography>
        }
        labelDisplayedRows={() => (
          <Typography style={{ fontSize: 12 }}>{`${page} of ${Math.ceil(dataCount / rowsPerPage)}`}</Typography>
        )}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{
          className: classNames.actions,
        }}
        backIconButtonProps={{
          className: classNames.actions,
        }}
        {...paginationExtraProps}
      /> : <CardHeader />}
    </Card>
  );
};

UserTable.propTypes = {
  users: PropType.array,
  userAccessOptions: PropType.object,
  filterComponent: PropType.node,
  headerCheckboxProps: PropType.object,
  onSelect: PropType.func,
  rowsPerPage: PropType.number,
  page: PropType.number,
};

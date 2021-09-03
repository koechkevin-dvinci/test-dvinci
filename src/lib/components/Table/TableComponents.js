import React from 'react';
import {
  Table as MuiTable,
  TableRow,
  TableFooter,
  TableContainer,
  TableBody,
  TablePagination,
  TableHead,
  TableCell as MuiTableCell,
  withStyles
} from '@material-ui/core';

const cellStyles = {
  root: {
    borderBottom: `1px solid rgba(145, 158, 171, 0.24)`
  }
}
const Table = (props) => {
  const { style, ...restProps } = props;
  return <MuiTable style={{...style, width: '100%'}} {...restProps} />;
};

const TableCell = withStyles(cellStyles)(MuiTableCell);
export { TableRow, TableFooter, TableContainer, TableBody, TablePagination, TableHead, TableCell }
export default Table;

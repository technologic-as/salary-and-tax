import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import React from 'react';


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black, color: theme.palette.common.white,
  }, body: {
    fontSize: 14,
  },
}))(TableCell);

export const SalaryRow = ({description, amount, sum}) => (
  <TableRow>
    <CustomTableCell>{ description }</CustomTableCell>
    <CustomTableCell numeric>{ amount }</CustomTableCell>
    <CustomTableCell numeric>{ sum }</CustomTableCell>
  </TableRow>
);

SalaryRow.propTypes = {
  description: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  sum: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
};

SalaryRow.defaultProps = {
  amount: '',
};

export default SalaryRow;

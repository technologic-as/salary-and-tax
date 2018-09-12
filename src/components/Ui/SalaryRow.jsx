import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import React from 'react';


export const SalaryRow = ({description, amount, sum}) => (
  <TableRow>
    <TableCell>{ description }</TableCell>
    <TableCell>{ amount }</TableCell>
    <TableCell>{ sum }</TableCell>
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

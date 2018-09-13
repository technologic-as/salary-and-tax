import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import React from 'react';


export const TaxRow = ({description, amount}) => (
  <TableRow>
    <TableCell>{ description }</TableCell>
    <TableCell numeric>{ amount }</TableCell>
  </TableRow>
);

TaxRow.propTypes = {
  description: PropTypes.string.isRequired, amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

TaxRow.defaultProps = {
  amount: '',
};

export default TaxRow;

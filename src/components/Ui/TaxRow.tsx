import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import React from 'react';

type Props = {
  description: string;
  amount?: number | string;
  sum?: number | string | JSX.Element;
  minus?: boolean;
};

export const TaxRow = ({ description, amount = '', sum = '', minus = false }: Props): JSX.Element => (
  <TableRow>
    <TableCell>
      {minus ? '- ' : ''}
      {description}
    </TableCell>
    <TableCell align="right">
      <Typography color={minus ? 'secondary' : 'initial'}>{amount}</Typography>
    </TableCell>
    <TableCell align="right">{sum}</TableCell>
  </TableRow>
);

export default TaxRow;

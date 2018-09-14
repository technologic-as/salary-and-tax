import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { formatCurrency } from '../calculations';
import { Section, TaxRow } from './Ui';


export const SummaryComponent = ({turnover, income, commonIncome, totalTax, afterTax}) => {
  return (
    <Section header="Summary" expanded>
      <Table>
        <TableBody>
          <TaxRow description="Turnover" amount={formatCurrency(turnover)} />
          <TaxRow description="Income" amount={formatCurrency(income)} />
          <TaxRow description="Common income" amount={formatCurrency(commonIncome)} />
          <TaxRow description="Total tax" amount={formatCurrency(totalTax)} minus />
          <TaxRow description="After tax" amount={formatCurrency(afterTax)} total />
        </TableBody>
      </Table>
    </Section>
);
};

SummaryComponent.propTypes = {
  turnover: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
  commonIncome: PropTypes.number.isRequired,
  totalTax: PropTypes.number.isRequired,
  afterTax: PropTypes.number.isRequired,
};

const mapStateToProps = ({calculations: {tax: {commonIncome, totalTax, afterTax}, salary: {turnover, income}}}) => ({
  turnover, income, commonIncome, totalTax, afterTax,
});

const mapDispatchToProps = () => ({});

export const Summary = connect(mapStateToProps, mapDispatchToProps)(SummaryComponent);
export default Summary;

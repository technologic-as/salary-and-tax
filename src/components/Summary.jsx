import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import PropTypes from 'prop-types';
import React from 'react';
import { defineMessages, injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';
import { Section, TaxRow } from './Ui';


const messages = defineMessages({
  header: {id: 'summary.header', defaultMessage: 'Summary'},
  turnover: {id: 'summary.turnover', defaultMessage: 'Turnover'},
  totalCuts: {id: 'summary.total.cuts', defaultMessage: 'Income'},
  totalTax: {id: 'summary.total.tax', defaultMessage: 'Total tax'},
  totalIncome: {id: 'summary.total.income', defaultMessage: 'Total income'},
  income: {id: 'summary.income', defaultMessage: 'Income'},
  dividends: {id: 'summary.dividends', defaultMessage: 'Dividends'},
});

export const SummaryComponent = ({turnover, income, totalTax, afterTax, totalCuts, afterDividendsTax, afterTotal, intl: {formatMessage, formatNumber}}) => {
  const formatCurrency = (amount) => formatNumber(amount, {style: 'currency', currency: 'NOK'});
  return (
    <Section header={formatMessage(messages.header)} expanded>
      <Table>
        <TableBody>
          <TaxRow description={formatMessage(messages.turnover)} sum={formatCurrency(turnover)} />
          <TaxRow description={formatMessage(messages.totalCuts)} amount={formatCurrency(totalCuts)} sum={formatCurrency(income)} minus />
          <TaxRow description={formatMessage(messages.totalTax)} amount={formatCurrency(totalTax)} sum={formatCurrency(afterTax)} minus />
          <TaxRow description={formatMessage(messages.income)} amount={formatCurrency(afterTax)} />
          <TaxRow description={formatMessage(messages.dividends)} amount={formatCurrency(afterDividendsTax)} />
          <TaxRow description={formatMessage(messages.totalIncome)} sum={formatCurrency(afterTotal)} />
        </TableBody>
      </Table>
    </Section>
);
};

SummaryComponent.propTypes = {
  turnover: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
  totalTax: PropTypes.number.isRequired,
  totalCuts: PropTypes.number.isRequired,
  afterTax: PropTypes.number.isRequired,
  afterDividendsTax: PropTypes.number.isRequired,
  afterTotal: PropTypes.number.isRequired,
  intl: intlShape.isRequired,
};

const mapStateToProps = ({calculations: {tax: {totalTax, afterTax}, salary: {turnover, income, totalCuts}, dividends: {afterDividendsTax}, afterTotal}}) => ({
  turnover, income, totalTax, afterTax, totalCuts, afterDividendsTax, afterTotal,
});

const mapDispatchToProps = () => ({});

export const Summary = connect(mapStateToProps, mapDispatchToProps)(injectIntl(SummaryComponent));
export default Summary;

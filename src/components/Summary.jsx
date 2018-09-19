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
});

export const SummaryComponent = ({turnover, income, totalTax, afterTax, totalCuts, intl: {formatMessage, formatNumber}}) => {
  const formatCurrency = (amount) => formatNumber(amount, {style: 'currency', currency: 'NOK'});
  return (
    <Section header={formatMessage(messages.header)} expanded>
      <Table>
        <TableBody>
          <TaxRow description={formatMessage(messages.turnover)} sum={formatCurrency(turnover)} />
          <TaxRow description={formatMessage(messages.totalCuts)} amount={formatCurrency(totalCuts)} sum={formatCurrency(income)} minus />
          <TaxRow description={formatMessage(messages.totalTax)} amount={formatCurrency(totalTax)} sum={formatCurrency(afterTax)} minus />
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
  intl: intlShape.isRequired,
};

const mapStateToProps = ({calculations: {tax: {totalTax, afterTax}, salary: {turnover, income, totalCuts}}}) => ({
  turnover, income, totalTax, afterTax, totalCuts,
});

const mapDispatchToProps = () => ({});

export const Summary = connect(mapStateToProps, mapDispatchToProps)(injectIntl(SummaryComponent));
export default Summary;

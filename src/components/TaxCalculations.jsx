import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { defineMessages, injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';
import { formatCurrency } from '../calculations';
import { Section, TaxRow } from './Ui';


const messages = defineMessages({
  header: {id: 'tax.calculations.header', defaultMessage: 'Tax calculations'},
  income: {id: 'tax.calculations.income', defaultMessage: 'Income'},
  minimumDeduction: {id: 'tax.calculations.minimum.deduction', defaultMessage: 'Minimum deduction'},
  commonIncome: {id: 'tax.calculations.common.income', defaultMessage: 'Common income'},
  incomeTax: {id: 'tax.calculations.income.tax', defaultMessage: 'Income tax'},
  socialSecurityDeduction: {id: 'tax.calculations.social.security.deduction', defaultMessage: 'Social security deduction'},
  step1: {id: 'tax.calculations.step.1', defaultMessage: 'Tax step 1'},
  step2: {id: 'tax.calculations.step.2', defaultMessage: 'Tax step 2'},
  step3: {id: 'tax.calculations.step.3', defaultMessage: 'Tax step 3'},
  step4: {id: 'tax.calculations.step.4', defaultMessage: 'Tax step 4'},
  totalTax: {id: 'tax.calculations.total.tax', defaultMessage: 'Total tax'},
});

export const TaxCalculationsComponent = ({
  income, minimumDeduction, commonIncome, incomeTax, socialSecurityDeduction, step1, step2, step3, step4, totalTax, intl: {formatMessage},
}) => {
  return (
    <Fragment>
      <Section header={formatMessage(messages.header)}>
        <Table>
          <TableBody>
            <TaxRow description={formatMessage(messages.income)} amount={formatCurrency(income)} />
            <TaxRow description={formatMessage(messages.minimumDeduction)} amount={formatCurrency(minimumDeduction)} minus />
            <TaxRow description={formatMessage(messages.commonIncome)} amount={formatCurrency(commonIncome)} />
          </TableBody>
        </Table>

        <Table>
          <TableBody>
            <TaxRow description={formatMessage(messages.commonIncome)} amount={formatCurrency(commonIncome)} />
            <TaxRow description={formatMessage(messages.incomeTax)} amount={formatCurrency(incomeTax)} minus />
            <TaxRow description={formatMessage(messages.socialSecurityDeduction)} amount={formatCurrency(socialSecurityDeduction)} minus />
            <TaxRow description={formatMessage(messages.step1)} amount={formatCurrency(step1)} minus />
            <TaxRow description={formatMessage(messages.step2)} amount={formatCurrency(step2)} minus />
            <TaxRow description={formatMessage(messages.step3)} amount={formatCurrency(step3)} minus />
            <TaxRow description={formatMessage(messages.step4)} amount={formatCurrency(step4)} minus />
            <TaxRow description={formatMessage(messages.totalTax)} amount={formatCurrency(totalTax)} />
          </TableBody>
        </Table>
      </Section>
    </Fragment>
);
};

TaxCalculationsComponent.propTypes = {
  income: PropTypes.number.isRequired,
  minimumDeduction: PropTypes.number.isRequired,
  commonIncome: PropTypes.number.isRequired,
  incomeTax: PropTypes.number.isRequired,
  socialSecurityDeduction: PropTypes.number.isRequired,
  step1: PropTypes.number.isRequired,
  step2: PropTypes.number.isRequired,
  step3: PropTypes.number.isRequired,
  step4: PropTypes.number.isRequired,
  totalTax: PropTypes.number.isRequired,
  intl: intlShape.isRequired,
};

const mapStateToProps = ({calculations: {tax}}) => ({...tax});

const mapDispatchToProps = () => ({});

export const TaxCalculations = connect(mapStateToProps, mapDispatchToProps)(injectIntl(TaxCalculationsComponent));
export default TaxCalculations;

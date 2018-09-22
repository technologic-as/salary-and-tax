import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import PropTypes from 'prop-types';
import React from 'react';
import { defineMessages, injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';
import { Section, TaxRow } from './Ui';


const messages = defineMessages({
  header: {id: 'salary.calculations.header', defaultMessage: 'Salary calculations'},
  turnover: {id: 'salary.calculations.turnover', defaultMessage: 'Turnover'},
  theCut: {id: 'salary.calculations.subcontractor.cut', defaultMessage: 'Subcontractor cut'},
  surplus: {id: 'salary.calculations.surplus', defaultMessage: 'Surplus'},
  employerFee: {id: 'salary.calculations.employer.fee', defaultMessage: 'Employer fee'},
  vacationSavings: {id: 'salary.calculations.vacation.savings', defaultMessage: 'Vacation savings'},
  pension: {id: 'salary.calculations.pension', defaultMessage: 'Pension'},
  income: {id: 'salary.calculations.income', defaultMessage: 'Income'},
});

export const SalaryCalculationsComponent = ({
  turnover, companyIncome, theCut, employerFee, withoutEmployerFee, vacationSavings, withoutVacationSavings, pension, withoutPension, surplus, withoutSurplus, intl: {formatMessage, formatNumber},
}) => {
  const formatCurrency = (amount) => formatNumber(amount, {style: 'currency', currency: 'NOK'});

  return (
    <Section header={formatMessage(messages.header)}>
      <Table>
        <TableBody>
          <TaxRow description={formatMessage(messages.turnover)} sum={formatCurrency(turnover)} />
          <TaxRow description={formatMessage(messages.theCut)} amount={formatCurrency(theCut)} sum={formatCurrency(companyIncome)} minus />
          <TaxRow description={formatMessage(messages.surplus)} amount={formatCurrency(surplus)} sum={formatCurrency(withoutSurplus)} minus />
          <TaxRow description={formatMessage(messages.employerFee)} amount={formatCurrency(employerFee)} sum={formatCurrency(withoutEmployerFee)} minus />
          <TaxRow description={formatMessage(messages.vacationSavings)} amount={formatCurrency(vacationSavings)} sum={formatCurrency(withoutVacationSavings)} minus />
          <TaxRow description={formatMessage(messages.pension)} amount={formatCurrency(pension)} sum={formatCurrency(withoutPension)} minus />
          <TaxRow description={formatMessage(messages.income)} sum={formatCurrency(withoutPension)} />
        </TableBody>
      </Table>
    </Section>
);
};

SalaryCalculationsComponent.propTypes = {
  turnover: PropTypes.number.isRequired,
  companyIncome: PropTypes.number.isRequired,
  theCut: PropTypes.number.isRequired,
  employerFee: PropTypes.number.isRequired,
  withoutEmployerFee: PropTypes.number.isRequired,
  vacationSavings: PropTypes.number.isRequired,
  withoutVacationSavings: PropTypes.number.isRequired,
  pension: PropTypes.number.isRequired,
  withoutPension: PropTypes.number.isRequired,
  surplus: PropTypes.number.isRequired,
  withoutSurplus: PropTypes.number.isRequired,
  intl: intlShape.isRequired,
};

const mapStateToProps = ({calculations: {salary}}) => ({...salary});

const mapDispatchToProps = () => ({});

export const SalaryCalculations = connect(mapStateToProps, mapDispatchToProps)(injectIntl(SalaryCalculationsComponent));
export default SalaryCalculations;

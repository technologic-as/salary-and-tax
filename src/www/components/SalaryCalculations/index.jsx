import PropTypes from 'prop-types';
import React from 'react';
import connect from 'react-redux/es/connect/connect';
import { Section, TextWithLabel } from '../Ui';
import { formatCurrency, getSalaryCalculations } from './calculations';


export const SalaryCalculationsComponent = ({
  turnover, companyIncome, theCut, employerFee, withoutEmployerFee, vacationSavings, withoutVacationSavings, pension, withoutPension,
}) => {
  return (
    <Section header="Salary calculations" gridValue={4}>
      <TextWithLabel labelText="Turnover" singleLine gridValue={12}>{ formatCurrency(turnover) }</TextWithLabel>
      <TextWithLabel labelText={`- Cut (${formatCurrency(theCut)})`} singleLine gridValue={12}>
        { formatCurrency(companyIncome) }
      </TextWithLabel>
      <TextWithLabel labelText={`- Employer fee (${formatCurrency(employerFee)})`} singleLine gridValue={12}>
        { formatCurrency(withoutEmployerFee) }
      </TextWithLabel>
      <TextWithLabel labelText={`- Vacation savings (${formatCurrency(vacationSavings)})`} singleLine gridValue={12}>
        { formatCurrency(withoutVacationSavings) }
      </TextWithLabel>
      <TextWithLabel labelText={`- Pension (${formatCurrency(pension)})`} singleLine gridValue={12}>
        { formatCurrency(withoutPension) }
      </TextWithLabel>
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
};

const mapStateToProps = ({calculations: {data}}) => getSalaryCalculations(data);

const mapDispatchToProps = () => ({});

export const SalaryCalculations = connect(mapStateToProps, mapDispatchToProps)(SalaryCalculationsComponent);
export default SalaryCalculations;

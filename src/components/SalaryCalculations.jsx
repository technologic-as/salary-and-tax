import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { formatCurrency, getSalaryCalculations } from '../calculations';
import { SalaryRow, Section } from './Ui';


export const SalaryCalculationsComponent = ({
  turnover, companyIncome, theCut, employerFee, withoutEmployerFee, vacationSavings, withoutVacationSavings, pension, withoutPension,
}) => {
  return (
    <Section header="Salary calculations">
      <Table>
        <TableBody>
          <SalaryRow description="Turnover" sum={formatCurrency(turnover)} />
          <SalaryRow description="- Subcontractor cut" amount={formatCurrency(theCut)} sum={formatCurrency(companyIncome)} />
          <SalaryRow description="- Employer fee" amount={formatCurrency(employerFee)} sum={formatCurrency(withoutEmployerFee)} />
          <SalaryRow description="- Vacation savings " amount={formatCurrency(vacationSavings)} sum={formatCurrency(withoutVacationSavings)} />
          <SalaryRow description="- Pension" amount={formatCurrency(pension)} sum={formatCurrency(withoutPension)} />
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
};

const mapStateToProps = ({calculations: {data}}) => getSalaryCalculations(data);

const mapDispatchToProps = () => ({});

export const SalaryCalculations = connect(mapStateToProps, mapDispatchToProps)(SalaryCalculationsComponent);
export default SalaryCalculations;

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Section, TaxRow } from './Ui';
import { State } from '../reducers';

const messages = defineMessages({
  header: {
    id: 'salary.calculations.header',
    defaultMessage: 'Salary calculations',
  },
  turnover: { id: 'salary.calculations.turnover', defaultMessage: 'Turnover' },
  theCut: {
    id: 'salary.calculations.subcontractor.cut',
    defaultMessage: 'Subcontractor cut',
  },
  surplus: { id: 'salary.calculations.surplus', defaultMessage: 'Surplus' },
  employerFee: {
    id: 'salary.calculations.employer.fee',
    defaultMessage: 'Employer fee',
  },
  vacationSavings: {
    id: 'salary.calculations.vacation.savings',
    defaultMessage: 'Vacation savings',
  },
  pension: { id: 'salary.calculations.pension', defaultMessage: 'Pension' },
  income: { id: 'salary.calculations.income', defaultMessage: 'Income' },
});

type Props = {
  withoutPension: number;
  surplus: number;
  companyIncome: number;
  withoutVacationSavings: number;
  pension: number;
  employerFee: number;
  theCut: number;
  vacationSavings: number;
  turnover: number;
  withoutEmployerFee: number;
  withoutSurplus: number;
};

export const SalaryCalculationsComponent = ({
  turnover,
  companyIncome,
  theCut,
  employerFee,
  withoutEmployerFee,
  vacationSavings,
  withoutVacationSavings,
  pension,
  withoutPension,
  surplus,
  withoutSurplus,
}: Props) => {
  const { formatNumber, formatMessage } = useIntl();
  const formatCurrency = (amount: number) => formatNumber(amount, { style: 'currency', currency: 'NOK' });

  return (
    <Section header={formatMessage(messages.header)}>
      <Table>
        <TableBody>
          <TaxRow description={formatMessage(messages.turnover)} sum={formatCurrency(turnover)} />
          <TaxRow
            description={formatMessage(messages.theCut)}
            amount={formatCurrency(theCut)}
            sum={formatCurrency(companyIncome)}
            minus
          />
          <TaxRow
            description={formatMessage(messages.surplus)}
            amount={formatCurrency(surplus)}
            sum={formatCurrency(withoutSurplus)}
            minus
          />
          <TaxRow
            description={formatMessage(messages.employerFee)}
            amount={formatCurrency(employerFee)}
            sum={formatCurrency(withoutEmployerFee)}
            minus
          />
          <TaxRow
            description={formatMessage(messages.vacationSavings)}
            amount={formatCurrency(vacationSavings)}
            sum={formatCurrency(withoutVacationSavings)}
            minus
          />
          <TaxRow
            description={formatMessage(messages.pension)}
            amount={formatCurrency(pension)}
            sum={formatCurrency(withoutPension)}
            minus
          />
          <TaxRow description={formatMessage(messages.income)} sum={formatCurrency(withoutPension)} />
        </TableBody>
      </Table>
    </Section>
  );
};

const mapStateToProps = ({
  calculations: {
    salary: {
      turnover,
      companyIncome,
      theCut,
      employerFee,
      withoutEmployerFee,
      vacationSavings,
      withoutVacationSavings,
      pension,
      withoutPension,
      surplus,
      withoutSurplus,
    },
  },
}: State) => ({
  turnover,
  companyIncome,
  theCut,
  employerFee,
  withoutEmployerFee,
  vacationSavings,
  withoutVacationSavings,
  pension,
  withoutPension,
  surplus,
  withoutSurplus,
});

const mapDispatchToProps = () => ({});

// @ts-ignore
export const SalaryCalculations = connect(mapStateToProps, mapDispatchToProps)(SalaryCalculationsComponent);
export default SalaryCalculations;

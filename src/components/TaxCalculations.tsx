import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import React, { Fragment } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Section, TaxRow } from './Ui';
import { State } from '../reducers';

const messages = defineMessages({
  header: { id: 'tax.calculations.header', defaultMessage: 'Tax calculations' },
  income: { id: 'tax.calculations.income', defaultMessage: 'Income' },
  incomeHeader: {
    id: 'tax.calculations.income.header',
    defaultMessage: 'Income',
  },
  minimumDeduction: {
    id: 'tax.calculations.minimum.deduction',
    defaultMessage: 'Minimum deduction',
  },
  personalAllowance: {
    id: 'tax.calculations.personal.allowance',
    defaultMessage: 'Personal allowance',
  },
  commonIncome: {
    id: 'tax.calculations.common.income',
    defaultMessage: 'Common income',
  },
  commonIncomeHeader: {
    id: 'tax.calculations.common.income.header',
    defaultMessage: 'Common income',
  },
  surplusHeader: {
    id: 'tax.calculations.surplus.header',
    defaultMessage: 'Surplus',
  },
  surplus: {
    id: 'tax.calculations.surplus.amount',
    defaultMessage: 'Surplus amount',
  },
  surplusTax: {
    id: 'tax.calculations.surplus.tax',
    defaultMessage: 'Surplus tax',
  },
  dividends: {
    id: 'tax.calculations.dividends.amount',
    defaultMessage: 'Dividends',
  },
  dividendsTax: {
    id: 'tax.calculations.dividends.tax',
    defaultMessage: 'Dividends tax',
  },
  incomeTax: {
    id: 'tax.calculations.income.tax',
    defaultMessage: 'Income tax',
  },
  socialSecurityDeduction: {
    id: 'tax.calculations.social.security.deduction',
    defaultMessage: 'Social security deduction',
  },
  step1: { id: 'tax.calculations.step.1', defaultMessage: 'Tax step 1' },
  step2: { id: 'tax.calculations.step.2', defaultMessage: 'Tax step 2' },
  step3: { id: 'tax.calculations.step.3', defaultMessage: 'Tax step 3' },
  step4: { id: 'tax.calculations.step.4', defaultMessage: 'Tax step 4' },
  afterTax: { id: 'tax.calculations.after.tax', defaultMessage: 'After tax' },
});

type Props = {
  income: number;
  minimumDeduction: number;
  personalAllowance: number;
  commonIncome: number;
  incomeTax: number;
  socialSecurityDeduction: number;
  step1: number;
  step2: number;
  step3: number;
  step4: number;
  totalTax: number;
  afterTax: number;
  surplus: number;
  surplusTax: number;
  dividends: number;
  dividendsTax: number;
  afterDividendsTax: number;
};

export const TaxCalculationsComponent = ({
  income,
  minimumDeduction,
  personalAllowance,
  commonIncome,
  incomeTax,
  socialSecurityDeduction,
  step1,
  step2,
  step3,
  step4,
  totalTax,
  afterTax,
  surplus,
  dividends,
  dividendsTax,
  afterDividendsTax,
  surplusTax,
}: Props) => {
  const { formatMessage, formatNumber } = useIntl();
  const formatCurrency = (amount: number) => formatNumber(amount, { style: 'currency', currency: 'NOK' });
  return (
    <Fragment>
      <Section header={formatMessage(messages.header)} expanded>
        <Grid container>
          <Grid item>
            <Table>
              <TableHead>
                <TaxRow description={formatMessage(messages.commonIncomeHeader)} />
              </TableHead>
              <TableBody>
                <TaxRow description={formatMessage(messages.income)} sum={formatCurrency(income)} />
                <TaxRow
                  description={formatMessage(messages.minimumDeduction)}
                  amount={formatCurrency(minimumDeduction)}
                  minus
                />
                <TaxRow
                  description={formatMessage(messages.personalAllowance)}
                  amount={formatCurrency(personalAllowance)}
                  minus
                />
                <TaxRow description={formatMessage(messages.commonIncome)} sum={formatCurrency(commonIncome)} />
              </TableBody>
            </Table>
          </Grid>
          <Grid item>
            <Table>
              <TableHead>
                <TaxRow description={formatMessage(messages.incomeHeader)} />
              </TableHead>
              <TableBody>
                <TaxRow description={formatMessage(messages.income)} sum={formatCurrency(income)} />
                <TaxRow description={formatMessage(messages.incomeTax)} amount={formatCurrency(incomeTax)} minus />
                <TaxRow
                  description={formatMessage(messages.socialSecurityDeduction)}
                  amount={formatCurrency(socialSecurityDeduction)}
                  minus
                />
                <TaxRow description={formatMessage(messages.step1)} amount={formatCurrency(step1)} minus />
                <TaxRow description={formatMessage(messages.step2)} amount={formatCurrency(step2)} minus />
                <TaxRow description={formatMessage(messages.step3)} amount={formatCurrency(step3)} minus />
                <TaxRow description={formatMessage(messages.step4)} amount={formatCurrency(step4)} minus />
                <TaxRow
                  description={formatMessage(messages.afterTax)}
                  amount={formatCurrency(totalTax)}
                  sum={formatCurrency(afterTax)}
                />
              </TableBody>
            </Table>
          </Grid>
          <Grid item>
            <Table>
              <TableHead>
                <TaxRow description={formatMessage(messages.surplusHeader)} />
              </TableHead>
              <TableBody>
                <TaxRow description={formatMessage(messages.surplus)} sum={formatCurrency(surplus)} />
                <TaxRow
                  description={formatMessage(messages.surplusTax)}
                  amount={formatCurrency(surplusTax)}
                  sum={formatCurrency(dividends)}
                  minus
                />
                <TaxRow
                  description={formatMessage(messages.dividendsTax)}
                  amount={formatCurrency(dividendsTax)}
                  sum={formatCurrency(afterDividendsTax)}
                  minus
                />
                <TaxRow description={formatMessage(messages.dividends)} sum={formatCurrency(afterDividendsTax)} />
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Section>
    </Fragment>
  );
};

const mapStateToProps = ({
  calculations: {
    tax: {
      income,
      minimumDeduction,
      personalAllowance,
      commonIncome,
      incomeTax,
      socialSecurityDeduction,
      step1,
      step2,
      step3,
      step4,
      totalTax,
      afterTax,
    },
    dividends: { surplus, surplusTax, dividendsTax, afterDividendsTax, dividends },
  },
}: State) => ({
  income,
  minimumDeduction,
  personalAllowance,
  commonIncome,
  incomeTax,
  socialSecurityDeduction,
  step1,
  step2,
  step3,
  step4,
  totalTax,
  afterTax,
  surplus,
  surplusTax,
  dividends,
  dividendsTax,
  afterDividendsTax,
});

const mapDispatchToProps = () => ({});

export const TaxCalculations = connect(mapStateToProps, mapDispatchToProps)(TaxCalculationsComponent);

export default TaxCalculations;

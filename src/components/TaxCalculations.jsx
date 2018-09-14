import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { formatCurrency } from '../calculations';
import { Section, TaxRow } from './Ui';


export const TaxCalculationsComponent = ({
  income, minimumDeduction, commonIncome, incomeTax, socialSecurityDeduction, step1, step2, step3, step4, totalTax,
}) => {
  return (
    <Fragment>
      <Section header="Tax calculations">
        <Table>
          <TableBody>
            <TaxRow description="Income" amount={formatCurrency(income)} start />
            <TaxRow description="- Minimum deduction" amount={formatCurrency(minimumDeduction)} minus />
            <TaxRow description="Common income" amount={formatCurrency(commonIncome)} total />
          </TableBody>
        </Table>

        <Table>
          <TableBody>
            <TaxRow description="Common income" amount={formatCurrency(commonIncome)} start />
            <TaxRow description="- Income tax" amount={formatCurrency(incomeTax)} minus />
            <TaxRow description="- Social security deduction" amount={formatCurrency(socialSecurityDeduction)} minus />
            <TaxRow description="- Tax step 1" amount={formatCurrency(step1)} minus />
            <TaxRow description="- Tax step 2" amount={formatCurrency(step2)} minus />
            <TaxRow description="- Tax step 3" amount={formatCurrency(step3)} minus />
            <TaxRow description="- Tax step 4" amount={formatCurrency(step4)} minus />
            <TaxRow description="Total tax" amount={formatCurrency(totalTax)} total />
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
};

const mapStateToProps = ({calculations: {tax}}) => ({...tax});

const mapDispatchToProps = () => ({});

export const TaxCalculations = connect(mapStateToProps, mapDispatchToProps)(TaxCalculationsComponent);
export default TaxCalculations;

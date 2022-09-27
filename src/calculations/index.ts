import { defaultSalaryParameters, getSalaryCalculations, SalaryCalculationsState } from './salary';
import { DividendsTaxCalculation, getDividendsTaxCalculations, getTaxCalculations, TaxCalculations } from './tax';
import { ParamProps } from '../constants';

export { defaultSalaryParameters } from './salary';

type Calculations = {
  dividends: DividendsTaxCalculation;
  tax: TaxCalculations;
  afterTotal: number;
  salary: SalaryCalculationsState;
};

export const calculate = (parameters: ParamProps = defaultSalaryParameters): Calculations => {
  const salary = getSalaryCalculations(parameters);
  const tax = getTaxCalculations(salary.income);
  const dividends = getDividendsTaxCalculations(salary.surplus);
  const afterTotal = tax.afterTax + dividends.afterDividendsTax;

  return { salary, tax, dividends, afterTotal };
};

export default calculate;

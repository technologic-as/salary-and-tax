import { defaultSalaryParameters, getSalaryCalculations } from './salary';
import { getDividendsTaxCalculations, getTaxCalculations } from './tax';

export { defaultSalaryParameters } from './salary';

export const calculate = (parameters = defaultSalaryParameters) => {
  const salary = getSalaryCalculations(parameters);
  const tax = getTaxCalculations(salary.income);
  const dividends = getDividendsTaxCalculations(salary.surplus);
  const afterTotal = tax.afterTax + dividends.afterDividendsTax;

  return { salary, tax, dividends, afterTotal };
};

export default calculate;

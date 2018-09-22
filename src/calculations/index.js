import { defaultSalaryParameters, getSalaryCalculations } from './salary';
import { getDividendsTaxCalculations, getTaxCalculations } from './tax';


export { defaultSalaryParameters } from './salary';

export const calculate = (parameters = defaultSalaryParameters) => {
  const salary = getSalaryCalculations(parameters);
  const tax = getTaxCalculations(salary.income);
  const dividends = getDividendsTaxCalculations(salary.surplus);

  return {salary, tax, dividends}
};

export default calculate;

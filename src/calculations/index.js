import { defaultSalaryParameters, getSalaryCalculations } from './salary';
import { getTaxCalculations } from './tax';


export { defaultSalaryParameters } from './salary';

export const calculate = (parameters = defaultSalaryParameters) => {
  const salary = getSalaryCalculations(parameters);
  const tax = getTaxCalculations(salary.income);

  return {salary, tax}
};

export default calculate;

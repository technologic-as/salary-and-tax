import { calculate } from './index';
import { defaultSalaryParameters } from './salary';


export const optimalSurplus = (parameters = defaultSalaryParameters) => {
  const initialCalculation = calculate(parameters);
  const companyIncome = initialCalculation.salary.companyIncome;
  const step = 10000;
  const steps = Math.round(companyIncome / step);

  return Array.from(Array(steps).keys())
    .map(i => i * step)
    .map(amount => calculate({
      ...parameters,
      surplus: {
        amount,
        include: true,
      },
    }))
    .map(({afterTotal, dividends: {afterDividendsTax, surplus}, salary: {withoutPension}}) => ({
      total: afterTotal,
      surplus,
      dividends: afterDividendsTax,
      salary: withoutPension,
    }));
};

export default optimalSurplus;

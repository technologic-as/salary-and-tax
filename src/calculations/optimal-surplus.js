import { calculateG } from './calculate-g';
import { calculate } from './index';
import { defaultSalaryParameters } from './salary';


export const optimalSurplus = (parameters = defaultSalaryParameters) => {
  const initialCalculation = calculate(parameters);
  const companyIncome = initialCalculation.salary.companyIncome;
  const increments = parameters.graph.increments;
  const steps = Math.round(companyIncome / increments);

  const sevenG = calculateG(7.1);

  return Array.from(Array(steps).keys())
    .map(i => i * increments)
    .map(amount => calculate({
      ...parameters,
      surplus: {
        amount,
        include: true,
      },
    }))
    .map(({afterTotal, dividends: {afterDividendsTax, surplus}, salary: {withoutPension, withoutSurplus}}) => ({
      total: afterTotal,
      surplus,
      dividends: afterDividendsTax,
      salary: withoutPension,
      salaryBasis: withoutSurplus,
      salaryAboveSevenG: withoutSurplus > sevenG,
    }));
};

export default optimalSurplus;

import calculations from './index';


export const optimalSurplus = (parameters) => {
  const initialCalculation = calculations(parameters);
  const companyIncome = initialCalculation.salary.companyIncome;
  const step = 10000;
  const steps = Math.round(companyIncome / step);

  return Array.from(Array(steps).keys())
    .map(i => i * step)
    .map(surplus => calculations({...parameters, surplus: {amount: surplus, include: true}}))
    .map(({afterTotal, dividends: {afterDividendsTax, surplus}, salary: {withoutPension}}) => ({
      total: afterTotal, surplus, dividends: afterDividendsTax, salary: withoutPension,
    }))
};

export default optimalSurplus;

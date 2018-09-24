import { optimalSurplus } from './optimal-surplus';
import { defaultSalaryParameters } from './salary';


export const getChart = (parameters = defaultSalaryParameters) => {
  const data = optimalSurplus(parameters);
  const dividends = data.map(i => ([i.surplus, i.dividends]));
  const income = data.map(i => ([i.surplus, i.salary]));
  const total = data.map(i => ([i.surplus, i.total]));

  return {
    income,
    dividends,
    total,
  };
};

export default getChart;

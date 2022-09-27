import { OptimalSurplus, optimalSurplus } from './optimal-surplus';
import { defaultSalaryParameters } from './salary';
import { ParamProps } from '../constants';

export type ChartState = {
  total: (any | number)[][];
  dividends: (any | number)[][];
  netIncome: (any | number)[][];
  grossIncome: (any | number)[][];

  maxTotal: any[][];
  surplus: any[][];
  sevenG: number[][];
};

export const getChart = (parameters: ParamProps = defaultSalaryParameters): ChartState => {
  const data = optimalSurplus(parameters);
  const dividends = data.map((i) => [i.surplus, i.dividends]);
  const surplus = data.map((i) => [i.surplus, i.surplus]);
  const grossIncome = data.map((i) => [i.surplus, i.grossIncome]);
  const netIncome = data.map((i) => [i.surplus, i.netIncome]);
  const total = data.map((i) => [i.surplus, i.total]);
  const closeToSeven = data
    .filter((i) => i.salaryAboveSevenG)
    .reduce((a: OptimalSurplus, b) => (a.salaryBasis < b.salaryBasis ? a : b));
  const sevenG = [[closeToSeven.surplus, closeToSeven.grossIncome]];
  const max = data.reduce((a: OptimalSurplus, b) => (a.total > b.total ? a : b));
  const maxTotal = [[max.surplus, max.total]];

  return {
    sevenG,
    maxTotal,
    grossIncome,
    netIncome,
    surplus,
    dividends,
    total,
  };
};

export default getChart;

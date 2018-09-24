import { optimalSurplus } from './optimal-surplus';
import { defaultSalaryParameters } from './salary';


export const getChart = (parameters = defaultSalaryParameters) => {
  const data = optimalSurplus(parameters);
  const dividends = data.map(i => ([i.surplus, i.dividends]));
  const income = data.map(i => ([i.surplus, i.salary]));
  const total = data.map(i => ([i.surplus, i.total]));
  const closeToSeven = data
    .filter(i => i.salaryAboveSevenG)
    .reduce((a, b) => a.salaryBasis < b.salaryBasis ? a : b, {});
  const annotations = [
    {
      labelOptions: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        verticalAlign: 'top',
        y: 15,
      },
      labels: [{
        point: {
          xAxis: 0,
          yAxis: 0,
          x: closeToSeven.surplus,
          y: closeToSeven.salary,
        },
        text: '7.1G',
      }],
    },
  ];

  return {
    income,
    dividends,
    total,
    annotations,
  };
};

export default getChart;

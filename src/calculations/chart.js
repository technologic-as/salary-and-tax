import { optimalSurplus } from './optimal-surplus';
import { defaultSalaryParameters } from './salary';


export const getChart = (parameters = defaultSalaryParameters) => {
  const data = optimalSurplus(parameters);
  const dividends = data.map(i => ([i.surplus, i.dividends]));
  const surplus = data.map(i => ([i.surplus, i.surplus]));
  const grossIncome = data.map(i => ([i.surplus, i.grossIncome]));
  const netIncome = data.map(i => ([i.surplus, i.netIncome]));
  const total = data.map(i => ([i.surplus, i.total]));
  const closeToSeven = data
    .filter(i => i.salaryAboveSevenG)
    .reduce((a, b) => a.salaryBasis < b.salaryBasis ? a : b, {});
  const max = data.reduce((a, b) => a.total > b.total ? a : b, {});
  const annotations = [
    {
      labelOptions: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        verticalAlign: 'top',
        y: 15,
      },
      labels: [
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: closeToSeven.surplus,
            y: closeToSeven.grossIncome,
          },
          text: '7.1G',
        },
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: max.surplus,
            y: max.total,
          },
          text: 'Max',
        },
      ],
    },
  ];


  return {
    grossIncome,
    netIncome,
    surplus,
    dividends,
    total,
    annotations,
    max,
  };
};

export default getChart;

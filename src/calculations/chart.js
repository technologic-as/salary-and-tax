import { optimalSurplus } from './optimal-surplus';
import { defaultSalaryParameters } from './salary';


const config = {
  chart: {type: 'areaspline'},
  title: {text: 'Dividends vs. Salary'},
  xAxis: {title: {text: 'Surplus'}},
  yAxis: {title: {text: 'NOK'}},
  tooltip: {
    shared: true,
    valueSuffix: ' NOK',
  },
  credits: {enabled: false},
  plotOptions: {areaspline: {fillOpacity: 0.25}},
  series: [],
};

export const getChart = (parameters = defaultSalaryParameters) => {
  const data = optimalSurplus(parameters);
  const dividends = {
    name: 'Dividends',
    data: data.map(i => ({
      x: i.surplus,
      y: i.dividends,
    })),
  };
  const income = {
    name: 'Salary',
    data: data.map(i => ({
      x: i.surplus,
      y: i.salary,
    })),
  };
  const total = {
    name: 'Total income',
    data: data.map(i => ({
      x: i.surplus,
      y: i.total,
    })),
  };

  return {
    ...config,
    series: [
      income,
      dividends,
      total,
    ],
  };
};

export default getChart;

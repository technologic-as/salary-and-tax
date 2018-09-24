import { translationConfig } from '../translation';
import { getPension, pensionConstants } from './pension';
import round from './round';


export const defaultSalaryParameters = {
  cut: 10,
  hoursPerYear: 1730,
  hourRate: 1100,
  ensuringFee: 15000,
  vacationSavings: {rate: 12, include: true},
  employerFee: {rate: 14.1, include: true},
  surplus: {amount: 0, include: true},
  graph: {increments: 10000},
  locale: translationConfig.locale,
  ...pensionConstants,
};

export const getTurnover = ({hoursPerYear, hourRate}) => ({turnover: parseFloat(hoursPerYear) * parseFloat(hourRate)});
export const getCompanyIncome = (turnover, {cut}) => {
  const theCut = turnover * parseFloat(cut) / 100;
  return ({theCut: theCut, after: turnover - theCut});
};
export const calculateSurplus = (companyIncome, {surplus: {amount, include}}) => {
  const includedAmount = include ? parseFloat(amount) : 0;
  return ({surplus: includedAmount, after: companyIncome - includedAmount});
};
export const getEmployerFee = (salary, {employerFee: {include, rate}}) => {
  const employerFee = round(salary - (salary / (100 + (include ? parseFloat(rate) : 0)) * 100));
  return {employerFee, after: salary - employerFee};
};
export const getVacationSavings = (salary, {vacationSavings: {include, rate}}) => {
  const vacationSavings = round(salary - (salary / (100 + (include ? parseFloat(rate) : 0)) * 100));
  return {vacationSavings, after: salary - vacationSavings};
};

export const getSalaryCalculations = (data) => {
  const {turnover} = getTurnover(data);
  const {theCut, after: companyIncome} = getCompanyIncome(turnover, data);
  const {surplus, after: withoutSurplus} = calculateSurplus(companyIncome, data);
  const {employerFee, after: withoutEmployerFee} = getEmployerFee(withoutSurplus, data);
  const {vacationSavings, after: withoutVacationSavings} = getVacationSavings(withoutEmployerFee, data);
  const {pension, after: withoutPension} = getPension(withoutVacationSavings, data);
  const totalCuts = theCut + employerFee + vacationSavings + pension;

  return ({
    turnover,
    theCut,
    companyIncome,
    employerFee,
    withoutEmployerFee,
    vacationSavings,
    withoutVacationSavings,
    pension,
    withoutPension,
    income: withoutPension,
    totalCuts,
    surplus,
    withoutSurplus,
  });
};

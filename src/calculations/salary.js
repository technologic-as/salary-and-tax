import { translationConfig } from '../translation';
import { getPension, pensionConstants } from './pension';
import round from './round';


export const defaultSalaryParameters = {
  cut: 10,
  hoursPerYear: 1730,
  hourRate: 1100,
  includeVacationSavings: true,
  vacationSavingsRate: 12,
  includeEmployerFee: true,
  employerFeeRate: 14.1,
  ensuringFee: 15000,
  locale: translationConfig.locale, ...pensionConstants,
};

export const getTurnover = ({hoursPerYear, hourRate}) => ({turnover: parseFloat(hoursPerYear) * parseFloat(hourRate)});
export const getCompanyIncome = (turnover, {cut}) => {
  const theCut = turnover * parseFloat(cut) / 100;
  return ({
    theCut: theCut, after: turnover - theCut,
  });
};
export const getEmployerFee = (salary, {includeEmployerFee, employerFeeRate}) => {
  const employerFee = round(salary - (salary / (100 + (includeEmployerFee ? parseFloat(employerFeeRate) : 0)) * 100));
  return {
    employerFee, after: salary - employerFee,
  };
};
export const getVacationSavings = (salary, {includeVacationSavings, vacationSavingsRate}) => {
  const vacationSavings = round(salary - (salary / (100 + (includeVacationSavings ? parseFloat(vacationSavingsRate) : 0)) * 100));
  return {
    vacationSavings, after: salary - vacationSavings,
  };
};

export const getSalaryCalculations = (data) => {
  const {turnover} = getTurnover(data);
  const {theCut, after: companyIncome} = getCompanyIncome(turnover, data);
  const {employerFee, after: withoutEmployerFee} = getEmployerFee(companyIncome, data);
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
  });
};

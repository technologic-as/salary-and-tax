const oneG = 96883;

export const defaultSalaryCalculationValues = {
  cut: 10,
  hoursPerYear: 1730,
  hourRate: 1100,
  includeVacationSavings: true,
  vacationSavingsRate: 12.5,
  includeEmployerFee: true,
  employerFeeRate: 14.1,
  ensuringFee: 15000,
  includePension: true,
  pensionOneToSixRate: 6,
  pensionSixToTwelveRate: 6,
  oneG,
};

export const getTurnover = ({hoursPerYear, hourRate}) => ({turnover: parseFloat(hoursPerYear) * parseFloat(hourRate)});
export const getCompanyIncome = (turnover, {cut}) => {
  const theCut = turnover * parseFloat(cut) / 100;
  return ({
    theCut: theCut,
    after: turnover - theCut,
  });
};
export const getEmployerFee = (salary, {includeEmployerFee, employerFeeRate}) => {
  const employerFee = Math.floor(salary - (salary / (100 + (includeEmployerFee ? parseFloat(employerFeeRate) : 0)) * 100));
  return {
    employerFee,
    after: salary - employerFee,
  };
};
export const getVacationSavings = (salary, {includeVacationSavings, vacationSavingsRate}) => {
  const vacationSavings = Math.floor(salary - (salary / (100 + (includeVacationSavings ? parseFloat(vacationSavingsRate) : 0)) * 100));
  return {
    vacationSavings,
    after: salary - vacationSavings,
  };
};

export const getPension = (salary, {oneG, includePension, pensionOneToSixRate, pensionSixToTwelveRate}) => {
  const sixG = oneG * 6;

  const lessThanSix = Math.min(salary, sixG);
  const oneToSixPension = (lessThanSix * pensionOneToSixRate / 100);
  const sixToTwelvePension = (salary > sixG ? Math.min((salary - lessThanSix), sixG) * pensionSixToTwelveRate / 100 : 0);
  const pension = includePension ? Math.floor(oneToSixPension + sixToTwelvePension) : 0;

  return {
    pension,
    after: salary - pension,
  };
};

export const getSalaryCalculations = (data) => {
  const {turnover} = getTurnover(data);
  const {theCut, after: companyIncome} = getCompanyIncome(turnover, data);
  const {employerFee, after: withoutEmployerFee} = getEmployerFee(companyIncome, data);
  const {vacationSavings, after: withoutVacationSavings} = getVacationSavings(withoutEmployerFee, data);
  const {pension, after: withoutPension} = getPension(withoutVacationSavings, data);

  /*
  const maxPensionSavingsThreshold = oneG * 12 * 6 / 100;

  const pension = Math.min(companyIncome * pensionRate / 100, maxPensionSavingsThreshold);
  const withoutPension = withoutVacationSavings - pension;
*/
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
  });
};

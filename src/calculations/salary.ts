import { translationConfig } from '../translation';
import { getPension, pensionConstants } from './pension';
import round from './round';
import { ParamProps } from '../constants';

const hashParams = (defaults: ParamProps) => {
  try {
    const hash = window.location.hash.slice(1) || JSON.stringify(defaults);
    return JSON.parse(decodeURI(hash));
  } catch (e) {
    return defaults;
  }
};

export const defaultSalaryParameters = hashParams({
  cut: 10,
  hoursPerYear: 1730,
  hourRate: 1100,
  ensuringFee: 15000,
  vacationSavings: { rate: 12, include: true },
  employerFee: { rate: 14.1, include: true },
  surplus: { amount: 0, include: true, sevenG: true },
  graph: { increments: 10000 },
  locale: translationConfig.locale,
  ...pensionConstants,
});

function toNumber(string: number | string) {
  return parseFloat(`${string}`);
}

export const getTurnover = ({
  hoursPerYear,
  hourRate,
}: Pick<ParamProps, 'hoursPerYear' | 'hourRate'>): { turnover: number } => ({
  turnover: toNumber(hoursPerYear) * toNumber(hourRate),
});
export const getCompanyIncome = (
  turnover: number,
  { cut }: Pick<ParamProps, 'cut'>
): { after: number; theCut: number } => {
  const theCut = (turnover * toNumber(cut)) / 100;
  return { theCut: theCut, after: turnover - theCut };
};
export const calculateSurplus = (
  companyIncome: number,
  { surplus: { amount, include } }: Pick<ParamProps, 'surplus'>
) => {
  const includedAmount = include ? toNumber(amount) : 0;
  return { surplus: includedAmount, after: companyIncome - includedAmount };
};
export const getEmployerFee = (salary: number, { employerFee: { include, rate } }: Pick<ParamProps, 'employerFee'>) => {
  const employerFee = round(salary - (salary / (100 + (include ? toNumber(rate) : 0))) * 100);
  return { employerFee, after: salary - employerFee };
};
export const getVacationSavings = (
  salary: number,
  { vacationSavings: { include, rate } }: Pick<ParamProps, 'vacationSavings'>
) => {
  const vacationSavings = round(salary - (salary / (100 + (include ? toNumber(rate) : 0))) * 100);
  return { vacationSavings, after: salary - vacationSavings };
};

export type SalaryCalculationsState = {
  income: number;
  surplus: number;
  companyIncome: number;
  withoutVacationSavings: number;
  employerFee: number;
  theCut: number;
  vacationSavings: number;
  withoutEmployerFee: number;
  withoutSurplus: number;
  withoutPension: number;
  pension: number;
  totalCuts: number;
  turnover: number;
};
export const getSalaryCalculations = (data: ParamProps): SalaryCalculationsState => {
  const { turnover } = getTurnover(data);
  const { theCut, after: companyIncome } = getCompanyIncome(turnover, data);
  const { surplus, after: withoutSurplus } = calculateSurplus(companyIncome, data);
  const { employerFee, after: withoutEmployerFee } = getEmployerFee(withoutSurplus, data);
  const { vacationSavings, after: withoutVacationSavings } = getVacationSavings(withoutEmployerFee, data);
  const { pension, after: withoutPension } = getPension(withoutVacationSavings, data);
  const totalCuts = theCut + employerFee + vacationSavings + pension;

  return {
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
  };
};

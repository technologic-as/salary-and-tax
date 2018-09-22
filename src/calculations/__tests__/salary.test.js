import {
  calculateSurplus,
  defaultSalaryParameters,
  getCompanyIncome,
  getEmployerFee,
  getSalaryCalculations,
  getTurnover,
  getVacationSavings,
} from '../salary';


const data = defaultSalaryParameters;
const expectedTurnover = 1903000;
const expectedAfterCut = expectedTurnover * 0.9;
const expectedAfterEmployerFee = 1501052;
const expectedAfterVacationSavings = 1334269;

describe('salary', () => {
  describe('getSalaryCalculations', () => {
    it('should match snapshot', () => {
      expect(getSalaryCalculations(data)).toMatchSnapshot()
    });
  });
  describe('getTurnover', () => {
    const hoursPerYear = '1730';
    const hourRate = '1100';
    it('should calculate turnover and return object', function () {
      expect(getTurnover({hoursPerYear, hourRate})).toEqual({turnover: expectedTurnover});
    });
  });
  describe('getCompanyIncome', () => {
    it('should calculate based on salary and return object', () => {
      expect(getCompanyIncome(expectedTurnover, {cut: 10}))
        .toEqual({after: expectedAfterCut, theCut: expectedTurnover * 0.1});
    });
  });
  describe('calculateSurplus', () => {
    const income = 100000;
    const amount = 1000;
    it('should calculate surplus when true', () => {
      expect(calculateSurplus(income, {surplus: {amount: amount, include: true}}))
        .toEqual({after: income - amount, surplus: amount});
    });
    it('should not calculate surplus when false', () => {
      expect(calculateSurplus(income, {surplus: {amount: amount, include: false}}))
        .toEqual({after: income, surplus: 0});
    });
  });
  describe('getEmployerFee', () => {
    it('should calculate the employer fee when included', () => {
      expect(getEmployerFee(expectedAfterCut, {employerFee: {include: true, rate: 14.1}}))
        .toEqual({after: expectedAfterEmployerFee, employerFee: 211648});
    });
    it('should not calculate the employer fee when not included', () => {
      expect(getEmployerFee(expectedAfterCut, {employerFee: {include: false, rate: 14.1}}))
        .toEqual({after: expectedAfterCut, employerFee: 0});
    });
  });
  describe('getVacationSavings', () => {
    it('should calculate the vacation savings when included', () => {
      expect(getVacationSavings(expectedAfterEmployerFee, {vacationSavings: {include: true, rate: 12.5}}))
        .toEqual({after: expectedAfterVacationSavings, vacationSavings: 166783});
    });
    it('should not calculate the vacation savings when not included', () => {
      expect(getVacationSavings(expectedAfterEmployerFee, {vacationSavings: {include: false, rate: 12.5}}))
        .toEqual({after: expectedAfterEmployerFee, vacationSavings: 0});
    });
  });
});

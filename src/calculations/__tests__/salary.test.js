import {
  defaultSalaryCalculationValues,
  getCompanyIncome,
  getEmployerFee,
  getPension,
  getSalaryCalculations,
  getTurnover,
  getVacationSavings,
} from '../salary';


const data = defaultSalaryCalculationValues;
const expectedTurnover = 1903000;
const expectedAfterCut = expectedTurnover * 0.9;
const expectedAfterEmployerFee = 1501052;
const expectedAfterVacationSavings = 1334269;

describe('calculations', () => {
  describe('getSalaryCalculations', () => {
    it('should match snapshot', () => {
      expect(getSalaryCalculations(data)).toMatchSnapshot()
    });
  });
  describe('getTurnover', () => {
    const hoursPerYear = '1730';
    const hourRate = '1100';
    it('should calculate turnover and return object', function () {
      expect(getTurnover({
        hoursPerYear,
        hourRate,
      })).toEqual({turnover: expectedTurnover});
    });
  });
  describe('getCompanyIncome', () => {
    it('should calculate based on salary and return object', () => {
      expect(getCompanyIncome(expectedTurnover, {cut: 10})).toEqual({
        after: expectedAfterCut,
        theCut: expectedTurnover * 0.1,
      });
    });
  });
  describe('getEmployerFee', () => {
    it('should calculate the employer fee when included', () => {
      expect(getEmployerFee(expectedAfterCut,
        {
          includeEmployerFee: true,
          employerFeeRate: 14.1,
        })).toEqual({
        after: expectedAfterEmployerFee,
        employerFee: 211648,
      });
    });
    it('should not calculate the employer fee when not included', () => {
      expect(getEmployerFee(expectedAfterCut,
        {
          includeEmployerFee: false,
          employerFeeRate: 14.1,
        })).toEqual({
        after: expectedAfterCut,
        employerFee: 0,
      });
    });
  });
  describe('getVacationSavings', () => {
    it('should calculate the vacation savings when included', () => {
      expect(getVacationSavings(expectedAfterEmployerFee,
        {
          includeVacationSavings: true,
          vacationSavingsRate: 12.5,
        })).toEqual({
        after: expectedAfterVacationSavings,
        vacationSavings: 166783,
      });
    });
    it('should not calculate the vacation savings when not included', () => {
      expect(getVacationSavings(expectedAfterEmployerFee,
        {
          includeVacationSavings: false,
          vacationSavingsRate: 12.5,
        })).toEqual({
        after: expectedAfterEmployerFee,
        vacationSavings: 0,
      });
    });
  });
  describe('getPension', () => {
    const pensionData = {
      oneG: 100000,
      includePension: true,
      pensionOneToSixRate: 10,
      pensionSixToTwelveRate: 10,
    };
    it('should calculate pension below 6G', () => {
      expect(getPension(pensionData.oneG * 4, pensionData)).toEqual({
        after: 360000,
        pension: 40000,
      });
      expect(getPension(pensionData.oneG * 5, pensionData)).toEqual({
        after: 450000,
        pension: 50000,
      });
    });
    it('should calculate pension between 6G and 12G', () => {
      expect(getPension(pensionData.oneG * 6, pensionData)).toEqual({
        after: 540000,
        pension: 60000,
      });
      expect(getPension(pensionData.oneG * 7, pensionData)).toEqual({
        after: 630000,
        pension: 60000 + 10000,
      });
      expect(getPension(pensionData.oneG * 8, pensionData)).toEqual({
        after: 720000,
        pension: 60000 + 20000,
      });
    });
    it('should not calculate pension above 12G', () => {
      expect(getPension(pensionData.oneG * 12, pensionData)).toEqual({
        after: 1080000,
        pension: 60000 + 60000,
      });
      expect(getPension(pensionData.oneG * 13, pensionData)).toEqual({
        after: 1180000,
        pension: 60000 + 60000,
      });
    });
    it('should not calculate while not included', () => {
      expect(getPension(pensionData.oneG * 5,
        {
          ...pensionData,
          includePension: false,
        })).toEqual({
        after: pensionData.oneG * 5,
        pension: 0,
      });
      expect(getPension(pensionData.oneG * 7,
        {
          ...pensionData,
          includePension: false,
        })).toEqual({
        after: pensionData.oneG * 7,
        pension: 0,
      });
      expect(getPension(pensionData.oneG * 12,
        {
          ...pensionData,
          includePension: false,
        })).toEqual({
        after: pensionData.oneG * 12,
        pension: 0,
      });
      expect(getPension(pensionData.oneG * 13,
        {
          ...pensionData,
          includePension: false,
        })).toEqual({
        after: pensionData.oneG * 13,
        pension: 0,
      });
    });
  });
});

import { taxConstants, TaxStep } from '../constants';
import round from './round';

type Deduction = { minimumDeduction: number; personalAllowance: number; commonIncome: number };
export const calculateDeduction = (income: number): Deduction => {
  const calculated = (income * taxConstants.minimumDeduction.rate) / 100;
  const min = taxConstants.minimumDeduction.min;
  const isBelowMin = calculated < min;

  const minimumDeduction = round(isBelowMin ? min : Math.min(calculated, taxConstants.minimumDeduction.max));
  const personalAllowance = taxConstants.personalAllowance.max;

  const commonIncome = income - minimumDeduction - personalAllowance;

  return {
    minimumDeduction,
    personalAllowance,
    commonIncome,
  };
};

export const calculateIncomeTax = (commonIncome: number): number =>
  round((commonIncome * taxConstants.incomeTax.rate) / 100);

export const calculateSocialSecurityDeduction = (income: number): number =>
  round((income * taxConstants.socialSecurityDeduction.rate) / 100);

const calculateStep = (income: number, lowLimit: TaxStep, highLimit: TaxStep): number => {
  const maxStep1 = highLimit.threshold - lowLimit.threshold;
  const aboveThreshold = income - lowLimit.threshold;
  const tax = (Math.min(maxStep1, aboveThreshold) * lowLimit.rate) / 100;

  return round(aboveThreshold > 0 ? tax : 0);
};

export const calculateStep1 = (income: number): number => {
  const lowLimit = taxConstants.step1;
  const highLimit = taxConstants.step2;
  return calculateStep(income, lowLimit, highLimit);
};

export const calculateStep2 = (income: number): number => {
  const lowLimit = taxConstants.step2;
  const highLimit = taxConstants.step3;
  return calculateStep(income, lowLimit, highLimit);
};

export const calculateStep3 = (income: number): number => {
  const lowLimit = taxConstants.step3;
  const highLimit = taxConstants.step4;
  return calculateStep(income, lowLimit, highLimit);
};

export const calculateStep4 = (income: number): number => {
  const lowLimit = taxConstants.step4;
  const highLimit = taxConstants.step5;
  return calculateStep(income, lowLimit, highLimit);
};

export const calculateStep5 = (income: number): number => {
  const lowLimit = taxConstants.step5;
  const aboveThreshold = income - lowLimit.threshold;
  const tax = (aboveThreshold * lowLimit.rate) / 100;

  return round(aboveThreshold > 0 ? tax : 0);
};

export type TaxCalculations = {
  income: any;
  minimumDeduction: number;
  personalAllowance: number;
  commonIncome: number;
  incomeTax: number;
  socialSecurityDeduction: number;

  step1: number;
  step2: number;
  step3: number;
  step4: number;
  step5: number;

  totalTax: number;
  afterTax: number;
};

export const getTaxCalculations = (income: number): TaxCalculations => {
  const { minimumDeduction, personalAllowance, commonIncome } = calculateDeduction(income);
  const incomeTax = calculateIncomeTax(commonIncome);
  const socialSecurityDeduction = calculateSocialSecurityDeduction(income);

  const step1 = calculateStep1(income);
  const step2 = calculateStep2(income);
  const step3 = calculateStep3(income);
  const step4 = calculateStep4(income);
  const step5 = calculateStep5(income);

  const totalTax = incomeTax + socialSecurityDeduction + step1 + step2 + step3 + step4 + step5;
  const afterTax = income - totalTax;

  return {
    income,
    minimumDeduction,
    personalAllowance,
    commonIncome,
    incomeTax,
    socialSecurityDeduction,
    step1,
    step2,
    step3,
    step4,
    step5,
    totalTax,
    afterTax,
  };
};

export type DividendsTaxCalculation = {
  dividendsTax: number;
  afterDividendsTax: number;
  surplus: number;
  surplusTax: number;
  dividends: number;
  upwardsAdjustment: number;
};

export const getDividendsTaxCalculations = (surplus: number): DividendsTaxCalculation => {
  const surplusTax = round((surplus * taxConstants.surplus.rate) / 100);
  const dividends = surplus - surplusTax;

  const upwardsAdjustment = round(dividends * taxConstants.dividends.upwardAdjustmentFactor);

  const dividendsTax = round((upwardsAdjustment * taxConstants.dividends.rate) / 100);
  const afterDividendsTax = dividends - dividendsTax;

  return {
    surplus,
    surplusTax,
    dividendsTax,
    afterDividendsTax,
    dividends,
    upwardsAdjustment,
  };
};

export default getTaxCalculations;

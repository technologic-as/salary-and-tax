import round from './round';

export const taxConstants = {
  incomeTax: { rate: 22 },
  socialSecurityDeduction: { rate: 8.2 },

  step1: { rate: 1.9, threshold: 174500 },
  step2: { rate: 4.2, threshold: 245650 },
  step3: { rate: 13.2, threshold: 617500 },
  step4: { rate: 16.2, threshold: 964800 },

  dividends: { rate: 22, upwardAdjustmentFactor: 1.44 },
  surplus: { rate: 22 },

  minimumDeduction: { rate: 45, min: 4000, max: 100800 },
  personalAllowance: { max: 56550 },
};

export const calculateDeduction = income => {
  const calculated = (income * taxConstants.minimumDeduction.rate) / 100;
  const min = taxConstants.minimumDeduction.min;
  const isBelowMin = calculated < min;

  const minimumDeduction = round(
    isBelowMin ? min : Math.min(calculated, taxConstants.minimumDeduction.max)
  );
  const personalAllowance = taxConstants.personalAllowance.max;

  const commonIncome = income - minimumDeduction - personalAllowance;

  return {
    minimumDeduction,
    personalAllowance,
    commonIncome,
  };
};

export const calculateIncomeTax = commonIncome => {
  return round((commonIncome * taxConstants.incomeTax.rate) / 100);
};

export const calculateSocialSecurityDeduction = income => {
  return round((income * taxConstants.socialSecurityDeduction.rate) / 100);
};

const calculateStep = (income, lowLimit, highLimit) => {
  const maxStep1 = highLimit.threshold - lowLimit.threshold;
  const aboveThreshold = income - lowLimit.threshold;
  const tax = (Math.min(maxStep1, aboveThreshold) * lowLimit.rate) / 100;

  return round(aboveThreshold > 0 ? tax : 0);
};

export const calculateStep1 = income => {
  const lowLimit = taxConstants.step1;
  const highLimit = taxConstants.step2;
  return calculateStep(income, lowLimit, highLimit);
};

export const calculateStep2 = income => {
  const lowLimit = taxConstants.step2;
  const highLimit = taxConstants.step3;
  return calculateStep(income, lowLimit, highLimit);
};

export const calculateStep3 = income => {
  const lowLimit = taxConstants.step3;
  const highLimit = taxConstants.step4;
  return calculateStep(income, lowLimit, highLimit);
};

export const calculateStep4 = income => {
  const lowLimit = taxConstants.step4;
  const aboveThreshold = income - lowLimit.threshold;
  const tax = (aboveThreshold * lowLimit.rate) / 100;

  return round(aboveThreshold > 0 ? tax : 0);
};

export const getTaxCalculations = income => {
  const {
    minimumDeduction,
    personalAllowance,
    commonIncome,
  } = calculateDeduction(income);
  const incomeTax = calculateIncomeTax(commonIncome);
  const socialSecurityDeduction = calculateSocialSecurityDeduction(income);

  const step1 = calculateStep1(income);
  const step2 = calculateStep2(income);
  const step3 = calculateStep3(income);
  const step4 = calculateStep4(income);

  const totalTax =
    incomeTax + socialSecurityDeduction + step1 + step2 + step3 + step4;
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
    totalTax,
    afterTax,
  };
};

export const getDividendsTaxCalculations = surplus => {
  const surplusTax = round((surplus * taxConstants.surplus.rate) / 100);
  const dividends = surplus - surplusTax;

  const upwardsAdjustment = round(
    dividends * taxConstants.dividends.upwardAdjustmentFactor
  );

  const dividendsTax = round(
    (upwardsAdjustment * taxConstants.dividends.rate) / 100
  );
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

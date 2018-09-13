const taxConstants = {
  incomeTaxRate: 23,
  socialSecurityDeductionRate: 8.2,

  step1: {rate: 1.4, threshold: 169000},
  step2: {rate: 3.3, threshold: 237900},
  step3: {rate: 12.4, threshold: 598050},
  step4: {rate: 15.4, threshold: 962050},

  minimumDeduction: {rate: 45, min: 4000, max: 97610},
};

const round = (value) => Math.round(value);

export const calculateMinimumDeduction = (income) => {
  const calculated = income * taxConstants.minimumDeduction.rate / 100;
  const min = taxConstants.minimumDeduction.min;
  const isBelowMin = calculated < min;

  const minimumDeduction = round(isBelowMin ? min : Math.min(calculated, taxConstants.minimumDeduction.max));
  return {
    minimumDeduction, commonIncome: income - minimumDeduction,
  };
};

export const calculateIncomeTax = (commonIncome) => {
  return round(commonIncome * taxConstants.incomeTaxRate / 100);
};

export const calculateSocialSecurityDeduction = (income) => {
  return round(income * taxConstants.socialSecurityDeductionRate / 100);
};

const calculateStep = (income, lowLimit, highLimit) => {
  const maxStep1 = (highLimit.threshold - lowLimit.threshold);
  const aboveThreshold = income - lowLimit.threshold;
  const tax = Math.min(maxStep1, aboveThreshold) * lowLimit.rate / 100;

  return round(aboveThreshold > 0 ? tax : 0);
};

export const calculateStep1 = (income) => {
  const lowLimit = taxConstants.step1;
  const highLimit = taxConstants.step2;
  return calculateStep(income, lowLimit, highLimit);
};

export const calculateStep2 = (income) => {
  const lowLimit = taxConstants.step2;
  const highLimit = taxConstants.step3;
  return calculateStep(income, lowLimit, highLimit);
};

export const calculateStep3 = (income) => {
  const lowLimit = taxConstants.step3;
  const highLimit = taxConstants.step4;
  return calculateStep(income, lowLimit, highLimit);
};

export const calculateStep4 = (income) => {
  const lowLimit = taxConstants.step4;
  const aboveThreshold = income - lowLimit.threshold;
  const tax = aboveThreshold * lowLimit.rate / 100;

  return round(aboveThreshold > 0 ? tax : 0);
};

export const getTaxCalculations = (income) => {
  const {minimumDeduction, commonIncome} = calculateMinimumDeduction(income);
  const incomeTax = calculateIncomeTax(commonIncome);
  const socialSecurityDeduction = calculateSocialSecurityDeduction(income);

  const step1 = calculateStep1(income);
  const step2 = calculateStep2(income);
  const step3 = calculateStep3(income);
  const step4 = calculateStep4(income);

  const totalTax = incomeTax + socialSecurityDeduction + step1 + step2 + step3 + step4;
  const afterTax = income - totalTax;

  return ({
    income, minimumDeduction, commonIncome, incomeTax, socialSecurityDeduction, step1, step2, step3, step4, totalTax, afterTax,
  });
};

export default getTaxCalculations;

import { calculateG } from './calculate-g';
import round from './round';


export const pensionConstants = {
  pension: {
    include: true,
    step1: {rate: 2, threshold: {low: calculateG(1), high: calculateG(7.1)}},
    step2: {rate: 2, threshold: {low: calculateG(7.1), high: calculateG(12)}},
  },
};

const calculateStep = (income, {rate, threshold: {low, high}}, include) => {
  if (!include) { return 0; }
  const maxStep = (high - low);
  const aboveThreshold = income - low;
  const pension = Math.min(maxStep, aboveThreshold) * rate / 100;

  return round(aboveThreshold > 0 ? pension : 0);
};

export const calculateStep2 = (salary, {step2, include}) => {
  return calculateStep(salary, step2, include);
};

export const calculateStep1 = (salary, {step1, include}) => {
  return calculateStep(salary, step1, include);
};

export const getPension = (salary, {pension}) => {
  const step1 = calculateStep1(salary, pension);
  const step2 = calculateStep2(salary, pension);
  const result = pension.include ? round(step1 + step2) : 0;

  return {pension: result, step1, step2, after: salary - result};
};

export default getPension;

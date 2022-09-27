export type InputProps = {
  value: unknown;
  onChange: () => void;
  name: string;
};

export type SupportedLocale = 'nb' | 'en';

export type PensionStep = { rate: number; threshold: { low: number; high: number } };

export type PensionProps = {
  include: boolean;
  step1: PensionStep;
  step2: PensionStep;
};

export type ParamProps = {
  cut: number | string;
  hoursPerYear: number | string;
  hourRate: number | string;
  ensuringFee: number | string;
  vacationSavings: { rate: number; include: boolean };
  employerFee: { rate: number; include: boolean };
  surplus: { amount: number; include: boolean; sevenG?: boolean };
  graph: { increments: number };
  locale: SupportedLocale;
  pension: PensionProps;
};

export type TaxStep = { rate: number; threshold: number };

export type TaxConstants = {
  incomeTax: { rate: number };
  socialSecurityDeduction: { rate: number };

  step1: TaxStep;
  step2: TaxStep;
  step3: TaxStep;
  step4: TaxStep;

  dividends: { rate: number; upwardAdjustmentFactor: number };
  surplus: { rate: number };
  minimumDeduction: { rate: number; min: number; max: number };
  personalAllowance: { max: number };

  oneG: number;
};

export const taxConstants: TaxConstants = {
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

  oneG: 99858,
};

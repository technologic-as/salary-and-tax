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
  step5: TaxStep;

  dividends: { rate: number; upwardAdjustmentFactor: number };
  surplus: { rate: number };
  minimumDeduction: { rate: number; min: number; max: number };
  personalAllowance: { max: number };

  oneG: number;
};

export const taxConstants: TaxConstants = {
  incomeTax: {
    // "Skatt på alminnelig inntekt (Person)"
    rate: 22,
  },

  // "Trygdeavgift (Lønnsinntekt)"
  socialSecurityDeduction: { rate: 8 },

  step1: { rate: 1.7, threshold: 190350 },
  step2: { rate: 4.0, threshold: 267900 },
  step3: { rate: 13.4, threshold: 643800 },
  step4: { rate: 16.4, threshold: 969200 },
  step5: { rate: 17.4, threshold: 2000000 },

  // Utbytte
  dividends: {
    rate: 22,
    upwardAdjustmentFactor: 1.6,
  },

  // Selskapsskatt
  surplus: {
    rate: 22,
  },

  // "Minstefradrag i lønnsinntekt"
  minimumDeduction: {
    rate: 46,
    min: 31800,
    max: 109950,
  },

  // "Nedre grense for å betale trygdeavgift"
  personalAllowance: { max: 64650 },

  oneG: 111477,
};

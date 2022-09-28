/* eslint-disable jest/no-conditional-expect */
import {
  calculateDeduction,
  calculateIncomeTax,
  calculateSocialSecurityDeduction,
  calculateStep1,
  calculateStep2,
  calculateStep3,
  calculateStep4,
  calculateStep5,
  getDividendsTaxCalculations,
  getTaxCalculations,
} from './tax';

type IsAbove = 'above' | 'below';

type TestData = {
  income: number;
  minimumDeduction: string;
  step1: IsAbove;
  step2: IsAbove;
  step3: IsAbove;
  step4: IsAbove;
  step5: IsAbove;
};

const tests: TestData[] = [
  {
    income: -1000,
    minimumDeduction: 'below min',
    step1: 'below',
    step2: 'below',
    step3: 'below',
    step4: 'below',
    step5: 'below',
  },
  {
    income: 0,
    minimumDeduction: 'below min',
    step1: 'below',
    step2: 'below',
    step3: 'below',
    step4: 'below',
    step5: 'below',
  },
  {
    income: 1000,
    minimumDeduction: 'below min',
    step1: 'below',
    step2: 'below',
    step3: 'below',
    step4: 'below',
    step5: 'below',
  },
  {
    income: 3999,
    minimumDeduction: 'below min',
    step1: 'below',
    step2: 'below',
    step3: 'below',
    step4: 'below',
    step5: 'below',
  },
  {
    income: 4000,
    minimumDeduction: 'between min and max',
    step1: 'below',
    step2: 'below',
    step3: 'below',
    step4: 'below',
    step5: 'below',
  },
  {
    income: 5000,
    minimumDeduction: 'between min and max',
    step1: 'below',
    step2: 'below',
    step3: 'below',
    step4: 'below',
    step5: 'below',
  },
  {
    income: 9000,
    minimumDeduction: 'between min and max',
    step1: 'below',
    step2: 'below',
    step3: 'below',
    step4: 'below',
    step5: 'below',
  },
  {
    income: 40000,
    minimumDeduction: 'between min and max',
    step1: 'below',
    step2: 'below',
    step3: 'below',
    step4: 'below',
    step5: 'below',
  },
  {
    income: 80000,
    minimumDeduction: 'between min and max',
    step1: 'below',
    step2: 'below',
    step3: 'below',
    step4: 'below',
    step5: 'below',
  },
  {
    income: 97610,
    minimumDeduction: 'between min and max',
    step1: 'below',
    step2: 'below',
    step3: 'below',
    step4: 'below',
    step5: 'below',
  },
  {
    income: 100000,
    minimumDeduction: 'above max',
    step1: 'below',
    step2: 'below',
    step3: 'below',
    step4: 'below',
    step5: 'below',
  },
  {
    income: 169000,
    minimumDeduction: 'above max',
    step1: 'above',
    step2: 'below',
    step3: 'below',
    step4: 'below',
    step5: 'below',
  },
  {
    income: 170000,
    minimumDeduction: 'above max',
    step1: 'above',
    step2: 'below',
    step3: 'below',
    step4: 'below',
    step5: 'below',
  },
  {
    income: 237900,
    minimumDeduction: 'above max',
    step1: 'above',
    step2: 'above',
    step3: 'below',
    step4: 'below',
    step5: 'below',
  },
  {
    income: 240000,
    minimumDeduction: 'above max',
    step1: 'above',
    step2: 'above',
    step3: 'below',
    step4: 'below',
    step5: 'below',
  },
  {
    income: 598050,
    minimumDeduction: 'above max',
    step1: 'above',
    step2: 'above',
    step3: 'above',
    step4: 'below',
    step5: 'below',
  },
  {
    income: 600000,
    minimumDeduction: 'above max',
    step1: 'above',
    step2: 'above',
    step3: 'above',
    step4: 'below',
    step5: 'below',
  },
  {
    income: 962050,
    minimumDeduction: 'above max',
    step1: 'above',
    step2: 'above',
    step3: 'above',
    step4: 'above',
    step5: 'below',
  },
  {
    income: 999999,
    minimumDeduction: 'above max',
    step1: 'above',
    step2: 'above',
    step3: 'above',
    step4: 'above',
    step5: 'below',
  },
  {
    income: 2000000,
    minimumDeduction: 'above max',
    step1: 'above',
    step2: 'above',
    step3: 'above',
    step4: 'above',
    step5: 'above',
  },
  {
    income: 3000000,
    minimumDeduction: 'above max',
    step1: 'above',
    step2: 'above',
    step3: 'above',
    step4: 'above',
    step5: 'above',
  },
];

const getTestDescription = ({ income, minimumDeduction, step1, step2, step3, step4, step5 }: TestData) => ({
  income: `a income of ${income}`,
  minimumDeduction: `${minimumDeduction} threshold for minimum deduction`,
  step1: `${step1} step one tax`,
  step2: `${step2} step two tax`,
  step3: `${step3} step three tax`,
  step4: `${step4} step four tax`,
  step5: `${step5} step five tax`,
});

describe('tax', () => {
  describe('getTaxCalculations should calculate tax', () => {
    tests.map((testData) => {
      const { income, minimumDeduction, step1, step2, step3, step4, step5 } = getTestDescription(testData);
      return it(`on ${income} which is ${minimumDeduction}, ${step1}, ${step2}, ${step3}, ${step4}, ${step5}`, () => {
        expect(getTaxCalculations(testData.income)).toMatchSnapshot();
      });
    });
  });
  describe('calculateDeduction should calculate minimum deduction', () => {
    tests.map((testData) => {
      const { income, minimumDeduction } = getTestDescription(testData);
      return it(`on ${income} which is ${minimumDeduction}`, () => {
        expect(calculateDeduction(testData.income)).toMatchSnapshot();
      });
    });
  });
  describe('calculateIncomeTax should calculate income tax', () => {
    tests.map((testData) => {
      const { income } = getTestDescription(testData);
      return it(`on ${income}`, () => {
        expect(calculateIncomeTax(testData.income)).toMatchSnapshot();
      });
    });
  });
  describe('calculateSocialSecurityDeduction should calculate social security deduction', () => {
    tests.map((testData) => {
      const { income } = getTestDescription(testData);
      return it(`on ${income}`, () => {
        expect(calculateSocialSecurityDeduction(testData.income)).toMatchSnapshot();
      });
    });
  });
  describe('calculateStep1 should calculate step one tax', () => {
    tests.map((testData) => {
      const { income, step1 } = getTestDescription(testData);
      return it(`on ${income} which is ${step1}`, () => {
        const tax = calculateStep1(testData.income);
        expect(tax).toMatchSnapshot();
        if (testData.step1 === 'below') {
          expect(tax).toEqual(0);
        }
      });
    });
  });
  describe('calculateStep2 should calculate step two tax', () => {
    tests.map((testData) => {
      const { income, step2 } = getTestDescription(testData);
      return it(`on ${income} which is ${step2}`, () => {
        const tax = calculateStep2(testData.income);
        expect(tax).toMatchSnapshot();
        if (testData.step2 === 'below') {
          expect(tax).toEqual(0);
        }
      });
    });
  });
  describe('calculateStep3 should calculate step three tax', () => {
    tests.map((testData) => {
      const { income, step3 } = getTestDescription(testData);
      return it(`on ${income} which is ${step3}`, () => {
        const tax = calculateStep3(testData.income);
        expect(tax).toMatchSnapshot();
        if (testData.step3 === 'below') {
          expect(tax).toEqual(0);
        }
      });
    });
  });
  describe('calculateStep4 should calculate step four tax', () => {
    tests.map((testData) => {
      const { income, step4 } = getTestDescription(testData);
      return it(`on ${income} which is ${step4}`, () => {
        const tax = calculateStep4(testData.income);
        expect(tax).toMatchSnapshot();
        if (testData.step4 === 'below') {
          expect(tax).toEqual(0);
        }
      });
    });
  });
  describe('calculateStep5 should calculate step five tax', () => {
    tests.map((testData) => {
      const { income, step5 } = getTestDescription(testData);
      return it(`on ${income} which is ${step5}`, () => {
        const tax = calculateStep5(testData.income);
        expect(tax).toMatchSnapshot();
        if (testData.step5 === 'below') {
          expect(tax).toEqual(0);
        }
      });
    });
  });
  describe('getDividendsTaxCalculations', () => {
    it('should match snapshot', () => {
      expect(getDividendsTaxCalculations(100000)).toMatchSnapshot();
    });
  });
});

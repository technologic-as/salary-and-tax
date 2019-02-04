import { calculateG } from '../calculate-g';
import {
  calculateStep1,
  calculateStep2,
  getPension,
  pensionConstants,
} from '../pension';

const tests = [0, 1, 2, 3, 7, 7.1, 8, 11, 12, 15];

describe('pension', () => {
  it('should have defaults matching snapshot', () => {
    expect(pensionConstants).toMatchSnapshot();
  });
  tests.map(g => {
    const salary = calculateG(g);
    describe(`given salary of ${salary} (${g}G)`, () => {
      it('getPension should match snapshot', () => {
        expect(getPension(salary, pensionConstants)).toMatchSnapshot();
      });
      it('should not calculate if include is false', () => {
        const noPensionData = {
          pension: { ...pensionConstants.pension, include: false },
        };
        expect(getPension(salary, noPensionData)).toMatchSnapshot();
        expect(calculateStep1(salary, noPensionData.pension)).toEqual(0);
        expect(calculateStep2(salary, noPensionData.pension)).toEqual(0);
      });
      it('step 1 should never be greater than 6% of 7.1-1 G', () => {
        expect(
          calculateStep1(salary, pensionConstants.pension)
        ).not.toBeGreaterThan(35459);
      });
      it('step 2 should never be greater than 6% of 12-7.1 G', () => {
        expect(
          calculateStep2(salary, pensionConstants.pension)
        ).not.toBeGreaterThan(28483);
      });
      it('getPension should never be greater than 6% of 12-1 G', () => {
        expect(
          getPension(salary, pensionConstants).pension
        ).not.toBeGreaterThan(63942);
      });
      if (g <= 7.1) {
        it(`step 2 should be 0 when salary is below or equal 7.1 G`, () => {
          expect(calculateStep2(salary, pensionConstants.pension)).toEqual(0);
          expect(getPension(salary, pensionConstants).step2).toEqual(0);
        });
      }
    });
  });
});

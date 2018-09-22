import calculations from '../index';
import * as tax from '../tax';


describe('calculations', () => {
  it('should have default values', () => {
    expect(calculations()).toMatchSnapshot();
  });
  it('should include salary and tax', () => {
    expect(Object.keys(calculations())).toEqual([
      'salary',
      'tax',
      'dividends',
    ]);
  });
  it('should use income from salary calculation as input into tax calculations', () => {
    const spy = jest.spyOn(tax, 'getTaxCalculations');
    const income = calculations().salary.income;
    expect(spy).toHaveBeenCalledWith(income);
  });
});

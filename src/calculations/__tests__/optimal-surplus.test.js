import * as calculations from '../index';
import { optimalSurplus } from '../optimal-surplus';
import { defaultSalaryParameters as parameters } from '../salary';


describe('optimal-surplus', () => {
  it('should return calculations for a range of different surplus', function () {
    expect(optimalSurplus(parameters)).toMatchSnapshot();
  });
  it('should call calculate multiple times', function () {
    const spy = jest.spyOn(calculations, 'calculate');
    optimalSurplus(parameters);
    expect(spy).toHaveBeenCalledWith(parameters);
    expect(spy).toHaveBeenCalledWith({...parameters, surplus: {amount: 100000, include: true}});
    expect(spy).toHaveBeenCalledWith({...parameters, surplus: {amount: 200000, include: true}});
  });
});

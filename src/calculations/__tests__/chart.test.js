import { getChart } from '../chart';
import * as optimalSurplus from '../optimal-surplus';
import { defaultSalaryParameters as parameters } from '../salary';


describe('chart', () => {
  it('should return calculations for a range of different surplus', function () {
    expect(getChart(parameters)).toMatchSnapshot();
  });
  it('should get data from optimalSurplus', function () {
    const spy = jest.spyOn(optimalSurplus, 'optimalSurplus');
    getChart(parameters);
    expect(spy).toHaveBeenCalledWith(parameters);
  });
});

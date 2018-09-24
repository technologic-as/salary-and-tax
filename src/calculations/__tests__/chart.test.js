import { getChart } from '../chart';
import { defaultSalaryParameters } from '../index';
import * as optimalSurplus from '../optimal-surplus';
import { defaultSalaryParameters as parameters } from '../salary';


describe('chart', () => {
  it('should return calculations for a range of different surplus', function () {
    expect(getChart({...defaultSalaryParameters, graph: {increments: 100000}})).toMatchSnapshot();
  });
  it('should get data from optimalSurplus', function () {
    const spy = jest.spyOn(optimalSurplus, 'optimalSurplus');
    getChart(parameters);
    expect(spy).toHaveBeenCalledWith(parameters);
  });
});

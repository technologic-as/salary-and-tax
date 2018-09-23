import { optimalSurplus } from '../optimal-surplus';
import { defaultSalaryParameters } from '../salary';


describe('optimal-surplus', () => {
  it('should find max', function () {
    expect(optimalSurplus(defaultSalaryParameters)).toMatchSnapshot();
  });
});

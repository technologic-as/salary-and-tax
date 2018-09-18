import { FORM_CHANGE } from '../../actions';
import * as calculations from '../../calculations'
import reducer from '../calculations';


describe('calculations', () => {
  it('should have initial state', function () {
    expect(reducer()).toMatchSnapshot();
  });
  describe('FORM_CHANGE', () => {
    it('should recalculate with parameters', () => {
      const spy = jest.spyOn(calculations, 'calculate');
      const parameters = calculations.defaultSalaryParameters;
      reducer({}, {type: FORM_CHANGE}, {parameters});
      expect(spy).toHaveBeenCalledWith(parameters);
    });
  });
});

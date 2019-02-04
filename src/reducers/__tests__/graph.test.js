import { FORM_CHANGE } from '../../actions';
import * as calculations from '../../calculations';
import reducer from '../graph';

describe('graph', () => {
  it('should have initial state', function() {
    expect(reducer()).toMatchSnapshot();
  });
  describe('FORM_CHANGE', () => {
    it('should recalculate with parameters', () => {
      const spy = jest.spyOn(calculations, 'calculate');
      const parameters = calculations.defaultSalaryParameters;
      reducer({}, { type: FORM_CHANGE }, { parameters });
      expect(spy).toHaveBeenCalledWith(parameters);
      expect(spy).toHaveBeenCalledWith({
        ...parameters,
        surplus: { amount: 100000, include: true },
      });
      expect(spy).toHaveBeenCalledWith({
        ...parameters,
        surplus: { amount: 200000, include: true },
      });
    });
  });
});

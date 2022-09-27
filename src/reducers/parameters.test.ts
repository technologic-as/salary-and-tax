import { FORM_CHANGE } from '../actions';
import reducer from './parameters';

describe('parameters', () => {
  it('should have initial state', function () {
    expect(reducer()).toMatchSnapshot();
  });
  describe('FORM_CHANGE', () => {
    it('should update data', () => {
      expect(reducer({}, { type: FORM_CHANGE, changeMe: 'new' })).toMatchSnapshot();
    });
  });
});

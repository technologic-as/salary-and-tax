import configureMockStore from 'redux-mock-store';
import { formChange, inputHasChanged } from '../index';

const mockStore = configureMockStore();
const values = { newValue: 'this is new', otherValue: 'also new' };

describe('actions', () => {
  describe('formChange', () => {
    it('should create action matching snapshot', () => {
      expect(formChange(values)).toMatchSnapshot();
    });
  });
  describe('inputHasChanged', () => {
    it('should dispatch formChange', async () => {
      const store = mockStore();
      await inputHasChanged(values)(store.dispatch);
      expect(store.getActions()).toEqual([{ type: 'FORM_CHANGE', ...values }]);
    });
  });
});

import { getLocales, getMessages } from './index';

describe('translation', () => {
  describe('getMessages', () => {
    it('should return norwegian messages', () => {
      expect(getMessages()).toMatchSnapshot();
    });
  });
  describe('getLocales', () => {
    it('should return all locales', () => {
      expect(getLocales()).toMatchSnapshot();
    });
  });
});

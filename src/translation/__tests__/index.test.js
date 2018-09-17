import { toggleLocale } from '../index';


describe('translation', () => {
  describe('toggleLocale', () => {
    it('should set next locale', () => {
      expect(toggleLocale({locale: 'nb'})).toEqual('en');
      expect(toggleLocale({locale: 'en'})).toEqual('nb');
    });
    it('should default to nb', () => {
      expect(toggleLocale()).toEqual('nb');
      expect(toggleLocale({})).toEqual('nb');
      expect(toggleLocale({locale: 'unknown'})).toEqual('nb');
    });
  });
});

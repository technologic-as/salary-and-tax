import { formatCurrency } from '../format';


describe('format', () => {
  describe('formatCurrency', () => {
    it('should format number into NOK', () => {
      expect(formatCurrency(100)).toEqual('kr 100,00');
      expect(formatCurrency(1000)).toEqual('kr 1 000,00');
      expect(formatCurrency(10000)).toEqual('kr 10 000,00');
    });
  });
});

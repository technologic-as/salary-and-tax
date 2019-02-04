const mockFormatMessage = k => k.defaultMessage;
const mockFormatNumber = amount =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    amount
  );

it('', () => {});

export const mockIntl = {
  formatMessage: mockFormatMessage,
  formatDate: jest.fn,
  formatTime: jest.fn,
  formatRelative: jest.fn,
  formatNumber: mockFormatNumber,
  formatPlural: jest.fn,
  formatHTMLMessage: jest.fn,
  now: jest.fn,
};

export default mockIntl;

const mockTranslation = (k) => k.defaultMessage;

it('', () => {});

export const mockIntl = {
  formatMessage: mockTranslation,
  formatDate: jest.fn,
  formatTime: jest.fn,
  formatRelative: jest.fn,
  formatNumber: jest.fn,
  formatPlural: jest.fn,
  formatHTMLMessage: jest.fn,
  now: jest.fn,
};

export default mockIntl;

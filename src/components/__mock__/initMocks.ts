const mockFormatMessage = ({ defaultMessage }: { defaultMessage: string }) => defaultMessage;
const mockFormatNumber = (amount: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

const mockIntl = () => ({
  formatMessage: mockFormatMessage,
  formatDate: jest.fn,
  formatTime: jest.fn,
  formatRelative: jest.fn,
  formatNumber: mockFormatNumber,
  formatPlural: jest.fn,
  formatHTMLMessage: jest.fn,
  now: jest.fn,
});

jest.mock('react-intl', () => ({
  useIntl: mockIntl,
  defineMessages: (msg: unknown) => msg,
}));

jest.mock('react-intl-redux', () => ({
  updateIntl: (a: unknown) => a,
}));

jest.mock('@material-ui/core/Table', () => 'Table');
jest.mock('@material-ui/core/TableBody', () => 'TableBody');
jest.mock('@material-ui/core/FormGroup', () => 'FormGroup');
jest.mock('@material-ui/core/FormControlLabel', () => 'FormControlLabel');
jest.mock('@material-ui/core/Radio', () => 'Radio');

export {};

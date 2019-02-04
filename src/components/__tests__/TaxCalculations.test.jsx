import mockComponent from 'identity-obj-proxy';
import React from 'react';
import renderer from 'react-test-renderer';
import { TaxCalculationsComponent } from '../TaxCalculations';
import { mockIntl } from './__mock__/intl';

jest.mock('../Ui', () => mockComponent);
jest.mock('@material-ui/core/Table', () => 'Table');
jest.mock('@material-ui/core/TableBody', () => 'TableBody');
jest.mock('@material-ui/core/TableHead', () => 'TableHead');

describe('TaxCalculations', () => {
  it('should render', () => {
    const tree = renderer
      .create(
        <TaxCalculationsComponent
          income={12345678}
          minimumDeduction={12345678}
          personalAllowance={12345678}
          commonIncome={12345678}
          incomeTax={12345678}
          socialSecurityDeduction={12345678}
          step1={12345678}
          step2={12345678}
          step3={12345678}
          step4={12345678}
          totalTax={12345678}
          afterTax={12345678}
          dividends={12345678}
          afterDividendsTax={12345678}
          dividendsTax={12345678}
          surplus={12345678}
          surplusTax={12345678}
          intl={mockIntl}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

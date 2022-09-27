import mockComponent from 'identity-obj-proxy';
import React from 'react';
import renderer from 'react-test-renderer';
import './__mock__/initMocks';
import { SummaryComponent } from './Summary';

jest.mock('./Ui', () => mockComponent);
jest.mock('@material-ui/core/Table', () => 'Table');
jest.mock('@material-ui/core/TableBody', () => 'TableBody');
jest.mock('@material-ui/core/TableHead', () => 'TableHead');

describe('Summary', () => {
  it('should render', () => {
    const tree = renderer
      .create(
        <SummaryComponent
          turnover={111111}
          income={222222}
          totalTax={444444}
          afterTax={555555}
          totalCuts={666666}
          afterDividendsTax={777777}
          afterTotal={888888}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import mockComponent from 'identity-obj-proxy'
import React from 'react';
import renderer from 'react-test-renderer';
import { SummaryComponent } from '../Summary';
import { mockIntl } from './__mock__/intl';


jest.mock('../Ui', () => mockComponent);
jest.mock('@material-ui/core/Table', () => "Table");
jest.mock('@material-ui/core/TableBody', () => "TableBody");


describe('Summary', () => {
  it('should render', () => {
    const tree = renderer.create(<SummaryComponent
      turnover={111111}
      income={222222}
      commonIncome={333333}
      totalTax={444444}
      afterTax={555555}
      totalCuts={666666}
      intl={mockIntl}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

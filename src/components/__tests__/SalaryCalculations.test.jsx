import mockComponent from 'identity-obj-proxy'
import React from 'react';
import renderer from 'react-test-renderer';
import { SalaryCalculationsComponent } from '../SalaryCalculations';


jest.mock('../Ui', () => mockComponent);
jest.mock('@material-ui/core/Table', () => "Table");
jest.mock('@material-ui/core/TableBody', () => "TableBody");


describe('SalaryCalculations', () => {
  it('should render', () => {
    const tree = renderer.create(<SalaryCalculationsComponent
      companyIncome={101010}
      employerFee={111111}
      pension={121212}
      theCut={131313}
      turnover={141414}
      vacationSavings={151515}
      withoutEmployerFee={161616}
      withoutPension={171717}
      withoutVacationSavings={181818}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

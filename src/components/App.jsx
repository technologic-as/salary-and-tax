import React, { Fragment } from 'react';
import { SalaryCalculations } from './SalaryCalculations';
import { SalaryParameters } from './SalaryParameters';
import { Summary } from './Summary';
import { TaxCalculations } from './TaxCalculations';


export const AppComponent = () => (
  <Fragment>
    <SalaryCalculations />
    <TaxCalculations />
    <Summary />
    <SalaryParameters />
  </Fragment>
);

export default AppComponent;

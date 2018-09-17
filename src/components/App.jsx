import React, { Fragment } from 'react';
import { SalaryCalculations } from './SalaryCalculations';
import { SalaryParameters } from './SalaryParameters';
import { Summary } from './Summary';
import { TaxCalculations } from './TaxCalculations';
import { LanguageButton } from './Ui';


export const AppComponent = () => (
  <Fragment>
    <SalaryCalculations />
    <TaxCalculations />
    <Summary />
    <SalaryParameters />
    <LanguageButton />
  </Fragment>
);

export default AppComponent;

import React from 'react';
import { SalaryCalculations } from './SalaryCalculations';
import { SalaryParameters } from './SalaryParameters';
import { Summary } from './Summary';
import { TaxCalculations } from './TaxCalculations';


export const AppComponent = () => (
  <div>
    <SalaryCalculations />
    <TaxCalculations />
    <Summary />
    <SalaryParameters />
  </div>
);

export default AppComponent;

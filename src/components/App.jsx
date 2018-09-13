import React from 'react';
import { SalaryCalculations } from './SalaryCalculations';
import { SalaryParameters } from './SalaryParameters';
import { TaxCalculations } from './TaxCalculations';


export const AppComponent = () => (
  <div>
    <SalaryCalculations />
    <TaxCalculations />
    <SalaryParameters />
  </div>
);

export default AppComponent;

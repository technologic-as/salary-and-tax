import React from 'react';
import { SalaryCalculations } from '../SalaryCalculations';
import { SalaryParameters } from '../SalaryParameters';


export const AppComponent = () => ([
  <SalaryCalculations key="calculations" />,
  <SalaryParameters key="parameters" />,
]);

export default AppComponent;

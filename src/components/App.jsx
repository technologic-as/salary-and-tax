import React, { Fragment } from 'react';
import { SalaryCalculations } from './SalaryCalculations';
import { SalaryParameters } from './SalaryParameters';
import { Summary } from './Summary';
import { SurplusGraph } from './SurplusGraph';
import { TaxCalculations } from './TaxCalculations';
import { GitHub } from './GitHub';


export const AppComponent = () => (
  <Fragment>
    <SalaryCalculations />
    <TaxCalculations />
    <SurplusGraph />
    <Summary />
    <SalaryParameters />
    <GitHub />
  </Fragment>
);

export default AppComponent;

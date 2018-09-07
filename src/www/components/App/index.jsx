import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import React from 'react';
import { Cv } from '../Cv';
import { Users } from '../Users';

export const AppComponent = () => (
  <div>
    <Users />
    <Cv />
  </div>
);

export default AppComponent;

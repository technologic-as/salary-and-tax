import React from 'react';
import { Cv } from '../Cv';
import { Users } from '../Users';


export const AppComponent = () => ([
  <Users key="users" />,
  <Cv key="cv" />,
]);

export default AppComponent;

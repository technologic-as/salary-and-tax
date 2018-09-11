import { storiesOf } from '@storybook/react';
import React from 'react';
import Provider from 'react-redux/es/components/Provider';
import { SalaryCalculations } from '../src/www/components/SalaryCalculations';
import { SalaryParameters } from '../src/www/components/SalaryParameters';
import configureStore from '../src/www/configureStore';


const store = configureStore();

storiesOf('SalaryParameters', module)
  .addDecorator(story => <Provider store={store}>{ story() }</Provider>)
  .add('with data', () => (<SalaryParameters />));

storiesOf('SalaryCalculations', module)
  .addDecorator(story => <Provider store={store}>{ story() }</Provider>)
  .add('with data', () => (<SalaryCalculations />));

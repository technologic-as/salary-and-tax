import React from 'react';
import { IntlProvider } from 'react-intl-redux';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import App from './App';
import theme from './Ui/Theme';
import { MuiThemeProvider } from '@material-ui/core';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      {/* @ts-ignore */}
      <IntlProvider locale={'nb'}>
        <App />
      </IntlProvider>
    </MuiThemeProvider>
  </Provider>
);

export default Root;

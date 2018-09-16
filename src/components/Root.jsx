import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import { getLocale, getMessages } from '../translation';
import App from './App';
import theme from './Ui/Theme'


const store = configureStore();


const Root = () => (
  <IntlProvider locale={getLocale()} messages={getMessages()}>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  </IntlProvider>
);

export default Root;

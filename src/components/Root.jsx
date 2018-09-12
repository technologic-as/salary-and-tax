import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import App from './App';
import theme from './Ui/Theme'


const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>
);

export default Root;

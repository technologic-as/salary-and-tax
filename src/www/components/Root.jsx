import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import App from './App';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default hot(module)(Root);

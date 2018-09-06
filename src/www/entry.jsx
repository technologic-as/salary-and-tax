import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './configureStore';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const RootWithHot = hot(module)(Root);

// eslint-disable-next-line no-undef
const mountNode = document.getElementById('app');
ReactDOM.render(<RootWithHot />, mountNode);

import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader'
import App from './components/App';

const AppWithHot = hot(module)(App);

// eslint-disable-next-line no-undef
const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot name="World!" />, mountNode);

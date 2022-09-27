import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './components/Root';

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

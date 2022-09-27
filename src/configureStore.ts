import { configureStore as createStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const store = () =>
  createStore({
    // @ts-ignore
    reducer,
    devTools: true,
  });

export default store;

import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggerMiddleware = createLogger();

const store = (preloadedState) => createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
    applyMiddleware(thunkMiddleware, loggerMiddleware)));

export default store;

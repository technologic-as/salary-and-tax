import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import calculations from './calculations';
import cv from './cv';
import users from './users';


const rootReducer = combineReducers({
  users,
  cv,
  form: formReducer,
  calculations,
});

export default rootReducer;

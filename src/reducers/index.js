import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import calculations from './calculations';
import intl from './intl';
import parameters from './parameters';


const calculationReducer = (state, action) => {
  return {...state, calculations: calculations(state.calculations, action, state)}
};

const rootReducer = reduceReducers(combineReducers({form: formReducer, parameters, calculations, intl}), calculationReducer);

export default rootReducer;

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import calculations from './calculations';


const rootReducer = combineReducers({
  form: formReducer,
  calculations,
});

export default rootReducer;

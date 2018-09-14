import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import parameters from './parameters';


const rootReducer = combineReducers({
  form: formReducer,
  parameters,
});

export default rootReducer;

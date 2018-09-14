import { FORM_CHANGE } from '../actions';
import { calculate, defaultSalaryParameters } from '../calculations';


const initialState = {
  ...calculate(defaultSalaryParameters),
};

export const calculationsReducer = (state = initialState, action = {}, {parameters} = {}) => {
  switch (action.type) {
    case FORM_CHANGE:
      return Object.assign({}, state, {
        ...calculate(parameters),
      });
    default:
      return state;
  }
};

export default calculationsReducer;

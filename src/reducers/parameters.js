import { FORM_CHANGE } from '../actions';
import { defaultSalaryParameters } from '../calculations';


const initialState = {
    ...defaultSalaryParameters,
};

const parameters = (state = initialState, action = {}) => {
  switch (action.type) {
    case FORM_CHANGE:
      return Object.assign({}, state, {
        ...action,
      });
    default:
      return state;
  }
};

export default parameters;

import { FORM_CHANGE } from '../actions';
import { defaultSalaryCalculationValues } from '../calculations';


const initialState = {
  data: defaultSalaryCalculationValues,
};

const parameters = (state = initialState, action = {}) => {
  switch (action.type) {
    case FORM_CHANGE:
      return Object.assign({}, state, {
        data: action,
      });
    default:
      return state;
  }
};

export default parameters;

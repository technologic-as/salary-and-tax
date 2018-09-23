import { FORM_CHANGE } from '../actions';
import { defaultSalaryParameters } from '../calculations';
import { getChart } from '../calculations/chart';


const initialState = {
  ...getChart(defaultSalaryParameters),
};

export const graphReducer = (state = initialState, action = {}, {parameters} = {}) => {
  switch (action.type) {
    case FORM_CHANGE:
      return Object.assign({}, state, {
        ...getChart(parameters),
      });
    default:
      return state;
  }
};

export default graphReducer;

import { FORM_CHANGE } from '../actions';
import { defaultSalaryParameters } from '../calculations';

const initialState = {
  ...defaultSalaryParameters,
};

const handleFormChange = (state, action) => {
  const params = Object.assign({}, state, {
    ...action,
  });
  window.location.hash = JSON.stringify(params);
  return params;
};

const parameters = (state = initialState, action = {}) => {
  switch (action.type) {
    case FORM_CHANGE:
      return handleFormChange(state, action);
    default:
      return state;
  }
};

export default parameters;

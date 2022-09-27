import { FORM_CHANGE, FormChange } from '../actions';
import { defaultSalaryParameters } from '../calculations';
import { ParamProps } from '../constants';

const initialState: ParamProps = {
  ...defaultSalaryParameters,
};

const handleFormChange = (state: ParamProps | {}, action: FormChange) => {
  const params = Object.assign({}, state, {
    ...action,
  });
  window.location.hash = JSON.stringify(params);
  return params;
};

const parameters = (state: ParamProps | {} = initialState, action: FormChange = {}): ParamProps | {} => {
  switch (action.type) {
    case FORM_CHANGE:
      return handleFormChange(state, action);
    default:
      return state;
  }
};

export default parameters;

import { FORM_CHANGE, FormChange } from '../actions';
import { defaultSalaryParameters } from '../calculations';
import { ChartState, getChart } from '../calculations/chart';
import { ParamProps } from '../constants';

const initialState: ChartState = {
  ...getChart(defaultSalaryParameters),
};

export const graphReducer = (
  state: ChartState = initialState,
  action: FormChange = {},
  { parameters }: { parameters?: ParamProps } = {}
): ChartState => {
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

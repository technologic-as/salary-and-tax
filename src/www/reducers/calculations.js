import { FORM_CHANGE } from '../actions';


const oneG = 96883;

export const defaultSalaryCalculationValues = {
  cut: 10,
  hoursPerYear: 1730,
  hourRate: 1100,
  includeVacationSavings: true,
  vacationSavingsRate: 12.5,
  includeEmployerFee: true,
  employerFeeRate: 14.1,
  ensuringFee: 15000,
  includePension: true,
  pensionOneToSixRate: 6,
  pensionSixToTwelveRate: 6,
  oneG,
};

const initialState = {
  data: defaultSalaryCalculationValues
};

const calculations = (state = initialState, action = {}) => {
  switch (action.type) {
    case FORM_CHANGE:
      return Object.assign({}, state, {
        data: action
      });
    default:
      return state;
  }
};

export default calculations;

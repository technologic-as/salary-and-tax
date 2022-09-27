import { FORM_CHANGE, FormChange } from '../actions';
import { calculate, defaultSalaryParameters } from '../calculations';
import { DividendsTaxCalculation, TaxCalculations } from '../calculations/tax';
import { SalaryCalculationsState } from '../calculations/salary';
import { ParamProps } from '../constants';

const initialState: CalculationsState = {
  ...calculate(defaultSalaryParameters),
};

export type CalculationsState = {
  dividends: DividendsTaxCalculation;
  tax: TaxCalculations;
  afterTotal: number;
  salary: SalaryCalculationsState;
};

export const calculationsReducer = (
  state: CalculationsState = initialState,
  action: FormChange = {},
  { parameters }: { parameters?: ParamProps } = {}
): CalculationsState => {
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

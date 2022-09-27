import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import calculations, { CalculationsState } from './calculations';
import graph from './graph';
import intl from './intl';
import parameters from './parameters';
import { ParamProps, SupportedLocale } from '../constants';
import { ChartState } from '../calculations/chart';
import { FormChange } from '../actions';

export type State = {
  calculations: CalculationsState;
  calculationReducer: CalculationsState;
  parameters: ParamProps;
  graph: ChartState;
  graphReducer: ChartState;
  form: unknown;
  intl: { locales: SupportedLocale[] };
};

const calculationReducer = (state: State, action: FormChange): State => ({
  ...state,
  calculations: calculations(state.calculations, action, state),
});

const graphReducer = (state: State, action: FormChange): State => ({
  ...state,
  graph: graph(state.graph, action, state),
});

const rootReducer = reduceReducers<State>(
  // @ts-ignore
  combineReducers<State>({
    form: formReducer,
    parameters,
    calculations,
    graph,
    intl,
  }),
  graphReducer,
  calculationReducer
);

export default rootReducer;

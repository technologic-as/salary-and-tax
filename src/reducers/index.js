import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import calculations from './calculations';
import graph from './graph';
import intl from './intl';
import parameters from './parameters';

const calculationReducer = (state, action) => ({
  ...state,
  calculations: calculations(state.calculations, action, state),
});

const graphReducer = (state, action) => ({
  ...state,
  graph: graph(state.graph, action, state),
});

const rootReducer = reduceReducers(
  combineReducers({
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

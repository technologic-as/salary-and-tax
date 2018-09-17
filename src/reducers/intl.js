import { intlReducer, UPDATE } from 'react-intl-redux';
import { translationConfig } from '../translation';


export default (state = translationConfig, action = {}) => {
  switch (action.type) {
    case UPDATE:
      return Object.assign({}, state, intlReducer(state, action));
    default:
      return state;
  }
};

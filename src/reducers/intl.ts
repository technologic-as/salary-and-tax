// @ts-ignore
import { IntlAction, intlReducer, UPDATE } from 'react-intl-redux';
import { translationConfig } from '../translation';

const intl = (state = translationConfig, action: IntlAction = { type: 'TODO' }) => {
  switch (action.type) {
    case UPDATE:
      return Object.assign({}, state, intlReducer(state, action));
    default:
      return state;
  }
};

export default intl;

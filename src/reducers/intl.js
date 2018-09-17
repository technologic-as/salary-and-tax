import Cookie from 'js-cookie';
import { intlReducer, UPDATE, updateIntl } from 'react-intl-redux';
import { CHANGE_LANGUAGE, UPDATED_LANGUAGE } from '../actions';
import { getMessages, initialState, toggleLocale } from '../translation';


const mapAction = (state) => {
  const locale = toggleLocale(state);
  Cookie.set('locale', locale);
  return updateIntl({locale, messages: getMessages(locale)});
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return Object.assign({}, state, {isLoaded: false});
    case UPDATE:
      return Object.assign({}, state, intlReducer(state, mapAction(state, action)));
    case UPDATED_LANGUAGE:
      return Object.assign({}, state, {isLoaded: true});
    default:
      return state;
  }
};

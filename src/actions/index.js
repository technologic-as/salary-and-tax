import Cookie from 'js-cookie';
import { updateIntl } from 'react-intl-redux';
import { getMessages } from '../translation';


export const FORM_CHANGE = 'FORM_CHANGE';

export const formChange = (values) => ({type: FORM_CHANGE, ...values});
export const inputHasChanged = (values = {}) => dispatch => {
  if (values.locale) { dispatch(switchLanguage(values.locale)); }
  return dispatch(formChange(values));
};

export const switchLanguage = (locale) => dispatch => {
  Cookie.set('locale', locale);
  dispatch(updateIntl({locale: locale, messages: getMessages(locale)}));
};

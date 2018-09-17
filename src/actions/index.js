import Cookie from 'js-cookie';
import { updateIntl } from 'react-intl-redux';
import { submit } from 'redux-form';
import { getMessages, toggleLocale } from '../translation';


export const FORM_CHANGE = 'FORM_CHANGE';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const UPDATED_LANGUAGE = 'UPDATED_LANGUAGE';

export const formChange = (values) => ({type: FORM_CHANGE, ...values});
export const inputHasChanged = (values) => dispatch => dispatch(formChange(values));

export const changeLanguage = (locale) => ({type: CHANGE_LANGUAGE, locale});
export const updatedLanguage = (locale) => ({type: UPDATED_LANGUAGE, locale});

export const switchLanguage = (currentLocale) => dispatch => {
  dispatch(changeLanguage(currentLocale));
  const locale = toggleLocale(currentLocale);
  Cookie.set('locale', locale);
  dispatch(updateIntl({locale, messages: getMessages(locale)}));
  dispatch(updatedLanguage(locale));
  dispatch(submit({form: 'parameters'}))
};

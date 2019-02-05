import Cookie from 'js-cookie';
import { updateIntl } from 'react-intl-redux';
import { change, submit } from 'redux-form';
import { form } from '../components/SalaryParameters';
import { getMessages } from '../translation';

export const FORM_CHANGE = 'FORM_CHANGE';

export const formChange = values => ({ type: FORM_CHANGE, ...values });
export const inputHasChanged = (values = {}) => dispatch => {
  if (values.locale) {
    dispatch(switchLanguage(values.locale));
  }
  return dispatch(formChange(values));
};

export const switchLanguage = locale => dispatch => {
  Cookie.set('locale', locale);
  dispatch(updateIntl({ locale: locale, messages: getMessages(locale) }));
};

export const dividendsClick = point => dispatch => {
  dispatch(change(form, 'surplus.include', true));
  dispatch(change(form, 'surplus.amount', point.x, true));
  dispatch(submit(form));
};

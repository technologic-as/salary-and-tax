import Cookie from 'js-cookie';
import { updateIntl } from 'react-intl-redux';
import { change, submit } from 'redux-form';
import { form } from '../components/SalaryParameters';
import { getMessages } from '../translation';
import { Dispatch } from 'redux';
import { SupportedLocale } from '../constants';

export const FORM_CHANGE = 'FORM_CHANGE';

export const formChange = (values: any) => ({ type: FORM_CHANGE, ...values });
export type FormChange = { type?: string; [k: string]: unknown };

export const inputHasChanged =
  (values: { [k: string]: unknown } = {}) =>
  (dispatch: Dispatch) => {
    if (values.locale) {
      switchLanguage(values.locale as SupportedLocale)(dispatch);
    }
    return dispatch(formChange(values));
  };

export const switchLanguage = (locale: SupportedLocale) => (dispatch: Dispatch) => {
  Cookie.set('locale', locale);
  dispatch(updateIntl({ locale: locale, messages: getMessages(locale) }));
};

export const dividendsClick = (point: { x: number }) => (dispatch: Dispatch) => {
  dispatch(change(form, 'surplus.include', true));
  dispatch(change(form, 'surplus.amount', point.x, true));
  dispatch(submit(form));
};

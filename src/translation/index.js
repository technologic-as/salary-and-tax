import Cookie from 'js-cookie';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import nb from 'react-intl/locale-data/nb';
import messagesEn from './en';
import messagesNb from './nb';


addLocaleData([
  ...en,
  ...nb,
]);

const messages = {
  'nb': messagesNb, 'en': messagesEn,
};

const defaultLocale = Cookie.get('locale') || Object.keys(messages)[0];

export const getMessages = (locale = defaultLocale) => messages[locale];

export const initialState = {
  locale: defaultLocale, messages: getMessages(defaultLocale),
};

export const toggleLocale = (state = {}) => {
  const locales = Object.keys(messages);
  return locales[(locales.indexOf(state.locale) + 1) % locales.length];
};

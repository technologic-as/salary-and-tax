import Cookie from 'js-cookie';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import nb from 'react-intl/locale-data/nb';
import messagesEn from './messages/en';
import messagesNb from './messages/nb';


addLocaleData([
  ...en,
  ...nb,
]);

const messages = {
  'nb': messagesNb, 'en': messagesEn,
};

export const getLocale = () => {
  const locale = Cookie.get('locale') || 'nb';
  Cookie.set('locale', locale);
  return locale;
};

export const getMessages = () => {
  return messages[getLocale()]
};

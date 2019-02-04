import Cookie from 'js-cookie';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import nb from 'react-intl/locale-data/nb';
import messagesEn from './en';
import messagesNb from './nb';

addLocaleData([...en, ...nb]);

const messages = {
  nb: { name: 'Norsk', messages: messagesNb },
  en: { name: 'English', messages: messagesEn },
};

const defaultLocale = Cookie.get('locale') || Object.keys(messages)[0];

export const getMessages = (locale = defaultLocale) =>
  messages[locale].messages;

export const getLocales = () => {
  return Object.keys(messages).map(locale => ({
    value: locale,
    label: messages[locale].name,
    active: locale === defaultLocale,
  }));
};

export const translationConfig = {
  locale: defaultLocale,
  messages: getMessages(defaultLocale),
  locales: getLocales(),
};

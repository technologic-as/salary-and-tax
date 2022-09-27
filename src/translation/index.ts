import Cookie from 'js-cookie';
import messagesEn from './en';
import messagesNb from './nb';
import { SupportedLocale } from '../constants';

const messages: { [key in SupportedLocale]: { name: string; messages: unknown } } = {
  nb: { name: 'Norsk', messages: messagesNb },
  en: { name: 'English', messages: messagesEn },
};

const defaultLocale = (Cookie.get('locale') || Object.keys(messages)[0]) as SupportedLocale;

export const getMessages = (locale: SupportedLocale = defaultLocale) => messages[locale].messages;

export const getLocales = () =>
  Object.keys(messages).map((locale) => ({
    value: locale,
    label: messages[locale as SupportedLocale].name,
    active: locale === defaultLocale,
  }));

export const translationConfig = {
  locale: defaultLocale,
  messages: getMessages(defaultLocale),
  locales: getLocales(),
};

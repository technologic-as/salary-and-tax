import PropTypes from 'prop-types';
import React from 'react';
import { defineMessages, injectIntl, intlShape } from 'react-intl';
import connect from 'react-redux/es/connect/connect';
import { switchLanguage } from '../../actions/index'
import { Button } from './Button';


const messages = defineMessages({
  changeLanguage: {id: 'translation.change.language', defaultMessage: 'Switch language'},
});

export const LanguageButtonComponent = ({locale, changeLanguage, intl: {formatMessage}}) => {
  return (<Button onClick={() => changeLanguage(locale)}>{formatMessage(messages.changeLanguage)}</Button>)
};

LanguageButtonComponent.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
};

const mapStateToProps = ({intl: {locale}}) => ({locale});

const mapDispatchToProps = (dispatch) => ({
  changeLanguage: (currentLocale) => dispatch(switchLanguage(currentLocale)),
});

export const LanguageButton = connect(mapStateToProps, mapDispatchToProps)(injectIntl(LanguageButtonComponent));
export default LanguageButton;

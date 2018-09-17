import { addDecorator, configure } from '@storybook/react';
import jest from 'jest-mock';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import '../src/components/Ui/Theme';
import { getMessages } from '../src/translation';


window.jest = jest;
window.describe = () => {
};
window.it = () => {
};

setIntlConfig({
  locales: ['en', 'nb'],
  defaultLocale: 'en',
  getMessages,
});
addDecorator(withIntl);

function loadStories() {
  require('../stories/Ui.stories.jsx');
  require('../stories/SalaryParameters.stories');
}

configure(loadStories, module);

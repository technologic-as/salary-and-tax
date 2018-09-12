import { configure } from '@storybook/react';
import jest from 'jest-mock';

import '../src/components/Ui/Theme';


window.jest = jest;
window.describe = () => {};
window.it = () => {};

function loadStories() {
    require('../stories/Ui.stories.jsx');
    require('../stories/SalaryParameters.stories');
}

configure(loadStories, module);

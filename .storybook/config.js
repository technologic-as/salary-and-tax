import { configure } from '@storybook/react';
import jest from 'jest-mock';

import '../src/www/components/Theme';


window.jest = jest;
window.describe = () => {};
window.it = () => {};

function loadStories() {
    require('../stories/Cv.stories');
    require('../stories/PersonalDetails.stories.jsx');
    require('../stories/Users.stories.jsx');
    require('../stories/Ui.stories.jsx');
    require('../stories/SalaryParameters.stories');
}

configure(loadStories, module);

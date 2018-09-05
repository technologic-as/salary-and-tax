import PropTypes from 'prop-types';
import React from 'react';

const App = ({ name }) => (
  <div>
        Hello
    { ' ' }
    { name }
  </div>
);

App.propTypes = {
    name: PropTypes.string.isRequired,
};

export default App;

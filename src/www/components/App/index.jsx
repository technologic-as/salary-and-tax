import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

export const AppComponent = ({ name }) => (
  <div>
    { `Hello ${name}` }
  </div>
);

AppComponent.propTypes = {
    name: PropTypes.string.isRequired,
};

const mapStateToProps = ({ users: { name } }) => ({
    name,
});

export default connect(mapStateToProps)(AppComponent);

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Users from '../Users';

export const AppComponent = ({ name }) => (
  <div>
    { `Hello ${name}` }
    <Users />
  </div>
);

AppComponent.propTypes = {
    name: PropTypes.string.isRequired,
};

const mapStateToProps = ({ cv: { name } }) => ({
    name,
});

export default connect(mapStateToProps)(AppComponent);

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

export const CvComponent = ({data}) => (
  <div>
    <pre>{ Object.keys(data) }</pre>
    <pre>{ JSON.stringify(data, null, 2) }</pre>
  </div>
);

CvComponent.propTypes = {
    data: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({cv: {data}}) => ({
    data,
});

export const Cv = connect(mapStateToProps)(CvComponent);
export default Cv;

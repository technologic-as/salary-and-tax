import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { PersonalDetails } from '../PersonalDetails';
import { Loading } from '../Ui';


export const CvComponent = ({isLoaded, isFetching}) => (
  <div>
    {isFetching && <Loading />}
    {isLoaded && <PersonalDetails />}
  </div>
);

CvComponent.propTypes = {
    data: PropTypes.shape({}).isRequired,
    isFetching: PropTypes.bool.isRequired,
    isLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({cv: {data, isLoaded, isFetching}}) => ({
    data,
    isFetching,
    isLoaded,
});

export const Cv = connect(mapStateToProps)(CvComponent);
export default Cv;

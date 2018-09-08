import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { PersonalDetails } from '../PersonalDetails';
import { Loading } from '../Ui';


export const CvComponent = ({data, isLoaded, isFetching}) => (
  <div>
    { isFetching && (<Loading />)}
    { isLoaded && (
      <div>
        <PersonalDetails />
      </div>
    ) }
    <pre>{ Object.keys(data) }</pre>
    <pre>{ JSON.stringify(data, null, 2) }</pre>
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

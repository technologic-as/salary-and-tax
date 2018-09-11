import PropTypes from 'prop-types';
import React from 'react';
import Gravatar from 'react-gravatar';
import { connect } from 'react-redux';
import { Email, Grid, Loading, Nationality, Phone, Residency, Section } from '../Ui';


export const PersonalDetailsComponent = ({
  isFetching, isLoaded, data: {
    name, title, language_code, telefon, nationality, place_of_residence, email,
  },
}) => {
  return (
    <div>
      {isFetching && <Loading />}
      {isLoaded && (
      <Section header={`${name} - ${title[language_code]}`}>
        <Grid value={2}>
          <Gravatar email={email} size={250} />
        </Grid>
        <Grid value={10}>
          <Phone value={telefon} />
          <Nationality value={nationality[language_code]} />
          <Residency value={place_of_residence[language_code]} />
          <Email value={email} />
        </Grid>
      </Section>)}
    </div>
  )};

PersonalDetailsComponent.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.shape({
      no: PropTypes.string.isRequired,
      int: PropTypes.string,
    }).isRequired,
    language_code: PropTypes.string.isRequired,
    telefon: PropTypes.string.isRequired,
    nationality: PropTypes.shape({
      no: PropTypes.string.isRequired,
      int: PropTypes.string,
    }).isRequired,
    place_of_residence: PropTypes.shape({
      no: PropTypes.string.isRequired,
      int: PropTypes.string,
    }).isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({cv: {data, isFetching, isLoaded}}) => ({
  data,
  isFetching,
  isLoaded,
});

export const PersonalDetails = connect(mapStateToProps)(PersonalDetailsComponent);
export default PersonalDetails;

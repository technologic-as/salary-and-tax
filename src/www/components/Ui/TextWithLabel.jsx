import { faAt, faBirthdayCake, faGlobe, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Grid } from './Grid';


export const TextWithLabel = ({labelText, children, icon, gridValue, singleLine}) => {

  return (
    <Grid value={gridValue} nopad>
      <Grid value={singleLine ? 6: 12} nopad>
        <Grid value={1} nopad>
          { icon && <FontAwesomeIcon icon={icon} size='1x' fixedWidth /> }
        </Grid>
        <Grid value={11} nopad>{ `${labelText}:` }</Grid>
      </Grid>
      <Grid value={singleLine ? 6: 12} nopad>
        { children }
      </Grid>
    </Grid>
);
};

TextWithLabel.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
  labelText: PropTypes.string.isRequired,
  gridValue: PropTypes.number,
  singleLine: PropTypes.bool,
};

TextWithLabel.defaultProps = {
  icon: undefined,
  gridValue: 3,
  singleLine: false,
};

const propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export const Phone = ({value}) => <TextWithLabel labelText="Telephone" icon={faPhone}>{value}</TextWithLabel>;
Phone.propTypes = propTypes;

export const Email = ({value}) => <TextWithLabel labelText="Email" icon={faAt}>{value}</TextWithLabel>;
Email.propTypes = propTypes;

export const Born = ({value}) => <TextWithLabel labelText="Born" icon={faBirthdayCake}>{value}</TextWithLabel>;
Born.propTypes = propTypes;

export const Nationality = ({value}) => <TextWithLabel labelText="Nationality" icon={faGlobe}>{value}</TextWithLabel>;
Nationality.propTypes = propTypes;

export const Residency = ({value}) => <TextWithLabel labelText="Residency" icon={faHome}>{value}</TextWithLabel>;
Residency.propTypes = propTypes;

export default TextWithLabel;

import { faAt, faBirthdayCake, faGlobe, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';


export const TextWithLabel = ({labelText, text, icon}) => (
  <div className="p-g-3 p-g-nopad">
    <div className="p-g-12 p-g-nopad">
      <div className="p-g-1 p-g-nopad">
        <FontAwesomeIcon icon={icon} size='1x' fixedWidth />
        {' '}
      </div>
      <div className="p-g-11 p-g-nopad">{ `${labelText}:` }</div>
    </div>
    <div className="p-g-12 p-g-nopad">
      { `${text}` }
    </div>
  </div>
);

TextWithLabel.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  labelText: PropTypes.string.isRequired,
};

TextWithLabel.defaultProps = {
  icon: undefined,
};

const propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export const Phone = ({value}) => <TextWithLabel labelText="Telephone" text={value} icon={faPhone} />;
Phone.propTypes = propTypes;

export const Email = ({value}) => <TextWithLabel labelText="Email" text={value} icon={faAt} />;
Email.propTypes = propTypes;

export const Born = ({value}) => <TextWithLabel labelText="Born" text={value} icon={faBirthdayCake} />;
Born.propTypes = propTypes;

export const Nationality = ({value}) => <TextWithLabel labelText="Nationality" text={value} icon={faGlobe} />;
Nationality.propTypes = propTypes;

export const Residency = ({value}) => <TextWithLabel labelText="Residency" text={value} icon={faHome} />;
Residency.propTypes = propTypes;

export default TextWithLabel;

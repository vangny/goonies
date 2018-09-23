import React from 'react';
import PropTypes from 'prop-types';

const StartTrail = ({ endHike }) => (
  <div className="start-trail-container">
    <button className="start-trail-button" type="button" onClick={() => endHike()}>Done</button>
  </div>
);


StartTrail.propTypes = {
  endHike: PropTypes.func.isRequired,
};

export default StartTrail;

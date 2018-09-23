import React from 'react';
import PropTypes from 'prop-types';

const StartTrail = ({ toggleViews, trailInfo }) => (
    <div>
      <button type="button" onClick={() => toggleViews()}>Done</button>
    </div>
);


StartTrail.propTypes = {
  toggleViews: PropTypes.func.isRequired,
};

export default StartTrail;
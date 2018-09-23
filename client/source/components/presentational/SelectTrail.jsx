import React from 'react';
import PropTypes from 'prop-types';

const SelectTrail = ({ toggleViews, trailInfo, startHike }) => {
  const startHandler = (event) => {
    startHike();
  };

  return (
    <div>
      <button type="button" onClick={() => toggleViews('map')}>Shrink Map</button>
      <div>
        {trailInfo.name}
        <br />
        <img src={trailInfo.imgSmallMed} alt={trailInfo.imgMedium} />
        <ul>
          <li>{trailInfo.summary}</li>
          <li>{`Length: ${trailInfo.length} miles`}</li>
          <li>{`Rating: ${trailInfo.stars} / 5 stars`}</li>
          <li>{`Total Votes: ${trailInfo.starVotes}`}</li>
        </ul>
      </div>
      <button type="button" onClick={startHandler}>Start</button>
    </div>
  );
};

SelectTrail.propTypes = {
  toggleViews: PropTypes.func.isRequired,
};

export default SelectTrail;

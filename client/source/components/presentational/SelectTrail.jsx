import React from 'react';
import PropTypes from 'prop-types';

const SelectTrail = ({ toggleViews, trailInfo, startHike }) => {
  const startHandler = (event) => {
    startHike();
  };

  return (
    <div className="selected-trail">
      <div className="trail-title">
        <h3>{trailInfo.name}</h3>
      </div>
      <div className="trail-container">
      <div className="trail-img">
        <img src={trailInfo.imgSmallMed} alt={trailInfo.imgMedium} />
      </div>
        <div className="trail-info">
          <p className="trail-summary">{trailInfo.summary}</p>
          <p className="trail-details">{`Length: ${trailInfo.length} miles`}</p>
          <p className="trail-details">{`Rating: ${trailInfo.stars} / 5 stars`}</p>
          <p className="trail-details">{`Total Votes: ${trailInfo.starVotes}`}</p>
           <button className="trail-button" id="start" type="button" onClick={startHandler}>Start</button>
        </div>
      </div>
      <br />
      <a onClick={() => toggleViews('map')}>Return to Map</a>
    </div>
  );
};

SelectTrail.propTypes = {
  toggleViews: PropTypes.func.isRequired,
};

export default SelectTrail;

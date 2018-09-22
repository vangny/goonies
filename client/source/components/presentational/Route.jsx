// import React from 'react';
// import PropTypes from 'prop-types';

const Route = ({ route }) => {
  return (
    <div className="route">
    <span>Trail Name: {route.name}</span><br/>
    <span>Type: {route.type}</span><br/>
    <span>Difficulty: {route.difficulty}</span><br/>
    <span>Location: {route.location}</span><br/>
    <span>Length: {route.length}</span><br/>
    <span>Started At: {route.start}</span><br/>
    <span>Ended by: {route.end}</span><br/><br/>
    </div>
  );
}

// Route.propTypes = {
//   route: PropTypes.shape({
//     routeName: PropTypes.string,
//     date: PropTypes.string,
//     distanceInMiles: PropTypes.number,
//     timeToCompleteInHours: PropTypes.number,
//     averageSpeedMPH: PropTypes.number,
//   }).isRequired,
//   handleEdit: PropTypes.func.isRequired,
// };

export default Route;

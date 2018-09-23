import React from 'react';
// import PropTypes from 'prop-types';

const Route = ({ route }) => {
  return (
    <div className="route">
    <p className="route-info">Trail Name: {route.name}</p>
    <p className="route-info">Type: {route.type}</p>
    <p className="route-info">Difficulty: {route.difficulty}</p>
    <p className="route-info">Location: {route.location}</p>
    <p className="route-info">Length: {route.length}</p>
    <p className="route-info">Started At: {route.start}</p>
    <p className="route-info">Ended by: {route.end}</p><br/>
    </div>
  );
};

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

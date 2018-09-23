import React from 'react';
// import PropTypes from 'prop-types';

const Route = ({ route }) => {
  return (
    <div className="route">
    <p className="route-info">Trail Name: {route.routeName}</p>
    <p className="route-info">Length: {route.distanceInMiles}</p>
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

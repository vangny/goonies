import React from 'react';
// import { Link, Router } from '@reach/router';
// import GoogleMapsContainer from './renderMap';
import PropTypes from 'prop-types';
import routeData from '../../SampleData.js';
import ParkInfo from './ParkInfo';
import Weather from './Weather';


const Dashboard = ({ mostRecentHike }) => (
    <div className="dashboard">
      <div>
        <Weather />
      </div>
      <div>
        <ParkInfo />
      </div>
      <h2>Most Recent Hike</h2>
      <div className="recent">
        <p>
          Route:
          {
            mostRecentHike ? 
              mostRecentHike.routeName
              : 'N/A'
          }
        </p>
        <p>
          Distance:
          {
            mostRecentHike ?  
              mostRecentHike.distanceInMiles
              : 'N/A'
          }
        </p>
        <p>
          Start:
          {
            mostRecentHike ?
              mostRecentHike.start
              : 'N/A'
        }
        </p>
        <p>
          End:
          {
            mostRecentHike ?
              mostRecentHike.end
              : 'N/A'
          }
        </p>
      </div>
      <a className="action-link" onClick={() => props.handleChange('trails')}>Choose A Trail</a>
    </div>
);

Dashboard.propTypes = {
  mostRecentHike: PropTypes.objectOf(PropTypes.string).isRequired,
  // getRoutes: PropTypes.func.isRequired,
};

export default Dashboard;

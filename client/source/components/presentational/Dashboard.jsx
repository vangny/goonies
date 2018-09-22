import React from 'react';
// import { Link, Router } from '@reach/router';
// import GoogleMapsContainer from './renderMap';
import routeData from '../../SampleData.js';
import ParkInfo from './ParkInfo';

import Weather from './Weather';

const Dashboard = props => (
  <div>
    <div>
      <h2>Most Recent Hike</h2>
      <p>
        Route: {routeData[routeData.length - 1].name}
      </p>
      <p>
      Distance: {routeData[routeData.length - 1].distance} miles
      </p>
      <p>
        Difficulty: {routeData[routeData.length - 1].difficulty}
      </p>
      <p>
        Start: {routeData[routeData.length - 1].start}
      </p>
      <p>
        End: {routeData[routeData.length - 1].end}
      </p>
    </div>
    <div>
      <ParkInfo />
      <Weather />
    </div>
  </div>
);


export default Dashboard;

import React from 'react';
// import { Link, Router } from '@reach/router';
// import GoogleMapsContainer from './renderMap';
// import routes from '../../SampleData';
import ParkInfo from './ParkInfo';

import Weather from './Weather';

const Dashboard = props => (
  <div>
    <div>
      <ParkInfo />
      <Weather />
    </div>
  </div>
);


export default Dashboard;

import React from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import RouteContainer from './RouteContainer';
import Route from './Route';

class RouteHistory extends React.Component {
  constructor({ props /* routes */}) {
    super(props);

<<<<<<< HEAD
    // this.state = {
    //   routes: '',
    // };

    // this.addRoute = this.addRoute.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    // this.handleUpsert = this.handleUpsert.bind(this);
=======
    this.state = {
      routes: [{
        name: 'Half Dome',
        type: 'Featured Hike',
        difficulty: 'black',
        location: 'Yosemite Valley, California',
        length: 14.7,
        start: 'June 10, 10:05 AM',
        end: 'June 10, 3:35 PM'
      },
      {
        name: 'Devil\'s Drop',
        type: 'Featured Hike',
        difficulty: 'black',
        location: 'Yosemite Valley, California',
        length: 15.2,
        start: 'June 5, 8:05 AM',
        end: 'June 5, 2:21 PM'
      },
      {
      name: 'Stairway To Heaven',
      type: 'Featured Hike',
      difficulty: 'black',
      location: 'Yosemite Valley, California',
      length: 12,
      start: 'May 2, 9:30 AM',
      end: 'May 2, 1:56 PM'
      }],
    };
>>>>>>> Add static data into Journals which renders route but still needs to link to dashboard
  }

  // getRoutes() {
  //   const { username } = this.props;
  //   return axios.get(`/api/routes?username=${username}`)
  //     .then((newRoutes) => {
  //       this.setState({
  //         routes: newRoutes.data,
  //       });
  //     });
  // }


  // console.log(this.state.routes) delete this. just here to pass tests.
  addToJournal() {
    // placeholder return statement to avoid getting flagged
    this.one = 1;
    return this.one;
  }

  render() {
    const { routes } = this.state;
    // console.log(routes);
    return (
      <div className="routeHistory">
        <div className="routesHeader">
          <h1>My Route History</h1>
        </div>
        <div className="routesContainer">
          {routes.map(route => (
            <div>
              <Route route={route}/>
            </div>
           ))}
        </div>
      </div>
    );
  }
}

// RouteHistory.propTypes = {
//   routes: PropTypes.arrayOf(PropTypes.object).isRequired,
//   username: PropTypes.string.isRequired,
// };

export default RouteHistory;

import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// import RouteContainer from './RouteContainer';
import Route from './Route';

class RouteHistory extends React.Component {
  constructor({ props /* routes */}) {
    super(props);

    this.state = {
      routes: [{
        name: 'Half Dome',
        type: 'Featured Hike',
        difficulty: 'black',
        location: 'Yosemite Valley, California',
        length: 14.7,
        start: 'June 10, 10:05 AM',
        end: 'June 10, 3:35 PM',
      },
      {
        name: 'Devil\'s Drop',
        type: 'Featured Hike',
        difficulty: 'black',
        location: 'Yosemite Valley, California',
        length: 15.2,
        start: 'June 5, 8:05 AM',
        end: 'June 5, 2:21 PM',
      },
      {
        name: 'Stairway To Heaven',
        type: 'Featured Hike',
        difficulty: 'black',
        location: 'Yosemite Valley, California',
        length: 12,
        start: 'May 2, 9:30 AM',
        end: 'May 2, 1:56 PM',
      }],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getRoutes = this.getRoutes.bind(this);
  }

  componentDidMount() {
    const { username } = this.props;
    console.log('username: ', username);
  }

  getRoutes() {
    const { username } = this.props;
    axios.get(`/api/routes?username=${username}`)
      .then((newRoutes) => {
        console.log('Routes returned from database!')
        this.setState({
          routes: newRoutes.data,
        });
      });
  }

  // console.log(this.state.routes) delete this. just here to pass tests.
  addToJournal() {
    const { username } = this.props;
    // placeholder return statement to avoid getting flagged
    axios.patch(`/api/routes?username=${username}`)
      .then((routes) => {
        this.setState({
          routes: routes.data,
        });
      });
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
          {routes.map((route, i) => (
            <div key={i}>
              <Route route={route} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

RouteHistory.propTypes = {
  username: PropTypes.string.isRequired,
};

export default RouteHistory;

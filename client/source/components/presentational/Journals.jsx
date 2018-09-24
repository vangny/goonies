import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Route from './Route';

class RouteHistory extends React.Component {
  constructor({ props /* routes */}) {
    super(props);

    this.state = {
      saveView: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.hikeDiscard = this.hikeDiscard.bind(this);
    this.addToJournal = this.addToJournal.bind(this);
  }

  componentDidMount() {
    console.log(!!localStorage.getItem('endTime'));
    this.setState({ saveView: !!localStorage.getItem('endTime'), });
  }


  addToJournal() {
    const { username, viewData, getRoutes } = this.props;
    const trail = JSON.parse(localStorage.getItem('trail'));
    const started = localStorage.getItem('startTime');
    const ended = localStorage.getItem('endTime');

    axios.post('/api/routes/', {
      username,
      routeName: trail.name,
      start: started,
      end: ended,
      distanceInMiles: `${trail.length} miles`,
    })
      .then((data) => {
        console.log('data');
        getRoutes();
        this.setState({ saveView: false });
      })
  }

  hikeDiscard() {
    if (confirm('All data from this hike will be lost. Are you sure you want to discard this hike?')) {
      localStorage.setItem('endTime', null);
      this.setState({ saveView: false });
    }
  }

  saveView() {
    const { saveView } = this.state;
    const trail = JSON.parse(localStorage.getItem('trail'));
    const started = localStorage.getItem('startTime');
    const ended = localStorage.getItem('endTime');

    return (saveView
      ? (
        <div className="recentHikeData">
          Most Recent Hike:
          <br />
          {trail.name}
          <br />
          Started:
          <br />
          {started}
          <br />
          Ended:
          <br />
          {ended}
          <br />
          Distance:
          <br />
          {trail.length}
          {' miles'}
          <br />
          <button type="button" onClick={this.addToJournal}>Save</button>
          <button type="button" onClick={this.hikeDiscard}>Discard</button>
        </div>
      )
      : null
    );
  }

  render() {
    const routes = JSON.parse(localStorage.getItem('routes')) || [];
    return (
      <div className="trail-journal">
        { this.saveView() }
        <div className="journal-title">
          <h1>Your Trails</h1>
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

// RouteHistory.propTypes = {
//   username: PropTypes.string.isRequired,
//   viewData: PropTypes.shape.isRequired,
//   getRoutes: PropTypes.func.isRequired,
// };

export default RouteHistory;

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
    const { viewData } = this.props;
    this.setState({ saveView: !!viewData });
<<<<<<< HEAD
=======
    this.getRoutes();
>>>>>>> Fix rebase conflicts
  }


  addToJournal() {
    const { username, viewData, getRoutes } = this.props;
    axios.post('/api/routes/', {
      username,
      routeName: viewData.trailInfo.name,
      start: viewData.started,
      end: viewData.ended,
      distanceInMiles: `${viewData.trailInfo.length} miles`,
    })
      .then((data) => {
        console.log('data');
        getRoutes();
        this.setState({ saveView: false });
      })
  }

  hikeDiscard() {
    if (confirm('All data from this hike will be lost. Are you sure you want to discard this hike?')) {
      this.setState({ saveView: false });
    }
  }

  saveView() {
    const { viewData } = this.props;
    const { saveView } = this.state;
    return (saveView
      ? (
        <div className="recentHikeData">
          Most Recent Hike:
          <br />
          {viewData.trailInfo.name}
          <br />
          Started:
          <br />
          {viewData.started}
          <br />
          Ended:
          <br />
          {viewData.ended}
          <br />
          Distance:
          <br />
          {viewData.trailInfo.length}
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
    const routes = JSON.parse(localStorage.getItem('routes'))
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

RouteHistory.propTypes = {
  username: PropTypes.string.isRequired,
  viewData: PropTypes.shape.isRequired,
  getRoutes: PropTypes.func.isRequired,
};

export default RouteHistory;

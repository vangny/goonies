import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Route from './Route';

class RouteHistory extends React.Component {
  constructor({ props /* routes */}) {
    super(props);

    this.state = {
      saveView: false,
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
    this.hikeDiscard = this.hikeDiscard.bind(this);
    this.addToJournal = this.addToJournal.bind(this);
  }

  componentDidMount() {
    const { viewData } = this.props;
    this.setState({ saveView: !!viewData });
    this.getRoutes();
  }

  getRoutes() {
    const { username, vie } = this.props;
    
    axios.get(`/api/routes?username=${username}`)
    .then((newRoutes) => {
      console.log('routes from db: ', newRoutes);
      this.setState({
        routes: newRoutes.data,
      });
    });
  }

  addToJournal() {
    const { username, viewData } = this.props;
    axios.post('/api/routes/', {
      username,
      routeName: viewData.trailInfo.name,
      start: viewData.started,
      end: viewData.ended,
      distanceInMiles: `${viewData.trailInfo.length} miles`,
    })
      .then((data) => {
        console.log('data');
        this.getRoutes();
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
    const { routes } = this.state;
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
};

export default RouteHistory;

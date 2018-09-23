import React from 'react';
import PropTypes from 'prop-types';

import {
  withScriptjs, withGoogleMap, GoogleMap, Marker,
} from 'react-google-maps';

import axios from 'axios';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: '',
      hikingTrails: [],
    };
    this.getTrailsData = this.getTrailsData.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }

  componentDidMount() {
    this.getTrailsData();
    this.getApiKey();
  }

  getApiKey() {
    axios.get('/api/key')
      .then((response) => {
        console.log('apikey?', response.data);
        this.setState({
          apiKey: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error, 'Could not get api key');
      });
  }

  getTrailsData() {
    axios.get('/api/trails')
      .then((response) => {
        console.log(response.data.trails);
        this.setState({
          hikingTrails: response.data.trails,
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error, 'Could not get weather data');
      });
  }

  handleMarkerClick(trail) {
    const { getTrail } = this.props;
    getTrail(trail);
  }

  render() {
    const markers = this.state.hikingTrails.map((trail) => (
      <Marker
        position={{
          lat: trail.latitude,
          lng: trail.longitude,
        }}
        onClick={() => this.handleMarkerClick(trail)}
      />
    ));
    const YosemiteMap = withScriptjs(withGoogleMap(() => (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 37.749669, lng: -119.555108 }}
      >
        {markers}
      </GoogleMap>
    )));
    return (
      <div>
        <YosemiteMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${this.state.apiKey}`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '500px', width: '500px' }} />}
          mapElement={<div style={{ height: '100%', width: '100%' }} />}
        />
      </div>
    );
  }
}

Map.propTypes = {
  getTrail: PropTypes.func.isRequired,
};

export default Map;

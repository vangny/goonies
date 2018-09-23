import React from 'react';
import axios from 'axios';
import ForecastForm from './ForecastForm';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: '',
      currentClouds: '',
      currentHumidity: '',
      currentWind: '',
      currentLocation: '',
      currentWeather: '',
      fiveDayForecast: [],
    };
  }

  componentDidMount() {
    this.getCurrentWeatherData();
    this.getFiveDayForcast();
  }

  getCurrentWeatherData() {
    axios.get('/api/weathercurrent')
      .then((response) => {
        this.setState({
          currentTemp: Math.round(response.data.main.temp),
          currentClouds: response.data.clouds.all,
          currentHumidity: response.data.main.humidity,
          currentWind: response.data.wind.speed,
          currentLocation: response.data.name,
          currentWeather: response.data.weather[0].description,
        }, () => this.render());
      })
      .catch((error) => {
        console.log(error);
        alert(error, 'Could not get weather data');
      });
  }
  // HAS 8 FORECAST PER 1 DAY

  getFiveDayForcast() {
    axios.get('/api/weatherfive')
      .then((response) => {
        this.setState({
          fiveDayForecast: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error, 'Could not get weather data');
      });
  }

  render() {
    const {
      currentTemp,
      currentClouds,
      currentHumidity,
      currentWind,
      currentLocation,
      currentWeather,
      fiveDayForecast,
    } = this.state;
    return (
      <div className="all-weather">
        <h3>Current Weather</h3>
        <div className="current-weather">
          <h4>
            Location:
            <br />
            {currentLocation}
          </h4>
          <h4>
          Forecast:
            <br />
            {currentWeather}
          </h4>
          <p>
            Temp:
            <br />
            {currentTemp}
            {' '}
            F°
          </p>
          <p>
            Clouds:
            <br />
            {currentClouds}
            %
          </p>
          <p>
            Humidity:
            <br />
            {currentHumidity}
            %
          </p>
          <p>
            Wind:
            <br />
            {currentWind}
            {' '}
            mph
          </p>
        </div>
        <div>
          <ForecastForm fiveday={fiveDayForecast} />
        </div>
      </div>
    );
  }
}

export default Weather;

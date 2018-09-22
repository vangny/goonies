
import React from 'react';
import PropTypes from 'prop-types';


class ForecastForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tomorrowHigh: '',
      tomorrowLow: '',
      tomorrowWeather: '',
      day2Low: '',
      day2High: '',
      day2Weather: '',
      day3High: '',
      day3Low: '',
      day3Weather: '',
    };
  }

  componentDidUpdate(prevProps) {
    const { fiveday } = this.props;
    // const fiveday = 'change this';
    if (fiveday !== prevProps.fiveday) {
      this.getDay2HighLow();
      this.getDay3HighLow();
      this.getTomHighLow();
    }
  }

  getTomHighLow() {
    const { fiveday } = this.props;
    // const fiveday = 'change this';
    let high = -Infinity;
    let low = Infinity;
    const tomo = fiveday.slice(0, 8);
    for (let i = 0; i < 8; i += 1) {
      if (tomo[i].main.temp > high) {
        high = tomo[i].main.temp;
      } else if (tomo[i].main.temp < low) {
        low = tomo[i].main.temp;
      }
    }
    this.setState({
      tomorrowHigh: Math.round(high),
      tomorrowLow: Math.round(low),
      tomorrowWeather: tomo[3].weather[0].description,
    });
  }

  getDay2HighLow() {
    const { fiveday } = this.props;
    // const fiveday = 'change this';
    let high = -Infinity;
    let low = Infinity;
    const day2 = fiveday.slice(8, 16);
    for (let i = 0; i < 8; i += 1) {
      if (day2[i].main.temp > high) {
        high = day2[i].main.temp;
      } else if (day2[i].main.temp < low) {
        low = day2[i].main.temp;
      }
    }
    this.setState({
      day2High: Math.round(high),
      day2Low: Math.round(low),
      day2Weather: day2[3].weather[0].description,
    });
  }

  getDay3HighLow() {
    const { fiveday } = this.props;
    // const fiveday = 'change this';
    let high = -Infinity;
    let low = Infinity;
    const day3 = fiveday.slice(16, 24);
    for (let i = 0; i < 8; i += 1) {
      if (day3[i].main.temp > high) {
        high = day3[i].main.temp;
      } else if (day3[i].main.temp < low) {
        low = day3[i].main.temp;
      }
    }
    this.setState({
      day3High: Math.round(high),
      day3Low: Math.round(low),
      day3Weather: day3[3].weather[0].description,

    });
  }

  render() {
    const {
      tomorrowHigh,
      tomorrowLow,
      tomorrowWeather,
      day2Low,
      day2High,
      day2Weather,
      day3High,
      day3Low,
      day3Weather,
    } = this.state;
    return (
      <div className="three-day-forecast">
        <h3>3 Day Forecast</h3>
        <div className="forecast">
          <div className="tomorrow">
            <h4> Tomorrow </h4>
            <p>Forecast: {tomorrowWeather}</p>
            <p>
              High Temp:
              {' '}
              {tomorrowHigh}
              {' '}
              F°
            </p>
            <p>
              Low Temp:
              {' '}
              {tomorrowLow}
              {' '}
              F°
            </p>
          </div>
          <div className="day2">
            <h4> Day 2 </h4>
            <p>Forecast: {day2Weather}</p>
            <p>
              High Temp:
              {' '}
              {day2High}
              {' '}
              F°
            </p>
            <p>
              Low Temp:
              {' '}
              {day2Low}
              {' '}
              F°
            </p>
          </div>
          <div className="day3">
            <h4> Day 3 </h4>
            <p>Forecast: {day3Weather}</p>
            <p>
              High Temp:
              {' '}
              {day3High}
              {' '}
              F°
              {' '}
            </p>
            <p>
              Low Temp:
              {' '}
              {day3Low}
              F°
            </p>
          </div>
        </div>
      </div>
    );
  }
}

ForecastForm.propTypes = {
  fiveday: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ForecastForm;

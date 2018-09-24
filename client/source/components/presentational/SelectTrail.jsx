import React from 'react';
import PropTypes from 'prop-types';

class SelectTrail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trail: {},
    };
    this.startHandler = this.startHandler.bind(this);
  }

  componentDidMount() {
    this.setState({
      trail: JSON.parse(localStorage.getItem('trail')),
    });
  }

  startHandler(event) {
    const { startHike } = this.props;
    startHike();
  }

  render() {
    const { trail } = this.state;
    const { toggleViews } = this.props;
    return (
      <div className="selected-trail">
        <div className="trail-title">
          <h3>{trail.name}</h3>
        </div>
        <div className="trail-container">
        <div className="trail-img">
          <img src={trail.imgSmallMed} alt={trail.imgMedium} />
        </div>
          <div className="trail-info">
            <p className="trail-summary">{trail.summary}</p>
            <p className="trail-details">{`Length: ${trail.length} miles`}</p>
            <p className="trail-details">{`Rating: ${trail.stars} / 5 stars`}</p>
            <p className="trail-details">{`Total Votes: ${trail.starVotes}`}</p>
              <button className="trail-button" id="start" type="button" onClick={this.startHandler}>Start</button>
          </div>
        </div>
        <br />
        <a onClick={() => toggleViews('map')}>Return to Map</a>
      </div>
    );
  }
}


// const SelectTrail = ({ toggleViews, trail, startHike }) => {
//   const startHandler = (event) => {
//     startHike();
//   };

//   
// };

SelectTrail.propTypes = {
  toggleViews: PropTypes.func.isRequired,
};

export default SelectTrail;

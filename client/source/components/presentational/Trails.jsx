import React from 'react';
import PropTypes from 'prop-types';
import Map from './Map';
import Journals from './Journals';
import SelectTrail from './SelectTrail';
import StartTrail from './StartTrail';


class Trails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      view: 'map',
      trailInfo: {},
      started: '',
      ended: '',
    };
    this.toggleViews = this.toggleViews.bind(this);
    this.viewHandler = this.viewHandler.bind(this);
    this.getTrail = this.getTrail.bind(this);
    this.startHike = this.startHike.bind(this);
    this.endHike = this.endHike.bind(this);
  }

  getTrail(trail) {
    this.setState({
      trailInfo: trail,
    }, () => {
      this.toggleViews('trail');
    });
  }

  startHike() {
    const start = new Date().toLocaleString();
    this.setState({
      started: start,
    }, () => {
      this.toggleViews('start');
    });
  }

  endHike() {
    const { changeOuterView } = this.props;
    const end = new Date().toLocaleString();
    this.setState({
      ended: end,
    }, () => {
      //super toggle view
      changeOuterView('journal');
    });
  }

  toggleViews(view) {
    this.setState({
      view,
      });
  }

  viewHandler() {
    const { view, trailInfo } = this.state;
    if (view === 'map') {
      return <Map getTrail={this.getTrail} />
    } else if (view === 'trail') {
      return <SelectTrail toggleViews={this.toggleViews} trailInfo={trailInfo} startHike={this.startHike} />
    } else if (view === 'start') {
      return <StartTrail endHike={this.endHike} />
    }
    
    return;
  }


  render() {
    return (
      <div>
        <h3>Your Map</h3>
        <div>
          {this.viewHandler()}
        </div>
      </div>
    );
  }
}

export default Trails;

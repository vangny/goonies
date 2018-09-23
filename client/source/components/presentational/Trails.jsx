import React from 'react';
// import PropTypes from 'prop-types';
import Map from './Map';
import Journals from './Journals';
import SelectTrail from './SelectTrail';


class Trails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      viewMap: true,
      viewTrail: false,
      trailInfo: {},
    };
    this.toggleViews = this.toggleViews.bind(this);
    this.viewHandler = this.viewHandler.bind(this);
    this.getTrail = this.getTrail.bind(this);
  }

  getTrail(trail) {
    this.setState({
      trailInfo: trail,
    }, () => {
      this.toggleViews();
    });
  }

  toggleViews() {
    const { viewTrail, viewMap } = this.state;
    this.setState({
      viewTrail: !viewTrail,
      viewMap: !viewMap,
      });
  }

  viewHandler() {
    const { viewTrail, viewMap, trailInfo } = this.state;
    if (viewMap) {
      return <Map getTrail={this.getTrail} />
    } else if (viewTrail) {
      return <SelectTrail toggleViews={this.toggleViews} trailInfo={trailInfo} />
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

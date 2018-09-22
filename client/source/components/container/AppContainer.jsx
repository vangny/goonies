import React from 'react';
import ReactDOM from 'react-dom';
import MapYourRoute from '../presentational/Dashboard';
import Login from '../presentational/Login';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      id: 0,
    };

    this.transferUserInfo = this.transferUserInfo.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    this.setState({ id: localStorage.getItem('id') });
  }

  transferUserInfo(userData) {
    localStorage.setItem('id', userData.id);
    this.setState({
      loggedIn: true,
    });
    // console.log('localStorage: ', localStorage);
  }

  checkSession() {
    const { loggedIn, id } = this.state;
    if (loggedIn) {
      return <MapYourRoute id={id} logOut={this.logOut} />;// dashboard
    }
    return <Login transferUserInfo={this.transferUserInfo} />;
  }

  logOut() {
    this.setState({ loggedIn: false });
    localStorage.clear();
  }

  render() {
    return (
      <div className="header">
        <h1 className="logo">Backpacker</h1>
        {this.checkSession()}
      </div>
    );
  }
}
const { document } = global;
ReactDOM.render(<AppContainer />, document.getElementById('app'));

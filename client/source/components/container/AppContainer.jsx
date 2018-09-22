import React from 'react';
import ReactDOM from 'react-dom';
// import { Link, Router} from '@reach/router';
import Dashboard from '../presentational/Dashboard';
import Login from '../presentational/Login';
import MapYourRoute from '../presentational/MapYourRoute';
import Journals from '../presentational/Journals';
import Profile from '../presentational/UserProfile';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: '',
      view: 'dash',
    };
    this.transferUserInfo = this.transferUserInfo.bind(this);
    this.logOut = this.logOut.bind(this);
    this.viewHandler = this.viewHandler.bind(this);
  }

  componentDidMount() {
    this.setState({
      loggedIn: localStorage.getItem('loggedIn'),
      username: localStorage.getItem('username'),
    });
  }

  transferUserInfo(userData) {
    this.setState({
      loggedIn: true,
      username: userData,
    });
    localStorage.setItem('loggedIn', true);
    localStorage.setItem('username', userData);
    console.log('userData: ', userData)
  }

  changeView(view) {
    this.setState({ view });
  }

  viewHandler() {
    const { loggedIn, username, view } = this.state;
    if (loggedIn) {
      if (view === 'dash') {
        return <Dashboard path="/dash" username={username} logOut={this.logOut} />;
      }
      if (view === 'journal') {
        return <Journals username={username} />;
      }
      if (view === 'trails') {
        return <MapYourRoute />;
      }
      if (view === 'profile') {
        return <Profile username={username}/>;
      }
    }
    return <Login transferUserInfo={this.transferUserInfo} />;
  }

  logOut() {
    this.setState({ loggedIn: false });
    localStorage.clear();
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <div className="header">
        {
          loggedIn ? (
          <nav>
            <span type="button" id="dash" onClick={() => this.changeView('dash')}>Dashboard</span>
            <span type="button" id="journals" onClick={() => this.changeView('journal')}>Journals</span>
            <span type="button" id="trailInfo" onClick={() => this.changeView('trails')}>TrailInfo</span>
            <span type="button" id="profile" onClick={() => this.changeView('profile')}>Profile</span>
            <span type="button" id="logOut" onClick={this.logOut}>Log Out</span>
          </nav>) : null
        }
        <h1 className="logo">Backpacker</h1>
        {this.viewHandler()}
      </div>
    );
  }
}
const { document } = global;
ReactDOM.render(<AppContainer />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import { Link, Router} from '@reach/router';
import Dashboard from '../presentational/Dashboard';
import Login from '../presentational/Login';
import Trails from '../presentational/Trails';
import Journals from '../presentational/Journals';
import Profile from '../presentational/UserProfile';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: '',
      view: 'dash',
      viewData: null,
      routes: localStorage.getItem('routes'),
    };
    this.transferUserInfo = this.transferUserInfo.bind(this);
    this.logOut = this.logOut.bind(this);
    this.changeView = this.changeView.bind(this);
    this.viewHandler = this.viewHandler.bind(this);
    this.getRoutes = this.getRoutes.bind(this);
  }

  componentDidMount() {
    this.setState({
      loggedIn: localStorage.getItem('loggedIn'),
      username: localStorage.getItem('username'),
    });
  }


  getRoutes() {
    const { username } = this.state;
    axios.get(`/api/routes?username=${username}`)
      .then((newRoutes) => {
        console.log('routes from db: ', newRoutes);
        localStorage.setItem('routes', JSON.stringify(newRoutes.data));
        this.setState({
          routes: JSON.parse(localStorage.getItem('routes')),
          loggedIn: true,
        });
        console.log('getItem: ', JSON.parse(localStorage.getItem('routes')));
      });
  }

  transferUserInfo(userData) {
    localStorage.setItem('loggedIn', true);
    localStorage.setItem('username', userData);
    this.setState({
      username: userData,
    }, () => {
      console.log('getting routes...');
      this.getRoutes();
    });
  }


  changeView(view) {
    this.setState({
      view,
    }, () => {console.log(view);});
  }

  viewHandler() {
    const { loggedIn, username, view,  } = this.state;
    if (loggedIn) {
      const routes = JSON.parse(localStorage.getItem('routes')) || [];
      console.log('routes: ', routes);
      if (view === 'dash') {
        return <Dashboard username={username} logOut={this.logOut} handleChange={this.changeView} mostRecentHike={routes[0]} />;
      }
      if (view === 'journal') {
        return <Journals username={username} getRoutes={this.getRoutes} routes={routes} />;
      }
      if (view === 'trails') {
        return <Trails changeOuterView={this.changeView} />;
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
      <div>
        {
          loggedIn ? (
            <div className="container">
              <div className="sidebar">
                <nav>
                  <div>
                    <span className="menu-logo" id="logo" onClick={() => this.changeView('dash')}>BackPacker</span>
                    <span className="menu" id="dash" onClick={() => this.changeView('dash')}>Dashboard</span>
                    <span className="menu" id="journals" onClick={() => this.changeView('journal')}>Trail Journal</span>
                    <span className="menu" id="trailInfo" onClick={() => this.changeView('trails')}>Trails</span>
                    <span className="menu" id="profile" onClick={() => this.changeView('profile')}>Profile</span>
                    <span className="menu" id="logOut" onClick={this.logOut}>Logout</span>
                  </div>
                </nav>
              </div>
              <div className="content">
                {this.viewHandler()}
              </div>
            </div>
          )
            : (
              <div className="landing">
                {this.viewHandler()}
              </div>
            )
        }
      </div>
    );
  }
}
const { document } = global;
ReactDOM.render(<AppContainer />, document.getElementById('app'));

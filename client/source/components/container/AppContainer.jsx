import React from 'react';
import ReactDOM from 'react-dom';
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
      session: '',
      id: 0,
      view: 'dash',
    };
    this.transferUserInfo = this.transferUserInfo.bind(this);
    this.logOut = this.logOut.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    this.setState({
      loggedIn: localStorage.getItem('loggedIn'),
      id: localStorage.getItem('id'),
    });
  }

  transferUserInfo(userData) {
    this.setState({
      loggedIn: true,
    });
    localStorage.setItem('loggedIn', true);
    localStorage.setItem('id', userData.id);
    // console.log('localStorage: ', localStorage);
  }

  changeView(view) {
    this.setState({ view });
  }

  viewHandler() {
    const { loggedIn, id, view } = this.state;
    if (loggedIn) {
      if (view === 'dash') {
        return <Dashboard id={id} logOut={this.logOut} handleChange={this.changeView} />;// dashboard
      }
      if (view === 'journal') {
        return <Journals />;
      }
      if (view === 'trails') {
        return <MapYourRoute />;
      }
      if (view === 'profile') {
        return <Profile />;
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
      <div className="container">
        {
          loggedIn ? (
            <div className="sidebar">
              <nav>
               <div>
                <span className="menu" id="logo" onClick={() => this.changeView('dash')}>BackPacker</span>
                <span className="menu" id="dash" onClick={() => this.changeView('dash')}>Dashboard</span>
                <span className="menu" id="journals" onClick={() => this.changeView('journal')}>Journals</span>
                <span className="menu" id="trailInfo" onClick={() => this.changeView('trails')}>TrailInfo</span>
                <span className="menu" id="profile" onClick={() => this.changeView('profile')}>Profile</span>
                <span className="menu" id="logOut" onClick={this.logOut}>Log Out</span>
                </div>
              </nav>
            </div>) : null
        }
        <div className="content">
          {this.viewHandler()}
        </div>
      </div>
    );
  }
}
const { document } = global;
ReactDOM.render(<AppContainer />, document.getElementById('app'));

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
    const { loggedIn, id, view} = this.state;
    if (loggedIn) {
      if (view === 'dash') {
        return <Dashboard id={id} logOut={this.logOut} />;// dashboard
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
      <div className="header">
        { 
          loggedIn ? (
          <nav>
            <button type="button" id="dash" onClick={()=> this.changeView('dash')}>Dashboard</button>
            <button type="button" id="journals" onClick={() => this.changeView('journal')}>Journals</button>
            <button type="button" id="trailInfo" onClick={() => this.changeView('trails')}>TrailInfo</button>
            <button type="button" id="profile" onClick={() => this.changeView('profile')}>UserProfile</button>
            <button type="button" id="logOut" onClick={this.logOut}>Log Out</button>
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

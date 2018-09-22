import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../presentational/Dashboard';
import Login from '../presentational/Login';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      session: '',
      id: 0,
    };

    this.transferUserInfo = this.transferUserInfo.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    this.setState({ loggedIn: localStorage.getItem('loggedIn') });
  }

  transferUserInfo(userData) {
    this.setState({
      loggedIn: true,
    });
    localStorage.setItem('loggedIn', true);
    localStorage.setItem('id', userData.id);
    // console.log('localStorage: ', localStorage);
  }

  checkSession() {
    const { loggedIn, id } = this.state;
    if (loggedIn) {
      return <Dashboard id={id} logOut={this.logOut} />;// dashboard
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
        <nav>
          <div></div>
          <div className="logo"><a href="/">Backpacker</a></div>
          <div>
            <ul>
              <li><a href="/">Profile</a></li>
              <li><a href="/">Logout</a></li>
            </ul>
          </div>
        </nav>
        {this.checkSession()}
      </div>
    );
  }
}
const { document } = global;
ReactDOM.render(<AppContainer />, document.getElementById('app'));

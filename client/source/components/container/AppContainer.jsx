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
  
  }

  viewHandler() {
    const { loggedIn, id, view} = this.state;
    if (loggedIn) {
<<<<<<< Updated upstream
      return <Dashboard id={id} logOut={this.logOut} />;// dashboard
=======
      if (view === 'dash') {
        return <MapYourRoute id={id} logOut={this.logOut} />;
      }
      if (view === 'journal') {
        return <Journals />;
      }

>>>>>>> Stashed changes
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
        {this.viewHandler()}
      </div>
    );
  }
}
const { document } = global;
ReactDOM.render(<AppContainer />, document.getElementById('app'));

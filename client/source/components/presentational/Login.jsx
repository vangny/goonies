import React from 'react';
import axios from 'axios';
// import { Redirect } from '@reach/router';
import PropTypes from 'prop-types';
import SignUp from './SignUp';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      view: 'login',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.newUserCreated = this.newUserCreated.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleLogin() {
    const { username, password } = this.state;
    const LoginInfo = { username, password };
    const { transferUserInfo } = this.props;

    axios.get('/api/users/login', {
      params: LoginInfo,
    })
      .then((res) => {
        if (res.data === 'Invalid Password') {
          alert('Invalid username and password. Please try again.');
        } else {
          transferUserInfo(res.data);
        }
      })
      .catch((err) => {
        console.log('login error', err);
      });
  }

  handleNewUser() {
    this.setState({
      view: 'sign-up',
    });
  }

  newUserCreated() {
    this.setState({
      view: 'login',
    });
  }

  renderView() {
    const { view } = this.state;

    if (view === 'login') {
      return (
        <div className="login">
          <h1 className="login-title">BackPacker</h1>
          <form>
            <div className="loginfield">
              <label htmlFor="username">
                <h3>Username:</h3>
                <input className="login-input" type="text" name="username" onChange={this.handleChange} />
                <br />
              </label>
              <br />
              <label htmlFor="password">
                <h3>Password:</h3>
                <input className="login-input" type="password" name="password" onChange={this.handleChange} />
              </label>
              <br />
            </div>
            <div className="loginPageButtons">
              <input className="login-button" type="button" value="Login" onClick={this.handleLogin} />
              <br />
              <input className="login-button" id="register" type="button" value="New User? Register" onClick={this.handleNewUser} />
            </div>
          </form>
        </div>
      );
    } if (view === 'sign-up') {
      return <SignUp newUserCreated={this.newUserCreated} />;
    }
    return 'done';
  }

  render() {
    return this.renderView();
  }
}

Login.propTypes = {
  transferUserInfo: PropTypes.func.isRequired,
};

export default Login;

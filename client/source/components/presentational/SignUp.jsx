import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      experience: 'Novice',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit() {
    const { username, password, experience } = this.state;
    const userInfo = { username, password, experience };
    const { newUserCreated } = this.props;
    axios.post('/api/users/create', userInfo)
      .then((res) => {
        if (res.data === 'Username Taken') {
          alert('That username is already taken. Please choose another username.');
        } else {
          //  success! redirect
          newUserCreated();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { experience } = this.state;

    return (
      <div className="login">
        <h1 className="login-title">BackPacker</h1>
        <form>
          <div className="loginfield">
            <label htmlFor="username">
              <h3>Username:</h3>
              <input className="register-input" type="text" name="username" onChange={this.handleChange} />
            </label>
            <br />
            <label htmlFor="password">
              <h3>Password:</h3>
              <input className="register-input" type="password" name="password" onChange={this.handleChange} />
            </label>
            <br />
            <p>Experience Level:</p>
            <select className="register-input" name="experience" value={experience} onChange={this.handleChange}>
              <option value="Novice">Novice</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <br />
            <input className="register-button" type="button" value="Submit" onClick={this.handleSubmit} />
          </div>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  newUserCreated: PropTypes.func.isRequired,
};


export default SignUp;

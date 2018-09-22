import React from 'react';
import PropTypes from 'prop-types';

class UsernameEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUsername: '',
    };
    this.handleChange = this.handleChange.bind(this);
    // this.changeUsername = this.changeUsername.bind(this);
  }

  handleChange(e) {
    this.setState({
      newUsername: e.target.value,
    });
  }

  // changeUsername() {
  //   const { newUsername } = this.state;
  //   console.log(newUsername);
  // }

  render() {
    const { newUsername } = this.state;
    const { username, handleNewUsername } = this.props;
    console.log(newUsername);
    return (
      <div>
        OldUsername: {' '}
        { username }
        <br />
        <br />
        NewUsername: {' '}
        <input type="text" name="newName" onChange={(e) => this.handleChange(e)} />
        <button type="button" id="usernameChange" onClick={() => handleNewUsername(newUsername)}>Change Name</button>
      </div>
    );
  }
}

UsernameEdit.propTypes = {
  username: PropTypes.string.isRequired,
  // handleCancelChange: PropTypes.func.isRequired,
  handleNewUsername: PropTypes.func.isRequired,
};

export default UsernameEdit;

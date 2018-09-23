import React from 'react';
import PropTypes from 'prop-types';

class ExperienceEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newExperience: 'Novice',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { newExperience } = this.state;
    const { handleNewExperience, handleCancelChange } = this.props;
    return (
      <div>
        <select className="profile-input" name="newExperience" onChange={this.handleChange}>
          <option value="Novice">Novice</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <br />
        <button className="update-button" type="button" onClick={(e) => {handleNewExperience(newExperience)}}>Save</button>
        <button className="update-button" type="button" onClick={() => {handleCancelChange()}}>Cancel</button>
      </div>
    );
  }
}

ExperienceEdit.propTypes = {
  handleCancelChange: PropTypes.func.isRequired,
  handleNewExperience: PropTypes.func.isRequired,
};

export default ExperienceEdit;

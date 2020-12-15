import React, { Component } from 'react';
import './add-team.css';

import Team from '../../Models/Team'

//Import routing
import { Route, Redirect } from 'react-router'


class AddTeamPage extends Component {

  constructor(props) {
    super(props)
    console.log(props);

    this.state = {
      team: new Team("", ""),
      team_added: false
    }


    this.submitTeam = this.submitTeam.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  submitTeam() {
    var team = this.state.team;
    this.props.addTeam(team);

    var new_state = this.state;
    new_state.team_added = true;
    this.setState(new_state);

  }

  handleInputChange(e, type) {

    e.preventDefault();

    var value = e.target.value;

    var new_state = this.state;
    new_state.team[type] = value;

    this.setState(new_state);

  }

  render() {

    console.log(this.state.team_added);
    if (this.state.team_added === true) {
      return (
        <Redirect push to="/"/>
      )
    }

    return (
      <div className = "add-team-page container">
        <h1 className = "text-center">Add a Team</h1>

        <div>

          <div className = "form-group">
            <label>Name: </label>
            <input onChange = {(e) => this.handleInputChange(e, "name")} value = {this.state.team.name} className = "form-control" />
          </div>

          <div className = "form-group">
            <label>Image Url:</label>
            <input onChange = {(e) => this.handleInputChange(e, "img_url")} value = {this.state.team.img_url} className = "form-control" />
          </div>

          <button onClick = {this.submitTeam} className = 'btn btn-success'>
            Submit
          </button>

        </div>

      </div>
    );
  }
}

export default AddTeamPage;

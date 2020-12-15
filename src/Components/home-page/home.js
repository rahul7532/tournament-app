import React, { Component } from 'react';
import './home.css';

import { Route, Redirect } from 'react-router'

class HomePage extends Component {

  constructor(props) {
    super(props)
    console.log(props);

    this.state = {
      addTeam: false,
      viewMatchs: false,
      startTournament: false
    }

    this.renderTeams = this.renderTeams.bind(this);
    this.addTeam = this.addTeam.bind(this);
    this.viewMatchs = this.viewMatchs.bind(this);
    this.startTournament = this.startTournament.bind(this);
  }

  addTeam() {

    var new_state = this.state;
    new_state.addTeam = true;

    this.setState(new_state)

  }

  startTournament() {

    var new_state = this.state;
    new_state.startTournament = true;
    this.setState(new_state);

  }

  viewMatchs() {

    var new_state = this.state;
    new_state.viewMatchs = true;

    this.setState(new_state);

  }

  renderTeams() {

    var team_renders = [];

    if (this.props.teams !== undefined) {
      this.props.teams.map (function (team, idx) {
        team_renders.push(
          <div key = {idx} className = "card card-team">
            <div className = "card-body">
              <img src = {team.img_url} />
              {team.name}
            </div>
          </div>
        )
      });

    }


    return team_renders;

  }

  render() {

    if (this.state.addTeam === true) {
      return (
        <Redirect push to="/add-team"/>
      )
    }else if (this.state.viewMatchs === true) {
      return (
        <Redirect push to="/view-matchs"/>
      )
    }else if (this.state.startTournament === true) {
      return (
        <Redirect push to="/generate-bracket"/>
      )
    }

    return (
      <div className = "home-page container">
        <h1 className = "text-center home-title">Welcome to the Home Page</h1>

        <button onClick = {this.addTeam} type = "button" className = "btn btn-block btn-primary">
          Add Team
        </button>

        <button onClick = {this.viewMatchs} type = "button" className = "btn btn-block btn-success">
          View Matchs
        </button>

        <button onClick = {this.startTournament} type = "button" className = "btn btn-block btn-secondary">
            Start Tournament
        </button>

        <div className = "team-view">
          {this.renderTeams()}
        </div>

      </div>
    );
  }
}

export default HomePage;

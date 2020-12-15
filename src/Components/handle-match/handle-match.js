import React, { Component } from 'react';
import './handle-match.css';

import { Route, Redirect } from 'react-router'

//Import Match model
import Match from '../../Models/Match';

class HandleMatchPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedMatch: this.props.selected_match,
      scoreUpdated: false
    }

    console.log(props);

    this.modifyScore = this.modifyScore.bind(this);
    this.updateScore = this.updateScore.bind(this);

  }

  updateScore() {

    var score_one = this.state.selectedMatch.score_one;
    var score_two = this.state.selectedMatch.score_two;
    var match_id =  this.state.selectedMatch.id;

    this.props.updateScore(score_one, score_two, match_id);
    this.props.updateBracketRoundMatchs(this.props.matchs);

    var new_state = this.state;
    new_state.scoreUpdated = true;
    this.setState(new_state);


  }

  modifyScore(team, type) {

    var score_to_update;

    if (team === "team_one") {
      score_to_update = "score_one"
    }else if (team === "team_two") {
      score_to_update = "score_two"
    }

    var updated_score = this.state.selectedMatch[score_to_update];

    if (type == "sub" && updated_score > 0) {
      updated_score = updated_score - 1;
    }else if (type == "add") {
      updated_score = updated_score + 1;
    }

    var new_state = this.state;
    new_state.selectedMatch[score_to_update] = updated_score;

    this.setState(new_state);

  }

  render() {

    if (this.props.selected_match == undefined || this.state.scoreUpdated === true) {
      return (
        <Redirect to = "/view-matchs" />
      )
    }

    return (
      <div className = "handle-match-page container">
        <h1 className = "title">Handle Match</h1>

        <div>
          <h2>Team One: {this.state.selectedMatch.score_one}</h2>

          <div className = "update-match-actions">
            <button onClick = {(e) => {this.modifyScore("team_one", "add")}} className = "btn btn-success">
                +
            </button>
            <button onClick = {(e) => {this.modifyScore("team_one", "sub")}} className = "btn btn-danger">
                -
            </button>
          </div>


        </div>

        <div>
          <h2>Team Two: {this.props.selected_match.score_two}</h2>

          <div className = "update-match-actions">
            <button onClick = {(e) => {this.modifyScore("team_two", "add")}} className = "btn btn-success">
                  +
            </button>
            <button onClick = {(e) => {this.modifyScore("team_two", "sub")}} className = "btn btn-danger">
                  -
            </button>
          </div>

        </div>

        <button onClick = {this.updateScore} className = 'btn btn-primary btn-update-score'>Update Score</button>

      </div>
    );
  }
}

export default HandleMatchPage;

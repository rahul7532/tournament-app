import React, { Component } from 'react';
import './view-matchs.css';

import { Route, Redirect } from 'react-router'

import Match from '../../Models/Match';

class ViewMatchsPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      update_score: false,
      game_won: false
    }

    //Load in the current round of matchs
    if (this.props.bracket !== null) {
      this.props.getRoundMatchs(this.props.bracket);
    }

    console.log(props);

    this.renderMatchs = this.renderMatchs.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.getTeamName = this.getTeamName.bind(this);
    this.setGameWon = this.setGameWon.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let {bracket,teams,  matchs, round_generated} = nextProps;

    if (bracket !== null) {
      if (bracket.currentRoundCompleted() == true) {
        if (bracket.current_round == bracket.rounds_cnt) {
            var match = bracket.rounds_list[bracket.rounds_cnt - 1][0];
            var winner_id = match.getWinner();

            var winning_team = teams.find(function (team) {
              return team.id === winner_id;
            })

            nextProps.setWinner(winning_team);

            this.setGameWon();
        }else {
          nextProps.getNextRound();
          nextProps.setRoundGenerated(true);
        }

      }
    }


    if (round_generated == true) {
      nextProps.setRoundGenerated(false);
      nextProps.getRoundMatchs(bracket);
    }


  }

  setGameWon() {

    var new_state = this.state;
    new_state.game_won = true;
    this.setState(new_state);

  }

  updateScore(match_id) {

    this.props.setSelectedMatch(match_id);

    var new_state =this.state;
    new_state.update_score = true;
    this.setState(new_state);

  }

  getTeamName(team_id) {

    var team = this.props.teams.find(function (team) {
      return team.id === team_id;
    })

    if (team !== undefined) {
      return team.name;
    }else {
      return "___"
    }
  }

  renderMatchs() {

    var matchs = this.props.matchs;

    var match_elems = [];

    matchs.map (function (match, idx) {
      match_elems.push (
        <div key = {idx} className = "card card-match">
          <div className = "card-body">
            <div className = "text-center">
              <h2>{this.getTeamName(match.team_one)} v {this.getTeamName(match.team_two)}</h2>
              <h3>{match.score_one} - {match.score_two}</h3>
              {(match.winner !== null) &&
                <h3>Winner: {match.winner}</h3>
              }
            </div>


            {(match.winner === null) &&
              <div className = "match-btns">
                <button onClick = {(e) => {this.updateScore(match.id)}} className = "btn btn-primary">
                  Update Score
                </button>
                <button onClick = {(e) => {
                    this.props.endMatch(match.id)
                    this.props.updateRoundMatchs(this.props.matchs)
                    this.props.updateRoundMatchs(this.props.matchs)
                  }} className = "btn btn-danger">
                  End Match
                </button>
              </div>
            }
          </div>
        </div>
      )
    }.bind(this));

    return match_elems;

  }

  render() {

    if (this.state.update_score === true) {
      return (
        <Redirect push to="/handle-match"/>
      )
    }else if (this.state.game_won === true) {
      return (
        <Redirect push to="/game-over"/>
      )
    }

    return (
      <div className = "view-matchs-page container">
        <h1 className = "title text-center">View Matchs</h1>

        {this.props.bracket !== null &&
          this.renderMatchs()
        }

        {this.props.bracket === null &&
          <h1>Sorry no tournament in session</h1>
        }

      </div>
    );
  }
}

export default ViewMatchsPage;

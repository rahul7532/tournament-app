
import Match from './Match';
import Team from './Team';

class Bracket {

  //Constructor for the Bracket class
  constructor(teams_list) {
    this.teams_list = teams_list;
    this.rounds_cnt = Bracket.getRoundsCnt((teams_list).length);
    this.rounds_list = Bracket.generateStartingBracket(teams_list);
    this.current_round = 1;
    this.bracket_completed = false;
  }

  //INTERFACE WITH BRACKET

  //Get all matchs for a given round
  getAllMatchsForRound(round_num) {
    var matchs = this.rounds_list[round_num - 1];
    return matchs;
  }

  //Get all matchs for current round
  getAllMatchsForCurrentRound() {
    return this.getAllMatchsForRound(this.current_round);
  }

  getUncompletedMatchsForRound(current_round) {

    var matchs = this.getAllMatchsForRound(current_round);

    var uncompleted_matchs = matchs.map (function (match, index) {
      var the_match = match;
      the_match.match_index = index;
      return the_match;
    }).filter(function (match) {
      return !match.matchEnded();
    })

    return uncompleted_matchs;
  }

  getUncompletedMatchsForCurrentRound() {
      var uncompleted_matchs = this.getUncompletedMatchsForRound(this.current_round);

      if (uncompleted_matchs.length > 0) {
        var random_match = uncompleted_matchs[Math.floor(Math.random()*uncompleted_matchs.length)]

        return random_match;
      }else {
        return null;
      }

  }

  getRoundCompleted(current_round) {

    var uncompleted_matchs = this.getUncompletedMatchsForRound(current_round);

    return (uncompleted_matchs.length === 0);

  }

  currentRoundCompleted() {
    return (this.getRoundCompleted(this.current_round));
  }

  startNextRound() {

    console.log("CURRENT ROUND" + this.current_round);

    if (this.current_round != (this.round_cnt)) {
      this.generateNewRound();
      this.current_round += 1;
    }else {
      this.bracket_completed = this.bracketEnded();
    }

  }

  generateNewRound() {
    console.log(this.current_round);

    var matchs = this.rounds_list[this.current_round - 1];
    console.log("Matchs:");
    console.log(matchs);

    let that = this;

    var winners = matchs.map(function (match) {
      var winner_id = match.getWinner();

      var winner = that.teams_list.find(function (team) {
        return team.id === winner_id;
      })

      return winner;

    })

    console.log("Winners: ")
    console.log(winners);


    var winners_left = winners.slice(0).filter(function (winner) {
      return winner !== undefined;
    });

    console.log(this.current_round);
    var next_round_matchs = this.rounds_list[this.current_round].slice(0);

    var updated_matchs = next_round_matchs.map (function (match) {

      var team_one;
      var team_two;

      var match;

      console.log(winners_left.length);

      if (winners_left.length >= 2) {
        team_one = winners_left.pop();
        team_two = winners_left.pop();
        match = new Match(team_one.id, team_two.id);
      }else {
        team_one = winners_left.pop();

        match = new Match(team_one.id, null);
        match.setWinner(Match.TEAM_ONE);
      }

      return match;

    })

    this.rounds_list[this.current_round] = updated_matchs;

  }

  bracketEnded() {

    var bracket_ended = true;

    for (var i = 0; i < this.rounds_cnt; i++) {

      var round_completed = this.getRoundCompleted(i + 1);

      if (round_completed == false) {
        bracket_ended = false;
      }else {
        continue;
      }

    }

    return bracket_ended;

  }

  getBracketWinner() {
    if (this.bracket_ended) {
      var final_round = this.rounds_list[this.round_cnt - 1];
      var winner_id = final_round[0].getWinner();

      var winner = this.teams_list.find(function (team) {
        return team.id === winner_id;
      })

      return winner;
    }else {
      return undefined;
    }
  }

  //HELPER FUNCTIONS

  //Generates the tournaments starting bracket
  static generateStartingBracket(teams_list) {

    var amnt_of_teams = teams_list.length;

    var rounds_cnt = Bracket.getRoundsCnt(amnt_of_teams);

    var empty_rounds = Bracket.generateEmptyBracket(amnt_of_teams, rounds_cnt);

    var starting_rounds = empty_rounds.slice(0);
    var teams_left = teams_list.slice(0);

    for (var i = 0; i < starting_rounds[0].length; i ++) {

      var team_one;
      var team_two;

      var match;

      if (teams_left.length >= 2) {
        team_one = teams_left.pop();
        team_two = teams_left.pop();
        match = new Match(team_one.id, team_two.id);
      }else if (teams_left.length <= 0) {
        match = new Match(null, null);
        match.setWinner(Match.TEAM_ONE);
      }else {
        team_one = teams_left.pop();
        match = new Match(team_one.id, null);
        match.setWinner(Match.TEAM_ONE);
      }

      starting_rounds[0][i] = match;

    }

    return starting_rounds;

  }

  //Generates a completely empty bracket
  static generateEmptyBracket(amnt_of_teams, rounds_cnt) {

    var rounds = [];

    if (rounds_cnt === 1) {

      var empty_matchs = Bracket.generateEmptyMatchs(1);

      rounds.push(empty_matchs);

    }else {

      for (var i = 0; i < rounds_cnt; i ++) {

        var matchs_for_round_amnt = Math.pow(2, rounds_cnt - (1 + i));

        var empty_matchs = Bracket.generateEmptyMatchs(matchs_for_round_amnt);

        rounds.push(empty_matchs);

      }


    }

    return rounds;

  }

  //Generates a array of empty matchs
  static generateEmptyMatchs(amnt_of_matchs) {

    var empty_matchs = [];

    for (var i = 0; i < amnt_of_matchs; i ++) {
      empty_matchs.push(Match.emptyMatch());
    }

    return empty_matchs;

  }

  //This function returns the rounds necessary for a given number of teams
  static getRoundsCnt(amnt_of_teams){

    //Get Log Base of 2 of the number of teams and then round that value up
    var round_cnt = Math.ceil(Math.log(amnt_of_teams) / Math.log(2));

    return round_cnt;

  }

}

export default Bracket;

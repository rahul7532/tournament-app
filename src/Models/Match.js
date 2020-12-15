import uid from 'uid';

class Match {

  static get TEAM_ONE() {
    return "team_one";
  }

  static get TEAM_TWO() {
    return "team_two";
  }

  static get TIE() {
    return "Tie"
  }

  constructor(team_one, team_two, winner = null) {
    this.id = uid()
    this.team_one = team_one;
    this.team_two = team_two;
    this.winner = winner;
    this.score_one = 0;
    this.score_two = 0;
  }

  static emptyMatch() {
    return new Match(null, null);
  }

  setWinner(winner) {
    this.winner = winner
  }

  getWinner() {
    console.log("Winner: " + this.winner);

    if (this.winner === Match.TIE) {
      return null;
    }else {
      return this[this.winner];
    }
  }

  setWinnerByScore() {

    if (this.score_one == this.score_two) {
      //Can't have a tie
    }else if (this.score_one > this.score_two) {
      this.setWinner(Match.TEAM_ONE);
    }else if (this.score_one < this.score_two) {
      this.setWinner(Match.TEAM_TWO);
    }

  }

  matchEnded() {
      return this.winner !== null;
  }

}

export default Match;

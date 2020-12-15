import {connect} from 'react-redux';

import {
  endMatch,
  setSelectedMatch,
  getBracketRoundMatchs,
  updateBracketRoundMatchs,
  getNextRound,
  setRoundGenerated,
  setWinningTeam
} from '../Actions';

//Pages
import ViewMatchsPage from '../Components/view-matchs/view-matchs';

const mapStateToProps = state => ({
  matchs: state.matchs,
  bracket: state.bracket,
  teams: state.teams,
  round_generated: state.round_generated
})

const mapDispatchToProps = dispatch => ({
  endMatch: (match_id) => {
    dispatch(endMatch(match_id))
  },
  setSelectedMatch: (match_id) => {
    dispatch(setSelectedMatch(match_id))
  },
  getRoundMatchs: (bracket) => {
    dispatch(getBracketRoundMatchs(bracket))
  },
  updateRoundMatchs: (matchs) => {
    dispatch(updateBracketRoundMatchs(matchs));
  },
  getNextRound: () => {
    dispatch(getNextRound());
  },
  setRoundGenerated: (round_generated) => {
    dispatch(setRoundGenerated(round_generated))
  },
  setWinner: (winner) => {
    dispatch(setWinningTeam(winner))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewMatchsPage);

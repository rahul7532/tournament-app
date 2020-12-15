import {connect} from 'react-redux';

import {
  updateMatchScore,
  updateBracketRoundMatchs
} from '../Actions';

import HandleMatchPage from '../Components/handle-match/handle-match';

const getSelectedMatch = (matchs, match_id) => {
  return matchs.find(function (match) {
    return match.id === match_id;
  })
}

const mapStateToProps = state => ({
  selected_match: getSelectedMatch(state.matchs, state.selected_match),
  matchs: state.matchs
})

const mapDispatchToProps = dispatch => ({
  updateScore: (score_one, score_two, match_id) => {
    dispatch(updateMatchScore(score_one, score_two, match_id))
  },
  updateBracketRoundMatchs: (matchs) => {
    dispatch(updateBracketRoundMatchs(matchs))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HandleMatchPage)

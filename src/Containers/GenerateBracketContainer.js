import {connect} from 'react-redux';

import {
  generateNewBracket
} from '../Actions';

import GenerateBracketPage from '../Components/generate-bracket/generate-bracket';

const mapStateToProps = state => ({
  teams: state.teams
})

const mapDispatchToProps = dispatch => ({
  generateNewBracket: (teams) => {
    dispatch(generateNewBracket(teams));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenerateBracketPage)
